(function(){
    
    //IIFE

    //modo estrito
    //não deixa criar variavels sem variavels
    //não consegeu deletar variaveis
    //não deixa criar funcoes com parâmetros repetitivos
    'use strict'

    //criando o modulo
    angular.module('app').controller('clienteCadastrarCtrl', ctrl);

    ctrl.$inject = ['$state', 'clienteService'];

    function ctrl($state, clienteService){
        var vm = this;

        vm.cliente = {};

        vm.salvar = function(){
            alert(vm.cliente.nome);
            clienteService.cadastrar(vm.cliente).then(sucesso, erro);

            function sucesso(retorno){
                alert(retorno.data);
            }

            function erro(){
                alert('deu ruim');
            }

        }
    }

})();