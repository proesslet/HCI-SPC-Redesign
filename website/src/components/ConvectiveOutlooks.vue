<script>
export default {
  name: "ConvectiveOutlooks",
  data() {
    return {
      selectedDay: 1,
      severeOutlookImages: [
        "https://spc.noaa.gov/partners/outlooks/national/swody1.png",
        "https://spc.noaa.gov/partners/outlooks/national/swody2.png",
        "https://spc.noaa.gov/partners/outlooks/national/swody3.png",
      ],
    };
  },
};
</script>

<template>
  <div id="parent-container">
    <h3>Severe Weather Outlooks</h3>
    <div class="day-selector">
      <button @click="selectedDay = 1">Day 1</button>
      <button @click="selectedDay = 2">Day 2</button>
      <button @click="selectedDay = 3">Day 3</button>
    </div>
    <img :src="severeOutlookImages[selectedDay - 1]" alt="" />
  </div>
</template>

<style scoped>
#parent-container {
  padding: 1rem;
  width: fit-content;
}

#parent-container img {
  border: 1px solid var(--black);
  border-radius: 10px;
  width: 50rem;
}

.day-selector {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.day-selector button {
  background-color: var(--light-blue);
  color: var(--white);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>
