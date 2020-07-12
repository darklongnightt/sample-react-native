import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function TodoItem({ item, removeTodo }) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => removeTodo(item.id)}>
            <Text style={styles.text}>{item.todo}</Text>
            <View style={styles.iconContainer}>
                <AntDesign name="edit" size={16} color="black" style={styles.icon}/>
                <AntDesign name="delete" size={16} color="black" style={styles.icon}/>
            </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: '#2C3E50',
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icon: {
        marginHorizontal: 3,
    }
})