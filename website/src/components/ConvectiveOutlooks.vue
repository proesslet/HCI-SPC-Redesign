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
        "https://www.spc.noaa.gov/partners/outlooks/national/swody4_PROB.png",
        "https://www.spc.noaa.gov/partners/outlooks/national/swody5_PROB.png",
        "https://www.spc.noaa.gov/partners/outlooks/national/swody6_PROB.png",
        "https://www.spc.noaa.gov/partners/outlooks/national/swody7_PROB.png",
        "https://www.spc.noaa.gov/partners/outlooks/national/swody8_PROB.png",
      ],
    };
  },
  methods: {
    // Add id to button when clicked and remove id from other buttons
    // Add event listener to button to change image based on button clicked
    addActiveButton() {
      const buttons = document.querySelectorAll(".day-selector button");
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          buttons.forEach((btn) => btn.removeAttribute("id"));
          button.setAttribute("id", "active");
        });
      });
    },
  },
  mounted() {
    this.addActiveButton();
  },
};
</script>

<template>
  <div id="parent-container">
    <div>
      <h1>Severe Weather Outlooks</h1>
      <div class="day-selector">
        <button @click="selectedDay = 1">Day 1</button>
        <button @click="selectedDay = 2">Day 2</button>
        <button @click="selectedDay = 3">Day 3</button>
        <button @click="selectedDay = 4">4</button>
        <button @click="selectedDay = 5">5</button>
        <button @click="selectedDay = 6">6</button>
        <button @click="selectedDay = 7">7</button>
        <button @click="selectedDay = 8">8</button>
      </div>
      <img :src="severeOutlookImages[selectedDay - 1]" alt="" />
      <div class="bottom-selectors">
        <div v-if="selectedDay <= 2">
          <button @click="">Categorical</button>
          <button @click="">Tornado</button>
          <button @click="">Hail</button>
          <button @click="">Wind</button>
        </div>
        <div v-if="selectedDay == 3">
          <button @click="">Categorical</button>
          <button @click="">Probabilistic</button>
        </div>
      </div>
    </div>

    <!-- Outlook Discussion -->
    <div id="discussion-text-container">
      <h1>Forecast Outlook Discussion</h1>
      <div v-if="selectedDay == 1">
        <p>
          Day 1 Convective Outlook <br />
          NWS Storm Prediction Center Norman OK 0252 PM <br />
          CDT Sun Apr 14 2024
        </p>
        <br />
        <p>Valid 142000Z - 151200Z</p>
        <br />
        <p>
          ...THERE IS AN ENHANCED RISK OF SEVERE THUNDERSTORMS FROM EASTERN OHIO
          EAST-NORTHEASTWARD ACROSS PENNSYLVANIA...
        </p>
        <br />
        <p>
          ...SUMMARY... Severe thunderstorms are expected to develop late this
          afternoon in a narrow corridor across the upper Ohio Valley into
          Pennsylvania and vicinity. Damaging winds should be the main threat.
          Severe hail and perhaps a couple of tornadoes also appear possible as
          this activity spreads southeastward into this evening.
        </p>
        <br />
        <p>
          ...Discussion... Aside from minor line tweaks in the northern Ohio
          area, the severe-weather risk areas remain unchanged, with prior
          forecast reasoning -- highlighting development of strong to severe
          storms this afternoon -- still valid.
        </p>
        <br />
        <p>
          For additional short-term forecast information in this region, please
          refer to SWOMCD #435.
        </p>

        <br />
        <p>
          Elsewhere, the portion of the thunder area across Nevada is being
          removed in this update.
        </p>
        <br />
        <p>..Goss.. 04/14/2024</p>
        <br />
        <p>.PREV DISCUSSION... /ISSUED 1129 AM CDT Sun Apr 14 2024/</p>
        <br />
        <p>
          ...Ohio Valley into the Mid-Atlantic and Northeast... Surface analysis
          late this morning shows the northeastern rim of 50s dewpoints over
          northern KY/southwest OH being quickly advected east-northeastward on
          a 40-kt west-southwesterly LLJ. The Upper OH Valley is located
          immediately downstream of a mid-level vorticity maximum over Lake
          Michigan. This disturbance will continue to move into the base of the
          larger-scale eastern Canada/Northeast U.S. mid-level trough. An
          accompanying weak low will migrate eastward from the Great Lakes
          across NY, while a weak cold front extends to the west-southwest and
          is forecast to push east-southeast across the Lower Great Lakes before
          weakening and becoming draped across the Upper OH Valley late.
        </p>
        <br />
        <p>
          Continued low-level moist advection will likely result in upper 40s to
          low 50s surface dewpoints within a narrow corridor along and south of
          a cold front from OH into PA and southern NY. Steep 700-500 mb lapse
          rates due in part to cool mid levels (i.e., -18 deg C at 500 mb) and
          heating will yield 500-1250 J/kg MLCAPE by mid-late afternoon.
          Surface-based thunderstorm initiation across this region will likely
          be delayed until 20-21Z or later, as lingering MLCIN and a cap
          gradually erodes. Initial development should be focused along the
          front across parts of eastern OH into western/central PA, with
          additional development eventually occurring into eastern PA and parts
          of southern NY. Given strong deep-layer shear and favorable lapse
          rates, large hail may occur with the more robust cores initially. Some
          threat for a couple of tornadoes may also exist with quasi-discrete
          supercells early in the thunderstorm life cycle, as sufficient
          low-level shear will be present for updraft rotation. But, with the
          surface front aligned mostly parallel to the enhanced westerly
          low/mid-level flow, upscale growth into small bowing clusters will
          likely occur as additional storms develop and cold pools merge as the
          band of storms moves southeastward. Scattered damaging winds will then
          likely become the main threat with these clusters through the early
          evening. As instability wanes after sunset, the wind threat will
          gradually decrease with southward/eastward extent.
        </p>
      </div>
      <p v-if="selectedDay == 2"></p>
      <p v-if="selectedDay == 3"></p>
      <p v-if="selectedDay == 4"></p>
      <p v-if="selectedDay == 5"></p>
      <p v-if="selectedDay == 6"></p>
      <p v-if="selectedDay == 7"></p>
      <p v-if="selectedDay == 8"></p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

#parent-container {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 3rem;
  height: 90vh;
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
  justify-content: center;
}

.day-selector button {
  background-color: var(--light-blue);
  color: var(--white);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.bottom-selectors {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.bottom-selectors button {
  background-color: var(--light-blue);
  color: var(--white);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 1rem;
  margin-top: 0;
}

#active {
  background-color: var(--dark-blue);
}

#discussion-text-container {
  overflow: scroll;
}
</style>
