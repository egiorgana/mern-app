const { model, Schema } = require('mongoose')

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true
})

module.exports = model('Note', noteSchema)