import { Router } from "express";

const router = Router();

router.get("/", (req, res)=>{
    res.send(
        '<h1> Welcome back </h1>'
    )
})


export default router;