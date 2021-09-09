const planets = [
  {
    name: "mercury",
    value: 3.7,
  },
  {
    name: "venus",
    value: 8.87,
  },
  {
    name: "earth",
    value: 9.8,
  },
  {
    name: "mars",
    value: 3.7,
  },
  {
    name: "jupiter",
    value: 24.8,
  },
  {
    name: "saturn",
    value: 10.7,
  },
  {
    name: "uranus",
    value: 8.7,
  },
  {
    name: "neptune",
    value: 11.0,
  },
  {
    name: "pluto",
    value: 0.6,
  },
  {
    name: "moon",
    value: 1.6,
  },
];

// const galaxy = planets.reduce((acc, planet) => {
//   acc[planet.name] = planet.value;

//   return acc;
// }, {});
const galaxy = {};
planets.forEach((planet) => {
  galaxy[planet.name] = planet.value;
});

const planetInput = document.querySelector("#planet");
const massInput = document.querySelector("#mass");
const planetImage = document.querySelector(".planet-image");
const resultEl = document.querySelector(".description");

planetInput.innerHTML += planets
  .map(
    (planet) =>
      `<option value="${planet.name}">${planet.name.toUpperCase()}</option>`
  )
  .join("\n");
planetInput.addEventListener("change", (e) => {
  const planet = e.target.value;

  planetImage.setAttribute("src", `images/${planet}.png`);
});

document.querySelector("button").addEventListener("click", () => {
  resultEl.classList.remove("hide");
  const planet = planetInput.value;
  const mass = massInput.value;

  console.log({ planet, mass });

  if (!mass && mass !== "0") {
    planetImage.classList.add("hide");
    resultEl.innerHTML = '<p class="error">Mass is required!</p>';
    return;
  }
  if (planet === "none") {
    planetImage.classList.add("hide");
    resultEl.innerHTML = '<p class="error">You did not put a planet yet</p>';
    return;
  }

  const result = (galaxy[planet] * mass).toFixed(2);

  planetImage.classList.remove("hide");
  resultEl.innerHTML = `<p>The weight of the object on <span class="planet-name">${planet}</span></p>
  <span class="weight">${result}</span>`;
  console.log(result);
});
