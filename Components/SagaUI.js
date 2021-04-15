import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setTextRequestAC, textSelector } from '../Redux/EffectsRedux';
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
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
    },
});

const SagaUI = props => {
    const dispatch = useDispatch();
    const text = useSelector(textSelector);

    const _onPress_Button = () => {
        dispatch(setTextRequestAC());
    }

    return (
        <View style={styles.container}>
            <Text>{text}</Text>
            <TouchableOpacity style={styles.button} onPress={_onPress_Button}>
                <Text>Tıkla</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SagaUI;