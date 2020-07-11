import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, TextInput, Text } from 'react-native';

export default function AddTodo({ addTodo }) {
    const [todo, setTodo] = useState('');

    const handleChange = (val) => {
        setTodo(val);
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder='E.g. Go get groceries' onChangeText={handleChange} style={styles.input} />
            <TouchableOpacity style={styles.button} onPress={() => addTodo(todo)}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        marginVertical: 10,
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#7DCEA0',
        padding: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    }
})