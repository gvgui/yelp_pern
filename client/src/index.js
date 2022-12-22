/**
 * This is the index.js file that renders the React application
 */
import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
//createRoot(<App />, document.getElementById("root"));

