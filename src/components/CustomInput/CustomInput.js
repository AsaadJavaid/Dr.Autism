import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'

const CustomInput = ({control, name, rules = {}, placeholder, secureTextEntry}) => {
  return (
    
      <Controller 
        control={control}
        name = {name}
        rules = {rules}
        render={({field : {value, onChange, onBlur}, fieldState : {error}}) => 
        <>
          <View style = {[styles.container, {borderColor : error ? "red" : "#16B3C0"}]}>
            <TextInput
              value={value}
              onChangeText= {onChange}
              onBlur = {onBlur}
              placeholder={placeholder}
              secureTextEntry = {secureTextEntry}
            ></TextInput> 
          </View>
          {error && (
              <Text style = {{color : "red", fontWeight : "600", alignSelf : "center"}}>{error.message || 'Error'}</Text>
          )}
          
        </>
        }
      />
    
  )
}

const styles = StyleSheet.create({
    container: {
        width : "90%",
        borderColor : "#16B3C0",
        borderWidth : 1,
        borderRadius : 25,
        paddingHorizontal : 15,
        marginVertical : 10,
        marginHorizontal : 15,
        backgroundColor : "white",
    }
})

export default CustomInput;