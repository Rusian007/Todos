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
        todo: savedTodo._id,
        leftSide: savedTodo.isLeft,
        message: "Saved ! :)"
      })
    } catch (e) {

    }
  } else{
    return res.json({
      error: "The text is required !"
    })
  }
})

module.exports = router
