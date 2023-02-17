import { gql } from "@apollo/client";
export const getBooksQuery = gql`
    query GetBooks {
        books {
            name
            id
        }
    }
`;

export const getAuthorsQuery = gql`
    query GetAuthors {
        authors {
            id
            name
        }
    }
`

export const addBookMutation = gql`
    mutation AddBookMutation($name: String!,$genre: String!,$authorId: ID!) {
        addBook(name:$name, genre:$genre, authorId:$authorId){
            name
            id
        }
    }
`
