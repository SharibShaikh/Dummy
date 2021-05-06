import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import * as firebase from 'firebase';
import db from '../config.js';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
    };
  }
  login = async (email, password) => {
    if (email && password) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
          if(response){
            this.props.navigation.navigate("Transaction")
          }
      }
      catch(error){
      switch(error.code){

        case "auth/user-not-found":
        Alert.alert("User Doesn't Exist");
        break

        case "auth/invalid-email":
        Alert.alert("Incorrect Email Or Password")
        break
        
      }
      }
    }
  };
  render() {
    return (
      <View style={styles.container}>
     <Image
              source={require('../assets/booklogo.jpg')}
              style={{ width: 200, height: 200 }}
            />
        <View>
          <TextInput
            placeholder="Enter Your Email ID"
            style={styles.loginbox}
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />

          <TextInput
            placeholder="Enter Your Password"
            style={styles.loginbox}
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            this.login(this.state.emailId, this.state.password);
          }}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  loginbox: {
    width: 200,
    height: 40,
    borderWidth: 1.0,
    borderRightWidth: 2,
    fontSize: 20,
    margin:10,
    borderRadius:10
  },
  loginButton: {
    backgroundColor: 'red',
    width: 100,
    height: 40,
  
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
    borderRadius: 10,
  },
});
