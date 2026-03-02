import { router } from "expo-router";
import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { tokenService } from "../../services/token.service";

export default function WelcomeScreen() {


  const onLogout = async (): Promise<void> => {
    await tokenService.removeToken();
    Alert.alert("Sesión", "Has cerrado sesión.");
    router.replace("/(auth)/login");
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido, estás hecho un toro rey.</Text>
      <View style={styles.buttonContainer}>
        <Button title="Cerrar sesión" onPress={onLogout} />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16, gap: 8 },
  title: { fontSize: 24, fontWeight: "700" },
  buttonContainer: { marginTop: 16, alignSelf: "stretch" },

});
