export type Author = {
    id?: string,
    name?: string,
    age?: string,
    books: Book[]
}
export type Book = {
    name?: string,
    id?: string,
    genre?: string
    author: Author
}