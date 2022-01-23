module.exports = mongoose => {
    const Driver = mongoose.model(
      "driver",
      mongoose.Schema(
        {
          name: String,
          email: String,
          password: String,
          vehicule: String,
          role: {
            type: String,
            required: true,
            default: "driver",
          },
          
        },
        { timestamps: true }
      )
    );
  
    return Driver;
  };