import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { authService } from "../../services/auth.service";
import { tokenService } from "../../services/token.service";
import { isValidEmail } from "../../utils/validators";

export default function LoginScreen() {
   const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (): Promise<void> => {
    const emailTrim = email.trim();

    if (!isValidEmail(emailTrim)) {
      Alert.alert("Login", "Email no válido.");
      return;
    }
    
    if (password.trim().length === 0) {
      Alert.alert("Login", "La contraseña es obligatoria.");
      return;
    }

    try {
      const res = await authService.loginUser({ email: emailTrim, pswd: password });
      const token = res.object?.token;

      if (!token) {
        Alert.alert("Login", "No se recibió token.");
        return;
      }

      await tokenService.saveToken(token);

      Alert.alert("Login", res.message ?? "Login correcto.");

      router.replace("/(drawer)/welcome");
    } catch (e: any) {
      Alert.alert("Login", e?.message ?? "Error haciendo login.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={onLogin} />
      </View>

      <Text style={styles.linkLine}>
        ¿No tienes cuenta? <Link href="/(auth)/register">Regístrate</Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 12 },
   input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: "100%",
    marginBottom: 20
  },
  buttonContainer: { marginTop: 8 },
  linkLine: { marginTop: 12, textAlign: "center" },
});
