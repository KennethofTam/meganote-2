{
  angular.module('meganote.users')
    .service('UsersService', [
<<<<<<< HEAD
=======

>>>>>>> 5f455daac9844dec645640b5d6da7a28e2e13f2f
      '$http',
      'API_BASE',
      'AuthToken',
      'CurrentUser',
<<<<<<< HEAD
      ($http, API_BASE, AuthToken, CurrentUser) => {
=======
      'Flash',
      ($http, API_BASE, AuthToken, CurrentUser, Flash) => {
>>>>>>> 5f455daac9844dec645640b5d6da7a28e2e13f2f

        const apiURI = `${API_BASE}users/`;

        class UsersService {

          // Sign Up
          create(user) {
            return $http.post(apiURI, {
              user,
            })
              .then(
                res => {
                  AuthToken.set(res.data.authToken);
                  CurrentUser.set(res.data.user);
<<<<<<< HEAD
                }
              );
          }

        }
=======
                  Flash.create('info', 'Welcome new user!');
                },
                () => Flash.create('danger', 'Whoops! Non-matching passwords!')
              );
          }

          // Update profile
          update(user) {
            return $http.put(`${apiURI}${user._id}`, {
              user
            })
             .then(
               res => CurrentUser.set(res.data.user)
             );
          }

         // Sign In
          login(user) {
            return $http.post(`${API_BASE}sessions`, {
              user
            })
               .then(
                 res => {
                   AuthToken.set(res.data.authToken);
                   CurrentUser.set(res.data.user);
                 }
               );
          }

         }
>>>>>>> 5f455daac9844dec645640b5d6da7a28e2e13f2f
        return new UsersService();

      }
    ]);
}
