<template>
  <div>
    <ul class="list pl0 mt0 measure center">
      <li v-for="person in people"
          class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
        <img :src="person.github.profile._json.avatar_url"
             class="w2 h2 w3-ns h3-ns br-100">
        <div class="pl3 flex-auto">
          <router-link
              :to="{ name: 'Person', params: { id: person._id } }"
              class="link black-70 hover-black">
            {{ person.github.profile.displayName }}
          </router-link>
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
      people: [],
    };
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

<style scoped>

</style>
