import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const NotFoundScreen = () => {
    const router = useRouter()
    return (
        <View>
            <Text>NotFoundScreen</Text>
            <Image source={require('../assets/not-found.png')}></Image>
            <Button title='Go back' onPress={()=> router.back()}></Button>
        </View>
    )
}

export default NotFoundScreen

const styles = StyleSheet.create({})