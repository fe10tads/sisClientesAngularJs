(function(){
    
    //IIFE

    //modo estrito
    //não deixa criar variavels sem variavels
    //não consegeu deletar variaveis
    //não deixa criar funcoes com parâmetros repetitivos
    'use strict'

    //criando o modulo
    angular.module('app').config(config);

    config.$inject = ['$urlRouterProvider', '$stateProvider'];

    function config($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/cadastrar')
        
        $stateProvider
        .state('main', {
            templateUrl: 'modules/clientes/views/layout.html',
            abstract: true
        })
        .state('main.listar', {
            templateUrl: 'modules/clientes/views/listar.html',
            url: '/listar',
            cache: false
        })
        .state('main.cadastrar', {
            templateUrl: 'modules/clientes/views/cadastrar.html',
            url: '/cadastrar',
            cache: false
        })
    }

})();