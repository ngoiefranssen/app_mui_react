import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);