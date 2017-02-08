require('../../common/common-utils');
var DayViewModule = require('../day-view.module');

DayViewModule.factory('DayViewConfig', DayViewConfig);

function DayViewConfig(CommonUtils) {
    const DEFAULT_BALANCES_NUMBER = 4;
    const PLACEHOLDER = 'Input new balance.';

    function getDefaultBalances() {
        return [
            {
                id: CommonUtils.getRandomString(),
                value: 0
            },
            {
                id: CommonUtils.getRandomString(),
                value: 0
            },
            {
                id: CommonUtils.getRandomString(),
                value: 0
            },
            {
                id: CommonUtils.getRandomString(),
                value: 0
            }
        ];
    }

    function getDefaultBalanceItem() {
        return {
            id: CommonUtils.getRandomString(),
            value: 0
        }
    }

    return {
        getDefaultBalances: getDefaultBalances,
        getDefaultBalanceItem: getDefaultBalanceItem,
        DEFAULT_BALANCES_NUMBER: DEFAULT_BALANCES_NUMBER,
        PLACEHOLDER: PLACEHOLDER
    }
}