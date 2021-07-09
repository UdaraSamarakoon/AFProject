module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
          paymentMethod: String,
          cardholderName: String,
          cardNumber: String,
          expiryDate: String,
          cVV: String,
          
          // published: Boolean
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      
      return object;
  
    });
  
    const researchPay = mongoose.model("researchPay", schema);
    return researchPay;
  
  };