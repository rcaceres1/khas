const router = require("express").Router();
let Comm = require("../models/comm");

router.route("/").get((req, res) => {
  Comm.find()
    .then(comms => res.json(comms))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const student = req.body.student;
  const date = Date.parse(req.body.date);

  const newComm = new Comm({
    username,
    student,
    date
  });

  newComm
    .save()
    .then(() => res.status(200).json("Communication log added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Comm.findById(req.params.id)
    .then(comm => res.json(comm))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Comm.findByIdAndDelete(req.params.id)
    .then(() => res.json("Comm deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Comm.findById(req.params.id)
    .then(comm => {
      comm.username = req.body.username;
      comm.student = req.body.student;
      comm.date = Date.parse(req.body.date);

      comm
        .save()
        .then(() => res.json("Comm updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
