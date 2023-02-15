var { mongooseModules, Schema } = require('./utils/index')

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
})

module.exports = mongooseModules.model('Book', bookSchema)

