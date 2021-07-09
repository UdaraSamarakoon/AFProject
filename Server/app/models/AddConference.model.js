module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
            conName: String,
            description: String,
            startDate: String,
            endDate: String,
            venue: String,
            startTime: String,
            onlineLink: String,   
          
          // published: Boolean
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      
      return object;
  
    });
  
    const conference = mongoose.model("conference", schema);
    return conference;
  
  };