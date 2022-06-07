const router = require('express').Router()
const Todos = require('../model/AllTodos')

router.post('/create', async (req,res)=>{

  var theText = req.body.text;

    // Find lates data
    var isLeft = null
    var previousOne = await Todos.findOne({},{}, { sort: { _id : -1 }}).exec();

    if(previousOne){

      if(previousOne.isLeft){
        isLeft = false
      } else {
        isLeft = true
      }

    } else{
      isLeft = false
    }

    if(theText){
      const newTodo = new Todos({
        text: theText,
        isLeft: isLeft
      })

    try {
      const savedTodo = await newTodo.save()
      res.send({
        TodoList: [savedTodo]
      })
    } catch (e) {

    }
  } else{
    return res.json({
      error: "The text is required !"
    })
  }
})

router.get("/get", async (req,res)=>{
  var allTodos = await Todos.find({});
  return res.json({
    TodoList: allTodos
  })
})

module.exports = router
