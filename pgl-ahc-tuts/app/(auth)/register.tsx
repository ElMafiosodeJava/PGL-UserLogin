import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";
import { authService } from "../../services/auth.service";
import { isValidEmail, isStrongPassword } from "../../utils/validators";

export default function RegisterScreen() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = async (): Promise<void> => {
    const nameTrim = fullName.trim();
    const emailTrim = email.trim();

    if (nameTrim.length === 0) {
      Alert.alert("Registro", "El nombre completo es obligatorio.");
      return;
    }

    if (!isValidEmail(emailTrim)) {
      Alert.alert("Registro", "Email no válido.");
      return;
    }

    if (!isStrongPassword(password)) {
      Alert.alert(
        "Registro",
        "Contraseña no segura. Mínimo 8 caracteres, con mayúscula, minúscula y número."
      );
      return;
    }

    try {
      const res = await authService.registerUser({
        fullname: nameTrim,
        email: emailTrim,
        pswd: password,
      });

      Alert.alert("Registro", res.message ?? "Registro completado.");
      router.replace("/(auth)/login");
    } catch (e: any) {
      Alert.alert("Registro", e?.message ?? "Error registrando usuario.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={fullName}
        onChangeText={setFullName}
        autoCapitalize="words"
      />

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
        <Button title="Registrarme" onPress={onRegister} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center", gap: 12 },
  title: { fontSize: 24, fontWeight: "700", textAlign: "center", marginBottom: 8 },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  buttonContainer: { marginTop: 8 },
});
