<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
        <div class="container">
          <router-link to="/" class="navbar-brand"
            >VueJS Foods Shop</router-link
          >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" to="/about">CREATE</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { store } from "./store";
export default {
  store,
};
</script>

