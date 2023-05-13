import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';
import { GetServerSideProps } from 'next';
import {Post} from '@/typedefs';
import { client } from '@/utils/apollo-client';
import Link from 'next/link';
import router from 'next/router';
import styles from '@/styles/Home.module.css'
import { styled } from 'styled-components';
import { DivBtn } from './posts/createPost';

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
      <Header> <h1>Posts List</h1>
      <button onClick={crearPost}>CreatePost</button>

      </Header>
      <Container>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
             <img src={post.imageUrl} alt="imagen"  style={{ width: "150px", height: "150px" }}/>
            </Link>
          </li>
        ))}
      </Container>
      <DivBtn>
      <button onClick={handleHome}>Inicio</button>
      </DivBtn>
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



export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 80%;
  height: 100%;
  padding: 20px;
  background-color: grey;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 150px;
`;


export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: column;
  margin: 0 auto;
  justify-content: center;
  background-color: #3c3c3c;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 3rem;
  font-weight: bold;
  height: 10rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  margin-bottom: 40px;
  
  h1 {
    text-align: center;
    margin: 0;
    margin-right: auto;
    flex-grow: 2;
  }

  button {
    display: flex;
    flex-wrap: inherit;
    background-color: #fff;
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    height: 3rem;
    width: 10rem;
    margin: 0 auto;
    margin-left: 1rem;
    padding: 1rem;
    margin-bottom: 40px;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: grey;
      color: #fff;
    }
  }
`;