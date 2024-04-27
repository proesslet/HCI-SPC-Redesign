<script>
export default {
  name: "About",
};
</script>

<template>
  <div class="top-columns">
    <div class="section">
      <h1>SPC Vision</h1>
      <p>
        The Storm Prediction Center will be the global leader in severe weather
        forecasting and research, leading to more effective warnings and
        forecasts that save lives and reduce the economic impact of severe
        weather.
      </p>
    </div>
    <div class="section">
      <h1>SPC Mission</h1>
      <p>
        The Storm Prediction Center maintains a high-achieving staff using
        innovative science and technology to deliver timely and accurate watch
        and forecast products/information dealing with tornadoes, severe
        thunderstorms, lightning, wildfires, and winter weather for the United
        States to protect lives and property.
      </p>
    </div>

    <div class="section">
      <h1>SPC Unique Value Proposition</h1>
      <p>
        SPC national products and services for severe thunderstorms and
        tornadoes are an essential source of information for the protection of
        life and property.
      </p>
    </div>
  </div>

  <div class="bottom-section">
    <h1>Overview</h1>
    <p>
      The Storm Prediction Center (SPC) is part of the National Weather Service
      (NWS) and the National Centers for Environmental Prediction (NCEP). Our
      mission is to provide timely and accurate forecasts and watches for severe
      thunderstorms and tornadoes over the contiguous United States. The SPC
      also monitors hazardous winter weather and fire weather events across the
      U.S. and issues specific products for those hazards. We use the most
      advanced technology and scientific methods available to achieve this goal.
      If you are interested in the history of the SPC we have a set of pages
      that document much of the history of the SPC.
    </p>
    <br />
    <p>
      The SPC uses its suite of products to relay forecasts of organized severe
      weather as much as eight days ahead of time, and continually refines the
      forecast up until the event has concluded. Our products are commonly used
      by local National Weather Service offices, emergency managers, TV and
      radio meteorologists, private weather forecasting companies, the aviation
      industry, storm spotters, agriculture, educational institutions and many
      other groups. A detailed description of all of the SPC products is
      available here.
    </p>
    <br />
    <p>
      Our very specialized mission requires meteorologists with a high level of
      expertise in convective storm forecasting, winter weather, and conditions
      leading to high fire dangers. The SPC staff also is active in scientific
      research into severe and dangerous weather. All SPC forecasters have at
      least a Bachelor of Science degree in atmospheric science, and several
      have done graduate-level studies or hold a Master of Science degree. Most
      of the forecasters at the center have at least 5 years of specialized
      experience, with our more veteran forecasters having over 20 years of
      severe storm forecasting wisdom. The SPC is located in Norman, Oklahoma at
      the National Weather Center, which is on the campus of the University of
      Oklahoma.
    </p>

    <div class="top-columns">
      <div class="section-two">
        <h1>Mesoscale Forecasters</h1>
        <p>
          Mesoscale forecasters specialize in forecasting dangerous weather on
          the "mesoscale," which comprises a time frame of up to 6 hours and an
          area typically about half the size of a standard U.S. state. This
          involves extensive knowledge of weather processes that lead to severe
          thunderstorms, tornadoes, and hazardous winter weather. This person's
          primary responsibility is to provide short term guidance on the
          formation and evolution of severe thunderstorms, tornadoes, and winter
          weather events.
        </p>
      </div>

      <div class="section-two">
        <h1>Lead Forecasters</h1>
        <p>
          The lead forecaster serves as the "team leader," overseeing duties
          among other forecasters on shift and making sure each product issued
          is of the highest quality possible. This is so important that all
          products and bulletins from SPC are proofread by at least two pairs of
          eyes before they go out, one of which is usually the lead forecaster.
          The lead forecaster's job is very complex. He or she must be
          intimately familiar with every aspect of SPC operations, every type of
          forecast we issue, and a myriad of computers we use to do the job. The
          stress level of this job can be quite high on active severe weather
          days, with the lead forecaster having to closely monitor several areas
          of the country for impending thunderstorm development. A high level of
          situational awareness is required in this position.
        </p>
      </div>

      <div class="section-two">
        <h1>Outlook Forecasters</h1>
        <p>
          The outlook forecasters prepare forecasts out to eight days for severe
          and non-severe thunderstorms across the contiguous United States, as
          well as weather conditions favorable for the spread and/or ignition of
          wildfires. The Day 1 Convective Outlook and the Day 1 Fire Weather
          Outlook pertains to today's threat. The Day 2 Convective Outlook and
          the Day 2 Fire Weather Outlook pertain to tomorrow. The Day 3
          Convective Outlook pertains to the day after tomorrow. The Day 4-8
          Severe Weather Outlook and Day 3-8 Fire Weather Outlook provide
          extended forecast information out to about a week in advance.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  width: 30%;
  text-align: center;
}

.section-two {
  width: 30%;
  text-align: justify;
}

.top-columns {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
}

.bottom-section {
  margin: 2rem;
  text-align: justify;
}

h1 {
  text-align: center;
}
</style>
