import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const AppScreen = () => {
  return (
    <Redirect href="/about" />
  )
}

export default AppScreen

const styles = StyleSheet.create({})