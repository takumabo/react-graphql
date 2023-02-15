const graphql = require('graphql')
const lodashModules = require('lodash')

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql

// dummry data
const books = [
    { name: 'taro', genre: 'man', id: '1', authorId: '3' },
    { name: 'hanako', genre: 'woman', id: '2', authorId: '2' },
    { name: 'jiro', genre: 'man', id: '3', authorId: '1' },
]

const authors = [
    { name: 'oxford starbin', age: 44, id: '1' },
    { name: 'newyork bush', age: 42, id: '2' },
    { name: 'john caronical ', age: 66, id: '3' },
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return lodashModules.find(authors, { id: parent.authorId })
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return lodashModules.find(books, { id: args.id })
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return lodashModules.find(authors, { id: args.id })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})