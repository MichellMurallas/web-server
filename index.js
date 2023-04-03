import  express  from "express";
import dotenv from "dotenv"
import counterRouter from "./routes/account.js";


dotenv.config();
console.clear()

const PORT = process.env.PORT;
const expressApp = express();

expressApp.use(express.json())
expressApp.use(express.text())
expressApp.use("/account", counterRouter);

expressApp.listen(PORT, ()=>
  console.log(`Servidor levantado en el puerto ${PORT}`)
);



