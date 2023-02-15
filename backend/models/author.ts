var { mongooseModules, Schema } = require('./utils/index')

const authorSchema = new Schema({
    name: String,
    age: Number
})

module.exports = mongooseModules.model('Author', authorSchema)