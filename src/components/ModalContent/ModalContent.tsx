import React from 'react';
import styles from './ModalContent.module.css'
import globals from '../../styles/Global.module.css'
import { ProjectType } from '../../types';

export default function ModalContent({ project }: {project: ProjectType}) {
    return (
        <>
            <div className={styles['img-holder']}>
                <img className={styles.img} src={`/assets/images/${project.image}`} alt="" />
            </div>
            <div className={styles.right}>
                <h2 className={styles['modal-title']}>{project.title}</h2>
                <div className={styles['modal-desc']}>
                    {project.description.split('\n').map((line, index) => (
                        <p key={index}>
                            {line}
                            <br />
                        </p>
                    ))}
                    {project.blogLink && (
                        <p>
                            이 웹을 개발한 과정은{' '}
                            <a
                                href={project.blogLink}
                                target="_blank"
                                className={`${globals['text-primary']} ${styles.link}`}
                            >
                                개발 일지 블로그
                            </a>
                            {' '}에서 확인하실 수 있습니다.
                        </p>
                    )}
                </div>
                <ul className={styles['modal-skils']}>
                    <span>주요 기술</span>
                    <p className={styles.skill}>{project.skills}</p>
                </ul>
                <a href={project.demoLink} target="_blank" className={styles['view-demo-btn']}>
                    <p>View Demo</p>
                </a>
            </div>
        </>
    );
}

