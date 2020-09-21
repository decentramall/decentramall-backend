import { Sequelize, DataTypes, Model } from 'sequelize';

export class Space extends Model {
    public id!: number;
    public buyer!: string;
    public renter!: string;
    public status!: string;
    public expiry_block!: number;
    public rental_earned!: number;
}

export function initializeSpace(sequelize: Sequelize) {
    return Space.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        buyer: {
            type: DataTypes.STRING(42),
            allowNull: false
        },
        renter: {
            type: DataTypes.STRING(42),
            allowNull: true
        },
        status: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        expiry_block: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        rental_earned: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }, {
        tableName: 'space',
        sequelize: sequelize,
    });
}