import logo from './logo.svg';
import './App.css';

import React from 'react';
import MainPage from './pages/landing';
import { BrowserRouter, Link as RouterLink, Route, Switch} from 'react-router-dom';
import { Box, Button } from '@mui/material';
import Timeline from './components/Timeline';

function App() {
  return (
    <Box>
      <h1>Hello</h1>
        <Button variant="contained"> <RouterLink to='/'>Home</RouterLink> </Button>

        <Button variant="contained"><RouterLink to='/timeline'>Timeline</RouterLink></Button> 
    </Box>
  );
}

export default App;
