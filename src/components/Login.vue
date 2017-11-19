<template>
  <div>
    <h1>{{ title }}</h1>
    <a href="http://localhost:3000/auth/github">Log in with GitHub</a>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      title: 'tagr',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
