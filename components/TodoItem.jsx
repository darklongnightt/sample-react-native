import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, removeTodo }) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => removeTodo(item.id)}>
            <Text style={styles.text}>{item.todo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 3,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        backgroundColor: '#E8F8F5',
        padding: 5,
    },
    text: {
        color: '#2C3E50',
    }
})