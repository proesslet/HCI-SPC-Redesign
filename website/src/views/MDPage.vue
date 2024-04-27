<script>
export default {
  name: "MDPage",
};
</script>

<template>
  <div class="main">
    <div class="container">
      <div class="left">
        <h1>Current Mesoscale Discussions</h1>
        <img id="map-img" src="/md-map.png" />
      </div>
      <div class="right">
        <h1>Mesoscale Discussion #540</h1>
        <pre style="text-align: start; color: rgb(0, 0, 0); font-size: 10pt">
   NWS Storm Prediction Center Norman OK
   1133 AM CDT Sat Apr 27 2024

   Areas affected...Central to northeast KS

   Concerning...Severe potential...Tornado Watch likely 

   Valid 271633Z - 271830Z

   Probability of Watch Issuance...95 percent

   SUMMARY...Severe storms are expected to develop during the early to
   mid-afternoon along the surface front across central to northeast
   Kansas. Tornadoes, large hail, and damaging winds will all be
   possible.

   DISCUSSION...16Z surface analysis placed a quasi-stationary front
   across central to northeast KS. A swelling CU field with embedded
   small CBs have initiated along the portion of the front just north
   of SLN to MHK. With minimal warm-sector MLCIN amid 65-66 F surface
   dew points, convective development will increase into early
   afternoon. Primary uncertainty is the degree of sustained convective
   coverage. With the deep-layer shear vector oriented roughly parallel
   to the front, a cluster-type mode may eventually dominate. But given
   that large-scale ascent is relatively weak through the afternoon,
   it&apos;s plausible that a more discrete supercell mode could be
   maintained for several hours. With 40-45 kt south-southwesterly
   low-level flow per the ICT VWP data, all severe hazards will be
   possible, including the potential for a strong tornado or two later
   this afternoon.

   ..Grams.. 04/27/2024</pre
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 1rem;
}

#map-img {
  width: 100%;
  margin: auto;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
}

.left {
  width: 60%;
}

.left h1 {
  text-align: center;
}

.right {
  width: 40%;
}
</style>
