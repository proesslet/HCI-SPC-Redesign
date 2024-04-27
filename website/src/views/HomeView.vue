<script>
import ConvectiveOutlooks from "../components/ConvectiveOutlooks.vue";

export default {
  name: "HomeView",
  components: {
    ConvectiveOutlooks,
  },
};
</script>

<template>
  <main>
    <ConvectiveOutlooks />
    <div id="products-grid">
      <RouterLink to="/md">
        <div>
          <img src="/md-map.png" />
          <h1>MDs</h1>
        </div>
      </RouterLink>
      <RouterLink to="/watches">
        <div>
          <img src="/tornadowatch.jpg" />
          <h1>Watches</h1>
        </div>
      </RouterLink>

      <RouterLink to="thunderstorm-outlooks">
        <div>
          <img src="/thndrstrmoutlook1.png" />
          <h1>Thunderstorm Outlooks</h1>
        </div> </RouterLink
      >"
      <RouterLink to="fire-weather">
        <div>
          <img
            src="https://www.spc.noaa.gov/partners/outlooks/national/fwody1.png"
          />
          <h1>Fire Weather Outlooks</h1>
        </div>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
#products-grid {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
}

#products-grid div {
  border: 1px solid black;
  width: 325px;
  text-align: center;
  border-radius: 10px;
  position: relative;
}

#products-grid div:hover {
  scale: 1.05;
  cursor: pointer;
}

#products-grid img {
  border-radius: 10px;
  width: 100%;
  opacity: 0.4;
}

#products-grid h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  z-index: 1;
}
</style>
