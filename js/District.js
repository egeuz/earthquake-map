/**** DISTRICT CLASS ****/
class District {
  constructor({id, name, population, populationDensity, sesIndex, incomeGap, hazardScore}) {
    this.id = id;
    this.name = name;
    this.population = population;
    this.populationDensity = populationDensity;
    this.sesIndex = sesIndex;
    this.incomeGap = incomeGap;
    this.hazardScore = hazardScore;

    //Computed Properties
    // this.weightedSES = this.sesIndex * (1 / (this.incomeGap / this.sesIndex));
    this.riskScore = this.hazardScore * this.populationDensity * (1 / this.sesIndex);
  }

  //Tag Values
  populateTag(mode) {
    let iconColor = this.colorNode(mode);
    let value;

    switch(mode) {
      case "risk":
        let riskScore = mapRange(this.riskScore, minOfValue("riskScore"), maxOfValue("riskScore"), 0, 100);
        riskScore = riskScore.toFixed(2);
        value = "Earthquake Risk: " + riskScore + "/100";
        break;
      case "hazard":
        value = "Earthquake Hazard: " + this.hazardScore + "/5";
        break;
      case "density":
        value = "Population Density: " + this.populationDensity + "/km<sup>2</sup>";
        break;
      case "sesindex":
        let SESScore = mapRange(this.weightedSES, minOfValue("weightedSES"), maxOfValue("weightedSES"), 0, 100);
        SESScore = SESScore.toFixed(2);
        value = "Socioeconomic Status Index: " + this.sesIndex + "/100";
        break;
      default:
        break;
    }
      let content = `<p class="district-name">${this.name}</p>
      <div class="tag-icon" style="background: ${iconColor};"></div>
      <div class="district-score" style="color: ${this.colorNode(mode, 0.3)}">${value}</div>`
      return content;
    }

  /**** CLASS METHODS ****/
  colorNode(mode, highlight) {
    let color;
    let alpha;

    switch(mode) {
      case "risk":
        alpha = mapRange(this.riskScore, minOfValue("riskScore"), maxOfValue("riskScore"), 0.1, 0.9);
        color = "0";
        break;
      case "hazard":
        alpha = mapRange(this.hazardScore, minOfValue("hazardScore"), maxOfValue("hazardScore"), 0.1, 0.9);
        color = "25";
        break;
      case "density":
        alpha = mapRange(this.populationDensity, minOfValue("populationDensity"), maxOfValue("populationDensity"), 0.1, 0.9);
        color = "205";
        break;
      case "sesindex":
        alpha = mapRange(this.sesIndex, minOfValue("sesIndex"), maxOfValue("sesIndex"), 0.1, 0.9);
        color = "255";
        break;
      default:
        break;
    }

    if (highlight && (alpha + highlight <= 1)) alpha += highlight;

    return `hsla(${color}, 100%, 55%, ${alpha})`; 
  }
}
