import  express  from "express";
import dotenv from "dotenv"
import counterRouter from "./routes/account.js";
import authRouter from "./routes/auth.js";


dotenv.config();
console.clear()

const PORT = process.env.PORT || 3000;
const expressApp = express();

expressApp.use(express.json())
expressApp.use(express.text())
expressApp.use("/account", counterRouter);
expressApp.use("/auth", authRouter);

expressApp.listen(PORT, ()=>
  console.log(`Servidor levantado en el puerto ${PORT}`)
);



