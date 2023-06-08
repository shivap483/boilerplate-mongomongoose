
const appConfig = require('./app.config');


const mongoose = require('mongoose');
const _connect = async () => {
    const base_uri = appConfig.base_uri
    const collection = appConfig.collection
    const suffix = appConfig.suffix
    const url = `${base_uri}/${collection}?${suffix}`
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = { _connect }
