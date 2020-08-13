<template>
  <div>
    <h1>Browse Parts</h1>
    <ul class="menu">
      <li><router-link exact to="/parts/browse/heads">Heads</router-link></li>
      <li><router-link exact to="/parts/browse/arms">Arms</router-link></li>
      <li><router-link exact to="/parts/browse/torsos">Torsos</router-link></li>
      <li><router-link exact to="/parts/browse/bases">Bases</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'BrowseParts',
};
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  .menu {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
    font-size: 20px;
  }
  ul {
    list-style-type: none;
  }
  a {
    color: palevioletred;
  }
  .router-link-active {
      color: red;
  }
</style>
