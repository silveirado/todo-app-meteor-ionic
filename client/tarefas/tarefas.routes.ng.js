import tarefasView from './tarefas.view.ng.html';

angular.module('todoApp')
  .config(['$stateProvider', tarefasRoute]);

function tarefasRoute($stateProvider) {
  $stateProvider
    .state('tarefas', {
      url: '/tarefas',
      templateUrl: tarefasView,
      controller: 'TarefasCtrl'
    });
}
