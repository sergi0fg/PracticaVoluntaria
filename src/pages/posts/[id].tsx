import { useState } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GetServerSideProps } from "next";
import { gql } from "@apollo/client";
import { Post, Comment } from "@/typedefs";
import { client } from "@/utils/apollo-client";
import router from "next/router";
import { Header } from "../posts";
import { DivBtn, Form } from "./createPost";
import { styled } from "styled-components";

interface PostPageProps {
  post: Post;
  comments: Comment[];
}

function PostPage({ post, comments }: PostPageProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [commentsList, setCommentsList] = useState(comments);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await fetch(`/api/posts/${post.id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, body }),
    });

    if (response.ok) {
      const newComment = await response.json();
      setBody("");
      setName("");
      setEmail("");
      setCommentsList((comments) => [...comments, newComment]);
    }
  };

  const handleHome = async () => {
    router.push("/");
  };

  const handleBack = async () => {
    router.push("/posts");
  };

  return (
    <div>
      <Header>
        <h1>{post.title}</h1>
      </Header>
      <DivBody>
      <h2>Contenido</h2>
      <span>{post.body} </span>
      </DivBody>
      
      <DivComments>
        <h2>Comentarios ({commentsList.length})</h2>
      </DivComments>
      <Form onSubmit={handleSubmit}>
        <h3>Añadir comentario</h3>
        <div>
          <label>
            Nombre:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Comentario:
            <textarea
              value={body}
              onChange={(event) => setBody(event.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">Añadir</button>
        </div>
      </Form>
      
      {commentsList.map((comment) => (
        <CommentList key={comment.id}>
          <p>{comment.body}</p>
          <p>{comment.createdAt}</p>
          <p>{comment.updatedAt}</p>
          <p>{comment.user.name}</p>
          {comment.replies.map((reply) => (
            <div key={reply.id}>
              <p>{reply.body}</p>
              <p>{reply.createdAt}</p>
              <p>{reply.updatedAt}</p>
              <p>{reply.user.name}</p>
            </div>
          ))}
       </CommentList>
      ))}
      <DivBtn>
        <button onClick={handleBack}>Atrás</button>
        <button onClick={handleHome}>Inicio</button>
      </DivBtn>
    </div>
    
  );
}
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await client.query({
    query: gql`
      query ($id: ID!, $limit: Int) {
        post(id: $id) {
          id
          title
          body
        }
        comments(limit: $limit) {
          id
          body
          createdAt
          updatedAt
          user {
            id
            name
            email
          }
          replies {
            id
            body
            createdAt
            updatedAt
            user {
              id
              name
              email
            }
          }
        }
      }
    `,
    variables: { id },
  });

  return { props: { post: data.post, comments: data.comments } };
};
export default PostPage;


const DivComments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  width: 26%;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: grey;
`;


export const DivBody = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
padding: 20px;
width: 26%;
border: 1px solid #ccc;
border-radius: 4px;
background-color: grey;
text-align: center;

  span {
    font-size: 20px;
    font-weight: bold;
    white-space: pre-wrap;
  }
`;

export const CommentList = styled.div`display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
padding: 20px;
width: 46%;
border: 1px solid #ccc;
border-radius: 4px;
background-color: grey;
text-align: center;
`;