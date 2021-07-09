const db = require("../models"); 
const ConferenceData = db.conference;


// Create and Save a new employee
exports.create = (req, res) => {
  // Validate request
  if (!req.body.conName) {
    //   employeeName means title
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }

  // Create a attendee
  const conferenceData = new ConferenceData ({
    conName: req.body.conName,
    description: req.body.description,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    venue: req.body.venue,
    startTime: req.body.startTime,
    onlineLink: req.body.onlineLink,
    
    validity: req.body.validity ? req.body.validity : false,

  });

  // Save conference in the database
  conferenceData
    .save(conferenceData)
    .then(data => {
      res.send(data);

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating conference details."

      });
    });

};

// Retrieve all conferences from the database.
exports.findAll = (req, res) => {
  //need to check
const conName = req.query.conName; //employeename means title  

var condition = conName ? {conName: { [Op.like]: `%${conName}%` } } : null;

ConferenceData.findAll({ where: condition })
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving conference details.",
    });
  });
};

// Find a single employee with an id
exports.findOne = (req, res) => {
const id = req.params.id;

ConferenceData.findByPk(id)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message: "Error retrieving conference details with id=" + id,
    });
  });
};

// Update a conference by the id in the request
exports.update = (req, res) => {
const id = req.params.id;

ConferenceData.update(req.body, {
  where: { id: id },
})
  .then((num) => {
    if (num == 1) {
      res.send({
        message: "conference details updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update conference details with id=${id}. Maybe conference details was not found or req.body is empty!`,
      });
    }
  })
  .catch((err) => {
    res.status(500).send({
      message: "Error updating conference details with id=" + id,
    });
  });
};

// Delete a conference with the specified id in the request
exports.delete = (req, res) => {
const id = req.params.id;


ConferenceData.destroy({
  where: { id: id },
})
  .then((num) => {
    if (num == 1) {
      res.send({
        message: "conference details deleted successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete conference details with id=${id}. Maybe conference details was not found!`,
      });
    }
  })
  .catch((err) => {
    res.status(500).send({
      message: "Could not delete conference details with id=" + id,
    });
  });
};

// Delete all conferences from the database.
exports.deleteAll = (req, res) => {
  ConferenceData.destroy({
  where: {},
  truncate: false,
})
  .then((nums) => {
    res.send({
      message: `${nums} conferences were deleted successfully!`,
    });
  })
  .catch((err) => {
    res.status(500).send({
      message:
        err.message ||
        "Some error occurred while removing all conferences.",
    });
  });
};

// Find all published conferences
exports.findAllValidated = (req, res) => {
  ConferenceData.findAll({ where: { validity: true } })
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving conferences.",
    });
  });
};
