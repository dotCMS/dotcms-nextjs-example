const { loggerError, loggerLog } = require('./logger');
const getToken = require('./dotcms');

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const capitalize = (str, lower = false) =>
    (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
        match.toUpperCase()
    );

const internalPrefixes = [/^\/_next\//, /^\/static\//, /^\/favicon.ico/];

const isNextInternalFile = (url) => {
    for (const prefix of internalPrefixes) {
        if (prefix.test(url)) {
            return true;
        }
    }

    return false;
}

const isJsonValid = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

module.exports = {
    isNextInternalFile,
    loggerLog,
    loggerError,
    getToken,
    currencyFormatter,
    capitalize,
    isJson
};
