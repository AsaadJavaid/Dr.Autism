import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import { useForm } from 'react-hook-form';

  const data = [
    { label: 'Male', value: '1' },
    { label: 'Female', value: '2' },
    { label: 'Other', value: '3' },
  ];

  const CustomDropdown = () => {
    const {control, formState: {errors}} = useForm();
    const [isFocus, setIsFocus] = useState(false);

    return (
      <View style={styles.container}>
        <Dropdown
          name = "dropdowngender"
          control = {control}
          rules = {{required : "This can't be empty"}}
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
          placeholder={!isFocus ? 'Specify Your Gender' : '...'}
          searchPlaceholder="Search..."
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setIsFocus(false);
          }}
        />
      </View>
    );
  };

  export default CustomDropdown;

  const styles = StyleSheet.create({
    container: {
      padding: 10,
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