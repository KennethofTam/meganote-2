{
  angular.module('meganote.signUp')
    .directive('signUp', [

      '$state',
      'UsersService',
      ($state, UsersService) => {

        class SignUpController {
          constructor() {
            this.user = {};
          }

          submit() {
            UsersService.create(this.user)
              .then(
                // Requires a value for noteId even if we don't need one
                () => $state.go('notes.form', { noteId: undefined})
              );
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
