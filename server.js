let express = require("express");
const { connection } = require("./config/db");

let cors = require("cors");
const bug = require("./Routes/bug.route");
const auth = require("./Routes/login.routes");
const { authenticate } = require("./middleware/authentication.middleware");

let app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/", auth);
app.use(authenticate)
app.use("/bugs", bug);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error from listning");
    console.log(error);
  }
  console.log("Listning on 8080");
});
