import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Ionicons } from '@expo/vector-icons';

// Set dropdown mode to BADGE to avoid VirtualizedList nesting issues
DropDownPicker.setMode("BADGE");

/**
 * Custom dropdown component that wraps DropDownPicker
 * Properly configured to avoid VirtualizedList nesting issues
 */
const CustomDropdown = ({
  label,
  placeholder = 'Select an option',
  items = [],
  value,
  setValue,
  zIndex = 3000,
  zIndexInverse = 1000,
  containerStyle = {},
  dropdownStyle = {},
  labelStyle = {},
  multiple = false,
  multipleText = '{count} items have been selected',
  min = 0,
  max = null,
  searchable = false,
  required = false,
  error,
  onOpen,
  onClose,
  customStyles = {},
  customItemRenderer,
  addCustomItem = false,
  setItems,
}) => {
  const [open, setOpen] = useState(false);
  
  // Format items if they are strings
  const processedItems = useCallback(() => {
    if (items.length > 0 && typeof items[0] === 'string') {
      return items.map(item => ({ label: item, value: item }));
    }
    return items;
  }, [items]);

  // Call the onOpen callback if provided
  const handleOpen = () => {
    if (onOpen) onOpen();
  };

  // Call the onClose callback if provided
  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label} {required && <Text style={styles.required}>*</Text>}</Text>}
      <DropDownPicker
        open={open}
        value={value}
        items={processedItems()}
        setOpen={setOpen}
        setValue={setValue}
        placeholder={placeholder}
        style={[styles.dropdown, customStyles.dropdown]}
        dropDownContainerStyle={[styles.dropdownContainer, dropdownStyle, customStyles.dropdownContainer]}
        listMode="SCROLLVIEW"
        scrollViewProps={{
          nestedScrollEnabled: true,
        }}
        zIndex={zIndex}
        zIndexInverse={zIndexInverse}
        multiple={multiple}
        multipleText={multipleText}
        min={min}
        max={max}
        searchable={searchable}
        onOpen={handleOpen}
        onClose={handleClose}
        setItems={setItems}
        addCustomItem={addCustomItem}
        renderListItem={customItemRenderer}
        {...(error && { containerStyle: { borderColor: 'red' } })}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
    color: '#333',
  },
  dropdown: {
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderRadius: 5,
    height: 45,
  },
  dropdownContainer: {
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  required: {
    color: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  }
});

export default CustomDropdown; 