<script>
export default {
  name: "ThunderStormOutlooks",
  data() {
    return {
      selectedOutlook: 0,
    };
  },
};
</script>

<template>
  <div class="main">
    <h1>Thunderstorm Outlooks</h1>

    <div class="btn-section">
      <button @click="selectedOutlook = 0">20Z-00Z</button>
      <button @click="selectedOutlook = 1">00Z-04Z</button>
      <button @click="selectedOutlook = 2">04Z-12Z</button>
    </div>

    <div class="outlook-image">
      <img v-if="selectedOutlook === 0" src="/thstmoutlook-20z.png" />
      <img v-if="selectedOutlook === 1" src="/thstmoutlook-0z.png" />
      <img v-if="selectedOutlook === 2" src="/thstmoutlook-4z.png" />
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 1rem;
}

h1 {
  text-align: center;
}

.btn-section {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

button {
  background-color: var(--light-blue);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  border: none;
  cursor: pointer;
}

.outlook-image {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.outlook-image img {
  border-radius: 10px;
  width: 80%;
}
</style>
