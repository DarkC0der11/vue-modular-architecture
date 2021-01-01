<template>
  <div>
    <v-row v-if="isLoading" justify="center" no-gutters class="my-12">
      <v-progress-circular indeterminate color="primary" size="64" />
    </v-row>

    <template v-else-if="product">
      <v-row>
        <v-col cols="4">
          <v-img height="auto" :src="product.image" width="50%" />
        </v-col>

        <v-col cols="8">
          <div class="green--text pb-0 text-h6">${{ product.price }}</div>

          <h1 class="mb-3">
            {{ product.title }}
          </h1>

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
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Product",

  data: () => ({
    product: null,
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
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${this.$route.params.id}`
      );
      this.product = data;
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
