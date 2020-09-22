import { Sequelize } from 'sequelize';
import { initializeStore } from './store';


export default function initModels(sequelize: Sequelize): void {
    initializeStore(sequelize);
}