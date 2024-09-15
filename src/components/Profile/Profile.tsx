import React from 'react';
import globals from '../../styles/Global.module.css';
import styles from './Profile.module.css';
import profileImage from '../../assets/images/temp.png'
import { MdOpenInNew } from "react-icons/md";
import { SiNotion, SiKakaotalk, SiBlogger } from "react-icons/si";
import { CiMail } from "react-icons/ci";

export default function Profile() {
    return (
        <section className={styles.profile}>
            <div className={styles['img-holder']}>
                <img className={styles.img} src={profileImage} alt="temp"/>
            </div>
            <h1 className={styles.name}>허 강 현</h1>
            <p className={`${styles.nickname} ${globals['text-primary']}`}>GangHyun95</p>
            <p className={styles.intro}>front-end developer</p>
            <a href="https://github.com/GangHyun95" className={styles.link} target="_blank" rel="noopener noreferrer">
                <MdOpenInNew className={globals.icon}/>
                <span>See on Github</span>
            </a>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <span className={globals.icon}>
                        <SiBlogger />
                    </span>
                    <span className={styles.text}>hy-un blog</span>
                </li>
                <li className={styles.item}>
                    <span className={globals.icon}>
                        <SiNotion />
                    </span>
                    <span className={styles.text}>notion</span>
                </li>
                <li className={styles.item}>
                    <span className={globals.icon}>
                        <SiKakaotalk />
                    </span>
                    <span className={styles.text}>kakao open chat</span>
                </li>
                <li className={styles.item}>
                    <span className={globals.icon}>
                        <CiMail />
                    </span>
                    <span className={styles.text}>hgh6128@gmail.com</span>
                </li>
            </ul>
            <div className={styles.footer}>
                <p className={styles.copyright}>© 2024. heo gang hyun</p>
            </div>
        </section>
    );
}
