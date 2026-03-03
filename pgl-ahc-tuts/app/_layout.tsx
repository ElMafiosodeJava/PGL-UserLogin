import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Link, Slot, useRouter } from 'expo-router';
import { useState } from 'react';
import React from 'react';

const AppLayout = () => {
    const router = useRouter();

    const [currentRoute, setCurrentRoute] = useState<string>('')

    return (
        <View style={styles.container}>
            <View style={styles.marginContainer}>

            </View>
            <View style={styles.header}>
                <Link href='/'
                    style={styles.headerText}>
                    Cabecera
                </Link>
            </View>
            <View style={styles.body}>
                <Slot />
            </View>
            <View style={styles.footer}>
                <Button title="Go to" onPress={() => {
                    router.navigate(currentRoute)
                    console.log('Navegacionando! ' + currentRoute)
                }} />
                <TextInput style={styles.input} onChangeText={(text) => setCurrentRoute(text)} />
            </View>
        </View>
    )
}

export default AppLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontSize: 18
    },
    marginContainer: {
        flex:1
    },
    header: {
        flex: 1,
        backgroundColor: '#2e53a2ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'red'
    },
    body: {
        flex: 14,
        backgroundColor: '#d9dbe1ff'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        gap: 40,
        backgroundColor: '#547cd2ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: ' black',
        width: '50%'
    }
});