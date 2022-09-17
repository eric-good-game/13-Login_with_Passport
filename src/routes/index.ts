import { Request, Response, Router } from "express";
import isAuth from "../middlewares/isAuth";
import authRouter from "./auth";
const router = Router();

router.use('/auth', authRouter)

router.get('/', isAuth, (req:Request, res:Response) => {
    res.render('index', { user:req.user });
})
router.get('/*', (req:Request, res:Response) => {
    res.render('404');
})

export default router;