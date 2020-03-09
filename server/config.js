const config = {
    "dev": {
        "entity_querier": "http://localhost:5000/"
    },
    "prod": {}
};

const getConfig = () => {
    return config[process.env.NODE_ENV] || config["dev"]
};

module.exports = getConfig();