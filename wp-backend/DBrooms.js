import mongoose from 'mongoose'

// Debjit 12/18/2020
// Creating data structures for storing rooms

const wpSchema2 = mongoose.Schema({
    name: String,
    image: String
})


export default mongoose.model('rooms',wpSchema2)