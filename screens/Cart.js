import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Text, Pressable } from 'react-native';
import { CardCart } from '../components';
import Constants from 'expo-constants';
import { useSelector } from 'react-redux';

const Cart = () => {
    const { carts } = useSelector(state => state)
    const [status, setStatus] = useState('idle')
  
    useEffect(() => {
        setStatus('loading')
        if (carts.length > 0) setStatus('success')
        else setStatus('error')
      },[carts])
    
    if (status === 'idle') return null;

    if (status === 'loading') {
        return <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} size="large" color="green"/>
    }

    return (
        <View style={styles.container}>
        {
            status === 'error' && <Text style={{ flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: 20}}>Empty Cart.</Text>
        }
        <FlatList
            data={carts}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => {
                return (
                <CardCart name={item.name} image={item.image} price={item.price} id={item.id}/>
                )
            }}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'tomato',
        padding: 5,
        borderRadius: 5,
    }
  });

export default Cart