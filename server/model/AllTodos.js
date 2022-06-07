const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
  text:{
    type: String,
    required: true
  },
  isLeft:{
    type: Boolean,
    required: true,
    default: false
  },
  date: {
   type: String,
   default: Date.now
 }
})

const Todos = mongoose.model("MyTodos", TodoSchema)
module.exports = Todos
