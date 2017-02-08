'use strict';

require('./common-config');
require('./common-events');
require('./common-storage');
require('./common-create');

var CommonModule = require('./common.module');
var moment = require('moment');

CommonModule.factory('CommonViewSelection', CommonViewSelection);

function CommonViewSelection($rootScope,
                             CommonCreate, CommonEvents, CommonConfig, CommonStorage) {
    const VIEWS = CommonConfig.VIEW_SELECTORS;
    const VIEWS_ORDER = [
        VIEWS.YEAR,
        VIEWS.MONTH,
        VIEWS.WEEK
    ];


    function getPeriodFor(date, newPeriodType) {
        var result;

        switch(newPeriodType) {
            case VIEWS.YEAR:
                let yearBegin = moment(date).startOf('year');
                result = CommonCreate.createPeriod(
                    VIEWS.YEAR,
                    yearBegin.toDate(),
                    yearBegin.endOf('year').toDate()
                );
                break;
            case VIEWS.MONTH:
                let monthBegin = moment(date).startOf('month');
                result = CommonCreate.createPeriod(
                    VIEWS.MONTH,
                    monthBegin.toDate(),
                    monthBegin.endOf('month').toDate()
                );
                break;
            case VIEWS.WEEK:
                let weekBegin = moment(date).startOf('week');
                result = CommonCreate.createPeriod(
                    VIEWS.WEEK,
                    weekBegin.toDate(),
                    weekBegin.endOf('week').toDate()
                );
                break;
        }

        return result;
    }

    function getRelativePeriod(currentPeriod, newPeriodType) {
        if (VIEWS_ORDER.indexOf(currentPeriod.type) === VIEWS_ORDER.indexOf(newPeriodType)) {
            return currentPeriod;
        } else {
            return getPeriodFor(currentPeriod.startDate, newPeriodType);
        }
    }

    function selectView(type) {
        var period = CommonStorage.selectLastPeriod(type);

        if (!period) {
            period = CommonStorage.period();
            period = getRelativePeriod(period.startDate, type);
            CommonStorage.period(period);
        }
        $rootScope.$emit(CommonEvents.VIEW.SELECTED, type);

        return period;
    }

    return {
        selectView: selectView
    }
}