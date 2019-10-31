<template>
  <div class="products">
    <b-container>
      <h1 class="mt-4 mb-4">Products</h1>
      <b-row>
        <b-col class="mb-4" sm="6" v-for="product in products"
               :key="product.id">
          <b-media class="product">
            <img slot="aside" src="https://img.pngio.com/huawei-nova-plus-png-mobile-phone-mobile-phone-png-png-378_480.png" width="200px" height="260px"
                 :alt="product.name" @click="view(product)" />
            <h2 class="mt-2" @click="view(product)">{{ product.name }}</h2>
            <p class="mt-4 mb-4" @click="view(product)">
              {{ product.shortDescription }}
            </p>
            <p class="mt-4 mb-4">{{ product.price }}$</p>
            <b-button variant="primary">Add to cart</b-button>
          </b-media>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ProductDetails from './Details'
export default {
  name: 'product-list',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  components: {
    ProductDetails: ProductDetails
  },
  methods: {
    view (product) {
      this.$router.push(`/products/${product.slug}`)
    }
  }
}
</script>

<style scoped>
  .product {
    border: 2px solid #eee;
    background: linear-gradient(359.27deg, rgba(255, 255, 255, 0) -79.16%, #FFFFFF 65.35%), #595959;
  }
  img,
  h2 {
    cursor: pointer;
  }
</style>
