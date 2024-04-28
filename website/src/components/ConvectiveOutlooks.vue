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
        "https://www.spc.noaa.gov/partners/outlooks/national/swody1_TORN.png",
        "https://www.spc.noaa.gov/partners/outlooks/national/swody1_WIND.png",
        "https://www.spc.noaa.gov/partners/outlooks/national/swody1_HAIL.png",
        "https://www.spc.noaa.gov/partners/outlooks/national/swody2_TORN.png",
        "https://www.spc.noaa.gov/partners/outlooks/national/swody2_WIND.png",
        "https://www.spc.noaa.gov/partners/outlooks/national/swody2_HAIL.png",
        "https://www.spc.noaa.gov/partners/outlooks/national/swody3_PROB.png",
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
        <div
          v-if="
            selectedDay == 1 ||
            selectedDay == 9 ||
            selectedDay == 10 ||
            selectedDay == 11
          "
        >
          <button @click="selectedDay = 1">Categorical</button>
          <button @click="selectedDay = 9">Tornado</button>
          <button @click="selectedDay = 11">Hail</button>
          <button @click="selectedDay = 10">Wind</button>
        </div>
        <div
          v-if="
            selectedDay == 2 ||
            selectedDay == 12 ||
            selectedDay == 13 ||
            selectedDay == 14
          "
        >
          <button @click="selectedDay = 2">Categorical</button>
          <button @click="selectedDay = 12">Tornado</button>
          <button @click="selectedDay = 14">Hail</button>
          <button @click="selectedDay = 13">Wind</button>
        </div>
        <div v-if="selectedDay == 3 || selectedDay == 15">
          <button @click="selectedDay = 3">Categorical</button>
          <button @click="selectedDay = 15">Probabilistic</button>
        </div>
      </div>
    </div>

    <!-- Outlook Discussion -->
    <div id="discussion-text-container">
      <h1>Forecast Outlook Discussion</h1>
      <div
        v-if="
          selectedDay == 1 ||
          selectedDay == 9 ||
          selectedDay == 10 ||
          selectedDay == 11
        "
      >
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
      <div
        v-if="
          selectedDay == 2 ||
          selectedDay == 12 ||
          selectedDay == 13 ||
          selectedDay == 14
        "
      >
        <pre
          style="
            font-family: monospace;
            font-size: 10pt;
            color: rgb(0, 0, 0);
            font-style: normal;
            font-variant-ligatures: normal;
            font-variant-caps: normal;
            font-weight: 400;
            letter-spacing: normal;
            orphans: 2;
            text-align: start;
            text-indent: 0px;
            text-transform: none;
            widows: 2;
            word-spacing: 0px;
            -webkit-text-stroke-width: 0px;
            text-decoration-thickness: initial;
            text-decoration-style: initial;
            text-decoration-color: initial;
          "
        >
   Day 2 Convective Outlook  
   NWS Storm Prediction Center Norman OK
   1230 PM CDT Sat Apr 27 2024

   Valid 281200Z - 291200Z

   ...THERE IS A SLIGHT RISK OF SEVERE THUNDERSTORMS OVER PARTS OF THE
   SOUTHERN AND CENTRAL PLAINS INTO THE MISSISSIPPI...

   ...SUMMARY...
   Severe thunderstorms are possible from east Texas into parts of the
   upper Mississippi Valley Sunday. Damaging winds, hail, and a few
   tornadoes, will all be possible.

   ...Summary...
   A broad, negatively tilted upper trough is forecast to move east
   northeastward from the southern/central Plains into the mid MS
   Valley and the Midwest Sunday into Sunday night. An attendant
   surface low will lift northeast into IA with a dryline trailing
   south through eastern NE/KS into central OK. This will serve as a
   focus for renewed convective development behind one or more
   complicating clusters of ongoing morning storms. Hail, damaging
   winds and a few tornadoes are possible.

   ...East TX into the upper MS Valley...
   With broad ascent occurring over an expansive warm sector and mid to
   upper 60s F surface dewpoints, one or more clusters of strong to
   severe storms are expected to be ongoing early in the period over
   the Mississippi Valley into eastern OK/KS and northeast TX. As these
   storms continue to move eastward most model guidance shows a general
   decrease in severe coverage through the morning hours. However, a
   few solutions suggest a line of storms may persist for several hours
   with a severe risk across portions of northern AR and southern MO.
   With deep meridional shear profiles and limited buoyancy, bands or
   clusters of storms capable of isolated damaging winds appear to be
   the most likely threat. 

   Additional redevelopment of more isolated storms is possible ahead
   of the dryline across parts of eastern NE/KS, northwest MO and
   southern IA closer to the surface low. A few supercells could evolve
   with a risk for all hazards. However, confidence in storm evolution
   is low with the potential for widespread cloud cover and convection
   limiting the extent of the warm sector.

   Farther south into northeast TX, eastern OK, and western AR,
   redevelopment behind the initial line appears possible from early to
   mid afternoon. As the main trough lifts away to the northeast,
   low-level warm advection should remain fairly strong and support
   weak ascent over much of the warm sector and along the dryline. A
   deep and very moist boundary layer with upper 60s to low 70s F
   dewpoints will support a broad area of 1500-2000 J/kg of MLCAPE.
   However, mid-level lapse rates are expected to remain modest and in
   combination with broad/weak ascent and mostly meridional shear
   profiles, storms may slowly evolve into clusters and line segments.
   Still, strong low-level shear could support storm-scale rotation
   with the more semi-discrete convection. Large hail, and a few
   tornadoes are possible before storms grow upscale into one or more
   linear clusters later in the afternoon into the evening. Damaging
   winds and line embedded tornadoes will remain possible as the linear
   clusters move eastward into the MS Valley in the evening and through
   the overnight hours.

   ...Upper Midwest/Great Lakes into the Mid Atlantic...
   A few stronger storms will be possible Sunday afternoon and evening
   from the Great Lakes into northern OH/PA, along the warm front.
   Clouds and elevated morning storms are expected to linger through
   the day. Instability appears too weak to support an organized severe
   threat, though small hail and gusty winds will be possible with a
   few stronger storms.

   ..Lyons.. 04/27/2024</pre
        >
      </div>
      <div v-if="selectedDay == 3 || selectedDay == 15">
        <pre
          style="
            font-family: monospace;
            font-size: 10pt;
            color: rgb(0, 0, 0);
            font-style: normal;
            font-variant-ligatures: normal;
            font-variant-caps: normal;
            font-weight: 400;
            letter-spacing: normal;
            orphans: 2;
            text-align: start;
            text-indent: 0px;
            text-transform: none;
            widows: 2;
            word-spacing: 0px;
            -webkit-text-stroke-width: 0px;
            text-decoration-thickness: initial;
            text-decoration-style: initial;
            text-decoration-color: initial;
          "
        >
Day 3 Convective Outlook  
   NWS Storm Prediction Center Norman OK
   0229 AM CDT Sat Apr 27 2024

   Valid 291200Z - 301200Z

   ...THERE IS A MARGINAL RISK OF SEVERE THUNDERSTORMS FROM
   CENTRAL/SOUTH TX INTO THE LOWER MS VALLEY...

   ...SUMMARY...
   Isolated strong to severe thunderstorms will be possible on Monday
   from parts of central and south Texas into the lower Mississippi
   Valley.

   ...Synopsis...
   A shortwave trough initially near the upper Great Lakes region is
   forecast to gradually weaken and move northeastward on Monday. In
   its wake, a low-amplitude shortwave trough is forecast to move
   across the southern Plains. Across the west, a shortwave trough and
   related mid/upper-level jet will move through the Northwest toward
   the northern Rockies by Monday evening. 

   ...ArkLaTex into the Lower MS Valley...
   A storm cluster may be ongoing somewhere near the ArkLaTex region
   Monday morning, aided by a persistent low-level jet and the
   approaching low-amplitude shortwave trough. The eastward progression
   of any such cluster and magnitude of downstream destabilization
   remain quite uncertain, but some threat for isolated hail, damaging
   wind, and possibly a tornado could spread into the lower MS Valley
   through the day. 

   ...Parts of central/south TX...
   An outflow reinforced front may move into parts of central TX early
   Monday, in the wake of extensive ongoing convection father east.
   This front will may stall and either begin moving northward by
   afternoon, or just become increasingly ill-defined with time. While
   stronger ascent will move east/northeast of this region, strong
   heating of a moist airmass will result in moderate to locally strong
   destabilization, and isolated storm development will be possible.
   Deep-layer shear will remain sufficient for some storm organization,
   so any sustained development would pose a threat for hail and
   isolated severe gusts. 

   ...Parts of the Mid MS and OH Valleys into the lower Great Lakes
   region...
   A weakening cold front will move through parts of the Mid MS and OH
   Valleys during the day on Monday, with the front expected to reach
   parts of the lower Great Lakes by Monday evening. While moderate
   deep-layer flow may persist along/ahead of the front,
   destabilization may be quite limited due to considerable cloudiness
   and weakening midlevel lapse rates. While a strong storm or two
   cannot be ruled out along/ahead of the front, uncertainty regarding
   the development of adequate instability precludes probabilities at
   this time.

   ..Dean.. 04/27/2024</pre
        >
      </div>
      <div
        v-if="
          selectedDay == 4 ||
          selectedDay == 5 ||
          selectedDay == 6 ||
          selectedDay == 7 ||
          selectedDay == 8
        "
      >
        <pre
          style="
            font-family: monospace;
            font-size: 10pt;
            color: rgb(0, 0, 0);
            font-style: normal;
            font-variant-ligatures: normal;
            font-variant-caps: normal;
            font-weight: 400;
            letter-spacing: normal;
            orphans: 2;
            text-align: start;
            text-indent: 0px;
            text-transform: none;
            widows: 2;
            word-spacing: 0px;
            -webkit-text-stroke-width: 0px;
            text-decoration-thickness: initial;
            text-decoration-style: initial;
            text-decoration-color: initial;
          "
        >
Day 4-8 Convective Outlook  
   NWS Storm Prediction Center Norman OK
   0357 AM CDT Sat Apr 27 2024

   Valid 301200Z - 051200Z

   ...DISCUSSION...
   Extended range guidance has trended toward somewhat greater severe
   thunderstorm potential through much of next week, though there will
   still be a tendency for stronger deep-layer flow to be somewhat
   displaced from stronger instability through the period.
   Predictability remains too low to include 15% areas at this time. 

   ...D4/Tuesday - Great Plains into the upper Midwest...
   A relatively strong shortwave trough and attendant mid/upper-level
   jet is expected to move across the central Plains on Tuesday.
   Moderate to locally strong buoyancy may develop across the southern
   Plains, with some potential for at least moderate destabilization
   into the central Plains and upper Midwest. Depending on the timing
   of the shortwave and extent of northward moisture return, some
   severe threat could evolve in advance of the shortwave trough, and
   also southward along the trailing front and down the dryline. 

   ...D5/Wednesday into D6/Thursday - Parts of the Great Plains...
   Guidance has generally trended toward some amplification of the
   upper pattern by midweek, with a tendency toward broad troughing
   across the western CONUS. Modest mid/upper-level southwesterlies
   within broad cyclonic flow could overspread an unstable warm sector
   across parts of the central/southern Plains, accompanied by some
   severe thunderstorm threat on both Wednesday and Thursday.

   ...D7/Friday into D8/Saturday - Parts of the southern Plains...
   While predictability wanes into next weekend, there is a general
   tendency in extended-range guidance toward moving a cold front
   southward into the southern Plains and Southeast. While this may
   tend to reduce severe potential over most of the CONUS, rich
   low-level moisture could linger as the front eventually stalls over
   the southern Plains, with some opportunity for stronger storm
   development due to persistent upper-level troughing over the
   Southwest.

   ..Dean.. 04/27/2024</pre
        >
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
  height: 65vh;
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
  heigh: 100%;
}
</style>
