import dotenv from "dotenv";
dotenv.config();
import express from "express"
import cors from "cors"
// import path from "path";
// import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import cookieparser from "cookie-parser"
import { verifyAuthenticationToken } from "./middleware.js/auth-niddelware.js";
import mongoose from "mongoose";
const app = express();
const PORT = 5000;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// console.log("__filename:", __filename);
// console.log("__dirname:", __dirname);
app.use(express.static("public"))
// app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieparser()); 
app.use(express.json());
app.use(verifyAuthenticationToken)



import userRoutes from "./Routes/auth-routes.js"
// Enable CORS for all routes
app.use(cors({
  origin: "http://localhost:5173", // Only allow React dev server
  methods: ["GET", "POST","PUT","DELETE"],        // Allowed HTTP methods
  credentials: true                // Allow cookies/auth headers if needed
}));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));


app.use("/api/users", userRoutes);


// const arr=["aman","singh","chauhan"];


// app.get("/api/data", (req, res) => {
//   res.json({ message: arr});
// });
// // POST route in Express (index.js)
// app.get("/", async (req, res) => {
//   res.send({"name":"Raja Babu"})
// });



// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/dist/index.html"));
// });
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
