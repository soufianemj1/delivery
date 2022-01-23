module.exports = mongoose => {
    const Delivery = mongoose.model(
      "delivery",
      mongoose.Schema(
        {
          from: String,
          to: String,
          distance: String,
          weight: String,
          price: String,
          date: String,
          Status: String,
          driver_id: {type:mongoose.Schema.ObjectId, ref: 'driver'},
         
        },
        { timestamps: true }
      )
    );
  
    return Delivery;
  };