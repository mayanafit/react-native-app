import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { addCart, deleteProduct } from '../store/action';

const CardFood = ({name, image, price, id}) => {
    const dispatch = useDispatch()
    const makeId = (length) => {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
    const addToCart = () => {
        const item = {
            id: makeId(5),
            name,
            image,
            price: Number(price),
        }
        dispatch(addCart(item))
        alert(`Added ${name} to cart!`)
    }
    const deleteItem = () => {
        dispatch(deleteProduct(id))
    }
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
            <Image 
                source={{
                uri: image
                }}
                style={styles.cardImage}
            />
            <View style={styles.cardText}> 
                <Text>{name}</Text>
            <Text>Rp. {price.toLocaleString()}</Text>
            </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Pressable style={styles.cardButton} onPress={addToCart}>
                    <Text style={styles.buttonText}>Order</Text>
                </Pressable>
                <Pressable style={{marginLeft: 10}} onPress={deleteItem}>
                    <Icon name='delete' size={25} color='red'/>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        width: '95%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardImage: {
        borderRadius: 15,
        width: 75,
        height: 75,
    },
    cardText: {
        fontSize: 15,
        marginLeft: 20,
    },
    cardButton: {
        backgroundColor: 'tomato',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white'
    },
})

export default CardFood