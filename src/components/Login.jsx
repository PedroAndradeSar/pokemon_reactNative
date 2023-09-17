import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { TextInput } from "react-native";
import MyButton from "./MyButton";

const usuariosEstaticos = {
    email: 'phandradesar@gmail.com',
    senha: '123123',
};

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);

    useEffect(() => {
        setIsValidEmail(validateEmail(email));
    }, [email]);

    const validateEmail = (text) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(text) && text.length >= 5; // Mínimo de 5 caracteres para o email
    };

    const handleLogin = () => {
        if (isValidEmail && senha.length >= 6) {
            if (email === usuariosEstaticos.email && senha === usuariosEstaticos.senha) {
                // Login bem-sucedido, navegue para a página 'Home'
                navigation.navigate('Pokemon');

                setEmail('');
                setSenha('');
            } else {
                // Exiba uma mensagem de erro, pois os dados estão incorretos
                alert('Email ou senha incorretos');
            }
        } else {
            // Exiba uma mensagem de erro se os campos não atenderem aos critérios
            alert('Email ou senha incorretos');
        }
    };


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
                    style={[
                        styles.textImput,
                        email.length >= 5 && !isValidEmail ? { borderColor: 'red' } : null,
                    ]}
                    placeholder={"Email (mínimo de 5 caracteres)"}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <TextInput
                    placeholderTextColor='red'
                    style={[
                        styles.textImput,
                        senha.length < 6 ? { borderColor: 'red' } : null,
                    ]}
                    placeholder={"Senha (mínimo de 6 caracteres)"}
                    secureTextEntry={true}
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                />
            </View>
            <MyButton title='ENTRAR' onPressButton={handleLogin} disabled={!isValidEmail || senha.length < 6} />
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
        width: 250,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        margin: 15,
        borderColor: 'black',
        backgroundColor: 'white',
        textAlign: "center",
        placeHolderTextColor: 'white',
    },
    image: {
        height: 210,
        width: 200,
        marginTop: -100,
    },
    Input: {
        margin: 40,
    },
});
