const User = require('../models/user');
const Comm = require('../models/comm');
module.exports = {
    getAllComms,
    createComm,
    deleteComm,
    editComm,
    updateComm
  };

  function editComm(req, res){
    const updatedComm = Comm.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedComm);
  }

  function deleteComm(req, res){
    Comm.findByIdAndDelete(req.params.id, function(err, comm) {
      if(err) {
        console.log(err)
        res.status(401).json({"message": "something went wrong"})
      } else {
        console.log(comm)
        res.status(200).json(comm);
      }
    });
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
  
  async function getAllComms(req, res) {
    const comms = await Comm.find({user: req.user._id});
    res.status(200).json(comms);
  }

  async function updateComm(req, res) {
    const updatedPuppy = await Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedPuppy);
  }