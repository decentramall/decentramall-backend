import { Router } from 'express';
import store from './store';

export default (): Router => {
    const app = Router();
    store(app);

    return app;
}