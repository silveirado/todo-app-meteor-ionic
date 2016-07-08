import { Meteor } from 'meteor/meteor';

angular.module('todoApp')
  .controller('LoginCtrl', ['$scope', '$state', '$ionicPopup', login]);

function login($scope, $state, $ionicPopup) {
	var self = this;
	$scope.entrar = _login.bind(self, $state, $ionicPopup);
}


function _login($state,$ionicPopup) {
	var vm = this;

	if (vm.usuario && vm.senha){
		Meteor.loginWithPassword(vm.usuario, vm.senha, function (error) {
				if (error) {
					$ionicPopup.alert({
				      title: 'ToDo App!',
				      template: error.message
				    });
				} else {
					$state.go('tarefas');
				}
		});
	} else {
		$ionicPopup.alert({
				title: 'ToDo App!',
				template: "Informe seu usuario e senha"
			});
	}
}
