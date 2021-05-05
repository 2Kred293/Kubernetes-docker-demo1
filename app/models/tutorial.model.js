module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        firstname: String,
        lastname: String,
        email: String
      }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      // object.id = _id;
      return object;
    });
  
    const Tutorial = mongoose.model("tutorial", schema);
    return Tutorial;
  };