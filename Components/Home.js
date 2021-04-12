import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { INCREASE_NUMBER_REQUEST, numberSelector } from '../Redux/NumberRedux';

import NumberDisplay from './NumberDisplay';
import SayHello from './SayHello';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
});

const Home = props => {
    const dispatch = useDispatch();

    const _onPress_Increase = () => {
        // Saga varken, UI tarafında bir değişiklik olmuyor.
        dispatch({
            type: INCREASE_NUMBER_REQUEST,
        })
    }

    const _onPress_Decrease = () => {
    }

    return (
        <View style={styles.container}>
            <SayHello />
            <NumberDisplay />
            <TouchableOpacity style={styles.button} onPress={_onPress_Increase}>
                <Text>ARTTIR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={_onPress_Decrease}>
                <Text>AZALT</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;