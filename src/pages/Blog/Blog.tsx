import globals from '../../styles/Global.module.css';
import styles from './Blog.module.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PostCard from '../../components/PostCard/PostCard';
import { PostType } from '../../types';

export default function Blog() {
    const rssUrl = encodeURIComponent('https://hy-un.tistory.com/rss');
    const apiKey = process.env.REACT_APP_RSSTOJSON_API_KEY;

    const {
        isLoading,
        error,
        data: posts,
    } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const response = await axios.get(
                `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}&api_key=${apiKey}`
            );
            return response.data.items;
        },
        staleTime: 1000 * 60 * 10,
        gcTime: 1000 * 60 * 10,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <section className={`${globals['tab-panel']}`}>
            <h3 className={styles.heading}>Recent Posts from blog</h3>
            <div className={styles['card-list']}>
                {posts &&
                    posts.map((post: PostType, index: number) => <PostCard post={post} key={post.title + index}/>)}
            </div>
        </section>
    );
}
