import config from './config';
import express from 'express';
import Logger from './loaders/logger';
import loaders from './loaders';

async function startServer() {
    const app = express();
    await loaders({ expressApp: app });

    app.listen(config.port, () => {
        Logger.info(`Listening on port: ${config.port}`);
    });
}

startServer();