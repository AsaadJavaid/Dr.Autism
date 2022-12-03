import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown'
import CustomDropdownAge from '../../components/CustomDropdownAge'
import CustomDropdownRelation from '../../components/CustomDropdownRelation'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const Email_Regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignUpScreen = () => {
    const navigation = useNavigation();
    const {control, handleSubmit, watch} = useForm({
        defaultValues : {
            name : "Dr.Autism",
            username : "autism@gmail.com",
            password : "12345678",
            repeatpassword : "12345678"
        }
    });
    const pwd = watch("password")
    //console.log(pwd)

    const onRegisterPressed = data => {
        console.log(data)
        navigation.navigate('ConfirmEmail')
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }

    const onTermOfUsePressed = () => {
        console.warn("Term of Use Pressed")
    }

    const onPrivacyPolicyPressed = () => {
        console.warn("Privacy Policy Pressed")
    }

  return (
    <ScrollView>
        <View>
            <View style = {styles.root}>
                <Text style = {styles.title}>Create an Account</Text>
            </View>
            <View style = {{flex : 1, marginVertical : 15}}>
                {/* <View style = {styles.root}>
                    <CustomInput 
                        name="firstname"
                        placeholder= "First Name"
                        control={control}
                        rules = {{
                            required : "Firstname is required",
                            minLength : {
                                value : 3,
                                message : "Firstname should contain Min 3 letters"
                            },
                            maxLength : {
                                value : 20,
                                message : "Firstname should contain Max 20 letters"
                            }
                        }}
                    />
                </View> */}

                <View style = {styles.root}>
                    <CustomInput 
                        name = "name"
                        placeholder= "Add your full name" 
                        control={control}
                        rules = {{
                            required : "Name is required",
                            minLength : {
                                value : 3,
                                message : "Name should contain Min 3 letters"
                            },
                            maxLength : {
                                value : 30,
                                message : "Name should contain Max 30 letters"
                            }
                        }}
                    />
                </View>

                <View style = {styles.root}>
                    <CustomInput
                        name= "username"
                        placeholder= "autism@gmail.com"
                        control={control}
                        rules = {{
                            required : "Email is required",
                            pattern : {value : Email_Regex, message : "Email is invalid"}
                        }}
                    />
                </View>
                
                {/* <View style = {{flexDirection : "row", marginHorizontal : 5}}>
                    <CustomDropdownAge></CustomDropdownAge>
                    <CustomDropdownRelation></CustomDropdownRelation>
                </View> */}
                
                {/* <View style = {{width : "95%", marginHorizontal : 10}}>
                    <CustomDropdown></CustomDropdown>
                </View> */}

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
                    <CustomInput
                        name = "repeatpassword"
                        placeholder= "Repeat password"
                        control={control}
                        rules = {{
                            validate : value => value == pwd || "Passsword does not match"
                        }}
                        secureTextEntry
                    />
                </View>

                <View style = {styles.root}>
                    <CustomButton text = "Register" onPress = {handleSubmit(onRegisterPressed)} />
                </View>

                <View style = {[styles.root, {width : "80%", marginHorizontal : 45}]}>
                    <Text>By Registering, you confirm that you accept our {' '}
                    <Text style = {styles.link} onPress = {onTermOfUsePressed}>Term of use</Text> and <Text style = {styles.link} onPress = {onPrivacyPolicyPressed}>Privacy Policy</Text></Text>
                </View>

                <View style = {styles.root}>
                    <Text style = {styles.textCreateAccount} onPress = {onSignInPressed}>Already have Account?Sign In</Text>
                </View>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems : "center",
    },
    title : {
        fontSize : 40,
        fontWeight : "bold",
        color : "#16B3C0",
        margin : 15,
        fontFamily : "sans-serif-medium"
    },
    text: {
        color : "black",
        fontSize : 13,
    },
    textCreateAccount : {
        color : "black",
        fontSize : 13,
        marginTop : 50,
    },
    link : {
        color : "#FFA03A"
    }
})

export default SignUpScreen;