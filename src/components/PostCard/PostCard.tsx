import { PostType } from '../../types';
import styles from './PostCard.module.css';
import { useCallback } from 'react';
import { HiArrowRight } from 'react-icons/hi';

export default function PostCard({ post }: { post: PostType }) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.description, 'text/html');
    const strText = doc.body.textContent || '';

    const formattedDate = useCallback((dateString: string): string => {
        const date = new Date(new Date(dateString).getTime() - new Date().getTimezoneOffset() * 60000);
    
        return [
            date.getFullYear(),
            (date.getMonth() + 1).toString().padStart(2, "0"),
            date.getDate().toString().padStart(2, "0")
        ].join('.');
    }, []);
    

    return (
        <a
            href={post.link}
            target="_blank"
            className={styles['card-item']}
            key={post.pubDate}
        >
            <div className={styles['card-body']}>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.desc}>{strText}</p>
            </div>
            <div className={styles['card-footer']}>
                <div className={styles.left}>
                    <p className={styles['footer-item']}>Visit this page</p>
                    <HiArrowRight className={`${styles['footer-item']} ${styles.icon}`}/>
                </div>
                <p>{formattedDate(post.pubDate)}</p>
            </div>
        </a>
    );
}
