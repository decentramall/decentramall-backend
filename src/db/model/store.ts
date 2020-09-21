import { Sequelize, DataTypes, Model } from 'sequelize';

export class Store extends Model {
    public id!: number;
    public name!: string;
    public category!: string;
    public description!: string;
    public published_date!: Date;
    public url!: string;
    public store_image!: Blob;
}

export function initializeStore(sequelize: Sequelize) {
    return Store.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(1024),
            allowNull: true
        },
        published_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING(1024),
            allowNull: true,
        },
        store_image: {
            type: DataTypes.BLOB,
            allowNull: true,
        },
    }, {
        tableName: 'store',
        sequelize: sequelize,
    });
}