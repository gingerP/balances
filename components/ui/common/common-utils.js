var CommonModule = require('./common.module');

CommonModule.factory('CommonUtils', CommonConfig);

function CommonConfig() {

    function getRandomString() {
        return Math.random().toString(36).substring(7);
    }

    return {
        getRandomString: getRandomString
    }
}