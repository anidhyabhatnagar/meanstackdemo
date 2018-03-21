// public/js/controllers/AddCtrl.js
angular.module('AddCtrl', []).controller('AddController', function($scope, $http){
    $scope.send_data=function(){
        $http.post('/api/abouts', $scope.form_data).then(function(respo){
            console.log(respo);
        })
    }
});