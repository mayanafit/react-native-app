import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, Button, Pressable } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../store/action';

const CardCart = ({name, price, image, id}) => {
    const dispatch = useDispatch()
    const [quantity, setQty] = useState(1)
    const deleteItemCart = () => {
        dispatch(deleteCart(id))
    }
    const decrement = () => {
        if (quantity > 0) {
            let currNum = quantity
            currNum--
            setQty(currNum)
        } else {
            setQty(0)
        }
    }
    const increment = () => {
        let currNum = quantity
        currNum++
        setQty(currNum)
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
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable style={styles.cardButton} onPress={decrement}>
                        <Text style={{fontSize: 15, color: 'white'}}>-</Text>
                    </Pressable>
                    <Text style={{ height: 35, width: 35, marginHorizontal: 7, borderColor: 'gray', borderWidth: 1, fontSize: 20, textAlign: 'center', paddingVertical: 5}}>{quantity}</Text>
                    <Pressable style={styles.cardButton} onPress={increment}>
                        <Text style={{fontSize: 15, color: 'white'}}>+</Text>
                    </Pressable>
                </View>
                <Pressable style={{marginLeft: 10}} onPress={deleteItemCart}>
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

export default CardCart