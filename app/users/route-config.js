{
  angular.module('meganote.users')
    .config(usersConfig);

  usersConfig.$inject = ['$stateProvider'];
  function usersConfig($stateProvider) {
    $stateProvider

      .state('sign-up', {
        url: '/sign-up',
        template: '<sign-up></sign-up>',
<<<<<<< HEAD
=======
      })

      .state('sign-in', {
        url: '/sign-in',
        template: '<sign-in></sign-in>',
      })

      .state('user-profile', {
        url: '/profile',
        template: '<user-profile></user-profile>',
>>>>>>> 5f455daac9844dec645640b5d6da7a28e2e13f2f
      });
  }
}
