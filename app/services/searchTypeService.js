(function () {
    var app = angular.module('app');
    app.service('searchTypeService', function ($http) {
        var service = {
            getAllSearchTypes: function () {
                return $http.get('app/data/searchtypes.json', {
                    cache: true
                }).then(function (resp) {
                    return resp.data;
                });
            },

            getSearchType: function (name) {
                function appMatchesParam(app) {
                    return app.name === name;
                }

                return service.getAllApps().then(function (searchApps) {
                    return searchApps.find(appMatchesParam);
                });
            }
        }

        return service;
    })
})();