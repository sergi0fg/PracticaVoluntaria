import { gql, useMutation } from "@apollo/client";
import e from "cors";
import { useState } from "react";
import { DivBtn, Form } from "./posts/createPost";
import { Header } from "./posts";
import router from "next/router";


const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;

function CreateUserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
      onCompleted: () => {
        setName('');
        setEmail('');
      },
    });
  
    const handleSubmit = (e:any) => {
      e.preventDefault();
  
      createUser({
        variables: {
          input: {
            name,
            email,
          },
        },
      });
    };
    const handleHome = async () => {
      router.push("/");
    };
  
    return (
    
      <div>
        <Header>Create User</Header>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating user...' : 'Create user'}
        </button>
        {error && <p>{error.message}</p>}
      </Form>
      <DivBtn>
        <button onClick={handleHome}> Inicio </button>
    </DivBtn>
      </div>
    );
  }
  

  export default CreateUserForm;