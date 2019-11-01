<template>
  <div class="page">
    <product-details :product="product" />
  </div>
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
  beforeRouteEnter (to, from, next) {
    fetch(`https://task30backend.herokuapp.com/api/products/${to.params.slug}`)
      .then(response => {
        return response.json()
      })
      .then(product => {
        console.log(product)
        next(vm => {
          vm.setData(product)
        })
      })
  },
  methods: {
    setData (product) {
      this.product = product[0]
    }
  }
}
</script>

<style scoped>

</style>
