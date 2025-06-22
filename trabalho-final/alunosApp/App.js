import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListaAlunos from "./src/screens/ListaAlunos";
import NovoAluno from "./src/screens/NovoAluno";
import EditarAluno from "./src/screens/EditarAluno";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaAlunos">
        <Stack.Screen
          name="ListaAlunos"
          component={ListaAlunos}
          options={{ title: "Lista de Alunos" }}
        />
        <Stack.Screen
          name="NovoAluno"
          component={NovoAluno}
          options={{ title: "Novo Aluno" }}
        />
        <Stack.Screen
          name="EditarAluno"
          component={EditarAluno}
          options={{ title: "Editar Aluno" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}