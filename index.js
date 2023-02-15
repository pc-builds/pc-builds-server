const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.use(express.json());
// app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

mongoose.connect(
  "CONNECTIONSTRING",
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
app.use("/parts", require("./routers/partsRouter"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
