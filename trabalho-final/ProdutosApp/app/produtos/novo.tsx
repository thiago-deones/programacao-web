import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NavBar() {
  return (
    <View style={styles.navBar}>
      <Text style={styles.title}>Cadastro de Produto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    height: 60,
    backgroundColor: "#007bff", // Azul - você pode trocar a cor aqui
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
  },
});
