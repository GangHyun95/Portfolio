import React from 'react';
import globals from '../../styles/Global.module.css';
import styles from './ProfileSidebar.module.css'
import { MdOpenInNew } from "react-icons/md";
import { SiNotion, SiKakaotalk, SiBlogger } from "react-icons/si";
import { CiMail } from "react-icons/ci";

export default function ProfileSidebar() {
    return (
        <section className={styles.profile}>
            <div className={styles['img-holder']}>
                <img className={styles.img} src={'/assets/images/tempprofile.webp'} alt="profile"/>
            </div>
            <h1 className={styles.name}>허 강 현</h1>
            <p className={`${styles.nickname} ${globals['text-primary']}`}>GangHyun95</p>
            <p className={styles.intro}>안녕하세요, 프론트엔드 개발자 허강현입니다. <br/> 항상 새로운 기술을 배우고, 더 나은 코드를 작성하기 위해 끊임없이 노력하고 있습니다.</p>
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
