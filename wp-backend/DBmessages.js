import mongoose from 'mongoose'

// Debjit 12/18/2020
// Creating data structures for storing messages

const wpSchema = mongoose.Schema({
    roomID: String,
    message: String,
    name: String,
    timeStamp: String,
    received: Boolean
})


export default mongoose.model('messages',wpSchema)