const schemaConfig = require('./schemaConfig');

const getFullTextQuery = (entity, text, operator="and") => {
    return `SELECT * FROM ${entity} WHERE to_tsvector('simple', 
    ${getColumnsConcat(Object.keys(schemaConfig[entity]))}) && to_tsquery('simple', 
    ${getParsedSearchText(text, operator)})`;
};

const getColumnsConcat = (columns) => {
    return " || ' ' || ".join(columns)
};

const getParsedSearchText = (text, opertor) => {
    return text.split(' ').join(` ${opertor === 'and' ? '&' : '|'} `);
}

module.exports = {
    getFullTextQuery
};