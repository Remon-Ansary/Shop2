<template>
  <div>
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="/">Products </router-link></el-menu-item
      >
      <el-menu-item index="2">
        <router-link to="/create">Add Product</router-link></el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    }
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style scoped></style>
