(function () {
    var app = angular.module('app');
    app.component('navbarTop', {
        templateUrl: 'app/templates/navbarTopComponent.html',
        controller: function ($scope) {
            this.dropdowns = [
                {"name": "Type1", "sref":"search.type({ typeName: 'type1' })" },
                {"name": "Type2", "sref":"search.type({ typeName: 'type2' })" },
                {"name": "Type3", "sref":"search.type({ typeName: 'type3' })" },
            ];
        },
        controllerAs: 'navbarTop',
        bindings: {}
    });
    //Contains query and results
    app.component('search', {
        template: '<ui-view></ui-view>'
    });
    app.component('searchType', {
        templateUrl: 'app/templates/searchTypeComponent.html',
        controller: function ($scope) {
            this.$onInit = () => {
                let to = this.$transition$.to();
                let toParams = this.$transition$.params("to");
                let from = this.$transition$.from();
                let fromParams = this.$transition$.params("from");
                if(toParams.queryParams){
                    this.type.queryParams = JSON.parse(toParams.queryParams);
                    console.log(toParams);
                }
              }
              console.log(this.searchData);
        },
        controllerAs: 'searchType',
        bindings: {
            type: '<',
            searchData: '<',
            $transition$: '<'
        }
    });
    app.component('queryForm', {
        templateUrl: 'app/templates/queryFormComponent.html',
        controller: function ($scope, $state) {
            this.newQueryParams = '{"type2_input1":"zzz"}'
            this.setQuery = function(queryInputParams){
                if(queryInputParams){
                    $state.go('.', {'queryParams': JSON.stringify(queryInputParams)});
                }
            }
        },
        controllerAs: 'queryForm',
        bindings: {
            queryInputParams: '<',
            paramFields: '<'
        }
    });

    //For method of injecting $transition, see https://github.com/angular-ui/ui-router/issues/3110
    app.component('results', {
        templateUrl: 'app/templates/resultsComponent.html',
        controller:  function($scope) {
            console.log('resultsGrid');
            console.log(this);
            console.log(this.gridData);
          }
        ,
        controllerAs: 'resultsGrid',
        bindings: {
            gridData: '<',
            gridOptions: '<'
        }
    });

    app.component('tabs', {
        templateUrl: 'app/templates/tabsComponent.html',
        controller: function ($scope) {
            this.tabs = [
                {"name": "Tab1", "sref":"tabs.tab({ tabName: 'tab1' })" },
                {"name": "Tab2", "sref":"tabs.tab({ tabName: 'tab2' })" },
                {"name": "Tab3", "sref":"tabs.tab({ tabName: 'tab3' })" },
            ];
        },
        controllerAs: 'tabsController',
        bindings: {}
    });

    app.component('tab', {
        templateUrl: 'app/templates/tabsComponent.html',
        controller: function ($scope) {
        },
        controllerAs: 'tab',
        bindings: {
            tab: '<'
        }
    });
})();