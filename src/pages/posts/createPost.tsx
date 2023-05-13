import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { client } from "@/utils/apollo-client";
import { GetServerSideProps } from "next";
import router from "next/router";
import { Header } from '../posts';
import { styled } from "styled-components";

const CREATE_POST_MUTATION = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
      imageUrl
      createdAt
      updatedAt
    }
  }
`;

function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [createPost, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      setTitle("");
      setBody("");
      setImageUrl("");
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    createPost({
      variables: {
        input: {
          title,
          body,
          imageUrl,
        },
      },
    });
  };
  const handleHome = async () => {
    router.push("/");
  };

  const handleBack = async () => {
    router.push("/posts");
  };
  return (
    <div>
      <Header>Create a Post</Header>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Creating post..." : "Create post"}
        </button>
        {error && <p>{error.message}</p>}
      </Form>
      <DivBtn>
        <button onClick={handleBack}> Atrás </button>
        <button onClick={handleHome}> Inicio </button>
    </DivBtn>
    </div>
  );
}

export default CreatePostForm;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await client.query({
    query: gql`
      query {
        posts(limit: 10, page: 0) {
          id
          title
          body
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
  };
};


export const Form = styled.form`

  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  background-color: grey;
  color: white;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  label {
    display: block;
    margin-bottom: 5px;
  }
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
  }
  button {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    cursor: pointer;
    color: #000;
    &:hover {
      background-color: grey;
      color: #fff;
    }
    &:disabled {
      background-color: #eee;
      color: #aaa;
      cursor: not-allowed;
    }
  }
`;

export const DivBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  button {
    width: 100px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    cursor: pointer;
    color: #000;
    &:hover {
      background-color: grey;
      color: #fff;
    }
    &:disabled {
      background-color: #eee;
      color: #aaa;
      cursor: not-allowed;
    }
  }
`;