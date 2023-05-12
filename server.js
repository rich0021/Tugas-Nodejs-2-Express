import * as dotenv from "dotenv";
import app from "./main.js";

dotenv.config();

app.listen(process.env.PORT, function () {
  console.log(`listening on port ${process.env.PORT}...`);
});
