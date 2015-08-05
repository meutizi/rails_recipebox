(function () {
    'use strict';
    
    function recipeController($routeParams, $location, $resource) {
        /* jshint validthis: true */
        var self = this;
        self.recipes = [];

        var Recipe = $resource('/recipes/:recipeId', {
            recipeId: "@id",
            format: 'json'
        });
        
        self.search = search;

        activate();
        
        function search(keyword) {
            return $location.path("/").search('keywords', keywords);
        }


        function activate() {
            if ($routeParams.keywords) {
                self.recipes = Recipe.query({
                    keywords: $routeParams.keywords
                }, function (results) {
                    return results;
                });
            } else {
                self.recipes = Recipe.query(function (results) {
                    return results;
                });
            }
        }
    }

    angular.module('recipe_box.controllers').controller('RecipesController', recipeController);
    recipeController.$inject = ['$routeParams', '$location', '$resource'];
    
})();