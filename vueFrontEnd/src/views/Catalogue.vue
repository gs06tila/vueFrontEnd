<template>
  <product-list :products="products"/>
</template>

<script>
import ProductList from '../components/products/List'
export default {
  name: 'Catalogue',
  components: {
    ProductList
  },
  data () {
    return {
      products: []
    }
  },
  mounted () {
    fetch(`http://192.168.0.15:8080/api/productses`)
      .then(response => {
        return response.json()
      })
      .then(products => {
        this.products = products._embedded.productses
      })
  }
}
</script>

<style scoped>

</style>
