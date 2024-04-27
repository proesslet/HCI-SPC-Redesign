<script>
export default {
  name: "WeatherSafety",
};
</script>

<template>
  <main>
    <h1 id="big-title">Understanding Severe Weather Risks</h1>
    <div class="categories-container">
      <img src="/outlook-categories.png" />
      <img src="/outlook-categories-spanish.png" />
    </div>

    <div class="grid">
      <div>
        <h1>Understanding Watches</h1>
        <img class="grid-img" src="/what-a-watch.png" />
        <p>
          "What's a severe thunderstorm or tornado watch?" "How's it different
          from a warning?" "What actions should be taken when a watch is
          issued?" Get the answers to these frequently asked questions here!
        </p>
        <a class="link" href="">Watch the Video</a>
      </div>

      <div>
        <h1>Understanding Forecasts</h1>
        <img class="grid-img" src="/how-forecast.png" />
        <p>
          Starting at four days out, find out what goes on behind-the-scenes at
          the NOAA Storm Prediction Center leading up to a watch being issued.
        </p>
        <a class="link" href="">Watch the Video</a>
      </div>
    </div>

    <div class="bottom-center">
      <h1>Tornado Safety</h1>
      <div class="safety-tips">
        <ul>
          <li>
            <span class="bold">Prevention and Practice Before the Storm:</span>
            At home, have a family tornado plan in place, based on the kind of
            dwelling you live in and the safety tips below. Know where you can
            take shelter in a matter of seconds, and practice a family tornado
            drill at least once a year. Have a pre-determined place to meet
            after a disaster.
          </li>
          <li>
            <span class="bold">What is a tornado watch?</span>A tornado watch
            defines a cluster of counties where tornadoes and other kinds of
            severe weather are possible in the next several hours. It does not
            necessarily mean tornadoes are happening, just that you need to be
            alert, and to be prepared to go to safe shelter if tornadoes do
            happen or a warning is issued.
          </li>
          <li>
            <span class="bold">What is a tornado warning?</span> A tornado
            warning means that a tornado has been spotted, or that Doppler radar
            indicates a thunderstorm circulation which can spawn a tornado. When
            a tornado warning is issued for your town or county, take immediate
            safety precautions. local NWS offices issue tornado warnings.
          </li>
          <li>
            <span class="bold">What is a safe room?</span> So-called "safe
            rooms" are reinforced small rooms built in the interior of a home,
            fortified by concrete and/or steel to offer extra protection against
            tornadoes, hurricanes and other severe windstorms. They can be built
            in a basement, or if no basement is available, on the ground floor.
          </li>
          <li>
            <span class="bold"
              >In a house with no basement, a dorm, or an apartment:</span
            >
            Avoid windows. Go to the lowest floor, small center room (like a
            bathroom or closet), under a stairwell, or in an interior hallway
            with no windows. Crouch as low as possible to the floor, facing
            down; and cover your head with your hands. If you have a metal bath
            tub, that may offer a shell of partial protection, but not plastic
            or fiberglass ones, which are easily penetrated by projectiles. Even
            in an interior room, you should cover yourself with some sort of
            thick padding (mattress, blankets, etc.), to protect against falling
            debris in case the roof and ceiling fail. A helmet can offer some
            protection against head injury.
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
#big-title {
  font-size: 2rem;
  font-weight: bold;
}
.categories-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
}

.categories-container img {
  border-radius: 10px;
  width: 45%;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 2rem;
  width: 100%;
}
.grid div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid div p {
  text-align: center;
  margin-top: 1rem;
}
.grid-img {
  border-radius: 10px;
  margin: auto;
  width: 50%;
}

.link {
  background-color: var(--light-blue);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  text-decoration: none;
  text-align: center;
  display: block;
  width: 35%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  cursor: pointer;
}

.bottom-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
}

.bold {
  font-weight: bold;
}

.safety-tips {
  width: 75%;
  margin: auto;
  margin-bottom: 1.5rem;
}
</style>
