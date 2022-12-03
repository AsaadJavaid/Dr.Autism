import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'


const NewPasswordScreen = () => {
    const {control, handleSubmit, formState : {errors}} = useForm({
        defaultValues : {
            code : "123456",
            password : "12345678"
        }
    });
    const navigation = useNavigation()

    const onSubmitPressed = data => {
        console.log(data);
        navigation.navigate('Home')
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
                        name = "code"
                        placeholder= "Code"
                        control={control}
                        rules = {{
                            required : "Code is required",
                            minLength : {
                                value : 6,
                                message : "Code should be 6 characters"
                            }
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
                <CustomButton text = "Submit" onPress = {handleSubmit(onSubmitPressed)} />
            </View>

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

export default NewPasswordScreen;