<template>
  <article class="mw5 center bg-white ba br3 b--black-10 pa3 pa4-ns mv3">
    <div v-if="person.github" class="tc">
      <img :src="person.github.profile._json.avatar_url"
          class="br-100 h4 w4">
      <h1 class="f3 mb2">
        {{ person.github.profile.displayName }}
      </h1>
    </div>
  </article>
</template>

<script>
import client from '../utils/feathers';

const userService = client.service('/users');

export default {
  name: 'Person',
  props: ['id'],
  data() {
    return {
      person: {},
    };
  },
  beforeMount() {
    userService.get(this.id)
      .then((result) => {
        this.person = result;
        // eslint-disable-next-line
        console.log(this.person);
      })
      // eslint-disable-next-line
      .catch(error => console.log(error));
  },
};
</script>

<style scoped>

</style>
