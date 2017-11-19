<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="person in people">
        {{ person.github.profile.displayName }}
      </li>
    </ul>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import client from '../utils/feathers';

const userService = client.service('/users');

export default {
  name: 'PeopleList',
  data() {
    return {
      title: 'tagr',
      people: [],
    };
  },
  methods: {
    logout() {
      client.logout()
        .then(this.$router.push({ path: '/login' }))
        // eslint-disable-next-line
        .catch(console.error);
    },
  },
  beforeMount() {
    userService.find()
      .then((result) => {
        this.people = result.data;
      })
      // eslint-disable-next-line
      .catch(error => console.log(error));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
