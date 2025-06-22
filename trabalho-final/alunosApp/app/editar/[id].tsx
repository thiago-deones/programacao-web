import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useLocalSearchParams, useRouter } from 'expo-router';
import axios from 'axios';

const API_URL = 'http://leoproti.com.br:8004/alunos';

export default function EditarAluno() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const [aluno, setAluno] = useState({
    nome: '',
    turma: '',
    curso: '',
    matricula: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      axios.get(`${API_URL}/${id}`)
        .then(response => {
          setAluno(response.data);
        })
        .catch(() => {
          Alert.alert('Erro', 'Não foi possível carregar os dados do aluno.');
          router.back();
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleChange = (field, value) => {
    setAluno(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!aluno.nome || !aluno.turma || !aluno.curso || !aluno.matricula) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    setLoading(true);
    axios.put(`${API_URL}/${id}`, aluno)
      .then(() => {
        Alert.alert('Sucesso', 'Aluno atualizado!');
        router.push('/'); // Ou o caminho da lista de alunos
      })
      .catch(() => {
        Alert.alert('Erro', 'Falha ao atualizar aluno.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Editar Aluno</Text>
      <TextInput
        label="Nome"
        value={aluno.nome}
        onChangeText={text => handleChange('nome', text)}
        style={styles.input}
      />
      <TextInput
        label="Turma"
        value={aluno.turma}
        onChangeText={text => handleChange('turma', text)}
        style={styles.input}
      />
      <TextInput
        label="Curso"
        value={aluno.curso}
        onChangeText={text => handleChange('curso', text)}
        style={styles.input}
      />
      <TextInput
        label="Matrícula"
        value={aluno.matricula}
        onChangeText={text => handleChange('matricula', text)}
        style={styles.input}
      />

      <Button
        mode="contained"
        onPress={handleSubmit}
        loading={loading}
        disabled={loading}
        style={styles.button}
      >
        Salvar Alterações
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f6fa',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#1976d2',
    padding: 20,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 16,
  },
});