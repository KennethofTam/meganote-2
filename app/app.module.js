{
  angular.module('meganote', [
    'ui.router',
    'ngFlash',
    'textAngular',
    'meganote.notes',
    'meganote.notesForm',
    'meganote.signUp',
<<<<<<< HEAD
=======
    'meganote.signIn',
>>>>>>> 5f455daac9844dec645640b5d6da7a28e2e13f2f
    'meganote.users'
  ])
    .config(config);

  config.$inject = ['$urlRouterProvider'];
  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes/');
  }
}
