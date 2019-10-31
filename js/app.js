document.addEventListener("DOMContentLoaded", function () {
  /**** GLOBAL PROPERTIES ****/
  let mapMode = "risk";

  /**** ELEMENTS ****/
  const mapNodes = document.querySelectorAll("path");
  const cursorTag = document.getElementById("cursor-tag");
  const modeButtons = document.querySelectorAll("#map-mode button");
  const infoButton = document.getElementById("info");
  const infoModal = document.getElementById("info-modal");
  const modalClose = document.getElementById("modal-close");

  /**** INTERACTIVE MAP FUNCTIONALITY ****/
  mapNodes.forEach((node) => {
    node.addEventListener('mouseenter', (event) => {
      const district = getDistrict(event.target.id);
      //highlight district
      event.target.style.fill = district.colorNode(mapMode, 0.1);
      //activate cursor tag
      cursorTag.innerHTML = district.populateTag(mapMode);
      cursorTag.classList.add("active");
    });

    node.addEventListener('mouseleave', (event) => {
      const district = getDistrict(event.target.id);
      event.target.style.fill = district.colorNode(mapMode); //de-highlight district
      cursorTag.classList.remove("active"); //deactivate cursor tag
    });
  });

  /**** CURSOR TAG FUNCTIONALITY ****/
  document.addEventListener('mousemove', (event) => {
    cursorTag.style.left = (event.x + 25) + "px";
    cursorTag.style.top = (event.y - 10) + "px";
  });

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

  /**** INFO MODAL FUNCTIONALITY ****/
  //open modal
  infoButton.addEventListener('click', (event) => {
    infoModal.classList.add("open");
  });

  //close modal by clicking close button
  modalClose.addEventListener('click', (event) => {
    infoModal.classList.remove('open');
  });

  infoModal.addEventListener('click', (event) => {
    if(event.target.id === "info-modal") infoModal.classList.remove("open");
  });

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