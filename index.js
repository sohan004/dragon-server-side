const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

const cetagorys = require('./cetagorys.json')
const news = require('./news.json')

app.get('/', (req, res) => {
    res.send('dragon is comming soooooooooooooon')
})
app.get('/cetagores', (req, res) => {
    res.send(cetagorys)
})
app.get('/all_news', (req, res) => {
    res.send(news)
})
app.get('/cetagores/:id', (req, res) => {
    const id = req.params.id
    const ctNews = news.filter(n => +n.category_id === +id)
    { +id === 0 ? res.send(news) : res.send(ctNews) }
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id
    const ctNews = news.find(n => n._id === id) || {}
     res.send(ctNews)
})

app.listen(port)