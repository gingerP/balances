var CommonModule = require('./common.module');
var moment = require('moment');

CommonModule.factory('CommonConfig', CommonConfig);

function CommonConfig() {
    const VIEW_SELECTORS = {
        YEAR: 'YEAR',
        MONTH: 'MONTH',
        WEEK: 'WEEK'
    };
    const FORMATS = {
      DAY_VIEW_DATE: 'MMM D'
    };

    function getWeek(period) {
        var startDate = moment(period.startDate);
        
        return [
            {
                id: 'monday',
                name: 'Monday',
                date: startDate.add(1, 'days').toDate()
            },
            {
                id: 'tuesday',
                name: 'Tuesday',
                date: startDate.add(1, 'days').toDate()
            },
            {
                id: 'wednesday',
                name: 'Wednesday',
                date: startDate.add(1, 'days').toDate()
            },
            {
                id: 'thursday',
                name: 'Thursday',
                date: startDate.add(1, 'days').toDate()
            },
            {
                id: 'friday',
                name: 'Friday',
                date: startDate.add(1, 'days').toDate()
            },
            {
                id: 'saturday',
                name: 'Saturday',
                date: startDate.add(1, 'days').toDate()
            },
            {
                id: 'sunday',
                name: 'Sunday',
                date: startDate.add(1, 'days').toDate()
            }
        ]
    }

    return {
        getWeek: getWeek,
        VIEW_SELECTORS: VIEW_SELECTORS,
        DEFAULT_VIEW: VIEW_SELECTORS.WEEK,
        FORMATS: FORMATS,
        DEFAULT_PERIOD: {
            type: VIEW_SELECTORS.WEEK,
            startDate: moment().day(1).toDate(),
            endDate: moment().day(1).toDate()
        }
    }
}