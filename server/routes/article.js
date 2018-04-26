var express = require('express');
var router = express.Router();
const Article = require('../controllers/article.controller')
const images = require('../helpers/images')

/* GET users listing. */
router.get('/', Article.read)
router.get('/:id', Article.readOne)
router.get('/politics', Article.politics)
router.get('/games', Article.games)
router.get('/travel', Article.travel)
router.get('/sports', Article.sports)
router.get('/article/:id', Article.findArticleByAuthor)
router.post('/',images.multer.single('image'),images.sendUploadToGCS,Article.create)
router.put('/:id',images.multer.single('image'),images.sendUploadToGCS,Article.update)
router.delete('/:id', Article.delete)


module.exports = router;