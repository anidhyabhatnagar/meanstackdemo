// public/js/services/AboutService.js
angular.module('AboutService', []).factory('About',['$http', function($http){
    return {
        // call to get all data
        get : function(){
            return $http.get('/api/abouts');
        },
        // these will work when more API routes are defined on the Node side of things
        // call to delete the data
        delete : function(){
            return $http.delete('api/abouts' + id);
        }
    }
}]);