const config = require('dotenv');
config.config();

export default appConfig = {
    base_uri: process.env.BASE_URI,
    collection: process.env.COLLECTION,
    suffix: process.env.SUFFIX
}