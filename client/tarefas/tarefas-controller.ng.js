import { Meteor } from 'meteor/meteor';
import validate from 'validate.js';
import _ from 'lodash';

angular.module('todoApp')
  .controller('TarefasCtrl', ['$scope', '$ionicPopup', tarefas]);

var TAREFA_VALIDATE = {
		"texto" : {
			"presence": {
				"message": "^Informe o texto para sua tarefa"
			}
		},
		"prioridade": {
			"presence": {
				"message": "^Informe a prioridade da tarefa"
			}
		}
	};

function tarefas($scope, $ionicPopup) {
	var self = this;

	$scope.tarefas = [];
	$scope.tarefa = {};

	Meteor.subscribe("tarefas", function(){
		Tarefas
				.find()
				.observe({
						added: function (tarefa) {
							$scope.tarefas.push(tarefa);
							Util.$apply();
						},
						changed: function (tarefa) {
							var i = _.findIndex($scope.tarefas, function (tar) {
								return tar._id === tarefa._id;
							});
							$scope.tarefas.splice(i, 1, tarefa);
							Util.$apply();
						},
						removed: function (tarefa) {
							var i = _.findIndex($scope.tarefas, function (tar) {
								return tar._id === tarefa._id;
							});
							$scope.tarefas.splice(i, 1);
							Util.$apply();
						}
				});
	});

	$scope.adicionar = _adicionar.bind(self, $scope, $ionicPopup)
	$scope.atualizar = _atualizar.bind(self, $scope)
	$scope.limpar = _limpar.bind(self, $scope);
}

function _limpar($scope) {
	_.each($scope.tarefas, function (tarefa) {
		if (tarefa.concluida){
			Tarefas.remove({"_id": tarefa._id});
		}
	})
}

function _atualizar($scope, tarefa) {
	if (tarefa.concluida) {
			Tarefas.update({
					"_id": tarefa._id
			}, {
					$set: {
							concluida: true
					}
			});
	} else {
			Tarefas.update({
					"_id": tarefa._id
			}, {
					$unset: {
							concluida: true
					}
			});
	}
}

function _adicionar($scope, $ionicPopup, tarefa) {
	validate
		.async(tarefa, TAREFA_VALIDATE)
		.then(function() {
			Tarefas.insert(tarefa);
			$scope.tarefa = {};
			Util.$apply();
		}, function (validationErrors) {
			var errors = [];
			_.each(validationErrors, function (field) {
				errors = errors.concat(field);
			});
			$ionicPopup.alert({
					title: 'ToDo App!',
					template: errors.join('<br>')
				});
		});
}
