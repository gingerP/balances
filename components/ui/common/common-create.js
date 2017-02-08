var CommonModule = require('./common.module');

CommonModule.factory('CommonCreate', CommonCreate);

function CommonCreate() {

    function createPeriod(type, startDate, endDate) {
        return {
            type: type,
            startDate: startDate,
            endDate: endDate
        };
    }

    return {
        createPeriod: createPeriod
    };
}