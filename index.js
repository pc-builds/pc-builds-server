const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.use(express.json());
// app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

mongoose.connect(
    "mongodb+srv://ironwaystreet130:EqH9QTzW7trjV3ig@cluster0.ijt0p.mongodb.net/posters?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) return console.error(err);
      console.log("Connected to MongoDB");
    }
);

app.use("/builds", require("./routers/buildsRouter"));