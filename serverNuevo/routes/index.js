const express = require('express');

const { getArticle } = require('../controllers/articleController');

const router = express.Router();

router.get('/article', getArticle);

module.exports = router;
