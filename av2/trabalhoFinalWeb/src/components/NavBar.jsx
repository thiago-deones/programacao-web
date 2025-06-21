import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function NavBar() {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#1565c0", // azul mais forte
        boxShadow: 3,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            fontSize: "1.5rem",
          }}
        >
          Lista de Produtos
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            component={RouterLink}
            to="/"
            startIcon={<ListAltIcon />}
            variant={location.pathname === "/" ? "contained" : "outlined"}
            sx={{
              backgroundColor: location.pathname === "/" ? "#1976d2" : "transparent",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Produtos
          </Button>

          <Button
            component={RouterLink}
            to="/novo"
            startIcon={<AddCircleOutlineIcon />}
            variant={location.pathname === "/novo" ? "contained" : "outlined"}
            sx={{
              backgroundColor: location.pathname === "/novo" ? "#1976d2" : "transparent",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Novo Produto
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}