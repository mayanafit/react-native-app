import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import { CardFood } from '../components';
import Constants from 'expo-constants';
import Icon from '@expo/vector-icons/Entypo';
import { useSelector } from 'react-redux';

const Menu = ({ navigation }) => {
    const [status, setStatus] = useState('idle')
    const { products } = useSelector(state => state)
    
    useEffect(() => {
        setStatus('loading')
        if (products.length > 0) setStatus('success')
        else setStatus('error')
    },[])

    const toForm = () => {
        navigation.navigate("Add Menu")
    }
    
    if (status === 'idle') return null;

    if (status === 'loading') {
        return <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} size="large" color="green"/>
    }

    return (
        <View style={styles.container}>
        <View style={{padding: 10, flexDirection: 'row', justifyContent: 'center'}}>
            {/* <Text style={{fontSize: 30}}>Main Menu</Text> */}
            <Pressable style={styles.addButton} onPress={toForm}>
                <Text style={{fontSize: 15, marginRight: 5, color: 'white'}}>Add Menu</Text>
                <Icon name='add-to-list' size={15} color='white'/>
            </Pressable>
        </View>
        <ScrollView>
            <Text style={{fontSize: 20, alignSelf: 'center', padding: 10}}>Ala Carte</Text>
            {
                products.filter(product => product.type === 'food').length > 0 ? products.map(product => product.type === 'food' && <CardFood key={product.id} name={product.name} price={product.price} image={product.image} id={product.id}/>) : <Text style={{ flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>Empty.</Text>
            }
            <Text style={{fontSize: 20, alignSelf: 'center', padding: 10}}>Hot Deal</Text>
            {
                products.filter(product => product.type === 'package').length > 0 ? products.map(product => product.type === 'package' && <CardFood key={product.id} name={product.name} price={product.price} image={product.image} id={product.id}/>) : <Text style={{ flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>Empty.</Text>
            }
            <Text style={{fontSize: 20, alignSelf: 'center', padding: 10}}>Drink</Text>
            {
                products.filter(product => product.type === 'drink').length > 0 ? products.map(product => product.type === 'drink' && <CardFood key={product.id} name={product.name} price={product.price} image={product.image} id={product.id}/>) : <Text style={{ flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>Empty.</Text>
            }
        </ScrollView>
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

export default Menu