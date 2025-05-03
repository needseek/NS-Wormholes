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
const FormSection = ({ title, children, styles }) => (
  <View style={{ marginBottom: 28 }}>
    {title && (
      <View style={styles.mainSectionHeader}>
        <Text style={styles.mainSectionHeaderText}>{title}</Text>
      </View>
    )}
    <View>{children}</View>
  </View>
);

// ------------------------ FORM INPUT ------------------------------------
const FormInput = ({ label, value, setValue, placeholder, required, keyboardType, multiline, styles })=> {
  return (
    <View style={styles.formGroup}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && <Text style={styles.requiredStar}> *</Text>}
        </Text>
      )}
      <TextInput
        style={[styles.input, multiline && styles.multilineInput]}
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
const FormDropdown = ({ label, items, value, setValue, placeholder, zIndex, registry, styles }) => {
  const { DropDownPicker } = registry;
  const [open, setOpen] = useState(false);

  return (
    <View style={[styles.formGroup, { zIndex }]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        placeholder={placeholder}
        style={styles.dropdownStyle}
        textStyle={styles.dropdownTextStyle}
        dropDownContainerStyle={styles.dropdownContainerStyle}
      />
    </View>
  );
};

// ------------------------ ADDRESS SEARCH ---------------------------------
const AddressSearch = ({ value, setValue, googleApiKey, registry, styles }) => {
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
    <View style={styles.formGroup}>
      <FormInput
        label="Service Address"
        value={value}
        setValue={(text) => {
          setValue(text);
          searchAddress(text);
        }}
        placeholder="Search address..."
        registry={registry}
        styles={styles}
      />
      
      {results.length > 0 && (
        <FlatList
          data={results}
          keyExtractor={(item) => item.place_id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.addressItem}
              onPress={() => setValue(item.description)}
            >
              <Text style={styles.addressText}>{item.description}</Text>
            </TouchableOpacity>
          )}
          style={styles.addressList}
        />
      )}
    </View>
  );
};

// ------------------------ DATE PICKER -------------------------------------
const DatePicker = ({ date, setDate, registry, styles }) => {
  const { DateTimePicker, IconButton } = registry;
  const [showPicker, setShowPicker] = useState(false);

  return (
    <View style={styles.dateContainer}>
      <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowPicker(true)}>
        <Text style={styles.datePickerText}>
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
const SwitchInput = ({ label, value, setValue, styles }) => {
  return (
    <View style={styles.switchContainer}>
      <Text style={styles.switchLabel}>{label}</Text>
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
const WarrantySelector = ({ parts, setParts, labor, setLabor, registry, styles }) => {
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
    <View style={styles.warrantyContainer}>
      <FormDropdown
        label="Parts Warranty"
        items={warrantyOptions}
        value={parts}
        setValue={setParts}
        registry={registry}
        zIndex={1000}
        styles={styles}
      />
      <FormDropdown
        label="Labor Warranty"
        items={warrantyOptions}
        value={labor}
        setValue={setLabor}
        registry={registry}
        zIndex={999}
        styles={styles}
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
  registry,
  styles
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
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{title}</Text>
          
          <View style={styles.modalForm}>
            <Text style={styles.modalInputLabel}>{inputLabel}</Text>
            
            <View style={styles.modalInputRow}>
              <TextInput
                style={styles.modalInput}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Enter value"
                placeholderTextColor="#999"
                keyboardType="numeric"
              />
              
              <View style={[styles.modalDropdown, { zIndex: openUnitDropdown ? 1000 : 1 }]}>
                <DropDownPicker
                  open={openUnitDropdown}
                  value={selectedUnit}
                  items={unitItems}
                  setOpen={setOpenUnitDropdown}
                  setValue={setSelectedUnit}
                  placeholder="Select unit"
                  style={styles.dropdownStyle}
                  textStyle={styles.dropdownTextStyle}
                  dropDownContainerStyle={styles.dropdownContainerStyle}
                  listItemContainerStyle={styles.dropdownItemStyle}
                />
              </View>
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalCancelButton}
                onPress={onClose}
              >
                <Text style={styles.modalCancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[
                  styles.modalSaveButton,
                  (!inputValue || inputValue === '0') && styles.modalButtonDisabled
                ]}
                onPress={handleSave}
                disabled={!inputValue || inputValue === '0'}
              >
                <Text style={styles.modalSaveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

// ---------------------- COVERAGE & INSURANCES SUB-COMPONENTS ----------------
const LicenseForm = ({ onSave, onCancel, registry, styles }) => {
  const [license, setLicense] = useState({
    title: '',
    issuer: '',
    type: 'Business License',
    scope: ''
  });

  return (
    <View style={styles.formGroup}>
      <FormInput
        label="License Title"
        value={license.title}
        setValue={(text) => setLicense(prev => ({ ...prev, title: text }))}
        placeholder="State Plumbing License"
        required
        registry={registry}
        styles={styles}
      />

      <FormInput
        label="Issuing Authority"
        value={license.issuer}
        setValue={(text) => setLicense(prev => ({ ...prev, issuer: text }))}
        placeholder="State Licensing Board"
        required
        registry={registry}
        styles={styles}
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
        styles={styles}
      />

      <View style={styles.formActions}>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={onCancel}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.saveButton]}
          onPress={() => onSave(license)}
          disabled={!license.title || !license.issuer}
        >
          <Text style={styles.buttonText}>Save License</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const InsuranceForm = ({ onSave, onCancel, onCustomCoverage, registry, styles }) => {
  const [insurance, setInsurance] = useState({
    type: 'commercial liability',
    coverage: '1MM',
    issuer: ''
  });

  return (
    <View style={styles.subForm}>
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
        styles={styles}
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
        styles={styles}
      />

      <FormInput
        label="Insurance Provider"
        value={insurance.issuer}
        setValue={(text) => setInsurance(prev => ({ ...prev, issuer: text }))}
        placeholder="Insurance Company Name"
        required
        registry={registry}
        styles={styles}
      />

      <View style={styles.formActions}>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={onCancel}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.saveButton]}
          onPress={() => onSave(insurance)}
          disabled={!insurance.issuer}
        >
          <Text style={styles.buttonText}>Save Insurance</Text>
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
  isValidPhoneNumber,
  isValidEmail,
  GOOGLE_API,
  registry,
  styles
}) => {
  return (
    <FormSection title="Personal Details" registry={registry} styles={styles}>
      {/* Phone Input */}
      <FormInput
        label="Phone"
        value={formData.contact.phone}
        setValue={(text) => updateContact('phone', text.replace(/[^\d\s+]/g, ''))}
        placeholder="e.g. +1 650 288 7596"
        required
        keyboardType="phone-pad"
        registry={registry}
        styles={styles}
      />
      {formData.contact.phone && !isValidPhoneNumber(formData.contact.phone) && (
        <Text style={localStyles.errorText}>Please enter a valid phone number with country code</Text>
      )}

      {/* Email Input */}
      <FormInput
        label="Email"
        value={formData.contact.email}
        setValue={(text) => updateContact('email', text)}
        placeholder="e.g. example@domain.com"
        required
        keyboardType="email-address"
        registry={registry}
        styles={styles}
      />
      {formData.contact.email && !isValidEmail(formData.contact.email) && (
        <Text style={localStyles.errorText}>Please enter a valid email address</Text>
      )}

      {/* Website Input */}
      <FormInput
        label="Website"
        value={formData.contact.website}
        setValue={(text) => updateContact('website', text)}
        placeholder="e.g. https://yourwebsite.com"
        registry={registry}
        styles={styles}
      />

      {/* Address Search */}
      <AddressSearch
        value={formData.contact.address}
        setValue={(text) => updateContact('address', text)}
        googleApiKey={GOOGLE_API}
        registry={registry}
        styles={styles}
      />
    </FormSection>
  );
};

// ---------------------- SERVICE INFORMATION COMPONENT ----------------------
const ServiceInfo = ({ formData, setFormData, registry, styles }) => {
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
    <FormSection title="Service Information" registry={registry} styles={styles}>
      {/* Title */}
      <FormInput
        label="Service Title"
        value={formData.title}
        setValue={(text) => setFormData({...formData, title: text})}
        placeholder="Professional Plumbing Services"
        required
        registry={registry}
        styles={styles}
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
        styles={styles}
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
        styles={styles}
      />

      {/* Business Date */}
      <DatePicker
        date={formData.businessCommencementDate}
        setDate={(date) => setFormData({...formData, businessCommencementDate: date})}
        registry={registry}
        styles={styles}
      />

      {/* Warranty Selection */}
      <WarrantySelector
        parts={formData.warrantyParts}
        setParts={handleWarrantyChange('warrantyParts')}
        labor={formData.warrantyLabor}
        setLabor={handleWarrantyChange('warrantyLabor')}
        registry={registry}
        styles={styles}
      />

      {/* Service Options */}
      <View style={styles.optionsContainer}>
        <SwitchInput
          label="Emergency Services Available"
          value={formData.emergencyServicesProvided}
          setValue={(value) => setFormData({...formData, emergencyServicesProvided: value})}
          registry={registry}
          styles={styles}
        />
        <SwitchInput
          label="Permitting Included"
          value={formData.permittingIncluded === "yes"}
          setValue={(value) => setFormData({...formData, permittingIncluded: value ? "yes" : "no"})}
          registry={registry}
          styles={styles}
        />
      </View>

      {/* Custom Warranty Modal */}
      <CustomSelectorModal
        visible={showCustomWarrantyModal}
        title={`Custom ${capitalize(customWarrantyType)} Warranty`}
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
        styles={styles}
      />
    </FormSection>
  );
};


// ---------------------- COVERAGE & INSURANCES COMPONENT ----------------------
const CoverageInsurances = ({ formData, setFormData, registry, styles }) => {
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
    <FormSection title="Credentials & Coverage" registry={registry} styles={styles}>
      {/* Licenses Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.subSectionTitle}>Licenses</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setShowLicenseForm(true)}
        >
          <Text style={styles.addButtonText}>+ Add License</Text>
        </TouchableOpacity>
      </View>

      {formData.licenses.map((license, index) => (
        <View key={index} style={styles.listItem}>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>{license.title}</Text>
            <Text style={styles.itemDetail}>Issuer: {license.issuer}</Text>
            <Text style={styles.itemDetail}>Type: {license.type}</Text>
          </View>
          <TouchableOpacity 
            style={styles.removeButton}
            onPress={() => removeLicense(index)}
          >
            <Text style={styles.removeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>
      ))}

      {showLicenseForm && (
        <LicenseForm
          onSave={addLicense}
          onCancel={() => setShowLicenseForm(false)}
          registry={registry}
          styles={styles}
        />
      )}

      {/* Insurances Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.subSectionTitle}>Insurances</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setShowInsuranceForm(true)}
        >
          <Text style={styles.addButtonText}>+ Add Insurance</Text>
        </TouchableOpacity>
      </View>

      {formData.insurances.map((insurance, index) => (
        <View key={index} style={styles.listItem}>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>{insurance.type}</Text>
            <Text style={styles.itemDetail}>Coverage: {insurance.coverage}</Text>
            <Text style={styles.itemDetail}>Issuer: {insurance.issuer}</Text>
          </View>
          <TouchableOpacity 
            style={styles.removeButton}
            onPress={() => removeInsurance(index)}
          >
            <Text style={styles.removeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>
      ))}

      {showInsuranceForm && (
        <InsuranceForm
          onSave={addInsurance}
          onCancel={() => setShowInsuranceForm(false)}
          onCustomCoverage={() => setShowCoverageModal(true)}
          registry={registry}
          styles={styles}
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
        styles={styles}
      />
    </FormSection>
  );
};

// ---------------------- PHOTO ALBUM COMPONENT ----------------------
const PhotoAlbum = ({ photos, setPhotos, registry, styles }) => {
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
    <FormSection title="Photos" styles={styles}>
      <View style={styles.photoHeader}>
        <Text style={styles.photoCount}>{photos.length}/{MAX_PHOTOS} photos</Text>
      </View>
      <TouchableOpacity
        onPress={handleAddPhotos}
        disabled={photos.length >= MAX_PHOTOS}
        style={styles.outlinedButton}
      >
        <Ionicons name="add" size={20} color="#1877F2" />
        <Text style={styles.outlinedButtonText}>Add Photos</Text>
      </TouchableOpacity>
      {photos.length > 0 ? (
        <FlatList
          data={photos}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.photoGrid}
          renderItem={({ item }) => (
            <View style={styles.photoContainer}>
              <Image source={{ uri: item.uri }} style={styles.photo} />
              <TouchableOpacity 
                style={styles.removePhotoButton}
                onPress={() => removePhoto(item.id)}
              >
                <Ionicons name="close-circle" size={24} color="#FF3B30" />
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <View style={styles.emptyState}>
          <Ionicons name="images-outline" size={48} color="#CCCCCC" />
          <Text style={styles.emptyText}>No photos added yet</Text>
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
const validateData = (formData, registry) => {
  const { isValidPhoneNumber } = registry;
  if (!formData.title.trim()) {
    Alert.alert('Error', 'Please enter a title for your offering');
    return;
  }
  
  if (!formData.description.trim()) {
    Alert.alert('Error', 'Please enter a description for your offering');
    return;
  }
  if (formData.entity == "unselected") {
      Alert.alert('Error', 'Please select an entity type for your offering');
      return;
  }
  if (!formData.businessCommencementDate) {
      Alert.alert('Error', 'Please select a business commencement date for your offering');
      return;
  }
  if (formData.warrantyParts === null) {
      Alert.alert('Error', 'Please select a parts warranty period for your offering');
      return;
  }
  if (formData.warrantyLabor === null) {
      Alert.alert('Error', 'Please select a labor warranty period for your offering');
      return;
  }
  if (formData.contact.phone && !isValidPhoneNumber(formData.contact.phone)) {
      Alert.alert('Error', 'Please enter a valid phone number with country code (e.g. +1 for US)');
      return;
  }
  if (formData.contact.email && !isValidEmail(formData.contact.email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
  }
  if (!formData.contact.address.trim()) {
      Alert.alert('Error', 'Please enter an address for your offering');
      return;
  }
}

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

  const styles = { ...localStyles, ...parentStyles };
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
          styles={styles}
        />

        <PersonalDetails
          formData={formData}
          updateContact={updateContact}
          isValidEmail={isValidEmail}
          GOOGLE_API={GOOGLE_API}
          registry={registry}
          styles={styles}
        />

        <CoverageInsurances
          formData={formData}
          setFormData={setFormData}
          registry={registry}
          styles={styles}
        />

        <PhotoAlbum
          photos={formData.photos}
          setPhotos={(newPhotos) => setFormData(prev => ({...prev, photos: newPhotos}))}
          registry={registry}
          styles={styles}
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

// Local styles for the PlumbingForm component - force force
const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    width: '100%',
  },
  // Section header (blue, rounded, centered)
  mainSectionHeader: {
    backgroundColor: '#1877F2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    marginTop: 28,
    marginBottom: 18,
    shadowColor: '#1877F2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  mainSectionHeaderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  // Form group
  formGroup: {
    marginBottom: 20,
  },
  // Input and dropdown
  label: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 6,
    color: '#222',
  },
  requiredStar: {
    color: '#FF3B30',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#222',
    marginBottom: 0,
  },
  multilineInput: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  dropdownStyle: {
    backgroundColor: '#fff',
    borderColor: '#E0E0E0',
    borderRadius: 8,
    minHeight: 48,
  },
  dropdownTextStyle: {
    fontSize: 15,
    color: '#222',
  },
  dropdownContainerStyle: {
    backgroundColor: '#fff',
    borderColor: '#E0E0E0',
    borderRadius: 8,
  },
  // Switches
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchLabel: {
    fontSize: 15,
    color: '#222',
    flex: 1,
  },
  switchValue: {
    fontSize: 15,
    color: '#1877F2',
    marginLeft: 8,
    fontWeight: '600',
  },
  // Buttons
  addButton: {
    backgroundColor: '#1877F2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  // Photo album
  photoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  photoCount: {
    fontSize: 14,
    color: '#888',
  },
  outlinedButton: {
    borderWidth: 1.5,
    borderColor: '#1877F2',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  outlinedButtonText: {
    color: '#1877F2',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 6,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 30,
    marginTop: 10,
  },
  emptyStateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#888',
    marginTop: 12,
    textAlign: 'center',
  },
  // Misc
  errorText: {
    color: '#FF3B30',
    fontSize: 13,
    marginTop: 4,
  },
}); 


// force force
export default PlumbingForm;