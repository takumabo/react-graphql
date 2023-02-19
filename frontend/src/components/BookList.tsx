import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import BookDetail from "./BookDetail";
import { useQuery } from "@apollo/client";
import { Book } from '../graphql/types'
import { getBooksQuery } from '../graphql/queries'
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function BookList() {
  const [bookId, setBookId] = useState("")
  const { loading, error, data } = useQuery(getBooksQuery)
  if (loading) return (<Box>loading</Box>);
  if (error) return <Box>Error : {error.message}</Box>;
  const books: Book[] = data.books
  if (books.length < 1) return <Box>not any data </Box>;

  /**
   * shwo book detail
   */
  function showBookDetail(bookId?: string) {
    if (!bookId) return
    setBookId(bookId)
  }

  return (
    <List dense>
      {
        books.map(book => (
          <ListItem key={book.id}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="body1" sx={{
                  width: '100%'
                }} onClick={() => showBookDetail(book.id)}>BOOK_NAME:{book.name}</Typography>
              </Grid>
              {
                (bookId && book.id === bookId) ? <Grid item xs={12}><BookDetail id={bookId} /></Grid> : <></>
              }
            </Grid>
          </ListItem>
        ))
      }
      {/* {(
        <ListItem>
          <ListItemText
            primary="Single-line item"
            secondary={secondary ? 'Secondary text' : null}
          />
        </ListItem>,
      )} */}
    </List>
  )


  // return (
  //   <>
  //     {
  //       books.map(book => (
  //         <Box key={book.id}>{book.name}</Box>
  //       ))
  //     }
  //   </>
  // )
}