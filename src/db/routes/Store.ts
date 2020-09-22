import { Router, Request, Response } from 'express';
import { celebrate, Joi } from 'celebrate';
import { Store } from '../model/store';

const route = Router();

export default (app: Router): void => {
    app.use('/store', route);

    route.get('/welcome',
        async (req: Request, res: Response) => {
            res.sendStatus(200)
            res.send("Hello!")
        })
    // route.get(
    //     '/id/:storeId',
    //     async (req: Request, res: Response) => {
    //         const community = await CommunityService.findByContractAddress(req.params.contractAddress);
    //         if (community === null) {
    //             res.sendStatus(404);
    //         }
    //         res.send(community);
    //     },
    // );

    // route.get(
    //     '/name/:publicId',
    //     async (req: Request, res: Response) => {
    //         const community = await CommunityService.findByPublicId(req.params.publicId)
    //         if (community === null) {
    //             res.sendStatus(404);
    //         }
    //         res.send(community);
    //     },
    // );

    // route.get(
    //     '/all/:status?',
    //     async (req: Request, res: Response) => {
    //         res.send(await CommunityService.getAll(req.params.status));
    //     },
    // );

    // route.get(
    //     '/getnames/:addresses',
    //     async (req: Request, res: Response) => {
    //         res.send(await CommunityService.getNamesAndFromAddresses(req.params.addresses.split(';')));
    //     },
    // );

    // route.post(
    //     '/request',
    //     authenticateToken,
    //     celebrate({
    //         body: Joi.object({
    //             requestByAddress: Joi.string().required(),
    //             name: Joi.string().required(),
    //             description: Joi.string().required(),
    //             city: Joi.string().required(),
    //             country: Joi.string().required(),
    //             gps: {
    //                 latitude: Joi.number().required(),
    //                 longitude: Joi.number().required(),
    //             },
    //             email: Joi.string().required(),
    //             visibility: Joi.string().required(),
    //             coverImage: Joi.string().required(),
    //             txCreationObj: Joi.object().required(),
    //         }),
    //     }),
    //     async (req: Request, res: Response) => {
    //         const {
    //             requestByAddress, // the address making the request (will be community manager)
    //             name,
    //             description,
    //             city,
    //             country,
    //             gps,
    //             email,
    //             visibility,
    //             coverImage,
    //             txCreationObj,
    //         } = req.body;
    //         let returningStatus = 201;
    //         try {
    //             await CommunityService.request(
    //                 requestByAddress,
    //                 name,
    //                 description,
    //                 city,
    //                 country,
    //                 gps,
    //                 email,
    //                 visibility,
    //                 coverImage,
    //                 txCreationObj,
    //             );
    //         } catch (e) {
    //             Logger.error(e);
    //             returningStatus = 403;
    //         } finally {
    //             res.sendStatus(returningStatus);
    //         }
    //     },
    // );

    // route.post(
    //     '/edit',
    //     authenticateToken,
    //     celebrate({
    //         body: Joi.object({
    //             publicId: Joi.string().required(),
    //             name: Joi.string().required(),
    //             description: Joi.string().required(),
    //             city: Joi.string().required(),
    //             country: Joi.string().required(),
    //             gps: {
    //                 latitude: Joi.number().required(),
    //                 longitude: Joi.number().required(),
    //             },
    //             email: Joi.string().required(),
    //             visibility: Joi.string().required(),
    //             coverImage: Joi.string().required(),
    //         }),
    //     }),
    //     async (req: Request, res: Response) => {
    //         const {
    //             publicId,
    //             name,
    //             city,
    //             country,
    //             gps,
    //             email,
    //             visibility,
    //             location,
    //             coverImage,
    //         } = req.body;
    //         // verify if the current user is manager in this community
    //         let returningStatus = 404;
    //         try {
    //             // the sender must be a manager
    //             const communityToManager = await TransactionsService.findComunityToManager((req as any).user);
    //             if (communityToManager !== null) {
    //                 const community = await CommunityService.findByPublicId(publicId);
    //                 if (community !== null && community.contractAddress === communityToManager.contractAddress) {
    //                     await CommunityService.edit(
    //                         publicId,
    //                         name,
    //                         city,
    //                         country,
    //                         gps,
    //                         email,
    //                         visibility,
    //                         location,
    //                         coverImage,
    //                     );
    //                     returningStatus = 200;
    //                 }
    //             }
    //         } catch (e) {
    //             Logger.error(e);
    //             returningStatus = 403;
    //         } finally {
    //             res.sendStatus(returningStatus);
    //         }
    //     },
    // );

    // // TODO: add verification (not urgent, as it highly depends on the contract transaction)
    // route.post(
    //     '/accept',
    //     celebrate({
    //         body: Joi.object({
    //             acceptanceTransaction: Joi.string().required(),
    //             publicId: Joi.string().required(),
    //         }),
    //     }),
    //     async (req: Request, res: Response) => {
    //         const {
    //             acceptanceTransaction, // the address accepting the request (must be admin)
    //             publicId,
    //         } = req.body;
    //         res.sendStatus(await CommunityService.accept(
    //             acceptanceTransaction,
    //             publicId,
    //         ) ? 202 : 403);
    //     },
    // );
};