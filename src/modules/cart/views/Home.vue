<template>
  <div>
    <h1 class="mb-3">Cart</h1>

    <div v-if="isCartEmpty">
      No items in the cart.
    </div>

    <template v-else>
      <v-list>
        <v-list-item v-for="item in items" :key="item.id">
          <v-list-item-avatar>
            <v-img :src="item.image" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>

            <v-list-item-subtitle class="green--text">
              $ {{ item.price }}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn
              @click="$store.commit('cart/REMOVE_ITEM', item.id)"
              color="red"
              class="white--text"
            >
              Remove
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-divider />

      <div class="mt-3 green--text text-center text-h6">
        Total: $ {{ totalPrice }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Cart",

  computed: {
    items() {
      return this.$store.state.cart.items || [];
    },

    isCartEmpty() {
      return this.items.length === 0;
    },

    totalPrice() {
      const price = this.items.reduce((acc, product) => acc + product.price, 0);
      return price.toFixed(2);
    }
  }
};
</script>
