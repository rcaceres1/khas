const User = require('../models/user');

module.exports = {
    getAllComms,
    createComm,
    deleteComm,
    editComm,
  };

  function editComm(req, res){
    console.log(req)
  }

  function deleteComm(req, res){
    console.log(req.body)
    const userId = req.body.user._id
    const commId = req.body._id
    User.findById(userId)
    .then(person=>{
      const comm = person.comms.id(commId)
      person.comms.remove(comm)
      person.save(()=>{
        res.status(201).json(req.body.commIdx)
      })
    })
  }
  
  function createComm(req, res) {
    console.log(req.body)
    let id = req.body.user._id
    let student = req.body.student
    let date = req.body.date
    User.findById(id)
    .then(person=>{
      let comm = {
        student,
        date,
      }
      person.comms.push(comm)
      console.log(person.comms[0])
      person.save(()=>{
          res.status(201).json(comm)
      })
    })
  }
  
  function getAllComms(req, res) {
    User.findById(req.body._id)
    .then(person=>{
        console.log(person)
        res.status(200).json(person.comms)
    })
  }