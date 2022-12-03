import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const Email_Regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const ForgotPasswordScreen = () => {
    const {control, handleSubmit, formState : {errors}} = useForm({
        defaultValues : {
            username : "autism@gmail.com"
        }
    });
    const navigation = useNavigation();

    const onSendPressed = data => {
        console.log(data);
        navigation.navigate('NewPaswword')
    }

    const onBackToSignInPressed = () => {
        navigation.navigate('SignIn')
    }

  return (
    <ScrollView>
        <View>
            <View style = {styles.root}>
                <Text style= {styles.title}>Reset password</Text>
            </View>

            <View style = {styles.root}>
                <CustomInput
                        name= "username"
                        placeholder= "Enter Email (autism@gmail.com)"
                        control={control}
                        rules = {{
                            required : "Email is required",
                            pattern : {value : Email_Regex, message : "Email is invalid (autism@mail.com)"}
                        }}
                    />
            </View>

            <View style = {styles.root}>
                <CustomButton text = "Send" onPress = {handleSubmit(onSendPressed)} />
            </View>

            {/* <View style = {styles.root}>
                <Pressable style = {styles.resendButton} onPress={onResendCodePressed}>
                    <Text style = {styles.resend}>Resend Code</Text>
                </Pressable>
            </View> */}

            <View style = {styles.root}>
                <Text style = {styles.textCreateAccount} onPress = {onBackToSignInPressed}>Back to Sign In</Text>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems : "center",
    },
    text: {
        color : "black",
        fontSize : 13,
    },
    textCreateAccount : {
        color : "black",
        fontSize : 13,
        marginTop : 20,
    },
    title : {
        fontSize : 40,
        fontWeight : "bold",
        color : "#16B3C0",
        margin : 20,
        fontFamily : "sans-serif-medium"
    },
    resend : {
        color : "#16B3C0",
        fontWeight : "bold",
        fontSize : 14,
        marginVertical : 15
    },
    resendButton : {
        borderRadius : 25,
        borderColor : "#16B3C0",
        borderWidth : 1,
        backgroundColor : "white",
        height : 50,
        width : "90%",
        alignItems : "center",
        marginVertical : 10
    }
})

export default ForgotPasswordScreen;