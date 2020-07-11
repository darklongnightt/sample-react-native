import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { useHttp } from '../hooks/http';

export default function Header() {
    const [isLoading, fetchedData] = useHttp('https://dog.ceo/api/breeds/image/random', []);

    return (
        <View style={styles.container}>
            {fetchedData && (
                <Image
                    style={styles.logo}
                    source={{ uri: fetchedData.message }}
                />
            )}
            <Text style={styles.title}>
                My Dogs
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 70,
        paddingTop: 10,
        backgroundColor: '#7DCEA0',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
        marginHorizontal: 10,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
    }
})