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
const FormSection = ({ title, children, styles }) => {
  return (
    <View style={styles.container}>
      {title && (
        <View style={styles.mainSectionHeader}>
          <Text style={styles.mainSectionHeaderText}>{title}</Text>
        </View>
      )}
      <View style={styles.formGroup}>{children}</View>
    </View>
  );
};

// ------------------------ FORM INPUT ------------------------------------
const FormInput = ({ label, value, setValue, placeholder, required, keyboardType, multiline, styles, autoCapitalize }) => {
  return (
    <View style={styles.formGroup}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && <Text style={styles.requiredStar}> *</Text>}
        </Text>
      )}
      <TextInput
        style={[styles.input, multiline && styles.textArea]}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor="#999"
        keyboardType={keyboardType}
        multiline={multiline}
        textAlignVertical={multiline ? "top" : "center"}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};

// ------------------------ FORM DROPDOWN ---------------------------------
const FormDropdown = ({ label, items, value, setValue, placeholder, zIndex, registry, styles, open, setOpen, required, dropDownLabel }) => {
  const { DropDownPicker } = registry;
  return (
    <View style={[styles.formGroup, { zIndex }]}>
      {label && <Text style={styles.label}>{label} {required && <Text style={styles.requiredStar}> *</Text>}</Text>}
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={(isOpen) => setOpen(isOpen ? label : null)}
        setValue={val => setValue(val())}
        placeholder={placeholder}
        style={styles.dropdownStyle}
        textStyle={styles.dropdownTextStyle}
        dropDownContainerStyle={styles.dropdownContainerStyle}
        listItemContainerStyle={styles.dropdownItemStyle}
        listMode="SCROLLVIEW"
        scrollViewProps={{
          nestedScrollEnabled: true,
        }}
        {...(dropDownLabel ? { label: dropDownLabel } : {})}
      />
    </View>
  );
};

// ------------------------ ADDRESS SEARCH ---------------------------------
const AddressSearch = ({ value, setValue, googleApiKey, registry, styles }) => {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const { Ionicons } = registry;

  const handleSearch = async () => {
    if (!searchQuery || !googleApiKey) {
      setResults([]);
      setShowResults(false);
      return;
    }

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(searchQuery)}&key=${googleApiKey}`
      );
      const data = await response.json();
      if (data.status === "OK") {
        setResults(data.predictions.map(prediction => ({
          id: prediction.place_id,
          description: prediction.description
        })));
        setShowResults(true);
      }
    } catch (error) {
      console.error("Address search error:", error);
      Alert.alert("Error", "Failed to search addresses");
    }
  };

  const selectAddress = (address) => {
    setValue(address);
    setSearchQuery("");
    setShowResults(false);
  };

  return (
    <View style={styles.formGroup}>
      <Text style={styles.label}>
        Address
        <Text style={styles.requiredStar}> *</Text>
      </Text>
      {value ? (
        <View style={styles.selectedAddressContainer}>
          <Text style={styles.selectedAddressText}>{value}</Text>
          <TouchableOpacity style={styles.removeAddressButton} onPress={() => { setValue(""); setSearchQuery(""); }}>
            <Text style={styles.removeAddressButtonText}>✕</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.addressInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Enter service address"
            placeholderTextColor="#999"
            onSubmitEditing={handleSearch}
          />
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleSearch} style={styles.inputIcon}>
              <Ionicons name="search" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {showResults && (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          style={styles.suggestionsList}
          keyboardShouldPersistTaps="always"
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.suggestionItem}
              onPress={() => selectAddress(item.description)}
            >
              <Text style={styles.suggestionText}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

// ------------------------ DATE PICKER -------------------------------------
const DatePicker = ({ date, setDate, registry, styles }) => {
  const { DateTimePicker, Ionicons } = registry;
  const [showPicker, setShowPicker] = useState(false);
  const [tempDate, setTempDate] = useState(null);

  const handleConfirm = () => {
    setDate(tempDate);
    setShowPicker(false);
  };

  const handleCancel = () => {
    setTempDate(null);
    setShowPicker(false);
  };

  return (
    <View style={styles.formGroup}>
      <TouchableOpacity
        style={styles.datePickerButton}
        onPress={() => {
          setTempDate(date || new Date());
          setShowPicker(true);
        }}
      >
        <Text style={styles.datePickerButtonText}>
          {date ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` : "Select date"}
        </Text>
        <View style={styles.calendarIcon}>
          <Ionicons name="calendar" size={22} color="#444" />
        </View>
      </TouchableOpacity>

      {showPicker && (
        <Modal
          visible={showPicker}
          transparent
          animationType="fade"
          onRequestClose={handleCancel}
        >
          <View style={styles.datePickerModalOverlay}>
            <View style={styles.datePickerModalContent}>
              <View style={styles.datePickerHeader}>
                <TouchableOpacity onPress={handleCancel}>
                  <Text style={styles.datePickerCancelText}>Cancel</Text>
                </TouchableOpacity>
                <Text style={styles.datePickerTitle}>Select Date</Text>
                <TouchableOpacity onPress={handleConfirm}>
                  <Text style={styles.datePickerConfirmText}>Done</Text>
                </TouchableOpacity>
              </View>
              <DateTimePicker
                value={tempDate || new Date()}
                mode="date"
                display="spinner"
                onChange={(e, selectedDate) => setTempDate(selectedDate)}
                maximumDate={new Date()}
                style={styles.dateTimePicker}
              />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

// ------------------------ SWITCH INPUT -----------------------------------
const SwitchInput = ({ label, value, setValue, styles }) => {
  return (
    <View style={styles.switchRow}>
      <Text style={styles.switchLabel}>{label}</Text>
      <View style={styles.switchControl}>
        <Switch
          value={value}
          onValueChange={setValue}
          trackColor={{ false: "#b3d1ff", true: "#448aff" }}
          thumbColor={value ? "#1565c0" : "#f4f3f4"}
        />
        <Text style={styles.switchValueText}>{value ? "Yes" : "No"}</Text>
      </View>
    </View>
  );
};

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------ COMPLEX FORM COMPONENTS -----------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// ------------------------ WARRANTY SELECTOR -----------------------------
const WarrantySelector = ({ partsAmount, partsUnit, setParts, laborAmount, laborUnit, setLabor, registry, styles, openDropdown, setOpenDropdown, getWarrantyItems }) => {


  return (
    <View style={styles.warrantyContainer}>
      <View style={styles.warrantyInput}>
        <FormDropdown
          label="Parts Warranty"
          items={getWarrantyItems(partsAmount, partsUnit)}
          value={(!partsAmount || partsAmount === "0" || partsUnit === "none") ? "none" : `${partsAmount} ${partsUnit}`.trim()}
          setValue={setParts}
          registry={registry}
          zIndex={openDropdown === 'Parts Warranty' ? 2999 : 999}
          styles={styles}
          open={openDropdown === 'Parts Warranty'}
          setOpen={setOpenDropdown}
          required={false}
        />
      </View>
      <View style={styles.warrantyInput}>
        <FormDropdown
          label="Labor Warranty"
          items={getWarrantyItems(laborAmount, laborUnit)}
          value={(!laborAmount || laborAmount === "0" || laborUnit === "none") ? "none" : `${laborAmount} ${laborUnit}`.trim()}
          setValue={setLabor}
          registry={registry}
          zIndex={openDropdown === 'Labor Warranty' ? 2998 : 998}
          styles={styles}
          open={openDropdown === 'Labor Warranty'}
          setOpen={setOpenDropdown}
          required={false}
        />
      </View>
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

  useEffect(() => {
    if (visible) {
      setInputValue(initialValue);
      setSelectedUnit(initialUnit);
    }
  }, [visible, initialValue, initialUnit]);

  const handleSave = () => {
    if (inputValue && inputValue !== "0") {
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
            
            
            <View style={styles.modalInputRow}>
              <TextInput
                style={styles.modalInput}
                value={inputValue}
                onChangeText={text => setInputValue(text.replace(/[^0-9]/g, ''))}
                placeholder="Value"
                placeholderTextColor="#999"
                keyboardType="numeric"
                autoFocus
                inputMode="numeric"
                maxLength={6}
              />
              <View style={[styles.modalDropdown, { zIndex: openUnitDropdown ? 1000 : 1 }] }>
                <DropDownPicker
                  open={openUnitDropdown}
                  value={selectedUnit}
                  items={unitItems}
                  setOpen={setOpenUnitDropdown}
                  setValue={setSelectedUnit}
                  placeholder="Units"
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
                  (!inputValue || inputValue === "0") && styles.modalButtonDisabled
                ]}
                onPress={handleSave}
                disabled={!inputValue || inputValue === "0"}
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
const LicenseForm = ({ onSave, onCancel, registry, styles, openDropdown, setOpenDropdown, hasItems, initialValues }) => {
  const [license, setLicense] = useState({
    title: initialValues?.title || "",
    issuer: initialValues?.issuer || "",
    type: initialValues?.type || "Business License",
    description: initialValues?.description || ""
  });

  useEffect(() => {
    setLicense({
      title: initialValues?.title || "",
      issuer: initialValues?.issuer || "",
      type: initialValues?.type || "Business License",
      description: initialValues?.description || ""
    });
  }, [initialValues]);

  const handleCancel = () => {
    if (!hasItems) {
      setLicense({
        title: "",
        issuer: "",
        type: "Business License",
        description: ""
      });
    }
    onCancel();
  };

  return (
    <View style={styles.subForm}>
      <FormInput
        label="License Title"
        value={license.title}
        setValue={(text) => setLicense(prev => ({ ...prev, title: text }))}
        placeholder="State Plumbing License"
        required
        styles={styles}
      />

      <FormInput
        label="Issuing Authority"
        value={license.issuer}
        setValue={(text) => setLicense(prev => ({ ...prev, issuer: text }))}
        placeholder="State Licensing Board"
        required
        styles={styles}
      />

      <FormDropdown
        label="License Type"
        items={[
          { label: "Business License", value: "Business License" },
          { label: "Professional License", value: "Professional License" },
          { label: "Trade License", value: "Trade License" }
        ]}
        value={license.type}
        setValue={(value) => setLicense(prev => ({ ...prev, type: value }))}
        registry={registry}
        zIndex={2000}
        styles={styles}
        open={openDropdown === 'License Type'}
        setOpen={setOpenDropdown}
      />

      <FormInput
        label="Description"
        value={license.description}
        setValue={(text) => setLicense(prev => ({ ...prev, description: text }))}
        placeholder="Enter description (optional)"
        multiline
        styles={styles}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={handleCancel}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.saveButton, (!license.title || !license.issuer) && styles.buttonDisabled]}
          onPress={() => {
            onSave(license)
            setOpenDropdown(null)
          }}
          disabled={!license.title || !license.issuer}
        >
          <Text style={[styles.buttonText, styles.saveButtonText]}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const InsuranceForm = ({ onSave, onCancel, onCustomCoverage, registry, styles, openDropdown, setOpenDropdown, hasItems, initialValues }) => {
  const [insurance, setInsurance] = useState({
    type: initialValues?.type || "Commercial Liability",
    coverageAmount: initialValues?.coverageAmount || "",
    coverageUnit: initialValues?.coverageUnit || "Million Dollars",
    issuer: initialValues?.issuer || "",
    description: initialValues?.description || ""
  });

  const getCoverageItems = () => {
    const baseItems = [
      { label: "$1 Million", value: "1 Million Dollars" },
      { label: "$2 Million", value: "2 Million Dollars" },
      { label: "$5 Million", value: "5 Million Dollars" },
      { label: "Custom...", value: "custom" }
    ];

    if (insurance.coverageAmount && insurance.coverageUnit) {
      let customLabel = `$${insurance.coverageAmount}`;
      if (insurance.coverageUnit === "Million Dollars") {
        customLabel += " Million";
      } else if (insurance.coverageUnit === "Thousand Dollars") {
        customLabel += " Thousand";
      }
      const customValue = `${insurance.coverageAmount} ${insurance.coverageUnit}`;
      if (!baseItems.some(item => item.value.trim().toLowerCase() === customValue.trim().toLowerCase())) {
        // Insert after $5 Million (index 2), before Custom...
        return [
          ...baseItems.slice(0, 3),
          { label: customLabel, value: customValue },
          ...baseItems.slice(3)
        ];
      }
    }
    return baseItems;
  };

  const handleCoverageChange = (value) => {
    if (value === "custom") {
      onCustomCoverage();
    } else {
      const [amount, ...unitParts] = value.split(" ");
      const unit = unitParts.join(" ");
      setInsurance(prev => ({
        ...prev,
        coverageAmount: amount,
        coverageUnit: unit
      }));
    }
  };
  
  
  useEffect(() => {
    setInsurance({
      type: initialValues?.type || "Commercial Liability",
      coverageAmount: initialValues?.coverageAmount || "1",
      coverageUnit: initialValues?.coverageUnit || "Million Dollars",
      issuer: initialValues?.issuer || "",
      description: initialValues?.description || ""
    });
  }, [initialValues]);

  const handleCancel = () => {
    if (!hasItems) {
      setInsurance({
        type: "Commercial Liability",
        coverageAmount: "1",
        coverageUnit: "Million Dollars",
        issuer: "",
        description: ""
      });
    }
    onCancel();
  };

  return (
    <View style={styles.subForm}>
      <FormDropdown
        label="Insurance Type"
        items={[
          { label: "Commercial Liability", value: "Commercial Liability" },
          { label: "Professional Liability", value: "Professional Liability" },
          { label: "Workers Compensation", value: "Workers Compensation" }
        ]}
        value={insurance.type}
        setValue={(value) => setInsurance(prev => ({ ...prev, type: value }))}
        registry={registry}
        zIndex={openDropdown === 'Insurance Type' ? 3000 : 1}
        styles={styles}
        open={openDropdown === 'Insurance Type'}
        setOpen={setOpenDropdown}
      />

      <FormDropdown
        label="Coverage Amount"
        items={getCoverageItems()}
        value={insurance.coverageAmount && insurance.coverageUnit 
          ? `${insurance.coverageAmount} ${insurance.coverageUnit}`
          : ""}
        setValue={handleCoverageChange}
        registry={registry}
        zIndex={openDropdown === 'Coverage Amount' ? 3000 : 1}
        styles={styles}
        open={openDropdown === 'Coverage Amount'}
        setOpen={setOpenDropdown}
        zIndexInverse={openDropdown === 'Coverage Amount' ? 3000 : 1}
      />

      <FormInput
        label="Insurance Provider"
        value={insurance.issuer}
        setValue={(text) => setInsurance(prev => ({ ...prev, issuer: text }))}
        placeholder="Enter insurance company name"
        required
        styles={styles}
      />

      <FormInput
        label="Description"
        value={insurance.description}
        setValue={(text) => setInsurance(prev => ({ ...prev, description: text }))}
        placeholder="Enter description (optional)"
        multiline
        styles={styles}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={handleCancel}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.saveButton, (!insurance.issuer) && styles.buttonDisabled]}
          onPress={() => {
            onSave(insurance)
            setOpenDropdown(null)
          }}
          disabled={!insurance.issuer}
        >
          <Text style={[styles.buttonText, styles.saveButtonText]}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CustomCoverageModal = ({
  visible,
  coverageAmount,
  coverageUnit,
  onAmountChange,
  onUnitChange,
  onSave,
  onCancel,
  unitItems,
  styles,
  registry,
  setInsurancePrefill
}) => {
  const { DropDownPicker } = registry;
  const [open, setOpen] = useState(false);
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Custom Coverage Amount</Text>
          <View style={styles.modalInputRow}>
            <TextInput
              style={styles.modalInput}
              value={coverageAmount}
              onChangeText={onAmountChange}
              placeholder="Value"
              placeholderTextColor="#999"
              keyboardType="numeric"
              inputMode="numeric"
              maxLength={8}
            />
            <View style={styles.modalDropdown}>
              <DropDownPicker
                open={open}
                value={coverageUnit}
                items={unitItems}
                setOpen={setOpen}
                setValue={onUnitChange}
                placeholder="Units"
                style={styles.dropdownStyle}
                textStyle={styles.dropdownTextStyle}
                dropDownContainerStyle={styles.dropdownContainerStyle}
                listItemContainerStyle={styles.dropdownItemStyle}
                zIndex={open ? 3000 : 1}
                zIndexInverse={open ? 3000 : 1}
              />
            </View>
          </View>
          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={styles.modalCancelButton}
              onPress={onCancel}
            >
              <Text style={styles.modalCancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalSaveButton, (!coverageAmount || coverageAmount.trim() === "") && styles.modalButtonDisabled]}
              onPress={() => {
                onSave();
                setInsurancePrefill((prev) => ({
                  ...prev,
                  coverageAmount: coverageAmount,
                  coverageUnit: coverageUnit
                }));
                setOpen(false);
              }}
              disabled={!coverageAmount || coverageAmount.trim() === ""}
            >
              <Text style={styles.modalSaveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

// Add this new component above ServiceInfo:
const CustomWarrantyModal = ({
  visible,
  partsValue,
  setPartsValue,
  partsUnit,
  setPartsUnit,
  laborValue,
  setLaborValue,
  laborUnit,
  setLaborUnit,
  partsUnitItems,
  laborUnitItems,
  onSave,
  onClose,
  registry,
  styles
}) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const { DropDownPicker } = registry;

  useEffect(() => {
    if (!visible) {
      setOpenDropdown(null);
    }
  }, [visible]);

  useEffect(() => {
    const singularPluralMap = { day: 'days', month: 'months', year: 'years' };
    const pluralSingularMap = { days: 'day', months: 'month', years: 'year' };
    if (partsValue === "1" && ["days", "months", "years"].includes(partsUnit)) {
      setPartsUnit(pluralSingularMap[partsUnit]);
    } else if (partsValue !== "1" && partsValue !== "" && ["day", "month", "year"].includes(partsUnit)) {
      setPartsUnit(singularPluralMap[partsUnit]);
    }
  }, [partsValue]);

  // Auto-switch singular/plural for labor
  useEffect(() => {
    const singularPluralMap = { day: 'days', month: 'months', year: 'years' };
    const pluralSingularMap = { days: 'day', months: 'month', years: 'year' };
    if (laborValue === "1" && ["days", "months", "years"].includes(laborUnit)) {
      setLaborUnit(pluralSingularMap[laborUnit]);
    } else if (laborValue !== "1" && laborValue !== "" && ["day", "month", "year"].includes(laborUnit)) {
      setLaborUnit(singularPluralMap[laborUnit]);
    }
  }, [laborValue]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Custom Warranty</Text>

          <View style={styles.modalForm}>
            <Text style={styles.modalInputLabel}>Parts Warranty</Text>
            <View style={styles.modalInputRow}>
              <TextInput
                style={styles.modalInput}
                value={partsValue}
                onChangeText={text => setPartsValue(text.replace(/[^0-9]/g, ''))}
                placeholder="Value"
                placeholderTextColor="#999"
                keyboardType="numeric"
                inputMode="numeric"
                maxLength={6}
              />
              <View style={[styles.modalDropdown, { zIndex: openDropdown === 'parts' ? 1000 : 1 }] }>
                <DropDownPicker
                  open={openDropdown === 'parts'}
                  value={partsUnit}
                  items={partsUnitItems}
                  setOpen={isOpen => setOpenDropdown(isOpen ? 'parts' : null)}
                  setValue={setPartsUnit}
                  placeholder="Units"
                  style={styles.dropdownStyle}
                  textStyle={styles.dropdownTextStyle}
                  dropDownContainerStyle={styles.dropdownContainerStyle}
                  listItemContainerStyle={styles.dropdownItemStyle}
                />
              </View>
            </View>

            <Text style={styles.modalInputLabel}>Labor Warranty</Text>
            <View style={styles.modalInputRow}>
              <TextInput
                style={styles.modalInput}
                value={laborValue}
                onChangeText={text => setLaborValue(text.replace(/[^0-9]/g, ''))}
                placeholder="Value"
                placeholderTextColor="#999"
                keyboardType="numeric"
                inputMode="numeric"
                maxLength={6}
              />
              <View style={[styles.modalDropdown, { zIndex: openDropdown === 'labor' ? 1000 : 1 }] }>
                <DropDownPicker
                  open={openDropdown === 'labor'}
                  value={laborUnit}
                  items={laborUnitItems}
                  setOpen={isOpen => setOpenDropdown(isOpen ? 'labor' : null)}
                  setValue={setLaborUnit}
                  placeholder="Units"
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
                  (!partsValue && !laborValue) && styles.modalButtonDisabled
                ]}
                onPress={() => onSave(partsValue, partsUnit, laborValue, laborUnit)}
                disabled={!partsValue && !laborValue}
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

// ---------------------- CERTIFICATION FORM COMPONENT ----------------------
const CertificationForm = ({ onSave, onCancel, registry, styles, hasItems, initialValues, setCertificationPrefill }) => {
  const [certification, setCertification] = useState({
    name: initialValues?.name || "",
    description: initialValues?.description || ""
  });

  useEffect(() => {
    setCertification({
      name: initialValues?.name || "",
      description: initialValues?.description || ""
    });
  }, [initialValues]);

  const handleCancel = () => {
    if (!hasItems) {
      setCertification({
        name: "",
        description: ""
      });
    }
    onCancel();
  };

  return (
    <View style={styles.subForm}>
      <FormInput
        label="Certification Name"
        value={certification.name}
        setValue={(text) => setCertification(prev => ({ ...prev, name: text }))}
        placeholder="Enter certification name"
        required
        styles={styles}
      />

      <FormInput
        label="Description"
        value={certification.description}
        setValue={(text) => setCertification(prev => ({ ...prev, description: text }))}
        placeholder="Enter description (optional)"
        multiline
        styles={styles}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={() => {
            setCertificationPrefill(null);
            handleCancel();
          }}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.saveButton, (!certification.name.trim()) && styles.buttonDisabled]}
          onPress={() => onSave(certification)}
          disabled={(!certification.name.trim())}
        >
          <Text style={[styles.buttonText, styles.saveButtonText]}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// ---------------------- CERTIFICATIONS SECTION COMPONENT ----------------------
const CertificationsSection = ({ formData, setFormData, registry, styles }) => {
  const [showCertificationForm, setShowCertificationForm] = useState(formData.certifications.length === 0);
  const [certificationPrefill, setCertificationPrefill] = useState(null);
  const { Ionicons } = registry;

  const addCertification = (newCertification) => {
    if (newCertification.name.trim()) {
      setFormData(prev => ({
        ...prev,
        certifications: [...prev.certifications, newCertification]
      }));
      setShowCertificationForm(false);
    }
  };

  const removeCertification = (index) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index)
    }));
  };

  return (
    <>
      <View style={styles.sectionHeader}>
        <Text style={styles.subSectionTitle}>Certifications</Text>
        {formData.certifications.length > 0 && !showCertificationForm && (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              setCertificationPrefill(null);
              setShowCertificationForm(true);
            }}
          >
            <Text style={styles.addButtonText}>+ Add</Text>
          </TouchableOpacity>
        )}
      </View>
      {(showCertificationForm || formData.certifications.length === 0) && (
        <CertificationForm
          onSave={addCertification}
          onCancel={() => setShowCertificationForm(false)}
          registry={registry}
          styles={styles}
          hasItems={formData.certifications.length > 0}
          initialValues={certificationPrefill}
          setCertificationPrefill={setCertificationPrefill}
        />
      )}
      {formData.certifications.map((certification, index) => (
        <View key={index} style={styles.listItem}>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>{certification.name}</Text>
            {certification.description && (
              <Text style={styles.itemDetail}>{certification.description}</Text>
            )}
          </View>
          <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity
              style={[styles.editButton, {marginTop: -3}]}
              onPress={() => {
                setCertificationPrefill(certification);
                setShowCertificationForm(true);
                removeCertification(index);
              }}
            >
              <Ionicons name="pencil" size={15} color="#007AFF" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.removeButton}
              onPress={() => removeCertification(index)}
            >
              <Text style={styles.removeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </>
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
  GOOGLE_API,
  registry,
  styles
}) => {
  const {isValidPhoneNumber} = registry;
  return (
    <FormSection title="Personal Details" styles={styles}>
      <FormInput
        label="Phone"
        value={formData.contact.phone}
        setValue={(text) => updateContact("phone", text.replace(/[^\d+]/g, ""))}
        placeholder="+1234567890"
        required
        keyboardType="phone-pad"
        styles={styles}
      />
      {formData.contact.phone && !isValidPhoneNumber(formData.contact.phone) && (
        <Text style={styles.phoneErrorText}>
          Please enter a valid phone number with country code (e.g. +1 for US)
        </Text>
      )}

      <FormInput
        label="Email"
        value={formData.contact.email}
        setValue={(text) => updateContact("email", text)}
        placeholder="email@example.com"
        required
        keyboardType="email-address"
        autoCapitalize="none"
        styles={styles}
      />
      {formData.contact.email && !isValidEmail(formData.contact.email) && (
        <Text style={styles.emailErrorText}>Please enter a valid email address</Text>
      )}

      <FormInput
        label="Website"
        value={formData.contact.website}
        setValue={(text) => updateContact("website", text)}
        placeholder="https://example.com"
        keyboardType="url"
        autoCapitalize="none"
        styles={styles}
      />

      <AddressSearch
        value={formData.contact.address}
        setValue={(text) => updateContact("address", text)}
        googleApiKey={GOOGLE_API}
        registry={registry}
        styles={styles}
      />
    </FormSection>
  );
};

// ---------------------- SERVICE INFORMATION COMPONENT ----------------------
const ServiceInfo = ({ formData, setFormData, registry, styles }) => {
  const [showCustomWarrantyModal, setShowCustomWarrantyModal] = useState(false);
  const [customWarrantyType, setCustomWarrantyType] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);

  // Prefill modal with current values
  const [customPartsAmount, setCustomPartsAmount] = useState(formData.warranty.partsAmount || '');
  const [customPartsUnit, setCustomPartsUnit] = useState(formData.warranty.partsUnit || 'months');
  const [customLaborAmount, setCustomLaborAmount] = useState(formData.warranty.laborAmount || '');
  const [customLaborUnit, setCustomLaborUnit] = useState(formData.warranty.laborUnit || 'months');

  // Helper to parse preset value
  const parsePreset = (val) => {
    if (val === 'none') return { amount: '0', unit: 'months' };
    const [amount, unit] = val.split(' ');
    return { amount, unit };
  };

  // Dropdown handlers
  const handlePartsDropdown = (val) => {
    if (val === 'custom') {
      setCustomPartsAmount(formData.warranty.partsAmount);
      setCustomPartsUnit(formData.warranty.partsUnit || 'months');
      setCustomLaborAmount(formData.warranty.laborAmount);
      setCustomLaborUnit(formData.warranty.laborUnit || 'months');
      setShowCustomWarrantyModal(true);
    } else {
      const parsed = parsePreset(val);
      setFormData(prev => ({
        ...prev,
        warranty: {
          ...prev.warranty,
          partsAmount: parsed.amount,
          partsUnit: parsed.unit,
        }
      }));
    }
  };
  const handleLaborDropdown = (val) => {
    if (val === 'custom') {
      setCustomPartsAmount(formData.warranty.partsAmount);
      setCustomPartsUnit(formData.warranty.partsUnit || 'months');
      setCustomLaborAmount(formData.warranty.laborAmount);
      setCustomLaborUnit(formData.warranty.laborUnit || 'months');
      setShowCustomWarrantyModal(true);
    } else {
      const parsed = parsePreset(val);
      setFormData(prev => ({
        ...prev,
        warranty: {
          ...prev.warranty,
          laborAmount: parsed.amount,
          laborUnit: parsed.unit,
        }
      }));
    }
  };

  // Save handler for custom modal
  const handleCustomWarrantySave = (partsValue, partsUnit, laborValue, laborUnit) => {
    setFormData(prev => ({
      ...prev,
      warranty: {
        ...prev.warranty,
        partsAmount: partsValue,
        partsUnit: partsUnit,
        laborAmount: laborValue,
        laborUnit: laborUnit,
      }
    }));
    setShowCustomWarrantyModal(false);
  };

  // Dropdown display value
  const getDropdownDisplay = (amount, unit) => {
    if (!amount || amount === '0' || unit === 'none') return 'months';
    return `${amount} ${unit}`;
  };

  // In ServiceInfo, add helper to get warranty items with custom value:
  const getWarrantyItems = (amount, unit) => {
    const customValue = amount && unit && amount !== '0' && unit !== 'none'
      ? `${amount} ${unit}`.trim()
      : null;
    const baseOptions = [
      { label: 'None', value: 'none' },
      { label: '1 month', value: '1 month' },
      { label: '3 months', value: '3 months' },
      { label: '6 months', value: '6 months' },
      { label: '1 year', value: '1 year' },
      { label: '2 years', value: '2 years' },
      { label: 'Custom...', value: 'custom' }
    ];
    if (
      customValue &&
      !baseOptions.some(opt => opt.value === customValue) &&
      !['1 month','3 months','6 months','1 year','2 years','none','custom'].includes(customValue)
    ) {
      // Insert custom value before 'Custom...'
      const customOption = { label: customValue, value: customValue };
      const idx = baseOptions.findIndex(opt => opt.value === 'custom');
      return [
        ...baseOptions.slice(0, idx),
        customOption,
        ...baseOptions.slice(idx)
      ];
    }
    return baseOptions;
  };

  // In ServiceInfo, add getUnitItems helper above return:
  const getUnitItems = (value) => {
    if (value === "1") {
      return [
        { label: 'Day', value: 'day' },
        { label: 'Month', value: 'month' },
        { label: 'Year', value: 'year' }
      ];
    }
    return [
      { label: 'Days', value: 'days' },
      { label: 'Months', value: 'months' },
      { label: 'Years', value: 'years' }
    ];
  };

  // In ServiceInfo, before return, add state for last-used unit options:
  const [partsUnitItems, setPartsUnitItems] = useState(getUnitItems(customPartsAmount));
  const [laborUnitItems, setLaborUnitItems] = useState(getUnitItems(customLaborAmount));

  useEffect(() => {
    if (customPartsAmount !== "") {
      setPartsUnitItems(getUnitItems(customPartsAmount));
    }
  }, [customPartsAmount]);

  useEffect(() => {
    if (customLaborAmount !== "") {
      setLaborUnitItems(getUnitItems(customLaborAmount));
    }
  }, [customLaborAmount]);

  return (
    <FormSection title="Service Information" styles={styles}>
      <FormInput
        label="Service Title"
        value={formData.title}
        setValue={(text) => setFormData({ ...formData, title: text })}
        placeholder="Professional Plumbing Services"
        required
        styles={styles}
      />

      <FormInput
        label="Service Description"
        value={formData.description}
        setValue={(text) => setFormData({ ...formData, description: text })}
        placeholder="Describe your services and expertise"
        multiline
        required
        styles={styles}
      />

      <FormDropdown
        label="Business Entity Type"
        items={[
          { label: 'Individual', value: 'individual' },
          { label: 'Business', value: 'business' },
          { label: 'Non-Profit', value: 'non-profit' }
        ]}
        value={formData.entity}
        setValue={(value) => setFormData({ ...formData, entity: value })}
        placeholder="Select entity type"
        required={true}
        registry={registry}
        zIndex={openDropdown === 'Business Entity Type' ? 3000 : 1000}
        styles={styles}
        open={openDropdown === 'Business Entity Type'}
        setOpen={setOpenDropdown}
      />

      <Text style={styles.label}>
        Business Commencement Date
        <Text style={styles.requiredStar}> *</Text>
      </Text>
      <DatePicker
        date={formData.businessCommencementDate}
        setDate={(date) => setFormData({ ...formData, businessCommencementDate: date })}
        registry={registry}
        styles={styles}
      />

      <WarrantySelector
        partsAmount={formData.warranty.partsAmount}
        partsUnit={formData.warranty.partsUnit}
        setParts={handlePartsDropdown}
        laborAmount={formData.warranty.laborAmount}
        laborUnit={formData.warranty.laborUnit}
        setLabor={handleLaborDropdown}
        registry={registry}
        styles={styles}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        onCustomWarranty={() => setShowCustomWarrantyModal(true)}
        getWarrantyItems={getWarrantyItems}
      />

      <View style={styles.optionsContainer}>
        <SwitchInput
          label="Emergency Services Available"
          value={formData.emergencyServicesProvided}
          setValue={(value) => setFormData({ ...formData, emergencyServicesProvided: value })}
          styles={styles}
        />
        <SwitchInput
          label="Permitting Included"
          value={formData.permittingIncluded === "yes"}
          setValue={(value) => setFormData({ 
            ...formData, 
            permittingIncluded: value ? "yes" : "no" 
          })}
          styles={styles}
        />
      </View>

      <CustomWarrantyModal
        visible={showCustomWarrantyModal}
        partsValue={customPartsAmount}
        setPartsValue={setCustomPartsAmount}
        partsUnit={customPartsUnit}
        setPartsUnit={setCustomPartsUnit}
        laborValue={customLaborAmount}
        setLaborValue={setCustomLaborAmount}
        laborUnit={customLaborUnit}
        setLaborUnit={setCustomLaborUnit}
        partsUnitItems={partsUnitItems}
        laborUnitItems={laborUnitItems}
        onSave={handleCustomWarrantySave}
        onClose={() => {
          setShowCustomWarrantyModal(false)
        }}
        registry={registry}
        styles={styles}
      />
    </FormSection>
  );
};

// ---------------------- COVERAGE & INSURANCES COMPONENT ----------------------
const CoverageInsurances = ({ formData, setFormData, registry, styles }) => {
  const [showLicenseForm, setShowLicenseForm] = useState(formData.licenses.length === 0);
  const [showInsuranceForm, setShowInsuranceForm] = useState(formData.insurances.length === 0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [licensePrefill, setLicensePrefill] = useState(null);
  const [insurancePrefill, setInsurancePrefill] = useState(null);
  const { Ionicons } = registry;
  

  // License Management
  const addLicense = (newLicense) => {
     setFormData(prev => ({
      ...prev,
      licenses: [...prev.licenses, newLicense]
    }));
    setShowLicenseForm(false);
    setLicensePrefill(null);
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
    setInsurancePrefill(null);
  };

  const removeInsurance = (index) => {
    setFormData(prev => ({
      ...prev,
      insurances: prev.insurances.filter((_, i) => i !== index)
    }));
  };
  // In CoverageInsurances, add state for custom coverage modal
  const [showCustomCoverageModal, setShowCustomCoverageModal] = useState(false);
  const [customCoverageAmount, setCustomCoverageAmount] = useState("");
  const [customCoverageUnit, setCustomCoverageUnit] = useState('Million Dollars');
  const unitItems = [
    { label: 'Dollars', value: 'Dollars' },
    { label: 'Thousand', value: 'Thousand Dollars' },
    { label: 'Million', value: 'Million Dollars' }
  ];

  return (
    <FormSection title="Credentials & Coverage" styles={styles}>
      {/* Licenses Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.subSectionTitle}>Licenses</Text>
        {formData.licenses.length > 0 && !showLicenseForm && (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              setLicensePrefill(null);
              setShowLicenseForm(true);
            }}
          >
            <Text style={styles.addButtonText}>+ Add</Text>
          </TouchableOpacity>
        )}
      </View>

      {(showLicenseForm || formData.licenses.length === 0) && (
        <LicenseForm
          onSave={addLicense}
          onCancel={() => {
            setShowLicenseForm(false);
            setLicensePrefill(null);
          }}
          registry={registry}
          styles={styles}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          hasItems={formData.licenses.length > 0}
          {...(licensePrefill ? { initialValues: licensePrefill } : {})}
        />
      )}

      {formData.licenses.map((license, index) => (
        <View key={index} style={styles.listItem}>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>{license.title}</Text>
            <Text style={styles.itemDetail}>Issuer: {license.issuer}</Text>
            <Text style={styles.itemDetail}>Type: {license.type}</Text>
            <Text style={{height: 10}}></Text>
            {license.description && (
              <Text style={styles.itemDetail}>{license.description}</Text>
            )}
          </View>
          <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity
              style={[styles.editButton, {marginTop: -3}]}
              onPress={() => {
                setLicensePrefill(license);
                setShowLicenseForm(true);
                removeLicense(index);
              }}
            >
              <Ionicons name="pencil" size={15} color="#007AFF" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.removeButton}
              onPress={() => removeLicense(index)}
            >
              <Text style={styles.removeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <CertificationsSection
        formData={formData}
        setFormData={setFormData}
        registry={registry}
        styles={styles}
        hasItems={formData.licenses.length > 0}
      />

      {/* Insurances Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.subSectionTitle}>Insurances</Text>
        {formData.insurances.length > 0 && !showInsuranceForm && (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              setInsurancePrefill(null);
              setShowInsuranceForm(true);
            }}
          >
            <Text style={styles.addButtonText}>+ Add</Text>
          </TouchableOpacity>
        )}
      </View>

      {(showInsuranceForm || formData.insurances.length === 0) && (
        <InsuranceForm
          onSave={addInsurance}
          onCancel={() => {
            setShowInsuranceForm(false);
            setInsurancePrefill(null);
          }}
          onCustomCoverage={() => setShowCustomCoverageModal(true)}
          registry={registry}
          styles={styles}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          hasItems={formData.insurances.length > 0}
          {...(insurancePrefill ? { initialValues: insurancePrefill } : {})}
        />
      )}
      {formData.insurances.map((insurance, index) => (
        <View key={index} style={styles.listItem}>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>{insurance.type}</Text>
            <Text style={styles.itemDetail}>Coverage: {insurance.coverageAmount} {insurance.coverageUnit}</Text>
            <Text style={styles.itemDetail}>Issuer: {insurance.issuer}</Text>
            <Text style={{height: 10}}></Text>
            {insurance.description && (
              <Text style={styles.itemDetail}>{insurance.description}</Text>
            )}
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => {
                setInsurancePrefill(insurance);
                setShowInsuranceForm(true);
                removeInsurance(index);
              }}
            >
              <Ionicons name="pencil" size={15} color="#007AFF" style={{marginTop: -3}} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.removeButton}
              onPress={() => removeInsurance(index)}
            >
              <Text style={styles.removeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <CustomCoverageModal
        visible={showCustomCoverageModal}
        coverageAmount={customCoverageAmount}
        coverageUnit={customCoverageUnit}
        onAmountChange={setCustomCoverageAmount}
        onUnitChange={setCustomCoverageUnit}
        setInsurancePrefill={setInsurancePrefill}
        unitItems={unitItems}
        onSave={() => {
          if (insurancePrefill) {
            setInsurancePrefill(prev => ({
              ...prev,
              coverageAmount: customCoverageAmount,
              coverageUnit: customCoverageUnit
            }));
          }
          setShowCustomCoverageModal(false);
        }}
        onCancel={() => setShowCustomCoverageModal(false)}
        styles={styles}
        registry={registry}
      />
    </FormSection>
  );
};

// ---------------------- PHOTO ALBUM COMPONENT ----------------------
const PhotoAlbum = ({ photos, setFormData, registry, styles }) => {
  const { ImagePicker, Ionicons } = registry;
  const MAX_PHOTOS = 21;

  // Ensure existing photos have IDs
  useEffect(() => {
    const needsMigration = photos.some(photo => !photo.id);
    if (needsMigration) {
      setFormData(prev => ({
        ...prev,
        photos: prev.photos.map(photo => ({
          ...photo,
          id: photo.id || `migrated-photo-${Math.random().toString(36).substr(2, 9)}`
        }))
      }));
    }
  }, []);

  const handleAddPhotos = async () => {
    try {
      if (photos.length >= MAX_PHOTOS) {
        Alert.alert("Limit Reached", `You can only add up to ${MAX_PHOTOS} photos.`);
        return;
      }

      // Permission handling
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          "Permission Required",
          "Please enable photo access in settings",
          [{ text: "OK" }]
        );
        return;
      }

      // Image picker configuration
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 0.8,
        allowsMultipleSelection: Platform.OS !== 'web',
        selectionLimit: MAX_PHOTOS - photos.length,
      });

      if (!result.canceled && result.assets?.length) {
        const existingFileNames = new Set(photos.map(p => p.fileName));

        const newPhotos = result.assets.reduce((acc, asset) => {
          if (existingFileNames.has(asset.fileName)) {
            return acc;
          }
          acc.push({
            id: `photo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            uri: asset.uri,
            width: asset.width,
            height: asset.height,
            type: asset.type || 'image',
            fileName: asset.fileName || `photo-${Date.now()}.jpg`,
          });
          
          return acc;
        }, []);

        setFormData(prev => ({
          ...prev,
          photos: [...prev.photos, ...newPhotos]
        }));
      }
    } catch (error) {
      console.error('Photo selection error:', error);
      Alert.alert("Error", "Failed to select photos");
    }
  };

  const removePhoto = (photoId) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter(photo => photo.id !== photoId)
    }));
  };

  return (
    <FormSection title="Photo Album" styles={styles}>
      <View style={styles.photoAlbumContainer}>
        <View style={styles.photoHeaderRow}>
          <Text style={styles.photoAlbumTitle}>Photos</Text>
        <Text style={styles.photoCount}>
          {photos.length} photos
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.outlinedButton,
          styles.fullWidth,
          photos.length >= MAX_PHOTOS && styles.addPhotoButtonDisabled
        ]}
        onPress={handleAddPhotos}
        disabled={photos.length >= MAX_PHOTOS}
      >
        <Ionicons name="image-outline" size={20} color="#007AFF" style= {{marginRight: 8}} />
        <Text style={styles.outlinedButtonText}>Add Photos</Text>
      </TouchableOpacity>

      {photos.length > 0 ? (
        <View style={styles.photoGrid}>
          {photos.map(item => (
            <View key={item.id} style={styles.photoContainer}>
              <Image source={{ uri: item.uri }} style={styles.photo} />
              <TouchableOpacity 
                style={styles.removePhotoButton} 
                onPress={() => removePhoto(item.id)}
              >
                <Ionicons name="close-circle" size={22} color="#FF3B30" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.emptyPhotoState}>
          <Ionicons name="images-outline" size={40} color="#CCCCCC" />
          <Text style={styles.emptyPhotoText}>No photos added yet</Text>
          <Text style={styles.emptyPhotoSubtext}>Tap "Add Photos" to select from your gallery</Text>
        </View>
      )}
      </View>
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
  if (formData.warranty.partsAmount === null) {
      Alert.alert('Error', 'Please select a parts warranty period for your offering');
      return;
  }
  if (formData.warranty.laborAmount === null) {
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
    certifications: [],
    insurances: [],
    photos: [],
    businessCommencementDate: null,
    warranty: {
      partsAmount: '',
      partsUnit: '',
      laborAmount: '',
      laborUnit: '',
    },
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
        warranty: `parts: ${formData.warranty.partsAmount}, labor: ${formData.warranty.laborAmount}`,
        emergencyServicesProvided: formData.emergencyServicesProvided,
        permittingIncluded: formData.permittingIncluded
      }
    };

    console.log('Submitting offering:', formattedData);
    console.log('navigation', navigation);
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
          setFormData={setFormData}
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
  },
  dropdownStyle: {
    backgroundColor: '#fafbfc',
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
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    elevation: 4,
    zIndex: 2000,
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
  modalInputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
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
    justifyContent: 'center',
    marginTop: 16,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 100,
  },
  cancelButton: {
    backgroundColor: '#e0e0e0', // light gray
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: '#2979FF', // bright blue
  },
  buttonText: {
    color: '#fff', // white for both
    fontWeight: '600',
    fontSize: 15,
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalForm: {
    marginBottom: 20,
  },
  modalInputRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  modalInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#fafbfc',
    marginRight: 10,
  },
  modalDropdown: {
    flex: 1,
    height: 40,
    marginLeft: 0,
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
  buttonDisabled: {
    backgroundColor: '#e0e0e0',
  },
  emailErrorText: {
    color: '#d32f2f',
    fontSize: 13,
    marginTop: -14,
    marginBottom: 10,
    marginLeft: 2,
    fontWeight: '400',
  },
  requiredStar: {
    color: 'red',
    fontWeight: 'bold',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    flex: 1,
  },
  switchControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchValueText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
    fontWeight: '500',
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
    paddingRight: 40, // Space for icon
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
  iconContainer: {
    position: 'absolute',
    right: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  inputIcon: {
    padding: 8,
    backgroundColor: 'transparent',
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
    backgroundColor: '#ede9fe',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  datePickerModalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  datePickerCancelText: {
    color: '#999',
    fontSize: 16,
  },
  datePickerConfirmText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
  photoAlbumContainer: {
    marginVertical: 15,
    paddingHorizontal: 0,
  },
  photoHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 4,
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
  fullWidthButton: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 18,
    borderWidth: 1.5,
    borderColor: '#007AFF',
    borderRadius: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 0,
  },
  emptyPhotoState: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafbfc',
    borderRadius: 10,
    padding: 30,
    marginTop: 5,
    marginHorizontal: 1,
  },
  emptyPhotoText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#888',
    marginTop: 12,
    marginBottom: 2,
  },
  emptyPhotoSubtext: {
    fontSize: 14,
    color: '#999',
    marginTop: 2,
    textAlign: 'center',
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
  phoneErrorText: {
    color: '#d32f2f',
    fontSize: 13,
    marginTop: -14,
    marginBottom: 10,
    marginLeft: 2,
    fontWeight: '400',
  },
  editButton: {
    marginRight: 8,
    padding: 4,
    alignSelf: 'flex-start',
  },
});

export default PlumbingForm; 