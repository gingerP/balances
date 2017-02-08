var dateFormat = require('dateformat');
var log4js = require('log4js');
var logger;
const DEFAULT_LEVEL = 'DEBUG';
log4js.configure('./config/logger.json');
log4js.addAppender(log4js.appenders.file('./logs_' + dateFormat('yyyyddHHMM') + '.log'));
logger = log4js.getLogger();
logger.setLevel(DEFAULT_LEVEL);
module.exports = {
    instance: logger,
    level: function (level) {
        logger.setLevel(level || DEFAULT_LEVEL);
        return logger;
    },
    create: function (category, level) {
        var loggerInstance = log4js.getLogger(category || '');
        loggerInstance.setLevel(level || DEFAULT_LEVEL);
        return loggerInstance;
    }
};