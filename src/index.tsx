import ReactDOM, {createRoot} from 'react-dom/client';
import React from 'react';
import './assets/index.css';
import App from './App';

const container: any = document.getElementById('root')

const root = ReactDOM.createRoot(container);
root.render(
    <App/>
);

