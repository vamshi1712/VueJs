<template>
  <div id="app">
    <div class="content">
      <div class="header inline-flex">
        <div class="left">
          <h3>Build a Bot</h3>
        </div>
        <div class="links">
          <router-link class="router-lnk" to="/" exact>Home</router-link>
          <router-link class="router-lnk" to="/build" exact>Build</router-link>
          <router-link class="router-lnk cart inline-flex" to="/cart" exact>
          Cart
          <div class="cart-items">
            {{cart.length}}
          </div>
          </router-link>
        </div>
      </div>
      <div class="">
        <!-- <aside class="aside">
          <router-view name="sidebar" />
        </aside> -->
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    cart() {
      return this.$store.state.robots.cart;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}

.inline-flex {
  display: flex;
}

.router-lnk{
  margin: 10px;
  text-decoration: none;
  color: inherit;
  background-color: #ddd;
}

.router-link-active{
  color: white;
}

.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}

.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}

.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}

</style>
