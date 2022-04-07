import './App.css';
import React from 'react';
import { BrowserRouter, Link as RouterLink, Route, Switch} from 'react-router-dom';
import { Box, Button, Container } from '@mui/material';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Container maxWidth='xl' >
        <div className={'login-header'}>
        <h1>Welcome to The DevOps Doods Blog! </h1>
        </div>
        <div className={'login-container'}>
        <Box>
          <Button size="large" sx={{margin: 1}} color="success" variant="contained">
            Login
          </Button>
          <Button size="large" sx={{margin: 1}} variant="contained" color="error">
            Sign Up
          </Button>
        </Box>
        </div>
      </Container>
    </div>
  );
}

export default App;
