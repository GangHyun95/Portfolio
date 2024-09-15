import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { DarkModeProvider } from './context/DarkModeContext';
import Profile from './components/Profile/Profile';
import globals from './styles/Global.module.css';
import TabList from './components/TabList/TabList';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <DarkModeProvider>
            <Header />
            <main>
                <div className={globals.container}>
                    <Profile />
                    <section>
                        <TabList />
                        <Outlet />
                    </section>
                </div>
            </main>
        </DarkModeProvider>
    );
}

export default App;
