/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Navigation from './src/Navigation';
import { Amplify }  from 'aws-amplify';
import config from "./src/aws-exports";
// import { withAuthenticator } from "aws-amplify-react-native";
// import { Auth } from "aws-amplify"

Amplify.configure(config);

const App = () => {
  //Auth.signOut();
  return (
    <SafeAreaView
      style = {styles.root}
    >
      <StatusBar 
        barStyle= "light-content"
        backgroundColor= "#16B3C0"
      />
      <Navigation></Navigation>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex : 1,
    backgroundColor : "black"
  }
});

// const signUpConfig = {
//   header: "My Customized Sign Up",
//   hideAllDefaults: true,
//   signUpFields: [
//     {
//       label: "Full name",
//       key: "name",
//       required: true,
//       displayOrder: 1,
//       type: "string",
//     },
//     {
//       label: "Username",
//       key: "preferred_username",
//       required: true,
//       displayOrder: 3,
//       type: "string",
//     },
//     {
//       label: "Password",
//       key: "password",
//       required: true,
//       displayOrder: 4,
//       type: "password",
//     },
//   ],
// };


export default App;
