<script>
export default {
  name: "FireWeather",
  data() {
    return {
      selectedOutlook: 0,
    };
  },
};
</script>

<template>
  <div class="main"></div>
  <h1>Fire Weather Outlooks</h1>

  <div class="container">
    <div class="outlook-image">
      <div class="btn-section">
        <button @click="selectedOutlook = 0">Day 1</button>
        <button @click="selectedOutlook = 1">Day 2</button>
        <button @click="selectedOutlook = 2">Day 3</button>
      </div>
      <img v-if="selectedOutlook === 0" src="/fire-1.png" />
      <img v-if="selectedOutlook === 1" src="/fire-2.png" />
      <img v-if="selectedOutlook === 2" src="/fire-3.png" />
    </div>

    <div class="outlook-text">
      <div class="text" v-if="selectedOutlook === 0">
        <pre style="text-align: start; color: rgb(0, 0, 0); font-size: 10pt">
Day 1 Fire Weather Outlook  
   NWS Storm Prediction Center Norman OK
   1056 AM CDT Sat Apr 27 2024

   Valid 271700Z - 281200Z

   ...CRITICAL FIRE WEATHER AREA FOR PORTIONS OF THE SOUTHERN HIGH
   PLAINS...

   The previous forecast remains on track, with some trimming of the
   fire weather highlights made where clouds and/or low-level moisture
   is expected to persist through the day. Clear skies are present
   behind the dryline, which is currently located over the eastern
   Texas Panhandle. RH is already dropping into the 15-25 percent range
   as the boundary layer mixes. With further daytime heating, surface
   RH should drop into the 10-20 percent range as westerly sustained
   surface winds approach 20+ mph, warranting the continuation of
   Critical highlights over portions of the southern High Plains.

   ..Squitieri.. 04/27/2024

   .PREV DISCUSSION... /ISSUED 0158 AM CDT Sat Apr 27 2024/

   ...Synopsis...
   A strong mid-level jet streak will round the base of the western
   trough today, with strong lee cyclogenesis resulting across the High
   Plains. Strengthening flow amid very dry conditions will lead to
   Elevated to Critical fire weather concerns across portions of the
   southern High Plains into the central High Plains.

   ...Southern and Central High Plains...
   A deeply mixed air mass is expected to be in be in place by this 
   afternoon across portions of eastern New Mexico into and eastward
   into the Oklahoma/Texas Panhandles into southwestern Kansas. In
   these regions, sustained surface winds 20-30 mph will overlap
   afternoon relative humidity reductions to around 5-10 percent. The
   Critical area was expanded further into southwestern Kansas, given
   recent trends. While some spotty Extremely Critical conditions are
   possible, fuels do not yet support inclusion of an Extremely
   Critical area at this time.</pre
        >
      </div>

      <div class="text" v-if="selectedOutlook === 1">
        <pre style="text-align: start; color: rgb(0, 0, 0); font-size: 10pt">
Valid 281200Z - 291200Z

The previous forecast (see below) remains on track, with only slight
modifications made to the ongoing Elevated highlights to reflect the
latest guidance consensus.

..Squitieri.. 04/27/2024

.PREV DISCUSSION... /ISSUED 0159 AM CDT Sat Apr 27 2024/

...Synopsis...
Elevated fire weather conditions will be possible Sunday afternoon
across eastern New Mexico and far western Texas, where a belt of
increased mid-level flow will be in place with weak surface
troughing. This will allow for relative humidity reductions to
around 10-20 percent amid surface winds 10-15 mph (locally as high
as 20 mph). Fuels in this region will likely see drying on D1
Saturday, but overall coverage of any Critical winds should remain
low enough to preclude the need for a Critical delineation at this
time.</pre
        >
      </div>

      <div class="text" v-if="selectedOutlook === 2">
        <pre style="text-align: start; color: rgb(0, 0, 0); font-size: 10pt">
Valid 291200Z - 051200Z

Zonal mid-level flow will become established across the CONUS, with
multiple embedded shortwave troughs expected to traverse the
northern half of the CONUS for the upcoming week. During the middle
into late week period, surface lee troughing will encourage dry and
occasionally breezy conditions across the southern High Plains as a
surface cold front sweeps across the northern Rockies into the
Plains.

Guidance consensus shows potential for at least Elevated equivalent
dry and breezy conditions along/behind the surface cold front across
the northern High Plains for Day 4 (Tuesday). However, fuels appear
modestly receptive to fire spread, precluding the addition of
Critical probabilities at this time. Similarly, Elevated equivalent
dry/windy conditions may also accompany the post-dryline environment
over eastern New Mexico into far western Texas. However, questions
remain this far in advance how strong the post-dryline winds will
become, with Critical probabilities withheld for now.</pre
        >
      </div>
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
  margin-bottom: 1rem;
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

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
}

.outlook-text {
  margin-top: 3rem;
}
</style>
