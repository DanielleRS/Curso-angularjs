angular.module('minhasDiretivas', []).directive('meuPainel', function() {
    var ddo = {};

    // atributo e elemento
    ddo.restrict = "AE";

    ddo.scope = {
        titulo: '@'
    };

    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
});