import React from "react";
import { View, Text, Image } from "react-native";

const Home = ({ route }) => {
  const { pokemonData } = route.params;
  const { name, types, sprites, height, weight, abilities } = pokemonData;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: sprites.front_default }}
        style={styles.image}
      />
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Type: {types.map((type) => type.type.name).join(", ")}</Text>
      <Text style={styles.text}>Height: {height}</Text>
      <Text style={styles.text}>Weight: {weight}</Text>
      <Text style={styles.text}>Abilities: {abilities.map((ability) => ability.ability.name).join(", ")}</Text>
    </View>
  );
};
  const styles = {
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 200,
      height: 200,
    },
    text: {
      fontSize: 16,
      marginVertical: 5,
    },
  };

export default Home;
