import React from "react";
import styles from "./Modal.module.css";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    const handleBgClick = (e: React.MouseEvent<HTMLElement>) => {
        console.log(isOpen);
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className={`${styles["modal-overlay"]} ${isOpen ? styles.active : ""}`}
            onClick={handleBgClick}
        >
            <div
                className={styles["modal-inner"]}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles['modal-content']}>
                    {children}
                    <button className={styles.close} onClick={onClose}>
                        <IoMdClose />
                    </button>
                </div>
            </div>
        </div>
    );
}
