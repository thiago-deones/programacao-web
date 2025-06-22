import React, { useEffect, useState } from "react";
import { View, FlatList, Alert, StyleSheet } from "react-native";
import { Button, Card, Text, FAB } from "react-native-paper";
import axios from "axios";
import { useRouter } from "expo-router";

const API_URL = "http://leoproti.com.br:8004/alunos";

export default function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const carregarAlunos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setAlunos(response.data);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os alunos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarAlunos();
  }, []);

  const excluirAluno = (id) => {
    Alert.alert("Excluir Aluno", "Deseja realmente excluir este aluno?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: async () => {
          try {
            await axios.delete(`${API_URL}/${id}`);
            carregarAlunos();
          } catch {
            Alert.alert("Erro", "Não foi possível excluir o aluno.");
          }
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title title={item.nome} subtitle={`Curso: ${item.curso}`} />
      <Card.Content>
        <Text>Turma: {item.turma}</Text>
        <Text>Matrícula: {item.matricula}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => router.push(`/editar/${item.id}`)}>Editar</Button>
        <Button onPress={() => excluirAluno(item.id)} textColor="#d32f2f">
          Excluir
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro de alunos</Text>
      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        refreshing={loading}
        onRefresh={carregarAlunos}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => router.push("/novo")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f5f6fa" },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1976d2",
    textAlign: "center",
    marginBottom: 20,
    padding: 20,
  },
  card: { marginBottom: 12 },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
    backgroundColor: "#1976d2",
  },
});