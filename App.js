import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen/Component.js';
import Home from './src/screens/Home/Home';
import Topup from './src/screens/Topup/Topup.js';
import FindReceiver from './src/screens/TransferFlow/FindReceiver/FindReceiver.js';
import InputAmount from './src/screens/TransferFlow/InputAmount/InputAmount.js';
import Login from './src/screens/Login/Login.js';
import Register from './src/screens/Register/Register.js';
import ResetPassword from './src/screens/ResetPassword/ResetPassword.js';
import CreateNewPassword from './src/screens/ResetPassword/CreateNewPassword.js';
import ConfirmOtp from './src/screens/ResetPassword/ConfirmOtp.js';
import Confirmation from './src/screens/TransferFlow/Confirmation/Confirmation.js';
import Profile from './src/screens/Profile/Profile.js';
import PersonalInfo from './src/screens/PersonalInfo/PersonalInfo.js';

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
          name="Confirm-Otp"
          component={ConfirmOtp}
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
        <StackScreen
          name="TransferConfirmation"
          component={Confirmation}
          options={{headerShown: false}}
        />
        <StackScreen
          name="Profile"
          component={Profile}
          options={{headerTransparent: true, headerTitle: ''}}
        />
        <StackScreen
          name="PersonalInfo"
          component={PersonalInfo}
          options={{
            headerTransparent: true,
            headerTitle: 'Personal Information',
            headerTitleStyle: {
              fontFamily: 'NunitoSans-Bold',
              fontSize: 20,
              color: '#4D4B57',
            },
          }}
        />
      </StackNav>
    </NavigationContainer>
  );
};

export default App;
