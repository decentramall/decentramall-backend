import express from 'express';
import Logger from './logger';
import expressLoader from './express';
import databaseLoader from './database';

export default async ({ expressApp }: { expressApp: express.Application }): Promise<void> => {
    await databaseLoader();
    Logger.info('Loaded postgres DB');

    await expressLoader({ app: expressApp });
    Logger.info('Express ready');
};