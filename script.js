const kantoPokes = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran",
  "Nidorina",
  "Nidoqueen",
  "Nidoran",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Golduck",
  "Mankey",
  "Primeape",
  "Growlithe",
  "Arcanine",
  "Poliwag",
  "Poliwhirl",
  "Poliwrath",
  "Abra",
  "Kadabra",
  "Alakazam",
  "Machop",
  "Machoke",
  "Machamp",
  "Bellsprout",
  "Weepinbell",
  "Victreebel",
  "Tentacool",
  "Tentacruel",
  "Geodude",
  "Graveler",
  "Golem",
  "Ponyta",
  "Rapidash",
  "Slowpoke",
  "Slowbro",
  "Magnemite",
  "Magneton",
  "Farfetch'd",
  "Doduo",
  "Dodrio",
  "Seel",
  "Dewgong",
  "Grimer",
  "Muk",
  "Shellder",
  "Cloyster",
  "Gastly",
  "Haunter",
  "Gengar",
  "Onix",
  "Drowzee",
  "Hypno",
  "Krabby",
  "Kingler",
  "Voltorb",
  "Electrode",
  "Exeggcute",
  "Exeggutor",
  "Cubone",
  "Marowak",
  "Hitmonlee",
  "Hitmonchan",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "Mr. Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew",
];
const johtoPokes = [
  "Chikorita",
  "Bayleef",
  "Meganium",
  "Cyndaquil",
  "Quilava",
  "Typhlosion",
  "Totodile",
  "Croconaw",
  "Feraligatr",
  "Sentret",
  "Furret",
  "Hoothoot",
  "Noctowl",
  "Ledyba",
  "Ledian",
  "Spinarak",
  "Ariados",
  "Crobat",
  "Chinchou",
  "Lanturn",
  "Pichu",
  "Cleffa",
  "Igglybuff",
  "Togepi",
  "Togetic",
  "Natu",
  "Xatu",
  "Mareep",
  "Flaaffy",
  "Ampharos",
  "Bellossom",
  "Marill",
  "Azumarill",
  "Sudowoodo",
  "Politoed",
  "Hoppip",
  "Skiploom",
  "Jumpluff",
  "Aipom",
  "Sunkern",
  "Sunflora",
  "Yanma",
  "Wooper",
  "Quagsire",
  "Espeon",
  "Umbreon",
  "Murkrow",
  "Slowking",
  "Misdreavus",
  "Unown",
  "Wobbuffet",
  "Girafarig",
  "Pineco",
  "Forretress",
  "Dunsparce",
  "Gligar",
  "Steelix",
  "Snubbull",
  "Granbull",
  "Qwilfish",
  "Scizor",
  "Shuckle",
  "Heracross",
  "Sneasel",
  "Teddiursa",
  "Ursaring",
  "Slugma",
  "Magcargo",
  "Swinub",
  "Piloswine",
  "Corsola",
  "Remoraid",
  "Octillery",
  "Delibird",
  "Mantine",
  "Skarmory",
  "Houndour",
  "Houndoom",
  "Kingdra",
  "Phanpy",
  "Donphan",
  "Porygon2",
  "Stantler",
  "Smeargle",
  "Tyrogue",
  "Hitmontop",
  "Smoochum",
  "Elekid",
  "Magby",
  "Miltank",
  "Blissey",
  "Raikou",
  "Entei",
  "Suicune",
  "Larvitar",
  "Pupitar",
  "Tyranitar",
  "Lugia",
  "Ho-Oh",
  "Celebi",
];
const hoennPokes = [
  "Treecko",
  "Grovyle",
  "Sceptile",
  "Torchic",
  "Combusken",
  "Blaziken",
  "Mudkip",
  "Marshtomp",
  "Swampert",
  "Poochyena",
  "Mightyena",
  "Zigzagoon",
  "Linoone",
  "Wurmple",
  "Silcoon",
  "Beautifly",
  "Cascoon",
  "Dustox",
  "Lotad",
  "Lombre",
  "Ludicolo",
  "Seedot",
  "Nuzleaf",
  "Shiftry",
  "Taillow",
  "Swellow",
  "Wingull",
  "Pelipper",
  "Ralts",
  "Kirlia",
  "Gardevoir",
  "Surskit",
  "Masquerain",
  "Shroomish",
  "Breloom",
  "Slakoth",
  "Vigoroth",
  "Slaking",
  "Nincada",
  "Ninjask",
  "Shedinja",
  "Whismur",
  "Loudred",
  "Exploud",
  "Makuhita",
  "Hariyama",
  "Azurill",
  "Nosepass",
  "Skitty",
  "Delcatty",
  "Sableye",
  "Mawile",
  "Aron",
  "Lairon",
  "Aggron",
  "Meditite",
  "Medicham",
  "Electrike",
  "Manectric",
  "Plusle",
  "Minun",
  "Volbeat",
  "Illumise",
  "Roselia",
  "Gulpin",
  "Swalot",
  "Carvanha",
  "Sharpedo",
  "Wailmer",
  "Wailord",
  "Numel",
  "Camerupt",
  "Torkoal",
  "Spoink",
  "Grumpig",
  "Spinda",
  "Trapinch",
  "Vibrava",
  "Flygon",
  "Cacnea",
  "Cacturne",
  "Swablu",
  "Altaria",
  "Zangoose",
  "Seviper",
  "Lunatone",
  "Solrock",
  "Barboach",
  "Whiscash",
  "Corphish",
  "Crawdaunt",
  "Baltoy",
  "Claydol",
  "Lileep",
  "Cradily",
  "Anorith",
  "Armaldo",
  "Feebas",
  "Milotic",
  "Castform",
  "Kecleon",
  "Shuppet",
  "Banette",
  "Duskull",
  "Dusclops",
  "Tropius",
  "Chimecho",
  "Absol",
  "Wynaut",
  "Snorunt",
  "Glalie",
  "Spheal",
  "Sealeo",
  "Walrein",
  "Clamperl",
  "Huntail",
  "Gorebyss",
  "Relicanth",
  "Luvdisc",
  "Bagon",
  "Shelgon",
  "Salamence",
  "Beldum",
  "Metang",
  "Metagross",
  "Regirock",
  "Regice",
  "Registeel",
  "Latias",
  "Latios",
  "Kyogre",
  "Groudon",
  "Rayquaza",
  "Jirachi",
  "Deoxys",
];
const sinnohPokes = [
  "Turtwig",
  "Grotle",
  "Torterra",
  "Chimchar",
  "Monferno",
  "Infernape",
  "Piplup",
  "Prinplup",
  "Empoleon",
  "Starly",
  "Staravia",
  "Staraptor",
  "Bidoof",
  "Bibarel",
  "Kricketot",
  "Kricketune",
  "Shinx",
  "Luxio",
  "Luxray",
  "Budew",
  "Roserade",
  "Cranidos",
  "Rampardos",
  "Shieldon",
  "Bastiodon",
  "Burmy",
  "Wormadam",
  "Mothim",
  "Combee",
  "Vespiquen",
  "Pachirisu",
  "Buizel",
  "Floatzel",
  "Cherubi",
  "Cherrim",
  "Shellos",
  "Gastrodon",
  "Ambipom",
  "Drifloon",
  "Drifblim",
  "Buneary",
  "Lopunny",
  "Mismagius",
  "Honchkrow",
  "Glameow",
  "Purugly",
  "Chingling",
  "Stunky",
  "Skuntank",
  "Bronzor",
  "Bronzong",
  "Bonsly",
  "Mime Jr.",
  "Happiny",
  "Chatot",
  "Spiritomb",
  "Gible",
  "Gabite",
  "Garchomp",
  "Munchlax",
  "Riolu",
  "Lucario",
  "Hippopotas",
  "Hippowdon",
  "Skorupi",
  "Drapion",
  "Croagunk",
  "Toxicroak",
  "Carnivine",
  "Finneon",
  "Lumineon",
  "Mantyke",
  "Snover",
  "Abomasnow",
  "Weavile",
  "Magnezone",
  "Lickilicky",
  "Rhyperior",
  "Tangrowth",
  "Electivire",
  "Magmortar",
  "Togekiss",
  "Yanmega",
  "Leafeon",
  "Glaceon",
  "Gliscor",
  "Mamoswine",
  "Porygon-Z",
  "Gallade",
  "Probopass",
  "Dusknoir",
  "Froslass",
  "Rotom",
  "Uxie",
  "Mesprit",
  "Azelf",
  "Dialga",
  "Palkia",
  "Heatran",
  "Regigigas",
  "Giratina",
  "Cresselia",
  "Phione",
  "Manaphy",
  "Darkrai",
  "Shaymin",
  "Arceus",
];
const unovaPokes = [
  "Victini",
  "Snivy",
  "Servine",
  "Serperior",
  "Tepig",
  "Pignite",
  "Emboar",
  "Oshawott",
  "Dewott",
  "Samurott",
  "Patrat",
  "Watchog",
  "Lillipup",
  "Herdier",
  "Stoutland",
  "Purrloin",
  "Liepard",
  "Pansage",
  "Simisage",
  "Pansear",
  "Simisear",
  "Panpour",
  "Simipour",
  "Munna",
  "Musharna",
  "Pidove",
  "Tranquill",
  "Unfezant",
  "Blitzle",
  "Zebstrika",
  "Roggenrola",
  "Boldore",
  "Gigalith",
  "Woobat",
  "Swoobat",
  "Drilbur",
  "Excadrill",
  "Audino",
  "Timburr",
  "Gurdurr",
  "Conkeldurr",
  "Tympole",
  "Palpitoad",
  "Seismitoad",
  "Throh",
  "Sawk",
  "Sewaddle",
  "Swadloon",
  "Leavanny",
  "Venipede",
  "Whirlipede",
  "Scolipede",
  "Cottonee",
  "Whimsicott",
  "Petilil",
  "Lilligant",
  "Basculin",
  "Sandile",
  "Krokorok",
  "Krookodile",
  "Darumaka",
  "Darmanitan",
  "Maractus",
  "Dwebble",
  "Crustle",
  "Scraggy",
  "Scrafty",
  "Sigilyph",
  "Yamask",
  "Cofagrigus",
  "Tirtouga",
  "Carracosta",
  "Archen",
  "Archeops",
  "Trubbish",
  "Garbodor",
  "Zorua",
  "Zoroark",
  "Minccino",
  "Cinccino",
  "Gothita",
  "Gothorita",
  "Gothitelle",
  "Solosis",
  "Duosion",
  "Reuniclus",
  "Ducklett",
  "Swanna",
  "Vanillite",
  "Vanillish",
  "Vanilluxe",
  "Deerling",
  "Sawsbuck",
  "Emolga",
  "Karrablast",
  "Escavalier",
  "Foongus",
  "Amoonguss",
  "Frillish",
  "Jellicent",
  "Alomomola",
  "Joltik",
  "Galvantula",
  "Ferroseed",
  "Ferrothorn",
  "Klink",
  "Klang",
  "Klinklang",
  "Tynamo",
  "Eelektrik",
  "Eelektross",
  "Elgyem",
  "Beheeyem",
  "Litwick",
  "Lampent",
  "Chandelure",
  "Axew",
  "Fraxure",
  "Haxorus",
  "Cubchoo",
  "Beartic",
  "Cryogonal",
  "Shelmet",
  "Accelgor",
  "Stunfisk",
  "Mienfoo",
  "Mienshao",
  "Druddigon",
  "Golett",
  "Golurk",
  "Pawniard",
  "Bisharp",
  "Bouffalant",
  "Rufflet",
  "Braviary",
  "Vullaby",
  "Mandibuzz",
  "Heatmor",
  "Durant",
  "Deino",
  "Zweilous",
  "Hydreigon",
  "Larvesta",
  "Volcarona",
  "Cobalion",
  "Terrakion",
  "Virizion",
  "Tornadus",
  "Thundurus",
  "Reshiram",
  "Zekrom",
  "Landorus",
  "Kyurem",
  "Keldeo",
  "Meloetta",
  "Genesect",
];
const kalosPokes = [
  "Chespin",
  "Quilladin",
  "Chesnaught",
  "Fennekin",
  "Braixen",
  "Delphox",
  "Froakie",
  "Frogadier",
  "Greninja",
  "Bunnelby",
  "Diggersby",
  "Fletchling",
  "Fletchinder",
  "Talonflame",
  "Scatterbug",
  "Spewpa",
  "Vivillon",
  "Litleo",
  "Pyroar",
  "Flabébé",
  "Floette",
  "Florges",
  "Skiddo",
  "Gogoat",
  "Pancham",
  "Pangoro",
  "Furfrou",
  "Espurr",
  "Meowstic",
  "Honedge",
  "Doublade",
  "Aegislash",
  "Spritzee",
  "Aromatisse",
  "Swirlix",
  "Slurpuff",
  "Inkay",
  "Malamar",
  "Binacle",
  "Barbaracle",
  "Skrelp",
  "Dragalge",
  "Clauncher",
  "Clawitzer",
  "Helioptile",
  "Heliolisk",
  "Tyrunt",
  "Tyrantrum",
  "Amaura",
  "Aurorus",
  "Sylveon",
  "Hawlucha",
  "Dedenne",
  "Carbink",
  "Goomy",
  "Sliggoo",
  "Goodra",
  "Klefki",
  "Phantump",
  "Trevenant",
  "Pumpkaboo",
  "Gourgeist",
  "Bergmite",
  "Avalugg",
  "Noibat",
  "Noivern",
  "Xerneas",
  "Yveltal",
  "Zygarde",
  "Diancie",
  "Hoopa",
  "Volcanion",
];
const alolaPokes = [
  "Rowlet",
  "Dartrix",
  "Decidueye",
  "Litten",
  "Torracat",
  "Incineroar",
  "Popplio",
  "Brionne",
  "Primarina",
  "Pikipek",
  "Trumbeak",
  "Toucannon",
  "Yungoos",
  "Gumshoos",
  "Grubbin",
  "Charjabug",
  "Vikavolt",
  "Crabrawler",
  "Crabominable",
  "Oricorio",
  "Cutiefly",
  "Ribombee",
  "Rockruff",
  "Lycanroc",
  "Wishiwashi",
  "Mareanie",
  "Toxapex",
  "Mudbray",
  "Mudsdale",
  "Dewpider",
  "Araquanid",
  "Fomantis",
  "Lurantis",
  "Morelull",
  "Shiinotic",
  "Salandit",
  "Salazzle",
  "Stufful",
  "Bewear",
  "Bounsweet",
  "Steenee",
  "Tsareena",
  "Comfey",
  "Oranguru",
  "Passimian",
  "Wimpod",
  "Golisopod",
  "Sandygast",
  "Palossand",
  "Pyukumuku",
  "Type: Null",
  "Silvally",
  "Minior",
  "Komala",
  "Turtonator",
  "Togedemaru",
  "Mimikyu",
  "Bruxish",
  "Drampa",
  "Dhelmise",
  "Jangmo-o",
  "Hakamo-o",
  "Kommo-o",
  "Tapu Koko",
  "Tapu Lele",
  "Tapu Bulu",
  "Tapu Fini",
  "Cosmog",
  "Cosmoem",
  "Solgaleo",
  "Lunala",
  "Nihilego",
  "Buzzwole",
  "Pheromosa",
  "Xurkitree",
  "Celesteela",
  "Kartana",
  "Guzzlord",
  "Necrozma",
  "Magearna",
  "Marshadow",
  "Poipole",
  "Naganadel",
  "Stakataka",
  "Blacephalon",
  "Zeraora",
];

let allPokes = kantoPokes.concat(
  johtoPokes,
  hoennPokes,
  sinnohPokes,
  unovaPokes,
  kalosPokes,
  alolaPokes
);
generate();

const buttonCheck = document.querySelector(".check");
const buttonStart = document.querySelector(".start");
const buttonCloseSummary = document.querySelector(".closeSummary")
const timer = document.querySelector(".timer");
const input = document.querySelector("input");
const guessMenu = document.querySelector(".guess");
let result, resultKanto, resultJohto, resultHoenn, resultSinnoh, resultUnova, resultKalos, resultAlola;

const guessMenuPos = guessMenu.offsetTop;
let timerMinutes = 0;
let timerSeconds = 0;
let intervalId;


function startEndGame() {
  if (buttonStart.innerHTML == "Start") {
    buttonStart.innerHTML = "Poddaj się";
    input.removeAttribute("disabled");
    // buttonCheck.removeAttribute("disabled");
    timer.innerHTML = "00:00";
    intervalId = setInterval(timerCount, 1000);
    if (!!result || result === 0) {
      document.querySelectorAll(".pokeName").forEach(function (e) {
        e.removeChild(e.childNodes[0]);
      });
    }

    resetResults();

    updateResult();
    allPokes = kantoPokes.concat(
      johtoPokes,
      hoennPokes,
      sinnohPokes,
      unovaPokes,
      kalosPokes,
      alolaPokes
    );
  } else {
    buttonStart.innerHTML = "Start";
    input.setAttribute("disabled", true);
    // buttonCheck.setAttribute("disabled", true);
    clearInterval(intervalId);
    document.querySelectorAll(".pokeName").forEach(function (e, i) {
      if (e.childNodes.length == 0) {
        const pokeNotGuessed = document.createElement("p");
        pokeNotGuessed.classList.add("notguessed");
        pokeNotGuessed.innerHTML = allPokes[i];
        e.appendChild(pokeNotGuessed);
      }
    });
    timerMinutes = 0;
    timerSeconds = 0;

    showSummary();
  }
}

function timerCount() {
  timerSeconds++;

  if (timerSeconds >= 60) {
    timerSeconds = 0;
    timerMinutes++;
  }
  let timerSecondsConverted = timerSeconds;
  let timerMinutesConverted = timerMinutes;

  if (timerSeconds >= 0 && timerSeconds < 10) {
    timerSecondsConverted = "0" + timerSecondsConverted;
  }

  if (timerMinutes >= 0 && timerMinutes < 10) {
    timerMinutesConverted = "0" + timerMinutesConverted;
  }

  timer.innerHTML = timerMinutesConverted + ":" + timerSecondsConverted;
}

function generatePoles(array) {
  let pokeId;
  let i = 0;
  switch (array) {
    case kantoPokes: {
      pokeId = 0;
    }
    break;
  case johtoPokes: {
    pokeId = 151;
  }
  break;
  case hoennPokes: {
    pokeId = 251;
  }
  break;
  case sinnohPokes: {
    pokeId = 386;
  }
  break;
  case unovaPokes: {
    pokeId = 493;
  }
  break;
  case kalosPokes: {
    pokeId = 649;
  }
  break;
  case alolaPokes: {
    pokeId = 721;
  }
  break;
  }
  array.forEach(function () {
    pokeId++;
    i++;
    const element = document.createElement("div");

    const pokeIdElement = document.createElement("div");
    pokeIdElement.classList.add("pokeId");
    pokeIdElement.innerHTML = "#" + pokeId;

    const pokeNameElement = document.createElement("div");
    pokeNameElement.classList.add("pokeName");

    element.appendChild(pokeIdElement);
    element.appendChild(pokeNameElement);

    let divOfRegion;

    switch (array) {
      case kantoPokes: {
        divOfRegion = document.querySelector(".kanto");
      }
      break;
    case johtoPokes: {
      divOfRegion = document.querySelector(".johto");
    }
    break;
    case hoennPokes: {
      divOfRegion = document.querySelector(".hoenn");
    }
    break;
    case sinnohPokes: {
      divOfRegion = document.querySelector(".sinnoh");
    }
    break;
    case unovaPokes: {
      divOfRegion = document.querySelector(".unova");
    }
    break;
    case kalosPokes: {
      divOfRegion = document.querySelector(".kalos");
    }
    break;
    case alolaPokes: {
      divOfRegion = document.querySelector(".alola");
    }
    break;
    }

    divOfRegion.appendChild(element);
  });
}

function checkAnswer() {
  const answer = document.querySelector("input").value;
  if (answer) {
    allPokes.forEach(function (e, i) {
      if (answer.toLowerCase() == e.toLowerCase()) {
        const guessedPoke = allPokes[i];
        delete allPokes[i];
        document.querySelector("input").value = "";

        const pokeName = document.createElement("p");
        pokeName.classList.add("guessed");
        pokeName.innerHTML = guessedPoke;

        document.querySelectorAll(".pokeName")[i].appendChild(pokeName);
        result++;
        if (i < 151) resultKanto++;
        else if (i < 251) resultJohto++;
        else if (i < 386) resultHoenn++;
        else if (i < 493) resultSinnoh++;
        else if (i < 649) resultUnova++;
        else if (i < 721) resultKalos++;
        else if (i < 807) resultAlola++;

        updateResult();
      }
    });
  }
}

function generate() {
  generatePoles(kantoPokes);
  generatePoles(johtoPokes);
  generatePoles(hoennPokes);
  generatePoles(sinnohPokes);
  generatePoles(unovaPokes);
  generatePoles(kalosPokes);
  generatePoles(alolaPokes);
}

function updateResult() {
  document.querySelector(".result").innerHTML = result + "/807 odgadniętych";
}

function showSummary() {
  document.querySelector(".sumKanto td:nth-child(2)").textContent = `${resultKanto}/${kantoPokes.length}`;
  document.querySelector(".sumKanto td:nth-child(3)").textContent = `${Math.round((resultKanto / kantoPokes.length) * 100)}%`;

  document.querySelector(".sumJohto td:nth-child(2)").textContent = `${resultJohto}/${johtoPokes.length}`;
  document.querySelector(".sumJohto td:nth-child(3)").textContent = `${Math.round((resultJohto / johtoPokes.length) * 100)}%`;

  document.querySelector(".sumHoenn td:nth-child(2)").textContent = `${resultHoenn}/${hoennPokes.length}`;
  document.querySelector(".sumHoenn td:nth-child(3)").textContent = `${Math.round((resultHoenn / hoennPokes.length) * 100)}%`;

  document.querySelector(".sumSinnoh td:nth-child(2)").textContent = `${resultSinnoh}/${sinnohPokes.length}`;
  document.querySelector(".sumSinnoh td:nth-child(3)").textContent = `${Math.round((resultSinnoh / sinnohPokes.length) * 100)}%`;

  document.querySelector(".sumUnova td:nth-child(2)").textContent = `${resultUnova}/${unovaPokes.length}`;
  document.querySelector(".sumUnova td:nth-child(3)").textContent = `${Math.round((resultUnova / unovaPokes.length) * 100)}%`;

  document.querySelector(".sumKalos td:nth-child(2)").textContent = `${resultKalos}/${kalosPokes.length}`;
  document.querySelector(".sumKalos td:nth-child(3)").textContent = `${Math.round((resultKalos / kalosPokes.length) * 100)}%`;

  document.querySelector(".sumAlola td:nth-child(2)").textContent = `${resultAlola}/${alolaPokes.length}`;
  document.querySelector(".sumAlola td:nth-child(3)").textContent = `${Math.round((resultAlola / alolaPokes.length) * 100)}%`;

  document.querySelector(".sumAll td:nth-child(2)").textContent = `${result}/${allPokes.length}`;
  document.querySelector(".sumAll td:nth-child(3)").textContent = `${Math.round((result / allPokes.length) * 100)}%`;

  document.querySelector(".summary").classList.add("show");
}

function resetResults() {
  result = 0;
  resultKanto = 0;
  resultSinnoh = 0;
  resultUnova = 0;
  resultKalos = 0;
  resultJohto = 0;
  resultAlola = 0;
  resultHoenn = 0;
}

// buttonCheck.addEventListener("click", checkAnswer);
buttonStart.addEventListener("click", startEndGame);
buttonCloseSummary.addEventListener("click", () => document.querySelector(".summary").classList.remove("show"));
input.addEventListener("keyup", checkAnswer);