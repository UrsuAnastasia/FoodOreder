import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//The main theme
import { theme } from './styled-components';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter } from 'react-router-dom';


import { AuthContextProvider } from './redux/index';

ReactDOM.render(

  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>

  ,
  document.getElementById('root')
);


