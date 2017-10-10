<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="person in people">{{ person.name }}</li>
    </ul>
    <a href="http://localhost:3000/auth/github" class="button">Login With GitHub</a>
    <button @click="findUsers">Request</button>
  </div>
</template>

<script>
import feathers from 'feathers/client';
import rest from 'feathers-rest/client';
import hooks from 'feathers-hooks';
// import errors from 'feathers-errors';
import auth from 'feathers-authentication-client';

const client = feathers()
  .configure(rest('http://localhost:3000').fetch(fetch))
  .configure(hooks())
  .configure(auth());

const userService = client.service('/users');

export default {
  name: 'PeopleList',
  data() {
    return {
      title: 'People',
      people: [
        { name: 'Alex' },
        { name: 'Fanny' },
      ],
    };
  },
  methods: {
    findUsers() {
      userService.find()
        // eslint-disable-next-line
        .then(result => console.log(result))
        // eslint-disable-next-line
        .catch(error => console.log(error));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
