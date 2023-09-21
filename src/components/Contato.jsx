import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Contato = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Entre em Contato</Text>
            <Text>TESTE 123</Text>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default Contato;