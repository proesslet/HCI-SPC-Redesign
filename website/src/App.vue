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
        <!-- Dropdown Menu -->
        <div class="dropdown">
          <RouterLink to="outlooks">Products</RouterLink>
          <div class="dropdown-content">
            <RouterLink to="md">Mesoscale</RouterLink>
            <RouterLink to="watches">Watches</RouterLink>
            <RouterLink to="thunderstorm-outlooks"
              >Thunderstorm Outlooks</RouterLink
            >
            <RouterLink to="fire-weather">Fire Weather Outlooks</RouterLink>
          </div>
        </div>
        <RouterLink to="forecast-tools">Forecast Tools</RouterLink>
        <RouterLink to="weather-safety">Weather Safety</RouterLink>
        <RouterLink to="about">About</RouterLink>
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
  margin-left: 1rem;
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

/* Dropdown menu */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--dark-blue);
  min-width: 160px;
  z-index: 1;
}

.dropdown-content a {
  color: var(--white);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: var(--light-blue);
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* Active link */
</style>
