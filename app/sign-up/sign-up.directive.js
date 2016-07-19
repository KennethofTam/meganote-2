{
  angular.module('meganote.signUp')
    .directive('signUp', [

<<<<<<< HEAD
      'UsersService',
      (UsersService) => {
=======
      '$state',
      'UsersService',
      ($state, UsersService) => {
>>>>>>> 5f455daac9844dec645640b5d6da7a28e2e13f2f

        class SignUpController {
          constructor() {
            this.user = {};
          }
<<<<<<< HEAD
          submit() {
            UsersService.create(this.user);
=======

          submit() {
            UsersService.create(this.user)
              .then(
                // Requires a value for noteId even if we don't need one
                () => $state.go('notes.form', { noteId: undefined})
              );
>>>>>>> 5f455daac9844dec645640b5d6da7a28e2e13f2f
          }
        }

        return {
          scope: {},
          controller: SignUpController,
          controllerAs: 'vm',
          bindToController: true,
          templateUrl: '/sign-up/sign-up.html',
        };
      }
    ]);
}
