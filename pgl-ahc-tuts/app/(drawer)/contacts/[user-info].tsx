import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ContactUserInfoScreen = () => {
  const params = useLocalSearchParams()
  const username = params['user-info'] as string

  const validUsers: string[] = ['Oscar', 'Jose', 'Kiara']

  return (
    <View>
      <Text>ContactUserInfoScreen</Text>

      {
        validUsers.includes(username) ? 

        <Text>Se ha encontrado a {username}</Text>
        :
        <Text> El usuario no se encuentra en nuestra en base.</Text>
      }



    </View>
  )
}

export default ContactUserInfoScreen

const styles = StyleSheet.create({})