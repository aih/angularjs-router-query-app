(function () {
    var app = angular.module('app');
    app.service('tabsService', function ($http) {
        var service = {
            getAllTabs: function () {
                return $http.get('app/data/tabs.json', {
                    cache: true
                }).then(function (resp) {
                    return resp.data;
                });
            },

            getTab: function (name) {
                function tabMatchesParam(tab) {
                    return tab.name === name;
                }

                return service.getAllTabs().then(function (tabs) {
                    return tabs.find(tabMatchesParam);
                });
            }
        }

        return service;
    })
})();