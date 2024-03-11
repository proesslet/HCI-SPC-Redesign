<script>
export default {
  name: "ConvectiveOutlooks",
};
</script>

<template>
  <div id="parent-container">
    <h3>Convective Outlooks</h3>
    <div class="day-selector">
      <button>Day 1</button>
      <button>Day 2</button>
      <button>Day 3</button>
    </div>
    <img src="/samplemaps/day3otlk_0730.gif" alt="" />
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
