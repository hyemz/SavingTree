import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import mainpage from './components/main';
import forestpage from './components/forest';
import profile from './components/Profile';
import Login from './src/Login';
import SignUp from './src/SignUp';


export default class App extends React.Component {
  
  
  render() {
    return (
        <AppContainer />
    )
  }
}

const AppNavigator = createStackNavigator({
  Login: {screen: Login},
  SignUp: {screen: SignUp},
  Home: {screen:mainpage},
  forest: {screen:forestpage},
  profile: {screen: profile}
});

const AppContainer = createAppContainer(AppNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

