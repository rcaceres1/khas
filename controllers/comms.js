const Comm = require("../models/comm");
module.exports = {
  getAllComms,
  createComm,
  deleteComm,
  editComm,
  updateComm,
  getComm
};

function editComm(req, res) {
  const updatedComm = Comm.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.status(200).json(updatedComm);
}

function deleteComm(req, res) {
  Comm.findByIdAndDelete(req.params.id, function(err, comm) {
    if (err) {
      console.log(err);
      res.status(401).json({ message: "something went wrong" });
    } else {
      console.log(comm);
      res.status(200).json(comm);
    }
  });
}

function createComm(req, res) {
  const comm = {
    ...req.body,
    user: req.body.user
  };
  Comm.create(comm)
    .then(comm => {
      res.status(200).send(comm);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("error");
    });
}

async function getAllComms(req, res) {
  console.log(req.user);
  try {
    const comms = await Comm.find({ user: req.user._id });
    console.log(comms);
    res.status(200).json(comms);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
}

async function updateComm(req, res) {
  const updatedComm = await Comm.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.status(200).json(updatedComm);
}

async function getComm(req, res) {
  const gotComm = await Comm.findById(req.params.id);
  res.status(200).json(gotComm);
}
