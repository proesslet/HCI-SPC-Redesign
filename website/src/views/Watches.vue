<script>
export default {
  name: "Watches",
  data() {
    return {
      selectedWatch: 0,
      watchImages: ["/watch1.png", "/watch2.png", "/watch3.png"],
    };
  },
};
</script>

<template>
  <div class="main">
    <h1 class="center">Active Watches</h1>
    <div class="container">
      <div class="left">
        <img src="/watches-map.png" />
      </div>
      <div class="right">
        <div class="watch-section" @click="selectedWatch = 0">
          <h2>Particularly Dangerous Situation (PDS) Tornado Watch #146</h2>
          <p>Issued: Apr. 27, 2024 at 1740 UTC</p>
          <p>Expires: Apr. 28, 2024 at 0100 UTC</p>
        </div>
        <div class="watch-section" @click="selectedWatch = 1">
          <h2>Tornado Watch #145</h2>
          <p>Issued: Apr. 27, 2024 at 1650 UTC</p>
          <p>Expires: Apr. 28, 2024 at 0000 UTC</p>
        </div>
        <div class="watch-section" @click="selectedWatch = 2">
          <h2>Tornado Watch #144</h2>
          <p>Issued: Apr. 27, 2024 at 1125 UTC</p>
          <p>Expires: Apr. 28, 2024 at 0000 UTC</p>
        </div>
      </div>
    </div>

    <div class="watch-title-section">
      <h1 v-if="selectedWatch === 0">
        Particularly Dangerous Situation Tornado Watch #146
      </h1>
      <h1 v-if="selectedWatch === 1">Tornado Watch #145</h1>
      <h1 v-if="selectedWatch === 2">Tornado Watch #144</h1>
    </div>

    <div class="bottom">
      <div class="bottom-left">
        <img :src="watchImages[selectedWatch]" />
      </div>

      <div class="bottom-right">
        <div class="watch1Text" v-if="selectedWatch === 0">
          <pre style="text-align: start; color: rgb(0, 0, 0); font-size: 10pt">
The NWS Storm Prediction Center has issued a

* Tornado Watch for portions of 
  Western Oklahoma
  Northwest Texas

* Effective this Saturday morning and afternoon from 625 AM until
  100 PM CDT.

* Primary threats include...
  A few tornadoes likely
  Scattered large hail and isolated very large hail events to 2.5
    inches in diameter likely
  Scattered damaging wind gusts to 70 mph possible

SUMMARY...Thunderstorm development is underway across northwest
Texas, and these storms will spread northeastward across western
Oklahoma through the morning.  Despite the time of day, the
environment will favor supercell clusters capable of producing a few
tornadoes, very large hail up to 2.5 inches in diameter, and
isolated damaging gusts of 60-70 mph.

The tornado watch area is approximately along and 50 statute miles
east and west of a line from 40 miles south of Childress TX to 20
miles northeast of Alva OK. For a complete depiction of the watch
see the associated watch outline update (WOUS64 KWNS WOU4).

PRECAUTIONARY/PREPAREDNESS ACTIONS...

REMEMBER...A Tornado Watch means conditions are favorable for
tornadoes and severe thunderstorms in and close to the watch
area. Persons in these areas should be on the lookout for
threatening weather conditions and listen for later statements
and possible warnings.</pre
          >
        </div>

        <div class="watch2Text" v-if="selectedWatch === 1">
          <pre style="text-align: start; color: rgb(0, 0, 0); font-size: 10pt">
The NWS Storm Prediction Center has issued a

* Tornado Watch for portions of 
  Central and Northeast Kansas
  Southeast Nebraska

* Effective this Saturday morning and evening from 1150 AM until
  700 PM CDT.

* Primary threats include...
  A few tornadoes and a couple intense tornadoes likely
  Widespread large hail and scattered very large hail events to
    2.5 inches in diameter likely
  Scattered damaging winds likely with isolated significant gusts
    to 75 mph possible

SUMMARY...Thunderstorms will develop across parts of central and
northeast Kansas through the afternoon in a very moist and unstable
environment.  The strongest cells will be supercells capable of very
large hail and tornadoes.  A few strong tornadoes are possible.

The tornado watch area is approximately along and 80 statute miles
east and west of a line from 70 miles west northwest of Saint Joseph
MO to 25 miles southeast of Medicine Lodge KS. For a complete
depiction of the watch see the associated watch outline update
(WOUS64 KWNS WOU5).

PRECAUTIONARY/PREPAREDNESS ACTIONS...

REMEMBER...A Tornado Watch means conditions are favorable for
tornadoes and severe thunderstorms in and close to the watch
area. Persons in these areas should be on the lookout for
threatening weather conditions and listen for later statements
and possible warnings.</pre
          >
        </div>

        <div class="watch3Text" v-if="selectedWatch === 2">
          <pre style="text-align: start; color: rgb(0, 0, 0); font-size: 10pt">
The NWS Storm Prediction Center has issued a

* Tornado Watch for portions of 
  Western Oklahoma
  Northwest Texas

* Effective this Saturday morning and afternoon from 625 AM until
  100 PM CDT.

* Primary threats include...
  A few tornadoes likely
  Scattered large hail and isolated very large hail events to 2.5
    inches in diameter likely
  Scattered damaging wind gusts to 70 mph possible

SUMMARY...Thunderstorm development is underway across northwest
Texas, and these storms will spread northeastward across western
Oklahoma through the morning.  Despite the time of day, the
environment will favor supercell clusters capable of producing a few
tornadoes, very large hail up to 2.5 inches in diameter, and
isolated damaging gusts of 60-70 mph.

The tornado watch area is approximately along and 50 statute miles
east and west of a line from 40 miles south of Childress TX to 20
miles northeast of Alva OK. For a complete depiction of the watch
see the associated watch outline update (WOUS64 KWNS WOU4).

PRECAUTIONARY/PREPAREDNESS ACTIONS...

REMEMBER...A Tornado Watch means conditions are favorable for
tornadoes and severe thunderstorms in and close to the watch
area. Persons in these areas should be on the lookout for
threatening weather conditions and listen for later statements
and possible warnings.</pre
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.center {
  text-align: center;
}
.main {
  padding: 1rem;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
}

.left {
  width: 50%;
}

.left img {
  width: 100%;
  border-radius: 10px;
}

.right {
  width: 50%;
}

.watch-section {
  border: 1px solid black;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: rgb(235, 235, 235);
}

.watch-section:hover {
  cursor: pointer;
  scale: 1.05;
}

.bottom {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.bottom-left {
  width: 50%;
}

.bottom-left img {
  width: 100%;
  border-radius: 10px;
}

.bottom-right {
  width: 50%;
}

.watch-title-section {
  text-align: center;
  margin-top: 2rem;
}
</style>
