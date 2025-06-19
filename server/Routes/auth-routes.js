import express from "express"
const router = express.Router();
import createUser, { addsecrets, checkUser, deletecookies, protectedpage, secretpage, showuser } from "../controllers/events.js"
import { verifyAuthenticationToken } from "../middelware/auth-middleware.js";
router.post("/register", createUser);
router.post("/login", checkUser);
router.get("/myhome",verifyAuthenticationToken, protectedpage);

router.post("/mysecrets", addsecrets);
router.get("/mysecrets", verifyAuthenticationToken,secretpage);
router.get("/data",showuser)
router.post("/logout",deletecookies)


export default router;
