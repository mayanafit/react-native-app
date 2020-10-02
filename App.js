import React from 'react';
import { MainStackNavigator, CartStackNavigator } from './navigation/StackNavigator';
import { Provider } from 'react-redux';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Profile } from './screens';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer> 
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Cart') {
                iconName = focused
                  ? 'ios-cart'
                  : 'ios-cart';
              } else if (route.name === 'Menu') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'ios-person' : 'ios-person'
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Menu" component={MainStackNavigator} />
          <Tab.Screen name="Cart" component={CartStackNavigator} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
