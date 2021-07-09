module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
        attendeeName: String,
        contact: String,
        nic: String,
        gender: String,
        address: String,
        email: String,
        dateofbirth: String,
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

  const attendee = mongoose.model("attendee", schema);
  return attendee;

};