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
    return function (todos, status) {
      var filteredTodos = [];

      angular.forEach(todos, function (todo) {
        if (todo.status == status) {
          filteredTodos.push(todo);
        }
      });

      return filteredTodos;
    };
  });
