import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import routes from '../db/routes';
import config from '../config';
import { LoggerStream } from './logger';

export default ({ app }: { app: express.Application }): void => {
    app.get('/status', (req, res) => {
        res.status(200).end();
    });
    app.head('/status', (req, res) => {
        res.status(200).end();
    });

    // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
    // It shows the real origin IP in the heroku or Cloudwatch logs
    app.enable('trust proxy');

    app.use(morgan('combined', { stream: new LoggerStream() }));

    app.use(helmet());
    // The magic package that prevents frontend developers going nuts
    // Alternate description:
    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors());
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });

    // Middleware that transforms the raw string of req.body into json
    app.use(bodyParser.json());

    // Load API routes
    app.use(config.api.prefix, routes());

    /// catch 404 and forward to error handler
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        next(err);
    });

    /// error handlers
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        /**
         * Handle 401 thrown by express-jwt library
         */
        if (err.name === 'UnauthorizedError') {
            return res
                .status(err.status)
                .send({ message: err.message })
                .end();
        }
        return next(err);
    });
    app.use((err: any, req: Request, res: Response) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
            },
        });
    });
};

// import BaseRouter from './routes';
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.json())
// app.use(
//     bodyParser.urlencoded({
//         extended: true,
//     })
// )

// // Initialize connection to Postgres
// const Pool = require('pg').Pool
// const pool = new Pool({
//     user: 'dmadmin',
//     host: 'localhost',
//     database: 'decentramall',
//     password: 'p@ssw0rd',
//     port: 5432,
// })

// // Add APIs
// // app.use('/api', BaseRouter);

// app.get('/api', (req, res) => {
//     res.send("Hello world!")
// })

// app.get('/api/mall', (req, res) => {
//     pool.query('SELECT * FROM mall', (error, results) => {
//         if (error) {
//             throw error
//         }
//         res.status(200).json(results.rows)
//     })
// })

// app.post('/api/mall', (req, res) => {
//     pool.query(`INSERT INTO mall VALUES(${req.params.space_qty}, ${req.params.store_qty})`, (error, results) => {
//         if (error) {
//             return res.status(400).json(error);
//         }
//         res.status(200).json(results.rows)
//     })
// })

// app.get('/api/stores', (req, res) => {
//     pool.query('SELECT * FROM store', (error, results) => {
//         if (error) {
//             throw error
//         }
//         res.status(200).json(results.rows)
//     })
// })

// app.get('/api/stores/:id', (req, res) => {
//     pool.query(`SELECT * FROM store where id = ${parseInt(req.params.id)}`, (error, results) => {
//         if (error) {
//             throw error
//         }
//         if (results.rows.length === 0) {
//             return res.status(404).send("Store not found!");
//         }
//         res.status(200).json(results.rows);
//     })
// })

// app.post('/api/stores', (req, res) => {

//     // const { error } = validateStore(req.body);

//     // if (error) {
//     //     res.status(400).send(error.details[0].message);
//     //     return;
//     // }

//     // const store = {
//     //     id: stores.length + 1,
//     //     name: req.body.name,
//     // }
//     // stores.push(store);
//     // res.send(store);
// })

// // app.put('/api/store/:id', (req, res) => {
// //     // Look for store
// //     const retrievedStore = stores.find(store => store.id === parseInt(req.params.id));

// //     if (!retrievedStore) {
// //         res.status(404).send("Store not found!")
// //     } else {
// //         const { error } = validateStore(req.body);

// //         if (error) {
// //             res.status(400).send(error.details[0].message);
// //             return;
// //         }

// //         retrievedStore.name = req.body.name;
// //         res.send(retrievedStore);
// //     }
// // })

// // function validateStore(store) {
// //     const schema = Joi.object({
// //         name: Joi.string()
// //             .alphanum()
// //             .min(3)
// //             .max(30)
// //             .required(),
// //     });

// //     return schema.validate(store);
// // }

// // app.delete('/api/store/:id', (req, res) => {
// //     const retrievedStore = stores.find(store => store.id === parseInt(req.params.id));

// //     if (!retrievedStore) {
// //         res.status(404).send("Store not found!")
// //     } else {
// //         const index = stores.indexOf(retrievedStore);
// //         stores.splice(index, 1);

// //         res.send(retrievedStore);
// //     }
// // })

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`))
