const express = require('express');
const fetch = require('node-fetch')

const router = express.Router();

router.get('/pokedex', (req, res) => {
    const message = [
        {message: 'no input has been provided'}
    ]
    res.json(message)
})   

router.get('/pokedex=:pokemon', async (req, res) => {
    const data = await fetch(`https://some-random-api.ml/pokedex?pokemon=${req.params.pokemon}`).then(response => response.json());
    if(data.error) {
        const dataerror = [
            {error: `${data.error}`}
        ]
        res.send(dataerror)
    }
    const info = {
            name: `${data.name}`,
            id: `${data.id}`,
            type: `${data.type}`,
            species: `${data.species}`,
            abilities: `${data.abilities}`,
            height: `${data.height}`,
            weight: `${data.weight}`,
            gender: `${data.gender}`,
            hp: `${data.stats.hp}`,
            attack: `${data.stats.attack}`,
            defense: `${data.stats.defense}`,
            speed: `${data.stats.speed}`
    }
    res.json(info)
})

module.exports = router;
