<script setup>
import { RouterLink, RouterView } from "vue-router";

// Open Modal
function openModal() {
  document.getElementById("help-modal").style.display = "block";
}

// Close Modal
function closeModal() {
  document.getElementById("help-modal").style.display = "none";
}
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
          <RouterLink to="#">Products</RouterLink>
          <div class="dropdown-content">
            <RouterLink to="md">Mesoscale</RouterLink>
            <RouterLink to="watches">Watches</RouterLink>
            <RouterLink to="thunderstorm-outlooks"
              >Thunderstorm Outlooks</RouterLink
            >
            <RouterLink to="fire-weather">Fire Weather Outlooks</RouterLink>
          </div>
        </div>
        <div class="dropdown">
          <RouterLink to="#">Forecast Tools</RouterLink>
          <div class="dropdown-content">
            <a
              href="https://www.spc.noaa.gov/exper/mesoanalysis/"
              target="_blank"
              >Mesonalysis</a
            >
            <a href="https://www.spc.noaa.gov/exper/soundings/" target="_blank"
              >Observed Sounding Analysis</a
            >
            <a
              href="https://www.spc.noaa.gov/exper/soundingclimov2/"
              target="_blank"
              >Sounding Climatology</a
            >
            <a href="https://www.spc.noaa.gov/climo/dataviewer/" target="_blank"
              >Lightning Climatology</a
            >
            <a href="https://www.spc.noaa.gov/exper/href/" target="_blank"
              >HREF</a
            >
          </div>
        </div>
        <RouterLink to="weather-safety">Weather Safety</RouterLink>
        <RouterLink to="about">About</RouterLink>
        <button id="help-button" @click="openModal">?</button>
      </nav>
    </div>
  </header>

  <RouterView />

  <!-- Help Modal -->
  <div id="help-modal" class="modal">
    <div class="modal-content">
      <span id="close" class="close" @click="closeModal">&times;</span>
      <h1>SPC Help</h1>
      <p>
        On the landing page, you will find Severe Weather Outlooks, days 1-8.
        Also, you will find other items such as Mesoscale Discussion, Weather
        Watches/Warnings, Thunderstorm Outlooks, and Fire Weather Outlooks
        linked at the bottom of the page.
      </p>
      <br />
      <p>
        Along the navigation bar at the top of the screen, SPC products such as
        specific outlooks, experimental forecast tools, and watches/mesoscale
        discussions are also available. Forecast tools allow for mesoscale
        analysis, sounding observation, and other technical tools for
        atmospheric forecasting.
      </p>
      <br />
      <p>
        <span class="bold">Forecast Discussion:</span> The forecast discussion
        serves as an analysis behind the forecast and will contain technical
        language on the different variables that will affect storm/weather
        pattern development as time progresses.
      </p>
      <br />
      <p class="bold">Forecast Discussion Update Schedule:</p>
      <ul>
        <li>
          Day 1 will recieve 4-5 updates: Midnight, Early Morning, Mid-Morning,
          Noon, Late Afternoon, and in some cases, Early/Late Evening
        </li>
        <li>Days 2-8 will recieve one update anytime throughout the day</li>
      </ul>
      <br />
      <p class="bold">Forecast Discussion Functionality</p>
      <ul>
        <li>
          <span class="bold">Days 1-2:</span> The outlooks for days 1 and 2 have
          an overall categorical risk, as well as a risk for tornadoes, hail,
          and wind
        </li>
        <li>
          <span class="bold"
            >Day 3: The outlook for day 3 has an overall categorical risk that
            shows the severity of storms, as well as a probabilistic outlook
            that shows how likely storms are to happen</span
          >
        </li>
        <li>
          <span class="bold">Days 4-8:</span> The outlooks for days 4-8 contain
          a simpler outlook of how severe storms may be, and is aimed to provide
          an overall outlook on the remainder of the week
        </li>
      </ul>
      <br />
      <p class="bold">Thunderstorm Outlook</p>
      <ul>
        <li>
          The thunderstorm outlook is only available for the day 1 forecast and
          is only probabilistic. It doesn't state hazard types, but instead aims
          to communicate the general thunderstorm risk within 25 miles of any
          given point
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.bold {
  font-weight: bold;
}
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

#help-button {
  background-color: var(--light-blue);
  color: var(--white);
  border: none;
  padding: 0.5rem 0.7rem;
  border-radius: 50px;
  cursor: pointer;
  margin-left: 1rem;
}

#help-button:hover {
  scale: 0.9;
}

/* Modal styles */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: var(--white);
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
