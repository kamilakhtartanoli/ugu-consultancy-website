const express = require('express')
const { submitContact, name } = require('../controller/Contact.controller')

const router = express.Router()

router.post('/contact',submitContact)
router.get('/name',name)

module.exports = {router}