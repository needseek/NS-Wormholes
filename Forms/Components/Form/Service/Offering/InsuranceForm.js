import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomDropdown from './CustomDropdown';

/**
 * Insurance form component that allows adding multiple insurance policies
 */
const InsuranceForm = ({
  insurances = [],
  setInsurances,
  insuranceTypes = [],
  containerStyle = {},
}) => {
  const [insuranceType, setInsuranceType] = useState(null);
  const [provider, setProvider] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [error, setError] = useState('');

  const addInsurance = () => {
    if (!insuranceType || !provider || !policyNumber) {
      setError('Please fill out all insurance fields');
      return;
    }

    const insuranceTypeObject = insuranceTypes.find(type => type.value === insuranceType);

    const newInsurance = {
      id: Date.now().toString(),
      type: insuranceTypeObject ? insuranceTypeObject.label : insuranceType,
      typeValue: insuranceType,
      provider,
      policyNumber,
    };

    setInsurances([...insurances, newInsurance]);
    
    // Reset form
    setInsuranceType(null);
    setProvider('');
    setPolicyNumber('');
    setError('');
  };

  const removeInsurance = (id) => {
    setInsurances(insurances.filter(insurance => insurance.id !== id));
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.sectionTitle}>Insurance</Text>

      <View style={styles.form}>
        <CustomDropdown
          label="Insurance Type"
          placeholder="Select insurance type"
          items={insuranceTypes}
          value={insuranceType}
          setValue={setInsuranceType}
          zIndex={3000}
          zIndexInverse={1000}
        />

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Provider</Text>
          <TextInput
            style={styles.textInput}
            value={provider}
            onChangeText={setProvider}
            placeholder="Enter insurance provider"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Policy Number</Text>
          <TextInput
            style={styles.textInput}
            value={policyNumber}
            onChangeText={setPolicyNumber}
            placeholder="Enter policy number"
          />
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={addInsurance}
          activeOpacity={0.7}
        >
          <Ionicons name="add-circle-outline" size={20} color="#FFFFFF" />
          <Text style={styles.addButtonText}>Add Insurance</Text>
        </TouchableOpacity>
      </View>

      {insurances.length > 0 && (
        <View style={styles.insuranceList}>
          <FlatList
            data={insurances}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.insuranceItem}>
                <View style={styles.insuranceDetails}>
                  <Text style={styles.insuranceTitle}>{item.type}</Text>
                  <View style={styles.insuranceSubDetails}>
                    <Text style={styles.insuranceProvider}>{item.provider}</Text>
                    <Text style={styles.policyNumber}>Policy: {item.policyNumber}</Text>
                  </View>
                </View>
                <TouchableOpacity 
                  onPress={() => removeInsurance(item.id)}
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
  inputContainer: {
    marginBottom: 12,
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
  insuranceList: {
    marginTop: 5,
  },
  insuranceItem: {
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
  insuranceDetails: {
    flex: 1,
  },
  insuranceTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  insuranceSubDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  insuranceProvider: {
    fontSize: 13,
    color: '#666',
    marginRight: 8,
  },
  policyNumber: {
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

export default InsuranceForm; 