import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
    const isUserLogged = false
    return (
        <Drawer screenOptions={{ headerShown: true, swipeEnabled: true }}>
            <Drawer.Screen
                name="(tabs)"
                options={{
                    drawerLabel: 'Cámarita chachi',
                    title: 'Cámara de fotos',
                }}
            />
            <Drawer.Screen
                name="contacts/family"
                options={{
                    drawerLabel: 'Familia chachi tal cual',
                    title: 'Familia',
                }}
            />
            <Drawer.Screen
                name="contacts/[user-info]"
                options={{
                    drawerItemStyle: { display: 'none' },
                    title: 'Información de usuario'
                }}
                />
            <Drawer.Screen
                name="contacts/friends"
                options={{
                    drawerLabel: 'Amiuitos',
                    title: 'overview',
                }}
                />
            <Drawer.Screen
                name="settings"
                options={{
                    drawerLabel: 'Ajustes',
                    drawerItemStyle: { display: isUserLogged ? 'contents' : 'none' },
                    title: 'Ajustitos',
                }}
            />

        </Drawer>
    )
}

export default DrawerLayout

const styles = StyleSheet.create({})