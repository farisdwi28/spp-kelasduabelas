

const model = require('./sequelize/models/index')

//sync the model to the database, make sure all configuration is correct

model.sequelize.sync({
    force: true
});
 