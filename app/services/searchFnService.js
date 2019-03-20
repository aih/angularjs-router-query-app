(function () {
    var app = angular.module('app');
    app.service('searchFnService', function () {
        // https://stackoverflow.com/questions/773184/get-javascript-function-object-from-its-name-as-a-string
        const type1Data = [{"field_1": "value_00", "field_2": "value_01", "field_3": "value_02", "field_4": "value_03", "field_5": "value_04"},
        {"field_1": "value_10", "field_2": "value_11", "field_3": "value_12", "field_4": "value_13", "field_5": "value_14"}];
        const type2Data = [{"field_1": "value_x0", "field_2": "value_x1", "field_3": "value_x2", "field_4": "value_x3", "field_5": "value_x4"},
        {"field_y": "value_y0", "field_2": "value_y1", "field_3": "value_y2", "field_4": "value_y3", "field_5": "value_y4"}];
        const searchFns = {
            type1: queryParams => type1Data ,
            type2: queryParams => type2Data 
        };
        var service = {
            getSearchFn: function (name) {
                return searchFns[name] || (queryParams => null);;
            }
        }
        return service;
    })
})();