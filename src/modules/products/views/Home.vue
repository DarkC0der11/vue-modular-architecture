<template>
  <div>
    <h1 class="mb-3">Products</h1>

    <v-row v-if="isLoading" justify="center" no-gutters class="my-12">
      <v-progress-circular indeterminate color="primary" size="64" />
    </v-row>

    <v-row v-else-if="products.length">
      <v-col cols="4" v-for="product in products" :key="product.id">
        <v-card>
          <v-img height="250" :src="product.image" />

          <v-card-title class="green--text pb-0">
            ${{ product.price }}
          </v-card-title>

          <v-card-title>
            {{ product.title }}
          </v-card-title>

          <v-card-actions>
            <v-spacer />

            <v-btn :to="`/products/${product.id}`" depressed>
              View
            </v-btn>

            <v-btn
              v-if="checkIsInCart(product)"
              class="white--text"
              color="red"
              @click="$store.commit('cart/REMOVE_ITEM', product.id)"
            >
              Remove from cart
            </v-btn>

            <v-btn v-else color="primary" @click="addToCart(product)">
              Add to Cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",

  data: () => ({
    products: [],
    isLoading: false
  }),

  computed: {
    cartItems() {
      return this.$store.state.cart.items;
    }
  },

  async created() {
    this.isLoading = true;

    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      this.products = data;
    } finally {
      this.isLoading = false;
    }
  },

  methods: {
    checkIsInCart(product) {
      return this.cartItems.some(cartItem => cartItem.id === product.id);
    },

    addToCart(product) {
      this.$store.commit("cart/ADD_ITEM", product);
    }
  }
};
</script>
