module.exports = (app) => {
    const conference = require("../app/controllers/AddConference.controller.js");
  
    var router = require("express").Router();
  
    // Create a new conference
    router.post("/", conference.create);
  
     // Retrieve all conference
     router.get("/", conference.findAll);
   
     // Retrieve all published conference
     router.get("/validated", conference.findAllValidated);
   
     // Retrieve a single conference with id
     router.get("/:id", conference.findOne);
   
     // Update a conference with id
     router.put("/:id", conference.update);
   
     // Delete a conference with id
     router.delete("/:id", conference.delete);
   
     // Delete all conference
     router.delete("/", conference.deleteAll);
  
    app.use("/api/conference-management/conferences", router); //url- necessary for client side
  };
  