const express = require('express')
const cors = require('cors')

const app = express();

var corOptions = {
    origin: 'https://localhost:3306'
}

// middleware 

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

// testing api

app.get('/', (req,res) => {
    res.json({message: 'hello from api' })
})

// port

const PORT = process.env.PORT || 3306

// server

app.listen(PORT,() => {
    console.log('serveur connecté au port : ' + PORT)
})