import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'

const ContactFriendsScreen = () => {

  const router = useRouter()
  const names = ['Jose', 'Marco', 'Juan Manuel Titán Coloso Genio Figura']
  return (
    <View>
      <Text>ContactFriendsScreen</Text>
      {names.map(name => <Button onPress={() => router.navigate(`/contacts/${name}`)} title={name}></Button>)}
    </View>
  )
}

export default ContactFriendsScreen

const styles = StyleSheet.create({})