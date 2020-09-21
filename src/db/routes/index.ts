import { Router } from 'express';
import space from './Space';
import store from './Store';

export default (): Router => {
    const app = Router();
    space(app);
    store(app);

    return app;
}