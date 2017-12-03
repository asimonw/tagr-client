<template>
  <nav class="flex justify-between bb bb--white-10 bg-near-black">
    <router-link to="/" class="link white-70 hover-white no-underline flex items-center pa3">
      {{ title }}
    </router-link>
    <div class="flex-grow pa3 flex items-center">
      <a href="#" @click.prevent="logout"
         class="f6 link dib white-70 hover-white mr3 mr4-ns">Log out</a>
    </div>
  </nav>
</template>

<script>
import client from '../utils/feathers';

export default {
  name: 'Navbar',
  data() {
    return {
      title: 'tagr',
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
};
</script>

<style scoped>

</style>
