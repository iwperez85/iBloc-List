'use strict';

angular.module('iBloc-iTApp')
  .controller('MainCtrl', function ($scope, $http, $firebaseArray) {
    var firebaseRef = new Firebase("https://ibloc-it.firebaseio.com");

    $scope.todos = $firebaseArray(firebaseRef);
    initTodo();

    $scope.todos.$loaded().then(function(){
      console.log('items are loaded', $scope.todos);

      angular.forEach($scope.todos, function (todo) {
        var createdAt = moment.unix(todo.createdAt),
            difference = moment().diff(createdAt, "days");

        if (difference > 7) {
          todo.status = 'expired';
          $scope.todos.$save(todo);
        }
      });
    });

    $scope.addTodo = function () {
      $scope.todo.createdAt = moment().unix();//moment().subtract(moment.duration(3, 'd')).unix();//
      $scope.todos.$add($scope.todo);
      initTodo();
    };

    $scope.changeTodoStatus = function (todo, status) {
      todo.status = status;
      $scope.todos.$save(todo);
    };

    $scope.timeFromNow = function (todo) {
      return moment.unix(todo.createdAt).fromNow();
    };

    var findItemsOfStatus = function (status) {
      var items = [];

      angular.forEach($scope.todos, function (todo) {
        if (todo.status == status)
          items.push(todo);
      });

      return items;
    };

    $scope.todos.$watch(function (event) {
      var activeItems = findItemsOfStatus('active').length,
          completedItems = findItemsOfStatus('completed').length,
          totalItems = activeItems + completedItems;

      $scope.completedPercentage = parseInt( (completedItems / totalItems) * 100 );
      console.log($scope.completedPercentage);
    });

    function initTodo () {
      $scope.todo = {
        text: "",
        priority: "high",
        status: "active"
      };
    }
});
