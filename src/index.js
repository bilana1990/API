// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LanguageProvider } from './contexts/LanguageContext'; // დარწმუნდით, რომ ეს ფაილი არსებობს
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <LanguageProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LanguageProvider>,
  document.getElementById('root')
);