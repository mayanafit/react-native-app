import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Menu, Form, Cart, Login } from '../screens';
const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  )
}

const MainStackNavigator = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen 
          options={{
              title: 'Main Menu',
              headerStyle: {
                backgroundColor: 'tomato',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center'
              },
            }}
          name="Main Menu" component={Menu} />
          <Stack.Screen 
          options={{
            title: 'Add Menu',
            headerStyle: {
              backgroundColor: 'tomato',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Add Menu" component={Form} /> 
        </Stack.Navigator>
    )
}

const CartStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            options={{
                title: 'My Cart',
                headerStyle: {
                  backgroundColor: 'tomato',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  textAlign: 'center'
                },
              }}
            name="Cart" component={Cart} />
        </Stack.Navigator>
    )
}

export { MainStackNavigator, CartStackNavigator, LoginStackNavigator }