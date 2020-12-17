import express from 'express'

const app = express()
const port = process.env.PORT || 9000


app.get('/',(req,res)=>res.status(200).send('hello world'))


app.listen(port,()=>console.log(`Listening on local host:${port}`))