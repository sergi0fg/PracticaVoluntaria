import { useState } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GetServerSideProps } from "next";
import { gql } from "@apollo/client";
import { Post, Comment } from "@/typedefs";
import { client } from "@/utils/apollo-client";
import router from "next/router";

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
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <div>
        <button onClick={handleBack}>Atrás</button>
        <button onClick={handleHome}>Inicio</button>
      </div>

      <h2>Comentarios ({commentsList.length})</h2>

      <form onSubmit={handleSubmit}>
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
       
      </form>

      {commentsList.map((comment) => (
        <div key={comment.id}>
          <p>{comment.body}</p>
          <p>{comment.createdAt}</p>
          <p>{comment.updatedAt}</p>
          <p>{comment.user.name }</p>
          {comment.replies.map(
            (reply) => (
                <div key={reply.id}>
                    <p>{reply.body}</p>
                    <p>{reply.createdAt}</p>
                    <p>{reply.updatedAt}</p>
                    <p>{reply.user.name }</p>
                </div>
            )
          )}
        </div>
      ))}
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
        comments( limit: $limit, ) {
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
