const articleSchema = require('../models/article.model')
const jwt = require('jsonwebtoken')

class Article {
  static create(req,res){
    console.log('masuk create pak')
    let token = req.headers.token
    let decoded = jwt.verify(token, 'secret key')
    if(!decoded) {
      res.status(400).json({
        message:'anda belum terautentifikasi',
      })
    } else {
      let obj = {
        title: req.body.title,
        text: req.body.text,
        category: req.body.category,
        image: req.file.cloudStoragePublicUrl,
        author: decoded._id
      }
      articleSchema.create(obj)
        .then(data => {
          res.status(200).json({
            message: 'create article successfully',
            data
          })
        })
        .catch(err => {
          res.status(500).json({
            message:'something went wrong',
            err
          })
        })
      }
  }

  static findArticleByAuthor(req,res) {
    articleSchema.find({
      author: req.params.id
    })
    .then(article => {
      res.status(200).json({
        message: 'article:',
        article
      })
    })
    .catch(err => {
      res.status(500).json({
        message: 'something went wrong',
        err
      })
    })
  }

  static read(req,res){
    articleSchema.find()
    .populate('author')
    .exec()
    .then(article => {
      res.status(200).json({
        message:'list of article:',
        article
      })
    })
    .catch(err => {
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static politics(req,res) {
    articleSchema.find({
      category: 'politics'
    })
    .then(article => {
      res.status(200).json({
        message: 'article:',
        article
      })
    })
    .catch(err => {
      res.status(500).json({
        message: 'something went wrong',
        err
      })
    })
  }

  static games(req,res) {
    articleSchema.find({
      category: 'games'
    })
    .then(article => {
      res.status(200).json({
        message: 'article:',
        article
      })
    })
    .catch(err => {
      res.status(500).json({
        message: 'something went wrong',
        err
      })
    })
  }

  static travel(req,res) {
    articleSchema.find({
      category: 'travel'
    })
    .then(article => {
      res.status(200).json({
        message: 'article:',
        article
      })
    })
    .catch(err => {
      res.status(500).json({
        message: 'something went wrong',
        err
      })
    })
  }

  static sports(req,res) {
    articleSchema.find({
      category: 'sports'
    })
    .then(article => {
      res.status(200).json({
        message: 'article:',
        article
      })
    })
    .catch(err => {
      res.status(500).json({
        message: 'something went wrong',
        err
      })
    })
  }

  static readOne(req,res){
    let target = {
      _id:req.params.id
    }
    articleSchema.find(target)
    .then(article => {
      res.status(200).json({
        message: 'article:',
        article
      })
    })
    .catch(err => {
      res.status(500).json({
        message: 'something went wrong',
        err
      })
    })
  }

  static delete(req,res) {
    let target = {
      _id:req.params.id
    }
    articleSchema.findOneAndRemove(target)
    .then(article => {
      res.status(200).json({
        message:'delete article successfully',
        article
      })
    })
    .catch(err => {
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static update(req,res){
    articleSchema.findById(req.params.id)
    .then(data => {
      data.title = req.body.title || data.title
      data.description = req.body.description || data.description
      data.text = req.body.text || data.text
      data.image = req.file.cloudStoragePublicUrl
      data.save()
      .then(savedData=>{
        res.status(200).json({
          message:'update success',
          savedData,
          id: req.params.id
        })
      })
      .catch(err=>{
        res.status(500).json({
          message:'update failed',
          err
        })
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'data is not found',
        err
      })
    })
  }
}
module.exports = Article