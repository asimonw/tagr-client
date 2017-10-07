<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="person in people">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
