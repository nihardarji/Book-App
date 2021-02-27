import mongoose from 'mongoose'

const authorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
}, {
    timestamps: true
})

const Author = mongoose.model('Author', authorSchema)

export default Author