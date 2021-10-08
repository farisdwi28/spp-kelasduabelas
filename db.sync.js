require('dotenv').config()

const model = require('./modules/sequelize/models/index.js')

//sync the model to the database, make sure all configuration is correct

model.sequelize.sync({
    force: true
});
