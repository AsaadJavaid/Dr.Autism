import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';

  const data = [
    { label: '10-15', value: '1' },
    { label: '15-20', value: '2' },
    { label: '20-25', value: '3' },
    { label: '25-30', value: '4' },
    { label: '30-35', value: '5' },
    { label: '35-40', value: '6' },
    { label: '40-45', value: '7' },
    { label: '45-50', value: '8' },
    { label: '50-55', value: '9' },
    { label: '55-60', value: '10' },
    { label: '60-65', value: '11' },
    { label: '65-70', value: '12' },
  ];

  const CustomDropdownAge = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#A7FC85' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Your Age Group' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    );
  };

  export default CustomDropdownAge;

  const styles = StyleSheet.create({
    container: {
      padding: 13,
      width : "50%"
    },
    dropdown: {
      height: 50,
      borderColor: '#16B3C0',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      borderRadius : 25,
      borderWidth : 1,
      backgroundColor : "#F9F6F9",
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 14,
      color : "#9A989A",
      marginHorizontal : 15
    },
    selectedTextStyle: {
      fontSize: 14,
      marginHorizontal : 15,
      color : "black"
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      color : "#9A989A"
    },
  });