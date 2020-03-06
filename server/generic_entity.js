const PgInstance = require("./PgInstance");

class GenericEntity {
    constructor(entity) {
        this.entity = entity;
    }

    selectAll(param) {
        return (req, res) => {
            let argument = req.params[param];
            let query = `SELECT * FROM ${this.entity}`;
            if (argument)
                query += ` WHERE ${param} = ${argument}`;
            PgInstance.action(query).then(result => {
                    let {status, message} = result;
                    res.status(status).json(message);
                }
            ).catch(e => {
                console.log(e);
            });
        }
    }

    selectByCondition() {
        return (req, res) => {

            res.status(200).json()
        }
    }

    create() {
        return (req, res) => {
            res.status(200).json({})
        }
    }

    update() {
        return (req, res) => {
            res.status(200).json({})
        }
    }

    delete() {
        return (req, res) => {
            res.status(200).json({})
        }
    }
}

module.exports = GenericEntity;
