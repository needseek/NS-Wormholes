import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomDropdown from './CustomDropdown';

/**
 * License form component that allows adding multiple licenses with type, number and state
 */
const LicenseForm = ({
  licenses = [],
  setLicenses,
  licenseTypes = [],
  states = [],
  containerStyle = {},
}) => {
  const [licenseType, setLicenseType] = useState(null);
  const [licenseNumber, setLicenseNumber] = useState('');
  const [licenseState, setLicenseState] = useState(null);
  const [error, setError] = useState('');

  const addLicense = () => {
    if (!licenseType || !licenseNumber || !licenseState) {
      setError('Please fill out all license fields');
      return;
    }

    const licenseTypeObject = licenseTypes.find(type => type.value === licenseType);
    const stateObject = states.find(state => state.value === licenseState);

    const newLicense = {
      id: Date.now().toString(),
      type: licenseTypeObject ? licenseTypeObject.label : licenseType,
      typeValue: licenseType,
      number: licenseNumber,
      state: stateObject ? stateObject.label : licenseState,
      stateValue: licenseState,
    };

    setLicenses([...licenses, newLicense]);
    
    // Reset form
    setLicenseType(null);
    setLicenseNumber('');
    setLicenseState(null);
    setError('');
  };

  const removeLicense = (id) => {
    setLicenses(licenses.filter(license => license.id !== id));
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.sectionTitle}>Licenses</Text>

      <View style={styles.form}>
        <CustomDropdown
          label="License Type"
          placeholder="Select license type"
          items={licenseTypes}
          value={licenseType}
          setValue={setLicenseType}
          zIndex={3000}
          zIndexInverse={1000}
        />

        <View style={styles.rowInputs}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>License Number</Text>
            <TextInput
              style={styles.textInput}
              value={licenseNumber}
              onChangeText={setLicenseNumber}
              placeholder="Enter license number"
            />
          </View>
          
          <View style={[styles.inputContainer, styles.stateInput]}>
            <CustomDropdown
              label="State"
              placeholder="State"
              items={states}
              value={licenseState}
              setValue={setLicenseState}
              zIndex={2000}
              zIndexInverse={2000}
            />
          </View>
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={addLicense}
          activeOpacity={0.7}
        >
          <Ionicons name="add-circle-outline" size={20} color="#FFFFFF" />
          <Text style={styles.addButtonText}>Add License</Text>
        </TouchableOpacity>
      </View>

      {licenses.length > 0 && (
        <View style={styles.licenseList}>
          <FlatList
            data={licenses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.licenseItem}>
                <View style={styles.licenseDetails}>
                  <Text style={styles.licenseTitle}>{item.type}</Text>
                  <View style={styles.licenseSubDetails}>
                    <Text style={styles.licenseNumber}>{item.number}</Text>
                    <Text style={styles.licenseState}>{item.state}</Text>
                  </View>
                </View>
                <TouchableOpacity 
                  onPress={() => removeLicense(item.id)}
                  style={styles.removeButton}
                >
                  <Ionicons name="close-circle" size={24} color="#FF3B30" />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  form: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  rowInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },
  stateInput: {
    flex: 0.5,
    marginRight: 0,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
    color: '#333',
  },
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 45,
    fontSize: 14,
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    marginLeft: 5,
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
    marginBottom: 8,
  },
  licenseList: {
    marginTop: 5,
  },
  licenseItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  licenseDetails: {
    flex: 1,
  },
  licenseTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  licenseSubDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  licenseNumber: {
    fontSize: 13,
    color: '#666',
    marginRight: 8,
  },
  licenseState: {
    fontSize: 13,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  removeButton: {
    padding: 5,
  },
});

export default LicenseForm; 