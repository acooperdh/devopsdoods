import React from 'react';
import ReactDOM from 'react-dom';
// global styles
import './index.css';

// Pages
import App from './App';

// testing components
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
import Expenses from './components/testcomp';
import Timeline from './components/Timeline';
import CreateBlogPage from './components/CreateBlogPage';


const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/profile" element={<h1>Not working yet!</h1>} />
          <Route path="/create-blog" element={<CreateBlogPage />} />
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
