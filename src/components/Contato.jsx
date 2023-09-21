import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  useEffect(() => {
    setIsValidEmail(validateEmail(email));
  }, [email]);

  const validateEmail = (text) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(text) && text.length >= 5;
  };

  const handleSubmit = () => {
    if (mensagem.length < 10 || mensagem.length > 200) {
      Alert.alert(
        "Erro",
        "A mensagem deve ter entre 10 e 200 caracteres.",
        [{ text: "OK", onPress: () => console.log("Alerta fechado") }]
      );
      return;
    }

    if (nome === "" || email === "" || mensagem === "" || !isValidEmail) {
      Alert.alert(
        "Erro",
        "Preencha todos os campos corretamente antes de enviar.",
        [{ text: "OK", onPress: () => console.log("Alerta fechado") }]
      );
      return;
    }

    Alert.alert("Mensagem Enviada", "Sua mensagem foi enviada com sucesso!", [
      { text: "OK", onPress: () => console.log("Alerta fechado") },
    ]);

    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.titulo}>Entre em Contato</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={[
            styles.input,
            email.length >= 5 && !isValidEmail ? { borderColor: "red" } : null,
          ]}
          placeholder={"Informe o Email"}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={[styles.input, styles.mensagemInput]}
          placeholder="Mensagem"
          value={mensagem}
          onChangeText={(text) => setMensagem(text)}
          multiline
          minLength={10} 
          maxLength={200} 
        />
        <Button
          title="Enviar"
          onPress={handleSubmit}
          disabled={!isValidEmail || nome === "" || mensagem === ""}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#fff",
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginBottom: 8,
  },
  mensagemInput: {
    height: 150,
  },
});

export default Contato;
