(function() {
    'use strict';

    angular.module('ngConsultCEP', [])
    
    .service('ConsultCEP', ['$http', '$q', function ($http, $q) {
        this.get = function (cep) {
    
        var deffered = $q.defer();
    
        $http.get('https://viacep.com.br/ws/'.concat(cep, '/json/'), { cache: false })
            .then(function (response) {
                deffered.resolve(response)
            }, function(response) {
                deffered.reject('CEP not found');
            });
    
        return deffered.promise;
      };
    }]);
})();