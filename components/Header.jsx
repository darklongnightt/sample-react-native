import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                My Todos
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        paddingTop: 10,
        backgroundColor: '#7DCEA0',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    }
})