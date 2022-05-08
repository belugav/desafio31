require('dotenv').config()
const {argvVariables} = require('../utils/processInfo')

module.exports = {
    PORT:  parseInt(argvVariables[0]) || process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URI: process.env.MONGO_URI || "",
    SECRET : process.env.SECRET,

}