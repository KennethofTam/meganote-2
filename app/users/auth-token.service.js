{
  angular.module('meganote.users')
    .service('AuthToken', ['$window', $window => {
<<<<<<< HEAD
=======

>>>>>>> 5f455daac9844dec645640b5d6da7a28e2e13f2f
      class AuthToken {
        constructor() {
          this.token = $window.localStorage.getItem('authToken');
        }
        set(token) {
          this.token = token;
          $window.localStorage.setItem('authToken', this.token);
        }
        get() {
          return this.token;
        }
        clear() {
          this.token = undefined;
          $window.localStorage.removeItem('authToken');
        }
      }
      return new AuthToken();
<<<<<<< HEAD
=======

>>>>>>> 5f455daac9844dec645640b5d6da7a28e2e13f2f
    }]);
}
