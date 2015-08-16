(function () {
    'use strict';
    
    function recipeController($routeParams, $location, $resource, flash) {
        /* jshint validthis: true */
        var self = this;
        self.recipe = null;
        self.back = back;
        
        var Recipe = $resource('/recipes/:recipeId', {
            recipeId: "@id",
            format: 'json'
        });
        
        Recipe.get({recipeId: $routeParams.recipeId},
            function(result) {
                self.recipe = result;
            },
            function(response) {
                self.recipe = null;
                flash.error = "There is no recipe with ID " + $routeParams.recipeId;
            }
        );
    
        function back() {
            $location.path("/");
        }
    }

    
    angular.module('recipe_box.controllers').controller('RecipeController', recipeController);
    recipeController.$inject = ['$routeParams', '$location', '$resource', 'flash'];
    
})();