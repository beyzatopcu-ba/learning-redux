import React, { useState, useRef } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {addItem, listSelector} from '../Redux/ListRedux';
import { getUsersRequest, userListSelector } from '../Redux/UserRedux';

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
    button: {
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

const users = [
    {
      "id": 1,
      "firstName": "Peter",
      "lastName": "Mackenzie"
    },
    {
      "id": 2,
      "firstName": "Cindy",
      "lastName": "Zhang"
    },
    {
      "id": 3,
      "firstName": "Ted",
      "lastName": "Smith"
    },
    {
      "id": 4,
      "firstName": "Susan",
      "lastName": "Fernbrook"
    },
    {
      "id": 5,
      "firstName": "Emily",
      "lastName": "Kim"
    },
    {
      "id": 6,
      "firstName": "Peter",
      "lastName": "Zhang"
    },
    {
      "id": 7,
      "firstName": "Cindy",
      "lastName": "Smith"
    },
    {
      "id": 8,
      "firstName": "Ted",
      "lastName": "Fernbrook"
    },
    {
      "id": 9,
      "firstName": "Susan",
      "lastName": "Kim"
    },
    {
      "id": 10,
      "firstName": "Emily",
      "lastName": "Mackenzie"
    }
  ]

const HomeList = props => {

    const userList = useSelector(userListSelector);
    const dispatch = useDispatch();

    const renderItem = ({item}) => {
        return (
            <Text>{item.firstName}</Text>
        )
    }

    const _onPress_GetUsers = () => {
        const getUsersRequestAction = getUsersRequest();
        dispatch(getUsersRequestAction);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={_onPress_GetUsers}>
                    <Text>Kullanıcıları getir</Text>
                </TouchableOpacity>
                <View style={{ flex: 0.6 }}>
                    <FlatList
                        data={userList}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => item.id}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeList;
