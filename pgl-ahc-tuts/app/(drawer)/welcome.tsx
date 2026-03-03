import { router } from "expo-router";
import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { tokenService } from "../../services/token.service";
import { welcomeService } from "../../services/welcome.service";

export default function WelcomeScreen() {


  const onLogout = async (): Promise<void> => {
    await tokenService.removeToken();
    Alert.alert("Sesión", "Has cerrado sesión.");
    router.replace("/(auth)/login");
  };

   const onShowWelcomeMessage = async (): Promise<void> => {
    try {
      const res = await welcomeService.getWelcomeMessage();
      Alert.alert("Bienvenida (API)", res.object ?? res.message);
    } catch (e: any) {
      Alert.alert("Bienvenida (API)", e?.message ?? "Error llamando a /welcome.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido, estás hecho un toro rey.</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Cerrar sesión" onPress={onLogout} />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="Mostrar mensaje de /welcome" onPress={onShowWelcomeMessage} />
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16, gap: 8 },
  title: { fontSize: 24, fontWeight: "700" },
  buttonContainer: { marginTop: 16, alignSelf: "stretch" },

});
