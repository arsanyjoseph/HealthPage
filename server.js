const express = require ('express')
const path = require ('path')

const app = express()

app.use(express.static('frontend'));


app.listen (process.env.PORT || 5000 , ()=> console.log(` server is running on port ${process.env.PORT || 5000} `))

app.get('/*', (req, res)=> {
    res.sendFile(path.resolve('frontend', 'index.html'))
})