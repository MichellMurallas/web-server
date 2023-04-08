import  express  from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import counterRouter from "./routes/account.js";
import authRouter from "./routes/auth.js";
import authTokenRouter from "./routes/auth_token.js";
import authSessionRouter from "./routes/auth_session.js";



dotenv.config();
console.clear()

const PORT = process.env.PORT || 3000;
const expressApp = express();


expressApp.use(cookieParser())
expressApp.use(express.json())
expressApp.use(express.text())
expressApp.use("/account", counterRouter);
expressApp.use("/auth", authRouter);

expressApp.use("/auth-token", authTokenRouter);
expressApp.use("/auth-session", authSessionRouter);

expressApp.listen(PORT, ()=>
  console.log(`Servidor levantado en el puerto ${PORT}`)
);



