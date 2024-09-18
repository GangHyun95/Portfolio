import React, { useEffect, useState } from 'react';
import globals from '../../styles/Global.module.css';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { HiMiniSun, HiMiniMoon } from "react-icons/hi2";
import { useDarkMode } from '../../context/DarkModeContext';

export default function Header() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsActive(window.scrollY > 40);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${isActive ? styles.active : ''}`}>
            <div className={globals.container}>
                <Link to="/" className={styles.logo}>
                    <span className={globals['text-primary']}>Gang</span>hyun
                </Link>
                <button className={globals["icon-btn"]} onClick={toggleDarkMode}>
                    { darkMode ? <HiMiniSun className={globals.icon} /> : <HiMiniMoon className={globals.icon} />}
                </button>
            </div>
        </header>
    );
}
