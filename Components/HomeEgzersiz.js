import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../Redux/UsernameRedux';

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
    const [ password, setPassword ] = useState('');

    const _onPress_Login = () => {
        // ...
        props.login(username, password);
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={"Kullanıcı adı"}
                    onChangeText={setUsername}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={"Şifre"}
                    onChangeText={setPassword}
                />
            </View>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={_onPress_Login}>
                <Text>Giriş Yap</Text>
            </TouchableOpacity>
            <View style={styles.infoContainer}>
                <Text>{"Giriş yapıldı: " + props.username}</Text>
            </View>
        </View>
    );
};

const mapStateToProps = state => ({
    username: state.userState.user,
})

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(login(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeEgzersiz);
