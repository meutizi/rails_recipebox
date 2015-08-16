(function() {
    'use strict';

    angular.module('recipe_box', [
      'templates',
      'ngRoute',
      'ngResource',
      'recipe_box.controllers',
      'angular-flash.service',
      'angular-flash.flash-alert-directive'
    ]);

    function routeConfig($routeProvider, $locationProvider, flashProvider) {
        flashProvider.errorClassnames.push("alert-danger");
        flashProvider.warnClassnames.push("alert-warning");
        flashProvider.infoClassnames.push("alert-info");
        flashProvider.successClassnames.push("alert-success");
        
        $routeProvider.when('/', {
            templateUrl: 'index.html',
            controller: 'RecipesController',
            controllerAs: 'rc'
        }).when('/recipes/:recipeId', {
            templateUrl: "show.html",
            controller: "RecipeController",
            controllerAs: 'rc'
        });
    }
    
    angular.module('recipe_box').config(routeConfig);
    routeConfig.$inject = ['$routeProvider', '$locationProvider', 'flashProvider'];

    angular.module('recipe_box.controllers',[])

})();