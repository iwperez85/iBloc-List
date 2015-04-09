'use strict';

angular.module('iBloc-iTApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('completed', {
        url: '/completed',
        templateUrl: 'app/main/completed.html',
        controller: 'MainCtrl'
      })
      .state('expired', {
        url: '/expired',
        templateUrl: 'app/main/expired.html',
        controller: 'MainCtrl'
      });
  });