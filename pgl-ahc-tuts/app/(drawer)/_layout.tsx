import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Drawer } from 'expo-router/drawer';
import { useRouter } from 'expo-router';
import { tokenService } from '../../services/token.service';

const DrawerLayout = () => {
    const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    (async () => {
      const token = await tokenService.getToken();
      const ok = !!token;
      setHasToken(ok);
      setLoading(false);

      if (!ok) {
        router.replace("/(auth)/login");
      }
    })();
  }, [router]);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!hasToken) return null;

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