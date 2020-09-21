import { Sequelize } from 'sequelize';
import { initializeSpace, Space } from './space';
import { initializeStore, Store } from './store';


export default function initModels(sequelize: Sequelize): void {
    initializeSpace(sequelize);
    initializeStore(sequelize);

    // Space.hasMany(Store, { foreignKey: '' });
    // Store.belongsTo(Space, { foreignKey: '' });
}