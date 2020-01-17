import React from 'react'
import axios from 'axios';
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'

export default class SignUp extends React.Component {
  state = {
    usernametext: '', passwordtext: '', emailtext: ''
  }
  testPost(e) {
    //e.preventDefault();
    const {navigation} =this.props;
    //우리집
    //var url = 'http://172.30.1.19:3010/login';
    //it벤처타워
    var url = 'http://192.168.40.14:3010/login';
    axios
      .post(url, {
        name: this.state.usernametext,
        password: this.state.passwordtext,
        email: this.state.emailtext,
      })
      .then(function(response) {
        console.log(response);
        navigation.navigate("Login");
      })
      .catch(function(error) {
        console.log(error);
      });
    this.state.usernametext = '';
    this.state.emailtext = '';
    this.state.passwordtext = '';
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Name'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={usernametext => this.setState({usernametext})}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={passwordtext => this.setState({passwordtext})}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={emailtext => this.setState({emailtext})}
        />
        <Button
          title='Sign Up' color="#82B78C"
          onPress={this.testPost.bind(this)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#82B78C',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})