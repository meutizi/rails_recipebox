(function () {
    'use strict';
    
    function recipesController($routeParams, $location, $resource) {
        /* jshint validthis: true */
        var self = this;
        self.recipes = [];

        var Recipe = $resource('/recipes/:recipeId', {
            recipeId: "@id",
            format: 'json'
        });
        
        self.search = search;
        self.view = view;
        
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
        
        function view(recipeId) {
            $location.path("/recipes/" + recipeId)
        }
    }

    angular.module('recipe_box.controllers').controller('RecipesController', recipesController);
    recipesController.$inject = ['$routeParams', '$location', '$resource'];
    
})();