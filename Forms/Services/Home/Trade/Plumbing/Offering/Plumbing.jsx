//  <-- MUST DO ON UPDATE!! --> 
// 1. transpile command: npx babel --presets=@babel/preset-env,@babel/preset-react Plumbing.jsx -o Plumbing.js
// 2. add, commit, push to main
// Force Force Force Force

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity, Dimensions, Modal, Alert, FlatList, Platform, Image } from 'react-native';


// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------ BASE FORM COMPONENTS --------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// ------------------------ FORM SECTION ----------------------------------
const FormSection = ({ title, children, registry }) => {
  return (
    <View style={localStyles.sectionContainer}>
      {title && <Text style={localStyles.sectionTitle}>{title}</Text>}
      <View style={localStyles.sectionContent}>{children}</View>
    </View>
  );
};

// ------------------------ FORM INPUT ------------------------------------
const FormInput = ({ label, value, setValue, placeholder, required, keyboardType, multiline, registry }) => {
  return (
    <View style={localStyles.inputContainer}>
      {label && (
        <Text style={localStyles.label}>
          {label}
          {required && <Text style={localStyles.requiredStar}> *</Text>}
        </Text>
      )}
      <TextInput
        style={[localStyles.input, multiline && localStyles.multilineInput]}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor="#999"
        keyboardType={keyboardType}
        multiline={multiline}
      />
    </View>
  );
};

// ------------------------ FORM DROPDOWN ---------------------------------
const FormDropdown = ({ label, items, value, setValue, placeholder, zIndex, registry }) => {
  const { DropDownPicker } = registry;
  const [open, setOpen] = useState(false);

  return (
    <View style={[localStyles.dropdownContainer, { zIndex }]}>
      {label && <Text style={localStyles.label}>{label}</Text>}
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        placeholder={placeholder}
        style={localStyles.dropdown}
        textStyle={localStyles.dropdownText}
        dropDownContainerStyle={localStyles.dropdownList}
      />
    </View>
  );
};

// ------------------------ ADDRESS SEARCH ---------------------------------
const AddressSearch = ({ value, setValue, googleApiKey, registry }) => {
  const [results, setResults] = useState([]);
  
  const searchAddress = async (query) => {
    if (!query || !googleApiKey) return;
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(query)}&key=${googleApiKey}`
      );
      const data = await response.json();
      setResults(data.predictions || []);
    } catch (error) {
      console.error("Address search error:", error);
    }
  };

  return (
    <View style={localStyles.addressContainer}>
      <FormInput
        label="Service Address"
        value={value}
        setValue={(text) => {
          setValue(text);
          searchAddress(text);
        }}
        placeholder="Search address..."
        registry={registry}
      />
      
      {results.length > 0 && (
        <FlatList
          data={results}
          keyExtractor={(item) => item.place_id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={localStyles.addressItem}
              onPress={() => setValue(item.description)}
            >
              <Text style={localStyles.addressText}>{item.description}</Text>
            </TouchableOpacity>
          )}
          style={localStyles.addressList}
        />
      )}
    </View>
  );
};

// ------------------------ DATE PICKER -------------------------------------
const DatePicker = ({ date, setDate, registry }) => {
  const { DateTimePicker, IconButton } = registry;
  const [showPicker, setShowPicker] = useState(false);

  return (
    <View style={localStyles.dateContainer}>
      <TouchableOpacity style={localStyles.dateButton} onPress={() => setShowPicker(true)}>
        <Text style={localStyles.dateText}>
          {date ? `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` : 'Select date'}
        </Text>
        <IconButton icon="calendar" size={20} color="#007AFF" />
      </TouchableOpacity>
      
      {showPicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowPicker(false);
            selectedDate && setDate(selectedDate);
          }}
        />
      )}
    </View>
  );
};

// ------------------------ SWITCH INPUT -----------------------------------
const SwitchInput = ({ label, value, setValue, registry }) => {
  return (
    <View style={localStyles.switchContainer}>
      <Text style={localStyles.switchLabel}>{label}</Text>
      <Switch
        value={value}
        onValueChange={setValue}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={value ? "#007AFF" : "#f4f3f4"}
      />
    </View>
  );
};
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------ COMPLEX FORM COMPONENTS -----------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// ------------------------ WARRANTY SELECTOR -----------------------------
const WarrantySelector = ({ parts, setParts, labor, setLabor, registry }) => {
  const warrantyOptions = [
    { label: 'None', value: '0' },
    { label: '1 month', value: '1 month' },
    { label: '3 months', value: '3 months' },
    { label: '6 months', value: '6 months' },
    { label: '1 year', value: '1 year' },
    { label: '2 years', value: '2 years' },
    { label: 'Custom...', value: 'custom' }
  ];

  return (
    <View style={localStyles.warrantyContainer}>
      <FormDropdown
        label="Parts Warranty"
        items={warrantyOptions}
        value={parts}
        setValue={setParts}
        registry={registry}
        zIndex={1000}
      />
      <FormDropdown
        label="Labor Warranty"
        items={warrantyOptions}
        value={labor}
        setValue={setLabor}
        registry={registry}
        zIndex={999}
      />
    </View>
  );
};

// ------------------------ CUSTOM SELECTOR MODAL --------------------------
const CustomSelectorModal = ({
  visible,
  title,
  inputLabel,
  initialValue,
  initialUnit,
  unitItems,
  onSave,
  onClose,
  registry
}) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [selectedUnit, setSelectedUnit] = useState(initialUnit);
  const [openUnitDropdown, setOpenUnitDropdown] = useState(false);
  const { DropDownPicker } = registry;

  // Reset state when modal becomes visible
  useEffect(() => {
    if (visible) {
      setInputValue(initialValue);
      setSelectedUnit(initialUnit);
    }
  }, [visible, initialValue, initialUnit]);

  const handleSave = () => {
    if (inputValue && inputValue !== '0') {
      onSave(inputValue, selectedUnit);
    }
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={localStyles.modalOverlay}>
        <View style={localStyles.modalContent}>
          <Text style={localStyles.modalTitle}>{title}</Text>
          
          <View style={localStyles.modalForm}>
            <Text style={localStyles.modalInputLabel}>{inputLabel}</Text>
            
            <View style={localStyles.modalInputRow}>
              <TextInput
                style={localStyles.modalInput}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Enter value"
                placeholderTextColor="#999"
                keyboardType="numeric"
              />
              
              <View style={[localStyles.modalDropdown, { zIndex: openUnitDropdown ? 1000 : 1 }]}>
                <DropDownPicker
                  open={openUnitDropdown}
                  value={selectedUnit}
                  items={unitItems}
                  setOpen={setOpenUnitDropdown}
                  setValue={setSelectedUnit}
                  placeholder="Select unit"
                  style={localStyles.dropdownStyle}
                  textStyle={localStyles.dropdownTextStyle}
                  dropDownContainerStyle={localStyles.dropdownContainerStyle}
                  listItemContainerStyle={localStyles.dropdownItemStyle}
                />
              </View>
            </View>

            <View style={localStyles.modalButtons}>
              <TouchableOpacity
                style={localStyles.modalCancelButton}
                onPress={onClose}
              >
                <Text style={localStyles.modalCancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[
                  localStyles.modalSaveButton,
                  (!inputValue || inputValue === '0') && localStyles.modalButtonDisabled
                ]}
                onPress={handleSave}
                disabled={!inputValue || inputValue === '0'}
              >
                <Text style={localStyles.modalSaveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

// ---------------------- COVERAGE & INSURANCES SUB-COMPONENTS ----------------
const LicenseForm = ({ onSave, onCancel, registry }) => {
  const [license, setLicense] = useState({
    title: '',
    issuer: '',
    type: 'Business License',
    scope: ''
  });

  return (
    <View style={localStyles.subForm}>
      <FormInput
        label="License Title"
        value={license.title}
        setValue={(text) => setLicense(prev => ({ ...prev, title: text }))}
        placeholder="State Plumbing License"
        required
        registry={registry}
      />

      <FormInput
        label="Issuing Authority"
        value={license.issuer}
        setValue={(text) => setLicense(prev => ({ ...prev, issuer: text }))}
        placeholder="State Licensing Board"
        required
        registry={registry}
      />

      <FormDropdown
        label="License Type"
        items={[
          { label: 'Business License', value: 'Business License' },
          { label: 'Professional License', value: 'Professional License' },
          { label: 'Trade License', value: 'Trade License' }
        ]}
        value={license.type}
        setValue={(value) => setLicense(prev => ({ ...prev, type: value }))}
        registry={registry}
        zIndex={2000}
      />

      <View style={localStyles.formActions}>
        <TouchableOpacity
          style={[localStyles.button, localStyles.cancelButton]}
          onPress={onCancel}
        >
          <Text style={localStyles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[localStyles.button, localStyles.saveButton]}
          onPress={() => onSave(license)}
          disabled={!license.title || !license.issuer}
        >
          <Text style={localStyles.buttonText}>Save License</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const InsuranceForm = ({ onSave, onCancel, onCustomCoverage, registry }) => {
  const [insurance, setInsurance] = useState({
    type: 'commercial liability',
    coverage: '1MM',
    issuer: ''
  });

  return (
    <View style={localStyles.subForm}>
      <FormDropdown
        label="Insurance Type"
        items={[
          { label: 'Commercial Liability', value: 'commercial liability' },
          { label: 'Professional Liability', value: 'professional liability' },
          { label: 'Workers Compensation', value: 'workers compensation' }
        ]}
        value={insurance.type}
        setValue={(value) => setInsurance(prev => ({ ...prev, type: value }))}
        registry={registry}
        zIndex={2000}
      />

      <FormDropdown
        label="Coverage Amount"
        items={[
          { label: '$1 Million', value: '1MM' },
          { label: '$2 Million', value: '2MM' },
          { label: '$5 Million', value: '5MM' },
          { label: 'Custom...', value: 'custom' }
        ]}
        value={insurance.coverage}
        setValue={(value) => {
          if (value === 'custom') {
            onCustomCoverage();
          } else {
            setInsurance(prev => ({ ...prev, coverage: value }));
          }
        }}
        registry={registry}
        zIndex={1900}
      />

      <FormInput
        label="Insurance Provider"
        value={insurance.issuer}
        setValue={(text) => setInsurance(prev => ({ ...prev, issuer: text }))}
        placeholder="Insurance Company Name"
        required
        registry={registry}
      />

      <View style={localStyles.formActions}>
        <TouchableOpacity
          style={[localStyles.button, localStyles.cancelButton]}
          onPress={onCancel}
        >
          <Text style={localStyles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[localStyles.button, localStyles.saveButton]}
          onPress={() => onSave(insurance)}
          disabled={!insurance.issuer}
        >
          <Text style={localStyles.buttonText}>Save Insurance</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------ SECTION COMPONENTS ----------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// ---------------------- PERSONAL DETAILS COMPONENT ----------------------
const PersonalDetails = ({ 
  formData, 
  updateContact,
  isValidEmail,
  GOOGLE_API,
  registry 
}) => {
  const { isValidPhoneNumber } = registry;
  return (
    <>
      <View style={localStyles.mainSectionHeader}>
        <Text style={localStyles.mainSectionHeaderText}>Personal Details</Text>
      </View>

      {/* Phone Input */}
      <View style={localStyles.formGroup}>
        <Text style={localStyles.label}>Phone <Text style={localStyles.requiredStar}>*</Text></Text>
        <TextInput
          style={localStyles.input}
          value={formData.contact.phone}
          onChangeText={(text) => updateContact('phone', text.replace(/[^\d\s+]/g, ''))}
          placeholder="e.g. +1 650 288 7596"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          autoCapitalize="none"
        />
        {formData.contact.phone && !isValidPhoneNumber(formData.contact.phone) && (
          <Text style={localStyles.errorText}>Please enter a valid phone number with country code</Text>
        )}
      </View>

      {/* Email Input */}
      <View style={localStyles.formGroup}>
        <Text style={localStyles.label}>Email <Text style={localStyles.requiredStar}>*</Text></Text>
        <TextInput
          style={localStyles.input}
          value={formData.contact.email}
          onChangeText={(text) => updateContact('email', text)}
          placeholder="e.g. example@domain.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {formData.contact.email && !isValidEmail(formData.contact.email) && (
          <Text style={localStyles.errorText}>Please enter a valid email address</Text>
        )}
      </View>

      {/* Website Input */}
      <View style={localStyles.formGroup}>
        <Text style={localStyles.label}>Website</Text>
        <TextInput
          style={localStyles.input}
          value={formData.contact.website}
          onChangeText={(text) => updateContact('website', text)}
          placeholder="e.g. https://yourwebsite.com"
          placeholderTextColor="#999"
          autoCapitalize="none"
        />
      </View>

      {/* Address Search */}
      <View style={localStyles.formGroup}>
        <AddressSearch
          value={formData.contact.address}
          setValue={(text) => updateContact('address', text)}
          googleApiKey={GOOGLE_API}
          registry={registry}
        />
      </View>
    </>
  );
};

// ---------------------- SERVICE INFORMATION COMPONENT ----------------------
const ServiceInfo = ({ formData, setFormData, registry }) => {
  // Custom warranty modal state
  const [showCustomWarrantyModal, setShowCustomWarrantyModal] = useState(false);
  const [customWarrantyType, setCustomWarrantyType] = useState('');

  // Handle warranty selection with custom logic
  const handleWarrantyChange = (type) => (value) => {
    if (value === 'custom') {
      setCustomWarrantyType(type);
      setShowCustomWarrantyModal(true);
    } else {
      setFormData(prev => ({...prev, [type]: value}));
    }
  };

  return (
    <FormSection title="Service Information" registry={registry}>
      {/* Title */}
      <FormInput
        label="Service Title"
        value={formData.title}
        setValue={(text) => setFormData({...formData, title: text})}
        placeholder="Professional Plumbing Services"
        required
        registry={registry}
      />

      {/* Description */}
      <FormInput
        label="Service Description"
        value={formData.description}
        setValue={(text) => setFormData({...formData, description: text})}
        placeholder="Describe your services and expertise"
        multiline
        required
        registry={registry}
      />

      {/* Entity Type */}
      <FormDropdown
        label="Business Entity Type"
        items={[
          { label: 'Individual', value: 'individual' },
          { label: 'Business', value: 'business' },
          { label: 'Non-Profit', value: 'non-profit' }
        ]}
        value={formData.entity}
        setValue={(value) => setFormData({...formData, entity: value})}
        placeholder="Select entity type"
        required
        registry={registry}
        zIndex={3000}
      />

      {/* Business Date */}
      <DatePicker
        date={formData.businessCommencementDate}
        setDate={(date) => setFormData({...formData, businessCommencementDate: date})}
        registry={registry}
      />

      {/* Warranty Selection */}
      <WarrantySelector
        parts={formData.warrantyParts}
        setParts={handleWarrantyChange('warrantyParts')}
        labor={formData.warrantyLabor}
        setLabor={handleWarrantyChange('warrantyLabor')}
        registry={registry}
      />

      {/* Service Options */}
      <View style={localStyles.optionsContainer}>
        <SwitchInput
          label="Emergency Services Available"
          value={formData.emergencyServicesProvided}
          setValue={(value) => setFormData({...formData, emergencyServicesProvided: value})}
          registry={registry}
        />
        <SwitchInput
          label="Permitting Included"
          value={formData.permittingIncluded === "yes"}
          setValue={(value) => setFormData({...formData, permittingIncluded: value ? "yes" : "no"})}
          registry={registry}
        />
      </View>

      {/* Custom Warranty Modal */}
      <CustomSelectorModal
        visible={showCustomWarrantyModal}
        title={`Custom ${customWarrantyType} Warranty`}
        inputLabel="Warranty Duration"
        initialValue={formData[`customWarranty${capitalize(customWarrantyType)}Value`]}
        initialUnit={formData[`customWarranty${capitalize(customWarrantyType)}Unit`]}
        unitItems={[
          { label: 'Days', value: 'days' },
          { label: 'Months', value: 'months' },
          { label: 'Years', value: 'years' }
        ]}
        onSave={(value, unit) => {
          const formatted = `${value} ${unit}`;
          setFormData(prev => ({
            ...prev,
            [`warranty${capitalize(customWarrantyType)}`]: formatted,
            [`customWarranty${capitalize(customWarrantyType)}Value`]: value,
            [`customWarranty${capitalize(customWarrantyType)}Unit`]: unit
          }));
        }}
        onClose={() => setShowCustomWarrantyModal(false)}
        registry={registry}
      />
    </FormSection>
  );
};


// ---------------------- COVERAGE & INSURANCES COMPONENT ----------------------
const CoverageInsurances = ({ formData, setFormData, registry }) => {
  const [showLicenseForm, setShowLicenseForm] = useState(false);
  const [showInsuranceForm, setShowInsuranceForm] = useState(false);
  const [showCoverageModal, setShowCoverageModal] = useState(false);

  // License Management
  const addLicense = (newLicense) => {
    setFormData(prev => ({
      ...prev,
      licenses: [...prev.licenses, newLicense]
    }));
    setShowLicenseForm(false);
  };

  const removeLicense = (index) => {
    setFormData(prev => ({
      ...prev,
      licenses: prev.licenses.filter((_, i) => i !== index)
    }));
  };

  // Insurance Management
  const addInsurance = (newInsurance) => {
    setFormData(prev => ({
      ...prev,
      insurances: [...prev.insurances, newInsurance]
    }));
    setShowInsuranceForm(false);
  };

  const removeInsurance = (index) => {
    setFormData(prev => ({
      ...prev,
      insurances: prev.insurances.filter((_, i) => i !== index)
    }));
  };

  return (
    <FormSection title="Credentials & Coverage" registry={registry}>
      {/* Licenses Section */}
      <View style={localStyles.sectionHeader}>
        <Text style={localStyles.subSectionTitle}>Licenses</Text>
        <TouchableOpacity
          style={localStyles.addButton}
          onPress={() => setShowLicenseForm(true)}
        >
          <Text style={localStyles.addButtonText}>+ Add License</Text>
        </TouchableOpacity>
      </View>

      {formData.licenses.map((license, index) => (
        <View key={index} style={localStyles.listItem}>
          <View style={localStyles.itemContent}>
            <Text style={localStyles.itemTitle}>{license.title}</Text>
            <Text style={localStyles.itemDetail}>Issuer: {license.issuer}</Text>
            <Text style={localStyles.itemDetail}>Type: {license.type}</Text>
          </View>
          <TouchableOpacity 
            style={localStyles.removeButton}
            onPress={() => removeLicense(index)}
          >
            <Text style={localStyles.removeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>
      ))}

      {showLicenseForm && (
        <LicenseForm
          onSave={addLicense}
          onCancel={() => setShowLicenseForm(false)}
          registry={registry}
        />
      )}

      {/* Insurances Section */}
      <View style={localStyles.sectionHeader}>
        <Text style={localStyles.subSectionTitle}>Insurances</Text>
        <TouchableOpacity
          style={localStyles.addButton}
          onPress={() => setShowInsuranceForm(true)}
        >
          <Text style={localStyles.addButtonText}>+ Add Insurance</Text>
        </TouchableOpacity>
      </View>

      {formData.insurances.map((insurance, index) => (
        <View key={index} style={localStyles.listItem}>
          <View style={localStyles.itemContent}>
            <Text style={localStyles.itemTitle}>{insurance.type}</Text>
            <Text style={localStyles.itemDetail}>Coverage: {insurance.coverage}</Text>
            <Text style={localStyles.itemDetail}>Issuer: {insurance.issuer}</Text>
          </View>
          <TouchableOpacity 
            style={localStyles.removeButton}
            onPress={() => removeInsurance(index)}
          >
            <Text style={localStyles.removeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>
      ))}

      {showInsuranceForm && (
        <InsuranceForm
          onSave={addInsurance}
          onCancel={() => setShowInsuranceForm(false)}
          onCustomCoverage={() => setShowCoverageModal(true)}
          registry={registry}
        />
      )}

      <CustomSelectorModal
        visible={showCoverageModal}
        title="Custom Coverage Amount"
        inputLabel="Coverage Value"
        initialValue=""
        initialUnit="dollars"
        unitItems={[
          { label: 'Dollars ($)', value: 'dollars' },
          { label: 'Thousands (K)', value: 'thousand' },
          { label: 'Millions (M)', value: 'million' }
        ]}
        onSave={(value, unit) => {
          let formatted = `$${value}`;
          if (unit === 'thousand') formatted += 'K';
          if (unit === 'million') formatted += 'M';
          setFormData(prev => ({
            ...prev,
            newInsurance: {
              ...prev.newInsurance,
              coverage: formatted
            }
          }));
        }}
        onClose={() => setShowCoverageModal(false)}
        registry={registry}
      />
    </FormSection>
  );
};

// ---------------------- PHOTO ALBUM COMPONENT ----------------------
const PhotoAlbum = ({ photos, setPhotos, registry }) => {
  const { ImagePicker, Ionicons } = registry;
  const MAX_PHOTOS = 8;

  const handleAddPhotos = async () => {
    try {
      // Check permissions
      const permissionResult = await ImagePicker.getMediaLibraryPermissionsAsync();
      if (!permissionResult.granted && permissionResult.canAskAgain) {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission Required', 'Please enable photo access in settings');
          return;
        }
      }

      // Launch image picker
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        selectionLimit: MAX_PHOTOS - photos.length,
        quality: 0.8,
      });

      if (!result.canceled && result.assets) {
        const newPhotos = result.assets
          .filter(asset => !photos.some(p => p.uri === asset.uri))
          .map(asset => ({
            id: `photo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            uri: asset.uri,
            width: asset.width,
            height: asset.height,
            type: asset.type || 'image',
            fileName: asset.fileName || `photo-${Date.now()}.jpg`,
          }));

        if (newPhotos.length > 0) {
          setPhotos([...photos, ...newPhotos]);
        }
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to select photos');
      console.error('Photo selection error:', error);
    }
  };

  const removePhoto = (photoId) => {
    setPhotos(photos.filter(photo => photo.id !== photoId));
  };

  return (
    <FormSection title="Photo Album" registry={registry}>
      <View style={localStyles.photoHeader}>
        <Text style={localStyles.photoCount}>
          {photos.length}/{MAX_PHOTOS} photos
        </Text>
        <TouchableOpacity
          onPress={handleAddPhotos}
          disabled={photos.length >= MAX_PHOTOS}
          style={[localStyles.addButton, photos.length >= MAX_PHOTOS && localStyles.disabledButton]}
        >
          <Ionicons name="add" size={20} color="#007AFF" />
          <Text style={localStyles.addButtonText}>Add Photos</Text>
        </TouchableOpacity>
      </View>

      {photos.length > 0 ? (
        <FlatList
          data={photos}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={localStyles.photoGrid}
          renderItem={({ item }) => (
            <View style={localStyles.photoContainer}>
              <Image source={{ uri: item.uri }} style={localStyles.photo} />
              <TouchableOpacity 
                style={localStyles.removePhotoButton}
                onPress={() => removePhoto(item.id)}
              >
                <Ionicons name="close-circle" size={24} color="#FF3B30" />
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <View style={localStyles.emptyState}>
          <Ionicons name="images-outline" size={48} color="#CCCCCC" />
          <Text style={localStyles.emptyText}>No photos added yet</Text>
        </View>
      )}
    </FormSection>
  );
};

// ---------------------- HELPER FUNCTIONS ----------------------
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate data
// const validateData = (formData, registry) => {
  // const { isValidPhoneNumber } = registry;
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


// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------ MAIN FORM COMPONENT ---------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

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
  const styles = { ...parentStyles, ...localStyles };
  const [formData, setFormData] = useState(() => ({
    title: '',
    description: '',
    entity: 'unselected',
    contact: { phone: '', email: '', website: '', address: '' },
    licenses: [],
    insurances: [],
    photos: [],
    businessCommencementDate: null,
    warrantyParts: null,
    warrantyLabor: null,
    emergencyServicesProvided: false,
    permittingIncluded: 'no',
    ...initialFormData,
    ...(offering ? {
      title: offering.title || '',
      description: offering.description || '',
      ...(offering.extraData || {})
    } : {})
  }));
  useEffect(() => {
    setParentFormData(formData);
  }, [formData, setParentFormData]);

  const updateContact = (field, value) => {
    setFormData(prev => ({
      ...prev,
      contact: { ...prev.contact, [field]: value }
    }));
  };

  // Form submission handler
  const handleSubmit = () => {
    const formattedData = {
      offering: {
        topic: breadcrumb,
        title: formData.title,
        description: formData.description,
        entity: [formData.entity],
        contact: formData.contact,
        licenses: formData.licenses,
        insurances: formData.insurances,
        photos: formData.photos,
        businessCommencementDate: formData.businessCommencementDate,
        warranty: `parts: ${formData.warrantyParts}, labor: ${formData.warrantyLabor}`,
        emergencyServicesProvided: formData.emergencyServicesProvided,
        permittingIncluded: formData.permittingIncluded
      }
    };

    console.log('Submitting offering:', formattedData);
    navigation?.navigate('CreateHave', { 
      selectedOption,
      breadcrumb,
      address: formData.contact.address,
      offeringTitle: formData.title,
      meta,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContentContainer}>
        <ServiceInfo
          formData={formData}
          setFormData={setFormData}
          registry={registry}
        />

        <PersonalDetails
          formData={formData}
          updateContact={updateContact}
          isValidEmail={isValidEmail}
          GOOGLE_API={GOOGLE_API}
          registry={registry}
        />

        <CoverageInsurances
          formData={formData}
          setFormData={setFormData}
          registry={registry}
        />

        <PhotoAlbum
          photos={formData.photos}
          setPhotos={(newPhotos) => setFormData(prev => ({...prev, photos: newPhotos}))}
          registry={registry}
        />

        <TouchableOpacity 
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Create Offering</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Local styles for the PlumbingForm component
const localStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  photoAlbumContainer: {
    marginVertical: 15,
    paddingHorizontal: 16,
  },
  photoAlbumHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  photoAlbumTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  photoCount: {
    fontSize: 14,
    color: '#777',
  },
  addPhotoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  addPhotoButtonDisabled: {
    opacity: 0.5,
  },
  addPhotoButtonText: {
    color: '#007AFF',
    fontWeight: '500',
    marginLeft: 6,
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginHorizontal: -2,
  },
  photoContainer: {
    width: '33.333%',
    aspectRatio: 1,
    padding: 2,
    position: 'relative',
  },
  photo: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
  },
  removePhotoButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
    zIndex: 1,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
    padding: 30,
    marginTop: 10,
  },
  emptyStateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#888',
    marginTop: 12,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default PlumbingForm; 