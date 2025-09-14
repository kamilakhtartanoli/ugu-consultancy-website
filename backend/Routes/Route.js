const express = require('express')
const { submitContact } = require('../controller/Contact.controller')

const router = express.Router()

router.post('/contact',submitContact)

module.exports = {router}