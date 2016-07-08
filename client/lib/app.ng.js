
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import angular from 'angular';
import { Meteor } from 'meteor/meteor';

angular.module('todoApp', [
  'angular-meteor',
  'ionic'
]);

function onReady() {
  console.log('TODO APP START');
  angular.bootstrap(document, ['todoApp'], {
    strictDi: true
  });
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
