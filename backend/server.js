require("dotenv").config();

const cors = require('cors');
const express = require("express");
const mongoose = require("mongoose");

const userRouter = require('./routes/users');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use('/users', userRouter);

// Connect to database
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on PORT: ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

  export default server