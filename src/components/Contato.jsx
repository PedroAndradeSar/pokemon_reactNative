import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = () => {
    if (mensagem.length < 10 || mensagem.length > 200) {
      Alert.alert(
        "Erro",
        "A mensagem deve ter entre 10 e 200 caracteres.",
        [{ text: "OK", onPress: () => console.log("Alerta fechado") }]
      );
      return;
    }
    const dados = {
      Nome: nome,
      Email: email,
      Mensagem: mensagem,
    };


    Alert.alert("Mensagem Enviada", JSON.stringify(dados), [
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
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
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
        <Button title="Enviar" onPress={handleSubmit} />
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
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10, 
    margin: 16,
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginBottom: 12,
  },
  mensagemInput: {
    height: 150,
  },
});

export default Contato;