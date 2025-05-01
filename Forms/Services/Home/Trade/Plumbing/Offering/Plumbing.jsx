//  <-- MUST DO ON UPDATE!! --> 
// 1. transpile command: npx babel --presets=@babel/preset-env,@babel/preset-react Plumbing.jsx -o Plumbing.js
// 2. add, commit, push to main

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity, Dimensions, Modal, Alert, FlatList, Platform } from 'react-native';
import { parsePhoneNumberFromString, isValidPhoneNumber } from 'libphonenumber-js';
// import { IconButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
// import {
//   CustomDropdown,
//   LicenseForm,
//   InsuranceForm,
//   CustomWarrantySelector,
//   PhotoAlbum
// } from '../../components';
const PlumbingForm = ({ 
  formData: initialFormData = {},
  setFormData: setParentFormData = () => {},
  styles: parentStyles = {},
  offering = null,
  selectedOption = '',
  breadcrumb = '',
  meta = {},
  navigation = null,
  GOOGLE_API = '',
  registry
} = {}) => {
  // Get styles by merging parent styles with component-specific styles
  const styles = { ...parentStyles, ...localStyles };
  const { DropDownPicker } = registry
  // Add console warnings for missing critical props
  useEffect(() => {
    if (!navigation) {
      console.warn('PlumbingForm: navigation prop is missing. Some navigation features may not work.');
    }
    if (!GOOGLE_API) {
      console.warn('PlumbingForm: GOOGLE_API prop is missing. Address search functionality will not work.');
    }
  }, [navigation, GOOGLE_API]);

  // Initialize form data with defaults and any existing data
  const [formData, setFormData] = useState(() => {
    const initialData = {
      // Default values
      title: '',
      description: '',
      price: '',
      entity: 'unselected',
      contact: { 
        phone: '', 
        email: '', 
        website: '', 
        address: '' 
      },
      licenses: [],
      certifications: [],
      insurances: [],
      channelsAvailable: [],
      photos: [],
      businessCommencementDate: null,
      warrantyParts: null,
      warrantyLabor: null,
      emergencyServicesProvided: false,
      permittingIncluded: 'no',
      customCoverageAmount: '',
      customCoverageUnit: 'dollars',
      customWarrantyValue: '',
      customWarrantyUnit: 'months',
      newInsurance: {
        type: '',
        coverage: '',
        issuer: ''
      },
      newLicense: {
        title: '',
        issuer: '',
        type: '',
        scope: '',
        licensee: ''
      },
      // Override with initial data if provided
      ...initialFormData,
      // If there's an offering, use its data
      ...(offering ? {
        title: offering.title || '',
        description: offering.description || '',
        price: offering.price || '',
        ...(offering.extraData || {})
      } : {})
    };
    
    return initialData;
  });

  const [showLicenseForm, setShowLicenseForm] = useState(false);
  const [showInsuranceForm, setShowInsuranceForm] = useState(false);
  const [showCertificationForm, setShowCertificationForm] = useState(false);
  
  // States for dropdown components
  const [openEntity, setOpenEntity] = useState(false);
  const [openLicenseType, setOpenLicenseType] = useState(false);
  const [openInsuranceType, setOpenInsuranceType] = useState(false);
  const [openInsuranceCoverage, setOpenInsuranceCoverage] = useState(false);
  const [openWarrantyParts, setOpenWarrantyParts] = useState(false);
  const [openWarrantyLabor, setOpenWarrantyLabor] = useState(false);
  const [openCertificationType, setOpenCertificationType] = useState(false);
  
  // Custom warranty modal states
  const [showCustomWarrantyModal, setShowCustomWarrantyModal] = useState(false);
  const [customWarrantyType, setCustomWarrantyType] = useState(''); // 'parts' or 'labor'
  const [customWarrantyValue, setCustomWarrantyValue] = useState('');
  const [customWarrantyUnit, setCustomWarrantyUnit] = useState('months');
  const [openCustomWarrantyUnit, setOpenCustomWarrantyUnit] = useState(false);
  
  // Custom coverage modal states
  const [showCustomCoverageModal, setShowCustomCoverageModal] = useState(false);
  const [customCoverageAmount, setCustomCoverageAmount] = useState('');
  const [customCoverageUnit, setCustomCoverageUnit] = useState('dollars');
  const [openCustomCoverageUnit, setOpenCustomCoverageUnit] = useState(false);
  
  // State for certification input
  const [certificationInput, setCertificationInput] = useState('');
  
  const [newLicense, setNewLicense] = useState({
    title: "",
    issuer: "",
    type: "Business License",
    scope: "",
    licensee: ""
  });
  const [newInsurance, setNewInsurance] = useState({
    type: "commercial liability",
    coverage: "1MM",
    issuer: ""
  });
  const [newCertification, setNewCertification] = useState({
    title: "",
    issuer: "",
    type: "Professional Certification",
    date: ""
  });

  // Add useEffect to update parent formData when local formData changes
  useEffect(() => {
    if (setParentFormData) {
      setParentFormData(formData);
    }
  }, [formData, setParentFormData]);

  // Add photoUrls state to the component state
  const [photos, setPhotos] = useState(formData.photos || []);

  // Update formData when photos change
  useEffect(() => {
    if (photos.length > 0) {
      setFormData(prevData => ({
        ...prevData,
        photos: photos
      }));
    }
  }, [photos]);

  // Helper function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // State for address search
  const [addressSearchQuery, setAddressSearchQuery] = useState('');
  const [addressSearchResults, setAddressSearchResults] = useState([]);
  const [showAddressResults, setShowAddressResults] = useState(false);

  // Search places using Google Places API
  const searchAddressPlaces = async (text) => {
    try {
      if (!text) {
        setAddressSearchResults([]);
        return;
      }
      
      if (!GOOGLE_API) {
        Alert.alert(
          'Configuration Error',
          'Google Places API key is not configured. Address search is not available.',
          [{ text: 'OK' }]
        );
        return;
      }

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(text)}&types=geocode&key=${GOOGLE_API}`
      );
      const data = await response.json();
      if (data.status !== "OK") {
        console.error("Google Places API Error:", data.status, data.error_message);
        Alert.alert(
          'Search Error',
          'Unable to search for addresses at this time. Please try again later.',
          [{ text: 'OK' }]
        );
        return;
      }
  
      setAddressSearchResults(
        data.predictions.map((place) => ({
          place_id: place.place_id,
          description: place.description,
        }))
      );
      setShowAddressResults(true);
    } catch (error) {
      console.error("Error fetching places:", error);
      Alert.alert(
        'Search Error',
        'Unable to search for addresses at this time. Please try again later.',
        [{ text: 'OK' }]
      );
    }
  };

  // Handle selecting a place from the results
  const handleSelectPlace = (item) => {
    updateContact('address', item.description);
    setAddressSearchQuery('');
    setAddressSearchResults([]);
    setShowAddressResults(false);
  };

  // Clear selected address
  const clearSelectedAddress = () => {
    updateContact('address', '');
    setAddressSearchQuery('');
  };

  // State for date picker
  const [showDatePicker, setShowDatePicker] = useState(false);
  // Temporary state for date selection
  const [tempDate, setTempDate] = useState(null);
  
  // Get formatted date string
  const getFormattedDate = (date) => {
    if (!date) return 'Select date';
    // Format as DD/MM/YYYY
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  
  // Handle date change without closing picker
  const onDateChange = (event, selectedDate) => {
    if (Platform.OS === 'android') {
      // On Android, close the picker and update the date
      setShowDatePicker(false);
      if (selectedDate) {
        setFormData({...formData, businessCommencementDate: selectedDate});
      }
    } else {
      // On iOS, just update the temp date without closing
      if (selectedDate) {
        setTempDate(selectedDate);
      }
    }
  };

  // Confirm date selection for iOS
  const confirmIOSDate = () => {
    if (tempDate) {
      setFormData({...formData, businessCommencementDate: tempDate});
    }
    setShowDatePicker(false);
  };

  // Cancel date selection for iOS
  const cancelIOSDate = () => {
    setTempDate(null);
    setShowDatePicker(false);
  };

  // Initialize temp date when opening the picker
  const openDatePicker = () => {
    setTempDate(formData.businessCommencementDate || new Date());
    setShowDatePicker(true);
  };
  // Add this utility function for generating UUID
  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };
  // Format warranty string
  const formatWarranty = (parts, labor) => {
    let partsText = parts === "0" ? "0 months parts" : parts;
    let laborText = labor === "0" ? "0 months labor" : labor;
    return `parts: ${partsText}, labor: ${laborText}`;
  };

  // Add this function to your component
  const handleSubmit = () => {
    // Validate data
    // if (!formData.title.trim()) {
    //   Alert.alert('Error', 'Please enter a title for your offering');
    //   return;
    // }
    
    // if (!formData.description.trim()) {
    //   Alert.alert('Error', 'Please enter a description for your offering');
    //   return;
    // }
    // if (formData.entity == "unselected") {
    //     Alert.alert('Error', 'Please select an entity type for your offering');
    //     return;
    // }
    // if (!formData.businessCommencementDate) {
    //     Alert.alert('Error', 'Please select a business commencement date for your offering');
    //     return;
    // }
    // if (formData.warrantyParts === null) {
    //     Alert.alert('Error', 'Please select a parts warranty period for your offering');
    //     return;
    // }
    // if (formData.warrantyLabor === null) {
    //     Alert.alert('Error', 'Please select a labor warranty period for your offering');
    //     return;
    // }
    // if (formData.contact.phone && !isValidPhoneNumber(formData.contact.phone)) {
    //     Alert.alert('Error', 'Please enter a valid phone number with country code (e.g. +1 for US)');
    //     return;
    // }
    // if (formData.contact.email && !isValidEmail(formData.contact.email)) {
    //     Alert.alert('Error', 'Please enter a valid email address');
    //     return;
    // }
    // if (!formData.contact.address.trim()) {
    //     Alert.alert('Error', 'Please enter an address for your offering');
    //     return;
    // }
    
    // Format the data according to the required JSON structure
    const formattedData = {
      offering: {
        // haveThingId: generateUUID(),
        topic: breadcrumb,
        title: formData.title,
        description: formData.description,
        geoArea: "",
        entity: [formData.entity],
        contact: {
          phone: formData.contact.phone,
          email: formData.contact.email,
          website: formData.contact.website,
          address: formData.contact.address
        },
        licenses: formData.licenses.map(license => ({
          title: license.title,
          issuer: license.issuer,
          type: license.type,
          scope: license.scope,
          licensee: license.licensee
        })),
        certifications: formData.certifications || [],
        insurances: formData.insurances.map(insurance => ({
          type: insurance.type,
          coverage: insurance.coverage,
          issuer: insurance.issuer
        })),
        businessCommencementDate: formData.businessCommencementDate,
        channelsAvailable: [],
        warranty: formatWarranty(formData.warrantyParts, formData.warrantyLabor),
        emergencyServicesProvided: formData.emergencyServicesProvided,
        permittingIncluded: formData.permittingIncluded,
        nsPhotoAlbum: formData.photos.length > 0 ? JSON.stringify(formData.photos) : ""
      }
    };
    
    // TODO: Submit the offering to the API
    console.log('Submitting offering:', formattedData);
  
    // Navigate to success screen or back to home
    if (navigation) {
      navigation.navigate('CreateHave', { 
        selectedOption,
        topics: [],
        topicTexts: [],
        breadcrumb: breadcrumb,
        address: formData.contact.address,
        offeringTitle: formData.title,
        meta,
      });
    } else {
      console.warn('Navigation is not available. Unable to navigate after form submission.');
      Alert.alert(
        'Success',
        'Form submitted successfully, but navigation is not available.',
        [{ text: 'OK' }]
      );
    }
  };

  const updateContact = (field, value) => {
    const updatedContact = {
      ...formData.contact,
      [field]: value
    };
    
    setFormData({
      ...formData,
      contact: updatedContact
    });
  };

  const addLicense = () => {
    const updatedLicenses = [...(formData.licenses || []), newLicense];
    setFormData({
      ...formData,
      licenses: updatedLicenses
    });
    setNewLicense({
      title: "",
      issuer: "",
      type: "Business License",
      scope: "",
      licensee: ""
    });
    setShowLicenseForm(false);
  };

  const addInsurance = () => {
    const updatedInsurances = [...(formData.insurances || []), newInsurance];
    setFormData({
      ...formData,
      insurances: updatedInsurances
    });
    setNewInsurance({
      type: "commercial liability",
      coverage: "1MM",
      issuer: ""
    });
    setShowInsuranceForm(false);
  };

  const addCertification = (cert) => {
    if (!cert.trim()) return;
    const updatedCertifications = [...(formData.certifications || []), cert];
    setFormData({
      ...formData,
      certifications: updatedCertifications
    });
    setNewCertification({
      title: "",
      issuer: "",
      type: "Professional Certification",
      date: ""
    });
    setShowCertificationForm(false);
  };

  const removeCertification = (index) => {
    const updatedCertifications = [...formData.certifications];
    updatedCertifications.splice(index, 1);
    setFormData({...formData, certifications: updatedCertifications});
  };

  // Function to handle selecting custom warranty option
  const handleCustomWarranty = (type) => {
    setCustomWarrantyType(type);
    
    // Check if there's already a custom value to edit
    const existingValue = type === 'parts' ? formData.warrantyParts : formData.warrantyLabor;
    
    // If we already have a value that's not in the standard items, parse it
    if (existingValue && existingValue !== 'custom' && 
        !['0', '1 month', '3 months', '6 months', '1 year', '2 years'].includes(existingValue)) {
      // Try to parse the custom value (e.g. "15 days" -> number: 15, unit: "days")
      const parts = existingValue.split(' ');
      if (parts.length >= 2) {
        const numValue = parts[0];
        // Get the unit (could be "day", "days", "month", "months", etc.)
        let unit = parts[1].toLowerCase();
        
        // Normalize the unit to singular if needed
        if (unit === 'days') unit = 'days';
        else if (unit === 'day') unit = 'days';
        else if (unit === 'months') unit = 'months';
        else if (unit === 'month') unit = 'months';
        else if (unit === 'years') unit = 'years';
        else if (unit === 'year') unit = 'years';
        
        setCustomWarrantyValue(numValue);
        setCustomWarrantyUnit(unit);
      } else {
        // If we can't parse, start fresh
        setCustomWarrantyValue('');
        setCustomWarrantyUnit('months');
      }
    } else {
      // Start fresh for new custom values
      setCustomWarrantyValue('');
      setCustomWarrantyUnit('months');
    }
    
    setShowCustomWarrantyModal(true);
  };

  // Function to save custom warranty
  const saveCustomWarranty = () => {
    if (customWarrantyValue && customWarrantyValue !== '0') {
      const customValue = `${customWarrantyValue} ${customWarrantyUnit}`;
      
      if (customWarrantyType === 'parts') {
        setFormData({...formData, warrantyParts: customValue});
      } else if (customWarrantyType === 'labor') {
        setFormData({...formData, warrantyLabor: customValue});
      }
    }
    setShowCustomWarrantyModal(false);
  };

  // Get dropdown items for each field
  const getEntityItems = () => [
    { label: 'Individual', value: 'individual' },
    { label: 'Business', value: 'business' },
    { label: 'Non-Profit', value: 'non-profit' }
  ];
  
  const getWarrantyPartsItems = () => {
    const standardItems = [
      { label: 'None', value: '0' },
      { label: '1 month', value: '1 month' },
      { label: '3 months', value: '3 months' },
      { label: '6 months', value: '6 months' },
      { label: '1 year', value: '1 year' },
      { label: '2 years', value: '2 years' },
      { label: 'Custom...', value: 'custom' }
    ];
    
    // If there's a custom value that's not in the standard items, add it
    if (formData.warrantyParts && 
        formData.warrantyParts !== 'custom' && 
        !standardItems.some(item => item.value === formData.warrantyParts)) {
      return [
        ...standardItems.filter(item => item.value !== 'custom'),
        { label: formData.warrantyParts, value: formData.warrantyParts },
        { label: 'Custom...', value: 'custom' }
      ];
    }
    
    return standardItems;
  };
  
  const getWarrantyLaborItems = () => {
    const standardItems = [
      { label: 'None', value: '0' },
      { label: '1 month', value: '1 month' },
      { label: '3 months', value: '3 months' },
      { label: '6 months', value: '6 months' },
      { label: '1 year', value: '1 year' },
      { label: '2 years', value: '2 years' },
      { label: 'Custom...', value: 'custom' }
    ];
    
    // If there's a custom value that's not in the standard items, add it
    if (formData.warrantyLabor && 
        formData.warrantyLabor !== 'custom' && 
        !standardItems.some(item => item.value === formData.warrantyLabor)) {
      return [
        ...standardItems.filter(item => item.value !== 'custom'),
        { label: formData.warrantyLabor, value: formData.warrantyLabor },
        { label: 'Custom...', value: 'custom' }
      ];
    }
    
    return standardItems;
  };
  
  const getTimeUnitItems = () => [
    { label: 'Days', value: 'days' },
    { label: 'Months', value: 'months' },
    { label: 'Years', value: 'years' }
  ];
  
  const getLicenseTypeItems = () => [
    { label: 'Business License', value: 'Business License' },
    { label: 'Professional License', value: 'Professional License' },
    { label: 'Trade License', value: 'Trade License' }
  ];
  
  const getInsuranceTypeItems = () => [
    { label: 'Commercial Liability', value: 'commercial liability' },
    { label: 'Professional Liability', value: 'professional liability' },
    { label: 'Public Liability', value: 'public liability' },
    { label: 'Workers Compensation', value: 'workers compensation' }
  ];
  
  const getInsuranceCoverageItems = () => {
    const standardItems = [
      { label: '$1 Million', value: '1MM' },
      { label: '$2 Million', value: '2MM' },
      { label: '$5 Million', value: '5MM' },
      { label: 'Custom...', value: 'custom' }
    ];
    
    // If there's a custom value that's not in the standard items, add it
    if (newInsurance.coverage && 
        newInsurance.coverage !== 'custom' && 
        !standardItems.some(item => item.value === newInsurance.coverage)) {
      return [
        ...standardItems.filter(item => item.value !== 'custom'),
        { label: newInsurance.coverage, value: newInsurance.coverage },
        { label: 'Custom...', value: 'custom' }
      ];
    }
    
    return standardItems;
  };

  const getCertificationTypeItems = () => [
    { label: 'Professional Certification', value: 'Professional Certification' },
    { label: 'Trade Certification', value: 'Trade Certification' },
    { label: 'Safety Certification', value: 'Safety Certification' },
    { label: 'Environmental Certification', value: 'Environmental Certification' }
  ];

  const getCoverageUnitItems = () => [
    { label: 'Dollars', value: 'dollars' },
    { label: 'Thousand', value: 'thousand' },
    { label: 'Million', value: 'million' }
  ];

  // Manage the z-index for dropdowns
  const getZIndex = (isOpen) => isOpen ? 9999 : 1;

  // Function to handle opening a dropdown and closing all others
  const handleOpenDropdown = (setter, currentState) => {
    // If we're opening this dropdown (not closing it)
    // then close all others first
    if (!currentState) {
      setOpenEntity(false);
      setOpenLicenseType(false);
      setOpenInsuranceType(false);
      setOpenInsuranceCoverage(false);
      setOpenWarrantyParts(false);
      setOpenWarrantyLabor(false);
      setOpenCertificationType(false);
    }
    // Then toggle the current dropdown
    setter(!currentState);
  };

  // Function to handle adding certification
  const handleAddCertification = () => {
    if (certificationInput.trim()) {
      addCertification(certificationInput);
      setCertificationInput('');
    }
  };

  // Add functions to remove items
  const removeLicense = (index) => {
    const updatedLicenses = [...formData.licenses];
    updatedLicenses.splice(index, 1);
    setFormData({...formData, licenses: updatedLicenses});
  };
  
  const removeInsurance = (index) => {
    const updatedInsurances = [...formData.insurances];
    updatedInsurances.splice(index, 1);
    setFormData({...formData, insurances: updatedInsurances});
  };

  const handleCustomCoverage = () => {
    setCustomCoverageAmount('');
    setCustomCoverageUnit('dollars');
    setShowCustomCoverageModal(true);
  };

  const saveCustomCoverage = () => {
    if (customCoverageAmount && customCoverageAmount !== '0') {
      let amount = parseFloat(customCoverageAmount);
      let unit = customCoverageUnit;
      
      // Format for display based on unit
      let displayValue;
      if (unit === 'million') {
        displayValue = `$ ${amount} Million`;
      } else if (unit === 'thousand') {
        displayValue = `$ ${amount} Thousand`;
      } else {
        displayValue = `$ ${amount}`;
      }
      
      setNewInsurance({...newInsurance, coverage: displayValue});
    }
    setShowCustomCoverageModal(false);
  };
useEffect(() => {
  console.log('formData', formData);
  console.log('GOOGLE_API', GOOGLE_API);
  console.log('navigation', navigation);
  console.log('offering', offering);
  console.log('selectedOption', selectedOption);
  console.log('breadcrumb', breadcrumb);
  console.log('meta', meta);
}, [formData]);
// return (
//   <View style={styles.label}>
//     <Text>I'm not totally FUCKED updated!</Text>
//   </View>
// );

  // Return the form directly without FlatList
  return (
    <View style={styles.container}>
      <View style={styles.formContentContainer}>
        {/* Service Information (including Business Details) */}
        <View style={styles.mainSectionHeader}>
          <Text style={styles.mainSectionHeaderText}>Service Information</Text>
        </View>
        
      <View style={styles.formGroup}>
        <Text style={styles.label}>Title <Text style={styles.requiredStar}>*</Text></Text>
        <TextInput
          style={styles.input}
          value={formData.title}
          onChangeText={(text) => setFormData({ ...formData, title: text })}
            placeholder="e.g. Garry's Plumbing"
          placeholderTextColor="#999"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Description <Text style={styles.requiredStar}>*</Text></Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={formData.description}
          onChangeText={(text) => setFormData({ ...formData, description: text })}
            placeholder="Describe your plumbing service and specialties"
          placeholderTextColor="#999"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>

        {/* Entity Type */}
        <View style={[styles.formGroup, {zIndex: getZIndex(openEntity)}]}>
          <Text style={styles.label}>fed force Entity Type<Text style={styles.requiredStar}>*</Text></Text>
          <DropDownPicker
            open={false}
            value={null}
            items={[
              { label: 'Individual', value: 'individual' },
              { label: 'Business', value: 'business' },
              { label: 'Non-Profit', value: 'non-profit' }
            ]}
            setOpen={() => {}}
            setValue={() => {}}
            setItems={() => {}}
            placeholder="Select entity type"
          />
          {/* <DropDownPicker
            open={openEntity}
            value={formData.entity}
            items={getEntityItems()}
            setOpen={(value) => handleOpenDropdown(setOpenEntity, openEntity)}
            setValue={(callback) => {
              const value = callback(formData.entity);
              setFormData({...formData, entity: value});
            }}
            placeholder="Select"
            style={styles.dropdownStyle}
            textStyle={styles.dropdownTextStyle}
            dropDownContainerStyle={styles.dropdownContainerStyle}
            listItemContainerStyle={styles.dropdownItemStyle}
            listMode="SCROLLVIEW"
            scrollViewProps={{
              nestedScrollEnabled: true,
            }}
          /> */}
        </View>
      </View>
    </View>
  );

//         {/* Business Commencement Date - replaced Years In Business */}
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Business Commencement Date <Text style={styles.requiredStar}>*</Text></Text>
//           <TouchableOpacity 
//             style={styles.datePickerButton}
//             onPress={openDatePicker}
//           >
//             <Text style={styles.datePickerButtonText}>
//               {formData.businessCommencementDate 
//                 ? getFormattedDate(formData.businessCommencementDate) 
//                 : 'Select commencement date'}
//             </Text>
//             <View style={styles.calendarIcon}>
//               {/* <IconButton
//                 icon="calendar"
//                 size={24}
//                 iconColor="#6750a4"
//               /> */}
//             </View>
//           </TouchableOpacity>
          
//           {Platform.OS === 'ios' ? (
//             <Modal
//               animationType="slide"
//               transparent={true}
//               visible={showDatePicker}
//               onRequestClose={cancelIOSDate}
//             >
//               <TouchableOpacity
//                 style={styles.datePickerModalOverlay}
//                 activeOpacity={1}
//                 onPress={cancelIOSDate}
//               >
//                 <View style={styles.datePickerContainer}>
//                   <View style={styles.datePickerHeader}>
//                     <TouchableOpacity onPress={cancelIOSDate}>
//                       <Text style={styles.datePickerCancel}>Cancel</Text>
//                     </TouchableOpacity>
//                     <Text style={styles.datePickerTitle}>Select Date</Text>
//                     <TouchableOpacity onPress={confirmIOSDate}>
//                       <Text style={styles.datePickerDone}>Done</Text>
//                     </TouchableOpacity>
//                   </View>
//                   <DateTimePicker
//                     value={tempDate || new Date()}
//                     mode="date"
//                     display="spinner"
//                     onChange={onDateChange}
//                     maximumDate={new Date()}
//                     style={styles.datePickerIOS}
//                   />
//                 </View>
//               </TouchableOpacity>
//             </Modal>
//           ) : (
//             showDatePicker && (
//               <DateTimePicker
//                 value={formData.businessCommencementDate || new Date()}
//                 mode="date"
//                 display="default"
//                 onChange={onDateChange}
//                 maximumDate={new Date()}
//               />
//             )
//           )}
//         </View>

//         <View style={[styles.formGroup, {zIndex: (openWarrantyParts || openWarrantyLabor) ? 900 : 1, marginTop: 20}]}>
//           <Text style={styles.label}>Warranty <Text style={styles.requiredStar}>*</Text></Text>
//           <View style={styles.warrantyContainer}>
//             <View style={[styles.warrantyInput, {zIndex: getZIndex(openWarrantyParts)}]}>
//               <Text style={styles.warrantyLabel}>Parts</Text>
//               <DropDownPicker
//                 open={openWarrantyParts}
//                 value={formData.warrantyParts}
//                 items={getWarrantyPartsItems()}
//                 setOpen={(value) => handleOpenDropdown(setOpenWarrantyParts, openWarrantyParts)}
//                 setValue={(callback) => {
//                   const value = callback(formData.warrantyParts);
//                   if (value === 'custom') {
//                     handleCustomWarranty('parts');
//                   } else {
//                     setFormData({...formData, warrantyParts: value});
//                   }
//                 }}
//                 placeholder="Select"
//                 style={styles.dropdownStyle}
//                 textStyle={styles.dropdownTextStyle}
//                 dropDownContainerStyle={styles.dropdownContainerStyle}
//                 listItemContainerStyle={styles.dropdownItemStyle}
//                 zIndex={openWarrantyLabor ? 998 : 999}
//                 zIndexInverse={openWarrantyLabor ? 999 : 998}
//                 listMode="SCROLLVIEW"
//                 scrollViewProps={{
//                   nestedScrollEnabled: true,
//                 }}
//               />
//             </View>
//             <View style={[styles.warrantyInput, {zIndex: getZIndex(openWarrantyLabor)}]}>
//               <Text style={styles.warrantyLabel}>Labor</Text>
//               <DropDownPicker
//                 open={openWarrantyLabor}
//                 value={formData.warrantyLabor}
//                 items={getWarrantyLaborItems()}
//                 setOpen={(value) => handleOpenDropdown(setOpenWarrantyLabor, openWarrantyLabor)}
//                 setValue={(callback) => {
//                   const value = callback(formData.warrantyLabor);
//                   if (value === 'custom') {
//                     handleCustomWarranty('labor');
//                   } else {
//                     setFormData({...formData, warrantyLabor: value});
//                   }
//                 }}
//                 placeholder="Select"
//                 style={styles.dropdownStyle}
//                 textStyle={styles.dropdownTextStyle}
//                 dropDownContainerStyle={styles.dropdownContainerStyle}
//                 listItemContainerStyle={styles.dropdownItemStyle}
//                 zIndex={openWarrantyParts ? 998 : 999}
//                 zIndexInverse={openWarrantyParts ? 999 : 998}
//                 listMode="SCROLLVIEW"
//                 scrollViewProps={{
//                   nestedScrollEnabled: true,
//                 }}
//               />
//             </View>
//           </View>
//         </View>

//         {/* Custom Warranty Modal */}
//         <Modal
//           visible={showCustomWarrantyModal}
//           transparent={true}
//           animationType="fade"
//           onRequestClose={() => setShowCustomWarrantyModal(false)}
//         >
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalTitle}>
//                 Custom {customWarrantyType === 'parts' ? 'Parts' : 'Labor'} Warranty
//               </Text>
              
//               <View style={styles.modalForm}>
//                 <View style={styles.modalInputRow}>
//                   <TextInput
//                     style={styles.modalInput}
//                     value={customWarrantyValue}
//                     onChangeText={setCustomWarrantyValue}
//                     placeholder="Enter number"
//                     placeholderTextColor="#999"
//                     keyboardType="numeric"
//                   />
                  
//                   <View style={[styles.modalDropdown, {zIndex: getZIndex(openCustomWarrantyUnit)}]}>
//                     <DropDownPicker
//                       open={openCustomWarrantyUnit}
//                       value={customWarrantyUnit}
//                       items={getTimeUnitItems()}
//                       setOpen={setOpenCustomWarrantyUnit}
//                       setValue={(callback) => {
//                         const value = callback(customWarrantyUnit);
//                         setCustomWarrantyUnit(value);
//                       }}
//                       placeholder="Select"
//                       style={styles.dropdownStyle}
//                       textStyle={styles.dropdownTextStyle}
//                       dropDownContainerStyle={styles.dropdownContainerStyle}
//                       listItemContainerStyle={styles.dropdownItemStyle}
//                     />
//                   </View>
//                 </View>
                
//                 <View style={styles.modalButtons}>
//                   <TouchableOpacity
//                     style={styles.modalCancelButton}
//                     onPress={() => setShowCustomWarrantyModal(false)}
//                   >
//                     <Text style={styles.modalCancelButtonText}>Cancel</Text>
//                   </TouchableOpacity>
                  
//                   <TouchableOpacity
//                     style={[
//                       styles.modalSaveButton,
//                       (!customWarrantyValue || customWarrantyValue === '0') && styles.modalButtonDisabled
//                     ]}
//                     onPress={saveCustomWarranty}
//                     disabled={!customWarrantyValue || customWarrantyValue === '0'}
//                   >
//                     <Text style={styles.modalSaveButtonText}>Save</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </Modal>

//         <View style={[styles.formGroup, {zIndex: (openWarrantyParts || openWarrantyLabor) ? -1 : 1}]}>
//           <Text style={styles.label}>Emergency Services Provided</Text>
//         <View style={styles.switchContainer}>
//           <Switch
//               value={formData.emergencyServicesProvided}
//               onValueChange={(value) => setFormData({...formData, emergencyServicesProvided: value})}
//             trackColor={{ false: "#767577", true: "#81b0ff" }}
//               thumbColor={formData.emergencyServicesProvided ? "#007AFF" : "#f4f3f4"}
//           />
//           <Text style={styles.switchLabel}>
//               {formData.emergencyServicesProvided ? "Yes" : "No"}
//           </Text>
//         </View>
//       </View>
      
//       <View style={styles.formGroup}>
//           <Text style={styles.label}>Permitting Included</Text>
//           <View style={styles.switchContainer}>
//             <Switch
//               value={formData.permittingIncluded === "yes"}
//               onValueChange={(value) => setFormData({...formData, permittingIncluded: value ? "yes" : "no"})}
//               trackColor={{ false: "#767577", true: "#81b0ff" }}
//               thumbColor={formData.permittingIncluded === "yes" ? "#007AFF" : "#f4f3f4"}
//             />
//             <Text style={styles.switchLabel}>
//               {formData.permittingIncluded === "yes" ? "Yes" : "No"}
//             </Text>
//           </View>
//         </View>

//         {/* Personal Details */}
//         <View style={[styles.mainSectionHeader, {zIndex: openEntity ? -1 : 1}]}>
//           <Text style={styles.mainSectionHeaderText}>Personal Details</Text>
//         </View>
        
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Phone <Text style={styles.requiredStar}>*</Text></Text>
//           <TextInput
//             style={styles.input}
//             value={formData.contact.phone}
//             onChangeText={(text) => {
//               // Only allow numbers, +, and spaces for readability
//               const filteredText = text.replace(/[^\d\s+]/g, '');
//               updateContact('phone', filteredText);
//             }}
//             placeholder="e.g. +1 650 288 7596"
//             placeholderTextColor="#999"
//             keyboardType="phone-pad"
//             autoCapitalize="none"
//             autoCorrect={false}
//           />
//           {formData.contact.phone && !isValidPhoneNumber(formData.contact.phone) && (
//             <Text style={styles.errorText}>Please enter a valid phone number with country code (e.g. +1 for US)</Text>
//           )}
//         </View>
        
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Email <Text style={styles.requiredStar}>*</Text></Text>
//           <TextInput
//             style={styles.input}
//             value={formData.contact.email}
//             onChangeText={(text) => updateContact('email', text)}
//             placeholder="e.g. needseek@aol.com"
//             placeholderTextColor="#999"
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//           {formData.contact.email && !isValidEmail(formData.contact.email) && (
//             <Text style={styles.errorText}>Please enter a valid email address</Text>
//           )}
//         </View>
        
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Website</Text>
//         <TextInput
//           style={styles.input}
//             value={formData.contact.website}
//             onChangeText={(text) => updateContact('website', text)}
//             placeholder="e.g. www.needseek.com"
//           placeholderTextColor="#999"
//           autoCapitalize="none"
//         />
//       </View>
      
//         {/* Address with autocomplete */}
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Address <Text style={styles.requiredStar}>*</Text></Text>
          
//           {formData.contact.address ? (
//             /* Selected Address Block */
//             <View style={styles.selectedAddressContainer}>
//               <Text 
//                 style={styles.selectedAddressText}
//                 numberOfLines={2}
//               >
//                 {formData.contact.address}
//               </Text>
//               <TouchableOpacity
//                 style={styles.removeAddressButton}
//                 onPress={clearSelectedAddress}
//               >
//                 <Text style={styles.removeAddressButtonText}>✕</Text>
//               </TouchableOpacity>
//             </View>
//           ) : (
//             /* Search Input Field */
//             <View style={styles.searchContainer}>
//               <TextInput
//                 style={styles.addressInput}
//                 value={addressSearchQuery}
//                 onChangeText={setAddressSearchQuery}
//                 placeholder="Where is your service headquartered?"
//                 placeholderTextColor="#999"
//               />
//               <View style={{ position: 'absolute', right: 0 }}>
//                 {/* <IconButton
//                   icon="magnify"
//                   size={21}
//                   mode="contained"
//                   onPress={() => searchAddressPlaces(addressSearchQuery)}
//                 /> */}
//               </View>
//             </View>
//           )}
          
//           {/* Address Search Results */}
//           {showAddressResults && addressSearchResults.length > 0 && !formData.contact.address && (
//             <FlatList
//               data={addressSearchResults}
//               keyExtractor={(item) => item.place_id}
//               keyboardShouldPersistTaps="handled"
//               style={styles.suggestionsList}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={styles.suggestionItem}
//                   onPress={() => handleSelectPlace(item)}
//                 >
//                   <Text style={styles.suggestionText}>{item.description}</Text>
//                 </TouchableOpacity>
//               )}
//             />
//           )}
//         </View>

//         {/* Credentials & Coverage */}
//         <View style={styles.mainSectionHeader}>
//           <Text style={styles.mainSectionHeaderText}>Credentials & Coverage</Text>
//         </View>

//         {/* Licenses */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionHeaderText}>Licenses</Text>
//           <TouchableOpacity 
//             style={styles.addButton} 
//             onPress={() => setShowLicenseForm(true)}
//           >
//             <Text style={styles.addButtonText}>+ Add License</Text>
//           </TouchableOpacity>
//         </View>

//         {formData.licenses.map((license, index) => (
//           <View key={index} style={styles.listItem}>
//             <View style={styles.itemContent}>
//               <Text style={styles.itemTitle}>{license.title}</Text>
//               <Text style={styles.itemDetail}>Issued by: {license.issuer}</Text>
//               <Text style={styles.itemDetail}>Type: {license.type}</Text>
//               <Text style={styles.itemDetail}>Scope: {license.scope}</Text>
//               <Text style={styles.itemDetail}>Licensee: {license.licensee}</Text>
//             </View>
//             <TouchableOpacity style={styles.removeItemButton} onPress={() => removeLicense(index)}>
//               <Text style={styles.removeItemButtonText}>✕</Text>
//             </TouchableOpacity>
//           </View>
//         ))}

//         {showLicenseForm && (
//           <View style={styles.subForm}>
//             <View style={styles.formGroup}>
//               <Text style={styles.label}>License Title</Text>
//         <TextInput
//           style={styles.input}
//                 value={newLicense.title}
//                 onChangeText={(text) => setNewLicense({...newLicense, title: text})}
//                 placeholder="e.g. Plumber Trade Certification"
//           placeholderTextColor="#999"
//         />
//       </View>
      
//       <View style={styles.formGroup}>
//               <Text style={styles.label}>Issuer</Text>
//               <TextInput
//                 style={styles.input}
//                 value={newLicense.issuer}
//                 onChangeText={(text) => setNewLicense({...newLicense, issuer: text})}
//                 placeholder="e.g. City of Hollywood"
//                 placeholderTextColor="#999"
//               />
//             </View>

//             <View style={[styles.formGroup, {zIndex: getZIndex(openLicenseType)}]}>
//               <Text style={styles.label}>License Type</Text>
//               <DropDownPicker
//                 open={openLicenseType}
//                 value={newLicense.type}
//                 items={getLicenseTypeItems()}
//                 setOpen={(value) => handleOpenDropdown(setOpenLicenseType, openLicenseType)}
//                 setValue={(callback) => {
//                   const value = callback(newLicense.type);
//                   setNewLicense({...newLicense, type: value});
//                 }}
//                 placeholder="Select"
//                 style={styles.dropdownStyle}
//                 textStyle={styles.dropdownTextStyle}
//                 dropDownContainerStyle={styles.dropdownContainerStyle}
//                 listItemContainerStyle={styles.dropdownItemStyle}
//                 listMode="SCROLLVIEW"
//                 scrollViewProps={{
//                   nestedScrollEnabled: true,
//                 }}
//               />
//             </View>
            
//             <View style={[styles.formGroup, {zIndex: openLicenseType ? -1 : 1}]}>
//               <Text style={styles.label}>Scope</Text>
//         <TextInput
//           style={styles.input}
//                 value={newLicense.scope}
//                 onChangeText={(text) => setNewLicense({...newLicense, scope: text})}
//                 placeholder="e.g. FL.Hollywood"
//           placeholderTextColor="#999"
//         />
//       </View>
      
//       <View style={styles.formGroup}>
//               <Text style={styles.label}>Licensee</Text>
//               <TextInput
//                 style={styles.input}
//                 value={newLicense.licensee}
//                 onChangeText={(text) => setNewLicense({...newLicense, licensee: text})}
//                 placeholder="e.g. Westwood Plumbers"
//                 placeholderTextColor="#999"
//               />
//             </View>

//             <View style={styles.buttonRow}>
//               <TouchableOpacity style={styles.cancelButton} onPress={() => setShowLicenseForm(false)}>
//                 <Text style={styles.buttonText}>Cancel</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.saveButton} onPress={addLicense}>
//                 <Text style={styles.buttonText}>Save</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}

//         {/* Certifications */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionHeaderText}>Certifications</Text>
//         </View>
        
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Add Certification</Text>
//           <View style={styles.rowContainer}>
//             <TextInput
//               style={[styles.input, { flex: 1 }]}
//               placeholder="e.g. Florida certified plumber"
//               placeholderTextColor="#999"
//               value={certificationInput}
//               onChangeText={setCertificationInput}
//               onSubmitEditing={handleAddCertification}
//             />
//             {certificationInput ? (
//               <TouchableOpacity 
//                 style={styles.clearButton} 
//                 onPress={() => setCertificationInput('')}
//               >
//                 <Text style={styles.clearButtonText}>✕</Text>
//               </TouchableOpacity>
//             ) : null}
//             <TouchableOpacity 
//               style={[styles.addSmallButton, !certificationInput.trim() && styles.addButtonDisabled]} 
//               onPress={handleAddCertification}
//               disabled={!certificationInput.trim()}
//             >
//               <Text style={styles.buttonText}>Add</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {formData.certifications.map((cert, index) => (
//           <View key={index} style={styles.listItem}>
//             <View style={styles.itemContent}>
//               <Text style={styles.itemTitle}>{cert}</Text>
//             </View>
//             <TouchableOpacity
//               style={styles.removeItemButton}
//               onPress={() => {
//                 const updatedCertifications = [...formData.certifications];
//                 updatedCertifications.splice(index, 1);
//                 setFormData({...formData, certifications: updatedCertifications});
//               }}
//             >
//               <Text style={styles.removeItemButtonText}>✕</Text>
//             </TouchableOpacity>
//           </View>
//         ))}

//         {/* Insurances */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionHeaderText}>Insurances</Text>
//           <TouchableOpacity 
//             style={styles.addButton} 
//             onPress={() => setShowInsuranceForm(true)}
//           >
//             <Text style={styles.addButtonText}>+ Add Insurance</Text>
//           </TouchableOpacity>
//         </View>

//         {formData.insurances.map((insurance, index) => (
//           <View key={index} style={styles.listItem}>
//             <View style={styles.itemContent}>
//               <Text style={styles.itemTitle}>{insurance.type}</Text>
//               <Text style={styles.itemDetail}>Coverage: {insurance.coverage}</Text>
//               <Text style={styles.itemDetail}>Issuer: {insurance.issuer}</Text>
//             </View>
//             <TouchableOpacity style={styles.removeItemButton} onPress={() => removeInsurance(index)}>
//               <Text style={styles.removeItemButtonText}>✕</Text>
//             </TouchableOpacity>
//           </View>
//         ))}

//         {showInsuranceForm && (
//           <View style={styles.subForm}>
//             <View style={[styles.formGroup, {zIndex: getZIndex(openInsuranceType)}]}>
//               <Text style={styles.label}>Insurance Type</Text>
//               <DropDownPicker
//                 open={openInsuranceType}
//                 value={newInsurance.type}
//                 items={getInsuranceTypeItems()}
//                 setOpen={(value) => handleOpenDropdown(setOpenInsuranceType, openInsuranceType)}
//                 setValue={(callback) => {
//                   const value = callback(newInsurance.type);
//                   setNewInsurance({...newInsurance, type: value});
//                 }}
//                 placeholder="Select"
//                 style={styles.dropdownStyle}
//                 textStyle={styles.dropdownTextStyle}
//                 dropDownContainerStyle={styles.dropdownContainerStyle}
//                 listItemContainerStyle={styles.dropdownItemStyle}
//                 listMode="SCROLLVIEW"
//                 scrollViewProps={{
//                   nestedScrollEnabled: true,
//                 }}
//               />
//             </View>
            
//             <View style={[styles.formGroup, {zIndex: getZIndex(openInsuranceCoverage)}]}>
//               <Text style={styles.label}>Coverage</Text>
//               <DropDownPicker
//                 open={openInsuranceCoverage}
//                 value={newInsurance.coverage}
//                 items={getInsuranceCoverageItems()}
//                 setOpen={(value) => handleOpenDropdown(setOpenInsuranceCoverage, openInsuranceCoverage)}
//                 setValue={(callback) => {
//                   const value = callback(newInsurance.coverage);
//                   if (value === 'custom') {
//                     handleCustomCoverage();
//                   } else {
//                     setNewInsurance({...newInsurance, coverage: value});
//                   }
//                 }}
//                 placeholder="Select"
//                 style={styles.dropdownStyle}
//                 textStyle={styles.dropdownTextStyle}
//                 dropDownContainerStyle={styles.dropdownContainerStyle}
//                 listItemContainerStyle={styles.dropdownItemStyle}
//                 zIndex={openInsuranceType ? 998 : 999}
//                 zIndexInverse={openInsuranceType ? 999 : 998}
//                 listMode="SCROLLVIEW"
//                 scrollViewProps={{
//                   nestedScrollEnabled: true,
//                 }}
//               />
//             </View>
            
//             <View style={[styles.formGroup, {zIndex: (openInsuranceType || openInsuranceCoverage) ? -1 : 1}]}>
//               <Text style={styles.label}>Issuer</Text>
//         <TextInput
//           style={styles.input}
//                 value={newInsurance.issuer}
//                 onChangeText={(text) => setNewInsurance({...newInsurance, issuer: text})}
//                 placeholder="e.g. Lloyds"
//           placeholderTextColor="#999"
//               />
//             </View>

//             <View style={styles.buttonRow}>
//               <TouchableOpacity style={styles.cancelButton} onPress={() => setShowInsuranceForm(false)}>
//                 <Text style={styles.buttonText}>Cancel</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.saveButton} onPress={addInsurance}>
//                 <Text style={styles.buttonText}>Save</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}

//         {/* Custom Coverage Modal */}
//         <Modal
//           visible={showCustomCoverageModal}
//           transparent={true}
//           animationType="fade"
//           onRequestClose={() => setShowCustomCoverageModal(false)}
//         >
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalTitle}>Custom Coverage Amount</Text>
              
//               <View style={styles.modalForm}>
//                 <View style={styles.modalInputRow}>
//                   <TextInput
//                     style={styles.modalInput}
//                     value={customCoverageAmount}
//                     onChangeText={(text) => {
//                       if (/^(\d+)?(\.\d*)?$/.test(text) || text === '') {
//                         setCustomCoverageAmount(text);
//                       }
//                     }}
//                     placeholder="Enter amount"
//                     placeholderTextColor="#999"
//                     keyboardType="numeric"
//                   />
                  
//                   <View style={[styles.modalDropdown, {zIndex: getZIndex(openCustomCoverageUnit)}]}>
//                     <DropDownPicker
//                       open={openCustomCoverageUnit}
//                       value={customCoverageUnit}
//                       items={getCoverageUnitItems()}
//                       setOpen={setOpenCustomCoverageUnit}
//                       setValue={(callback) => {
//                         const value = callback(customCoverageUnit);
//                         setCustomCoverageUnit(value);
//                       }}
//                       placeholder="Select"
//                       style={styles.dropdownStyle}
//                       textStyle={styles.dropdownTextStyle}
//                       dropDownContainerStyle={styles.dropdownContainerStyle}
//                       listItemContainerStyle={styles.dropdownItemStyle}
//                     />
//                   </View>
//                 </View>
                
//                 <View style={styles.modalButtons}>
//                   <TouchableOpacity
//                     style={styles.modalCancelButton}
//                     onPress={() => setShowCustomCoverageModal(false)}
//                   >
//                     <Text style={styles.modalCancelButtonText}>Cancel</Text>
//                   </TouchableOpacity>
                  
//                   <TouchableOpacity
//                     style={[
//                       styles.modalSaveButton,
//                       (!customCoverageAmount || customCoverageAmount === '0') && styles.modalButtonDisabled
//                     ]}
//                     onPress={saveCustomCoverage}
//                     disabled={!customCoverageAmount || customCoverageAmount === '0'}
//                   >
//                     <Text style={styles.modalSaveButtonText}>Save</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </Modal>

//         {/* Photos */}
//         <View style={styles.mainSectionHeader}>
//           <Text style={styles.mainSectionHeaderText}>Photos</Text>
//         </View>
        
//         {/* <PhotoAlbum
//           photos={photos}
//           onPhotoChange={setPhotos}
//           maxPhotos={8}
//           containerStyle={{ paddingHorizontal: 16 }}
//         /> */}
//         <TouchableOpacity 
//           style={styles.submitButton}
//           onPress={handleSubmit}
//         >
//           <Text style={styles.submitButtonText}>Create Offering</Text>
//         </TouchableOpacity>

//       </View>
//     </View>
//   );
};

// Local styles for the PlumbingForm component
const localStyles = StyleSheet.create({
  // Original styles from parent should remain in parent
  container: {
    flex: 1,
  },
  // Dropdown-specific styles
  dropdownStyle: {
    backgroundColor: '#f5f5f5',
    borderColor: '#ddd',
    borderRadius: 5,
    height: 44,
  },
  dropdownTextStyle: {
    fontSize: 16,
    color: '#333',
  },
  dropdownContainerStyle: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
  dropdownItemStyle: {
    height: 44,
    justifyContent: 'center',
  },
  
  // Main section headers
  mainSectionHeader: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    alignItems: 'center',
  },
  mainSectionHeaderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  // Form content container for FlatList
  formContentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 40,
    width: '100%',
  },
  
  // Subsection headers
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 8,
    marginTop: 24,
    marginBottom: 16,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
  },
  
  // Form group styling
  formGroup: {
    marginBottom: 20,
  },
  
  // Improved add buttons
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  addSmallButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Item styling
  listItem: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#333',
  },
  itemDetail: {
    fontSize: 14,
    marginBottom: 2,
    color: '#666',
  },
  removeItemButton: {
    padding: 4,
    alignSelf: 'flex-start',
  },
  removeItemButtonText: {
    color: '#FF3B30',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  // Subform styling
  subForm: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  
  // Button styling
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10,
  },
  cancelButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  
  // Tag item styling
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  tagItem: {
    backgroundColor: '#e1f5fe',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#81d4fa',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagText: {
    color: '#0277bd',
    fontSize: 14,
    marginRight: 6,
  },
  removeTagButton: {
    backgroundColor: '#81d4fa',
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeTagButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  
  // Clear button styling
  clearButton: {
    padding: 8,
    marginLeft: 4,
  },
  clearButtonText: {
    color: '#007AFF',
    fontSize: 16,
  },
  
  // Add button disabled styling
  addButtonDisabled: {
    backgroundColor: '#e0e0e0',
  },
  
  // Outlined button styling (for Add Photos)
  outlinedButton: {
    borderWidth: 2,
    borderColor: '#007AFF',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  outlinedButtonText: {
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 16,
  },
  
  // Row container styling
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  // Warranty styling
  warrantyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  warrantyInput: {
    width: '48%', // Give a little space between the two dropdowns
  },
  warrantyLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#444',
    marginBottom: 6,
  },
  
  // Custom Warranty Modal styling
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalForm: {
    marginBottom: 20,
  },
  modalInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  modalDropdown: {
    width: 140,
    marginLeft: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modalCancelButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  modalCancelButtonText: {
    color: '#333',
    fontWeight: '600',
  },
  modalSaveButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  modalSaveButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  modalButtonDisabled: {
    backgroundColor: '#e0e0e0',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
  },
  requiredStar: {
    color: 'red',
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    marginLeft: 8,
  },
  submitButton: {
    // backgroundColor: '#007AFF',
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  // Updated styles for address search
  searchContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  addressInput: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    flex: 1,
    height: 56,
  },
  selectedAddressContainer: {
    backgroundColor: '#e8eaf6',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 56,
  },
  selectedAddressText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    flexWrap: 'wrap',
    paddingRight: 8,
  },
  removeAddressButton: {
    padding: 4,
  },
  removeAddressButtonText: {
    color: '#FF3B30',
    fontSize: 20,
    fontWeight: 'bold',
  },
  suggestionsList: {
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    zIndex: 1000,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    maxHeight: 200,
    marginTop: 5,
    borderRadius: 8,
  },
  suggestionItem: {
    padding: 13,
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  suggestionText: {
    fontSize: 14,
    color: '#333',
  },
  // Updated styles for date picker
  datePickerButton: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    position: 'relative',
  },
  datePickerButtonText: {
    fontSize: 16,
    color: '#333',
  },
  calendarIcon: {
    position: 'absolute',
    right: 8,
    backgroundColor: '#e8e3f8',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Modal styles for iOS date picker
  datePickerContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
  },
  datePickerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  datePickerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  datePickerCancel: {
    color: '#999',
    fontSize: 16,
  },
  datePickerDone: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
  datePickerIOS: {
    height: 240,
  },
  // Modal styles for iOS date picker
  datePickerModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
});

export default PlumbingForm; 