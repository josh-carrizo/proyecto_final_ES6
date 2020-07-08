const autos =[
  /*
    "MODEL": "# = high output engine",
    "MAKE": "",
    "VEHICLE CLASS": "",
    "ENGINE SIZE": "(L)",
    "CYLINDERS": "",
    "TRANSMISSION": "",
    "FUEL": "TYPE",
    "FUEL CONSUMPTION": "COMB (L/100 km)",
      
    "CO2 EMISSIONS": "(g/km)",
  */
  {
    "MODEL": "1.6EL",
    "MAKE": "ACURA",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "1.6",
    "CYLINDERS": "4",
    "TRANSMISSION": "A4",
    "FUEL": "X",
    "FUEL CONSUMPTION":"8.1",
    "CO2 EMISSIONS": "186",
  },
  {
    "MODEL": "1.6EL",
    "MAKE": "ACURA",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "1.6",
    "CYLINDERS": "4",
    "TRANSMISSION": "M5",
    "FUEL": "X",
    "FUEL CONSUMPTION":"7.6",
     
    "CO2 EMISSIONS": "175",
  },
  {
    "MODEL": "3.2TL",
    "MAKE": "ACURA",
    "VEHICLE CLASS": "MID-SIZE",
    "ENGINE SIZE": "3.2",
    "CYLINDERS": "6",
    "TRANSMISSION": "AS5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "10.0",
     
    "CO2 EMISSIONS": "230",
  },
  {
    "MODEL": "3.5RL",
    "MAKE": "ACURA",
    "VEHICLE CLASS": "MID-SIZE",
    "ENGINE SIZE": "3.5",
    "CYLINDERS": "6",
    "TRANSMISSION": "A4",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "11.5",
     
    "CO2 EMISSIONS": "264",
  },
  {
    "MODEL": "INTEGRA",
    "MAKE": "ACURA",
    "VEHICLE CLASS": "SUBCOMPACT",
    "ENGINE SIZE": "1.8",
    "CYLINDERS": "4",
    "TRANSMISSION": "A4",
    "FUEL": "X",
    "FUEL CONSUMPTION": "8.6",
     
    "CO2 EMISSIONS": "198",
  },
  {
    "MODEL": "INTEGRA",
    "MAKE": "ACURA",
    "VEHICLE CLASS": "SUBCOMPACT",
    "ENGINE SIZE": "1.8",
    "CYLINDERS": "4",
    "TRANSMISSION": "M5",
    "FUEL": "X",
    "FUEL CONSUMPTION":"8.2",
     
    "CO2 EMISSIONS": "189",
  },
  {
    "MODEL": "INTEGRA GSR/TYPE R",
    "MAKE": "ACURA",
    "VEHICLE CLASS": "SUBCOMPACT",
    "ENGINE SIZE": "1.8",
    "CYLINDERS": "4",
    "TRANSMISSION": "M5",
    "FUEL": "Z",
    "FUEL CONSUMPTION":"8.3",
     
    "CO2 EMISSIONS": "191",
  },
  {
    "MODEL": "NSX",
    "MAKE": "ACURA",
    "VEHICLE CLASS": "SUBCOMPACT",
    "ENGINE SIZE": "3.0",
    "CYLINDERS": "6",
    "TRANSMISSION": "AS4",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "11.6",
     
    "CO2 EMISSIONS": "267",
  },
  {
    "MODEL": "NSX",
    "MAKE": "ACURA",
    "VEHICLE CLASS": "SUBCOMPACT",
    "ENGINE SIZE": "3.2",
    "CYLINDERS": "6",
    "TRANSMISSION": "M6",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "11.7",
     
    "CO2 EMISSIONS": "269",
  },
  {
    "MODEL": "A4",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "1.8",
    "CYLINDERS": "4",
    "TRANSMISSION": "A5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "9.5",
     
    "CO2 EMISSIONS": "218",
  },
  {
    "MODEL": "A4",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "1.8",
    "CYLINDERS": "4",
    "TRANSMISSION": "M5",
    "FUEL": "Z",
    "FUEL CONSUMPTION":"8.4",
     
    "CO2 EMISSIONS": "193",
  },
  {
    "MODEL": "A4",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "2.8",
    "CYLINDERS": "6",
    "TRANSMISSION": "A5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "10.8",
     
    "CO2 EMISSIONS": "248",
  },
  {
    "MODEL": "A4",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "2.8",
    "CYLINDERS": "6",
    "TRANSMISSION": "M5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "9.8",
     
    "CO2 EMISSIONS": "225",
  },
  {
    "MODEL": "A4 QUATTRO",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "1.8",
    "CYLINDERS": "4",
    "TRANSMISSION": "A5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "10.1",
     
    "CO2 EMISSIONS": "232",
  },
  {
    "MODEL": "A4 QUATTRO",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "1.8",
    "CYLINDERS": "4",
    "TRANSMISSION": "M5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "9.3",
     
    "CO2 EMISSIONS": "214",
  },
  {
    "MODEL": "A4 QUATTRO",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "2.8",
    "CYLINDERS": "6",
    "TRANSMISSION": "A5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "11.1",
     
    "CO2 EMISSIONS": "255",
  },
  {
    "MODEL": "A4 QUATTRO",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "2.8",
    "CYLINDERS": "6",
    "TRANSMISSION": "M5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "10.9",
     
    "CO2 EMISSIONS": "251",
  },
  {
    "MODEL": "A6",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "MID-SIZE",
    "ENGINE SIZE": "2.8",
    "CYLINDERS": "6",
    "TRANSMISSION": "A5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "11.2",
     
    "CO2 EMISSIONS": "258",
  },
  {
    "MODEL": "A6 AVANT QUATTRO",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "STATION WAGON - MID-SIZE",
    "ENGINE SIZE": "2.8",
    "CYLINDERS": "6",
    "TRANSMISSION": "A5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "11.7",
     
    "CO2 EMISSIONS": "269",
  },
  {
    "MODEL": "A6 QUATTRO",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "MID-SIZE",
    "ENGINE SIZE": "2.7",
    "CYLINDERS": "6",
    "TRANSMISSION": "A5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "11.5",
     
    "CO2 EMISSIONS": "264",
  },
  {
    "MODEL": "A6 QUATTRO",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "MID-SIZE",
    "ENGINE SIZE": "2.7",
    "CYLINDERS": "6",
    "TRANSMISSION": "M6",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "11.6",
     
    "CO2 EMISSIONS": "267",
  },
  {
    "MODEL": "A6 QUATTRO",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "MID-SIZE",
    "ENGINE SIZE": "2.8",
    "CYLINDERS": "6",
    "TRANSMISSION": "A5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "11.7",
     
    "CO2 EMISSIONS": "269",
  },
  {
    "MODEL": "A6 QUATTRO",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "MID-SIZE",
    "ENGINE SIZE": "2.8",
    "CYLINDERS": "6",
    "TRANSMISSION": "M5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "11.3",
     
    "CO2 EMISSIONS": "260",
  },
  {
    "MODEL": "A6 QUATTRO",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "MID-SIZE",
    "ENGINE SIZE": "4.2",
    "CYLINDERS": "8",
    "TRANSMISSION": "A5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "11.7",
     
    "CO2 EMISSIONS": "269",
  },
  {
    "MODEL": "A8 QUATTRO",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "MID-SIZE",
    "ENGINE SIZE": "4.2",
    "CYLINDERS": "8",
    "TRANSMISSION": "A5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "11.7",
     
    "CO2 EMISSIONS": "269",
  },
  {
    "MODEL": "S4 QUATTRO",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "2.7",
    "CYLINDERS": "6",
    "TRANSMISSION": "A5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "11.5",
     
    "CO2 EMISSIONS": "264",
  },
  {
    "MODEL": "S4 QUATTRO",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "2.7",
    "CYLINDERS": "6",
    "TRANSMISSION": "M6",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "11.6",
     
    "CO2 EMISSIONS": "267",
  },
  {
    "MODEL": "TT COUPE QUATTRO",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "MINICOMPACT",
    "ENGINE SIZE": "1.8",
    "CYLINDERS": "4",
    "TRANSMISSION": "M5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "9.8",
     
    "CO2 EMISSIONS": "225",
  },
  {
    "MODEL": "TT COUPE QUATTRO (SUPERCHARGED)",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "MINICOMPACT",
    "ENGINE SIZE": "1.8",
    "CYLINDERS": "4",
    "TRANSMISSION": "M6",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "9.8",
     
    "CO2 EMISSIONS": "225",
  },
  {
    "MODEL": "TT ROADSTER",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "TWO-SEATER",
    "ENGINE SIZE": "1.8",
    "CYLINDERS": "4",
    "TRANSMISSION": "M5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "9.3",
     
    "CO2 EMISSIONS": "214",
  },
  {
    "MODEL": "TT ROADSTER QUATTRO (SUPERCHARGED)",
    "MAKE": "AUDI",
    "VEHICLE CLASS": "TWO-SEATER",
    "ENGINE SIZE": "1.8",
    "CYLINDERS": "4",
    "TRANSMISSION": "M6",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "9.8",
     
    "CO2 EMISSIONS": "225",
  },
  {
    "MODEL": "323 CONVERTIBLE",
    "MAKE": "BMW",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "2.5",
    "CYLINDERS": "6",
    "TRANSMISSION": "A5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "11.2",
     
    "CO2 EMISSIONS": "258",
  },
  {
    "MODEL": "323 CONVERTIBLE",
    "MAKE": "BMW",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "2.5",
    "CYLINDERS": "6",
    "TRANSMISSION": "M5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "10.7",
     
    "CO2 EMISSIONS": "246",
  },
  {
    "MODEL": "323Ci",
    "MAKE": "BMW",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "2.5",
    "CYLINDERS": "6",
    "TRANSMISSION": "A5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "10.3",
     
    "CO2 EMISSIONS": "237",
  },
  {
    "MODEL": "323Ci",
    "MAKE": "BMW",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "2.5",
    "CYLINDERS": "6",
    "TRANSMISSION": "M5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "9.7",
     
    "CO2 EMISSIONS": "223",
  },
  {
    "MODEL": "323i",
    "MAKE": "BMW",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "2.5",
    "CYLINDERS": "6",
    "TRANSMISSION": "A5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "10.3",
     
    "CO2 EMISSIONS": "237",
  },
  {
    "MODEL": "323i",
    "MAKE": "BMW",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "2.5",
    "CYLINDERS": "6",
    "TRANSMISSION": "M5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "9.7",
     
    "CO2 EMISSIONS": "223",
  },
  {
    "MODEL": "328Ci",
    "MAKE": "BMW",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "2.8",
    "CYLINDERS": "6",
    "TRANSMISSION": "A5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "10.4",
     
    "CO2 EMISSIONS": "239",
  },
  {
    "MODEL": "328Ci",
    "MAKE": "BMW",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "2.8",
    "CYLINDERS": "6",
    "TRANSMISSION": "M5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "9.7",
     
    "CO2 EMISSIONS": "223",
  },
  {
    "MODEL": "328i",
    "MAKE": "BMW",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "2.8",
    "CYLINDERS": "6",
    "TRANSMISSION": "A5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "10.4",
     
    "CO2 EMISSIONS": "239",
  },
  {
    "MODEL": "328i",
    "MAKE": "BMW",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "2.8",
    "CYLINDERS": "6",
    "TRANSMISSION": "M5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "9.7",
     
    "CO2 EMISSIONS": "223",
  },
  {
    "MODEL": "528i",
    "MAKE": "BMW",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "2.8",
    "CYLINDERS": "6",
    "TRANSMISSION": "A4",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "10.9",
     
    "CO2 EMISSIONS": "251",
  },
  {
    "MODEL": "528i",
    "MAKE": "BMW",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "2.8",
    "CYLINDERS": "6",
    "TRANSMISSION": "M5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "9.7",
     
    "CO2 EMISSIONS": "223",
  },
  {
    "MODEL": "528i TOURING",
    "MAKE": "BMW",
    "VEHICLE CLASS": "STATION WAGON - SMALL",
    "ENGINE SIZE": "2.8",
    "CYLINDERS": "6",
    "TRANSMISSION": "A4",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "10.9",
     
    "CO2 EMISSIONS": "251",
  },
  {
    "MODEL": "528i TOURING",
    "MAKE": "BMW",
    "VEHICLE CLASS": "STATION WAGON - SMALL",
    "ENGINE SIZE": "2.8",
    "CYLINDERS": "6",
    "TRANSMISSION": "M5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "10.8",
     
    "CO2 EMISSIONS": "248",
  },
  {
    "MODEL": "540i",
    "MAKE": "BMW",
    "VEHICLE CLASS": "COMPACT",
    "ENGINE SIZE": "4.4",
    "CYLINDERS": "8",
    "TRANSMISSION": "A5",
    "FUEL": "Z",
    "FUEL CONSUMPTION": "11.2",
     
    "CO2 EMISSIONS": "258",
  }
]