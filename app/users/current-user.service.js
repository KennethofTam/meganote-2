{
  angular.module('meganote.users')
    .service('CurrentUser', ['$window', $window => {

      class CurrentUser {
        constructor() {
          this.user = JSON.parse($window.localStorage.getItem('currentUser'));
        }
        set(user) {
          this.user = user;
          $window.localStorage.setItem('currentUser', JSON.stringify(this.user));
        }
        get() {
<<<<<<< HEAD
          // Avoid undefined errors but always return an object
=======
>>>>>>> 5f455daac9844dec645640b5d6da7a28e2e13f2f
          return this.user || {};
        }
        clear() {
          this.user = undefined;
          $window.localStorage.removeItem('currentUser');
        }
<<<<<<< HEAD
=======
        signedIn() {
          // Always returns a boolean as opposed to a truthy or falsy
          return !!this.get()._id;
        }
>>>>>>> 5f455daac9844dec645640b5d6da7a28e2e13f2f
      }
      return new CurrentUser();

    }]);
}
