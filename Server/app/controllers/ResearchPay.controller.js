const db = require("../models"); 
const AttendeePayData = db.researchPay;


// Create and Save Payment details
exports.create = (req, res) => {
  // Validate request
  if (!req.body.paymentMethod) {
    //   employeeName means title
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }

  // Create Payment details
  const attendeePayData = new AttendeePayData ({
    paymentMethod: req.body.paymentMethod,
    cardholderName: req.body.cardholderName,
    expiryDate: req.body.expiryDate,
    cVV: req.body.cVV,
    validity: req.body.validity ? req.body.validity : false,

  });

  // Save payment details in the database
  attendeePayData
    .save(attendeePayData)
    .then(data => {
      res.send(data);

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating payment details."

      });
    });
};