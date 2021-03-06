{
  angular.module('meganote.users')
    // Camelcase here, dashes in actual tag
    .directive('userLinks', [

      'AuthToken',
      'CurrentUser',
      (AuthToken, CurrentUser) => {

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
          logout() {
            CurrentUser.clear();
            AuthToken.clear();
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
             <a ui-sref="user-profile">Signed in as {{ vm.user().name }}</a>
             |
             <a ui-sref="sign-up" ng-click="vm.logout()">Logout</a>
           </span>
           <span ng-show="!vm.signedIn()">
             <a ui-sref="sign-up">Sign up for Meganote today!</a>
           </span>
         </div>
         `
        };
      }
    ]);
}
