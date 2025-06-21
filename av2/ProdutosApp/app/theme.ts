import { DefaultTheme } from "react-native-paper";

const lightBlueTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#eaf4fb",
    surface: "#fff",
    primary: "#0d47a1",
    accent: "#64b5f6",
    text: "#1a237e",
    placeholder: "#607d8b",
    onSurface: "#1a237e",
    onBackground: "#1a237e",
    disabled: "#cfd8dc",
    error: "#e53935",
    notification: "#ff9800",
  },
  roundness: 6,
};

export default lightBlueTheme;