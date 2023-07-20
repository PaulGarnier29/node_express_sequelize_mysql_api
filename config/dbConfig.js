module.exports = {
    HOST: '192.168.1.254',
    USER: 'Paul',
    PASSWORD: 'Paul_123',
    DB: 'ice-berry-online-test',
    dialect: 'mysql',

    pool: {
        max: 5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
}