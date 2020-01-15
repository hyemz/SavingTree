import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class Login extends React.Component {
  testPost(e) {
    const {navigation} =this.props;
    var url = 'http://192.168.40.14:3000/login';
    axios
      .post(url, {
        email: this.state.emailtext,
        password: this.state.passwordtext,
      })
      .then(function(response) {
        console.log("로그인 리스폰스!!"+response);
        if((response.request.response)!=0){
          navigation.navigate("Home");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    
    this.state.emailtext = '';
    this.state.passwordtext = '';
    
  }
  

  state={
    emailtext:"",
    passwordtext:""
  }
  render(){
    
    return (
        <View style={styles.container}>
        <Image  source={require('../image/treee.png')}></Image>
        <Text style={styles.logo}>saving tree</Text>
        <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="gray"
            value={this.state.emailtext}
            onChangeText={emailtext => this.setState({emailtext})}/>
        </View>
        <View style={styles.inputView} >
            <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="gray"
            value={this.state.passwordtext}

            onChangeText={passwordtext => this.setState({passwordtext})}/>
        </View>
        <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={this.testPost.bind(this)}>
          <Button title="LOGIN" color="#ffffff" onPress={this.testPost.bind(this)}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('SignUp')}>
          <Button title="SIGNUP" color="#ffffff" onPress={() => this.props.navigation.navigate('SignUp')}/>
        </TouchableOpacity>

    
        </View>
    );
  }
  
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#82B78C",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#FFFFFF",
    borderColor: "green",
    borderWidth: 1,
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"green",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#82B78C",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:-5
  },
});

