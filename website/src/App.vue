<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- Todo: Add NOAA and SPC logos -->
      <h1>Storm Prediction Center</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
/* Navbar styles */
header {
  background-color: var(--dark-blue);
  padding: 2rem 2rem;
}

header h1 {
  color: var(--white);
  font-size: 2rem;
  margin: 0;
}

header nav a {
  color: var(--white);
  text-decoration: none;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
