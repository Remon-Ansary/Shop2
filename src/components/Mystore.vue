<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Made By Getters</h1>
  <div v-for='getproduct in getproducts' :key='getproduct.id'>
    {{getproduct.id}} {{getproduct.title}} {{getproduct.price}}
    </div>
    <h1>Made By Actions</h1>
  <div v-for='user in users' :key='user.id'>
    {{user.id}} {{user.title}} {{user.price}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'myStore',
  data () {
    return {
      msg: 'Welcome to my Vuex Store'
    }
  },
  computed: {
    getproducts() {
    return this.$store.getters.allProducts
    },
    users() {
    return this.$store.state.users
    }
  },
  mounted() {
    this.$store.dispatch("getproducts");
  }
}
</script>