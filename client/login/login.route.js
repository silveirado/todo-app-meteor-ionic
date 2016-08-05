import loginTemplate from './login.view.ng.html';

angular.module('todoApp')
  .config(['$stateProvider', loginRoute]);

function loginRoute($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: loginTemplate,
      controller: 'LoginCtrl',
      controllerAs: 'login'
    });
}
