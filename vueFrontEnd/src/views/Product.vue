<template>
  <product-details :product="product" />
</template>

<script>
import ProductDetails from '../components/products/Details'
export default {
  name: 'Product',
  components: {
    ProductDetails
  },
  data () {
    return {
      product: {}
    }
  },
  mounted () {
    const slug = this.$route.params.slug

    fetch(`http://192.168.0.15:8080/api/products/${slug}`)
      .then(response => {
        return response.json()
      })
      .then(product => {
        this.product = product[0]
      })
  }
}
</script>

<style scoped>

</style>
