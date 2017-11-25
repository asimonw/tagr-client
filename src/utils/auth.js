import client from '../utils/feathers';

// const JWT_TOKEN_ID = 'feathers-jwt';

// const getToken = () => window.localStorage.getItem(JWT_TOKEN_ID);
// const isLoggedIn = () => !!getToken();
const requireAuth = (to, from, next) => {
  client.passport.getJWT()
    .then(token => client.passport.verifyJWT(token))
    .then((payload) => {
      if (client.passport.payloadIsValid(payload)) {
        next();
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath },
        });
      }
    })
    .catch(() => next({
      path: '/login',
      query: { redirect: to.fullPath },
    }));
};

export default {
  // getToken,
  // isLoggedIn,
  requireAuth,
};
