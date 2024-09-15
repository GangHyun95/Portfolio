import React from 'react';
import globals from '../../styles/Global.module.css';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { HiMiniSun, HiMiniMoon } from "react-icons/hi2";
import { useDarkMode } from '../../context/DarkModeContext';

export default function Header() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    return (
        <header className={styles.header}>
            <div className={globals.container}>
                <Link to="/" className={styles.logo}>
                    <span className={globals['text-primary']}>Gang</span>hyun
                </Link>
                <button className={globals["icon-btn"]} onClick={toggleDarkMode}>
                    { darkMode ? <HiMiniSun /> : <HiMiniMoon />}
                </button>
            </div>
        </header>
    );
}
