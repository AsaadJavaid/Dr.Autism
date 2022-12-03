import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, bgColor, fgColor, btnBorder}) => {
  return (
    <Pressable
        onPress={onPress}
        style = {[
            styles.container,
            bgColor ? {backgroundColor : bgColor} : {},
            btnBorder ? {borderColor : btnBorder} : {}]}
    >
    <Text
        style = {[
            styles.text,
            fgColor ? {color : fgColor} : {}]}
    >{text}
    </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "#16B3C0",
        width : "90%",
        height : 50,
        alignContent : "center",
        alignItems : "center",
        marginHorizontal : 15,
        marginVertical : 10,
        borderColor : "#16B3C0",
        borderWidth : 1,
        borderRadius : 25,
    },
    text: {
        marginTop : 12,
        fontWeight : "bold",
        fontSize : 18,
        color : "white"
    }
})

export default CustomButton