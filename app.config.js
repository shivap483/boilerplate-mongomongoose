const config = require('dotenv');
config.config();

module.exports = {
    base_uri: process.env.BASE_URI,
    collection: process.env.COLLECTION,
    suffix: process.env.SUFFIX
}