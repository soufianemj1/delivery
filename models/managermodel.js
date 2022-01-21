module.exports = mongoose => {
    const Manager = mongoose.model(
      "manager",
      mongoose.Schema(
        {
          name: String,
          email: String,
          password: String,
          role: {
            type: String,
            required: true,
            default: "manager",
          },
        },
        { timestamps: true }
      )
    );
  
    return Manager;
  };