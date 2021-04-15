import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeNameForSaga, nameSelector } from '../Redux/NameRedux';

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    input: {
        padding: 5,
        color: 'black',
        width: 200,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        marginBottom: 5,
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
    }
});


const SayHello = props => {

    const [name, setName] = useState('');
    const nameInRedux = useSelector(nameSelector);
    const dispatch = useDispatch();

    const _onPress_SayHello = () => {
        dispatch(changeNameForSaga(name));
    }

    return (
        <View style={styles.container}>
            <TextInput 
                onChangeText={setName}
                style={styles.input} 
                placeholder={'İsmini yaz'} 
                placeholderTextColor="grey"/>
            <TouchableOpacity style={styles.button} onPress={_onPress_SayHello}>
                <Text>Merhaba De</Text>
            </TouchableOpacity>
            <Text>{"Merhaba " + nameInRedux}</Text>
        </View>
    );
};


export default SayHello;
