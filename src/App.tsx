import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
    return (
        <DarkModeProvider>
            <Header />
        </DarkModeProvider>
    );
}

export default App;
