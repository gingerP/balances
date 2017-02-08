require('./common-config');

var CommonModule = require('./common.module');
var _ = require('lodash');

CommonModule.factory('CommonStorage', CommonStorage);

function CommonStorage(CommonConfig) {
    var storage = {
        selectedPeriods: [CommonConfig.DEFAULT_PERIOD],
        selectedView: CommonConfig.DEFAULT_VIEW
    };

    function period(period) {
        if (!arguments.length) {
            return _.cloneDeep(storage.selectedPeriods[storage.selectedPeriods.length - 1]);
        } else {
            storage.selectedPeriods.push({
                startDate: _.cloneDeep(period.startDate),
                endDate: _.cloneDeep(period.endDate),
                type: period.type
            });
        }
    }

    function view(selectedView) {
        if (!arguments.length) {
            return storage.selectedView;
        } else {
            storage.selectedView = selectedView;
        }
    }

    function selectLastPeriod(type) {
        var lastPeriod = _.findLast(storage.selectedPeriods, {type: type});

        if (lastPeriod) {
            storage.selectedPeriods.push(_.cloneDeep(lastPeriod));
            return _.cloneDeep(lastPeriod);
        } else {
            console.warn('Type %s was not previously selected!', type);
            return null;
        }
    }

    return {
        period: period,
        selectLastPeriod: selectLastPeriod
    }
}