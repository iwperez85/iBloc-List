'use strict';

/**
 * @ngdoc filter
 * @name iBloc-iTApp.filter:status
 * @function
 * @description
 * # status
 * Filter in the iBloc-iTApp.
 */
angular.module('iBloc-iTApp')
  .filter('status', function () {
    return function (input) {
      console.log(input);
      return input;
    };
  });