import React from "react";
import Header from "./Header";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#90c2e3",
      light: "#65c3bc",
    },
    secondary: {
      main: "#ff1744",
    },
  },
});
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
