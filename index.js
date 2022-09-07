import express from "express"
import cors from "cors"
import { PostRoutes,GetRoutes } from "./src/Router/InitialRouter.js";
const app = express()
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors())
app.listen(5001,()=>console.log("your server is running now"))

app.post("/",PostRoutes)
app.get("/",GetRoutes)