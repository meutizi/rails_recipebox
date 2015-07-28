recipe_box = angular.module('recipe_box',[
  'templates',
  'ngRoute',
  'ngResource',
  'controllers',
])

recipe_box.config(['$routeProvider'
  , ($routeProvider)-> 
    $routeProvider.when('/', 
      templateUrl: "index.html"
      controller: 'RecipesController'
  )
])


controllers = angular.module('controllers',[])
