import React, { useState } from 'react';
import { Pressable, Text, TextInput, View, StyleSheet, asy } from 'react-native';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/action';

const Login = ({navigation}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState(``)
    const [password, setPassword] = useState(``)

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
            password,
        }

        if (!name) alert(`name must be filled!`)
        if (!password) alert(`please choose the category!`)
        console.log(data)
        //fetch API to match user data and generate token
        // navigation.navigate("Main Menu")
    }
    
    return (
        <View style={styles.container}>
            <Text>My Food!</Text>
            <Text>Login Page</Text>
            <View style={styles.formGroup}>
                <Text style={styles.textForm}>Username</Text>
                <TextInput style={[styles.textForm, {borderBottomColor: 'grey', borderBottomWidth: 1}]} placeholder="John Doe" onChangeText={(text) => setName(text)}/>
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.textForm}>Password</Text>
                <TextInput style={[styles.textForm, {borderBottomColor: 'grey', borderBottomWidth: 1}]} placeholder="*******" onChangeText={(text) => setPassword(text)}/>
            </View>
            <Pressable onPress={submitForm} style={{marginTop: 20, backgroundColor: 'tomato'}}>
                <Text style={{color: 'white', padding: 10, fontSize: 17, textAlign: 'center'}}>Login</Text>
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

export default Login