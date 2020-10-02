import React, { useState } from 'react';
import { Pressable, Text, TextInput, View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/action';
const Form = ({navigation}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState(``)
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState(``)
    const [type, setType] = useState(``)

    const submitForm = () => {
        const makeId = (length) => {
            let result = '';
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
         }
        const data = {
            id: makeId(5),
            name,
            price: Number(price),
            image,
            type
        }
        console.log(data)
        if (!name) alert(`name must be filled!`)
        if (!price || price < 0) alert(`Please fill the price!`)
        if (!image) alert(`image must be filled!`)
        if (!type) alert(`please choose the category!`)

        dispatch(addProduct(data))
        alert("succes added menu!")
        navigation.navigate("Main Menu")
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.formGroup}>
                <Text style={styles.textForm}>Name</Text>
                <TextInput style={[styles.textForm, {borderBottomColor: 'grey', borderBottomWidth: 1}]} placeholder="e.g: hamburger" onChangeText={(text) => setName(text)}/>
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.textForm}>Price</Text>
                <TextInput style={[styles.textForm, {borderBottomColor: 'grey', borderBottomWidth: 1}]} keyboardType="number-pad" placeholder="e.g: 10,000" onChangeText={(text) => setPrice(text)}/>
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.textForm}>Image URL</Text>
                <TextInput style={[styles.textForm, {borderBottomColor: 'grey', borderBottomWidth: 1}]} placeholder="e.g: http://image.jpg" onChangeText={(text) => setImage(text)}/>
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.textForm}>Category</Text>
                <RNPickerSelect
                    onValueChange={(value) => setType(value)}
                    items={[
                        { label: 'Ala Carte', value: 'food' },
                        { label: 'Drink', value: 'drink' },
                        { label: 'Package', value: 'package' },
                    ]}
                    style={{paddingVertical: 10}}
                />
            </View>
            <Pressable onPress={submitForm} style={{marginTop: 20, backgroundColor: 'tomato'}}>
                <Text style={{color: 'white', padding: 10, fontSize: 17, textAlign: 'center'}}>Submit</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    formGroup: {
        marginVertical: 10,
    },
    textForm: {
        fontSize: 15,
        marginVertical: 5,
        padding: 5,
    }
})

export default Form