const graphql = require('graphql')
const lodashModules = require('lodash')

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

// dummry data
const books = [
    { name: 'taro', genre: 'man', id: '1' },
    { name: 'hanako', genre: 'woman', id: '2' },
    { name: 'jiro', genre: 'man', id: '3' },
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLStrin },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQUeryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return lodashModules.find(books, { id: args.id })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})