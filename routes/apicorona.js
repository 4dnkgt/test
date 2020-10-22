const express = require('express');
const fetch = require('node-fetch')

const router = express.Router();


router.get('/', async (req, res) => {
 res.send('Hello this is our API endpoint <br>/corona/all Usage Example none</br> <br>/corona/continent/ Usage Example: /corona/continet=Asia</br> <br>/corona/country/ Usage Example /corona/country=America</br> <br>/corona/state Usage Example /corona/state=New York</br> <br>/images/shibe</br> <br>/images/birb</br> <br>/pokedex Usage Example /pokedex=pikachu</br>')
})

router.get('/corona', (req, res) => {
    res.send('Hello! This is our Corona API. /api to view docs')
})   

router.get('/corona/continent=:continent', async (req, res) => {
    const body = await fetch(`https://disease.sh/v3/covid-19/continents/${req.params.continent}?yesterday=true&twoDaysAgo=false&strict=true&allowNull=false`).then(response => response.json());
    try {
      const capispecfifc = {
          cases: `${body.cases}`, 
          casesToday: `${body.todayCases}`,
          population: `${body.population}`,
          deaths: `${body.deaths}`,
          recovered: `${body.recovered}`,
          recoveredToday: `${body.todayRecovered}`,
          active: `${body.active}`,
          criticalPerOneMillion: `${body.criticalPerOneMillion}`,
          casesPerOneMillion: `${body.casesPerOneMillion}`,
          critical: `${body.critical}`
    }
      res.json(capispecfifc)
    } catch(err) {
        const errormessage = [
            {message: `${err}`}
        ]
        res.send(errormessage)
    }
})

router.get('/corona/all', async (req, res) => {
    const body = await fetch('https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=false&allowNull=true').then(response => response.json());
    const capi = {
        cases: `${body.cases}`, 
        casesToday: `${body.todayCases}`,
        population: `${body.population}`,
        deaths: `${body.deaths}`,
        recovered: `${body.recovered}`,
        recoveredToday: `${body.todayRecovered}`,
        active: `${body.active}`,
        critical: `${body.critical}`
}
    res.json(capi)
})


router.get('/corona/state=:states', async (req, res) => {
    const data = encodeURI(`https://disease.sh/v3/covid-19/states/${req.params.states}?yesterday=true&allowNull=false`)
    const body = await fetch(`${data}`).then(response => response.json());
    try {
      const capispecfifc = {
          cases: `${body.cases}`, 
          casesToday: `${body.todayCases}`,
          population: `${body.population}`,
          deaths: `${body.deaths}`,
          recovered: `${body.recovered}`,
          active: `${body.active}`,
          tests: `${body.tests}`,
          testsPerMillion: `${body.testsPerOneMillion}`,
          casesPerOneMillion: `${body.casesPerOneMillion}`
      }
      res.json(capispecfifc)
    } catch(err) {
        const errormessage = [
            {message: `${err}`}
        ]
        res.send(errormessage)
    }  
  })

router.get('/corona/country=:country', async (req, res) => {
  const body = await fetch(`https://disease.sh/v3/covid-19/countries/${req.params.country}?yesterday=true&twoDaysAgo=false&strict=false&allowNull=false`).then(response => response.json());
  try {
    const capispecfifc = {
        cases: `${body.cases}`, 
        casesToday: `${body.todayCases}`,
        population: `${body.population}`,
        deaths: `${body.deaths}`,
        recovered: `${body.recovered}`,
        recoveredToday: `${body.todayRecovered}`,
        active: `${body.active}`,
        oneCasePerPerson: `${body.oneCasePerPeople}`,
        oneDeathPerPerson: `${body.oneDeathPerPeople}`,
        criticalPerOneMillion: `${body.criticalPerOneMillion}`,
        casesPerOneMillion: `${body.casesPerOneMillion}`,
        critical: `${body.critical}`
    }
    res.json(capispecfifc)
  } catch(err) {
      const errormessage = [
          {message: `${err}`}
      ]
      res.send(errormessage)
  }

})


module.exports = router;
        {deaths: `${body.deaths}`},
        {recovered: `${body.recovered}`},
        {recoveredToday: `${body.todayRecovered}`},
        {active: `${body.active}`},
        {critical: `${body.critical}`}
    ]
    res.json(capi)
})


router.get('/corona/state=:states', async (req, res) => {
    const data = encodeURI(`https://disease.sh/v3/covid-19/states/${req.params.states}?yesterday=true&allowNull=false`)
    const body = await fetch(`${data}`).then(response => response.json());
    try {
      const capispecfifc = [
          {cases: `${body.cases}`}, 
          {casesToday: `${body.todayCases}`},
          {population: `${body.population}`},
          {deaths: `${body.deaths}`},
          {recovered: `${body.recovered}`},
          {active: `${body.active}`},
          {tests: `${body.tests}`},
          {testsPerMillion: `${body.testsPerOneMillion}`},
          {casesPerOneMillion: `${body.casesPerOneMillion}`}
      ]
      res.json(capispecfifc)
    } catch(err) {
        const errormessage = [
            {message: `${err}`}
        ]
        res.send(errormessage)
    }  
  })

router.get('/corona/country=:country', async (req, res) => {
  const body = await fetch(`https://disease.sh/v3/covid-19/countries/${req.params.country}?yesterday=true&twoDaysAgo=false&strict=false&allowNull=false`).then(response => response.json());
  try {
    const capispecfifc = [
        {cases: `${body.cases}`}, 
        {casesToday: `${body.todayCases}`},
        {population: `${body.population}`},
        {deaths: `${body.deaths}`},
        {recovered: `${body.recovered}`},
        {recoveredToday: `${body.todayRecovered}`},
        {active: `${body.active}`},
        {oneCasePerPerson: `${body.oneCasePerPeople}`},
        {oneDeathPerPerson: `${body.oneDeathPerPeople}`},
        {criticalPerOneMillion: `${body.criticalPerOneMillion}`},
        {casesPerOneMillion: `${body.casesPerOneMillion}`},
        {critical: `${body.critical}`}
    ]
    res.json(capispecfifc)
  } catch(err) {
      const errormessage = [
          {message: `${err}`}
      ]
      res.send(errormessage)
  }

})


module.exports = router;
