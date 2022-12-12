let express = require("express");
const { connection } = require("./config/db");
const { authenticate } = require("./middleware/authentication.middleware");
const auth = require("./Routes/login.routes");
const notes = require("./Routes/notes.route");
let cors = require("cors");

let app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/", auth);
// app.use(authenticate)
app.use("/notes", notes);

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
