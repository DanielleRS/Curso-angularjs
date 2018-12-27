angular.module('alurapic').controller('FotosController', function($scope, $http) {

    $scope.fotos = [];
    $scope.filtro = '';

    var promise = $http.get('v1/fotos');
    promise.then(function(retorno) {
        $scope.fotos = retorno.data;
    }).catch(function(error) {
        console.log(error);
    });
});