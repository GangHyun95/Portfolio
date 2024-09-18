import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { DarkModeProvider } from './context/DarkModeContext';
import ProfileSidebar from './components/ProfileSidebar/ProfileSidebar';
import globals from './styles/Global.module.css';
import TabList from './components/TabList/TabList';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
    return (
        <DarkModeProvider>
            <Header />
            <main>
                <div className={globals.container}>
                    <ProfileSidebar />
                    <section>
                        <TabList />
                        <QueryClientProvider client={queryClient}>
                            <Outlet />
                        </QueryClientProvider>
                    </section>
                </div>
            </main>
        </DarkModeProvider>
    );
}

export default App;
