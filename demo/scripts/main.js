angular.module('example', ['ngConsultCEP'])

.controller('mainCtrl', ['$scope', 'ConsultCEP', function($scope, ConsultCEP) {
    $scope.cepKeyPress = function(){
        var cep = $scope.zipcode;

        if (cep === undefined || cep.length < 8) { return true; }
        
        ConsultCEP.get(cep).then(function(response) {
            var address = response.data;

            $scope.address = address.logradouro;
            $scope.neighborhood = address.bairro;
            $scope.city = address.localidade;
            $scope.state = address.uf;
            $scope.ibge = address.ibge;
        });
    }
}]);

