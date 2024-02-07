const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()
const articles = []

//Newspapers details
const newspapers = [

    {
        name: 'dailymail',
        address: 'https://www.dailymail.co.uk/sport',
        base: 'https://www.dailymail.co.uk'
    },

    {
        name: 'nytimes',
        address: 'https://www.nytimes.com/international/section/sports',
        base: 'https://www.nytimes.com',
    },

    {
        name: 'telegraph',
        address: 'https://www.telegraph.co.uk/sport',
        base: 'https://www.telegraph.co.uk',
    },
  
    {
        name: 'smh',
        address: 'https://www.smh.com.au/sport',
        base: 'https://www.smh.com.au',
    },

    {
        name: 'nypost',
        address: 'https://nypost.com/sports',
        base: 'https://nypost.com',
    },

    {
        name: 'bbc',
        address: 'https://www.bbc.com/sport',
        base: 'https://www.bbc.com',
    }
]

//Main page
app.get('/', (req, res) => {
    res.json("Welcome to Sports API!")
})

//Looping through the newspapers and fetch the data with the use of axios and cheerio
newspapers.forEach(newspaper => {
    axios.get(newspaper.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("sport")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
              
                articles.push({
                    title,
                    url: newspaper.base + url,
                    source: newspaper.name
                })
            })

        })
})

//Get the articles as json objects
app.get('/news', (req, res) => {
    res.json(articles)
})

//Get the data of specific newpaper that contains the 'sport' word in the a tag
app.get('/news/:newspaperId', (req, res) => {
    const newspaperId = req.params.newspaperId

    const newspaperAddress = newspapers.filter
    (newspaper => newspaper.name == newspaperId)[0].address
    const newspaperBase = newspapers.filter
    (newspaper => newspaper.name == newspaperId)[0].base


    axios.get(newspaperAddress)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const specificArticles = []

            $('a:contains("sport")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
                specificArticles.push({
                    title,
                    url: newspaperBase + url,
                    source: newspaperId
                })
            })
            res.json(specificArticles)
        }).catch(err => console.log(err))
})

//Port 8000
app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
