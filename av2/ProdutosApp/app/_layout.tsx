import { Stack } from "expo-router";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import lightBlueTheme from "./theme";

export default function RootLayout() {
  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setBackgroundColor("#1976d2");
  }, []);

  return (
    <PaperProvider theme={lightBlueTheme}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#1976d2" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {fontWeight: "bold"},
          contentStyle: { backgroundColor: "#f5fafd" },        
        }}
      >
        <Stack.Screen
          name="produtos/index"
          options={{ title: "Lista de Produtos" }}
        />
        <Stack.Screen
          name="produtos/novo"
          options={{ title: "Novo Produto" }}
        />
        <Stack.Screen
          name="produtos/[id]"
          options={{ title: "Editar Produto" }}
        />
      </Stack>
    </PaperProvider>
  );
}
