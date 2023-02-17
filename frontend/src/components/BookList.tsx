import Box from "@mui/material/Box";
import { useQuery } from "@apollo/client";
import { Book } from '../graphql/types'
import { getBooksQuery } from '../graphql/queries'

export default function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery)
  if (loading) return (<Box>loading</Box>);
  if (error) return <Box>Error : {error.message}</Box>;
  const books: Book[] = data.books
  if (books.length < 1) return <Box>not any data </Box>;
  return (
    <>
      {
        books.map(book => (
          <Box key={book.id}>{book.name}</Box>
        ))
      }
    </>
  )
}