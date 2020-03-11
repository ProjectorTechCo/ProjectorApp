const axios = require('axios');
const config = require('./../config');

const GET = 'get';
const POST = 'post';
const PUT = 'put';
const DELETE = 'delete';

// 10 seconds
const DEFAULT_TIMEOUT = 10000;

const action = (entity, method, data) => {
    const requestParams = {
        method,
        url: config.entity_querier + entity,
        timeout: DEFAULT_TIMEOUT
    };

    requestParams[method === GET ? "params" : "data"] = data;

    return axios(requestParams);
};

const getQuery = (entity) => {
  return (req, res) => {
      action(entity, GET, req.query).then(response => {
              res.status(200).json(response.data);
          }
      ).catch(e => {
          console.log(e.message);
          res.status(500).send("Server Error.");
      });
  }
};

module.exports = {
    GET, POST, PUT, DELETE,
    action, getQuery
};