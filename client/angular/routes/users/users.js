angular.module('app').config(function ($routeProvider) {
  $routeProvider
    .when('/users', {
      templateUrl: 'routes/users/users.html',
      controller: 'UsersCtrl',
      controllerAs: 'UsersCtrl',
      resolve: {
        users: function (User) {
          return User.findAll();
        }
      }
    })
    .when('/users/:id', {
      templateUrl: 'routes/users/user.html',
      controller: 'UserCtrl',
      controllerAs: 'UserCtrl',
      resolve: {
        user: function ($route, User) {
          return User.find($route.current.params.id);
        }
      }
    });
});
