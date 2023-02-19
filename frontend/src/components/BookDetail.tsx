
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useQuery } from "@apollo/client";
import { getBookQuery } from '../graphql/queries'
import { Book } from '../graphql/types'
import { Typography } from "@mui/material";

type BookDetailProps = {
    id: string
}

export default function BookDetail(props: BookDetailProps) {
    const id = props.id
    const { loading, error, data } = useQuery(getBookQuery, { variables: { id } })
    if (loading) return (<Box>loading</Box>);
    if (error) return <Box>Error : {error.message}</Box>;
    const book: Book = data.book
    if (!book) return <Box>not any data </Box>;
    return (
        <Box sx={{ color: 'gray' }}>
            <Typography variant="body2">BOOK_NAME:{book.name}</Typography>
            <Typography variant="body2">BOOK_GENRE:{book.genre}</Typography>
            <Typography variant="body2">BOOK_AUTHOR:{book.author.name}</Typography>
            <Typography variant="body2">All books by author</Typography>
            <List>
                {
                    book.author.books.map(authorBook => (
                        <ListItem key={authorBook.id} sx={{ py: 0 }}>
                            <Typography variant="body2">AUTHOUR_BOOK_NAME:{authorBook.name}</Typography>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    )
}