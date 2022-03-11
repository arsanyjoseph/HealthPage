const express = require ("express")
const path = require ('path')

const app = express()

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));


app.listen (process.env.PORT || 5000 , ()=> console.log(` server is running on port ${process.env.PORT || 5000} `))

app.get('/*', (req, res)=> {
    res.sendFile(path.resolve(__dirname ,'frontend', 'index.html'))
})