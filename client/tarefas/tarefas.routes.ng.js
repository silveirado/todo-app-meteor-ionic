angular.module('todoApp')
  .config(['$stateProvider', tarefasRoute]);

function tarefasRoute($stateProvider) {
  $stateProvider
    .state('tarefas', {
      url: '/tarefas',
      templateUrl: 'client/tarefas/tarefas.view.ng.html',
      controller: 'TarefasCtrl'
    });
}
