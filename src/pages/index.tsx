import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import router from "next/router";
import { client } from "@/utils/apollo-client";
import { gql } from "@apollo/client";
import { GetServerSideProps } from "next";
import { Post } from "@/typedefs";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });



interface PostsProps {
  posts: Post[];
}

export default function Home({ posts }: PostsProps) {
  const ultimos3posts = posts.slice(-3);

  const onHandlePosts = async () => {
    router.push("/posts");
  };

  const createUsers = async () => {
    router.push("/createUser");
  };

  return (
    <div>
      <header className={styles.header}>Posts</header>
      <Container>
        {ultimos3posts.map((post) => (
          <List
            key={post.id}
            style={{
              display: "inline-block",
              margin: "10px",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            <Link href={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <img
                src={post.imageUrl}
                alt="imagen"
                style={{ width: "150px", height: "150px" }}
              />
            </Link>
          </List>
        ))}
      </Container>
      <DivBtn>
        <button onClick={onHandlePosts}>Ver más posts</button>
        <button onClick={createUsers}>Crear Usuario</button>
    
    </DivBtn>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<PostsProps> = async () => {
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


export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  height: 100%;
  padding: 20px;
  background-color: grey;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 150px;
`;

const DivBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
  margin: 0 auto;

  button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #f5f5f5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    font-size: 1rem;
    color: #000;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: grey;
      color: #fff;
    }

`;


export const List = styled.div`
  display: flex;
  flex-direction: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
  margin: 0 auto;
  
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-bottom: 150px;
  color: #000;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: grey;
    color: #fff;
  }
`;