import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView, Button } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Contato from "./Contato"

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const Characterspage = 10
    const startIndex = (currentPage - 1) * Characterspage
    const endIndex = startIndex + Characterspage

    const navigation = useNavigation();

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const handleContatoPress = () => {
        navigation.navigate("Contato");
    }

    const handleQuemSomosPress = () => {
        navigation.navigate("QuemSomos");
    }


    const getPokemons = () => {
        var endpoints = [];
        for (var i = startIndex + 1; i <= endIndex; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios
            .all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => setPokemons(res.map((r) => r.data)));
    }

    const pokemonPickHandler = (pokemonData) => {
        navigation.navigate("Home", { pokemonData });
    }

    useEffect(() => {
        getPokemons()
    }, [currentPage])

    return (
        <SafeAreaView style={{ backgroundColor: '#000' }}>
             <View style={styles.header}>
                <TouchableOpacity onPress={handleContatoPress} style={styles.headerButton}>
                    <Text style={styles.headerButtonText}>Contato</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleQuemSomosPress} style={styles.headerButton}>
                    <Text style={styles.headerButtonText}>Quem Somos</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {pokemons.map((pokemon, key) => (
                    <View key={key}>
                        <TouchableOpacity onPress={() => pokemonPickHandler(pokemon)}>
                            <View style={styles.container}>
                                <View style={styles.containerImage}>
                                    <Image
                                        style={styles.Image}
                                        source={{ uri: pokemon.sprites.front_default }}
                                    />
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.Text}>Name:{pokemon.name} </Text>
                                    <Text style={styles.Text}>
                                        Type:
                                        {pokemon.types.map((type, key) => (
                                            <Text key={key}> {type.type.name} </Text>
                                        ))}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
                <View >
                    <Button title='Proxima pagina' onPress={handleNextPage} />
                    <Button title='Pagina anterior' onPress={handlePreviousPage} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: '#ddd',
        padding: 10,
    },
    headerButton: {
        backgroundColor: 'transparent',
        borderRadius: 0,
    },
    headerButtonText: {
        color: 'black', 
        fontWeight: 'bold',
    },

    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
        margin: 10,
        borderRadius: 50,
        shadowRadius: 5,
        shadowOpacity: 0.6,
        shadowColor: '#f00'
    },
    containerImage: {
        height: 100,
        width: 100
    },
    Image: {
        height: 100,
        width: 100,
    },
    textContainer: {
        height: 100,
        width: 150,
        paddingLeft: 20,
        paddingTop: 10,

    },
    Text: {
        fontWeight: 'bold',
        marginVertical: 12,

    },

});

export default Pokemon;
