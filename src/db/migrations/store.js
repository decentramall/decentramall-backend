'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('store', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            publicId: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                unique: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING(256),
                allowNull: false
            },
            category: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            description: {
                type: Sequelize.STRING(1024),
                allowNull: false
            },
            url: {
                type: Sequelize.STRING(256),
                allowNull: false
            },
            storeImage: {
                type: Sequelize.STRING(256),
                allowNull: false
            },
            tx: {
                type: Sequelize.STRING(68),
                allowNull: false
            },
            txAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('store');
    }
};