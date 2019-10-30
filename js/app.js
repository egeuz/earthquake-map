//TO-DO
//Prepare classification scores for each data type:
//earthquake risk: high / medium / low risk
//earthquake hazard: from a scale of 1-5
//population density: display direct number
//socioeconomic status: display sesIndex + maybe also standard deviation within district if possible
//build up modal functionality -- content shown about district when clicked upon
//color and criteria adapt upon mapmode change
//add sources

document.addEventListener("DOMContentLoaded", function () {
  /**** GLOBAL PROPERTIES ****/
  let mapMode = "risk";

  /**** ELEMENTS ****/
  const mapNodes = document.querySelectorAll("path");
  const cursorTag = document.getElementById("cursor-tag");
  const modeButtons = document.querySelectorAll("#map-mode button");

  /**** INTERACTIVE MAP FUNCTIONALITY ****/
  mapNodes.forEach((node) => {
    // node.addEventListener('click', (event) => {
    //   const district = getDistrict(event.target.id);
    //   console.log(district.name);
    // });

    node.addEventListener('mouseenter', (event) => {
      const district = getDistrict(event.target.id);
      //highlight district
      event.target.style.fill = district.colorNode(mapMode, 0.1);
      //activate cursor tag
      cursorTag.innerHTML = populateTag(district, mapMode);
      cursorTag.classList.add("active");
    });

    node.addEventListener('mouseleave', (event) => {
      const district = getDistrict(event.target.id);
      //de-highlight district
      event.target.style.fill = district.colorNode(mapMode);
      //deactivate cursor tag
      cursorTag.classList.remove("active");
    });
  });

  /**** CURSOR TAG FUNCTIONALITY ****/
  //follow cursor
  document.addEventListener('mousemove', (event) => {
    cursorTag.style.left = (event.x + 25) + "px";
    cursorTag.style.top = (event.y - 10) + "px";
  });

  //draw information from hovered district
  const populateTag = (district, mapMode) => {
    let iconColor = district.colorNode(mapMode);
    let value;
    let valueIsHigh = false;
    switch (mapMode) {
      case "risk":
        let riskScore = +mapRange(district.riskScore, minOfValue("riskScore"), maxOfValue("riskScore"), 0, 100);
        riskScore = riskScore.toFixed(2);
        if (riskScore > 80) valueIsHigh = true;
        value = "Earthquake Risk: " + riskScore + "/100";
        break;
      case "hazard":
        if (district.hazardScore > 4) valueIsHigh = true;
        value = "Earthquake Hazard: " + district.hazardScore + "/5";
        break;
      case "density":
        let densityScore = mapRange(district.populationDensity, minOfValue("populationDensity"), maxOfValue("populationDensity"), 0, 100);
        if (densityScore > 80) valueIsHigh = true;
        value = "Population Density: " + district.populationDensity + "/km<sup>2</sup>";
        break;
      case "sesindex":
        if (district.sesIndex > 80) valueIsHigh = true;
        value = "Socioeconomic Status Index: " + district.sesIndex + "/100";
        break;
      default:
        break;
    }
    const content = `<p class="district-name">${district.name}</p>
    <div class="tag-icon" style="background: ${iconColor};"></div>
    <div class="district-score" style="color: ${district.colorNode(mapMode, 0.3)}">${value}</div>`

    if (valueIsHigh) document.querySelector(".district-score").classList.add("high-score");
    return content;
  }

  /**** NODE COLORING FUNCTIONALITY ****/
  function colorNodes(mapMode) {
    mapNodes.forEach((node) => {
      const district = getDistrict(node.id);
      const color = district.colorNode(mapMode);
      node.style.fill = color;
    });
  }

  modeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      //highlight currently active button
      modeButtons.forEach(button => button.classList.remove("active"));
      event.target.classList.add("active");
      //change map mode
      mapMode = event.target.id;
      //recolor districts based on map mode
      colorNodes(mapMode);
      //setup scale based on mapmode
      setScale(mapMode);
    });

    button.addEventListener('mouseenter', (event) => {
      // console.log(event.target.childNodes);
      event.target.querySelector(".button-info").classList.add("active");
    });

    button.addEventListener('mouseleave', (event) => {
      event.target.querySelector(".button-info").classList.remove("active");
    });
  });

  /**** SCALE FUNCTIONALITY ****/
  function setScale(mapMode) {
    let color;
    let gradient;
    let lowValue;
    let highValue;

    switch (mapMode) {
      case "risk":
        color = "0";
        lowValue = "LEAST RISK";
        highValue = "MOST RISK";
        break;
      case "hazard":
        color = "25";
        lowValue = "LEAST HAZARD";
        highValue = "MOST HAZARD";
        break;
      case "density":
        color = "205";
        lowValue = "LEAST DENSE";
        highValue = "MOST DENSE";
        break;
      case "sesindex":
        color = "255";
        lowValue = "LOWEST";
        highValue = "HIGHEST";
        break;
      default:
        break;
    }
    gradient = `linear-gradient(90deg, hsla(${color}, 100%, 55%, 0.3), hsla(${color}, 100%, 55%, 0.9))`;
    document.getElementById("gradient").style.background = gradient;
    document.getElementById("low-value").innerHTML = lowValue;
    document.getElementById("high-value").innerHTML = highValue;
  }

  /**** INITIALIZE MAP ****/
  colorNodes(mapMode);
  setScale(mapMode);
});

/**** HELPER METHODS ****/
const getDistrict = (id) => districts.filter(district => district.id === id)[0];

const mapRange = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const minOfValue = (value) => {
  let values = [];
  districts.forEach((district, index) => {
    values[index] = district[value];
  });
  return Math.min(...values);
}

const maxOfValue = (value) => {
  let values = [];
  districts.forEach((district, index) => {
    values[index] = district[value];
  });
  return Math.max(...values);
}