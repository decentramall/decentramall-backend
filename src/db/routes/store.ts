import { Router, Request, Response } from 'express';
import { celebrate, Joi } from 'celebrate';
import StoreService from '../services/store';

const route = Router();

export default (app: Router): void => {
    app.use('/store', route);

    route.get(
        '/id/:storeId',
        async (req: Request, res: Response) => {
            return await StoreService.get(req.params.storeId);
        },
    );

    route.get(
        '/',
        async (req: Request, res: Response) => {
            return await StoreService.getAll();
        },
    );

    route.post(
        '/',
        celebrate({
            body: Joi.object({
                name: Joi.string().required(),
                category: Joi.string().required(),
                description: Joi.string().required(),
                url: Joi.string().required(),
                storeImage: Joi.string().required(),
                tx: Joi.string().required(),
            }),
        }),
        async (req: Request, res: Response) => {
            const {
                name,
                category,
                description,
                url,
                storeImage,
                tx,
            } = req.body;
            let returningStatus = 201;
            try {
                await StoreService.add(
                    name,
                    category,
                    description,
                    url,
                    storeImage,
                    tx,
                );
            } catch (e) {
                returningStatus = 403;
            } finally {
                res.sendStatus(returningStatus);
            }
        },
    );
};