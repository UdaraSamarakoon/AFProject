module.exports = (app) => {
    const researchPay = require("../app/controllers/ResearchPay.controller");
  
    var router = require("express").Router();
  
    // Create Payment details
    router.post("/", researchPay.create);
  
    
  
    app.use("/api/Attendee-SignUp/Research-pay", router); //url- necessary for client side
  };
  