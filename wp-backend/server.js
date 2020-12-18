import express from 'express'
import mongoose from 'mongoose'
import Messages from './DBmessages.js'

const app = express()
const port = process.env.PORT || 9000
const connection_url = 'mongodb+srv://admin-debjit:NvvgjeMf9GRoRPNZ@cluster0.1hq8t.mongodb.net/whatsappDB?retryWrites=true&w=majority'


//Middleware

app.use(express.json())


//Config. DB

mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})


//API Routes

app.get('/',(req,res)=>res.status(200).send('hello world'))



//To get all the messages stored in the database

app.get('/messages/sync',(req,res) => {

    Messages.find((err,data) => {
        if(err){ res.status(500).send(err) }
        else{ res.status(200).send(data)}
    })
})


app.post('/messages/new',(req,res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err,data) => {
        if(err){ res.status(500).send(err) }
        else{ res.status(201).send(`new message created: \n ${data}`)}
    })
})



//Listen

app.listen(port,()=>console.log(`Listening on local host:${port}`))