const express = require('express');

const app = express()

app.use(express.json());

app.get("/menu", (req, res) => req.json({
    items: ['thali', 'biryani']
}))

app.post("/order", (req, res) => {
    res.status(200).json({
        status: 'received',
        order: req.body
    })
})