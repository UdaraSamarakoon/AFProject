module.exports = (app) => {
    const attendee = require("../app/controllers/AttendeeSignUp.controller.js");
  
    var router = require("express").Router();
  
    // Create a new attendee
    router.post("/", attendee.create);
    
    app.use("/api/Attendee-SignUp/add-attendee-details", router); //url- necessary for client side
  };
  