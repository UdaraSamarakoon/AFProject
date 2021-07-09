const db = require("../models"); 
const AttendeeData = db.attendee;


// Create and Save a new employee
exports.create = (req, res) => {
  // Validate request
  if (!req.body.attendeeName) {
    //   employeeName means title
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }

  // Create a attendee
  const attendeeData = new AttendeeData ({
    attendeeName: req.body.attendeeName,
    contact: req.body.contact,
    nic: req.body.nic,
    gender: req.body.gender,
    address: req.body.address,
    email: req.body.email,
    dateofbirth: req.body.dateofbirth,
    paymentMethod: req.body.paymentMethod,
    cardholderName: req.body.cardholderName,
    expiryDate: req.body.expiryDate,
    cVV: req.body.cVV,
    validity: req.body.validity ? req.body.validity : false,

  });

  // Save attendee in the database
  attendeeData
    .save(attendeeData)
    .then(data => {
      res.send(data);

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating attendee details."

      });
    });

  // AttendeeData.create(attendee)
  //   .then((data) => {
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while creating the attendee details.",

  //     });
  //   });
};

// Retrieve all attendees from the database.
// exports.findAll = (req, res) => {
//     //need to check
//   const attendeeName = req.query.attendeeName; //attendeeName means title  

//   var condition = attendeeName ? {attendeeName: { [Op.like]: `%${attendeeName}%` } } : null;

//   AttendeeData.findAll({ where: condition })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving attendee details.",
//       });
//     });
// };

// Find a single employee with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   AttendeeData.findByPk(id)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error retrieving employee details with id=" + id,
//       });
//     });
// };

// Update a employee by the id in the request
// exports.update = (req, res) => {
//   const id = req.params.id;

//   AttendeeData.update(req.body, {
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: "employee details updated successfully.",
//         });
//       } else {
//         res.send({
//           message: `Cannot update employee details with id=${id}. Maybe employee details was not found or req.body is empty!`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error updating employee details with id=" + id,
//       });
//     });
// };

// Delete a employee with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

  
//   AttendeeData.destroy({
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: "employee details deleted successfully!",
//         });
//       } else {
//         res.send({
//           message: `Cannot delete employee details with id=${id}. Maybe employee details was not found!`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Could not delete employee details with id=" + id,
//       });
//     });
// };

// Delete all employees from the database.
// exports.deleteAll = (req, res) => {
//   AttendeeData.destroy({
//     where: {},
//     truncate: false,
//   })
//     .then((nums) => {
//       res.send({
//         message: `${nums} Employees were deleted successfully!`,
//       });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message ||
//           "Some error occurred while removing all Employees.",
//       });
//     });
// };

// Find all published Employees
// exports.findAllValidated = (req, res) => {
//   AttendeeData.findAll({ where: { validity: true } })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Employees.",
//       });
//     });
// };
