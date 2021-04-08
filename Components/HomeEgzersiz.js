import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        borderColor: 'darkgrey',
        borderWidth: 1,
        width: 200,
        padding: 8,
        borderRadius: 5,
        marginBottom: 10,
    },
    loginButton: {
        backgroundColor: 'lightgreen',
        borderColor: 'darkgrey',
        borderWidth: 1,
        width: 200,
        padding: 8,
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
    },
    infoContainer: {
        marginVertical: 50,
    },
})

const HomeEgzersiz = props => {

    const [ username, setUsername ] = useState('');

    const _onPress_Login = () => {
        // ...
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={"Kullanıcı adı"}
                    onChangeText={setUsername}
                />
            </View>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={_onPress_Login}>
                <Text>Giriş Yap</Text>
            </TouchableOpacity>
            <View style={styles.infoContainer}>
                <Text>Giriş yapıldı: beyzatopcu</Text>
            </View>
        </View>
    );
};

export default HomeEgzersiz;
