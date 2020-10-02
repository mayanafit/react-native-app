import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import Constants from 'expo-constants';

const Profile = () => {
 return (
    <View style={styles.container}>
        <Image 
            source={{
                uri: "https://6.viki.io/image/3cda281d1afe453b826b4510cf3a7a74.jpeg"
            }}
            style={styles.profileImage}
        />
        <Text>Wendy Shon</Text>
        <Pressable style={styles.profileButton}>
            <Text style={{color: 'white'}}>Logout</Text>
        </Pressable>
    </View>
 )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: Constants.statusBarHeight,
    },
    profileImage: {
        width: 100,
        height: 100,
        marginTop: 100,
        marginBottom: 20,
        borderRadius: 50,
    },
    profileButton: {
        backgroundColor: 'red',
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 20,
    }
})

export default Profile
