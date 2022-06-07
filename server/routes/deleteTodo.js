const router = require('express').Router()
const Todos = require('../model/AllTodos')

router.get('/delete/(:id)', async (req,res)=>{
  var the_id = req.params.id

  try {
    var deletemsg = await Todos.deleteOne({ _id: the_id })
    return res.json({
      message: deletemsg.deletedCount
    })
  } catch (e) {
    return res.json({
      message: "This Didn't Work, Care to try again?"
    })
  }


})

module.exports = router
