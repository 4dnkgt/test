const { response } = require('express');
const express = require('express');
const fetch = require('node-fetch')

const router = express.Router();

router.get('/images', (req, res) => {
    res.send('Hello! This is our Images API!')
})   

router.get('/images/shibe', async (req, res) => {
    const image = await fetch('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true').then(response => response.json());
    const imgdata = [
        {image: `${image}`}
    ]
    res.send(imgdata)
})

router.get('/images/birb', async (req, res) => {
    const image = await fetch('https://shibe.online/api/birds').then(response => response.json());
    const imgdata = [
        {image: `${image}`}
    ]
    res.send(imgdata)
})

module.exports = router;