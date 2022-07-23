import React from "react";
import { View, Text, StyleSheet } from 'react-native';


const reactbar = () => {
    return (
        <View>
            <Text style={styles.title}>PATIKSTORE</Text>
        </View>
    );
};
const styles = StyleSheet.create({

    title: {
        fontWeight: 'bold',
        margin: 5,
        fontSize: 20,

    },

});

export default reactbar;