import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import CustomDropdown from './CustomDropdown';

/**
 * Custom Warranty Selector with modal for custom values
 */
const CustomWarrantySelector = ({
  warrantyParts,
  warrantyLabor,
  onWarrantyChange,
  parentStyles = {}
}) => {
  const styles = { ...StyleSheet.create(defaultStyles), ...parentStyles };
  
  // States for dropdown components
  const [openWarrantyParts, setOpenWarrantyParts] = useState(false);
  const [openWarrantyLabor, setOpenWarrantyLabor] = useState(false);
  
  // Custom warranty modal states
  const [showCustomWarrantyModal, setShowCustomWarrantyModal] = useState(false);
  const [customWarrantyType, setCustomWarrantyType] = useState(''); // 'parts' or 'labor'
  const [customWarrantyValue, setCustomWarrantyValue] = useState('');
  const [customWarrantyUnit, setCustomWarrantyUnit] = useState('months');
  const [openCustomWarrantyUnit, setOpenCustomWarrantyUnit] = useState(false);
  
  // Handle dropdown open state
  const handleOpenDropdown = (setter, currentState) => {
    // If we're opening this dropdown, close the other
    if (!currentState) {
      setOpenWarrantyParts(false);
      setOpenWarrantyLabor(false);
    }
    // Then toggle the current dropdown
    setter(!currentState);
  };
  
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
    if (warrantyParts && 
        warrantyParts !== 'custom' && 
        !standardItems.some(item => item.value === warrantyParts)) {
      return [
        ...standardItems.filter(item => item.value !== 'custom'),
        { label: warrantyParts, value: warrantyParts },
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
    if (warrantyLabor && 
        warrantyLabor !== 'custom' && 
        !standardItems.some(item => item.value === warrantyLabor)) {
      return [
        ...standardItems.filter(item => item.value !== 'custom'),
        { label: warrantyLabor, value: warrantyLabor },
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
  
  // Function to handle selecting custom warranty option
  const handleCustomWarranty = (type) => {
    setCustomWarrantyType(type);
    
    // Check if there's already a custom value to edit
    const existingValue = type === 'parts' ? warrantyParts : warrantyLabor;
    
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
        onWarrantyChange('parts', customValue);
      } else if (customWarrantyType === 'labor') {
        onWarrantyChange('labor', customValue);
      }
    }
    setShowCustomWarrantyModal(false);
  };
  
  return (
    <View>
      <View style={[styles.formGroup, {marginTop: 20}]}>
        <Text style={styles.label}>Warranty</Text>
        <View style={styles.warrantyContainer}>
          <View style={[styles.warrantyInput, {zIndex: openWarrantyParts ? 9999 : 1}]}>
            <Text style={styles.warrantyLabel}>Parts</Text>
            <CustomDropdown
              open={openWarrantyParts}
              value={warrantyParts}
              items={getWarrantyPartsItems()}
              setOpen={(value) => handleOpenDropdown(setOpenWarrantyParts, openWarrantyParts)}
              setValue={(callback) => {
                const value = callback(warrantyParts);
                if (value === 'custom') {
                  handleCustomWarranty('parts');
                } else {
                  onWarrantyChange('parts', value);
                }
              }}
              zIndex={openWarrantyLabor ? 998 : 999}
              zIndexInverse={openWarrantyLabor ? 999 : 998}
              containerStyle={{marginBottom: 0}}
            />
          </View>
          <View style={[styles.warrantyInput, {zIndex: openWarrantyLabor ? 9999 : 1}]}>
            <Text style={styles.warrantyLabel}>Labor</Text>
            <CustomDropdown
              open={openWarrantyLabor}
              value={warrantyLabor}
              items={getWarrantyLaborItems()}
              setOpen={(value) => handleOpenDropdown(setOpenWarrantyLabor, openWarrantyLabor)}
              setValue={(callback) => {
                const value = callback(warrantyLabor);
                if (value === 'custom') {
                  handleCustomWarranty('labor');
                } else {
                  onWarrantyChange('labor', value);
                }
              }}
              zIndex={openWarrantyParts ? 998 : 999}
              zIndexInverse={openWarrantyParts ? 999 : 998}
              containerStyle={{marginBottom: 0}}
            />
          </View>
        </View>
      </View>

      {/* Custom Warranty Modal */}
      <Modal
        visible={showCustomWarrantyModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowCustomWarrantyModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Custom {customWarrantyType === 'parts' ? 'Parts' : 'Labor'} Warranty
            </Text>
            
            <View style={styles.modalForm}>
              <View style={styles.modalInputRow}>
                <TextInput
                  style={styles.modalInput}
                  value={customWarrantyValue}
                  onChangeText={setCustomWarrantyValue}
                  placeholder="Enter number"
                  placeholderTextColor="#999"
                  keyboardType="numeric"
                />
                
                <View style={styles.modalDropdown}>
                  <CustomDropdown
                    open={openCustomWarrantyUnit}
                    value={customWarrantyUnit}
                    items={getTimeUnitItems()}
                    setOpen={setOpenCustomWarrantyUnit}
                    setValue={(callback) => {
                      const value = callback(customWarrantyUnit);
                      setCustomWarrantyUnit(value);
                    }}
                    containerStyle={{marginBottom: 0}}
                  />
                </View>
              </View>
              
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.modalCancelButton}
                  onPress={() => setShowCustomWarrantyModal(false)}
                >
                  <Text style={styles.modalCancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={[
                    styles.modalSaveButton,
                    (!customWarrantyValue || customWarrantyValue === '0') && styles.modalButtonDisabled
                  ]}
                  onPress={saveCustomWarranty}
                  disabled={!customWarrantyValue || customWarrantyValue === '0'}
                >
                  <Text style={styles.modalSaveButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const defaultStyles = {
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#333',
  },
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
};

export default CustomWarrantySelector; 