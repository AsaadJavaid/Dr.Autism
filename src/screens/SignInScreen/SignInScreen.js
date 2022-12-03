import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native'
import React, {useState} from 'react'
import Logo2 from "../../../assets/images/Logo2.png"
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const Email_Regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues : {
            username : "autism@gmail.com",
            password : "12345678"
        }
    });

    const onSignInPressed = data => {
        console.log(data);
        navigation.navigate('Home');
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword")
    }

    const onSignInWithGooglePressed = () => {
        console.warn("SignIn with Google Pressed")
    }

    const onSignInWithTwitterPressed = () => {
        console.warn("SignIn with Twitter Pressed")
    }

    const onCreateAccountPressed = () => {
        navigation.navigate('SignUp')
    }

  return (
    <ScrollView>
        <View>
            <View style = {styles.root}>
                <Image
                    source={Logo2}
                    style = {[styles.Logo, {height : height * 0.3} ]}
                    resizeMode = "center">
                </Image>
            </View>

            <View style = {styles.root}>
                <CustomInput
                        name= "username"
                        placeholder= "autism@gmail.com"
                        control={control}
                        rules = {{
                            required : "Email is required",
                            pattern : {value : Email_Regex, message : "Email is invalid (autism@mail.com)"}
                        }}
                    />
            </View>

            <View style = {styles.root}>
                <CustomInput
                        name = "password"
                        placeholder= "Password (Min 8 Char)"
                        control={control}
                        rules = {{
                            required : "Password is required",
                            minLength : {
                                value : 8,
                                message : "Password should be 8 characters long"
                            }
                        }}
                        secureTextEntry
                    />
            </View>


            <View style = {styles.root}>
                <CustomButton text = "Sign In" onPress = {handleSubmit(onSignInPressed)} />
            </View>

            <View style = {styles.root}>
                <Text style = {styles.text} onPress = {onForgotPasswordPressed}>Forgot Password?</Text>
            </View>

            <View style = {styles.root}>
                <CustomButton text = "Sign In with Google" onPress = {onSignInWithGooglePressed} btnBorder = "#DD4D44" bgColor = "white" fgColor = "#DD4D44" />
            </View>

            <View style = {styles.root}>
                <CustomButton text = "Sign In with Facebook" onPress = {onSignInWithTwitterPressed} btnBorder = "#1DA1F2" bgColor = "white" fgColor = "#1DA1F2" />
                <Text style = {styles.textCreateAccount} onPress = {onCreateAccountPressed}>Don't have Account?Create Account</Text>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root:{
        flex : 1,
        alignItems : "center",
    },
    Logo:{
        width : "100%",
        maxHeight : 700,
        maxWidth : 700,
    },
    text: {
        color : "black",
        fontSize : 13,
    },
    textCreateAccount : {
        color : "black",
        fontSize : 13,
        marginTop : 75,
    }
})

export default SignInScreen;