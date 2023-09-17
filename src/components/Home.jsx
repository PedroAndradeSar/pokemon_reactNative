import React from "react";
import { View, Text, Image } from "react-native";

const Home = ({ route }) => {
  const { pokemonData } = route.params;
  const { name, types, sprites } = pokemonData;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={{ uri: sprites.front_default }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Name: {name}</Text>
      <Text>
        Type: {types.map((type) => type.type.name).join(", ")}
      </Text>
    </View>
  );
};

export default Home;
