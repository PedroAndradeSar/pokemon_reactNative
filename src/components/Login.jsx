import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { TextInput } from "react-native";
import MyButton from "./MyButton";

const usuariosEstaticos = {
{    email: 'phandradesar@gmail.com',
    senha: '123123',},
    {    email: 'phandradesar@gmail.com',
    senha: '123123',}
};

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://www.pngall.com/wp-content/uploads/13/Pokemon-Logo-PNG-Pic.png' }}
                />
            </View>

            <View style={styles.Input}>
                <TextInput
                    placeholderTextColor='red'
                    placeholder={"Email (mínimo de 5 caracteres)"}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <TextInput
                    placeholderTextColor='red'
                    placeholder={"Senha"}
                    secureTextEntry={true}
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                />
            </View>
            <MyButton title='ENTRAR'/>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: '#e8d209',
    },
    textImput: {
    },
    image: {
    },
    Input: {
    },
});
