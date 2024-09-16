import React, { useEffect, useState } from 'react';
import styles from './Projects.module.css';
import globals from '../../styles/Global.module.css';
import tempImage from '../../assets/images/temp2.png';
import { HiArrowRight } from 'react-icons/hi';
import Modal from '../../components/Modal/Modal';

export default function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        console.log('open');
        setIsModalOpen(true);
    };
    const closeModal = () => {
        console.log('closeModal');
        setIsModalOpen(false);
    };

    return (
        <section className={globals['tab-panel']}>
            <ul className={styles.filter}>
                <li className={`${styles['filter-item']} ${styles.active}`}>
                    All
                </li>
                <li className={styles['filter-item']}>Personal</li>
                <li className={styles['filter-item']}>Team</li>
            </ul>
            <ul className={styles.list}>
                <li
                    className={styles.item}
                    data-filter="personal"
                    onClick={openModal}
                >
                    <div className={styles['img-holder']}>
                        <img
                            className={styles.img}
                            src={tempImage}
                            alt="temp"
                        />
                    </div>
                    <h2 className={styles.title}>Weather Web</h2>
                    <button className={styles['demo-btn']}>
                        <span>More Info </span>
                        <HiArrowRight className={styles['demo-icon']} />
                    </button>
                </li>
            </ul>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className={styles['img-holder']}></div>
                <div className={styles.right}>
                    <h2 className={styles['modal-title']}>Weather</h2>
                    <p className={styles['modal-desc']}>
                        OpenWeatherMap API와 Geolocation Web API를 사용해 현재
                        위치 기반의 날씨 정보를 제공하는 반응형 웹사이트입니다.
                        <br />
                        검색 기능을 통해 다른 지역의 날씨도 확인할 수 있습니다.
                        <br /> 
                        이 웹을 개발한 과정은 <a href="https://hy-un.tistory.com/category/React/Weather" target='_blank' className={`${globals['text-primary']} ${styles.link}`}> 개발 일지 블로그 </a>에서 확인하실 수 있습니다.
                    </p>
                    <ul className={styles['modal-skils']}>
                        주요 기술<br/>React, TypeScript, CSS Modules, Axios, React
                        Query, Recoil
                    </ul>
                    <a href="https://weather-kappa-gules.vercel.app/" target="_blank" className={styles['view-demo-btn']}>
                        <p>View Demo</p>
                    </a>
                </div>
            </Modal>
        </section>
    );
}
