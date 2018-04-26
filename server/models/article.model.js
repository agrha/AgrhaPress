const mongoose = require('mongoose');
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title : {
    type: String,
    default: 'Untitled'
  },
  category: {
    type: String,
    default: 'Untitled'
  },
  text: {
    type: String,
    default: 'None'
  },
  image: {
    type: String,
    default: 'http://www.reflectinglife.org/assets/images/noimg.jpg'
  },
  author:{ type: Schema.Types.ObjectId, ref: 'User' }
},{
  timestamps: true
})

module.exports = mongoose.model('Blog', articleSchema)