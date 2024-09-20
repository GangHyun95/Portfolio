import React from 'react';
import globals from '../../styles/Global.module.css';
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={`${globals.container} ${styles.footer}`}>
            <p className={globals.copyright}>© 2024. hyun All rights reserved.</p>
        </footer>
    );
}

