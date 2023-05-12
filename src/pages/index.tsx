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
      <div style={{ display: "flex" }}>
        {ultimos3posts.map((post) => (
          <div
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
          </div>
        ))}
      </div>
      <div>
        <button onClick={onHandlePosts}>Ver todos los posts</button>
        <button onClick={createUsers}>Crear Usuario</button>
      </div>
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




