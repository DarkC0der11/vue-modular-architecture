<template>
  <v-app>
    <v-app-bar app dense flat outlined>
      <v-tabs>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/products">Products</v-tab>
        <v-tab to="/cart">Cart</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
