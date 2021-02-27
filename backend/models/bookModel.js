import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    },
}, {
    timestamps: true
})

const Book = mongoose.model('Book', bookSchema)

export default Book