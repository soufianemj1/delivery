module.exports = mongoose => {
    const Admin = mongoose.model(
      "admin",
      mongoose.Schema(
        {
          name: String,
          email: String,
          password: String,
          role: {
            type: String,
            required: true,
            default: "admin",
          },
        },
        { timestamps: true }
      )
    );
  
    return Admin;
  };