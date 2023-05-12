import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { client } from "@/utils/apollo-client";
import { GetServerSideProps } from "next";
import router from "next/router";

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
      <form onSubmit={handleSubmit}>
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
      </form>
      <div>
        <button onClick={handleBack}> Atrás </button>
        <button onClick={handleHome}> Inicio </button>
      </div>
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
