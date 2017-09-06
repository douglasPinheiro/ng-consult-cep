# ng-consult-cep
Angularjs service to consult CEP on correios

Small lib to consult CEP on Correios

DEMO
https://codepen.io/douglaspinheiro/pen/bryEpq

<code>npm install --save ng-consult-cep</code>

Add this app as dependence in your app

<code>angular.module('example', ['ngConsultCEP'])</code>

Inject service in your controller

<code>angular.module('example').controller('mainCtrl', ['$scope', 'ConsultCEP', function($scope, ConsultCEP)</code>

And call the function

    ConsultCEP.get(cep).then(function(response) {
        var address = response.data;

        $scope.address = address.logradouro;
        $scope.neighborhood = address.bairro;
        $scope.city = address.localidade;
        $scope.state = address.uf;
        $scope.ibge = address.ibge;
    });
