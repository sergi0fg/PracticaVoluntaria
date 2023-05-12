import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';
import { GetServerSideProps } from 'next';
import {Post} from '@/typedefs';
import { client } from '@/utils/apollo-client';
import Link from 'next/link';
import router from 'next/router';
import styles from '@/styles/Home.module.css'

interface PostsPageProps {
  posts: Post[];
}

function PostsPage({ posts } : PostsPageProps) {
  const crearPost = async () => {
    router.push("/posts/createPost")
  }
  const handleHome = async () => {
    router.push("/")
  }
  return (
    <div>
      <header className={styles.header}>Posts List
      <button className={styles.btnpost} onClick={crearPost}>Crear Post</button>

      </header>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
             <img src={post.imageUrl} alt="imagen"  style={{ width: "150px", height: "150px" }}/>
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={handleHome}>Inicio</button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  const { data } = await client.query({
    query: gql`
      query {
        posts(limit: 10, page: 0) {
          id
          title
          body
          imageUrl
        }
      }
    `,
  });

  return { props: { posts: data.posts } };
};

export default PostsPage;
