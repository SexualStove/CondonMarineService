

const BlogController = require('./controller/BlogController');

// const AuthenticationControllerPolicy = require('./policies/BlogPolicies')

module.exports = (app) => {

    app.post('/DebtLodgement', BlogController.SendForm);
    app.post('', BlogController.SendContact);


};

