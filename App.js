import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/Screens/SplashScreen/Component.js';
import Home from './src/Screens/Home/Home';
import Topup from './src/Screens/Topup/Topup.js';
import FindReceiver from './src/Screens/TransferFlow/FindReceiver/FindReceiver.js';
import InputAmount from './src/Screens/TransferFlow/InputAmount/InputAmount.js';
import Login from './src/Screens/Login/Login.js';
import Register from './src/Screens/Register/Register.js';
import ResetPassword from './src/Screens/ResetPassword/ResetPassword.js';
import CreateNewPassword from './src/Screens/ResetPassword/CreateNewPassword.js';

const App = () => {
  const {Navigator: StackNav, Screen: StackScreen} = createStackNavigator();
  return (
    <NavigationContainer>
      <StackNav initialRouteName="SplashScreen">
        <StackScreen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <StackScreen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <StackScreen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <StackScreen
          name="Reset-Password"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <StackScreen
          name="Create-Password"
          component={CreateNewPassword}
          options={{headerShown: false}}
        />
        <StackScreen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <StackScreen
          name="Topup"
          component={Topup}
          options={{headerShown: false}}
        />
        <StackScreen
          name="FindReceiver"
          component={FindReceiver}
          options={{headerShown: false}}
        />
        <StackScreen
          name="InputAmount"
          component={InputAmount}
          options={{headerShown: false}}
        />
      </StackNav>
    </NavigationContainer>
  );
};

export default App;
