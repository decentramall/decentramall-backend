import { Router, Request, Response } from 'express';
import { celebrate, Joi } from 'celebrate';
import { Store } from '../model/store';

const route = Router();

export default (app: Router): void => {
    app.use('/store', route);

    route.get('/welcome',
        async (req: Request, res: Response) => {
            res.sendStatus(200)
        })
};