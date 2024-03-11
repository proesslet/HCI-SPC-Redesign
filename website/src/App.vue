<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- Todo: Add NOAA and SPC logos -->
      <div id="titlediv">
        <img src="/noaalogo.png" alt="NOAA logo" />
        <img src="/nwslogo.png" alt="NWS logo" />
        <div>
          <h1>Storm Prediction Center</h1>
          <h3>NOAA / National Weather Service</h3>
        </div>
      </div>

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
  padding: 2rem 1rem;
  color: var(--white);
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

#titlediv {
  display: flex;
  align-items: center;
  gap: 1rem;
}

img {
  height: 70px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
