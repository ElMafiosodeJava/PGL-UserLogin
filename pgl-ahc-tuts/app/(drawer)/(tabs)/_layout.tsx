import { StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const CameraTabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="camera"
        options={{
          title: 'Cámara',
          tabBarIcon: () => <FontAwesome6 size={28} name="camera" color="black" />,
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: 'Galería de fotos',
          tabBarIcon: () => <FontAwesome6 size={28} name="laptop" color="black" />,
        }}
      />
    </Tabs>
  )
}

export default CameraTabsLayout

const styles = StyleSheet.create({})