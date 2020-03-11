const axios = require('axios');
const config = require('./../config');

const GET = 'get';
const POST = 'post';
const PUT = 'put';
const DELETE = 'delete';

// 10 seconds
const DEFAULT_TIMEOUT = 10000;

const action = async(entity, method, data) => {
    const currentConfig = await config.getConfig();
    console.log(currentConfig);
    const requestParams = {
        method,
        url: currentConfig.entityQuerier + entity,
        timeout: DEFAULT_TIMEOUT
    };

    console.log(requestParams);

    requestParams[method === GET ? "params" : "data"] = data;

    return axios(requestParams);
};

const getQuery = (entity) => {
  return (req, res) => {
      action(entity, GET, req.query).then(response => {
              res.status(200).json(response.data);
          }
      ).catch(e => {
          res.status(500).send(e.message);
      });
  }
};

module.exports = {
    GET, POST, PUT, DELETE,
    action, getQuery
};