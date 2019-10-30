/**** DISTRICT CLASS ****/
class District {
  constructor({id, name, population, populationDensity, sesIndex, hazardScore}) {
    this.id = id;
    this.name = name;
    this.population = population;
    this.populationDensity = populationDensity;
    this.sesIndex = sesIndex;
    this.hazardScore = hazardScore;
    this.riskScore = this.hazardScore * this.populationDensity * (1 / this.sesIndex);
  }

  /**** CLASS METHODS ****/
  colorNode(mode, highlight) {
    let color = "360";
    let alpha;

    switch(mode) {
      case "risk":
        alpha = mapRange(this.riskScore, minOfValue("riskScore"), maxOfValue("riskScore"), 0.3, 1);
        color = "0";
        break;
      case "hazard":
        alpha = mapRange(this.hazardScore, minOfValue("hazardScore"), maxOfValue("hazardScore"), 0.3, 1);
        color = "25";
        break;
      case "density":
        alpha = mapRange(this.populationDensity, minOfValue("populationDensity"), maxOfValue("populationDensity"), 0.3, 1);
        color = "205";
        break;
      case "sesindex":
        alpha = mapRange(this.sesIndex, minOfValue("sesIndex"), maxOfValue("sesIndex"), 0.3, 1);
        color = "255";
        break;
      default:
        break;
    }

    if (highlight && (alpha + highlight < 1)) alpha += highlight;

    return `hsla(${color}, 100%, 55%, ${alpha})`; 
  }
}