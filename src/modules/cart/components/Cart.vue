<template>
  <div class="cart">
    <ul>
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
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  position: fixed;
  right: 24px;
  top: 24px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 5px 5px rgba(#000, 0.1);
  padding: 12px;
}
</style>
