import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function NavBar() {
  const location = useLocation();

  return (
    <AppBar position="static" sx={{ bgcolor: "#1976d2", boxShadow: 3 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          CRUD de Produtos
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            startIcon={<ListAltIcon />}
            variant={location.pathname === "/" ? "outlined" : "text"}
            sx={{
              fontWeight: location.pathname === "/" ? "bold" : "normal",
              borderColor: "white",
              color: location.pathname === "/" ? "#fff" : "#e0e0e0",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)"
              }
            }}
          >
            Produtos
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/novo"
            startIcon={<AddCircleOutlineIcon />}
            variant={location.pathname === "/novo" ? "outlined" : "text"}
            sx={{
              fontWeight: location.pathname === "/novo" ? "bold" : "normal",
              borderColor: "white",
              color: location.pathname === "/novo" ? "#fff" : "#e0e0e0",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)"
              }
            }}
          >
            Novo Produto
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
