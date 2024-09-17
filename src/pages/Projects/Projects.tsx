import React, { useEffect, useState } from 'react';
import styles from './Projects.module.css';
import globals from '../../styles/Global.module.css';
import { HiArrowRight } from 'react-icons/hi';
import Modal from '../../components/Modal/Modal';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ModalContent from '../../components/ModalContent/ModalContent';
import { ProjectType } from '../../types';

export default function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const defaultProject: ProjectType = {
        type: "",
        title: "",
        description: "",
        blogLink: "",
        skills: "",
        demoLink: "",
        image: ""
    };
    const [selectedProject, setSelectedProject] = useState<ProjectType>(defaultProject);
    const [imageSrc, setImageSrc] = useState('');

    const {isLoading, error, data:projects} = useQuery<ProjectType[]>({
        queryKey: ['projects'],
        queryFn: async () => {
            const response = await axios.get("/data/projects.json");
            return response.data;
        }
    })

    const openModal = (project: ProjectType) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        console.log(selectedProject);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(defaultProject);
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
                {projects?.map((project,index) => {
                    return (
                        <li className={styles.item} data-filter={project.type} key={index} onClick={() => openModal(project)}>
                            <div className={styles['img-holder']}>
                                <img
                                    className={styles.img}
                                    src={`/assets/images/${project.image}`}
                                    alt={project.title}
                                />
                            </div>
                            <h2 className={styles.title}>{project.title}</h2>
                            <button className={styles['demo-btn']}>
                                <span>More Info </span>
                                <HiArrowRight className={styles['demo-icon']} />
                            </button>
                        </li>
                    )
                })}
            </ul>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ModalContent project={selectedProject}/>
            </Modal>
        </section>
    );
}
