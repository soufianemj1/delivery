const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser');

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(cookieParser())

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type 
app.use(express.urlencoded({
  extended: true
}));

// connect
const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });



// Require routes
const adminroute = require("./routes/routeAdmin");
app.use("/api/admin", adminroute);
const managerroute = require("./routes/routeManager");
app.use("/api/manager", managerroute);
const driverroute = require("./routes/routeDriver");
app.use("/api/driver", driverroute);
const deliveryroute = require("./routes/routeDelivery");
app.use("/api/delivery", deliveryroute);
const primeroute = require("./routes/routePrime");
app.use("/api/prime", primeroute);





// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}.`);
});