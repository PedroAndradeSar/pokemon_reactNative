import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView, Button, } from "react-native";
import axios from "axios";

const Pokemon = (navigation) => {
    const [pokemons, setPokemons] = useState([]);
    const [setPokemonData] = useState();
    const [currentPage, setCurrentPag] = useState(1)
    const Characterspage = 10
    const startIndex = (currentPage - 1) * Characterspage
    const endIndex = startIndex + Characterspage
    
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPag(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        setCurrentPag(currentPage + 1)
     }


    const getPokemons = () => {
        var endpoints = [];
        for (var i = startIndex + 1; i <= endIndex; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios
            .all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => setPokemons(res));
    }
    const pokemonPickHandler = (pokemonData) => {
        setPokemonData(pokemonData);
        navigation.navigate("Home", pokemonData);
    }


    useEffect(() => {
        getPokemons()
    }, [currentPage])

    return (
        <SafeAreaView style={{ backgroundColor: '#000' }}>
            <ScrollView>
                {pokemons.map((pokemon, key) => (
                    <View key={key}>
                        <TouchableOpacity onPress={() => pokemonPickHandler(pokemon.data)}>
                            <View style={styles.container}>
                                <View style={styles.containerImage}>
                                    <Image
                                        style={styles.Image}
                                        source={{ uri: pokemon.data.sprites.front_default }}
                                    />
                                </View>
                                <View style={styles.textContainer}>

                                    <Text style={styles.Text}>Name:{pokemon.data.name} </Text>
                                    <Text style={styles.Text}>
                                        Type:
                                        {pokemon.data.types.map((type, key) => (
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