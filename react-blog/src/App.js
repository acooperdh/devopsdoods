import './App.css';
import styles from './styles/Main.css'
import React from 'react';
import { BrowserRouter, Link as RouterLink, Route, Switch} from 'react-router-dom';
import { Box, Button, Container } from '@mui/material';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Container maxWidth='xl'>
        <h1>Welcome to The DevOps Doods Blog! </h1>
        <Box>
          <Button>
            Login
          </Button>
          <Button>
            Sign Up
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
