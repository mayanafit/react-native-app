import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/TabNavigator';
import { LoginStackNavigator } from './navigation/StackNavigator';
import { ActivityIndicator, View } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(true)
  const [userToken, setUserToken] = useState(null)
  // const authContext = React.useMemo(() => ({
  //   signIn: () => {
  //     setUserToken('LAdsakosaPA')
  //     setLoading(false)
  //   },
  //   signOut: () => {
  //     setUserToken(null)
  //     setLoading(false)
  //   }
  // }))

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1000)

  // },[])


  // if (loading) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   )
  // }
  return (
    <Provider store={store}>
      <NavigationContainer> 
        {/* <LoginStackNavigator /> */}
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
