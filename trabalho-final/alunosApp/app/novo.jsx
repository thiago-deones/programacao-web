import React, { useState } from "react";
import { View, Alert, StyleSheet } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { useRouter } from "expo-router"; // ou react-navigation se preferir

const API_URL = "http://leoproti.com.br:8004/alunos";

export default function NovoAluno() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [turma, setTurma] = useState("");
  const [curso, setCurso] = useState("");
  const [matricula, setMatricula] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSalvar = async () => {
    if (!nome || !turma || !curso || !matricula) {
      Alert.alert("Erro", "Por favor, preencha todos os campos!");
      return;
    }

    setLoading(true);

    try {
      const aluno = { nome, turma, curso, matricula };
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(aluno),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar aluno");
      }

      Alert.alert("Sucesso", "Aluno cadastrado com sucesso!");
      router.push("/alunos"); // volta para a lista
    } catch (error) {
      Alert.alert("Erro", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Novo Aluno</Text>

      <TextInput
        label="Nome"
        value={nome}
        onChangeText={setNome}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Turma"
        value={turma}
        onChangeText={setTurma}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Curso"
        value={curso}
        onChangeText={setCurso}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Matrícula"
        value={matricula}
        onChangeText={setMatricula}
        mode="outlined"
        style={styles.input}
        keyboardType="numeric"
      />

      <Button
        mode="contained"
        onPress={handleSalvar}
        loading={loading}
        disabled={loading}
        style={styles.button}
      >
        Salvar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f6fa",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
});