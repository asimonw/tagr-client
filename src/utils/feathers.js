import feathers from 'feathers/client';
import rest from 'feathers-rest/client';
import hooks from 'feathers-hooks';
// import errors from 'feathers-errors';
import auth from 'feathers-authentication-client';

const client = feathers()
  .configure(rest('http://localhost:3000').fetch(fetch))
  .configure(hooks())
  .configure(auth({
    storage: window.localStorage,
  }));

export default client;
