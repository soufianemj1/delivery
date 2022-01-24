module.exports = mongoose => {
    const Delivery = mongoose.model(
      "prime",
      mongoose.Schema(
        {
         
          driver_id: {type:mongoose.Schema.ObjectId, ref: 'driver'},
          delivery_id: {type:mongoose.Schema.ObjectId, ref: 'delivery'},

         
        },
        { timestamps: true }
      )
    );
  
    return Delivery;
  };