<template>
  <div>
    <Navbar />

    <div class="container">
   
      
          <h3>Add Item</h3>
        </div>
        <form @submit="onSubmit">       
             <input type="text" v-model="image" placeholder="Add Todo" />   
             <input type="text" v-model="title" placeholder="Add Todo" />   
              <input type="text" v-model="price" placeholder="Add Todo" />    
          <input type="submit" value="Submit" />
        </form>

  </div>
</template>

<script>
import { mapActions } from "vuex"
import Navbar from "./Navbar.vue"
export default {
  name: "CreateProduct",

  components: {
    Navbar: Navbar,
  },
  data() {
    return {
      image: '',
      title: '',
      price: '',
    
    
    }
  },
  methods: {
    ...mapActions(["createProduct"]),
    onSubmit(event) {
      event.preventDefault()
      this.createProduct(this.image, this.title, this.price)
     
     
    
    },
  },
}
</script>

<style scoped></style>
