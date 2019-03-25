(function () {
  'use strict';
  /* global angular */
  /* global alertify */
  var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'ui.grid.resizeColumns']);

  app.config(appConfig);
  appConfig.$inject = ['$stateProvider', '$urlServiceProvider']
  function appConfig($stateProvider, $urlServiceProvider) {
      $urlServiceProvider.rules.otherwise({ state: 'about' });

    var aboutState = {
      name: 'about',
      url: '/about',
      templateUrl: 'app/templates/aboutTemplate.html' 
    };

    var searchState = {
      name: 'search',
      url: '/search',
      component: 'search',
      resolve: {
        types: function(searchTypeService) {
          return searchTypeService.getAllSearchTypes();
        }
      }
    };

    var searchTypeState = { 
      name: 'search.type', 
      url: '/{typeName}?queryParams', 
      component: 'searchType',
      resolve: {
        searchData: function(searchFnService, $stateParams) {
          let data = searchFnService.getSearchFn($stateParams.typeName)($stateParams.queryParams); 
          console.log(data);
          return data;
        },
        type: function(types, $stateParams) {
          return types.find(function(type) { 
            return type.name === $stateParams.typeName;
          });
        }
      }
    };

    var tabsState = {
      name: 'tabs',
      url: '/tabs',
      component: 'tabs',
      resolve: {
        tabs: function(tabsService) {
          return tabsService.getAllTabs();
        }
      }
    };

    var tabState = { 
      name: 'tabs.tab', 
      url: '/{tabName}', 
      component: 'tab',
      resolve: {
        tab: function(tabs, $stateParams) {
          return tabs.find(function(tab) { 
            return tab.name === $stateParams.tabName;
          });
        }
      }
    };
  
    $stateProvider
    .state(aboutState)
    .state(searchState)
    .state(searchTypeState)
    .state(tabsState)
    .state(tabState);
  }

})();