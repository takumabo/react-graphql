
import { useQuery, useMutation } from '@apollo/client'
import { Author } from '../graphql/types'
import { getAuthorsQuery, getBooksQuery, addBookMutation } from '../graphql/queries'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

export default function AddBook() {
    const [genre, setGenre] = useState("")
    const [bookName, setBookName] = useState("")
    const [authorId, setAuthorId] = useState("")
    const [addBook] = useMutation(addBookMutation, {
        variables: {
            name: bookName,
            genre,
            authorId
        },
        refetchQueries: [{ query: getBooksQuery }]
    })
    /**
     * select author
     * @param event 
     */
    function selectAuthor(event: SelectChangeEvent) {
        const eventAuthorId = event.target.value
        setAuthorId(eventAuthorId)
    }

    /**
     * execute Add Book
     */
    async function executeAddBook() {
        console.log({
            genre,
            bookName,
            authorId,
        })
        const { data, errors } = await addBook()
        console.log({
            data,
            errors
        })
        if (error) return
        const mutationResult = data.addBook
        console.log(mutationResult)
        // const [mutateFunction, { name: bookName, genre, authorId }] = useMutation(addBookMutation);
        // console.log({ result })
    }

    const { loading, error, data } = useQuery(getAuthorsQuery)
    if (loading) return (<Box>loading</Box>);
    if (error) return <Box>Error : {error.message}</Box>;
    const authors: Author[] = data.authors
    if (authors.length < 1) return <Box>not any authors </Box>;
    return (
        <>
            <Box p={1}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">author name</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="select author name"
                        value={authorId}
                        onChange={selectAuthor}
                    >
                        {
                            authors.map(author => (
                                <MenuItem value={author.id} key={author.id}>{author.name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Box>
            <Box p={1}>
                <TextField
                    required
                    id="outlined-required"
                    label="input book name"
                    onChange={(e) => setBookName(e.target.value)}
                    fullWidth
                />
            </Box>
            <Box p={1}>
                <TextField
                    required
                    id="outlined-required"
                    label="input genre"
                    onChange={(e) => setGenre(e.target.value)}
                    fullWidth
                />
            </Box>
            <Box p={1}>
                <Button variant="outlined" onClick={executeAddBook}>Add Book</Button>
            </Box>
        </>
    )
}