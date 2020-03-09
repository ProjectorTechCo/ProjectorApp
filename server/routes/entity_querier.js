const axios = require('axios');
const config = require('./../config');

const GET = 'get';
const POST = 'post';
const PUT = 'put';
const DELETE = 'delete';

// 10 seconds
const DEFAULT_TIMEOUT = 10000;

const action = (entity, method, data) => {
    return axios({
        method, data,
        url: config.entity_querier + entity,
        timeout: DEFAULT_TIMEOUT
    });
};

module.exports = {
    GET, POST, PUT, DELETE,
    action
};