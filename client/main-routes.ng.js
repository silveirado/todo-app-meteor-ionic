import angular from 'angular';

angular
  .module('todoApp')
  .config(['$urlRouterProvider', config]);

function config($urlRouterProvider){
	$urlRouterProvider.otherwise('/login');
}
