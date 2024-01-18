const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("../API/config/DB");
const listRouter = require("../API/router/listRouter");
const authRouter = require("../API/router/authRouter");
const userRouter = require("../API/router/userRouter");

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());

// if (process.env.NODE_ENV === "development") {
//   app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
// }

// const corsOptions = {
//   origin: "http://localhost:5173/",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

app.use(cors());

// routes
app.use("/api", listRouter);
app.use("/api", userRouter);
app.use("/api", authRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
