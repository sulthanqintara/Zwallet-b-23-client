import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {Provider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
// import {PersistGate} from 'redux-persist/integration/react';
// import reduxConfig from './src/redux/store';

import SplashScreen from './src/screens/SplashScreen/Component';
import Home from './src/screens/Login/Component';

// const redux = reduxConfig();

const App = () => {
  const {Navigator: StackNav, Screen: StackScreen} = createStackNavigator();

  return (
    // <Provider store={redux.reduxStore}>
    //   <PersistGate persistor={redux.persist}>
    <NavigationContainer>
      <StackNav initialRouteName={'SplashScreen'}>
        <StackScreen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <StackScreen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </StackNav>
    </NavigationContainer>
    //   </PersistGate>
    // </Provider>
  );
};

export default App;
