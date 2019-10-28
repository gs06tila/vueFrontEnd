<template>
  <div>
    <product-list />
  </div>
</template>

<script>
import ProductList from './products/List.vue'
export default {
  name: 'app',
  components: {
    ProductList: ProductList
  },
  data () {
    return {
      time: new Date().toString()
    }
  }
}
</script>
