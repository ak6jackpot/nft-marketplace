import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import SnackbarProvider from "react-simple-snackbar";

function App() {
  return (
    <Router>
      <SnackbarProvider>
        <Routes />
      </SnackbarProvider>
    </Router>
  );
}

export default App;
