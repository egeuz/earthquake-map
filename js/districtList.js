
/**** DATA STRUCTURE ****/
const districts = [
  new District({
    id: "adalar",
    name: "Adalar",
    populationDensity: 1465,
    sesIndex: 50.62,
    sesStandardDeviation: 9.49,
    incomeGap: 32.9,
    hazardScore: 3
  }),
  new District({
    id: "arnavutkoy",
    name: "Arnavutköy",
    populationDensity: 597,
    sesIndex: 20.23,
    sesStandardDeviation: 3.95,
    incomeGap: 21.8,
    hazardScore: 2
  }),
  new District({
    id: "atasehir",
    name: "Ataşehir",
    populationDensity: 16653,
    sesIndex: 46.46,
    sesStandardDeviation: 18.7,
    incomeGap: 59.8,
    hazardScore: 2
  }),
  new District({
    id: "avcilar",
    name: "Avcılar",
    populationDensity: 8713,
    sesIndex: 40.84,
    sesStandardDeviation: 10.9,
    incomeGap: 27.2,
    hazardScore: 4
  }),
  new District({
    id: "bagcilar",
    name: "Bağcılar",
    populationDensity: 31929,
    sesIndex: 28.77,
    sesStandardDeviation: 3.98,
    incomeGap: 11.2,
    hazardScore: 3
  }),
  new District({
    id: "bahcelievler",
    name: "Bahçelievler",
    populationDensity: 34944,
    sesIndex: 43.09,
    sesStandardDeviation: 12.70,
    incomeGap: 31.1,
    hazardScore: 5
  }),
  new District({
    id: "bakirkoy",
    name: "Bakırköy",
    populationDensity: 7678,
    sesIndex: 75.73,
    sesStandardDeviation: 11.1,
    incomeGap: 38.5,
    hazardScore: 5
  }),
  new District({
    id: "basaksehir",
    name: "Başakşehir",
    populationDensity: 3998,
    sesIndex: 37.91,
    sesStandardDeviation: 17.40,
    incomeGap: 33.7,
    hazardScore: 2
  }),
  new District({
    id: "bayrampasa",
    name: "Bayrampaşa",
    populationDensity: 30119,
    sesIndex: 32.25,
    sesStandardDeviation: 4.30,
    incomeGap: 8.0,
    hazardScore: 3
  }),
  new District({
    id: "besiktas",
    name: "Beşiktaş",
    populationDensity: 10060,
    sesIndex: 80.91,
    sesStandardDeviation: 9.70,
    incomeGap: 27.3,
    hazardScore: 2
  }),
  new District({
    id: "beykoz",
    name: "Beykoz",
    populationDensity: 796,
    sesIndex: 34.02,
    sesStandardDeviation: 16.95,
    incomeGap: 83.4,
    hazardScore: 2
  }),
  new District({
    id: "beylikduzu",
    name: "Beylikdüzü",
    populationDensity: 8501,
    sesIndex: 45.84,
    sesStandardDeviation: 13.79,
    incomeGap: 34.6,
    hazardScore: 3
  }),
  new District({
    id: "beyoglu",
    name: "Beyoğlu",
    populationDensity: 25614,
    sesIndex: 41.64,
    sesStandardDeviation: 20.27,
    incomeGap: 84.8,
    hazardScore: 2
  }),
  new District({
    id: "buyukcekmece",
    name: "Büyükçekmece",
    populationDensity: 1432,
    sesIndex: 38.7,
    sesStandardDeviation: 11.92,
    incomeGap: 44.2,
    hazardScore: 2
  }),
  new District({
    id: "catalca",
    name: "Çatalca",
    populationDensity: 64,
    sesIndex: 19.2,
    sesStandardDeviation: 3.37,
    incomeGap: 5.7,
    hazardScore: 1
  }),
  new District({
    id: "cekmekoy",
    name: "Çekmeköy",
    populationDensity: 1657,
    sesIndex: 36.05,
    sesStandardDeviation: 10.1,
    incomeGap: 30.5,
    hazardScore: 2
  }),
  new District({
    id: "esenler",
    name: "Esenler",
    populationDensity: 23398,
    sesIndex: 25.51,
    sesStandardDeviation: 2.24,
    incomeGap: 10.6,
    hazardScore: 3
  }),
  new District({
    id: "esenyurt",
    name: "Esenyurt",
    populationDensity: 20724,
    sesIndex: 29.76,
    sesStandardDeviation: 11.86,
    incomeGap: 31.6,
    hazardScore: 3
  }),
  new District({
    id: "eyupsultan",
    name: "Eyüpsultan",
    populationDensity: 1684,
    sesIndex: 33.76,
    sesStandardDeviation: 12.55,
    incomeGap: 32.6,
    hazardScore: 2
  }),
  new District({
    id: "fatih",
    name: "Fatih",
    populationDensity: 29103,
    sesIndex: 33.75,
    sesStandardDeviation: 11.41,
    incomeGap: 39.0,
    hazardScore: 4
  }),
  new District({
    id: "gaziosmanpasa",
    name: "Gaziosmanpaşa",
    populationDensity: 40587,
    sesIndex: 32.14,
    sesStandardDeviation: 5.19,
    incomeGap: 14.7,
    hazardScore: 3
  }),
  new District({
    id: "gungoren",
    name: "Güngören",
    populationDensity: 41333,
    sesIndex: 38.92,
    sesStandardDeviation: 9.12,
    incomeGap: 25.2,
    hazardScore: 3
  }),
  new District({
    id: "kadikoy",
    name: "Kadıköy",
    populationDensity: 18346,
    sesIndex: 76.08,
    sesStandardDeviation: 15.20,
    incomeGap: 28.4,
    hazardScore: 3
  }),
  new District({
    id: "kagithane",
    name: "Kağıthane",
    populationDensity: 29135,
    sesIndex: 37.83,
    sesStandardDeviation: 10.99,
    incomeGap: 20.5,
    hazardScore: 2
  }),
  new District({
    id: "kartal",
    name: "Kartal",
    populationDensity: 12136,
    sesIndex: 42.05,
    sesStandardDeviation: 9.98,
    incomeGap: 26.7,
    hazardScore: 2
  }),
  new District({
    id: "kucukcekmece",
    name: "Küçükçekmece",
    populationDensity: 17507,
    sesIndex: 34.32,
    sesStandardDeviation: 10.44,
    incomeGap: 19.4,
    hazardScore: 4
  }),
  new District({
    id: "maltepe",
    name: "Maltepe",
    populationDensity: 9378,
    sesIndex: 50.11,
    sesStandardDeviation: 15.7,
    incomeGap: 25.4,
    hazardScore: 2
  }),
  new District({
    id: "pendik",
    name: "Pendik",
    populationDensity: 3651,
    sesIndex: 31.76,
    sesStandardDeviation: 11.58,
    incomeGap: 27.6,
    hazardScore: 2
  }),
  new District({
    id: "sancaktepe",
    name: "Sancaktepe",
    populationDensity: 6574,
    sesIndex: 27.24,
    sesStandardDeviation: 6.62,
    incomeGap: 22.2,
    hazardScore: 2
  }),
  new District({
    id: "sariyer",
    name: "Sarıyer",
    populationDensity: 1935,
    sesIndex: 50.06,
    sesStandardDeviation: 18.77,
    incomeGap: 47.0,
    hazardScore: 2
  }),
  new District({
    id: "sile",
    name: "Şile",
    populationDensity: 46,
    sesIndex: 19.43,
    sesStandardDeviation: 5.09,
    incomeGap: 30.3,
    hazardScore: 1
  }),
  new District({
    id: "silivri",
    name: "Silivri",
    populationDensity: 219,
    sesIndex: 21.29,
    sesStandardDeviation: 5.44,
    incomeGap: 28.5,
    hazardScore: 1
  }),
  new District({
    id: "sisli",
    name: "Şişli",
    populationDensity: 27429,
    sesIndex: 62.34,
    sesStandardDeviation: 17.57,
    incomeGap: 36.8,
    hazardScore: 2
  }),
  new District({
    id: "sultanbeyli",
    name: "Sultanbeyli",
    populationDensity: 11303,
    sesIndex: 21.87,
    sesStandardDeviation: 3.79,
    incomeGap: 21.8,
    hazardScore: 2
  }),
  new District({
    id: "sultangazi",
    name: "Sultangazi",
    populationDensity: 14156,
    sesIndex: 24.69,
    sesStandardDeviation: 3.58,
    incomeGap: 11.0,
    hazardScore: 2
  }),
  new District({
    id: "tuzla",
    name: "Tuzla",
    populationDensity: 1851,
    sesIndex: 36.67,
    sesStandardDeviation: 13.46,
    incomeGap: 42.0,
    hazardScore: 2
  }),
  new District({
    id: "umraniye",
    name: "Ümraniye",
    populationDensity: 15004,
    sesIndex: 39.35,
    sesStandardDeviation: 13.81,
    incomeGap: 42.6,
    hazardScore: 2
  }),
  new District({
    id: "uskudar",
    name: "Üsküdar",
    populationDensity: 15118,
    sesIndex: 56.4,
    sesStandardDeviation: 15.09,
    incomeGap: 39.3,
    hazardScore: 2
  }),
  new District({
    id: "zeytinburnu",
    name: "Zeytinburnu",
    populationDensity: 23745,
    sesIndex: 40.25,
    sesStandardDeviation: 13.58,
    incomeGap: 38.4,
    hazardScore: 5
  })
];
