import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e6e6fa",
    },
    secondary: {
      main: "#fed865",
    },
    error: {
      main: "#F44336", // Color de error (rojo)
    },
  },
  typography: {
    'fontFamily': 'Poppins'
  }
})

export default theme;