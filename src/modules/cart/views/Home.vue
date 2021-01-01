<template>
  <div>
    <h1>Cart</h1>

    <div v-if="isCartEmpty">
      No items in the cart.
    </div>

    <ul v-else>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}

        <button @click="$store.commit('cart/REMOVE_ITEM', item.id)">
          Remove
        </button>
      </li>
    </ul>
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
    }
  }
};
</script>
