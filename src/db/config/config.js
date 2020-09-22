module.exports = {
    development: {
        username: 'dmadmin',
        password: 'p@ssw0rd',
        database: 'decentramall',
        host: 'localhost',
        port: 5432,
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    production: {
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true,
        },
        migrationStorageTableName: 'sequelize_meta_production',
    }
};