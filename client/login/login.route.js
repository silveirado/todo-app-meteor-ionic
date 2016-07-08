angular.module('todoApp')
  .config(['$stateProvider', loginRoute]);

function loginRoute($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'client/login/login.view.ng.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    });
}
