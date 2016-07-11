{
  angular.module('meganote.users')
    // Camelcase here, dashes in actual tag
    .directive('userLinks', [


      'CurrentUser',
      (CurrentUser) => {

        class UserLinksController {
          user() {
            return CurrentUser.get();
          }
          signedIn() {
            // Always returns a boolean as opposed to a truthy or falsy
            // return !!(this.user()._id)
            // Function located in current-user.service.js
            return CurrentUser.signedIn();
          }
        }

        return {
          scope: {},
          controller: UserLinksController,
          controllerAs: 'vm',
          bindToController: true,
          //Display user's name
          template: `
          <div class="user-links">
            <span ng-show="vm.signedIn()">
            Signed in as {{ vm.user().name }}
            </span>
          </div>
          `
        };
      }

    ]);
}
