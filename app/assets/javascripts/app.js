(function() {
    'use strict'

    angular.module('recipe_box',[
      'templates',
      'ngRoute',
      'ngResource',
      'recipe_box.controllers',
    ]);

    function routeConfig($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'index.html',
            controller: 'RecipesController',
            controllerAs: 'rc'
        });
    }
    
    angular.module('recipe_box').config(routeConfig);
    routeConfig.$inject = ['$routeProvider', '$locationProvider'];

    angular.module('recipe_box.controllers',[])

})();