const router = require('express').Router()

const quoteSevices = require('./quotes.services')

//? /quotes
//? /quotes/:id

router.get('/quotes', quoteSevices.getAllQuotes)
router.post('/quotes', quoteSevices.postQuote)

router.get('/quotes/:id', quoteSevices.getQuoteById)
router.patch('/quotes/:id', quoteSevices.patchQuote)
router.delete('/quotes/:id', quoteSevices.deleteQuote)

module.exports = router