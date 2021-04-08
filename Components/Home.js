import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

import NumberDisplay from './NumberDisplay';

const Home = () => {
    return (
        <View style={styles.container}>
            <NumberDisplay />
            <TouchableOpacity style={styles.button}>
                <Text>ARTTIR</Text>
            </TouchableOpacity>
        </View>
    );
};

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
    },
});

export default Home;