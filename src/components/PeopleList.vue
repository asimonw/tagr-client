<template>
  <div>
    <nav class="flex justify-between bb bb--white-10 bg-near-black">
      <a href="/" class="link white-70 hover-white no-underline flex items-center pa3">
        {{ title }}
      </a>
      <div class="flex-grow pa3 flex items-center">
        <a href="#" @click.prevent="logout"
           class="f6 link dib white-70 hover-white mr3 mr4-ns">Log out</a>
      </div>
    </nav>
    <ul class="list pl0 mt0 measure center">
      <li v-for="person in people"
          class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
        <img :src="person.github.profile._json.avatar_url"
             class="w2 h2 w3-ns h3-ns br-100">
        <div class="pl3 flex-auto black-70">
          {{ person.github.profile.displayName }}
        </div>
      </li>
    </ul>
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
