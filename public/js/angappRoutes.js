// public/js/angappRoutes.js
angular.module('angappRoutes',[]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        // Home Page
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        
        // About Us Page
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
    
        // Contact Us Page
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
    
        // Contact Us Page
        .when('/add', {
            templateUrl: 'views/add.html',
            controller: 'AddController'
        });
    $locationProvider.html5Mode(true);
}]);