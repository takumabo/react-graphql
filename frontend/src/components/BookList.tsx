import Box from "@mui/material/Box";
import { gql, useQuery } from "@apollo/client";

const GET_BOOKS = gql`
  query GetBooks {
    books {
        name
        id
    }
  }
`;

// const GET_AUTHORS = gql`
//     query GetAuthors {
//         authors {
//             name
//             age
//         }
//     }
// `

export default function BookList() {
    const { loading, error, data } = useQuery(GET_BOOKS)
    if (loading) return (<Box>loading</Box>);
    if (error) return <Box>Error : {error.message}</Box>;

    console.log({ data })
    return (
        <Box>book name</Box>
    )
}