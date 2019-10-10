const User = require('../models/user');
const Comm = require('../models/comm');
module.exports = {
    getAllComms,
    createComm,
    deleteComm,
    editComm,
  };

  function editComm(req, res){
    const updatedComm = Comm.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedComm);
  }

  function deleteComm(req, res){
    const deletedComm = Comm.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedComm);
  }
  
  function createComm(req, res) {
    const comm = {
      ...req.body,
      user: req.body.user
    };
    Comm.create(comm).then(comm => {
      res.status(200).send(comm)
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("error")
    })
  }
  
  function getAllComms(req, res) {
    User.findById(req.body._id)
    .then(person=>{
        console.log(person)
        res.status(200).json(person)
    })
    .catch(err => console.log(err))
  }