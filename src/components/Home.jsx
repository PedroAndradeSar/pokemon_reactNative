import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = ({ route }) => {
  const { pokemonData } = route.params;
  const { name, types, sprites, height, weight, abilities } = pokemonData;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("Pokemon");
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: sprites.front_default }} style={styles.image} />
      <View style={styles.infoBox}>
        <View style={styles.infoRow}>
          <Text style={styles.boldText}>Nome:</Text>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.boldText}>Tipo:</Text>
          <Text style={styles.text}>
            {types.map((type) => type.type.name).join(", ")}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.boldText}>Altura:</Text>
          <Text style={styles.text}>{height}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.boldText}>Peso:</Text>
          <Text style={styles.text}>{weight}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.boldText}>Habilidades:</Text>
          <Text style={styles.text}>
            {abilities.map((ability) => ability.ability.name).join(", ")}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Voltar para Pokémon"
          onPress={handleGoBack}
          color="#007AFF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
  },
  infoBox: {
    backgroundColor: "#f23af0",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    width: "100%", 
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default Home;
