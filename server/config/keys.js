const dbConfig = require('./dbConfig.js');
// '+srv' & '?retryWrites=true&w=majority' is added for mlab connection
const url = "mongodb+srv://" + dbConfig.user + ":" + dbConfig.pwd + "@" + dbConfig.url + "?retryWrites=true&w=majority";

module.exports = {
    mongoURI: url,
    secretOrKey: "secret"
};