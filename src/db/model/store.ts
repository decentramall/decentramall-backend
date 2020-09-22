import { Sequelize, DataTypes, Model } from 'sequelize';

export class Store extends Model {
    public id!: number;
    public publicId!: string;
    public name!: string;
    public category!: string;
    public description!: string;
    public url!: string;
    public storeImage!: string;
    public tx!: string;
    public txAt!: Date;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export function initializeStore(sequelize: Sequelize) {
    return Store.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        publicId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
            allowNull: false,
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
        url: {
            type: DataTypes.STRING(256),
            allowNull: true,
        },
        storeImage: {
            type: DataTypes.STRING(256),
            allowNull: true,
        },
        tx: {
            type: DataTypes.STRING(68),
            allowNull: false,
        },
        txAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'store',
        sequelize: sequelize,
    });
}