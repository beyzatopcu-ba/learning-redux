import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { INCREASE_NUMBER, DECREASE_NUMBER } from '../Redux/NumberRedux'

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
    // mapDispatchToProps'tan dönen nesnedeki increaseNumberInRedux alanı,
    // buraya props içerisinde gelecek.

    // props.increaseNumberInRedux -> defined olacak

    const _onPress_Increase = () => {
        props.increaseNumberInRedux();
    }

    const _onPress_Decrease = () => {
        props.decreaseNumberInRedux();
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

// mapDispatchToProps'tan dönen nesnedeki alanlar,
// Home component'ine props olarak yansıyacak.
const mapDispatchToProps = dispatch => {

    const increaseNumberInRedux = () => {
        // Bir action nesnesi oluşturup, onu dispatch eden bir fonksiyon
        const action = {
            // Action'ın tipini sayıyı arttırma olan INCREASE_NUMBER yaptık
            type: INCREASE_NUMBER,
        };
        dispatch(action);
    };

    return {
        increaseNumberInRedux,
        decreaseNumberInRedux: () => dispatch({type: DECREASE_NUMBER})
    }
};

export default connect(null, mapDispatchToProps)(Home);