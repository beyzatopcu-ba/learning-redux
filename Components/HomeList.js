import React, { useState, useRef } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {addItem, listSelector} from '../Redux/ListRedux';

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
})

const HomeList = props => {

    console.log('Rendering HomeList');

    const [itemText, setItemText] = useState('');
    const refItemText = useRef('');
    const dispatch = useDispatch();

    const shoppingListInRedux = useSelector(listSelector);

    const renderItem = ({item}) => {
        return (
            <Text>{item}</Text>
        )
    }

    const _onPress_Add = () => {
        console.log(`onPress_add: ${refItemText.current}'i ekliyorum`);
        console.log('Dispatch edeceğim.')
        dispatch(addItem(refItemText.current));
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder={"İtem"}
                        onChangeText={(text) => {refItemText.current = text}}
                    />
                </View>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={_onPress_Add}>
                    <Text>Ekle</Text>
                </TouchableOpacity>
                <View style={{flex: 0.6}}>
                    <FlatList
                        data={shoppingListInRedux}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeList;
