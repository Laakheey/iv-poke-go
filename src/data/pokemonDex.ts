// Generated from official Pokémon GO Game Master data via PoGOAPI.net (1092 released species & combat forms)

export interface PogoPokemon {
  id: string;
  dex: number;
  name: string;
  form?: string;
  types: string[];
  atk: number;
  def: number;
  sta: number;
}

export const POKEMON_DEX: PogoPokemon[] = [
  {
    "id": "1-bulbasaur",
    "dex": 1,
    "name": "Bulbasaur",
    "types": [
      "Grass",
      "Poison"
    ],
    "atk": 118,
    "def": 111,
    "sta": 128
  },
  {
    "id": "2-ivysaur",
    "dex": 2,
    "name": "Ivysaur",
    "types": [
      "Grass",
      "Poison"
    ],
    "atk": 151,
    "def": 143,
    "sta": 155
  },
  {
    "id": "3-venusaur",
    "dex": 3,
    "name": "Venusaur",
    "types": [
      "Grass",
      "Poison"
    ],
    "atk": 198,
    "def": 189,
    "sta": 190
  },
  {
    "id": "3-mega-normal",
    "dex": 3,
    "name": "Mega Venusaur",
    "form": "Mega",
    "types": [
      "Grass",
      "Poison"
    ],
    "atk": 241,
    "def": 246,
    "sta": 190
  },
  {
    "id": "4-charmander",
    "dex": 4,
    "name": "Charmander",
    "types": [
      "Fire"
    ],
    "atk": 116,
    "def": 93,
    "sta": 118
  },
  {
    "id": "5-charmeleon",
    "dex": 5,
    "name": "Charmeleon",
    "types": [
      "Fire"
    ],
    "atk": 158,
    "def": 126,
    "sta": 151
  },
  {
    "id": "6-charizard",
    "dex": 6,
    "name": "Charizard",
    "types": [
      "Fire",
      "Flying"
    ],
    "atk": 223,
    "def": 173,
    "sta": 186
  },
  {
    "id": "6-mega-x",
    "dex": 6,
    "name": "Mega Charizard X",
    "form": "Mega",
    "types": [
      "Fire",
      "Dragon"
    ],
    "atk": 273,
    "def": 213,
    "sta": 186
  },
  {
    "id": "6-mega-y",
    "dex": 6,
    "name": "Mega Charizard Y",
    "form": "Mega",
    "types": [
      "Fire",
      "Flying"
    ],
    "atk": 319,
    "def": 212,
    "sta": 186
  },
  {
    "id": "7-squirtle",
    "dex": 7,
    "name": "Squirtle",
    "types": [
      "Water"
    ],
    "atk": 94,
    "def": 121,
    "sta": 127
  },
  {
    "id": "8-wartortle",
    "dex": 8,
    "name": "Wartortle",
    "types": [
      "Water"
    ],
    "atk": 126,
    "def": 155,
    "sta": 153
  },
  {
    "id": "9-blastoise",
    "dex": 9,
    "name": "Blastoise",
    "types": [
      "Water"
    ],
    "atk": 171,
    "def": 207,
    "sta": 188
  },
  {
    "id": "9-mega-normal",
    "dex": 9,
    "name": "Mega Blastoise",
    "form": "Mega",
    "types": [
      "Water"
    ],
    "atk": 264,
    "def": 237,
    "sta": 188
  },
  {
    "id": "10-caterpie",
    "dex": 10,
    "name": "Caterpie",
    "types": [
      "Bug"
    ],
    "atk": 55,
    "def": 55,
    "sta": 128
  },
  {
    "id": "11-metapod",
    "dex": 11,
    "name": "Metapod",
    "types": [
      "Bug"
    ],
    "atk": 45,
    "def": 80,
    "sta": 137
  },
  {
    "id": "12-butterfree",
    "dex": 12,
    "name": "Butterfree",
    "types": [
      "Bug",
      "Flying"
    ],
    "atk": 167,
    "def": 137,
    "sta": 155
  },
  {
    "id": "13-weedle",
    "dex": 13,
    "name": "Weedle",
    "types": [
      "Bug",
      "Poison"
    ],
    "atk": 63,
    "def": 50,
    "sta": 120
  },
  {
    "id": "14-kakuna",
    "dex": 14,
    "name": "Kakuna",
    "types": [
      "Bug",
      "Poison"
    ],
    "atk": 46,
    "def": 75,
    "sta": 128
  },
  {
    "id": "15-beedrill",
    "dex": 15,
    "name": "Beedrill",
    "types": [
      "Bug",
      "Poison"
    ],
    "atk": 169,
    "def": 130,
    "sta": 163
  },
  {
    "id": "15-mega-normal",
    "dex": 15,
    "name": "Mega Beedrill",
    "form": "Mega",
    "types": [
      "Bug",
      "Poison"
    ],
    "atk": 303,
    "def": 148,
    "sta": 163
  },
  {
    "id": "16-pidgey",
    "dex": 16,
    "name": "Pidgey",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 85,
    "def": 73,
    "sta": 120
  },
  {
    "id": "17-pidgeotto",
    "dex": 17,
    "name": "Pidgeotto",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 117,
    "def": 105,
    "sta": 160
  },
  {
    "id": "18-pidgeot",
    "dex": 18,
    "name": "Pidgeot",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 166,
    "def": 154,
    "sta": 195
  },
  {
    "id": "18-mega-normal",
    "dex": 18,
    "name": "Mega Pidgeot",
    "form": "Mega",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 280,
    "def": 175,
    "sta": 195
  },
  {
    "id": "19-rattata",
    "dex": 19,
    "name": "Rattata",
    "types": [
      "Normal"
    ],
    "atk": 103,
    "def": 70,
    "sta": 102
  },
  {
    "id": "19-alola",
    "dex": 19,
    "name": "Rattata",
    "form": "Alolan",
    "types": [
      "Dark",
      "Normal"
    ],
    "atk": 103,
    "def": 70,
    "sta": 102
  },
  {
    "id": "20-raticate",
    "dex": 20,
    "name": "Raticate",
    "types": [
      "Normal"
    ],
    "atk": 161,
    "def": 139,
    "sta": 146
  },
  {
    "id": "20-alola",
    "dex": 20,
    "name": "Raticate",
    "form": "Alolan",
    "types": [
      "Dark",
      "Normal"
    ],
    "atk": 135,
    "def": 154,
    "sta": 181
  },
  {
    "id": "21-spearow",
    "dex": 21,
    "name": "Spearow",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 112,
    "def": 60,
    "sta": 120
  },
  {
    "id": "22-fearow",
    "dex": 22,
    "name": "Fearow",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 182,
    "def": 133,
    "sta": 163
  },
  {
    "id": "23-ekans",
    "dex": 23,
    "name": "Ekans",
    "types": [
      "Poison"
    ],
    "atk": 110,
    "def": 97,
    "sta": 111
  },
  {
    "id": "24-arbok",
    "dex": 24,
    "name": "Arbok",
    "types": [
      "Poison"
    ],
    "atk": 167,
    "def": 153,
    "sta": 155
  },
  {
    "id": "25-pikachu",
    "dex": 25,
    "name": "Pikachu",
    "types": [
      "Electric"
    ],
    "atk": 112,
    "def": 96,
    "sta": 111
  },
  {
    "id": "26-raichu",
    "dex": 26,
    "name": "Raichu",
    "types": [
      "Electric"
    ],
    "atk": 193,
    "def": 151,
    "sta": 155
  },
  {
    "id": "26-alola",
    "dex": 26,
    "name": "Raichu",
    "form": "Alolan",
    "types": [
      "Electric",
      "Psychic"
    ],
    "atk": 201,
    "def": 154,
    "sta": 155
  },
  {
    "id": "27-sandshrew",
    "dex": 27,
    "name": "Sandshrew",
    "types": [
      "Ground"
    ],
    "atk": 126,
    "def": 120,
    "sta": 137
  },
  {
    "id": "27-alola",
    "dex": 27,
    "name": "Sandshrew",
    "form": "Alolan",
    "types": [
      "Ice",
      "Steel"
    ],
    "atk": 125,
    "def": 129,
    "sta": 137
  },
  {
    "id": "28-sandslash",
    "dex": 28,
    "name": "Sandslash",
    "types": [
      "Ground"
    ],
    "atk": 182,
    "def": 175,
    "sta": 181
  },
  {
    "id": "28-alola",
    "dex": 28,
    "name": "Sandslash",
    "form": "Alolan",
    "types": [
      "Ice",
      "Steel"
    ],
    "atk": 177,
    "def": 195,
    "sta": 181
  },
  {
    "id": "29-nidoran_",
    "dex": 29,
    "name": "Nidoran♀",
    "types": [
      "Poison"
    ],
    "atk": 86,
    "def": 89,
    "sta": 146
  },
  {
    "id": "30-nidorina",
    "dex": 30,
    "name": "Nidorina",
    "types": [
      "Poison"
    ],
    "atk": 117,
    "def": 120,
    "sta": 172
  },
  {
    "id": "31-nidoqueen",
    "dex": 31,
    "name": "Nidoqueen",
    "types": [
      "Poison",
      "Ground"
    ],
    "atk": 180,
    "def": 173,
    "sta": 207
  },
  {
    "id": "32-nidoran_",
    "dex": 32,
    "name": "Nidoran♂",
    "types": [
      "Poison"
    ],
    "atk": 105,
    "def": 76,
    "sta": 130
  },
  {
    "id": "33-nidorino",
    "dex": 33,
    "name": "Nidorino",
    "types": [
      "Poison"
    ],
    "atk": 137,
    "def": 111,
    "sta": 156
  },
  {
    "id": "34-nidoking",
    "dex": 34,
    "name": "Nidoking",
    "types": [
      "Poison",
      "Ground"
    ],
    "atk": 204,
    "def": 156,
    "sta": 191
  },
  {
    "id": "35-clefairy",
    "dex": 35,
    "name": "Clefairy",
    "types": [
      "Fairy"
    ],
    "atk": 107,
    "def": 108,
    "sta": 172
  },
  {
    "id": "36-clefable",
    "dex": 36,
    "name": "Clefable",
    "types": [
      "Fairy"
    ],
    "atk": 178,
    "def": 162,
    "sta": 216
  },
  {
    "id": "37-vulpix",
    "dex": 37,
    "name": "Vulpix",
    "types": [
      "Fire"
    ],
    "atk": 96,
    "def": 109,
    "sta": 116
  },
  {
    "id": "37-alola",
    "dex": 37,
    "name": "Vulpix",
    "form": "Alolan",
    "types": [
      "Ice"
    ],
    "atk": 96,
    "def": 109,
    "sta": 116
  },
  {
    "id": "38-ninetales",
    "dex": 38,
    "name": "Ninetales",
    "types": [
      "Fire"
    ],
    "atk": 169,
    "def": 190,
    "sta": 177
  },
  {
    "id": "38-alola",
    "dex": 38,
    "name": "Ninetales",
    "form": "Alolan",
    "types": [
      "Ice",
      "Fairy"
    ],
    "atk": 170,
    "def": 193,
    "sta": 177
  },
  {
    "id": "39-jigglypuff",
    "dex": 39,
    "name": "Jigglypuff",
    "types": [
      "Normal",
      "Fairy"
    ],
    "atk": 80,
    "def": 41,
    "sta": 251
  },
  {
    "id": "40-wigglytuff",
    "dex": 40,
    "name": "Wigglytuff",
    "types": [
      "Normal",
      "Fairy"
    ],
    "atk": 156,
    "def": 90,
    "sta": 295
  },
  {
    "id": "41-zubat",
    "dex": 41,
    "name": "Zubat",
    "types": [
      "Poison",
      "Flying"
    ],
    "atk": 83,
    "def": 73,
    "sta": 120
  },
  {
    "id": "42-golbat",
    "dex": 42,
    "name": "Golbat",
    "types": [
      "Poison",
      "Flying"
    ],
    "atk": 161,
    "def": 150,
    "sta": 181
  },
  {
    "id": "43-oddish",
    "dex": 43,
    "name": "Oddish",
    "types": [
      "Grass",
      "Poison"
    ],
    "atk": 131,
    "def": 112,
    "sta": 128
  },
  {
    "id": "44-gloom",
    "dex": 44,
    "name": "Gloom",
    "types": [
      "Grass",
      "Poison"
    ],
    "atk": 153,
    "def": 136,
    "sta": 155
  },
  {
    "id": "45-vileplume",
    "dex": 45,
    "name": "Vileplume",
    "types": [
      "Grass",
      "Poison"
    ],
    "atk": 202,
    "def": 167,
    "sta": 181
  },
  {
    "id": "46-paras",
    "dex": 46,
    "name": "Paras",
    "types": [
      "Bug",
      "Grass"
    ],
    "atk": 121,
    "def": 99,
    "sta": 111
  },
  {
    "id": "47-parasect",
    "dex": 47,
    "name": "Parasect",
    "types": [
      "Bug",
      "Grass"
    ],
    "atk": 165,
    "def": 146,
    "sta": 155
  },
  {
    "id": "48-venonat",
    "dex": 48,
    "name": "Venonat",
    "types": [
      "Bug",
      "Poison"
    ],
    "atk": 100,
    "def": 100,
    "sta": 155
  },
  {
    "id": "49-venomoth",
    "dex": 49,
    "name": "Venomoth",
    "types": [
      "Bug",
      "Poison"
    ],
    "atk": 179,
    "def": 143,
    "sta": 172
  },
  {
    "id": "50-diglett",
    "dex": 50,
    "name": "Diglett",
    "types": [
      "Ground"
    ],
    "atk": 109,
    "def": 78,
    "sta": 67
  },
  {
    "id": "50-alola",
    "dex": 50,
    "name": "Diglett",
    "form": "Alolan",
    "types": [
      "Ground",
      "Steel"
    ],
    "atk": 108,
    "def": 81,
    "sta": 67
  },
  {
    "id": "51-dugtrio",
    "dex": 51,
    "name": "Dugtrio",
    "types": [
      "Ground"
    ],
    "atk": 167,
    "def": 136,
    "sta": 111
  },
  {
    "id": "51-alola",
    "dex": 51,
    "name": "Dugtrio",
    "form": "Alolan",
    "types": [
      "Ground",
      "Steel"
    ],
    "atk": 201,
    "def": 142,
    "sta": 111
  },
  {
    "id": "52-meowth",
    "dex": 52,
    "name": "Meowth",
    "types": [
      "Normal"
    ],
    "atk": 92,
    "def": 78,
    "sta": 120
  },
  {
    "id": "52-alola",
    "dex": 52,
    "name": "Meowth",
    "form": "Alolan",
    "types": [
      "Dark"
    ],
    "atk": 99,
    "def": 78,
    "sta": 120
  },
  {
    "id": "52-galarian",
    "dex": 52,
    "name": "Meowth",
    "form": "Galarian",
    "types": [
      "Steel"
    ],
    "atk": 115,
    "def": 92,
    "sta": 137
  },
  {
    "id": "53-persian",
    "dex": 53,
    "name": "Persian",
    "types": [
      "Normal"
    ],
    "atk": 150,
    "def": 136,
    "sta": 163
  },
  {
    "id": "53-alola",
    "dex": 53,
    "name": "Persian",
    "form": "Alolan",
    "types": [
      "Dark"
    ],
    "atk": 158,
    "def": 136,
    "sta": 163
  },
  {
    "id": "54-psyduck",
    "dex": 54,
    "name": "Psyduck",
    "types": [
      "Water"
    ],
    "atk": 122,
    "def": 95,
    "sta": 137
  },
  {
    "id": "55-golduck",
    "dex": 55,
    "name": "Golduck",
    "types": [
      "Water"
    ],
    "atk": 191,
    "def": 162,
    "sta": 190
  },
  {
    "id": "56-mankey",
    "dex": 56,
    "name": "Mankey",
    "types": [
      "Fighting"
    ],
    "atk": 148,
    "def": 82,
    "sta": 120
  },
  {
    "id": "57-primeape",
    "dex": 57,
    "name": "Primeape",
    "types": [
      "Fighting"
    ],
    "atk": 207,
    "def": 138,
    "sta": 163
  },
  {
    "id": "58-growlithe",
    "dex": 58,
    "name": "Growlithe",
    "types": [
      "Fire"
    ],
    "atk": 136,
    "def": 93,
    "sta": 146
  },
  {
    "id": "58-hisuian",
    "dex": 58,
    "name": "Growlithe",
    "form": "Hisuian",
    "types": [
      "Fire",
      "Rock"
    ],
    "atk": 142,
    "def": 92,
    "sta": 155
  },
  {
    "id": "59-arcanine",
    "dex": 59,
    "name": "Arcanine",
    "types": [
      "Fire"
    ],
    "atk": 227,
    "def": 166,
    "sta": 207
  },
  {
    "id": "59-hisuian",
    "dex": 59,
    "name": "Arcanine",
    "form": "Hisuian",
    "types": [
      "Fire",
      "Rock"
    ],
    "atk": 232,
    "def": 165,
    "sta": 216
  },
  {
    "id": "60-poliwag",
    "dex": 60,
    "name": "Poliwag",
    "types": [
      "Water"
    ],
    "atk": 101,
    "def": 82,
    "sta": 120
  },
  {
    "id": "61-poliwhirl",
    "dex": 61,
    "name": "Poliwhirl",
    "types": [
      "Water"
    ],
    "atk": 130,
    "def": 123,
    "sta": 163
  },
  {
    "id": "62-poliwrath",
    "dex": 62,
    "name": "Poliwrath",
    "types": [
      "Water",
      "Fighting"
    ],
    "atk": 182,
    "def": 184,
    "sta": 207
  },
  {
    "id": "63-abra",
    "dex": 63,
    "name": "Abra",
    "types": [
      "Psychic"
    ],
    "atk": 195,
    "def": 82,
    "sta": 93
  },
  {
    "id": "64-kadabra",
    "dex": 64,
    "name": "Kadabra",
    "types": [
      "Psychic"
    ],
    "atk": 232,
    "def": 117,
    "sta": 120
  },
  {
    "id": "65-alakazam",
    "dex": 65,
    "name": "Alakazam",
    "types": [
      "Psychic"
    ],
    "atk": 271,
    "def": 167,
    "sta": 146
  },
  {
    "id": "65-mega-normal",
    "dex": 65,
    "name": "Mega Alakazam",
    "form": "Mega",
    "types": [
      "Psychic"
    ],
    "atk": 367,
    "def": 207,
    "sta": 146
  },
  {
    "id": "66-machop",
    "dex": 66,
    "name": "Machop",
    "types": [
      "Fighting"
    ],
    "atk": 137,
    "def": 82,
    "sta": 172
  },
  {
    "id": "67-machoke",
    "dex": 67,
    "name": "Machoke",
    "types": [
      "Fighting"
    ],
    "atk": 177,
    "def": 125,
    "sta": 190
  },
  {
    "id": "68-machamp",
    "dex": 68,
    "name": "Machamp",
    "types": [
      "Fighting"
    ],
    "atk": 234,
    "def": 159,
    "sta": 207
  },
  {
    "id": "69-bellsprout",
    "dex": 69,
    "name": "Bellsprout",
    "types": [
      "Grass",
      "Poison"
    ],
    "atk": 139,
    "def": 61,
    "sta": 137
  },
  {
    "id": "70-weepinbell",
    "dex": 70,
    "name": "Weepinbell",
    "types": [
      "Grass",
      "Poison"
    ],
    "atk": 172,
    "def": 92,
    "sta": 163
  },
  {
    "id": "71-victreebel",
    "dex": 71,
    "name": "Victreebel",
    "types": [
      "Grass",
      "Poison"
    ],
    "atk": 207,
    "def": 135,
    "sta": 190
  },
  {
    "id": "72-tentacool",
    "dex": 72,
    "name": "Tentacool",
    "types": [
      "Water",
      "Poison"
    ],
    "atk": 97,
    "def": 149,
    "sta": 120
  },
  {
    "id": "73-tentacruel",
    "dex": 73,
    "name": "Tentacruel",
    "types": [
      "Water",
      "Poison"
    ],
    "atk": 166,
    "def": 209,
    "sta": 190
  },
  {
    "id": "74-geodude",
    "dex": 74,
    "name": "Geodude",
    "types": [
      "Rock",
      "Ground"
    ],
    "atk": 132,
    "def": 132,
    "sta": 120
  },
  {
    "id": "74-alola",
    "dex": 74,
    "name": "Geodude",
    "form": "Alolan",
    "types": [
      "Rock",
      "Electric"
    ],
    "atk": 132,
    "def": 132,
    "sta": 120
  },
  {
    "id": "75-graveler",
    "dex": 75,
    "name": "Graveler",
    "types": [
      "Rock",
      "Ground"
    ],
    "atk": 164,
    "def": 164,
    "sta": 146
  },
  {
    "id": "75-alola",
    "dex": 75,
    "name": "Graveler",
    "form": "Alolan",
    "types": [
      "Rock",
      "Electric"
    ],
    "atk": 164,
    "def": 164,
    "sta": 146
  },
  {
    "id": "76-golem",
    "dex": 76,
    "name": "Golem",
    "types": [
      "Rock",
      "Ground"
    ],
    "atk": 211,
    "def": 198,
    "sta": 190
  },
  {
    "id": "76-alola",
    "dex": 76,
    "name": "Golem",
    "form": "Alolan",
    "types": [
      "Rock",
      "Electric"
    ],
    "atk": 211,
    "def": 198,
    "sta": 190
  },
  {
    "id": "77-ponyta",
    "dex": 77,
    "name": "Ponyta",
    "types": [
      "Fire"
    ],
    "atk": 170,
    "def": 127,
    "sta": 137
  },
  {
    "id": "77-galarian",
    "dex": 77,
    "name": "Ponyta",
    "form": "Galarian",
    "types": [
      "Psychic"
    ],
    "atk": 170,
    "def": 127,
    "sta": 137
  },
  {
    "id": "78-rapidash",
    "dex": 78,
    "name": "Rapidash",
    "types": [
      "Fire"
    ],
    "atk": 207,
    "def": 162,
    "sta": 163
  },
  {
    "id": "78-galarian",
    "dex": 78,
    "name": "Rapidash",
    "form": "Galarian",
    "types": [
      "Psychic",
      "Fairy"
    ],
    "atk": 207,
    "def": 162,
    "sta": 163
  },
  {
    "id": "79-slowpoke",
    "dex": 79,
    "name": "Slowpoke",
    "types": [
      "Water",
      "Psychic"
    ],
    "atk": 109,
    "def": 98,
    "sta": 207
  },
  {
    "id": "79-galarian",
    "dex": 79,
    "name": "Slowpoke",
    "form": "Galarian",
    "types": [
      "Psychic"
    ],
    "atk": 109,
    "def": 98,
    "sta": 207
  },
  {
    "id": "80-slowbro",
    "dex": 80,
    "name": "Slowbro",
    "types": [
      "Water",
      "Psychic"
    ],
    "atk": 177,
    "def": 180,
    "sta": 216
  },
  {
    "id": "80-galarian",
    "dex": 80,
    "name": "Slowbro",
    "form": "Galarian",
    "types": [
      "Poison",
      "Psychic"
    ],
    "atk": 182,
    "def": 156,
    "sta": 216
  },
  {
    "id": "80-mega-normal",
    "dex": 80,
    "name": "Mega Slowbro",
    "form": "Mega",
    "types": [
      "Water",
      "Psychic"
    ],
    "atk": 224,
    "def": 259,
    "sta": 216
  },
  {
    "id": "81-magnemite",
    "dex": 81,
    "name": "Magnemite",
    "types": [
      "Electric",
      "Steel"
    ],
    "atk": 165,
    "def": 121,
    "sta": 93
  },
  {
    "id": "82-magneton",
    "dex": 82,
    "name": "Magneton",
    "types": [
      "Electric",
      "Steel"
    ],
    "atk": 223,
    "def": 169,
    "sta": 137
  },
  {
    "id": "83-farfetch_d",
    "dex": 83,
    "name": "Farfetch’d",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 124,
    "def": 115,
    "sta": 141
  },
  {
    "id": "83-galarian",
    "dex": 83,
    "name": "Farfetch’d",
    "form": "Galarian",
    "types": [
      "Fighting"
    ],
    "atk": 174,
    "def": 114,
    "sta": 141
  },
  {
    "id": "84-doduo",
    "dex": 84,
    "name": "Doduo",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 158,
    "def": 83,
    "sta": 111
  },
  {
    "id": "85-dodrio",
    "dex": 85,
    "name": "Dodrio",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 218,
    "def": 140,
    "sta": 155
  },
  {
    "id": "86-seel",
    "dex": 86,
    "name": "Seel",
    "types": [
      "Water"
    ],
    "atk": 85,
    "def": 121,
    "sta": 163
  },
  {
    "id": "87-dewgong",
    "dex": 87,
    "name": "Dewgong",
    "types": [
      "Water",
      "Ice"
    ],
    "atk": 139,
    "def": 177,
    "sta": 207
  },
  {
    "id": "88-grimer",
    "dex": 88,
    "name": "Grimer",
    "types": [
      "Poison"
    ],
    "atk": 135,
    "def": 90,
    "sta": 190
  },
  {
    "id": "88-alola",
    "dex": 88,
    "name": "Grimer",
    "form": "Alolan",
    "types": [
      "Poison",
      "Dark"
    ],
    "atk": 135,
    "def": 90,
    "sta": 190
  },
  {
    "id": "89-muk",
    "dex": 89,
    "name": "Muk",
    "types": [
      "Poison"
    ],
    "atk": 190,
    "def": 172,
    "sta": 233
  },
  {
    "id": "89-alola",
    "dex": 89,
    "name": "Muk",
    "form": "Alolan",
    "types": [
      "Poison",
      "Dark"
    ],
    "atk": 190,
    "def": 172,
    "sta": 233
  },
  {
    "id": "90-shellder",
    "dex": 90,
    "name": "Shellder",
    "types": [
      "Water"
    ],
    "atk": 116,
    "def": 134,
    "sta": 102
  },
  {
    "id": "91-cloyster",
    "dex": 91,
    "name": "Cloyster",
    "types": [
      "Water",
      "Ice"
    ],
    "atk": 186,
    "def": 256,
    "sta": 137
  },
  {
    "id": "92-gastly",
    "dex": 92,
    "name": "Gastly",
    "types": [
      "Ghost",
      "Poison"
    ],
    "atk": 186,
    "def": 67,
    "sta": 102
  },
  {
    "id": "93-haunter",
    "dex": 93,
    "name": "Haunter",
    "types": [
      "Ghost",
      "Poison"
    ],
    "atk": 223,
    "def": 107,
    "sta": 128
  },
  {
    "id": "94-gengar",
    "dex": 94,
    "name": "Gengar",
    "types": [
      "Ghost",
      "Poison"
    ],
    "atk": 261,
    "def": 149,
    "sta": 155
  },
  {
    "id": "94-mega-normal",
    "dex": 94,
    "name": "Mega Gengar",
    "form": "Mega",
    "types": [
      "Ghost",
      "Poison"
    ],
    "atk": 349,
    "def": 199,
    "sta": 155
  },
  {
    "id": "95-onix",
    "dex": 95,
    "name": "Onix",
    "types": [
      "Rock",
      "Ground"
    ],
    "atk": 85,
    "def": 232,
    "sta": 111
  },
  {
    "id": "96-drowzee",
    "dex": 96,
    "name": "Drowzee",
    "types": [
      "Psychic"
    ],
    "atk": 89,
    "def": 136,
    "sta": 155
  },
  {
    "id": "97-hypno",
    "dex": 97,
    "name": "Hypno",
    "types": [
      "Psychic"
    ],
    "atk": 144,
    "def": 193,
    "sta": 198
  },
  {
    "id": "98-krabby",
    "dex": 98,
    "name": "Krabby",
    "types": [
      "Water"
    ],
    "atk": 181,
    "def": 124,
    "sta": 102
  },
  {
    "id": "99-kingler",
    "dex": 99,
    "name": "Kingler",
    "types": [
      "Water"
    ],
    "atk": 240,
    "def": 181,
    "sta": 146
  },
  {
    "id": "100-voltorb",
    "dex": 100,
    "name": "Voltorb",
    "types": [
      "Electric"
    ],
    "atk": 109,
    "def": 111,
    "sta": 120
  },
  {
    "id": "100-hisuian",
    "dex": 100,
    "name": "Voltorb",
    "form": "Hisuian",
    "types": [
      "Electric",
      "Grass"
    ],
    "atk": 109,
    "def": 111,
    "sta": 120
  },
  {
    "id": "101-electrode",
    "dex": 101,
    "name": "Electrode",
    "types": [
      "Electric"
    ],
    "atk": 173,
    "def": 173,
    "sta": 155
  },
  {
    "id": "101-hisuian",
    "dex": 101,
    "name": "Electrode",
    "form": "Hisuian",
    "types": [
      "Electric",
      "Grass"
    ],
    "atk": 176,
    "def": 176,
    "sta": 155
  },
  {
    "id": "102-exeggcute",
    "dex": 102,
    "name": "Exeggcute",
    "types": [
      "Grass",
      "Psychic"
    ],
    "atk": 107,
    "def": 125,
    "sta": 155
  },
  {
    "id": "103-exeggutor",
    "dex": 103,
    "name": "Exeggutor",
    "types": [
      "Grass",
      "Psychic"
    ],
    "atk": 233,
    "def": 149,
    "sta": 216
  },
  {
    "id": "103-alola",
    "dex": 103,
    "name": "Exeggutor",
    "form": "Alolan",
    "types": [
      "Grass",
      "Dragon"
    ],
    "atk": 230,
    "def": 153,
    "sta": 216
  },
  {
    "id": "104-cubone",
    "dex": 104,
    "name": "Cubone",
    "types": [
      "Ground"
    ],
    "atk": 90,
    "def": 144,
    "sta": 137
  },
  {
    "id": "105-marowak",
    "dex": 105,
    "name": "Marowak",
    "types": [
      "Ground"
    ],
    "atk": 144,
    "def": 186,
    "sta": 155
  },
  {
    "id": "105-alola",
    "dex": 105,
    "name": "Marowak",
    "form": "Alolan",
    "types": [
      "Fire",
      "Ghost"
    ],
    "atk": 144,
    "def": 186,
    "sta": 155
  },
  {
    "id": "106-hitmonlee",
    "dex": 106,
    "name": "Hitmonlee",
    "types": [
      "Fighting"
    ],
    "atk": 224,
    "def": 181,
    "sta": 137
  },
  {
    "id": "107-hitmonchan",
    "dex": 107,
    "name": "Hitmonchan",
    "types": [
      "Fighting"
    ],
    "atk": 193,
    "def": 197,
    "sta": 137
  },
  {
    "id": "108-lickitung",
    "dex": 108,
    "name": "Lickitung",
    "types": [
      "Normal"
    ],
    "atk": 108,
    "def": 137,
    "sta": 207
  },
  {
    "id": "109-koffing",
    "dex": 109,
    "name": "Koffing",
    "types": [
      "Poison"
    ],
    "atk": 119,
    "def": 141,
    "sta": 120
  },
  {
    "id": "110-weezing",
    "dex": 110,
    "name": "Weezing",
    "types": [
      "Poison"
    ],
    "atk": 174,
    "def": 197,
    "sta": 163
  },
  {
    "id": "110-galarian",
    "dex": 110,
    "name": "Weezing",
    "form": "Galarian",
    "types": [
      "Poison",
      "Fairy"
    ],
    "atk": 174,
    "def": 197,
    "sta": 163
  },
  {
    "id": "111-rhyhorn",
    "dex": 111,
    "name": "Rhyhorn",
    "types": [
      "Ground",
      "Rock"
    ],
    "atk": 140,
    "def": 127,
    "sta": 190
  },
  {
    "id": "112-rhydon",
    "dex": 112,
    "name": "Rhydon",
    "types": [
      "Ground",
      "Rock"
    ],
    "atk": 222,
    "def": 171,
    "sta": 233
  },
  {
    "id": "113-chansey",
    "dex": 113,
    "name": "Chansey",
    "types": [
      "Normal"
    ],
    "atk": 60,
    "def": 128,
    "sta": 487
  },
  {
    "id": "114-tangela",
    "dex": 114,
    "name": "Tangela",
    "types": [
      "Grass"
    ],
    "atk": 183,
    "def": 169,
    "sta": 163
  },
  {
    "id": "115-kangaskhan",
    "dex": 115,
    "name": "Kangaskhan",
    "types": [
      "Normal"
    ],
    "atk": 181,
    "def": 165,
    "sta": 233
  },
  {
    "id": "115-mega-normal",
    "dex": 115,
    "name": "Mega Kangaskhan",
    "form": "Mega",
    "types": [
      "Normal"
    ],
    "atk": 246,
    "def": 210,
    "sta": 233
  },
  {
    "id": "116-horsea",
    "dex": 116,
    "name": "Horsea",
    "types": [
      "Water"
    ],
    "atk": 129,
    "def": 103,
    "sta": 102
  },
  {
    "id": "117-seadra",
    "dex": 117,
    "name": "Seadra",
    "types": [
      "Water"
    ],
    "atk": 187,
    "def": 156,
    "sta": 146
  },
  {
    "id": "118-goldeen",
    "dex": 118,
    "name": "Goldeen",
    "types": [
      "Water"
    ],
    "atk": 123,
    "def": 110,
    "sta": 128
  },
  {
    "id": "119-seaking",
    "dex": 119,
    "name": "Seaking",
    "types": [
      "Water"
    ],
    "atk": 175,
    "def": 147,
    "sta": 190
  },
  {
    "id": "120-staryu",
    "dex": 120,
    "name": "Staryu",
    "types": [
      "Water"
    ],
    "atk": 137,
    "def": 112,
    "sta": 102
  },
  {
    "id": "121-starmie",
    "dex": 121,
    "name": "Starmie",
    "types": [
      "Water",
      "Psychic"
    ],
    "atk": 210,
    "def": 184,
    "sta": 155
  },
  {
    "id": "122-mr_mime",
    "dex": 122,
    "name": "Mr. Mime",
    "types": [
      "Psychic",
      "Fairy"
    ],
    "atk": 192,
    "def": 205,
    "sta": 120
  },
  {
    "id": "122-galarian",
    "dex": 122,
    "name": "Mr. Mime",
    "form": "Galarian",
    "types": [
      "Ice",
      "Psychic"
    ],
    "atk": 183,
    "def": 169,
    "sta": 137
  },
  {
    "id": "123-scyther",
    "dex": 123,
    "name": "Scyther",
    "types": [
      "Bug",
      "Flying"
    ],
    "atk": 218,
    "def": 170,
    "sta": 172
  },
  {
    "id": "124-jynx",
    "dex": 124,
    "name": "Jynx",
    "types": [
      "Ice",
      "Psychic"
    ],
    "atk": 223,
    "def": 151,
    "sta": 163
  },
  {
    "id": "125-electabuzz",
    "dex": 125,
    "name": "Electabuzz",
    "types": [
      "Electric"
    ],
    "atk": 198,
    "def": 158,
    "sta": 163
  },
  {
    "id": "126-magmar",
    "dex": 126,
    "name": "Magmar",
    "types": [
      "Fire"
    ],
    "atk": 206,
    "def": 154,
    "sta": 163
  },
  {
    "id": "127-pinsir",
    "dex": 127,
    "name": "Pinsir",
    "types": [
      "Bug"
    ],
    "atk": 238,
    "def": 182,
    "sta": 163
  },
  {
    "id": "127-mega-normal",
    "dex": 127,
    "name": "Mega Pinsir",
    "form": "Mega",
    "types": [
      "Bug",
      "Flying"
    ],
    "atk": 305,
    "def": 231,
    "sta": 163
  },
  {
    "id": "128-tauros",
    "dex": 128,
    "name": "Tauros",
    "types": [
      "Normal"
    ],
    "atk": 198,
    "def": 183,
    "sta": 181
  },
  {
    "id": "128-paldea_aqua",
    "dex": 128,
    "name": "Tauros",
    "form": "Paldean Aqua",
    "types": [
      "Fighting",
      "Water"
    ],
    "atk": 210,
    "def": 193,
    "sta": 181
  },
  {
    "id": "128-paldea_blaze",
    "dex": 128,
    "name": "Tauros",
    "form": "Paldean Blaze",
    "types": [
      "Fighting",
      "Fire"
    ],
    "atk": 210,
    "def": 193,
    "sta": 181
  },
  {
    "id": "128-paldea_combat",
    "dex": 128,
    "name": "Tauros",
    "form": "Paldean Combat",
    "types": [
      "Fighting"
    ],
    "atk": 210,
    "def": 193,
    "sta": 181
  },
  {
    "id": "129-magikarp",
    "dex": 129,
    "name": "Magikarp",
    "types": [
      "Water"
    ],
    "atk": 29,
    "def": 85,
    "sta": 85
  },
  {
    "id": "130-gyarados",
    "dex": 130,
    "name": "Gyarados",
    "types": [
      "Water",
      "Flying"
    ],
    "atk": 237,
    "def": 186,
    "sta": 216
  },
  {
    "id": "130-mega-normal",
    "dex": 130,
    "name": "Mega Gyarados",
    "form": "Mega",
    "types": [
      "Water",
      "Dark"
    ],
    "atk": 292,
    "def": 247,
    "sta": 216
  },
  {
    "id": "131-lapras",
    "dex": 131,
    "name": "Lapras",
    "types": [
      "Water",
      "Ice"
    ],
    "atk": 165,
    "def": 174,
    "sta": 277
  },
  {
    "id": "132-ditto",
    "dex": 132,
    "name": "Ditto",
    "types": [
      "Normal"
    ],
    "atk": 91,
    "def": 91,
    "sta": 134
  },
  {
    "id": "133-eevee",
    "dex": 133,
    "name": "Eevee",
    "types": [
      "Normal"
    ],
    "atk": 104,
    "def": 114,
    "sta": 146
  },
  {
    "id": "134-vaporeon",
    "dex": 134,
    "name": "Vaporeon",
    "types": [
      "Water"
    ],
    "atk": 205,
    "def": 161,
    "sta": 277
  },
  {
    "id": "135-jolteon",
    "dex": 135,
    "name": "Jolteon",
    "types": [
      "Electric"
    ],
    "atk": 232,
    "def": 182,
    "sta": 163
  },
  {
    "id": "136-flareon",
    "dex": 136,
    "name": "Flareon",
    "types": [
      "Fire"
    ],
    "atk": 246,
    "def": 179,
    "sta": 163
  },
  {
    "id": "137-porygon",
    "dex": 137,
    "name": "Porygon",
    "types": [
      "Normal"
    ],
    "atk": 153,
    "def": 136,
    "sta": 163
  },
  {
    "id": "138-omanyte",
    "dex": 138,
    "name": "Omanyte",
    "types": [
      "Rock",
      "Water"
    ],
    "atk": 155,
    "def": 153,
    "sta": 111
  },
  {
    "id": "139-omastar",
    "dex": 139,
    "name": "Omastar",
    "types": [
      "Rock",
      "Water"
    ],
    "atk": 207,
    "def": 201,
    "sta": 172
  },
  {
    "id": "140-kabuto",
    "dex": 140,
    "name": "Kabuto",
    "types": [
      "Rock",
      "Water"
    ],
    "atk": 148,
    "def": 140,
    "sta": 102
  },
  {
    "id": "141-kabutops",
    "dex": 141,
    "name": "Kabutops",
    "types": [
      "Rock",
      "Water"
    ],
    "atk": 220,
    "def": 186,
    "sta": 155
  },
  {
    "id": "142-aerodactyl",
    "dex": 142,
    "name": "Aerodactyl",
    "types": [
      "Rock",
      "Flying"
    ],
    "atk": 221,
    "def": 159,
    "sta": 190
  },
  {
    "id": "142-mega-normal",
    "dex": 142,
    "name": "Mega Aerodactyl",
    "form": "Mega",
    "types": [
      "Rock",
      "Flying"
    ],
    "atk": 292,
    "def": 210,
    "sta": 190
  },
  {
    "id": "143-snorlax",
    "dex": 143,
    "name": "Snorlax",
    "types": [
      "Normal"
    ],
    "atk": 190,
    "def": 169,
    "sta": 330
  },
  {
    "id": "144-articuno",
    "dex": 144,
    "name": "Articuno",
    "types": [
      "Ice",
      "Flying"
    ],
    "atk": 192,
    "def": 236,
    "sta": 207
  },
  {
    "id": "144-galarian",
    "dex": 144,
    "name": "Articuno",
    "form": "Galarian",
    "types": [
      "Psychic",
      "Flying"
    ],
    "atk": 250,
    "def": 197,
    "sta": 207
  },
  {
    "id": "145-zapdos",
    "dex": 145,
    "name": "Zapdos",
    "types": [
      "Electric",
      "Flying"
    ],
    "atk": 253,
    "def": 185,
    "sta": 207
  },
  {
    "id": "145-galarian",
    "dex": 145,
    "name": "Zapdos",
    "form": "Galarian",
    "types": [
      "Fighting",
      "Flying"
    ],
    "atk": 252,
    "def": 189,
    "sta": 207
  },
  {
    "id": "146-moltres",
    "dex": 146,
    "name": "Moltres",
    "types": [
      "Fire",
      "Flying"
    ],
    "atk": 251,
    "def": 181,
    "sta": 207
  },
  {
    "id": "146-galarian",
    "dex": 146,
    "name": "Moltres",
    "form": "Galarian",
    "types": [
      "Dark",
      "Flying"
    ],
    "atk": 202,
    "def": 231,
    "sta": 207
  },
  {
    "id": "147-dratini",
    "dex": 147,
    "name": "Dratini",
    "types": [
      "Dragon"
    ],
    "atk": 119,
    "def": 91,
    "sta": 121
  },
  {
    "id": "148-dragonair",
    "dex": 148,
    "name": "Dragonair",
    "types": [
      "Dragon"
    ],
    "atk": 163,
    "def": 135,
    "sta": 156
  },
  {
    "id": "149-dragonite",
    "dex": 149,
    "name": "Dragonite",
    "types": [
      "Dragon",
      "Flying"
    ],
    "atk": 263,
    "def": 198,
    "sta": 209
  },
  {
    "id": "150-mewtwo",
    "dex": 150,
    "name": "Mewtwo",
    "types": [
      "Psychic"
    ],
    "atk": 300,
    "def": 182,
    "sta": 214
  },
  {
    "id": "150-a",
    "dex": 150,
    "name": "Mewtwo",
    "form": "Armored",
    "types": [
      "Psychic"
    ],
    "atk": 182,
    "def": 278,
    "sta": 214
  },
  {
    "id": "151-mew",
    "dex": 151,
    "name": "Mew",
    "types": [
      "Psychic"
    ],
    "atk": 210,
    "def": 210,
    "sta": 225
  },
  {
    "id": "152-chikorita",
    "dex": 152,
    "name": "Chikorita",
    "types": [
      "Grass"
    ],
    "atk": 92,
    "def": 122,
    "sta": 128
  },
  {
    "id": "153-bayleef",
    "dex": 153,
    "name": "Bayleef",
    "types": [
      "Grass"
    ],
    "atk": 122,
    "def": 155,
    "sta": 155
  },
  {
    "id": "154-meganium",
    "dex": 154,
    "name": "Meganium",
    "types": [
      "Grass"
    ],
    "atk": 168,
    "def": 202,
    "sta": 190
  },
  {
    "id": "155-cyndaquil",
    "dex": 155,
    "name": "Cyndaquil",
    "types": [
      "Fire"
    ],
    "atk": 116,
    "def": 93,
    "sta": 118
  },
  {
    "id": "156-quilava",
    "dex": 156,
    "name": "Quilava",
    "types": [
      "Fire"
    ],
    "atk": 158,
    "def": 126,
    "sta": 151
  },
  {
    "id": "157-typhlosion",
    "dex": 157,
    "name": "Typhlosion",
    "types": [
      "Fire"
    ],
    "atk": 223,
    "def": 173,
    "sta": 186
  },
  {
    "id": "157-hisuian",
    "dex": 157,
    "name": "Typhlosion",
    "form": "Hisuian",
    "types": [
      "Fire",
      "Ghost"
    ],
    "atk": 238,
    "def": 172,
    "sta": 177
  },
  {
    "id": "158-totodile",
    "dex": 158,
    "name": "Totodile",
    "types": [
      "Water"
    ],
    "atk": 117,
    "def": 109,
    "sta": 137
  },
  {
    "id": "159-croconaw",
    "dex": 159,
    "name": "Croconaw",
    "types": [
      "Water"
    ],
    "atk": 150,
    "def": 142,
    "sta": 163
  },
  {
    "id": "160-feraligatr",
    "dex": 160,
    "name": "Feraligatr",
    "types": [
      "Water"
    ],
    "atk": 205,
    "def": 188,
    "sta": 198
  },
  {
    "id": "161-sentret",
    "dex": 161,
    "name": "Sentret",
    "types": [
      "Normal"
    ],
    "atk": 79,
    "def": 73,
    "sta": 111
  },
  {
    "id": "162-furret",
    "dex": 162,
    "name": "Furret",
    "types": [
      "Normal"
    ],
    "atk": 148,
    "def": 125,
    "sta": 198
  },
  {
    "id": "163-hoothoot",
    "dex": 163,
    "name": "Hoothoot",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 67,
    "def": 88,
    "sta": 155
  },
  {
    "id": "164-noctowl",
    "dex": 164,
    "name": "Noctowl",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 145,
    "def": 156,
    "sta": 225
  },
  {
    "id": "165-ledyba",
    "dex": 165,
    "name": "Ledyba",
    "types": [
      "Bug",
      "Flying"
    ],
    "atk": 72,
    "def": 118,
    "sta": 120
  },
  {
    "id": "166-ledian",
    "dex": 166,
    "name": "Ledian",
    "types": [
      "Bug",
      "Flying"
    ],
    "atk": 107,
    "def": 179,
    "sta": 146
  },
  {
    "id": "167-spinarak",
    "dex": 167,
    "name": "Spinarak",
    "types": [
      "Bug",
      "Poison"
    ],
    "atk": 105,
    "def": 73,
    "sta": 120
  },
  {
    "id": "168-ariados",
    "dex": 168,
    "name": "Ariados",
    "types": [
      "Bug",
      "Poison"
    ],
    "atk": 161,
    "def": 124,
    "sta": 172
  },
  {
    "id": "169-crobat",
    "dex": 169,
    "name": "Crobat",
    "types": [
      "Poison",
      "Flying"
    ],
    "atk": 194,
    "def": 178,
    "sta": 198
  },
  {
    "id": "170-chinchou",
    "dex": 170,
    "name": "Chinchou",
    "types": [
      "Water",
      "Electric"
    ],
    "atk": 106,
    "def": 97,
    "sta": 181
  },
  {
    "id": "171-lanturn",
    "dex": 171,
    "name": "Lanturn",
    "types": [
      "Water",
      "Electric"
    ],
    "atk": 146,
    "def": 137,
    "sta": 268
  },
  {
    "id": "172-pichu",
    "dex": 172,
    "name": "Pichu",
    "types": [
      "Electric"
    ],
    "atk": 77,
    "def": 53,
    "sta": 85
  },
  {
    "id": "173-cleffa",
    "dex": 173,
    "name": "Cleffa",
    "types": [
      "Fairy"
    ],
    "atk": 75,
    "def": 79,
    "sta": 137
  },
  {
    "id": "174-igglybuff",
    "dex": 174,
    "name": "Igglybuff",
    "types": [
      "Normal",
      "Fairy"
    ],
    "atk": 69,
    "def": 32,
    "sta": 207
  },
  {
    "id": "175-togepi",
    "dex": 175,
    "name": "Togepi",
    "types": [
      "Fairy"
    ],
    "atk": 67,
    "def": 116,
    "sta": 111
  },
  {
    "id": "176-togetic",
    "dex": 176,
    "name": "Togetic",
    "types": [
      "Fairy",
      "Flying"
    ],
    "atk": 139,
    "def": 181,
    "sta": 146
  },
  {
    "id": "177-natu",
    "dex": 177,
    "name": "Natu",
    "types": [
      "Psychic",
      "Flying"
    ],
    "atk": 134,
    "def": 89,
    "sta": 120
  },
  {
    "id": "178-xatu",
    "dex": 178,
    "name": "Xatu",
    "types": [
      "Psychic",
      "Flying"
    ],
    "atk": 192,
    "def": 146,
    "sta": 163
  },
  {
    "id": "179-mareep",
    "dex": 179,
    "name": "Mareep",
    "types": [
      "Electric"
    ],
    "atk": 114,
    "def": 79,
    "sta": 146
  },
  {
    "id": "180-flaaffy",
    "dex": 180,
    "name": "Flaaffy",
    "types": [
      "Electric"
    ],
    "atk": 145,
    "def": 109,
    "sta": 172
  },
  {
    "id": "181-ampharos",
    "dex": 181,
    "name": "Ampharos",
    "types": [
      "Electric"
    ],
    "atk": 211,
    "def": 169,
    "sta": 207
  },
  {
    "id": "181-mega-normal",
    "dex": 181,
    "name": "Mega Ampharos",
    "form": "Mega",
    "types": [
      "Electric",
      "Dragon"
    ],
    "atk": 294,
    "def": 203,
    "sta": 207
  },
  {
    "id": "182-bellossom",
    "dex": 182,
    "name": "Bellossom",
    "types": [
      "Grass"
    ],
    "atk": 169,
    "def": 186,
    "sta": 181
  },
  {
    "id": "183-marill",
    "dex": 183,
    "name": "Marill",
    "types": [
      "Water",
      "Fairy"
    ],
    "atk": 37,
    "def": 93,
    "sta": 172
  },
  {
    "id": "184-azumarill",
    "dex": 184,
    "name": "Azumarill",
    "types": [
      "Water",
      "Fairy"
    ],
    "atk": 112,
    "def": 152,
    "sta": 225
  },
  {
    "id": "185-sudowoodo",
    "dex": 185,
    "name": "Sudowoodo",
    "types": [
      "Rock"
    ],
    "atk": 167,
    "def": 176,
    "sta": 172
  },
  {
    "id": "186-politoed",
    "dex": 186,
    "name": "Politoed",
    "types": [
      "Water"
    ],
    "atk": 174,
    "def": 179,
    "sta": 207
  },
  {
    "id": "187-hoppip",
    "dex": 187,
    "name": "Hoppip",
    "types": [
      "Grass",
      "Flying"
    ],
    "atk": 67,
    "def": 94,
    "sta": 111
  },
  {
    "id": "188-skiploom",
    "dex": 188,
    "name": "Skiploom",
    "types": [
      "Grass",
      "Flying"
    ],
    "atk": 91,
    "def": 120,
    "sta": 146
  },
  {
    "id": "189-jumpluff",
    "dex": 189,
    "name": "Jumpluff",
    "types": [
      "Grass",
      "Flying"
    ],
    "atk": 118,
    "def": 183,
    "sta": 181
  },
  {
    "id": "190-aipom",
    "dex": 190,
    "name": "Aipom",
    "types": [
      "Normal"
    ],
    "atk": 136,
    "def": 112,
    "sta": 146
  },
  {
    "id": "191-sunkern",
    "dex": 191,
    "name": "Sunkern",
    "types": [
      "Grass"
    ],
    "atk": 55,
    "def": 55,
    "sta": 102
  },
  {
    "id": "192-sunflora",
    "dex": 192,
    "name": "Sunflora",
    "types": [
      "Grass"
    ],
    "atk": 185,
    "def": 135,
    "sta": 181
  },
  {
    "id": "193-yanma",
    "dex": 193,
    "name": "Yanma",
    "types": [
      "Bug",
      "Flying"
    ],
    "atk": 154,
    "def": 94,
    "sta": 163
  },
  {
    "id": "194-wooper",
    "dex": 194,
    "name": "Wooper",
    "types": [
      "Water",
      "Ground"
    ],
    "atk": 75,
    "def": 66,
    "sta": 146
  },
  {
    "id": "194-paldea",
    "dex": 194,
    "name": "Wooper",
    "form": "Paldean",
    "types": [
      "Poison",
      "Ground"
    ],
    "atk": 75,
    "def": 66,
    "sta": 146
  },
  {
    "id": "195-quagsire",
    "dex": 195,
    "name": "Quagsire",
    "types": [
      "Water",
      "Ground"
    ],
    "atk": 152,
    "def": 143,
    "sta": 216
  },
  {
    "id": "196-espeon",
    "dex": 196,
    "name": "Espeon",
    "types": [
      "Psychic"
    ],
    "atk": 261,
    "def": 175,
    "sta": 163
  },
  {
    "id": "197-umbreon",
    "dex": 197,
    "name": "Umbreon",
    "types": [
      "Dark"
    ],
    "atk": 126,
    "def": 240,
    "sta": 216
  },
  {
    "id": "198-murkrow",
    "dex": 198,
    "name": "Murkrow",
    "types": [
      "Dark",
      "Flying"
    ],
    "atk": 175,
    "def": 87,
    "sta": 155
  },
  {
    "id": "199-slowking",
    "dex": 199,
    "name": "Slowking",
    "types": [
      "Water",
      "Psychic"
    ],
    "atk": 177,
    "def": 180,
    "sta": 216
  },
  {
    "id": "199-galarian",
    "dex": 199,
    "name": "Slowking",
    "form": "Galarian",
    "types": [
      "Poison",
      "Psychic"
    ],
    "atk": 190,
    "def": 180,
    "sta": 216
  },
  {
    "id": "200-misdreavus",
    "dex": 200,
    "name": "Misdreavus",
    "types": [
      "Ghost"
    ],
    "atk": 167,
    "def": 154,
    "sta": 155
  },
  {
    "id": "201-unown",
    "dex": 201,
    "name": "Unown",
    "types": [
      "Psychic"
    ],
    "atk": 136,
    "def": 91,
    "sta": 134
  },
  {
    "id": "202-wobbuffet",
    "dex": 202,
    "name": "Wobbuffet",
    "types": [
      "Psychic"
    ],
    "atk": 60,
    "def": 106,
    "sta": 382
  },
  {
    "id": "203-girafarig",
    "dex": 203,
    "name": "Girafarig",
    "types": [
      "Normal",
      "Psychic"
    ],
    "atk": 182,
    "def": 133,
    "sta": 172
  },
  {
    "id": "204-pineco",
    "dex": 204,
    "name": "Pineco",
    "types": [
      "Bug"
    ],
    "atk": 108,
    "def": 122,
    "sta": 137
  },
  {
    "id": "205-forretress",
    "dex": 205,
    "name": "Forretress",
    "types": [
      "Bug",
      "Steel"
    ],
    "atk": 161,
    "def": 205,
    "sta": 181
  },
  {
    "id": "206-dunsparce",
    "dex": 206,
    "name": "Dunsparce",
    "types": [
      "Normal"
    ],
    "atk": 131,
    "def": 128,
    "sta": 225
  },
  {
    "id": "207-gligar",
    "dex": 207,
    "name": "Gligar",
    "types": [
      "Ground",
      "Flying"
    ],
    "atk": 143,
    "def": 184,
    "sta": 163
  },
  {
    "id": "208-steelix",
    "dex": 208,
    "name": "Steelix",
    "types": [
      "Steel",
      "Ground"
    ],
    "atk": 148,
    "def": 272,
    "sta": 181
  },
  {
    "id": "208-mega-normal",
    "dex": 208,
    "name": "Mega Steelix",
    "form": "Mega",
    "types": [
      "Steel",
      "Ground"
    ],
    "atk": 212,
    "def": 327,
    "sta": 181
  },
  {
    "id": "209-snubbull",
    "dex": 209,
    "name": "Snubbull",
    "types": [
      "Fairy"
    ],
    "atk": 137,
    "def": 85,
    "sta": 155
  },
  {
    "id": "210-granbull",
    "dex": 210,
    "name": "Granbull",
    "types": [
      "Fairy"
    ],
    "atk": 212,
    "def": 131,
    "sta": 207
  },
  {
    "id": "211-qwilfish",
    "dex": 211,
    "name": "Qwilfish",
    "types": [
      "Water",
      "Poison"
    ],
    "atk": 184,
    "def": 138,
    "sta": 163
  },
  {
    "id": "211-hisuian",
    "dex": 211,
    "name": "Qwilfish",
    "form": "Hisuian",
    "types": [
      "Dark",
      "Poison"
    ],
    "atk": 184,
    "def": 151,
    "sta": 163
  },
  {
    "id": "212-scizor",
    "dex": 212,
    "name": "Scizor",
    "types": [
      "Bug",
      "Steel"
    ],
    "atk": 236,
    "def": 181,
    "sta": 172
  },
  {
    "id": "212-mega-normal",
    "dex": 212,
    "name": "Mega Scizor",
    "form": "Mega",
    "types": [
      "Bug",
      "Steel"
    ],
    "atk": 279,
    "def": 250,
    "sta": 172
  },
  {
    "id": "213-shuckle",
    "dex": 213,
    "name": "Shuckle",
    "types": [
      "Bug",
      "Rock"
    ],
    "atk": 17,
    "def": 396,
    "sta": 85
  },
  {
    "id": "214-heracross",
    "dex": 214,
    "name": "Heracross",
    "types": [
      "Bug",
      "Fighting"
    ],
    "atk": 234,
    "def": 179,
    "sta": 190
  },
  {
    "id": "214-mega-normal",
    "dex": 214,
    "name": "Mega Heracross",
    "form": "Mega",
    "types": [
      "Bug",
      "Fighting"
    ],
    "atk": 334,
    "def": 223,
    "sta": 190
  },
  {
    "id": "215-sneasel",
    "dex": 215,
    "name": "Sneasel",
    "types": [
      "Dark",
      "Ice"
    ],
    "atk": 189,
    "def": 146,
    "sta": 146
  },
  {
    "id": "215-hisuian",
    "dex": 215,
    "name": "Sneasel",
    "form": "Hisuian",
    "types": [
      "Fighting",
      "Poison"
    ],
    "atk": 189,
    "def": 146,
    "sta": 146
  },
  {
    "id": "216-teddiursa",
    "dex": 216,
    "name": "Teddiursa",
    "types": [
      "Normal"
    ],
    "atk": 142,
    "def": 93,
    "sta": 155
  },
  {
    "id": "217-ursaring",
    "dex": 217,
    "name": "Ursaring",
    "types": [
      "Normal"
    ],
    "atk": 236,
    "def": 144,
    "sta": 207
  },
  {
    "id": "218-slugma",
    "dex": 218,
    "name": "Slugma",
    "types": [
      "Fire"
    ],
    "atk": 118,
    "def": 71,
    "sta": 120
  },
  {
    "id": "219-magcargo",
    "dex": 219,
    "name": "Magcargo",
    "types": [
      "Fire",
      "Rock"
    ],
    "atk": 139,
    "def": 191,
    "sta": 137
  },
  {
    "id": "220-swinub",
    "dex": 220,
    "name": "Swinub",
    "types": [
      "Ice",
      "Ground"
    ],
    "atk": 90,
    "def": 69,
    "sta": 137
  },
  {
    "id": "221-piloswine",
    "dex": 221,
    "name": "Piloswine",
    "types": [
      "Ice",
      "Ground"
    ],
    "atk": 181,
    "def": 138,
    "sta": 225
  },
  {
    "id": "222-corsola",
    "dex": 222,
    "name": "Corsola",
    "types": [
      "Water",
      "Rock"
    ],
    "atk": 118,
    "def": 156,
    "sta": 146
  },
  {
    "id": "222-galarian",
    "dex": 222,
    "name": "Corsola",
    "form": "Galarian",
    "types": [
      "Ghost"
    ],
    "atk": 116,
    "def": 182,
    "sta": 155
  },
  {
    "id": "223-remoraid",
    "dex": 223,
    "name": "Remoraid",
    "types": [
      "Water"
    ],
    "atk": 127,
    "def": 69,
    "sta": 111
  },
  {
    "id": "224-octillery",
    "dex": 224,
    "name": "Octillery",
    "types": [
      "Water"
    ],
    "atk": 197,
    "def": 141,
    "sta": 181
  },
  {
    "id": "225-delibird",
    "dex": 225,
    "name": "Delibird",
    "types": [
      "Ice",
      "Flying"
    ],
    "atk": 128,
    "def": 90,
    "sta": 128
  },
  {
    "id": "226-mantine",
    "dex": 226,
    "name": "Mantine",
    "types": [
      "Water",
      "Flying"
    ],
    "atk": 148,
    "def": 226,
    "sta": 163
  },
  {
    "id": "227-skarmory",
    "dex": 227,
    "name": "Skarmory",
    "types": [
      "Steel",
      "Flying"
    ],
    "atk": 148,
    "def": 226,
    "sta": 163
  },
  {
    "id": "228-houndour",
    "dex": 228,
    "name": "Houndour",
    "types": [
      "Dark",
      "Fire"
    ],
    "atk": 152,
    "def": 83,
    "sta": 128
  },
  {
    "id": "229-houndoom",
    "dex": 229,
    "name": "Houndoom",
    "types": [
      "Dark",
      "Fire"
    ],
    "atk": 224,
    "def": 144,
    "sta": 181
  },
  {
    "id": "229-mega-normal",
    "dex": 229,
    "name": "Mega Houndoom",
    "form": "Mega",
    "types": [
      "Dark",
      "Fire"
    ],
    "atk": 289,
    "def": 194,
    "sta": 181
  },
  {
    "id": "230-kingdra",
    "dex": 230,
    "name": "Kingdra",
    "types": [
      "Water",
      "Dragon"
    ],
    "atk": 194,
    "def": 194,
    "sta": 181
  },
  {
    "id": "231-phanpy",
    "dex": 231,
    "name": "Phanpy",
    "types": [
      "Ground"
    ],
    "atk": 107,
    "def": 98,
    "sta": 207
  },
  {
    "id": "232-donphan",
    "dex": 232,
    "name": "Donphan",
    "types": [
      "Ground"
    ],
    "atk": 214,
    "def": 185,
    "sta": 207
  },
  {
    "id": "233-porygon2",
    "dex": 233,
    "name": "Porygon2",
    "types": [
      "Normal"
    ],
    "atk": 198,
    "def": 180,
    "sta": 198
  },
  {
    "id": "234-stantler",
    "dex": 234,
    "name": "Stantler",
    "types": [
      "Normal"
    ],
    "atk": 192,
    "def": 131,
    "sta": 177
  },
  {
    "id": "235-smeargle",
    "dex": 235,
    "name": "Smeargle",
    "types": [
      "Normal"
    ],
    "atk": 40,
    "def": 83,
    "sta": 146
  },
  {
    "id": "236-tyrogue",
    "dex": 236,
    "name": "Tyrogue",
    "types": [
      "Fighting"
    ],
    "atk": 64,
    "def": 64,
    "sta": 111
  },
  {
    "id": "237-hitmontop",
    "dex": 237,
    "name": "Hitmontop",
    "types": [
      "Fighting"
    ],
    "atk": 173,
    "def": 207,
    "sta": 137
  },
  {
    "id": "238-smoochum",
    "dex": 238,
    "name": "Smoochum",
    "types": [
      "Ice",
      "Psychic"
    ],
    "atk": 153,
    "def": 91,
    "sta": 128
  },
  {
    "id": "239-elekid",
    "dex": 239,
    "name": "Elekid",
    "types": [
      "Electric"
    ],
    "atk": 135,
    "def": 101,
    "sta": 128
  },
  {
    "id": "240-magby",
    "dex": 240,
    "name": "Magby",
    "types": [
      "Fire"
    ],
    "atk": 151,
    "def": 99,
    "sta": 128
  },
  {
    "id": "241-miltank",
    "dex": 241,
    "name": "Miltank",
    "types": [
      "Normal"
    ],
    "atk": 157,
    "def": 193,
    "sta": 216
  },
  {
    "id": "242-blissey",
    "dex": 242,
    "name": "Blissey",
    "types": [
      "Normal"
    ],
    "atk": 129,
    "def": 169,
    "sta": 496
  },
  {
    "id": "243-raikou",
    "dex": 243,
    "name": "Raikou",
    "types": [
      "Electric"
    ],
    "atk": 241,
    "def": 195,
    "sta": 207
  },
  {
    "id": "244-entei",
    "dex": 244,
    "name": "Entei",
    "types": [
      "Fire"
    ],
    "atk": 235,
    "def": 171,
    "sta": 251
  },
  {
    "id": "245-suicune",
    "dex": 245,
    "name": "Suicune",
    "types": [
      "Water"
    ],
    "atk": 180,
    "def": 235,
    "sta": 225
  },
  {
    "id": "246-larvitar",
    "dex": 246,
    "name": "Larvitar",
    "types": [
      "Rock",
      "Ground"
    ],
    "atk": 115,
    "def": 93,
    "sta": 137
  },
  {
    "id": "247-pupitar",
    "dex": 247,
    "name": "Pupitar",
    "types": [
      "Rock",
      "Ground"
    ],
    "atk": 155,
    "def": 133,
    "sta": 172
  },
  {
    "id": "248-tyranitar",
    "dex": 248,
    "name": "Tyranitar",
    "types": [
      "Rock",
      "Dark"
    ],
    "atk": 251,
    "def": 207,
    "sta": 225
  },
  {
    "id": "248-mega-normal",
    "dex": 248,
    "name": "Mega Tyranitar",
    "form": "Mega",
    "types": [
      "Rock",
      "Dark"
    ],
    "atk": 309,
    "def": 276,
    "sta": 225
  },
  {
    "id": "249-lugia",
    "dex": 249,
    "name": "Lugia",
    "types": [
      "Psychic",
      "Flying"
    ],
    "atk": 193,
    "def": 310,
    "sta": 235
  },
  {
    "id": "250-ho_oh",
    "dex": 250,
    "name": "Ho-Oh",
    "types": [
      "Fire",
      "Flying"
    ],
    "atk": 239,
    "def": 244,
    "sta": 214
  },
  {
    "id": "251-celebi",
    "dex": 251,
    "name": "Celebi",
    "types": [
      "Psychic",
      "Grass"
    ],
    "atk": 210,
    "def": 210,
    "sta": 225
  },
  {
    "id": "252-treecko",
    "dex": 252,
    "name": "Treecko",
    "types": [
      "Grass"
    ],
    "atk": 124,
    "def": 94,
    "sta": 120
  },
  {
    "id": "253-grovyle",
    "dex": 253,
    "name": "Grovyle",
    "types": [
      "Grass"
    ],
    "atk": 172,
    "def": 120,
    "sta": 137
  },
  {
    "id": "254-sceptile",
    "dex": 254,
    "name": "Sceptile",
    "types": [
      "Grass"
    ],
    "atk": 223,
    "def": 169,
    "sta": 172
  },
  {
    "id": "254-mega-normal",
    "dex": 254,
    "name": "Mega Sceptile",
    "form": "Mega",
    "types": [
      "Grass",
      "Dragon"
    ],
    "atk": 320,
    "def": 186,
    "sta": 172
  },
  {
    "id": "255-torchic",
    "dex": 255,
    "name": "Torchic",
    "types": [
      "Fire"
    ],
    "atk": 130,
    "def": 87,
    "sta": 128
  },
  {
    "id": "256-combusken",
    "dex": 256,
    "name": "Combusken",
    "types": [
      "Fire",
      "Fighting"
    ],
    "atk": 163,
    "def": 115,
    "sta": 155
  },
  {
    "id": "257-blaziken",
    "dex": 257,
    "name": "Blaziken",
    "types": [
      "Fire",
      "Fighting"
    ],
    "atk": 240,
    "def": 141,
    "sta": 190
  },
  {
    "id": "257-mega-normal",
    "dex": 257,
    "name": "Mega Blaziken",
    "form": "Mega",
    "types": [
      "Fire",
      "Fighting"
    ],
    "atk": 329,
    "def": 168,
    "sta": 190
  },
  {
    "id": "258-mudkip",
    "dex": 258,
    "name": "Mudkip",
    "types": [
      "Water"
    ],
    "atk": 126,
    "def": 93,
    "sta": 137
  },
  {
    "id": "259-marshtomp",
    "dex": 259,
    "name": "Marshtomp",
    "types": [
      "Water",
      "Ground"
    ],
    "atk": 156,
    "def": 133,
    "sta": 172
  },
  {
    "id": "260-swampert",
    "dex": 260,
    "name": "Swampert",
    "types": [
      "Water",
      "Ground"
    ],
    "atk": 208,
    "def": 175,
    "sta": 225
  },
  {
    "id": "260-mega-normal",
    "dex": 260,
    "name": "Mega Swampert",
    "form": "Mega",
    "types": [
      "Water",
      "Ground"
    ],
    "atk": 283,
    "def": 218,
    "sta": 225
  },
  {
    "id": "261-poochyena",
    "dex": 261,
    "name": "Poochyena",
    "types": [
      "Dark"
    ],
    "atk": 96,
    "def": 61,
    "sta": 111
  },
  {
    "id": "262-mightyena",
    "dex": 262,
    "name": "Mightyena",
    "types": [
      "Dark"
    ],
    "atk": 171,
    "def": 132,
    "sta": 172
  },
  {
    "id": "263-zigzagoon",
    "dex": 263,
    "name": "Zigzagoon",
    "types": [
      "Normal"
    ],
    "atk": 58,
    "def": 80,
    "sta": 116
  },
  {
    "id": "263-galarian",
    "dex": 263,
    "name": "Zigzagoon",
    "form": "Galarian",
    "types": [
      "Dark",
      "Normal"
    ],
    "atk": 58,
    "def": 80,
    "sta": 116
  },
  {
    "id": "264-linoone",
    "dex": 264,
    "name": "Linoone",
    "types": [
      "Normal"
    ],
    "atk": 142,
    "def": 128,
    "sta": 186
  },
  {
    "id": "264-galarian",
    "dex": 264,
    "name": "Linoone",
    "form": "Galarian",
    "types": [
      "Dark",
      "Normal"
    ],
    "atk": 142,
    "def": 128,
    "sta": 186
  },
  {
    "id": "265-wurmple",
    "dex": 265,
    "name": "Wurmple",
    "types": [
      "Bug"
    ],
    "atk": 75,
    "def": 59,
    "sta": 128
  },
  {
    "id": "266-silcoon",
    "dex": 266,
    "name": "Silcoon",
    "types": [
      "Bug"
    ],
    "atk": 60,
    "def": 77,
    "sta": 137
  },
  {
    "id": "267-beautifly",
    "dex": 267,
    "name": "Beautifly",
    "types": [
      "Bug",
      "Flying"
    ],
    "atk": 189,
    "def": 98,
    "sta": 155
  },
  {
    "id": "268-cascoon",
    "dex": 268,
    "name": "Cascoon",
    "types": [
      "Bug"
    ],
    "atk": 60,
    "def": 77,
    "sta": 137
  },
  {
    "id": "269-dustox",
    "dex": 269,
    "name": "Dustox",
    "types": [
      "Bug",
      "Poison"
    ],
    "atk": 98,
    "def": 162,
    "sta": 155
  },
  {
    "id": "270-lotad",
    "dex": 270,
    "name": "Lotad",
    "types": [
      "Water",
      "Grass"
    ],
    "atk": 71,
    "def": 77,
    "sta": 120
  },
  {
    "id": "271-lombre",
    "dex": 271,
    "name": "Lombre",
    "types": [
      "Water",
      "Grass"
    ],
    "atk": 112,
    "def": 119,
    "sta": 155
  },
  {
    "id": "272-ludicolo",
    "dex": 272,
    "name": "Ludicolo",
    "types": [
      "Water",
      "Grass"
    ],
    "atk": 173,
    "def": 176,
    "sta": 190
  },
  {
    "id": "273-seedot",
    "dex": 273,
    "name": "Seedot",
    "types": [
      "Grass"
    ],
    "atk": 71,
    "def": 77,
    "sta": 120
  },
  {
    "id": "274-nuzleaf",
    "dex": 274,
    "name": "Nuzleaf",
    "types": [
      "Grass",
      "Dark"
    ],
    "atk": 134,
    "def": 78,
    "sta": 172
  },
  {
    "id": "275-shiftry",
    "dex": 275,
    "name": "Shiftry",
    "types": [
      "Grass",
      "Dark"
    ],
    "atk": 200,
    "def": 121,
    "sta": 207
  },
  {
    "id": "276-taillow",
    "dex": 276,
    "name": "Taillow",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 106,
    "def": 61,
    "sta": 120
  },
  {
    "id": "277-swellow",
    "dex": 277,
    "name": "Swellow",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 185,
    "def": 124,
    "sta": 155
  },
  {
    "id": "278-wingull",
    "dex": 278,
    "name": "Wingull",
    "types": [
      "Water",
      "Flying"
    ],
    "atk": 106,
    "def": 61,
    "sta": 120
  },
  {
    "id": "279-pelipper",
    "dex": 279,
    "name": "Pelipper",
    "types": [
      "Water",
      "Flying"
    ],
    "atk": 175,
    "def": 174,
    "sta": 155
  },
  {
    "id": "280-ralts",
    "dex": 280,
    "name": "Ralts",
    "types": [
      "Psychic",
      "Fairy"
    ],
    "atk": 79,
    "def": 59,
    "sta": 99
  },
  {
    "id": "281-kirlia",
    "dex": 281,
    "name": "Kirlia",
    "types": [
      "Psychic",
      "Fairy"
    ],
    "atk": 117,
    "def": 90,
    "sta": 116
  },
  {
    "id": "282-gardevoir",
    "dex": 282,
    "name": "Gardevoir",
    "types": [
      "Psychic",
      "Fairy"
    ],
    "atk": 237,
    "def": 195,
    "sta": 169
  },
  {
    "id": "282-mega-normal",
    "dex": 282,
    "name": "Mega Gardevoir",
    "form": "Mega",
    "types": [
      "Psychic",
      "Fairy"
    ],
    "atk": 326,
    "def": 229,
    "sta": 169
  },
  {
    "id": "283-surskit",
    "dex": 283,
    "name": "Surskit",
    "types": [
      "Bug",
      "Water"
    ],
    "atk": 93,
    "def": 87,
    "sta": 120
  },
  {
    "id": "284-masquerain",
    "dex": 284,
    "name": "Masquerain",
    "types": [
      "Bug",
      "Flying"
    ],
    "atk": 192,
    "def": 150,
    "sta": 172
  },
  {
    "id": "285-shroomish",
    "dex": 285,
    "name": "Shroomish",
    "types": [
      "Grass"
    ],
    "atk": 74,
    "def": 110,
    "sta": 155
  },
  {
    "id": "286-breloom",
    "dex": 286,
    "name": "Breloom",
    "types": [
      "Grass",
      "Fighting"
    ],
    "atk": 241,
    "def": 144,
    "sta": 155
  },
  {
    "id": "287-slakoth",
    "dex": 287,
    "name": "Slakoth",
    "types": [
      "Normal"
    ],
    "atk": 104,
    "def": 92,
    "sta": 155
  },
  {
    "id": "288-vigoroth",
    "dex": 288,
    "name": "Vigoroth",
    "types": [
      "Normal"
    ],
    "atk": 159,
    "def": 145,
    "sta": 190
  },
  {
    "id": "289-slaking",
    "dex": 289,
    "name": "Slaking",
    "types": [
      "Normal"
    ],
    "atk": 290,
    "def": 166,
    "sta": 284
  },
  {
    "id": "290-nincada",
    "dex": 290,
    "name": "Nincada",
    "types": [
      "Bug",
      "Ground"
    ],
    "atk": 80,
    "def": 126,
    "sta": 104
  },
  {
    "id": "291-ninjask",
    "dex": 291,
    "name": "Ninjask",
    "types": [
      "Bug",
      "Flying"
    ],
    "atk": 199,
    "def": 112,
    "sta": 156
  },
  {
    "id": "292-shedinja",
    "dex": 292,
    "name": "Shedinja",
    "types": [
      "Bug",
      "Ghost"
    ],
    "atk": 153,
    "def": 73,
    "sta": 1
  },
  {
    "id": "293-whismur",
    "dex": 293,
    "name": "Whismur",
    "types": [
      "Normal"
    ],
    "atk": 92,
    "def": 42,
    "sta": 162
  },
  {
    "id": "294-loudred",
    "dex": 294,
    "name": "Loudred",
    "types": [
      "Normal"
    ],
    "atk": 134,
    "def": 81,
    "sta": 197
  },
  {
    "id": "295-exploud",
    "dex": 295,
    "name": "Exploud",
    "types": [
      "Normal"
    ],
    "atk": 179,
    "def": 137,
    "sta": 232
  },
  {
    "id": "296-makuhita",
    "dex": 296,
    "name": "Makuhita",
    "types": [
      "Fighting"
    ],
    "atk": 99,
    "def": 54,
    "sta": 176
  },
  {
    "id": "297-hariyama",
    "dex": 297,
    "name": "Hariyama",
    "types": [
      "Fighting"
    ],
    "atk": 209,
    "def": 114,
    "sta": 302
  },
  {
    "id": "298-azurill",
    "dex": 298,
    "name": "Azurill",
    "types": [
      "Normal",
      "Fairy"
    ],
    "atk": 36,
    "def": 71,
    "sta": 137
  },
  {
    "id": "299-nosepass",
    "dex": 299,
    "name": "Nosepass",
    "types": [
      "Rock"
    ],
    "atk": 82,
    "def": 215,
    "sta": 102
  },
  {
    "id": "300-skitty",
    "dex": 300,
    "name": "Skitty",
    "types": [
      "Normal"
    ],
    "atk": 84,
    "def": 79,
    "sta": 137
  },
  {
    "id": "301-delcatty",
    "dex": 301,
    "name": "Delcatty",
    "types": [
      "Normal"
    ],
    "atk": 132,
    "def": 127,
    "sta": 172
  },
  {
    "id": "302-sableye",
    "dex": 302,
    "name": "Sableye",
    "types": [
      "Dark",
      "Ghost"
    ],
    "atk": 141,
    "def": 136,
    "sta": 137
  },
  {
    "id": "302-mega-normal",
    "dex": 302,
    "name": "Mega Sableye",
    "form": "Mega",
    "types": [
      "Dark",
      "Ghost"
    ],
    "atk": 151,
    "def": 216,
    "sta": 137
  },
  {
    "id": "303-mawile",
    "dex": 303,
    "name": "Mawile",
    "types": [
      "Steel",
      "Fairy"
    ],
    "atk": 155,
    "def": 141,
    "sta": 137
  },
  {
    "id": "303-mega-normal",
    "dex": 303,
    "name": "Mega Mawile",
    "form": "Mega",
    "types": [
      "Steel",
      "Fairy"
    ],
    "atk": 188,
    "def": 217,
    "sta": 137
  },
  {
    "id": "304-aron",
    "dex": 304,
    "name": "Aron",
    "types": [
      "Steel",
      "Rock"
    ],
    "atk": 121,
    "def": 141,
    "sta": 137
  },
  {
    "id": "305-lairon",
    "dex": 305,
    "name": "Lairon",
    "types": [
      "Steel",
      "Rock"
    ],
    "atk": 158,
    "def": 198,
    "sta": 155
  },
  {
    "id": "306-aggron",
    "dex": 306,
    "name": "Aggron",
    "types": [
      "Steel",
      "Rock"
    ],
    "atk": 198,
    "def": 257,
    "sta": 172
  },
  {
    "id": "306-mega-normal",
    "dex": 306,
    "name": "Mega Aggron",
    "form": "Mega",
    "types": [
      "Steel"
    ],
    "atk": 247,
    "def": 331,
    "sta": 172
  },
  {
    "id": "307-meditite",
    "dex": 307,
    "name": "Meditite",
    "types": [
      "Fighting",
      "Psychic"
    ],
    "atk": 78,
    "def": 107,
    "sta": 102
  },
  {
    "id": "308-medicham",
    "dex": 308,
    "name": "Medicham",
    "types": [
      "Fighting",
      "Psychic"
    ],
    "atk": 121,
    "def": 152,
    "sta": 155
  },
  {
    "id": "308-mega-normal",
    "dex": 308,
    "name": "Mega Medicham",
    "form": "Mega",
    "types": [
      "Fighting",
      "Psychic"
    ],
    "atk": 205,
    "def": 179,
    "sta": 155
  },
  {
    "id": "309-electrike",
    "dex": 309,
    "name": "Electrike",
    "types": [
      "Electric"
    ],
    "atk": 123,
    "def": 78,
    "sta": 120
  },
  {
    "id": "310-manectric",
    "dex": 310,
    "name": "Manectric",
    "types": [
      "Electric"
    ],
    "atk": 215,
    "def": 127,
    "sta": 172
  },
  {
    "id": "310-mega-normal",
    "dex": 310,
    "name": "Mega Manectric",
    "form": "Mega",
    "types": [
      "Electric"
    ],
    "atk": 286,
    "def": 179,
    "sta": 172
  },
  {
    "id": "311-plusle",
    "dex": 311,
    "name": "Plusle",
    "types": [
      "Electric"
    ],
    "atk": 167,
    "def": 129,
    "sta": 155
  },
  {
    "id": "312-minun",
    "dex": 312,
    "name": "Minun",
    "types": [
      "Electric"
    ],
    "atk": 147,
    "def": 150,
    "sta": 155
  },
  {
    "id": "313-volbeat",
    "dex": 313,
    "name": "Volbeat",
    "types": [
      "Bug"
    ],
    "atk": 143,
    "def": 166,
    "sta": 163
  },
  {
    "id": "314-illumise",
    "dex": 314,
    "name": "Illumise",
    "types": [
      "Bug"
    ],
    "atk": 143,
    "def": 166,
    "sta": 163
  },
  {
    "id": "315-roselia",
    "dex": 315,
    "name": "Roselia",
    "types": [
      "Grass",
      "Poison"
    ],
    "atk": 186,
    "def": 131,
    "sta": 137
  },
  {
    "id": "316-gulpin",
    "dex": 316,
    "name": "Gulpin",
    "types": [
      "Poison"
    ],
    "atk": 80,
    "def": 99,
    "sta": 172
  },
  {
    "id": "317-swalot",
    "dex": 317,
    "name": "Swalot",
    "types": [
      "Poison"
    ],
    "atk": 140,
    "def": 159,
    "sta": 225
  },
  {
    "id": "318-carvanha",
    "dex": 318,
    "name": "Carvanha",
    "types": [
      "Water",
      "Dark"
    ],
    "atk": 171,
    "def": 39,
    "sta": 128
  },
  {
    "id": "319-sharpedo",
    "dex": 319,
    "name": "Sharpedo",
    "types": [
      "Water",
      "Dark"
    ],
    "atk": 243,
    "def": 83,
    "sta": 172
  },
  {
    "id": "319-mega-normal",
    "dex": 319,
    "name": "Mega Sharpedo",
    "form": "Mega",
    "types": [
      "Water",
      "Dark"
    ],
    "atk": 289,
    "def": 144,
    "sta": 172
  },
  {
    "id": "320-wailmer",
    "dex": 320,
    "name": "Wailmer",
    "types": [
      "Water"
    ],
    "atk": 136,
    "def": 68,
    "sta": 277
  },
  {
    "id": "321-wailord",
    "dex": 321,
    "name": "Wailord",
    "types": [
      "Water"
    ],
    "atk": 175,
    "def": 87,
    "sta": 347
  },
  {
    "id": "322-numel",
    "dex": 322,
    "name": "Numel",
    "types": [
      "Fire",
      "Ground"
    ],
    "atk": 119,
    "def": 79,
    "sta": 155
  },
  {
    "id": "323-camerupt",
    "dex": 323,
    "name": "Camerupt",
    "types": [
      "Fire",
      "Ground"
    ],
    "atk": 194,
    "def": 136,
    "sta": 172
  },
  {
    "id": "323-mega-normal",
    "dex": 323,
    "name": "Mega Camerupt",
    "form": "Mega",
    "types": [
      "Fire",
      "Ground"
    ],
    "atk": 253,
    "def": 183,
    "sta": 172
  },
  {
    "id": "324-torkoal",
    "dex": 324,
    "name": "Torkoal",
    "types": [
      "Fire"
    ],
    "atk": 151,
    "def": 203,
    "sta": 172
  },
  {
    "id": "325-spoink",
    "dex": 325,
    "name": "Spoink",
    "types": [
      "Psychic"
    ],
    "atk": 125,
    "def": 122,
    "sta": 155
  },
  {
    "id": "326-grumpig",
    "dex": 326,
    "name": "Grumpig",
    "types": [
      "Psychic"
    ],
    "atk": 171,
    "def": 188,
    "sta": 190
  },
  {
    "id": "327-spinda",
    "dex": 327,
    "name": "Spinda",
    "types": [
      "Normal"
    ],
    "atk": 116,
    "def": 116,
    "sta": 155
  },
  {
    "id": "328-trapinch",
    "dex": 328,
    "name": "Trapinch",
    "types": [
      "Ground"
    ],
    "atk": 162,
    "def": 78,
    "sta": 128
  },
  {
    "id": "329-vibrava",
    "dex": 329,
    "name": "Vibrava",
    "types": [
      "Ground",
      "Dragon"
    ],
    "atk": 134,
    "def": 99,
    "sta": 137
  },
  {
    "id": "330-flygon",
    "dex": 330,
    "name": "Flygon",
    "types": [
      "Ground",
      "Dragon"
    ],
    "atk": 205,
    "def": 168,
    "sta": 190
  },
  {
    "id": "331-cacnea",
    "dex": 331,
    "name": "Cacnea",
    "types": [
      "Grass"
    ],
    "atk": 156,
    "def": 74,
    "sta": 137
  },
  {
    "id": "332-cacturne",
    "dex": 332,
    "name": "Cacturne",
    "types": [
      "Grass",
      "Dark"
    ],
    "atk": 221,
    "def": 115,
    "sta": 172
  },
  {
    "id": "333-swablu",
    "dex": 333,
    "name": "Swablu",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 76,
    "def": 132,
    "sta": 128
  },
  {
    "id": "334-altaria",
    "dex": 334,
    "name": "Altaria",
    "types": [
      "Dragon",
      "Flying"
    ],
    "atk": 141,
    "def": 201,
    "sta": 181
  },
  {
    "id": "334-mega-normal",
    "dex": 334,
    "name": "Mega Altaria",
    "form": "Mega",
    "types": [
      "Dragon",
      "Fairy"
    ],
    "atk": 222,
    "def": 218,
    "sta": 181
  },
  {
    "id": "335-zangoose",
    "dex": 335,
    "name": "Zangoose",
    "types": [
      "Normal"
    ],
    "atk": 222,
    "def": 124,
    "sta": 177
  },
  {
    "id": "336-seviper",
    "dex": 336,
    "name": "Seviper",
    "types": [
      "Poison"
    ],
    "atk": 196,
    "def": 118,
    "sta": 177
  },
  {
    "id": "337-lunatone",
    "dex": 337,
    "name": "Lunatone",
    "types": [
      "Rock",
      "Psychic"
    ],
    "atk": 178,
    "def": 153,
    "sta": 207
  },
  {
    "id": "338-solrock",
    "dex": 338,
    "name": "Solrock",
    "types": [
      "Rock",
      "Psychic"
    ],
    "atk": 178,
    "def": 153,
    "sta": 207
  },
  {
    "id": "339-barboach",
    "dex": 339,
    "name": "Barboach",
    "types": [
      "Water",
      "Ground"
    ],
    "atk": 93,
    "def": 82,
    "sta": 137
  },
  {
    "id": "340-whiscash",
    "dex": 340,
    "name": "Whiscash",
    "types": [
      "Water",
      "Ground"
    ],
    "atk": 151,
    "def": 141,
    "sta": 242
  },
  {
    "id": "341-corphish",
    "dex": 341,
    "name": "Corphish",
    "types": [
      "Water"
    ],
    "atk": 141,
    "def": 99,
    "sta": 125
  },
  {
    "id": "342-crawdaunt",
    "dex": 342,
    "name": "Crawdaunt",
    "types": [
      "Water",
      "Dark"
    ],
    "atk": 224,
    "def": 142,
    "sta": 160
  },
  {
    "id": "343-baltoy",
    "dex": 343,
    "name": "Baltoy",
    "types": [
      "Ground",
      "Psychic"
    ],
    "atk": 77,
    "def": 124,
    "sta": 120
  },
  {
    "id": "344-claydol",
    "dex": 344,
    "name": "Claydol",
    "types": [
      "Ground",
      "Psychic"
    ],
    "atk": 140,
    "def": 229,
    "sta": 155
  },
  {
    "id": "345-lileep",
    "dex": 345,
    "name": "Lileep",
    "types": [
      "Rock",
      "Grass"
    ],
    "atk": 105,
    "def": 150,
    "sta": 165
  },
  {
    "id": "346-cradily",
    "dex": 346,
    "name": "Cradily",
    "types": [
      "Rock",
      "Grass"
    ],
    "atk": 152,
    "def": 194,
    "sta": 200
  },
  {
    "id": "347-anorith",
    "dex": 347,
    "name": "Anorith",
    "types": [
      "Rock",
      "Bug"
    ],
    "atk": 176,
    "def": 100,
    "sta": 128
  },
  {
    "id": "348-armaldo",
    "dex": 348,
    "name": "Armaldo",
    "types": [
      "Rock",
      "Bug"
    ],
    "atk": 222,
    "def": 174,
    "sta": 181
  },
  {
    "id": "349-feebas",
    "dex": 349,
    "name": "Feebas",
    "types": [
      "Water"
    ],
    "atk": 29,
    "def": 85,
    "sta": 85
  },
  {
    "id": "350-milotic",
    "dex": 350,
    "name": "Milotic",
    "types": [
      "Water"
    ],
    "atk": 192,
    "def": 219,
    "sta": 216
  },
  {
    "id": "351-castform",
    "dex": 351,
    "name": "Castform",
    "types": [
      "Normal"
    ],
    "atk": 139,
    "def": 139,
    "sta": 172
  },
  {
    "id": "351-rainy",
    "dex": 351,
    "name": "Castform",
    "form": "Rainy",
    "types": [
      "Water"
    ],
    "atk": 139,
    "def": 139,
    "sta": 172
  },
  {
    "id": "351-snowy",
    "dex": 351,
    "name": "Castform",
    "form": "Snowy",
    "types": [
      "Ice"
    ],
    "atk": 139,
    "def": 139,
    "sta": 172
  },
  {
    "id": "351-sunny",
    "dex": 351,
    "name": "Castform",
    "form": "Sunny",
    "types": [
      "Fire"
    ],
    "atk": 139,
    "def": 139,
    "sta": 172
  },
  {
    "id": "352-kecleon",
    "dex": 352,
    "name": "Kecleon",
    "types": [
      "Normal"
    ],
    "atk": 161,
    "def": 189,
    "sta": 155
  },
  {
    "id": "353-shuppet",
    "dex": 353,
    "name": "Shuppet",
    "types": [
      "Ghost"
    ],
    "atk": 138,
    "def": 65,
    "sta": 127
  },
  {
    "id": "354-banette",
    "dex": 354,
    "name": "Banette",
    "types": [
      "Ghost"
    ],
    "atk": 218,
    "def": 126,
    "sta": 162
  },
  {
    "id": "354-mega-normal",
    "dex": 354,
    "name": "Mega Banette",
    "form": "Mega",
    "types": [
      "Ghost"
    ],
    "atk": 312,
    "def": 160,
    "sta": 162
  },
  {
    "id": "355-duskull",
    "dex": 355,
    "name": "Duskull",
    "types": [
      "Ghost"
    ],
    "atk": 70,
    "def": 162,
    "sta": 85
  },
  {
    "id": "356-dusclops",
    "dex": 356,
    "name": "Dusclops",
    "types": [
      "Ghost"
    ],
    "atk": 124,
    "def": 234,
    "sta": 120
  },
  {
    "id": "357-tropius",
    "dex": 357,
    "name": "Tropius",
    "types": [
      "Grass",
      "Flying"
    ],
    "atk": 136,
    "def": 163,
    "sta": 223
  },
  {
    "id": "358-chimecho",
    "dex": 358,
    "name": "Chimecho",
    "types": [
      "Psychic"
    ],
    "atk": 175,
    "def": 170,
    "sta": 181
  },
  {
    "id": "359-absol",
    "dex": 359,
    "name": "Absol",
    "types": [
      "Dark"
    ],
    "atk": 246,
    "def": 120,
    "sta": 163
  },
  {
    "id": "359-mega-normal",
    "dex": 359,
    "name": "Mega Absol",
    "form": "Mega",
    "types": [
      "Dark"
    ],
    "atk": 314,
    "def": 130,
    "sta": 163
  },
  {
    "id": "360-wynaut",
    "dex": 360,
    "name": "Wynaut",
    "types": [
      "Psychic"
    ],
    "atk": 41,
    "def": 86,
    "sta": 216
  },
  {
    "id": "361-snorunt",
    "dex": 361,
    "name": "Snorunt",
    "types": [
      "Ice"
    ],
    "atk": 95,
    "def": 95,
    "sta": 137
  },
  {
    "id": "362-glalie",
    "dex": 362,
    "name": "Glalie",
    "types": [
      "Ice"
    ],
    "atk": 162,
    "def": 162,
    "sta": 190
  },
  {
    "id": "362-mega-normal",
    "dex": 362,
    "name": "Mega Glalie",
    "form": "Mega",
    "types": [
      "Ice"
    ],
    "atk": 252,
    "def": 168,
    "sta": 190
  },
  {
    "id": "363-spheal",
    "dex": 363,
    "name": "Spheal",
    "types": [
      "Ice",
      "Water"
    ],
    "atk": 95,
    "def": 90,
    "sta": 172
  },
  {
    "id": "364-sealeo",
    "dex": 364,
    "name": "Sealeo",
    "types": [
      "Ice",
      "Water"
    ],
    "atk": 137,
    "def": 132,
    "sta": 207
  },
  {
    "id": "365-walrein",
    "dex": 365,
    "name": "Walrein",
    "types": [
      "Ice",
      "Water"
    ],
    "atk": 182,
    "def": 176,
    "sta": 242
  },
  {
    "id": "366-clamperl",
    "dex": 366,
    "name": "Clamperl",
    "types": [
      "Water"
    ],
    "atk": 133,
    "def": 135,
    "sta": 111
  },
  {
    "id": "367-huntail",
    "dex": 367,
    "name": "Huntail",
    "types": [
      "Water"
    ],
    "atk": 197,
    "def": 179,
    "sta": 146
  },
  {
    "id": "368-gorebyss",
    "dex": 368,
    "name": "Gorebyss",
    "types": [
      "Water"
    ],
    "atk": 211,
    "def": 179,
    "sta": 146
  },
  {
    "id": "369-relicanth",
    "dex": 369,
    "name": "Relicanth",
    "types": [
      "Water",
      "Rock"
    ],
    "atk": 162,
    "def": 203,
    "sta": 225
  },
  {
    "id": "370-luvdisc",
    "dex": 370,
    "name": "Luvdisc",
    "types": [
      "Water"
    ],
    "atk": 81,
    "def": 128,
    "sta": 125
  },
  {
    "id": "371-bagon",
    "dex": 371,
    "name": "Bagon",
    "types": [
      "Dragon"
    ],
    "atk": 134,
    "def": 93,
    "sta": 128
  },
  {
    "id": "372-shelgon",
    "dex": 372,
    "name": "Shelgon",
    "types": [
      "Dragon"
    ],
    "atk": 172,
    "def": 155,
    "sta": 163
  },
  {
    "id": "373-salamence",
    "dex": 373,
    "name": "Salamence",
    "types": [
      "Dragon",
      "Flying"
    ],
    "atk": 277,
    "def": 168,
    "sta": 216
  },
  {
    "id": "373-mega-normal",
    "dex": 373,
    "name": "Mega Salamence",
    "form": "Mega",
    "types": [
      "Dragon",
      "Flying"
    ],
    "atk": 310,
    "def": 251,
    "sta": 216
  },
  {
    "id": "374-beldum",
    "dex": 374,
    "name": "Beldum",
    "types": [
      "Steel",
      "Psychic"
    ],
    "atk": 96,
    "def": 132,
    "sta": 120
  },
  {
    "id": "375-metang",
    "dex": 375,
    "name": "Metang",
    "types": [
      "Steel",
      "Psychic"
    ],
    "atk": 138,
    "def": 176,
    "sta": 155
  },
  {
    "id": "376-metagross",
    "dex": 376,
    "name": "Metagross",
    "types": [
      "Steel",
      "Psychic"
    ],
    "atk": 257,
    "def": 228,
    "sta": 190
  },
  {
    "id": "376-mega-normal",
    "dex": 376,
    "name": "Mega Metagross",
    "form": "Mega",
    "types": [
      "Steel",
      "Psychic"
    ],
    "atk": 300,
    "def": 289,
    "sta": 190
  },
  {
    "id": "377-regirock",
    "dex": 377,
    "name": "Regirock",
    "types": [
      "Rock"
    ],
    "atk": 179,
    "def": 309,
    "sta": 190
  },
  {
    "id": "378-regice",
    "dex": 378,
    "name": "Regice",
    "types": [
      "Ice"
    ],
    "atk": 179,
    "def": 309,
    "sta": 190
  },
  {
    "id": "379-registeel",
    "dex": 379,
    "name": "Registeel",
    "types": [
      "Steel"
    ],
    "atk": 143,
    "def": 285,
    "sta": 190
  },
  {
    "id": "380-latias",
    "dex": 380,
    "name": "Latias",
    "types": [
      "Dragon",
      "Psychic"
    ],
    "atk": 228,
    "def": 246,
    "sta": 190
  },
  {
    "id": "380-mega-normal",
    "dex": 380,
    "name": "Mega Latias",
    "form": "Mega",
    "types": [
      "Dragon",
      "Psychic"
    ],
    "atk": 289,
    "def": 297,
    "sta": 190
  },
  {
    "id": "381-latios",
    "dex": 381,
    "name": "Latios",
    "types": [
      "Dragon",
      "Psychic"
    ],
    "atk": 268,
    "def": 212,
    "sta": 190
  },
  {
    "id": "381-mega-normal",
    "dex": 381,
    "name": "Mega Latios",
    "form": "Mega",
    "types": [
      "Dragon",
      "Psychic"
    ],
    "atk": 335,
    "def": 241,
    "sta": 190
  },
  {
    "id": "382-kyogre",
    "dex": 382,
    "name": "Kyogre",
    "types": [
      "Water"
    ],
    "atk": 270,
    "def": 228,
    "sta": 205
  },
  {
    "id": "382-mega-normal",
    "dex": 382,
    "name": "Primal Kyogre",
    "form": "Mega",
    "types": [
      "Water"
    ],
    "atk": 353,
    "def": 268,
    "sta": 218
  },
  {
    "id": "383-groudon",
    "dex": 383,
    "name": "Groudon",
    "types": [
      "Ground"
    ],
    "atk": 270,
    "def": 228,
    "sta": 205
  },
  {
    "id": "383-mega-normal",
    "dex": 383,
    "name": "Primal Groudon",
    "form": "Mega",
    "types": [
      "Ground",
      "Fire"
    ],
    "atk": 353,
    "def": 268,
    "sta": 218
  },
  {
    "id": "384-rayquaza",
    "dex": 384,
    "name": "Rayquaza",
    "types": [
      "Dragon",
      "Flying"
    ],
    "atk": 284,
    "def": 170,
    "sta": 213
  },
  {
    "id": "384-mega-normal",
    "dex": 384,
    "name": "Mega Rayquaza",
    "form": "Mega",
    "types": [
      "Dragon",
      "Flying"
    ],
    "atk": 377,
    "def": 210,
    "sta": 227
  },
  {
    "id": "385-jirachi",
    "dex": 385,
    "name": "Jirachi",
    "types": [
      "Steel",
      "Psychic"
    ],
    "atk": 210,
    "def": 210,
    "sta": 225
  },
  {
    "id": "386-deoxys",
    "dex": 386,
    "name": "Deoxys",
    "types": [
      "Psychic"
    ],
    "atk": 345,
    "def": 115,
    "sta": 137
  },
  {
    "id": "386-attack",
    "dex": 386,
    "name": "Deoxys",
    "form": "Attack",
    "types": [
      "Psychic"
    ],
    "atk": 414,
    "def": 46,
    "sta": 137
  },
  {
    "id": "386-defense",
    "dex": 386,
    "name": "Deoxys",
    "form": "Defense",
    "types": [
      "Psychic"
    ],
    "atk": 144,
    "def": 330,
    "sta": 137
  },
  {
    "id": "386-speed",
    "dex": 386,
    "name": "Deoxys",
    "form": "Speed",
    "types": [
      "Psychic"
    ],
    "atk": 230,
    "def": 218,
    "sta": 137
  },
  {
    "id": "387-turtwig",
    "dex": 387,
    "name": "Turtwig",
    "types": [
      "Grass"
    ],
    "atk": 119,
    "def": 110,
    "sta": 146
  },
  {
    "id": "388-grotle",
    "dex": 388,
    "name": "Grotle",
    "types": [
      "Grass"
    ],
    "atk": 157,
    "def": 143,
    "sta": 181
  },
  {
    "id": "389-torterra",
    "dex": 389,
    "name": "Torterra",
    "types": [
      "Grass",
      "Ground"
    ],
    "atk": 202,
    "def": 188,
    "sta": 216
  },
  {
    "id": "390-chimchar",
    "dex": 390,
    "name": "Chimchar",
    "types": [
      "Fire"
    ],
    "atk": 113,
    "def": 86,
    "sta": 127
  },
  {
    "id": "391-monferno",
    "dex": 391,
    "name": "Monferno",
    "types": [
      "Fire",
      "Fighting"
    ],
    "atk": 158,
    "def": 105,
    "sta": 162
  },
  {
    "id": "392-infernape",
    "dex": 392,
    "name": "Infernape",
    "types": [
      "Fire",
      "Fighting"
    ],
    "atk": 222,
    "def": 151,
    "sta": 183
  },
  {
    "id": "393-piplup",
    "dex": 393,
    "name": "Piplup",
    "types": [
      "Water"
    ],
    "atk": 112,
    "def": 102,
    "sta": 142
  },
  {
    "id": "394-prinplup",
    "dex": 394,
    "name": "Prinplup",
    "types": [
      "Water"
    ],
    "atk": 150,
    "def": 139,
    "sta": 162
  },
  {
    "id": "395-empoleon",
    "dex": 395,
    "name": "Empoleon",
    "types": [
      "Water",
      "Steel"
    ],
    "atk": 210,
    "def": 186,
    "sta": 197
  },
  {
    "id": "396-starly",
    "dex": 396,
    "name": "Starly",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 101,
    "def": 58,
    "sta": 120
  },
  {
    "id": "397-staravia",
    "dex": 397,
    "name": "Staravia",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 142,
    "def": 94,
    "sta": 146
  },
  {
    "id": "398-staraptor",
    "dex": 398,
    "name": "Staraptor",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 234,
    "def": 140,
    "sta": 198
  },
  {
    "id": "399-bidoof",
    "dex": 399,
    "name": "Bidoof",
    "types": [
      "Normal"
    ],
    "atk": 80,
    "def": 73,
    "sta": 153
  },
  {
    "id": "400-bibarel",
    "dex": 400,
    "name": "Bibarel",
    "types": [
      "Normal",
      "Water"
    ],
    "atk": 162,
    "def": 119,
    "sta": 188
  },
  {
    "id": "401-kricketot",
    "dex": 401,
    "name": "Kricketot",
    "types": [
      "Bug"
    ],
    "atk": 45,
    "def": 74,
    "sta": 114
  },
  {
    "id": "402-kricketune",
    "dex": 402,
    "name": "Kricketune",
    "types": [
      "Bug"
    ],
    "atk": 160,
    "def": 100,
    "sta": 184
  },
  {
    "id": "403-shinx",
    "dex": 403,
    "name": "Shinx",
    "types": [
      "Electric"
    ],
    "atk": 117,
    "def": 64,
    "sta": 128
  },
  {
    "id": "404-luxio",
    "dex": 404,
    "name": "Luxio",
    "types": [
      "Electric"
    ],
    "atk": 159,
    "def": 95,
    "sta": 155
  },
  {
    "id": "405-luxray",
    "dex": 405,
    "name": "Luxray",
    "types": [
      "Electric"
    ],
    "atk": 232,
    "def": 156,
    "sta": 190
  },
  {
    "id": "406-budew",
    "dex": 406,
    "name": "Budew",
    "types": [
      "Grass",
      "Poison"
    ],
    "atk": 91,
    "def": 109,
    "sta": 120
  },
  {
    "id": "407-roserade",
    "dex": 407,
    "name": "Roserade",
    "types": [
      "Grass",
      "Poison"
    ],
    "atk": 243,
    "def": 185,
    "sta": 155
  },
  {
    "id": "408-cranidos",
    "dex": 408,
    "name": "Cranidos",
    "types": [
      "Rock"
    ],
    "atk": 218,
    "def": 71,
    "sta": 167
  },
  {
    "id": "409-rampardos",
    "dex": 409,
    "name": "Rampardos",
    "types": [
      "Rock"
    ],
    "atk": 295,
    "def": 109,
    "sta": 219
  },
  {
    "id": "410-shieldon",
    "dex": 410,
    "name": "Shieldon",
    "types": [
      "Rock",
      "Steel"
    ],
    "atk": 76,
    "def": 195,
    "sta": 102
  },
  {
    "id": "411-bastiodon",
    "dex": 411,
    "name": "Bastiodon",
    "types": [
      "Rock",
      "Steel"
    ],
    "atk": 94,
    "def": 286,
    "sta": 155
  },
  {
    "id": "412-burmy",
    "dex": 412,
    "name": "Burmy",
    "types": [
      "Bug"
    ],
    "atk": 53,
    "def": 83,
    "sta": 120
  },
  {
    "id": "413-wormadam",
    "dex": 413,
    "name": "Wormadam",
    "types": [
      "Bug",
      "Grass"
    ],
    "atk": 141,
    "def": 180,
    "sta": 155
  },
  {
    "id": "413-sandy",
    "dex": 413,
    "name": "Wormadam",
    "form": "Sandy",
    "types": [
      "Bug",
      "Ground"
    ],
    "atk": 141,
    "def": 180,
    "sta": 155
  },
  {
    "id": "413-trash",
    "dex": 413,
    "name": "Wormadam",
    "form": "Trash",
    "types": [
      "Bug",
      "Steel"
    ],
    "atk": 127,
    "def": 175,
    "sta": 155
  },
  {
    "id": "414-mothim",
    "dex": 414,
    "name": "Mothim",
    "types": [
      "Bug",
      "Flying"
    ],
    "atk": 185,
    "def": 98,
    "sta": 172
  },
  {
    "id": "415-combee",
    "dex": 415,
    "name": "Combee",
    "types": [
      "Bug",
      "Flying"
    ],
    "atk": 59,
    "def": 83,
    "sta": 102
  },
  {
    "id": "416-vespiquen",
    "dex": 416,
    "name": "Vespiquen",
    "types": [
      "Bug",
      "Flying"
    ],
    "atk": 149,
    "def": 190,
    "sta": 172
  },
  {
    "id": "417-pachirisu",
    "dex": 417,
    "name": "Pachirisu",
    "types": [
      "Electric"
    ],
    "atk": 94,
    "def": 172,
    "sta": 155
  },
  {
    "id": "418-buizel",
    "dex": 418,
    "name": "Buizel",
    "types": [
      "Water"
    ],
    "atk": 132,
    "def": 67,
    "sta": 146
  },
  {
    "id": "419-floatzel",
    "dex": 419,
    "name": "Floatzel",
    "types": [
      "Water"
    ],
    "atk": 221,
    "def": 114,
    "sta": 198
  },
  {
    "id": "420-cherubi",
    "dex": 420,
    "name": "Cherubi",
    "types": [
      "Grass"
    ],
    "atk": 108,
    "def": 92,
    "sta": 128
  },
  {
    "id": "421-cherrim",
    "dex": 421,
    "name": "Cherrim",
    "types": [
      "Grass"
    ],
    "atk": 170,
    "def": 153,
    "sta": 172
  },
  {
    "id": "422-shellos",
    "dex": 422,
    "name": "Shellos",
    "types": [
      "Water"
    ],
    "atk": 103,
    "def": 105,
    "sta": 183
  },
  {
    "id": "423-gastrodon",
    "dex": 423,
    "name": "Gastrodon",
    "types": [
      "Water",
      "Ground"
    ],
    "atk": 169,
    "def": 143,
    "sta": 244
  },
  {
    "id": "424-ambipom",
    "dex": 424,
    "name": "Ambipom",
    "types": [
      "Normal"
    ],
    "atk": 205,
    "def": 143,
    "sta": 181
  },
  {
    "id": "425-drifloon",
    "dex": 425,
    "name": "Drifloon",
    "types": [
      "Ghost",
      "Flying"
    ],
    "atk": 117,
    "def": 80,
    "sta": 207
  },
  {
    "id": "426-drifblim",
    "dex": 426,
    "name": "Drifblim",
    "types": [
      "Ghost",
      "Flying"
    ],
    "atk": 180,
    "def": 102,
    "sta": 312
  },
  {
    "id": "427-buneary",
    "dex": 427,
    "name": "Buneary",
    "types": [
      "Normal"
    ],
    "atk": 130,
    "def": 105,
    "sta": 146
  },
  {
    "id": "428-lopunny",
    "dex": 428,
    "name": "Lopunny",
    "types": [
      "Normal"
    ],
    "atk": 156,
    "def": 194,
    "sta": 163
  },
  {
    "id": "428-mega-normal",
    "dex": 428,
    "name": "Mega Lopunny",
    "form": "Mega",
    "types": [
      "Normal",
      "Fighting"
    ],
    "atk": 282,
    "def": 214,
    "sta": 163
  },
  {
    "id": "429-mismagius",
    "dex": 429,
    "name": "Mismagius",
    "types": [
      "Ghost"
    ],
    "atk": 211,
    "def": 187,
    "sta": 155
  },
  {
    "id": "430-honchkrow",
    "dex": 430,
    "name": "Honchkrow",
    "types": [
      "Dark",
      "Flying"
    ],
    "atk": 243,
    "def": 103,
    "sta": 225
  },
  {
    "id": "431-glameow",
    "dex": 431,
    "name": "Glameow",
    "types": [
      "Normal"
    ],
    "atk": 109,
    "def": 82,
    "sta": 135
  },
  {
    "id": "432-purugly",
    "dex": 432,
    "name": "Purugly",
    "types": [
      "Normal"
    ],
    "atk": 172,
    "def": 133,
    "sta": 174
  },
  {
    "id": "433-chingling",
    "dex": 433,
    "name": "Chingling",
    "types": [
      "Psychic"
    ],
    "atk": 114,
    "def": 94,
    "sta": 128
  },
  {
    "id": "434-stunky",
    "dex": 434,
    "name": "Stunky",
    "types": [
      "Poison",
      "Dark"
    ],
    "atk": 121,
    "def": 90,
    "sta": 160
  },
  {
    "id": "435-skuntank",
    "dex": 435,
    "name": "Skuntank",
    "types": [
      "Poison",
      "Dark"
    ],
    "atk": 184,
    "def": 132,
    "sta": 230
  },
  {
    "id": "436-bronzor",
    "dex": 436,
    "name": "Bronzor",
    "types": [
      "Steel",
      "Psychic"
    ],
    "atk": 43,
    "def": 154,
    "sta": 149
  },
  {
    "id": "437-bronzong",
    "dex": 437,
    "name": "Bronzong",
    "types": [
      "Steel",
      "Psychic"
    ],
    "atk": 161,
    "def": 213,
    "sta": 167
  },
  {
    "id": "438-bonsly",
    "dex": 438,
    "name": "Bonsly",
    "types": [
      "Rock"
    ],
    "atk": 124,
    "def": 133,
    "sta": 137
  },
  {
    "id": "439-mime_jr_",
    "dex": 439,
    "name": "Mime Jr.",
    "types": [
      "Psychic",
      "Fairy"
    ],
    "atk": 125,
    "def": 142,
    "sta": 85
  },
  {
    "id": "440-happiny",
    "dex": 440,
    "name": "Happiny",
    "types": [
      "Normal"
    ],
    "atk": 25,
    "def": 77,
    "sta": 225
  },
  {
    "id": "441-chatot",
    "dex": 441,
    "name": "Chatot",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 183,
    "def": 91,
    "sta": 183
  },
  {
    "id": "442-spiritomb",
    "dex": 442,
    "name": "Spiritomb",
    "types": [
      "Ghost",
      "Dark"
    ],
    "atk": 169,
    "def": 199,
    "sta": 137
  },
  {
    "id": "443-gible",
    "dex": 443,
    "name": "Gible",
    "types": [
      "Dragon",
      "Ground"
    ],
    "atk": 124,
    "def": 84,
    "sta": 151
  },
  {
    "id": "444-gabite",
    "dex": 444,
    "name": "Gabite",
    "types": [
      "Dragon",
      "Ground"
    ],
    "atk": 172,
    "def": 125,
    "sta": 169
  },
  {
    "id": "445-garchomp",
    "dex": 445,
    "name": "Garchomp",
    "types": [
      "Dragon",
      "Ground"
    ],
    "atk": 261,
    "def": 193,
    "sta": 239
  },
  {
    "id": "445-mega-normal",
    "dex": 445,
    "name": "Mega Garchomp",
    "form": "Mega",
    "types": [
      "Dragon",
      "Ground"
    ],
    "atk": 339,
    "def": 222,
    "sta": 239
  },
  {
    "id": "446-munchlax",
    "dex": 446,
    "name": "Munchlax",
    "types": [
      "Normal"
    ],
    "atk": 137,
    "def": 117,
    "sta": 286
  },
  {
    "id": "447-riolu",
    "dex": 447,
    "name": "Riolu",
    "types": [
      "Fighting"
    ],
    "atk": 127,
    "def": 78,
    "sta": 120
  },
  {
    "id": "448-lucario",
    "dex": 448,
    "name": "Lucario",
    "types": [
      "Fighting",
      "Steel"
    ],
    "atk": 236,
    "def": 144,
    "sta": 172
  },
  {
    "id": "448-mega-normal",
    "dex": 448,
    "name": "Mega Lucario",
    "form": "Mega",
    "types": [
      "Fighting",
      "Steel"
    ],
    "atk": 310,
    "def": 175,
    "sta": 172
  },
  {
    "id": "449-hippopotas",
    "dex": 449,
    "name": "Hippopotas",
    "types": [
      "Ground"
    ],
    "atk": 124,
    "def": 118,
    "sta": 169
  },
  {
    "id": "450-hippowdon",
    "dex": 450,
    "name": "Hippowdon",
    "types": [
      "Ground"
    ],
    "atk": 201,
    "def": 191,
    "sta": 239
  },
  {
    "id": "451-skorupi",
    "dex": 451,
    "name": "Skorupi",
    "types": [
      "Poison",
      "Bug"
    ],
    "atk": 93,
    "def": 151,
    "sta": 120
  },
  {
    "id": "452-drapion",
    "dex": 452,
    "name": "Drapion",
    "types": [
      "Poison",
      "Dark"
    ],
    "atk": 180,
    "def": 202,
    "sta": 172
  },
  {
    "id": "453-croagunk",
    "dex": 453,
    "name": "Croagunk",
    "types": [
      "Poison",
      "Fighting"
    ],
    "atk": 116,
    "def": 76,
    "sta": 134
  },
  {
    "id": "454-toxicroak",
    "dex": 454,
    "name": "Toxicroak",
    "types": [
      "Poison",
      "Fighting"
    ],
    "atk": 211,
    "def": 133,
    "sta": 195
  },
  {
    "id": "455-carnivine",
    "dex": 455,
    "name": "Carnivine",
    "types": [
      "Grass"
    ],
    "atk": 187,
    "def": 136,
    "sta": 179
  },
  {
    "id": "456-finneon",
    "dex": 456,
    "name": "Finneon",
    "types": [
      "Water"
    ],
    "atk": 96,
    "def": 116,
    "sta": 135
  },
  {
    "id": "457-lumineon",
    "dex": 457,
    "name": "Lumineon",
    "types": [
      "Water"
    ],
    "atk": 142,
    "def": 170,
    "sta": 170
  },
  {
    "id": "458-mantyke",
    "dex": 458,
    "name": "Mantyke",
    "types": [
      "Water",
      "Flying"
    ],
    "atk": 105,
    "def": 179,
    "sta": 128
  },
  {
    "id": "459-snover",
    "dex": 459,
    "name": "Snover",
    "types": [
      "Grass",
      "Ice"
    ],
    "atk": 115,
    "def": 105,
    "sta": 155
  },
  {
    "id": "460-abomasnow",
    "dex": 460,
    "name": "Abomasnow",
    "types": [
      "Grass",
      "Ice"
    ],
    "atk": 178,
    "def": 158,
    "sta": 207
  },
  {
    "id": "460-mega-normal",
    "dex": 460,
    "name": "Mega Abomasnow",
    "form": "Mega",
    "types": [
      "Grass",
      "Ice"
    ],
    "atk": 240,
    "def": 191,
    "sta": 207
  },
  {
    "id": "461-weavile",
    "dex": 461,
    "name": "Weavile",
    "types": [
      "Dark",
      "Ice"
    ],
    "atk": 243,
    "def": 171,
    "sta": 172
  },
  {
    "id": "462-magnezone",
    "dex": 462,
    "name": "Magnezone",
    "types": [
      "Electric",
      "Steel"
    ],
    "atk": 238,
    "def": 205,
    "sta": 172
  },
  {
    "id": "463-lickilicky",
    "dex": 463,
    "name": "Lickilicky",
    "types": [
      "Normal"
    ],
    "atk": 161,
    "def": 181,
    "sta": 242
  },
  {
    "id": "464-rhyperior",
    "dex": 464,
    "name": "Rhyperior",
    "types": [
      "Ground",
      "Rock"
    ],
    "atk": 241,
    "def": 190,
    "sta": 251
  },
  {
    "id": "465-tangrowth",
    "dex": 465,
    "name": "Tangrowth",
    "types": [
      "Grass"
    ],
    "atk": 207,
    "def": 184,
    "sta": 225
  },
  {
    "id": "466-electivire",
    "dex": 466,
    "name": "Electivire",
    "types": [
      "Electric"
    ],
    "atk": 249,
    "def": 163,
    "sta": 181
  },
  {
    "id": "467-magmortar",
    "dex": 467,
    "name": "Magmortar",
    "types": [
      "Fire"
    ],
    "atk": 247,
    "def": 172,
    "sta": 181
  },
  {
    "id": "468-togekiss",
    "dex": 468,
    "name": "Togekiss",
    "types": [
      "Fairy",
      "Flying"
    ],
    "atk": 225,
    "def": 217,
    "sta": 198
  },
  {
    "id": "469-yanmega",
    "dex": 469,
    "name": "Yanmega",
    "types": [
      "Bug",
      "Flying"
    ],
    "atk": 231,
    "def": 156,
    "sta": 200
  },
  {
    "id": "470-leafeon",
    "dex": 470,
    "name": "Leafeon",
    "types": [
      "Grass"
    ],
    "atk": 216,
    "def": 219,
    "sta": 163
  },
  {
    "id": "471-glaceon",
    "dex": 471,
    "name": "Glaceon",
    "types": [
      "Ice"
    ],
    "atk": 238,
    "def": 205,
    "sta": 163
  },
  {
    "id": "472-gliscor",
    "dex": 472,
    "name": "Gliscor",
    "types": [
      "Ground",
      "Flying"
    ],
    "atk": 185,
    "def": 222,
    "sta": 181
  },
  {
    "id": "473-mamoswine",
    "dex": 473,
    "name": "Mamoswine",
    "types": [
      "Ice",
      "Ground"
    ],
    "atk": 247,
    "def": 146,
    "sta": 242
  },
  {
    "id": "474-porygon_z",
    "dex": 474,
    "name": "Porygon-Z",
    "types": [
      "Normal"
    ],
    "atk": 264,
    "def": 150,
    "sta": 198
  },
  {
    "id": "475-gallade",
    "dex": 475,
    "name": "Gallade",
    "types": [
      "Psychic",
      "Fighting"
    ],
    "atk": 237,
    "def": 195,
    "sta": 169
  },
  {
    "id": "475-mega-normal",
    "dex": 475,
    "name": "Mega Gallade",
    "form": "Mega",
    "types": [
      "Psychic",
      "Fighting"
    ],
    "atk": 326,
    "def": 230,
    "sta": 169
  },
  {
    "id": "476-probopass",
    "dex": 476,
    "name": "Probopass",
    "types": [
      "Rock",
      "Steel"
    ],
    "atk": 135,
    "def": 275,
    "sta": 155
  },
  {
    "id": "477-dusknoir",
    "dex": 477,
    "name": "Dusknoir",
    "types": [
      "Ghost"
    ],
    "atk": 180,
    "def": 254,
    "sta": 128
  },
  {
    "id": "478-froslass",
    "dex": 478,
    "name": "Froslass",
    "types": [
      "Ice",
      "Ghost"
    ],
    "atk": 171,
    "def": 150,
    "sta": 172
  },
  {
    "id": "479-rotom",
    "dex": 479,
    "name": "Rotom",
    "types": [
      "Electric",
      "Ghost"
    ],
    "atk": 185,
    "def": 159,
    "sta": 137
  },
  {
    "id": "479-fan",
    "dex": 479,
    "name": "Rotom",
    "form": "Fan",
    "types": [
      "Electric",
      "Flying"
    ],
    "atk": 204,
    "def": 219,
    "sta": 137
  },
  {
    "id": "479-frost",
    "dex": 479,
    "name": "Rotom",
    "form": "Frost",
    "types": [
      "Electric",
      "Ice"
    ],
    "atk": 204,
    "def": 219,
    "sta": 137
  },
  {
    "id": "479-heat",
    "dex": 479,
    "name": "Rotom",
    "form": "Heat",
    "types": [
      "Electric",
      "Fire"
    ],
    "atk": 204,
    "def": 219,
    "sta": 137
  },
  {
    "id": "479-mow",
    "dex": 479,
    "name": "Rotom",
    "form": "Mow",
    "types": [
      "Electric",
      "Grass"
    ],
    "atk": 204,
    "def": 219,
    "sta": 137
  },
  {
    "id": "479-wash",
    "dex": 479,
    "name": "Rotom",
    "form": "Wash",
    "types": [
      "Electric",
      "Water"
    ],
    "atk": 204,
    "def": 219,
    "sta": 137
  },
  {
    "id": "480-uxie",
    "dex": 480,
    "name": "Uxie",
    "types": [
      "Psychic"
    ],
    "atk": 156,
    "def": 270,
    "sta": 181
  },
  {
    "id": "481-mesprit",
    "dex": 481,
    "name": "Mesprit",
    "types": [
      "Psychic"
    ],
    "atk": 212,
    "def": 212,
    "sta": 190
  },
  {
    "id": "482-azelf",
    "dex": 482,
    "name": "Azelf",
    "types": [
      "Psychic"
    ],
    "atk": 270,
    "def": 151,
    "sta": 181
  },
  {
    "id": "483-dialga",
    "dex": 483,
    "name": "Dialga",
    "types": [
      "Steel",
      "Dragon"
    ],
    "atk": 275,
    "def": 211,
    "sta": 205
  },
  {
    "id": "483-origin",
    "dex": 483,
    "name": "Dialga",
    "form": "Origin",
    "types": [
      "Steel",
      "Dragon"
    ],
    "atk": 270,
    "def": 225,
    "sta": 205
  },
  {
    "id": "484-palkia",
    "dex": 484,
    "name": "Palkia",
    "types": [
      "Water",
      "Dragon"
    ],
    "atk": 280,
    "def": 215,
    "sta": 189
  },
  {
    "id": "484-origin",
    "dex": 484,
    "name": "Palkia",
    "form": "Origin",
    "types": [
      "Water",
      "Dragon"
    ],
    "atk": 286,
    "def": 223,
    "sta": 189
  },
  {
    "id": "485-heatran",
    "dex": 485,
    "name": "Heatran",
    "types": [
      "Fire",
      "Steel"
    ],
    "atk": 251,
    "def": 213,
    "sta": 209
  },
  {
    "id": "486-regigigas",
    "dex": 486,
    "name": "Regigigas",
    "types": [
      "Normal"
    ],
    "atk": 287,
    "def": 210,
    "sta": 221
  },
  {
    "id": "487-giratina",
    "dex": 487,
    "name": "Giratina",
    "types": [
      "Ghost",
      "Dragon"
    ],
    "atk": 187,
    "def": 225,
    "sta": 284
  },
  {
    "id": "487-origin",
    "dex": 487,
    "name": "Giratina",
    "form": "Origin",
    "types": [
      "Ghost",
      "Dragon"
    ],
    "atk": 225,
    "def": 187,
    "sta": 284
  },
  {
    "id": "488-cresselia",
    "dex": 488,
    "name": "Cresselia",
    "types": [
      "Psychic"
    ],
    "atk": 152,
    "def": 258,
    "sta": 260
  },
  {
    "id": "491-darkrai",
    "dex": 491,
    "name": "Darkrai",
    "types": [
      "Dark"
    ],
    "atk": 285,
    "def": 198,
    "sta": 172
  },
  {
    "id": "492-shaymin",
    "dex": 492,
    "name": "Shaymin",
    "types": [
      "Grass"
    ],
    "atk": 210,
    "def": 210,
    "sta": 225
  },
  {
    "id": "492-sky",
    "dex": 492,
    "name": "Shaymin",
    "form": "Sky",
    "types": [
      "Grass",
      "Flying"
    ],
    "atk": 261,
    "def": 166,
    "sta": 225
  },
  {
    "id": "494-victini",
    "dex": 494,
    "name": "Victini",
    "types": [
      "Psychic",
      "Fire"
    ],
    "atk": 210,
    "def": 210,
    "sta": 225
  },
  {
    "id": "495-snivy",
    "dex": 495,
    "name": "Snivy",
    "types": [
      "Grass"
    ],
    "atk": 88,
    "def": 107,
    "sta": 128
  },
  {
    "id": "496-servine",
    "dex": 496,
    "name": "Servine",
    "types": [
      "Grass"
    ],
    "atk": 122,
    "def": 152,
    "sta": 155
  },
  {
    "id": "497-serperior",
    "dex": 497,
    "name": "Serperior",
    "types": [
      "Grass"
    ],
    "atk": 161,
    "def": 204,
    "sta": 181
  },
  {
    "id": "498-tepig",
    "dex": 498,
    "name": "Tepig",
    "types": [
      "Fire"
    ],
    "atk": 115,
    "def": 85,
    "sta": 163
  },
  {
    "id": "499-pignite",
    "dex": 499,
    "name": "Pignite",
    "types": [
      "Fire",
      "Fighting"
    ],
    "atk": 173,
    "def": 106,
    "sta": 207
  },
  {
    "id": "500-emboar",
    "dex": 500,
    "name": "Emboar",
    "types": [
      "Fire",
      "Fighting"
    ],
    "atk": 235,
    "def": 127,
    "sta": 242
  },
  {
    "id": "501-oshawott",
    "dex": 501,
    "name": "Oshawott",
    "types": [
      "Water"
    ],
    "atk": 117,
    "def": 85,
    "sta": 146
  },
  {
    "id": "502-dewott",
    "dex": 502,
    "name": "Dewott",
    "types": [
      "Water"
    ],
    "atk": 159,
    "def": 116,
    "sta": 181
  },
  {
    "id": "503-samurott",
    "dex": 503,
    "name": "Samurott",
    "types": [
      "Water"
    ],
    "atk": 212,
    "def": 157,
    "sta": 216
  },
  {
    "id": "503-hisuian",
    "dex": 503,
    "name": "Samurott",
    "form": "Hisuian",
    "types": [
      "Water",
      "Dark"
    ],
    "atk": 218,
    "def": 152,
    "sta": 207
  },
  {
    "id": "504-patrat",
    "dex": 504,
    "name": "Patrat",
    "types": [
      "Normal"
    ],
    "atk": 98,
    "def": 73,
    "sta": 128
  },
  {
    "id": "505-watchog",
    "dex": 505,
    "name": "Watchog",
    "types": [
      "Normal"
    ],
    "atk": 165,
    "def": 139,
    "sta": 155
  },
  {
    "id": "506-lillipup",
    "dex": 506,
    "name": "Lillipup",
    "types": [
      "Normal"
    ],
    "atk": 107,
    "def": 86,
    "sta": 128
  },
  {
    "id": "507-herdier",
    "dex": 507,
    "name": "Herdier",
    "types": [
      "Normal"
    ],
    "atk": 145,
    "def": 126,
    "sta": 163
  },
  {
    "id": "508-stoutland",
    "dex": 508,
    "name": "Stoutland",
    "types": [
      "Normal"
    ],
    "atk": 206,
    "def": 182,
    "sta": 198
  },
  {
    "id": "509-purrloin",
    "dex": 509,
    "name": "Purrloin",
    "types": [
      "Dark"
    ],
    "atk": 98,
    "def": 73,
    "sta": 121
  },
  {
    "id": "510-liepard",
    "dex": 510,
    "name": "Liepard",
    "types": [
      "Dark"
    ],
    "atk": 187,
    "def": 106,
    "sta": 162
  },
  {
    "id": "511-pansage",
    "dex": 511,
    "name": "Pansage",
    "types": [
      "Grass"
    ],
    "atk": 104,
    "def": 94,
    "sta": 137
  },
  {
    "id": "512-simisage",
    "dex": 512,
    "name": "Simisage",
    "types": [
      "Grass"
    ],
    "atk": 206,
    "def": 133,
    "sta": 181
  },
  {
    "id": "513-pansear",
    "dex": 513,
    "name": "Pansear",
    "types": [
      "Fire"
    ],
    "atk": 104,
    "def": 94,
    "sta": 137
  },
  {
    "id": "514-simisear",
    "dex": 514,
    "name": "Simisear",
    "types": [
      "Fire"
    ],
    "atk": 206,
    "def": 133,
    "sta": 181
  },
  {
    "id": "515-panpour",
    "dex": 515,
    "name": "Panpour",
    "types": [
      "Water"
    ],
    "atk": 104,
    "def": 94,
    "sta": 137
  },
  {
    "id": "516-simipour",
    "dex": 516,
    "name": "Simipour",
    "types": [
      "Water"
    ],
    "atk": 206,
    "def": 133,
    "sta": 181
  },
  {
    "id": "517-munna",
    "dex": 517,
    "name": "Munna",
    "types": [
      "Psychic"
    ],
    "atk": 111,
    "def": 92,
    "sta": 183
  },
  {
    "id": "518-musharna",
    "dex": 518,
    "name": "Musharna",
    "types": [
      "Psychic"
    ],
    "atk": 183,
    "def": 166,
    "sta": 253
  },
  {
    "id": "519-pidove",
    "dex": 519,
    "name": "Pidove",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 98,
    "def": 80,
    "sta": 137
  },
  {
    "id": "520-tranquill",
    "dex": 520,
    "name": "Tranquill",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 144,
    "def": 107,
    "sta": 158
  },
  {
    "id": "521-unfezant",
    "dex": 521,
    "name": "Unfezant",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 226,
    "def": 146,
    "sta": 190
  },
  {
    "id": "522-blitzle",
    "dex": 522,
    "name": "Blitzle",
    "types": [
      "Electric"
    ],
    "atk": 118,
    "def": 64,
    "sta": 128
  },
  {
    "id": "523-zebstrika",
    "dex": 523,
    "name": "Zebstrika",
    "types": [
      "Electric"
    ],
    "atk": 211,
    "def": 136,
    "sta": 181
  },
  {
    "id": "524-roggenrola",
    "dex": 524,
    "name": "Roggenrola",
    "types": [
      "Rock"
    ],
    "atk": 121,
    "def": 110,
    "sta": 146
  },
  {
    "id": "525-boldore",
    "dex": 525,
    "name": "Boldore",
    "types": [
      "Rock"
    ],
    "atk": 174,
    "def": 143,
    "sta": 172
  },
  {
    "id": "526-gigalith",
    "dex": 526,
    "name": "Gigalith",
    "types": [
      "Rock"
    ],
    "atk": 226,
    "def": 201,
    "sta": 198
  },
  {
    "id": "527-woobat",
    "dex": 527,
    "name": "Woobat",
    "types": [
      "Psychic",
      "Flying"
    ],
    "atk": 107,
    "def": 85,
    "sta": 163
  },
  {
    "id": "528-swoobat",
    "dex": 528,
    "name": "Swoobat",
    "types": [
      "Psychic",
      "Flying"
    ],
    "atk": 161,
    "def": 119,
    "sta": 167
  },
  {
    "id": "529-drilbur",
    "dex": 529,
    "name": "Drilbur",
    "types": [
      "Ground"
    ],
    "atk": 154,
    "def": 85,
    "sta": 155
  },
  {
    "id": "530-excadrill",
    "dex": 530,
    "name": "Excadrill",
    "types": [
      "Ground",
      "Steel"
    ],
    "atk": 255,
    "def": 129,
    "sta": 242
  },
  {
    "id": "531-audino",
    "dex": 531,
    "name": "Audino",
    "types": [
      "Normal"
    ],
    "atk": 114,
    "def": 163,
    "sta": 230
  },
  {
    "id": "531-mega-normal",
    "dex": 531,
    "name": "Mega Audino",
    "form": "Mega",
    "types": [
      "Normal",
      "Fairy"
    ],
    "atk": 147,
    "def": 239,
    "sta": 230
  },
  {
    "id": "532-timburr",
    "dex": 532,
    "name": "Timburr",
    "types": [
      "Fighting"
    ],
    "atk": 134,
    "def": 87,
    "sta": 181
  },
  {
    "id": "533-gurdurr",
    "dex": 533,
    "name": "Gurdurr",
    "types": [
      "Fighting"
    ],
    "atk": 180,
    "def": 134,
    "sta": 198
  },
  {
    "id": "534-conkeldurr",
    "dex": 534,
    "name": "Conkeldurr",
    "types": [
      "Fighting"
    ],
    "atk": 243,
    "def": 158,
    "sta": 233
  },
  {
    "id": "535-tympole",
    "dex": 535,
    "name": "Tympole",
    "types": [
      "Water"
    ],
    "atk": 98,
    "def": 78,
    "sta": 137
  },
  {
    "id": "536-palpitoad",
    "dex": 536,
    "name": "Palpitoad",
    "types": [
      "Water",
      "Ground"
    ],
    "atk": 128,
    "def": 109,
    "sta": 181
  },
  {
    "id": "537-seismitoad",
    "dex": 537,
    "name": "Seismitoad",
    "types": [
      "Water",
      "Ground"
    ],
    "atk": 188,
    "def": 150,
    "sta": 233
  },
  {
    "id": "538-throh",
    "dex": 538,
    "name": "Throh",
    "types": [
      "Fighting"
    ],
    "atk": 172,
    "def": 160,
    "sta": 260
  },
  {
    "id": "539-sawk",
    "dex": 539,
    "name": "Sawk",
    "types": [
      "Fighting"
    ],
    "atk": 231,
    "def": 153,
    "sta": 181
  },
  {
    "id": "540-sewaddle",
    "dex": 540,
    "name": "Sewaddle",
    "types": [
      "Bug",
      "Grass"
    ],
    "atk": 96,
    "def": 124,
    "sta": 128
  },
  {
    "id": "541-swadloon",
    "dex": 541,
    "name": "Swadloon",
    "types": [
      "Bug",
      "Grass"
    ],
    "atk": 115,
    "def": 162,
    "sta": 146
  },
  {
    "id": "542-leavanny",
    "dex": 542,
    "name": "Leavanny",
    "types": [
      "Bug",
      "Grass"
    ],
    "atk": 205,
    "def": 165,
    "sta": 181
  },
  {
    "id": "543-venipede",
    "dex": 543,
    "name": "Venipede",
    "types": [
      "Bug",
      "Poison"
    ],
    "atk": 83,
    "def": 99,
    "sta": 102
  },
  {
    "id": "544-whirlipede",
    "dex": 544,
    "name": "Whirlipede",
    "types": [
      "Bug",
      "Poison"
    ],
    "atk": 100,
    "def": 173,
    "sta": 120
  },
  {
    "id": "545-scolipede",
    "dex": 545,
    "name": "Scolipede",
    "types": [
      "Bug",
      "Poison"
    ],
    "atk": 203,
    "def": 175,
    "sta": 155
  },
  {
    "id": "546-cottonee",
    "dex": 546,
    "name": "Cottonee",
    "types": [
      "Grass",
      "Fairy"
    ],
    "atk": 71,
    "def": 111,
    "sta": 120
  },
  {
    "id": "547-whimsicott",
    "dex": 547,
    "name": "Whimsicott",
    "types": [
      "Grass",
      "Fairy"
    ],
    "atk": 164,
    "def": 176,
    "sta": 155
  },
  {
    "id": "548-petilil",
    "dex": 548,
    "name": "Petilil",
    "types": [
      "Grass"
    ],
    "atk": 119,
    "def": 91,
    "sta": 128
  },
  {
    "id": "549-lilligant",
    "dex": 549,
    "name": "Lilligant",
    "types": [
      "Grass"
    ],
    "atk": 214,
    "def": 155,
    "sta": 172
  },
  {
    "id": "549-hisuian",
    "dex": 549,
    "name": "Lilligant",
    "form": "Hisuian",
    "types": [
      "Grass",
      "Fighting"
    ],
    "atk": 208,
    "def": 159,
    "sta": 172
  },
  {
    "id": "550-basculin",
    "dex": 550,
    "name": "Basculin",
    "types": [
      "Water"
    ],
    "atk": 189,
    "def": 129,
    "sta": 172
  },
  {
    "id": "551-sandile",
    "dex": 551,
    "name": "Sandile",
    "types": [
      "Ground",
      "Dark"
    ],
    "atk": 132,
    "def": 69,
    "sta": 137
  },
  {
    "id": "552-krokorok",
    "dex": 552,
    "name": "Krokorok",
    "types": [
      "Ground",
      "Dark"
    ],
    "atk": 155,
    "def": 90,
    "sta": 155
  },
  {
    "id": "553-krookodile",
    "dex": 553,
    "name": "Krookodile",
    "types": [
      "Ground",
      "Dark"
    ],
    "atk": 229,
    "def": 158,
    "sta": 216
  },
  {
    "id": "554-darumaka",
    "dex": 554,
    "name": "Darumaka",
    "types": [
      "Fire"
    ],
    "atk": 153,
    "def": 86,
    "sta": 172
  },
  {
    "id": "554-galarian",
    "dex": 554,
    "name": "Darumaka",
    "form": "Galarian",
    "types": [
      "Ice"
    ],
    "atk": 153,
    "def": 86,
    "sta": 172
  },
  {
    "id": "555-darmanitan",
    "dex": 555,
    "name": "Darmanitan",
    "types": [
      "Ice"
    ],
    "atk": 263,
    "def": 114,
    "sta": 233
  },
  {
    "id": "555-galarian_zen",
    "dex": 555,
    "name": "Darmanitan",
    "form": "Galarian Zen",
    "types": [
      "Ice",
      "Fire"
    ],
    "atk": 323,
    "def": 123,
    "sta": 233
  },
  {
    "id": "555-standard",
    "dex": 555,
    "name": "Darmanitan",
    "form": "Standard",
    "types": [
      "Fire"
    ],
    "atk": 263,
    "def": 114,
    "sta": 233
  },
  {
    "id": "555-zen",
    "dex": 555,
    "name": "Darmanitan",
    "form": "Zen",
    "types": [
      "Fire",
      "Psychic"
    ],
    "atk": 243,
    "def": 202,
    "sta": 233
  },
  {
    "id": "556-maractus",
    "dex": 556,
    "name": "Maractus",
    "types": [
      "Grass"
    ],
    "atk": 201,
    "def": 130,
    "sta": 181
  },
  {
    "id": "557-dwebble",
    "dex": 557,
    "name": "Dwebble",
    "types": [
      "Bug",
      "Rock"
    ],
    "atk": 118,
    "def": 128,
    "sta": 137
  },
  {
    "id": "558-crustle",
    "dex": 558,
    "name": "Crustle",
    "types": [
      "Bug",
      "Rock"
    ],
    "atk": 188,
    "def": 200,
    "sta": 172
  },
  {
    "id": "559-scraggy",
    "dex": 559,
    "name": "Scraggy",
    "types": [
      "Dark",
      "Fighting"
    ],
    "atk": 132,
    "def": 132,
    "sta": 137
  },
  {
    "id": "560-scrafty",
    "dex": 560,
    "name": "Scrafty",
    "types": [
      "Dark",
      "Fighting"
    ],
    "atk": 163,
    "def": 222,
    "sta": 163
  },
  {
    "id": "561-sigilyph",
    "dex": 561,
    "name": "Sigilyph",
    "types": [
      "Psychic",
      "Flying"
    ],
    "atk": 204,
    "def": 167,
    "sta": 176
  },
  {
    "id": "562-yamask",
    "dex": 562,
    "name": "Yamask",
    "types": [
      "Ghost"
    ],
    "atk": 95,
    "def": 141,
    "sta": 116
  },
  {
    "id": "562-galarian",
    "dex": 562,
    "name": "Yamask",
    "form": "Galarian",
    "types": [
      "Ground",
      "Ghost"
    ],
    "atk": 95,
    "def": 141,
    "sta": 116
  },
  {
    "id": "563-cofagrigus",
    "dex": 563,
    "name": "Cofagrigus",
    "types": [
      "Ghost"
    ],
    "atk": 163,
    "def": 237,
    "sta": 151
  },
  {
    "id": "564-tirtouga",
    "dex": 564,
    "name": "Tirtouga",
    "types": [
      "Water",
      "Rock"
    ],
    "atk": 134,
    "def": 146,
    "sta": 144
  },
  {
    "id": "565-carracosta",
    "dex": 565,
    "name": "Carracosta",
    "types": [
      "Water",
      "Rock"
    ],
    "atk": 192,
    "def": 197,
    "sta": 179
  },
  {
    "id": "566-archen",
    "dex": 566,
    "name": "Archen",
    "types": [
      "Rock",
      "Flying"
    ],
    "atk": 213,
    "def": 89,
    "sta": 146
  },
  {
    "id": "567-archeops",
    "dex": 567,
    "name": "Archeops",
    "types": [
      "Rock",
      "Flying"
    ],
    "atk": 292,
    "def": 139,
    "sta": 181
  },
  {
    "id": "568-trubbish",
    "dex": 568,
    "name": "Trubbish",
    "types": [
      "Poison"
    ],
    "atk": 96,
    "def": 122,
    "sta": 137
  },
  {
    "id": "569-garbodor",
    "dex": 569,
    "name": "Garbodor",
    "types": [
      "Poison"
    ],
    "atk": 181,
    "def": 164,
    "sta": 190
  },
  {
    "id": "570-zorua",
    "dex": 570,
    "name": "Zorua",
    "types": [
      "Dark"
    ],
    "atk": 153,
    "def": 78,
    "sta": 120
  },
  {
    "id": "570-hisuian",
    "dex": 570,
    "name": "Zorua",
    "form": "Hisuian",
    "types": [
      "Normal",
      "Ghost"
    ],
    "atk": 162,
    "def": 79,
    "sta": 111
  },
  {
    "id": "571-zoroark",
    "dex": 571,
    "name": "Zoroark",
    "types": [
      "Dark"
    ],
    "atk": 250,
    "def": 127,
    "sta": 155
  },
  {
    "id": "571-hisuian",
    "dex": 571,
    "name": "Zoroark",
    "form": "Hisuian",
    "types": [
      "Normal",
      "Ghost"
    ],
    "atk": 261,
    "def": 128,
    "sta": 146
  },
  {
    "id": "572-minccino",
    "dex": 572,
    "name": "Minccino",
    "types": [
      "Normal"
    ],
    "atk": 98,
    "def": 80,
    "sta": 146
  },
  {
    "id": "573-cinccino",
    "dex": 573,
    "name": "Cinccino",
    "types": [
      "Normal"
    ],
    "atk": 198,
    "def": 130,
    "sta": 181
  },
  {
    "id": "574-gothita",
    "dex": 574,
    "name": "Gothita",
    "types": [
      "Psychic"
    ],
    "atk": 98,
    "def": 112,
    "sta": 128
  },
  {
    "id": "575-gothorita",
    "dex": 575,
    "name": "Gothorita",
    "types": [
      "Psychic"
    ],
    "atk": 137,
    "def": 153,
    "sta": 155
  },
  {
    "id": "576-gothitelle",
    "dex": 576,
    "name": "Gothitelle",
    "types": [
      "Psychic"
    ],
    "atk": 176,
    "def": 205,
    "sta": 172
  },
  {
    "id": "577-solosis",
    "dex": 577,
    "name": "Solosis",
    "types": [
      "Psychic"
    ],
    "atk": 170,
    "def": 83,
    "sta": 128
  },
  {
    "id": "578-duosion",
    "dex": 578,
    "name": "Duosion",
    "types": [
      "Psychic"
    ],
    "atk": 208,
    "def": 103,
    "sta": 163
  },
  {
    "id": "579-reuniclus",
    "dex": 579,
    "name": "Reuniclus",
    "types": [
      "Psychic"
    ],
    "atk": 214,
    "def": 148,
    "sta": 242
  },
  {
    "id": "580-ducklett",
    "dex": 580,
    "name": "Ducklett",
    "types": [
      "Water",
      "Flying"
    ],
    "atk": 84,
    "def": 96,
    "sta": 158
  },
  {
    "id": "581-swanna",
    "dex": 581,
    "name": "Swanna",
    "types": [
      "Water",
      "Flying"
    ],
    "atk": 182,
    "def": 132,
    "sta": 181
  },
  {
    "id": "582-vanillite",
    "dex": 582,
    "name": "Vanillite",
    "types": [
      "Ice"
    ],
    "atk": 118,
    "def": 106,
    "sta": 113
  },
  {
    "id": "583-vanillish",
    "dex": 583,
    "name": "Vanillish",
    "types": [
      "Ice"
    ],
    "atk": 151,
    "def": 138,
    "sta": 139
  },
  {
    "id": "584-vanilluxe",
    "dex": 584,
    "name": "Vanilluxe",
    "types": [
      "Ice"
    ],
    "atk": 218,
    "def": 184,
    "sta": 174
  },
  {
    "id": "585-deerling",
    "dex": 585,
    "name": "Deerling",
    "types": [
      "Normal",
      "Grass"
    ],
    "atk": 115,
    "def": 100,
    "sta": 155
  },
  {
    "id": "586-sawsbuck",
    "dex": 586,
    "name": "Sawsbuck",
    "types": [
      "Normal",
      "Grass"
    ],
    "atk": 198,
    "def": 146,
    "sta": 190
  },
  {
    "id": "587-emolga",
    "dex": 587,
    "name": "Emolga",
    "types": [
      "Electric",
      "Flying"
    ],
    "atk": 158,
    "def": 127,
    "sta": 146
  },
  {
    "id": "588-karrablast",
    "dex": 588,
    "name": "Karrablast",
    "types": [
      "Bug"
    ],
    "atk": 137,
    "def": 87,
    "sta": 137
  },
  {
    "id": "589-escavalier",
    "dex": 589,
    "name": "Escavalier",
    "types": [
      "Bug",
      "Steel"
    ],
    "atk": 223,
    "def": 187,
    "sta": 172
  },
  {
    "id": "590-foongus",
    "dex": 590,
    "name": "Foongus",
    "types": [
      "Grass",
      "Poison"
    ],
    "atk": 97,
    "def": 91,
    "sta": 170
  },
  {
    "id": "591-amoonguss",
    "dex": 591,
    "name": "Amoonguss",
    "types": [
      "Grass",
      "Poison"
    ],
    "atk": 155,
    "def": 139,
    "sta": 249
  },
  {
    "id": "592-frillish",
    "dex": 592,
    "name": "Frillish",
    "types": [
      "Water",
      "Ghost"
    ],
    "atk": 115,
    "def": 134,
    "sta": 146
  },
  {
    "id": "593-jellicent",
    "dex": 593,
    "name": "Jellicent",
    "types": [
      "Water",
      "Ghost"
    ],
    "atk": 159,
    "def": 178,
    "sta": 225
  },
  {
    "id": "594-alomomola",
    "dex": 594,
    "name": "Alomomola",
    "types": [
      "Water"
    ],
    "atk": 138,
    "def": 131,
    "sta": 338
  },
  {
    "id": "595-joltik",
    "dex": 595,
    "name": "Joltik",
    "types": [
      "Bug",
      "Electric"
    ],
    "atk": 110,
    "def": 98,
    "sta": 137
  },
  {
    "id": "596-galvantula",
    "dex": 596,
    "name": "Galvantula",
    "types": [
      "Bug",
      "Electric"
    ],
    "atk": 201,
    "def": 128,
    "sta": 172
  },
  {
    "id": "597-ferroseed",
    "dex": 597,
    "name": "Ferroseed",
    "types": [
      "Grass",
      "Steel"
    ],
    "atk": 82,
    "def": 155,
    "sta": 127
  },
  {
    "id": "598-ferrothorn",
    "dex": 598,
    "name": "Ferrothorn",
    "types": [
      "Grass",
      "Steel"
    ],
    "atk": 158,
    "def": 223,
    "sta": 179
  },
  {
    "id": "599-klink",
    "dex": 599,
    "name": "Klink",
    "types": [
      "Steel"
    ],
    "atk": 98,
    "def": 121,
    "sta": 120
  },
  {
    "id": "600-klang",
    "dex": 600,
    "name": "Klang",
    "types": [
      "Steel"
    ],
    "atk": 150,
    "def": 174,
    "sta": 155
  },
  {
    "id": "601-klinklang",
    "dex": 601,
    "name": "Klinklang",
    "types": [
      "Steel"
    ],
    "atk": 199,
    "def": 214,
    "sta": 155
  },
  {
    "id": "602-tynamo",
    "dex": 602,
    "name": "Tynamo",
    "types": [
      "Electric"
    ],
    "atk": 105,
    "def": 78,
    "sta": 111
  },
  {
    "id": "603-eelektrik",
    "dex": 603,
    "name": "Eelektrik",
    "types": [
      "Electric"
    ],
    "atk": 156,
    "def": 130,
    "sta": 163
  },
  {
    "id": "604-eelektross",
    "dex": 604,
    "name": "Eelektross",
    "types": [
      "Electric"
    ],
    "atk": 217,
    "def": 152,
    "sta": 198
  },
  {
    "id": "605-elgyem",
    "dex": 605,
    "name": "Elgyem",
    "types": [
      "Psychic"
    ],
    "atk": 148,
    "def": 100,
    "sta": 146
  },
  {
    "id": "606-beheeyem",
    "dex": 606,
    "name": "Beheeyem",
    "types": [
      "Psychic"
    ],
    "atk": 221,
    "def": 163,
    "sta": 181
  },
  {
    "id": "607-litwick",
    "dex": 607,
    "name": "Litwick",
    "types": [
      "Ghost",
      "Fire"
    ],
    "atk": 108,
    "def": 98,
    "sta": 137
  },
  {
    "id": "608-lampent",
    "dex": 608,
    "name": "Lampent",
    "types": [
      "Ghost",
      "Fire"
    ],
    "atk": 169,
    "def": 115,
    "sta": 155
  },
  {
    "id": "609-chandelure",
    "dex": 609,
    "name": "Chandelure",
    "types": [
      "Ghost",
      "Fire"
    ],
    "atk": 271,
    "def": 182,
    "sta": 155
  },
  {
    "id": "610-axew",
    "dex": 610,
    "name": "Axew",
    "types": [
      "Dragon"
    ],
    "atk": 154,
    "def": 101,
    "sta": 130
  },
  {
    "id": "611-fraxure",
    "dex": 611,
    "name": "Fraxure",
    "types": [
      "Dragon"
    ],
    "atk": 212,
    "def": 123,
    "sta": 165
  },
  {
    "id": "612-haxorus",
    "dex": 612,
    "name": "Haxorus",
    "types": [
      "Dragon"
    ],
    "atk": 284,
    "def": 172,
    "sta": 183
  },
  {
    "id": "613-cubchoo",
    "dex": 613,
    "name": "Cubchoo",
    "types": [
      "Ice"
    ],
    "atk": 128,
    "def": 74,
    "sta": 146
  },
  {
    "id": "614-beartic",
    "dex": 614,
    "name": "Beartic",
    "types": [
      "Ice"
    ],
    "atk": 233,
    "def": 152,
    "sta": 216
  },
  {
    "id": "615-cryogonal",
    "dex": 615,
    "name": "Cryogonal",
    "types": [
      "Ice"
    ],
    "atk": 190,
    "def": 218,
    "sta": 190
  },
  {
    "id": "616-shelmet",
    "dex": 616,
    "name": "Shelmet",
    "types": [
      "Bug"
    ],
    "atk": 72,
    "def": 140,
    "sta": 137
  },
  {
    "id": "617-accelgor",
    "dex": 617,
    "name": "Accelgor",
    "types": [
      "Bug"
    ],
    "atk": 220,
    "def": 120,
    "sta": 190
  },
  {
    "id": "618-stunfisk",
    "dex": 618,
    "name": "Stunfisk",
    "types": [
      "Ground",
      "Electric"
    ],
    "atk": 144,
    "def": 171,
    "sta": 240
  },
  {
    "id": "618-galarian",
    "dex": 618,
    "name": "Stunfisk",
    "form": "Galarian",
    "types": [
      "Ground",
      "Steel"
    ],
    "atk": 144,
    "def": 171,
    "sta": 240
  },
  {
    "id": "619-mienfoo",
    "dex": 619,
    "name": "Mienfoo",
    "types": [
      "Fighting"
    ],
    "atk": 160,
    "def": 98,
    "sta": 128
  },
  {
    "id": "620-mienshao",
    "dex": 620,
    "name": "Mienshao",
    "types": [
      "Fighting"
    ],
    "atk": 258,
    "def": 127,
    "sta": 163
  },
  {
    "id": "621-druddigon",
    "dex": 621,
    "name": "Druddigon",
    "types": [
      "Dragon"
    ],
    "atk": 213,
    "def": 170,
    "sta": 184
  },
  {
    "id": "622-golett",
    "dex": 622,
    "name": "Golett",
    "types": [
      "Ground",
      "Ghost"
    ],
    "atk": 127,
    "def": 92,
    "sta": 153
  },
  {
    "id": "623-golurk",
    "dex": 623,
    "name": "Golurk",
    "types": [
      "Ground",
      "Ghost"
    ],
    "atk": 222,
    "def": 154,
    "sta": 205
  },
  {
    "id": "624-pawniard",
    "dex": 624,
    "name": "Pawniard",
    "types": [
      "Dark",
      "Steel"
    ],
    "atk": 154,
    "def": 114,
    "sta": 128
  },
  {
    "id": "625-bisharp",
    "dex": 625,
    "name": "Bisharp",
    "types": [
      "Dark",
      "Steel"
    ],
    "atk": 232,
    "def": 176,
    "sta": 163
  },
  {
    "id": "626-bouffalant",
    "dex": 626,
    "name": "Bouffalant",
    "types": [
      "Normal"
    ],
    "atk": 195,
    "def": 182,
    "sta": 216
  },
  {
    "id": "627-rufflet",
    "dex": 627,
    "name": "Rufflet",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 150,
    "def": 97,
    "sta": 172
  },
  {
    "id": "628-braviary",
    "dex": 628,
    "name": "Braviary",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 232,
    "def": 152,
    "sta": 225
  },
  {
    "id": "628-hisuian",
    "dex": 628,
    "name": "Braviary",
    "form": "Hisuian",
    "types": [
      "Psychic",
      "Flying"
    ],
    "atk": 213,
    "def": 137,
    "sta": 242
  },
  {
    "id": "629-vullaby",
    "dex": 629,
    "name": "Vullaby",
    "types": [
      "Dark",
      "Flying"
    ],
    "atk": 105,
    "def": 139,
    "sta": 172
  },
  {
    "id": "630-mandibuzz",
    "dex": 630,
    "name": "Mandibuzz",
    "types": [
      "Dark",
      "Flying"
    ],
    "atk": 129,
    "def": 205,
    "sta": 242
  },
  {
    "id": "631-heatmor",
    "dex": 631,
    "name": "Heatmor",
    "types": [
      "Fire"
    ],
    "atk": 204,
    "def": 129,
    "sta": 198
  },
  {
    "id": "632-durant",
    "dex": 632,
    "name": "Durant",
    "types": [
      "Bug",
      "Steel"
    ],
    "atk": 217,
    "def": 188,
    "sta": 151
  },
  {
    "id": "633-deino",
    "dex": 633,
    "name": "Deino",
    "types": [
      "Dark",
      "Dragon"
    ],
    "atk": 116,
    "def": 93,
    "sta": 141
  },
  {
    "id": "634-zweilous",
    "dex": 634,
    "name": "Zweilous",
    "types": [
      "Dark",
      "Dragon"
    ],
    "atk": 159,
    "def": 135,
    "sta": 176
  },
  {
    "id": "635-hydreigon",
    "dex": 635,
    "name": "Hydreigon",
    "types": [
      "Dark",
      "Dragon"
    ],
    "atk": 256,
    "def": 188,
    "sta": 211
  },
  {
    "id": "636-larvesta",
    "dex": 636,
    "name": "Larvesta",
    "types": [
      "Bug",
      "Fire"
    ],
    "atk": 156,
    "def": 107,
    "sta": 146
  },
  {
    "id": "637-volcarona",
    "dex": 637,
    "name": "Volcarona",
    "types": [
      "Bug",
      "Fire"
    ],
    "atk": 264,
    "def": 189,
    "sta": 198
  },
  {
    "id": "638-cobalion",
    "dex": 638,
    "name": "Cobalion",
    "types": [
      "Steel",
      "Fighting"
    ],
    "atk": 192,
    "def": 229,
    "sta": 209
  },
  {
    "id": "639-terrakion",
    "dex": 639,
    "name": "Terrakion",
    "types": [
      "Rock",
      "Fighting"
    ],
    "atk": 260,
    "def": 192,
    "sta": 209
  },
  {
    "id": "640-virizion",
    "dex": 640,
    "name": "Virizion",
    "types": [
      "Grass",
      "Fighting"
    ],
    "atk": 192,
    "def": 229,
    "sta": 209
  },
  {
    "id": "641-tornadus",
    "dex": 641,
    "name": "Tornadus",
    "types": [
      "Flying"
    ],
    "atk": 266,
    "def": 164,
    "sta": 188
  },
  {
    "id": "641-therian",
    "dex": 641,
    "name": "Tornadus",
    "form": "Therian",
    "types": [
      "Flying"
    ],
    "atk": 238,
    "def": 189,
    "sta": 188
  },
  {
    "id": "642-thundurus",
    "dex": 642,
    "name": "Thundurus",
    "types": [
      "Electric",
      "Flying"
    ],
    "atk": 266,
    "def": 164,
    "sta": 188
  },
  {
    "id": "642-therian",
    "dex": 642,
    "name": "Thundurus",
    "form": "Therian",
    "types": [
      "Electric",
      "Flying"
    ],
    "atk": 295,
    "def": 161,
    "sta": 188
  },
  {
    "id": "643-reshiram",
    "dex": 643,
    "name": "Reshiram",
    "types": [
      "Dragon",
      "Fire"
    ],
    "atk": 275,
    "def": 211,
    "sta": 205
  },
  {
    "id": "644-zekrom",
    "dex": 644,
    "name": "Zekrom",
    "types": [
      "Dragon",
      "Electric"
    ],
    "atk": 275,
    "def": 211,
    "sta": 205
  },
  {
    "id": "645-landorus",
    "dex": 645,
    "name": "Landorus",
    "types": [
      "Ground",
      "Flying"
    ],
    "atk": 261,
    "def": 182,
    "sta": 205
  },
  {
    "id": "645-therian",
    "dex": 645,
    "name": "Landorus",
    "form": "Therian",
    "types": [
      "Ground",
      "Flying"
    ],
    "atk": 289,
    "def": 179,
    "sta": 205
  },
  {
    "id": "646-kyurem",
    "dex": 646,
    "name": "Kyurem",
    "types": [
      "Dragon",
      "Ice"
    ],
    "atk": 246,
    "def": 170,
    "sta": 245
  },
  {
    "id": "646-black",
    "dex": 646,
    "name": "Kyurem",
    "form": "Black",
    "types": [
      "Dragon",
      "Ice"
    ],
    "atk": 310,
    "def": 183,
    "sta": 245
  },
  {
    "id": "646-white",
    "dex": 646,
    "name": "Kyurem",
    "form": "White",
    "types": [
      "Dragon",
      "Ice"
    ],
    "atk": 310,
    "def": 183,
    "sta": 245
  },
  {
    "id": "647-keldeo",
    "dex": 647,
    "name": "Keldeo",
    "types": [
      "Water",
      "Fighting"
    ],
    "atk": 260,
    "def": 192,
    "sta": 209
  },
  {
    "id": "648-meloetta",
    "dex": 648,
    "name": "Meloetta",
    "types": [
      "Normal",
      "Psychic"
    ],
    "atk": 250,
    "def": 225,
    "sta": 225
  },
  {
    "id": "648-pirouette",
    "dex": 648,
    "name": "Meloetta",
    "form": "Pirouette",
    "types": [
      "Normal",
      "Fighting"
    ],
    "atk": 269,
    "def": 188,
    "sta": 225
  },
  {
    "id": "649-genesect",
    "dex": 649,
    "name": "Genesect",
    "types": [
      "Bug",
      "Steel"
    ],
    "atk": 252,
    "def": 199,
    "sta": 174
  },
  {
    "id": "650-chespin",
    "dex": 650,
    "name": "Chespin",
    "types": [
      "Grass"
    ],
    "atk": 110,
    "def": 106,
    "sta": 148
  },
  {
    "id": "651-quilladin",
    "dex": 651,
    "name": "Quilladin",
    "types": [
      "Grass"
    ],
    "atk": 146,
    "def": 156,
    "sta": 156
  },
  {
    "id": "652-chesnaught",
    "dex": 652,
    "name": "Chesnaught",
    "types": [
      "Grass",
      "Fighting"
    ],
    "atk": 201,
    "def": 204,
    "sta": 204
  },
  {
    "id": "653-fennekin",
    "dex": 653,
    "name": "Fennekin",
    "types": [
      "Fire"
    ],
    "atk": 116,
    "def": 102,
    "sta": 120
  },
  {
    "id": "654-braixen",
    "dex": 654,
    "name": "Braixen",
    "types": [
      "Fire"
    ],
    "atk": 171,
    "def": 130,
    "sta": 153
  },
  {
    "id": "655-delphox",
    "dex": 655,
    "name": "Delphox",
    "types": [
      "Fire",
      "Psychic"
    ],
    "atk": 230,
    "def": 189,
    "sta": 181
  },
  {
    "id": "656-froakie",
    "dex": 656,
    "name": "Froakie",
    "types": [
      "Water"
    ],
    "atk": 122,
    "def": 84,
    "sta": 121
  },
  {
    "id": "657-frogadier",
    "dex": 657,
    "name": "Frogadier",
    "types": [
      "Water"
    ],
    "atk": 168,
    "def": 114,
    "sta": 144
  },
  {
    "id": "658-greninja",
    "dex": 658,
    "name": "Greninja",
    "types": [
      "Water",
      "Dark"
    ],
    "atk": 223,
    "def": 152,
    "sta": 176
  },
  {
    "id": "659-bunnelby",
    "dex": 659,
    "name": "Bunnelby",
    "types": [
      "Normal"
    ],
    "atk": 68,
    "def": 72,
    "sta": 116
  },
  {
    "id": "660-diggersby",
    "dex": 660,
    "name": "Diggersby",
    "types": [
      "Normal",
      "Ground"
    ],
    "atk": 112,
    "def": 155,
    "sta": 198
  },
  {
    "id": "661-fletchling",
    "dex": 661,
    "name": "Fletchling",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 95,
    "def": 80,
    "sta": 128
  },
  {
    "id": "662-fletchinder",
    "dex": 662,
    "name": "Fletchinder",
    "types": [
      "Fire",
      "Flying"
    ],
    "atk": 145,
    "def": 110,
    "sta": 158
  },
  {
    "id": "663-talonflame",
    "dex": 663,
    "name": "Talonflame",
    "types": [
      "Fire",
      "Flying"
    ],
    "atk": 176,
    "def": 155,
    "sta": 186
  },
  {
    "id": "664-scatterbug",
    "dex": 664,
    "name": "Scatterbug",
    "types": [
      "Bug"
    ],
    "atk": 63,
    "def": 63,
    "sta": 116
  },
  {
    "id": "665-spewpa",
    "dex": 665,
    "name": "Spewpa",
    "types": [
      "Bug"
    ],
    "atk": 48,
    "def": 89,
    "sta": 128
  },
  {
    "id": "666-vivillon",
    "dex": 666,
    "name": "Vivillon",
    "types": [
      "Bug",
      "Flying"
    ],
    "atk": 176,
    "def": 103,
    "sta": 190
  },
  {
    "id": "667-litleo",
    "dex": 667,
    "name": "Litleo",
    "types": [
      "Fire",
      "Normal"
    ],
    "atk": 139,
    "def": 112,
    "sta": 158
  },
  {
    "id": "668-pyroar",
    "dex": 668,
    "name": "Pyroar",
    "types": [
      "Fire",
      "Normal"
    ],
    "atk": 221,
    "def": 149,
    "sta": 200
  },
  {
    "id": "669-flabebe",
    "dex": 669,
    "name": "Flabebe",
    "types": [
      "Fairy"
    ],
    "atk": 108,
    "def": 120,
    "sta": 127
  },
  {
    "id": "670-floette",
    "dex": 670,
    "name": "Floette",
    "types": [
      "Fairy"
    ],
    "atk": 136,
    "def": 151,
    "sta": 144
  },
  {
    "id": "671-florges",
    "dex": 671,
    "name": "Florges",
    "types": [
      "Fairy"
    ],
    "atk": 212,
    "def": 244,
    "sta": 186
  },
  {
    "id": "672-skiddo",
    "dex": 672,
    "name": "Skiddo",
    "types": [
      "Grass"
    ],
    "atk": 123,
    "def": 102,
    "sta": 165
  },
  {
    "id": "673-gogoat",
    "dex": 673,
    "name": "Gogoat",
    "types": [
      "Grass"
    ],
    "atk": 196,
    "def": 146,
    "sta": 265
  },
  {
    "id": "674-pancham",
    "dex": 674,
    "name": "Pancham",
    "types": [
      "Fighting"
    ],
    "atk": 145,
    "def": 107,
    "sta": 167
  },
  {
    "id": "675-pangoro",
    "dex": 675,
    "name": "Pangoro",
    "types": [
      "Fighting",
      "Dark"
    ],
    "atk": 226,
    "def": 146,
    "sta": 216
  },
  {
    "id": "676-furfrou",
    "dex": 676,
    "name": "Furfrou",
    "types": [
      "Normal"
    ],
    "atk": 164,
    "def": 167,
    "sta": 181
  },
  {
    "id": "677-espurr",
    "dex": 677,
    "name": "Espurr",
    "types": [
      "Psychic"
    ],
    "atk": 120,
    "def": 114,
    "sta": 158
  },
  {
    "id": "678-meowstic",
    "dex": 678,
    "name": "Meowstic",
    "types": [
      "Psychic"
    ],
    "atk": 166,
    "def": 167,
    "sta": 179
  },
  {
    "id": "679-honedge",
    "dex": 679,
    "name": "Honedge",
    "types": [
      "Steel",
      "Ghost"
    ],
    "atk": 135,
    "def": 139,
    "sta": 128
  },
  {
    "id": "680-doublade",
    "dex": 680,
    "name": "Doublade",
    "types": [
      "Steel",
      "Ghost"
    ],
    "atk": 188,
    "def": 206,
    "sta": 153
  },
  {
    "id": "681-aegislash",
    "dex": 681,
    "name": "Aegislash",
    "types": [
      "Steel",
      "Ghost"
    ],
    "atk": 272,
    "def": 97,
    "sta": 155
  },
  {
    "id": "681-shield",
    "dex": 681,
    "name": "Aegislash",
    "form": "Shield",
    "types": [
      "Steel",
      "Ghost"
    ],
    "atk": 97,
    "def": 272,
    "sta": 155
  },
  {
    "id": "682-spritzee",
    "dex": 682,
    "name": "Spritzee",
    "types": [
      "Fairy"
    ],
    "atk": 110,
    "def": 113,
    "sta": 186
  },
  {
    "id": "683-aromatisse",
    "dex": 683,
    "name": "Aromatisse",
    "types": [
      "Fairy"
    ],
    "atk": 173,
    "def": 150,
    "sta": 226
  },
  {
    "id": "684-swirlix",
    "dex": 684,
    "name": "Swirlix",
    "types": [
      "Fairy"
    ],
    "atk": 109,
    "def": 119,
    "sta": 158
  },
  {
    "id": "685-slurpuff",
    "dex": 685,
    "name": "Slurpuff",
    "types": [
      "Fairy"
    ],
    "atk": 168,
    "def": 163,
    "sta": 193
  },
  {
    "id": "686-inkay",
    "dex": 686,
    "name": "Inkay",
    "types": [
      "Dark",
      "Psychic"
    ],
    "atk": 98,
    "def": 95,
    "sta": 142
  },
  {
    "id": "687-malamar",
    "dex": 687,
    "name": "Malamar",
    "types": [
      "Dark",
      "Psychic"
    ],
    "atk": 177,
    "def": 165,
    "sta": 200
  },
  {
    "id": "688-binacle",
    "dex": 688,
    "name": "Binacle",
    "types": [
      "Rock",
      "Water"
    ],
    "atk": 96,
    "def": 120,
    "sta": 123
  },
  {
    "id": "689-barbaracle",
    "dex": 689,
    "name": "Barbaracle",
    "types": [
      "Rock",
      "Water"
    ],
    "atk": 194,
    "def": 205,
    "sta": 176
  },
  {
    "id": "690-skrelp",
    "dex": 690,
    "name": "Skrelp",
    "types": [
      "Poison",
      "Water"
    ],
    "atk": 109,
    "def": 109,
    "sta": 137
  },
  {
    "id": "691-dragalge",
    "dex": 691,
    "name": "Dragalge",
    "types": [
      "Poison",
      "Dragon"
    ],
    "atk": 177,
    "def": 207,
    "sta": 163
  },
  {
    "id": "692-clauncher",
    "dex": 692,
    "name": "Clauncher",
    "types": [
      "Water"
    ],
    "atk": 108,
    "def": 117,
    "sta": 137
  },
  {
    "id": "693-clawitzer",
    "dex": 693,
    "name": "Clawitzer",
    "types": [
      "Water"
    ],
    "atk": 221,
    "def": 171,
    "sta": 174
  },
  {
    "id": "694-helioptile",
    "dex": 694,
    "name": "Helioptile",
    "types": [
      "Electric",
      "Normal"
    ],
    "atk": 115,
    "def": 78,
    "sta": 127
  },
  {
    "id": "695-heliolisk",
    "dex": 695,
    "name": "Heliolisk",
    "types": [
      "Electric",
      "Normal"
    ],
    "atk": 219,
    "def": 168,
    "sta": 158
  },
  {
    "id": "696-tyrunt",
    "dex": 696,
    "name": "Tyrunt",
    "types": [
      "Rock",
      "Dragon"
    ],
    "atk": 158,
    "def": 123,
    "sta": 151
  },
  {
    "id": "697-tyrantrum",
    "dex": 697,
    "name": "Tyrantrum",
    "types": [
      "Rock",
      "Dragon"
    ],
    "atk": 227,
    "def": 191,
    "sta": 193
  },
  {
    "id": "698-amaura",
    "dex": 698,
    "name": "Amaura",
    "types": [
      "Rock",
      "Ice"
    ],
    "atk": 124,
    "def": 109,
    "sta": 184
  },
  {
    "id": "699-aurorus",
    "dex": 699,
    "name": "Aurorus",
    "types": [
      "Rock",
      "Ice"
    ],
    "atk": 186,
    "def": 163,
    "sta": 265
  },
  {
    "id": "700-sylveon",
    "dex": 700,
    "name": "Sylveon",
    "types": [
      "Fairy"
    ],
    "atk": 203,
    "def": 205,
    "sta": 216
  },
  {
    "id": "701-hawlucha",
    "dex": 701,
    "name": "Hawlucha",
    "types": [
      "Fighting",
      "Flying"
    ],
    "atk": 195,
    "def": 153,
    "sta": 186
  },
  {
    "id": "702-dedenne",
    "dex": 702,
    "name": "Dedenne",
    "types": [
      "Electric",
      "Fairy"
    ],
    "atk": 164,
    "def": 134,
    "sta": 167
  },
  {
    "id": "703-carbink",
    "dex": 703,
    "name": "Carbink",
    "types": [
      "Rock",
      "Fairy"
    ],
    "atk": 95,
    "def": 285,
    "sta": 137
  },
  {
    "id": "704-goomy",
    "dex": 704,
    "name": "Goomy",
    "types": [
      "Dragon"
    ],
    "atk": 101,
    "def": 112,
    "sta": 128
  },
  {
    "id": "705-sliggoo",
    "dex": 705,
    "name": "Sliggoo",
    "types": [
      "Dragon"
    ],
    "atk": 159,
    "def": 176,
    "sta": 169
  },
  {
    "id": "706-goodra",
    "dex": 706,
    "name": "Goodra",
    "types": [
      "Dragon"
    ],
    "atk": 220,
    "def": 242,
    "sta": 207
  },
  {
    "id": "707-klefki",
    "dex": 707,
    "name": "Klefki",
    "types": [
      "Steel",
      "Fairy"
    ],
    "atk": 160,
    "def": 179,
    "sta": 149
  },
  {
    "id": "708-phantump",
    "dex": 708,
    "name": "Phantump",
    "types": [
      "Ghost",
      "Grass"
    ],
    "atk": 125,
    "def": 103,
    "sta": 125
  },
  {
    "id": "709-trevenant",
    "dex": 709,
    "name": "Trevenant",
    "types": [
      "Ghost",
      "Grass"
    ],
    "atk": 201,
    "def": 154,
    "sta": 198
  },
  {
    "id": "710-pumpkaboo",
    "dex": 710,
    "name": "Pumpkaboo",
    "types": [
      "Ghost",
      "Grass"
    ],
    "atk": 121,
    "def": 123,
    "sta": 135
  },
  {
    "id": "710-large",
    "dex": 710,
    "name": "Pumpkaboo",
    "form": "Large",
    "types": [
      "Ghost",
      "Grass"
    ],
    "atk": 120,
    "def": 122,
    "sta": 144
  },
  {
    "id": "710-small",
    "dex": 710,
    "name": "Pumpkaboo",
    "form": "Small",
    "types": [
      "Ghost",
      "Grass"
    ],
    "atk": 122,
    "def": 124,
    "sta": 127
  },
  {
    "id": "710-super",
    "dex": 710,
    "name": "Pumpkaboo",
    "form": "Super",
    "types": [
      "Ghost",
      "Grass"
    ],
    "atk": 118,
    "def": 120,
    "sta": 153
  },
  {
    "id": "711-gourgeist",
    "dex": 711,
    "name": "Gourgeist",
    "types": [
      "Ghost",
      "Grass"
    ],
    "atk": 175,
    "def": 213,
    "sta": 163
  },
  {
    "id": "711-large",
    "dex": 711,
    "name": "Gourgeist",
    "form": "Large",
    "types": [
      "Ghost",
      "Grass"
    ],
    "atk": 179,
    "def": 206,
    "sta": 181
  },
  {
    "id": "711-small",
    "dex": 711,
    "name": "Gourgeist",
    "form": "Small",
    "types": [
      "Ghost",
      "Grass"
    ],
    "atk": 171,
    "def": 219,
    "sta": 146
  },
  {
    "id": "711-super",
    "dex": 711,
    "name": "Gourgeist",
    "form": "Super",
    "types": [
      "Ghost",
      "Grass"
    ],
    "atk": 182,
    "def": 200,
    "sta": 198
  },
  {
    "id": "712-bergmite",
    "dex": 712,
    "name": "Bergmite",
    "types": [
      "Ice"
    ],
    "atk": 117,
    "def": 120,
    "sta": 146
  },
  {
    "id": "713-avalugg",
    "dex": 713,
    "name": "Avalugg",
    "types": [
      "Ice"
    ],
    "atk": 196,
    "def": 240,
    "sta": 216
  },
  {
    "id": "713-hisuian",
    "dex": 713,
    "name": "Avalugg",
    "form": "Hisuian",
    "types": [
      "Ice",
      "Rock"
    ],
    "atk": 214,
    "def": 238,
    "sta": 216
  },
  {
    "id": "714-noibat",
    "dex": 714,
    "name": "Noibat",
    "types": [
      "Flying",
      "Dragon"
    ],
    "atk": 83,
    "def": 73,
    "sta": 120
  },
  {
    "id": "715-noivern",
    "dex": 715,
    "name": "Noivern",
    "types": [
      "Flying",
      "Dragon"
    ],
    "atk": 205,
    "def": 175,
    "sta": 198
  },
  {
    "id": "716-xerneas",
    "dex": 716,
    "name": "Xerneas",
    "types": [
      "Fairy"
    ],
    "atk": 250,
    "def": 185,
    "sta": 246
  },
  {
    "id": "717-yveltal",
    "dex": 717,
    "name": "Yveltal",
    "types": [
      "Dark",
      "Flying"
    ],
    "atk": 250,
    "def": 185,
    "sta": 246
  },
  {
    "id": "718-zygarde",
    "dex": 718,
    "name": "Zygarde",
    "types": [
      "Dragon",
      "Ground"
    ],
    "atk": 184,
    "def": 207,
    "sta": 389
  },
  {
    "id": "718-complete_fifty_percent",
    "dex": 718,
    "name": "Zygarde",
    "form": "Complete Fifty Percent",
    "types": [
      "Dragon",
      "Ground"
    ],
    "atk": 203,
    "def": 232,
    "sta": 239
  },
  {
    "id": "718-complete_ten_percent",
    "dex": 718,
    "name": "Zygarde",
    "form": "Complete Ten Percent",
    "types": [
      "Dragon",
      "Ground"
    ],
    "atk": 205,
    "def": 173,
    "sta": 144
  },
  {
    "id": "719-diancie",
    "dex": 719,
    "name": "Diancie",
    "types": [
      "Rock",
      "Fairy"
    ],
    "atk": 190,
    "def": 285,
    "sta": 137
  },
  {
    "id": "719-mega-normal",
    "dex": 719,
    "name": "Mega Diancie",
    "form": "Mega",
    "types": [
      "Rock",
      "Fairy"
    ],
    "atk": 342,
    "def": 235,
    "sta": 137
  },
  {
    "id": "720-hoopa",
    "dex": 720,
    "name": "Hoopa",
    "types": [
      "Psychic",
      "Ghost"
    ],
    "atk": 261,
    "def": 187,
    "sta": 173
  },
  {
    "id": "720-unbound",
    "dex": 720,
    "name": "Hoopa",
    "form": "Unbound",
    "types": [
      "Psychic",
      "Dark"
    ],
    "atk": 311,
    "def": 191,
    "sta": 173
  },
  {
    "id": "721-volcanion",
    "dex": 721,
    "name": "Volcanion",
    "types": [
      "Fire",
      "Water"
    ],
    "atk": 252,
    "def": 216,
    "sta": 190
  },
  {
    "id": "722-rowlet",
    "dex": 722,
    "name": "Rowlet",
    "types": [
      "Grass",
      "Flying"
    ],
    "atk": 102,
    "def": 99,
    "sta": 169
  },
  {
    "id": "723-dartrix",
    "dex": 723,
    "name": "Dartrix",
    "types": [
      "Grass",
      "Flying"
    ],
    "atk": 142,
    "def": 139,
    "sta": 186
  },
  {
    "id": "724-decidueye",
    "dex": 724,
    "name": "Decidueye",
    "types": [
      "Grass",
      "Ghost"
    ],
    "atk": 210,
    "def": 179,
    "sta": 186
  },
  {
    "id": "724-hisuian",
    "dex": 724,
    "name": "Decidueye",
    "form": "Hisuian",
    "types": [
      "Grass",
      "Fighting"
    ],
    "atk": 213,
    "def": 174,
    "sta": 204
  },
  {
    "id": "725-litten",
    "dex": 725,
    "name": "Litten",
    "types": [
      "Fire"
    ],
    "atk": 128,
    "def": 79,
    "sta": 128
  },
  {
    "id": "726-torracat",
    "dex": 726,
    "name": "Torracat",
    "types": [
      "Fire"
    ],
    "atk": 174,
    "def": 103,
    "sta": 163
  },
  {
    "id": "727-incineroar",
    "dex": 727,
    "name": "Incineroar",
    "types": [
      "Fire",
      "Dark"
    ],
    "atk": 214,
    "def": 175,
    "sta": 216
  },
  {
    "id": "728-popplio",
    "dex": 728,
    "name": "Popplio",
    "types": [
      "Water"
    ],
    "atk": 120,
    "def": 103,
    "sta": 137
  },
  {
    "id": "729-brionne",
    "dex": 729,
    "name": "Brionne",
    "types": [
      "Water"
    ],
    "atk": 168,
    "def": 145,
    "sta": 155
  },
  {
    "id": "730-primarina",
    "dex": 730,
    "name": "Primarina",
    "types": [
      "Water",
      "Fairy"
    ],
    "atk": 232,
    "def": 195,
    "sta": 190
  },
  {
    "id": "731-pikipek",
    "dex": 731,
    "name": "Pikipek",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 136,
    "def": 59,
    "sta": 111
  },
  {
    "id": "732-trumbeak",
    "dex": 732,
    "name": "Trumbeak",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 159,
    "def": 100,
    "sta": 146
  },
  {
    "id": "733-toucannon",
    "dex": 733,
    "name": "Toucannon",
    "types": [
      "Normal",
      "Flying"
    ],
    "atk": 222,
    "def": 146,
    "sta": 190
  },
  {
    "id": "734-yungoos",
    "dex": 734,
    "name": "Yungoos",
    "types": [
      "Normal"
    ],
    "atk": 122,
    "def": 56,
    "sta": 134
  },
  {
    "id": "735-gumshoos",
    "dex": 735,
    "name": "Gumshoos",
    "types": [
      "Normal"
    ],
    "atk": 194,
    "def": 113,
    "sta": 204
  },
  {
    "id": "736-grubbin",
    "dex": 736,
    "name": "Grubbin",
    "types": [
      "Bug"
    ],
    "atk": 115,
    "def": 85,
    "sta": 132
  },
  {
    "id": "737-charjabug",
    "dex": 737,
    "name": "Charjabug",
    "types": [
      "Bug",
      "Electric"
    ],
    "atk": 145,
    "def": 161,
    "sta": 149
  },
  {
    "id": "738-vikavolt",
    "dex": 738,
    "name": "Vikavolt",
    "types": [
      "Bug",
      "Electric"
    ],
    "atk": 254,
    "def": 158,
    "sta": 184
  },
  {
    "id": "739-crabrawler",
    "dex": 739,
    "name": "Crabrawler",
    "types": [
      "Fighting"
    ],
    "atk": 150,
    "def": 104,
    "sta": 132
  },
  {
    "id": "740-crabominable",
    "dex": 740,
    "name": "Crabominable",
    "types": [
      "Fighting",
      "Ice"
    ],
    "atk": 231,
    "def": 138,
    "sta": 219
  },
  {
    "id": "741-oricorio",
    "dex": 741,
    "name": "Oricorio",
    "types": [
      "Fire",
      "Flying"
    ],
    "atk": 196,
    "def": 145,
    "sta": 181
  },
  {
    "id": "741-pau",
    "dex": 741,
    "name": "Oricorio",
    "form": "Pau",
    "types": [
      "Psychic",
      "Flying"
    ],
    "atk": 196,
    "def": 145,
    "sta": 181
  },
  {
    "id": "741-pompom",
    "dex": 741,
    "name": "Oricorio",
    "form": "Pompom",
    "types": [
      "Electric",
      "Flying"
    ],
    "atk": 196,
    "def": 145,
    "sta": 181
  },
  {
    "id": "741-sensu",
    "dex": 741,
    "name": "Oricorio",
    "form": "Sensu",
    "types": [
      "Ghost",
      "Flying"
    ],
    "atk": 196,
    "def": 145,
    "sta": 181
  },
  {
    "id": "742-cutiefly",
    "dex": 742,
    "name": "Cutiefly",
    "types": [
      "Bug",
      "Fairy"
    ],
    "atk": 110,
    "def": 81,
    "sta": 120
  },
  {
    "id": "743-ribombee",
    "dex": 743,
    "name": "Ribombee",
    "types": [
      "Bug",
      "Fairy"
    ],
    "atk": 198,
    "def": 146,
    "sta": 155
  },
  {
    "id": "744-rockruff",
    "dex": 744,
    "name": "Rockruff",
    "types": [
      "Rock"
    ],
    "atk": 117,
    "def": 78,
    "sta": 128
  },
  {
    "id": "744-dusk",
    "dex": 744,
    "name": "Rockruff",
    "form": "Dusk",
    "types": [
      "Rock"
    ],
    "atk": 117,
    "def": 78,
    "sta": 128
  },
  {
    "id": "745-lycanroc",
    "dex": 745,
    "name": "Lycanroc",
    "types": [
      "Rock"
    ],
    "atk": 234,
    "def": 139,
    "sta": 181
  },
  {
    "id": "745-midday",
    "dex": 745,
    "name": "Lycanroc",
    "form": "Midday",
    "types": [
      "Rock"
    ],
    "atk": 231,
    "def": 140,
    "sta": 181
  },
  {
    "id": "745-midnight",
    "dex": 745,
    "name": "Lycanroc",
    "form": "Midnight",
    "types": [
      "Rock"
    ],
    "atk": 218,
    "def": 152,
    "sta": 198
  },
  {
    "id": "747-mareanie",
    "dex": 747,
    "name": "Mareanie",
    "types": [
      "Poison",
      "Water"
    ],
    "atk": 98,
    "def": 110,
    "sta": 137
  },
  {
    "id": "748-toxapex",
    "dex": 748,
    "name": "Toxapex",
    "types": [
      "Poison",
      "Water"
    ],
    "atk": 114,
    "def": 273,
    "sta": 137
  },
  {
    "id": "749-mudbray",
    "dex": 749,
    "name": "Mudbray",
    "types": [
      "Ground"
    ],
    "atk": 175,
    "def": 121,
    "sta": 172
  },
  {
    "id": "750-mudsdale",
    "dex": 750,
    "name": "Mudsdale",
    "types": [
      "Ground"
    ],
    "atk": 214,
    "def": 174,
    "sta": 225
  },
  {
    "id": "751-dewpider",
    "dex": 751,
    "name": "Dewpider",
    "types": [
      "Water",
      "Bug"
    ],
    "atk": 72,
    "def": 117,
    "sta": 116
  },
  {
    "id": "752-araquanid",
    "dex": 752,
    "name": "Araquanid",
    "types": [
      "Water",
      "Bug"
    ],
    "atk": 126,
    "def": 219,
    "sta": 169
  },
  {
    "id": "753-fomantis",
    "dex": 753,
    "name": "Fomantis",
    "types": [
      "Grass"
    ],
    "atk": 100,
    "def": 64,
    "sta": 120
  },
  {
    "id": "754-lurantis",
    "dex": 754,
    "name": "Lurantis",
    "types": [
      "Grass"
    ],
    "atk": 192,
    "def": 169,
    "sta": 172
  },
  {
    "id": "755-morelull",
    "dex": 755,
    "name": "Morelull",
    "types": [
      "Grass",
      "Fairy"
    ],
    "atk": 108,
    "def": 119,
    "sta": 120
  },
  {
    "id": "756-shiinotic",
    "dex": 756,
    "name": "Shiinotic",
    "types": [
      "Grass",
      "Fairy"
    ],
    "atk": 154,
    "def": 168,
    "sta": 155
  },
  {
    "id": "757-salandit",
    "dex": 757,
    "name": "Salandit",
    "types": [
      "Poison",
      "Fire"
    ],
    "atk": 136,
    "def": 80,
    "sta": 134
  },
  {
    "id": "758-salazzle",
    "dex": 758,
    "name": "Salazzle",
    "types": [
      "Poison",
      "Fire"
    ],
    "atk": 228,
    "def": 130,
    "sta": 169
  },
  {
    "id": "759-stufful",
    "dex": 759,
    "name": "Stufful",
    "types": [
      "Normal",
      "Fighting"
    ],
    "atk": 136,
    "def": 95,
    "sta": 172
  },
  {
    "id": "760-bewear",
    "dex": 760,
    "name": "Bewear",
    "types": [
      "Normal",
      "Fighting"
    ],
    "atk": 226,
    "def": 141,
    "sta": 260
  },
  {
    "id": "761-bounsweet",
    "dex": 761,
    "name": "Bounsweet",
    "types": [
      "Grass"
    ],
    "atk": 55,
    "def": 69,
    "sta": 123
  },
  {
    "id": "762-steenee",
    "dex": 762,
    "name": "Steenee",
    "types": [
      "Grass"
    ],
    "atk": 78,
    "def": 94,
    "sta": 141
  },
  {
    "id": "763-tsareena",
    "dex": 763,
    "name": "Tsareena",
    "types": [
      "Grass"
    ],
    "atk": 222,
    "def": 195,
    "sta": 176
  },
  {
    "id": "764-comfey",
    "dex": 764,
    "name": "Comfey",
    "types": [
      "Fairy"
    ],
    "atk": 165,
    "def": 215,
    "sta": 139
  },
  {
    "id": "765-oranguru",
    "dex": 765,
    "name": "Oranguru",
    "types": [
      "Normal",
      "Psychic"
    ],
    "atk": 168,
    "def": 192,
    "sta": 207
  },
  {
    "id": "766-passimian",
    "dex": 766,
    "name": "Passimian",
    "types": [
      "Fighting"
    ],
    "atk": 222,
    "def": 160,
    "sta": 225
  },
  {
    "id": "767-wimpod",
    "dex": 767,
    "name": "Wimpod",
    "types": [
      "Bug",
      "Water"
    ],
    "atk": 67,
    "def": 74,
    "sta": 93
  },
  {
    "id": "768-golisopod",
    "dex": 768,
    "name": "Golisopod",
    "types": [
      "Bug",
      "Water"
    ],
    "atk": 218,
    "def": 226,
    "sta": 181
  },
  {
    "id": "769-sandygast",
    "dex": 769,
    "name": "Sandygast",
    "types": [
      "Ghost",
      "Ground"
    ],
    "atk": 120,
    "def": 118,
    "sta": 146
  },
  {
    "id": "770-palossand",
    "dex": 770,
    "name": "Palossand",
    "types": [
      "Ghost",
      "Ground"
    ],
    "atk": 178,
    "def": 178,
    "sta": 198
  },
  {
    "id": "775-komala",
    "dex": 775,
    "name": "Komala",
    "types": [
      "Normal"
    ],
    "atk": 216,
    "def": 165,
    "sta": 163
  },
  {
    "id": "776-turtonator",
    "dex": 776,
    "name": "Turtonator",
    "types": [
      "Fire",
      "Dragon"
    ],
    "atk": 165,
    "def": 215,
    "sta": 155
  },
  {
    "id": "777-togedemaru",
    "dex": 777,
    "name": "Togedemaru",
    "types": [
      "Electric",
      "Steel"
    ],
    "atk": 190,
    "def": 145,
    "sta": 163
  },
  {
    "id": "779-bruxish",
    "dex": 779,
    "name": "Bruxish",
    "types": [
      "Water",
      "Psychic"
    ],
    "atk": 208,
    "def": 145,
    "sta": 169
  },
  {
    "id": "780-drampa",
    "dex": 780,
    "name": "Drampa",
    "types": [
      "Normal",
      "Dragon"
    ],
    "atk": 231,
    "def": 164,
    "sta": 186
  },
  {
    "id": "781-dhelmise",
    "dex": 781,
    "name": "Dhelmise",
    "types": [
      "Ghost",
      "Grass"
    ],
    "atk": 233,
    "def": 179,
    "sta": 172
  },
  {
    "id": "782-jangmo_o",
    "dex": 782,
    "name": "Jangmo-o",
    "types": [
      "Dragon"
    ],
    "atk": 102,
    "def": 108,
    "sta": 128
  },
  {
    "id": "783-hakamo_o",
    "dex": 783,
    "name": "Hakamo-o",
    "types": [
      "Dragon",
      "Fighting"
    ],
    "atk": 145,
    "def": 162,
    "sta": 146
  },
  {
    "id": "784-kommo_o",
    "dex": 784,
    "name": "Kommo-o",
    "types": [
      "Dragon",
      "Fighting"
    ],
    "atk": 222,
    "def": 240,
    "sta": 181
  },
  {
    "id": "785-tapu_koko",
    "dex": 785,
    "name": "Tapu Koko",
    "types": [
      "Electric",
      "Fairy"
    ],
    "atk": 250,
    "def": 181,
    "sta": 172
  },
  {
    "id": "786-tapu_lele",
    "dex": 786,
    "name": "Tapu Lele",
    "types": [
      "Psychic",
      "Fairy"
    ],
    "atk": 259,
    "def": 208,
    "sta": 172
  },
  {
    "id": "787-tapu_bulu",
    "dex": 787,
    "name": "Tapu Bulu",
    "types": [
      "Grass",
      "Fairy"
    ],
    "atk": 249,
    "def": 215,
    "sta": 172
  },
  {
    "id": "788-tapu_fini",
    "dex": 788,
    "name": "Tapu Fini",
    "types": [
      "Water",
      "Fairy"
    ],
    "atk": 189,
    "def": 254,
    "sta": 172
  },
  {
    "id": "789-cosmog",
    "dex": 789,
    "name": "Cosmog",
    "types": [
      "Psychic"
    ],
    "atk": 54,
    "def": 57,
    "sta": 125
  },
  {
    "id": "790-cosmoem",
    "dex": 790,
    "name": "Cosmoem",
    "types": [
      "Psychic"
    ],
    "atk": 54,
    "def": 242,
    "sta": 125
  },
  {
    "id": "791-solgaleo",
    "dex": 791,
    "name": "Solgaleo",
    "types": [
      "Psychic",
      "Steel"
    ],
    "atk": 255,
    "def": 191,
    "sta": 264
  },
  {
    "id": "792-lunala",
    "dex": 792,
    "name": "Lunala",
    "types": [
      "Psychic",
      "Ghost"
    ],
    "atk": 255,
    "def": 191,
    "sta": 264
  },
  {
    "id": "793-nihilego",
    "dex": 793,
    "name": "Nihilego",
    "types": [
      "Rock",
      "Poison"
    ],
    "atk": 249,
    "def": 210,
    "sta": 240
  },
  {
    "id": "794-buzzwole",
    "dex": 794,
    "name": "Buzzwole",
    "types": [
      "Bug",
      "Fighting"
    ],
    "atk": 236,
    "def": 196,
    "sta": 216
  },
  {
    "id": "795-pheromosa",
    "dex": 795,
    "name": "Pheromosa",
    "types": [
      "Bug",
      "Fighting"
    ],
    "atk": 316,
    "def": 85,
    "sta": 174
  },
  {
    "id": "796-xurkitree",
    "dex": 796,
    "name": "Xurkitree",
    "types": [
      "Electric"
    ],
    "atk": 330,
    "def": 144,
    "sta": 195
  },
  {
    "id": "797-celesteela",
    "dex": 797,
    "name": "Celesteela",
    "types": [
      "Steel",
      "Flying"
    ],
    "atk": 207,
    "def": 199,
    "sta": 219
  },
  {
    "id": "798-kartana",
    "dex": 798,
    "name": "Kartana",
    "types": [
      "Grass",
      "Steel"
    ],
    "atk": 323,
    "def": 182,
    "sta": 139
  },
  {
    "id": "799-guzzlord",
    "dex": 799,
    "name": "Guzzlord",
    "types": [
      "Dark",
      "Dragon"
    ],
    "atk": 188,
    "def": 99,
    "sta": 440
  },
  {
    "id": "800-necrozma",
    "dex": 800,
    "name": "Necrozma",
    "types": [
      "Psychic"
    ],
    "atk": 251,
    "def": 195,
    "sta": 219
  },
  {
    "id": "800-dawn_wings",
    "dex": 800,
    "name": "Necrozma",
    "form": "Dawn Wings",
    "types": [
      "Psychic",
      "Ghost"
    ],
    "atk": 277,
    "def": 220,
    "sta": 200
  },
  {
    "id": "800-dusk_mane",
    "dex": 800,
    "name": "Necrozma",
    "form": "Dusk Mane",
    "types": [
      "Psychic",
      "Steel"
    ],
    "atk": 277,
    "def": 220,
    "sta": 200
  },
  {
    "id": "800-ultra",
    "dex": 800,
    "name": "Necrozma",
    "form": "Ultra",
    "types": [
      "Psychic",
      "Dragon"
    ],
    "atk": 337,
    "def": 196,
    "sta": 200
  },
  {
    "id": "802-marshadow",
    "dex": 802,
    "name": "Marshadow",
    "types": [
      "Fighting",
      "Ghost"
    ],
    "atk": 265,
    "def": 190,
    "sta": 207
  },
  {
    "id": "803-poipole",
    "dex": 803,
    "name": "Poipole",
    "types": [
      "Poison"
    ],
    "atk": 145,
    "def": 133,
    "sta": 167
  },
  {
    "id": "804-naganadel",
    "dex": 804,
    "name": "Naganadel",
    "types": [
      "Poison",
      "Dragon"
    ],
    "atk": 263,
    "def": 159,
    "sta": 177
  },
  {
    "id": "805-stakataka",
    "dex": 805,
    "name": "Stakataka",
    "types": [
      "Rock",
      "Steel"
    ],
    "atk": 213,
    "def": 298,
    "sta": 156
  },
  {
    "id": "806-blacephalon",
    "dex": 806,
    "name": "Blacephalon",
    "types": [
      "Fire",
      "Ghost"
    ],
    "atk": 315,
    "def": 148,
    "sta": 142
  },
  {
    "id": "808-meltan",
    "dex": 808,
    "name": "Meltan",
    "types": [
      "Steel"
    ],
    "atk": 118,
    "def": 99,
    "sta": 130
  },
  {
    "id": "809-melmetal",
    "dex": 809,
    "name": "Melmetal",
    "types": [
      "Steel"
    ],
    "atk": 226,
    "def": 190,
    "sta": 264
  },
  {
    "id": "810-grookey",
    "dex": 810,
    "name": "Grookey",
    "types": [
      "Grass"
    ],
    "atk": 122,
    "def": 91,
    "sta": 137
  },
  {
    "id": "811-thwackey",
    "dex": 811,
    "name": "Thwackey",
    "types": [
      "Grass"
    ],
    "atk": 165,
    "def": 134,
    "sta": 172
  },
  {
    "id": "812-rillaboom",
    "dex": 812,
    "name": "Rillaboom",
    "types": [
      "Grass"
    ],
    "atk": 239,
    "def": 168,
    "sta": 225
  },
  {
    "id": "813-scorbunny",
    "dex": 813,
    "name": "Scorbunny",
    "types": [
      "Fire"
    ],
    "atk": 132,
    "def": 79,
    "sta": 137
  },
  {
    "id": "814-raboot",
    "dex": 814,
    "name": "Raboot",
    "types": [
      "Fire"
    ],
    "atk": 170,
    "def": 125,
    "sta": 163
  },
  {
    "id": "815-cinderace",
    "dex": 815,
    "name": "Cinderace",
    "types": [
      "Fire"
    ],
    "atk": 238,
    "def": 163,
    "sta": 190
  },
  {
    "id": "816-sobble",
    "dex": 816,
    "name": "Sobble",
    "types": [
      "Water"
    ],
    "atk": 132,
    "def": 79,
    "sta": 137
  },
  {
    "id": "817-drizzile",
    "dex": 817,
    "name": "Drizzile",
    "types": [
      "Water"
    ],
    "atk": 186,
    "def": 113,
    "sta": 163
  },
  {
    "id": "818-inteleon",
    "dex": 818,
    "name": "Inteleon",
    "types": [
      "Water"
    ],
    "atk": 262,
    "def": 142,
    "sta": 172
  },
  {
    "id": "819-skwovet",
    "dex": 819,
    "name": "Skwovet",
    "types": [
      "Normal"
    ],
    "atk": 95,
    "def": 86,
    "sta": 172
  },
  {
    "id": "820-greedent",
    "dex": 820,
    "name": "Greedent",
    "types": [
      "Normal"
    ],
    "atk": 160,
    "def": 156,
    "sta": 260
  },
  {
    "id": "821-rookidee",
    "dex": 821,
    "name": "Rookidee",
    "types": [
      "Flying"
    ],
    "atk": 88,
    "def": 67,
    "sta": 116
  },
  {
    "id": "822-corvisquire",
    "dex": 822,
    "name": "Corvisquire",
    "types": [
      "Flying"
    ],
    "atk": 129,
    "def": 110,
    "sta": 169
  },
  {
    "id": "823-corviknight",
    "dex": 823,
    "name": "Corviknight",
    "types": [
      "Flying",
      "Steel"
    ],
    "atk": 163,
    "def": 192,
    "sta": 221
  },
  {
    "id": "827-nickit",
    "dex": 827,
    "name": "Nickit",
    "types": [
      "Dark"
    ],
    "atk": 85,
    "def": 82,
    "sta": 120
  },
  {
    "id": "828-thievul",
    "dex": 828,
    "name": "Thievul",
    "types": [
      "Dark"
    ],
    "atk": 172,
    "def": 164,
    "sta": 172
  },
  {
    "id": "829-gossifleur",
    "dex": 829,
    "name": "Gossifleur",
    "types": [
      "Grass"
    ],
    "atk": 70,
    "def": 104,
    "sta": 120
  },
  {
    "id": "830-eldegoss",
    "dex": 830,
    "name": "Eldegoss",
    "types": [
      "Grass"
    ],
    "atk": 148,
    "def": 211,
    "sta": 155
  },
  {
    "id": "831-wooloo",
    "dex": 831,
    "name": "Wooloo",
    "types": [
      "Normal"
    ],
    "atk": 76,
    "def": 97,
    "sta": 123
  },
  {
    "id": "832-dubwool",
    "dex": 832,
    "name": "Dubwool",
    "types": [
      "Normal"
    ],
    "atk": 159,
    "def": 198,
    "sta": 176
  },
  {
    "id": "835-yamper",
    "dex": 835,
    "name": "Yamper",
    "types": [
      "Electric"
    ],
    "atk": 80,
    "def": 90,
    "sta": 153
  },
  {
    "id": "836-boltund",
    "dex": 836,
    "name": "Boltund",
    "types": [
      "Electric"
    ],
    "atk": 197,
    "def": 131,
    "sta": 170
  },
  {
    "id": "837-rolycoly",
    "dex": 837,
    "name": "Rolycoly",
    "types": [
      "Rock"
    ],
    "atk": 73,
    "def": 91,
    "sta": 102
  },
  {
    "id": "838-carkol",
    "dex": 838,
    "name": "Carkol",
    "types": [
      "Rock",
      "Fire"
    ],
    "atk": 114,
    "def": 157,
    "sta": 190
  },
  {
    "id": "839-coalossal",
    "dex": 839,
    "name": "Coalossal",
    "types": [
      "Rock",
      "Fire"
    ],
    "atk": 146,
    "def": 198,
    "sta": 242
  },
  {
    "id": "840-applin",
    "dex": 840,
    "name": "Applin",
    "types": [
      "Grass",
      "Dragon"
    ],
    "atk": 71,
    "def": 116,
    "sta": 120
  },
  {
    "id": "841-flapple",
    "dex": 841,
    "name": "Flapple",
    "types": [
      "Grass",
      "Dragon"
    ],
    "atk": 214,
    "def": 144,
    "sta": 172
  },
  {
    "id": "842-appletun",
    "dex": 842,
    "name": "Appletun",
    "types": [
      "Grass",
      "Dragon"
    ],
    "atk": 178,
    "def": 146,
    "sta": 242
  },
  {
    "id": "845-cramorant",
    "dex": 845,
    "name": "Cramorant",
    "types": [
      "Flying",
      "Water"
    ],
    "atk": 173,
    "def": 163,
    "sta": 172
  },
  {
    "id": "850-sizzlipede",
    "dex": 850,
    "name": "Sizzlipede",
    "types": [
      "Fire",
      "Bug"
    ],
    "atk": 118,
    "def": 90,
    "sta": 137
  },
  {
    "id": "851-centiskorch",
    "dex": 851,
    "name": "Centiskorch",
    "types": [
      "Fire",
      "Bug"
    ],
    "atk": 220,
    "def": 158,
    "sta": 225
  },
  {
    "id": "852-clobbopus",
    "dex": 852,
    "name": "Clobbopus",
    "types": [
      "Fighting"
    ],
    "atk": 121,
    "def": 103,
    "sta": 137
  },
  {
    "id": "853-grapploct",
    "dex": 853,
    "name": "Grapploct",
    "types": [
      "Fighting"
    ],
    "atk": 209,
    "def": 162,
    "sta": 190
  },
  {
    "id": "855-polteageist",
    "dex": 855,
    "name": "Polteageist",
    "types": [
      "Ghost"
    ],
    "atk": 248,
    "def": 189,
    "sta": 155
  },
  {
    "id": "856-hatenna",
    "dex": 856,
    "name": "Hatenna",
    "types": [
      "Psychic"
    ],
    "atk": 98,
    "def": 93,
    "sta": 123
  },
  {
    "id": "857-hattrem",
    "dex": 857,
    "name": "Hattrem",
    "types": [
      "Psychic"
    ],
    "atk": 153,
    "def": 133,
    "sta": 149
  },
  {
    "id": "858-hatterene",
    "dex": 858,
    "name": "Hatterene",
    "types": [
      "Psychic",
      "Fairy"
    ],
    "atk": 237,
    "def": 182,
    "sta": 149
  },
  {
    "id": "859-impidimp",
    "dex": 859,
    "name": "Impidimp",
    "types": [
      "Dark",
      "Fairy"
    ],
    "atk": 103,
    "def": 69,
    "sta": 128
  },
  {
    "id": "860-morgrem",
    "dex": 860,
    "name": "Morgrem",
    "types": [
      "Dark",
      "Fairy"
    ],
    "atk": 145,
    "def": 102,
    "sta": 163
  },
  {
    "id": "861-grimmsnarl",
    "dex": 861,
    "name": "Grimmsnarl",
    "types": [
      "Dark",
      "Fairy"
    ],
    "atk": 227,
    "def": 139,
    "sta": 216
  },
  {
    "id": "862-obstagoon",
    "dex": 862,
    "name": "Obstagoon",
    "types": [
      "Dark",
      "Normal"
    ],
    "atk": 180,
    "def": 194,
    "sta": 212
  },
  {
    "id": "863-perrserker",
    "dex": 863,
    "name": "Perrserker",
    "types": [
      "Steel"
    ],
    "atk": 195,
    "def": 162,
    "sta": 172
  },
  {
    "id": "864-cursola",
    "dex": 864,
    "name": "Cursola",
    "types": [
      "Ghost"
    ],
    "atk": 253,
    "def": 182,
    "sta": 155
  },
  {
    "id": "865-sirfetch_d",
    "dex": 865,
    "name": "Sirfetch’d",
    "types": [
      "Fighting"
    ],
    "atk": 248,
    "def": 176,
    "sta": 158
  },
  {
    "id": "866-mr_rime",
    "dex": 866,
    "name": "Mr. Rime",
    "types": [
      "Ice",
      "Psychic"
    ],
    "atk": 212,
    "def": 179,
    "sta": 190
  },
  {
    "id": "867-runerigus",
    "dex": 867,
    "name": "Runerigus",
    "types": [
      "Ground",
      "Ghost"
    ],
    "atk": 163,
    "def": 237,
    "sta": 151
  },
  {
    "id": "870-falinks",
    "dex": 870,
    "name": "Falinks",
    "types": [
      "Fighting"
    ],
    "atk": 193,
    "def": 170,
    "sta": 163
  },
  {
    "id": "872-snom",
    "dex": 872,
    "name": "Snom",
    "types": [
      "Ice",
      "Bug"
    ],
    "atk": 76,
    "def": 59,
    "sta": 102
  },
  {
    "id": "873-frosmoth",
    "dex": 873,
    "name": "Frosmoth",
    "types": [
      "Ice",
      "Bug"
    ],
    "atk": 230,
    "def": 155,
    "sta": 172
  },
  {
    "id": "874-stonjourner",
    "dex": 874,
    "name": "Stonjourner",
    "types": [
      "Rock"
    ],
    "atk": 222,
    "def": 182,
    "sta": 225
  },
  {
    "id": "876-indeedee",
    "dex": 876,
    "name": "Indeedee",
    "types": [
      "Psychic",
      "Normal"
    ],
    "atk": 184,
    "def": 184,
    "sta": 172
  },
  {
    "id": "876-male",
    "dex": 876,
    "name": "Indeedee",
    "form": "Male",
    "types": [
      "Psychic",
      "Normal"
    ],
    "atk": 208,
    "def": 166,
    "sta": 155
  },
  {
    "id": "877-morpeko",
    "dex": 877,
    "name": "Morpeko",
    "types": [
      "Electric",
      "Dark"
    ],
    "atk": 192,
    "def": 121,
    "sta": 151
  },
  {
    "id": "884-duraludon",
    "dex": 884,
    "name": "Duraludon",
    "types": [
      "Steel",
      "Dragon"
    ],
    "atk": 239,
    "def": 185,
    "sta": 172
  },
  {
    "id": "885-dreepy",
    "dex": 885,
    "name": "Dreepy",
    "types": [
      "Dragon",
      "Ghost"
    ],
    "atk": 117,
    "def": 61,
    "sta": 99
  },
  {
    "id": "886-drakloak",
    "dex": 886,
    "name": "Drakloak",
    "types": [
      "Dragon",
      "Ghost"
    ],
    "atk": 163,
    "def": 105,
    "sta": 169
  },
  {
    "id": "887-dragapult",
    "dex": 887,
    "name": "Dragapult",
    "types": [
      "Dragon",
      "Ghost"
    ],
    "atk": 266,
    "def": 170,
    "sta": 204
  },
  {
    "id": "888-zacian",
    "dex": 888,
    "name": "Zacian",
    "types": [
      "Fairy",
      "Steel"
    ],
    "atk": 332,
    "def": 240,
    "sta": 192
  },
  {
    "id": "888-hero",
    "dex": 888,
    "name": "Zacian",
    "form": "Hero",
    "types": [
      "Fairy"
    ],
    "atk": 254,
    "def": 236,
    "sta": 192
  },
  {
    "id": "889-zamazenta",
    "dex": 889,
    "name": "Zamazenta",
    "types": [
      "Fighting",
      "Steel"
    ],
    "atk": 250,
    "def": 292,
    "sta": 192
  },
  {
    "id": "889-hero",
    "dex": 889,
    "name": "Zamazenta",
    "form": "Hero",
    "types": [
      "Fighting"
    ],
    "atk": 254,
    "def": 236,
    "sta": 192
  },
  {
    "id": "890-eternatus",
    "dex": 890,
    "name": "Eternatus",
    "types": [
      "Poison",
      "Dragon"
    ],
    "atk": 278,
    "def": 192,
    "sta": 268
  },
  {
    "id": "890-eternamax",
    "dex": 890,
    "name": "Eternatus",
    "form": "Eternamax",
    "types": [
      "Poison",
      "Dragon"
    ],
    "atk": 251,
    "def": 505,
    "sta": 452
  },
  {
    "id": "891-kubfu",
    "dex": 891,
    "name": "Kubfu",
    "types": [
      "Fighting"
    ],
    "atk": 170,
    "def": 112,
    "sta": 155
  },
  {
    "id": "892-urshifu",
    "dex": 892,
    "name": "Urshifu",
    "types": [
      "Fighting",
      "Water"
    ],
    "atk": 254,
    "def": 177,
    "sta": 225
  },
  {
    "id": "892-single_strike",
    "dex": 892,
    "name": "Urshifu",
    "form": "Single Strike",
    "types": [
      "Fighting",
      "Dark"
    ],
    "atk": 254,
    "def": 177,
    "sta": 225
  },
  {
    "id": "893-zarude",
    "dex": 893,
    "name": "Zarude",
    "types": [
      "Dark",
      "Grass"
    ],
    "atk": 242,
    "def": 215,
    "sta": 233
  },
  {
    "id": "894-regieleki",
    "dex": 894,
    "name": "Regieleki",
    "types": [
      "Electric"
    ],
    "atk": 250,
    "def": 125,
    "sta": 190
  },
  {
    "id": "895-regidrago",
    "dex": 895,
    "name": "Regidrago",
    "types": [
      "Dragon"
    ],
    "atk": 202,
    "def": 101,
    "sta": 400
  },
  {
    "id": "899-wyrdeer",
    "dex": 899,
    "name": "Wyrdeer",
    "types": [
      "Normal",
      "Psychic"
    ],
    "atk": 206,
    "def": 145,
    "sta": 230
  },
  {
    "id": "900-kleavor",
    "dex": 900,
    "name": "Kleavor",
    "types": [
      "Bug",
      "Rock"
    ],
    "atk": 253,
    "def": 174,
    "sta": 172
  },
  {
    "id": "901-ursaluna",
    "dex": 901,
    "name": "Ursaluna",
    "types": [
      "Ground",
      "Normal"
    ],
    "atk": 243,
    "def": 181,
    "sta": 277
  },
  {
    "id": "903-sneasler",
    "dex": 903,
    "name": "Sneasler",
    "types": [
      "Fighting",
      "Poison"
    ],
    "atk": 259,
    "def": 158,
    "sta": 190
  },
  {
    "id": "904-overqwil",
    "dex": 904,
    "name": "Overqwil",
    "types": [
      "Dark",
      "Poison"
    ],
    "atk": 222,
    "def": 171,
    "sta": 198
  },
  {
    "id": "905-enamorus",
    "dex": 905,
    "name": "Enamorus",
    "types": [
      "Fairy",
      "Flying"
    ],
    "atk": 281,
    "def": 162,
    "sta": 179
  },
  {
    "id": "905-therian",
    "dex": 905,
    "name": "Enamorus",
    "form": "Therian",
    "types": [
      "Fairy",
      "Flying"
    ],
    "atk": 250,
    "def": 201,
    "sta": 179
  },
  {
    "id": "906-sprigatito",
    "dex": 906,
    "name": "Sprigatito",
    "types": [
      "Grass"
    ],
    "atk": 116,
    "def": 99,
    "sta": 120
  },
  {
    "id": "907-floragato",
    "dex": 907,
    "name": "Floragato",
    "types": [
      "Grass"
    ],
    "atk": 157,
    "def": 128,
    "sta": 156
  },
  {
    "id": "908-meowscarada",
    "dex": 908,
    "name": "Meowscarada",
    "types": [
      "Grass",
      "Dark"
    ],
    "atk": 233,
    "def": 153,
    "sta": 183
  },
  {
    "id": "909-fuecoco",
    "dex": 909,
    "name": "Fuecoco",
    "types": [
      "Fire"
    ],
    "atk": 112,
    "def": 96,
    "sta": 167
  },
  {
    "id": "910-crocalor",
    "dex": 910,
    "name": "Crocalor",
    "types": [
      "Fire"
    ],
    "atk": 162,
    "def": 134,
    "sta": 191
  },
  {
    "id": "911-skeledirge",
    "dex": 911,
    "name": "Skeledirge",
    "types": [
      "Fire",
      "Ghost"
    ],
    "atk": 207,
    "def": 178,
    "sta": 232
  },
  {
    "id": "912-quaxly",
    "dex": 912,
    "name": "Quaxly",
    "types": [
      "Water"
    ],
    "atk": 120,
    "def": 86,
    "sta": 146
  },
  {
    "id": "913-quaxwell",
    "dex": 913,
    "name": "Quaxwell",
    "types": [
      "Water"
    ],
    "atk": 162,
    "def": 123,
    "sta": 172
  },
  {
    "id": "914-quaquaval",
    "dex": 914,
    "name": "Quaquaval",
    "types": [
      "Water",
      "Fighting"
    ],
    "atk": 236,
    "def": 159,
    "sta": 198
  },
  {
    "id": "915-lechonk",
    "dex": 915,
    "name": "Lechonk",
    "types": [
      "Normal"
    ],
    "atk": 81,
    "def": 79,
    "sta": 144
  },
  {
    "id": "916-oinkologne",
    "dex": 916,
    "name": "Oinkologne",
    "types": [
      "Normal"
    ],
    "atk": 186,
    "def": 153,
    "sta": 242
  },
  {
    "id": "916-female",
    "dex": 916,
    "name": "Oinkologne",
    "form": "Female",
    "types": [
      "Normal"
    ],
    "atk": 169,
    "def": 162,
    "sta": 251
  },
  {
    "id": "917-tarountula",
    "dex": 917,
    "name": "Tarountula",
    "types": [
      "Bug"
    ],
    "atk": 70,
    "def": 77,
    "sta": 111
  },
  {
    "id": "918-spidops",
    "dex": 918,
    "name": "Spidops",
    "types": [
      "Bug"
    ],
    "atk": 139,
    "def": 166,
    "sta": 155
  },
  {
    "id": "919-nymble",
    "dex": 919,
    "name": "Nymble",
    "types": [
      "Bug"
    ],
    "atk": 81,
    "def": 65,
    "sta": 107
  },
  {
    "id": "920-lokix",
    "dex": 920,
    "name": "Lokix",
    "types": [
      "Bug",
      "Dark"
    ],
    "atk": 199,
    "def": 144,
    "sta": 174
  },
  {
    "id": "921-pawmi",
    "dex": 921,
    "name": "Pawmi",
    "types": [
      "Electric"
    ],
    "atk": 95,
    "def": 45,
    "sta": 128
  },
  {
    "id": "922-pawmo",
    "dex": 922,
    "name": "Pawmo",
    "types": [
      "Electric",
      "Fighting"
    ],
    "atk": 147,
    "def": 82,
    "sta": 155
  },
  {
    "id": "923-pawmot",
    "dex": 923,
    "name": "Pawmot",
    "types": [
      "Electric",
      "Fighting"
    ],
    "atk": 232,
    "def": 141,
    "sta": 172
  },
  {
    "id": "924-tandemaus",
    "dex": 924,
    "name": "Tandemaus",
    "types": [
      "Normal"
    ],
    "atk": 98,
    "def": 90,
    "sta": 137
  },
  {
    "id": "925-maushold",
    "dex": 925,
    "name": "Maushold",
    "types": [
      "Normal"
    ],
    "atk": 159,
    "def": 157,
    "sta": 179
  },
  {
    "id": "926-fidough",
    "dex": 926,
    "name": "Fidough",
    "types": [
      "Fairy"
    ],
    "atk": 102,
    "def": 126,
    "sta": 114
  },
  {
    "id": "927-dachsbun",
    "dex": 927,
    "name": "Dachsbun",
    "types": [
      "Fairy"
    ],
    "atk": 159,
    "def": 212,
    "sta": 149
  },
  {
    "id": "928-smoliv",
    "dex": 928,
    "name": "Smoliv",
    "types": [
      "Grass",
      "Normal"
    ],
    "atk": 100,
    "def": 89,
    "sta": 121
  },
  {
    "id": "929-dolliv",
    "dex": 929,
    "name": "Dolliv",
    "types": [
      "Grass",
      "Normal"
    ],
    "atk": 137,
    "def": 131,
    "sta": 141
  },
  {
    "id": "930-arboliva",
    "dex": 930,
    "name": "Arboliva",
    "types": [
      "Grass",
      "Normal"
    ],
    "atk": 219,
    "def": 189,
    "sta": 186
  },
  {
    "id": "932-nacli",
    "dex": 932,
    "name": "Nacli",
    "types": [
      "Rock"
    ],
    "atk": 95,
    "def": 108,
    "sta": 146
  },
  {
    "id": "933-naclstack",
    "dex": 933,
    "name": "Naclstack",
    "types": [
      "Rock"
    ],
    "atk": 105,
    "def": 160,
    "sta": 155
  },
  {
    "id": "934-garganacl",
    "dex": 934,
    "name": "Garganacl",
    "types": [
      "Rock"
    ],
    "atk": 171,
    "def": 212,
    "sta": 225
  },
  {
    "id": "935-charcadet",
    "dex": 935,
    "name": "Charcadet",
    "types": [
      "Fire"
    ],
    "atk": 92,
    "def": 74,
    "sta": 120
  },
  {
    "id": "936-armarouge",
    "dex": 936,
    "name": "Armarouge",
    "types": [
      "Fire",
      "Psychic"
    ],
    "atk": 234,
    "def": 185,
    "sta": 198
  },
  {
    "id": "937-ceruledge",
    "dex": 937,
    "name": "Ceruledge",
    "types": [
      "Fire",
      "Ghost"
    ],
    "atk": 239,
    "def": 189,
    "sta": 181
  },
  {
    "id": "938-tadbulb",
    "dex": 938,
    "name": "Tadbulb",
    "types": [
      "Electric"
    ],
    "atk": 104,
    "def": 73,
    "sta": 156
  },
  {
    "id": "939-bellibolt",
    "dex": 939,
    "name": "Bellibolt",
    "types": [
      "Electric"
    ],
    "atk": 184,
    "def": 165,
    "sta": 240
  },
  {
    "id": "940-wattrel",
    "dex": 940,
    "name": "Wattrel",
    "types": [
      "Electric",
      "Flying"
    ],
    "atk": 105,
    "def": 75,
    "sta": 120
  },
  {
    "id": "941-kilowattrel",
    "dex": 941,
    "name": "Kilowattrel",
    "types": [
      "Electric",
      "Flying"
    ],
    "atk": 221,
    "def": 132,
    "sta": 172
  },
  {
    "id": "944-shroodle",
    "dex": 944,
    "name": "Shroodle",
    "types": [
      "Poison",
      "Normal"
    ],
    "atk": 124,
    "def": 70,
    "sta": 120
  },
  {
    "id": "945-grafaiai",
    "dex": 945,
    "name": "Grafaiai",
    "types": [
      "Poison",
      "Normal"
    ],
    "atk": 199,
    "def": 149,
    "sta": 160
  },
  {
    "id": "948-toedscool",
    "dex": 948,
    "name": "Toedscool",
    "types": [
      "Ground",
      "Grass"
    ],
    "atk": 97,
    "def": 149,
    "sta": 120
  },
  {
    "id": "949-toedscruel",
    "dex": 949,
    "name": "Toedscruel",
    "types": [
      "Ground",
      "Grass"
    ],
    "atk": 166,
    "def": 209,
    "sta": 190
  },
  {
    "id": "950-klawf",
    "dex": 950,
    "name": "Klawf",
    "types": [
      "Rock"
    ],
    "atk": 184,
    "def": 185,
    "sta": 172
  },
  {
    "id": "957-tinkatink",
    "dex": 957,
    "name": "Tinkatink",
    "types": [
      "Fairy",
      "Steel"
    ],
    "atk": 85,
    "def": 110,
    "sta": 137
  },
  {
    "id": "958-tinkatuff",
    "dex": 958,
    "name": "Tinkatuff",
    "types": [
      "Fairy",
      "Steel"
    ],
    "atk": 109,
    "def": 145,
    "sta": 163
  },
  {
    "id": "959-tinkaton",
    "dex": 959,
    "name": "Tinkaton",
    "types": [
      "Fairy",
      "Steel"
    ],
    "atk": 155,
    "def": 196,
    "sta": 198
  },
  {
    "id": "960-wiglett",
    "dex": 960,
    "name": "Wiglett",
    "types": [
      "Water"
    ],
    "atk": 109,
    "def": 52,
    "sta": 67
  },
  {
    "id": "961-wugtrio",
    "dex": 961,
    "name": "Wugtrio",
    "types": [
      "Water"
    ],
    "atk": 205,
    "def": 136,
    "sta": 111
  },
  {
    "id": "962-bombirdier",
    "dex": 962,
    "name": "Bombirdier",
    "types": [
      "Flying",
      "Dark"
    ],
    "atk": 198,
    "def": 172,
    "sta": 172
  },
  {
    "id": "965-varoom",
    "dex": 965,
    "name": "Varoom",
    "types": [
      "Steel",
      "Poison"
    ],
    "atk": 123,
    "def": 107,
    "sta": 128
  },
  {
    "id": "966-revavroom",
    "dex": 966,
    "name": "Revavroom",
    "types": [
      "Steel",
      "Poison"
    ],
    "atk": 229,
    "def": 168,
    "sta": 190
  },
  {
    "id": "969-glimmet",
    "dex": 969,
    "name": "Glimmet",
    "types": [
      "Rock",
      "Poison"
    ],
    "atk": 187,
    "def": 104,
    "sta": 134
  },
  {
    "id": "970-glimmora",
    "dex": 970,
    "name": "Glimmora",
    "types": [
      "Rock",
      "Poison"
    ],
    "atk": 246,
    "def": 177,
    "sta": 195
  },
  {
    "id": "971-greavard",
    "dex": 971,
    "name": "Greavard",
    "types": [
      "Ghost"
    ],
    "atk": 105,
    "def": 106,
    "sta": 137
  },
  {
    "id": "972-houndstone",
    "dex": 972,
    "name": "Houndstone",
    "types": [
      "Ghost"
    ],
    "atk": 186,
    "def": 195,
    "sta": 176
  },
  {
    "id": "974-cetoddle",
    "dex": 974,
    "name": "Cetoddle",
    "types": [
      "Ice"
    ],
    "atk": 119,
    "def": 80,
    "sta": 239
  },
  {
    "id": "975-cetitan",
    "dex": 975,
    "name": "Cetitan",
    "types": [
      "Ice"
    ],
    "atk": 208,
    "def": 123,
    "sta": 347
  },
  {
    "id": "977-dondozo",
    "dex": 977,
    "name": "Dondozo",
    "types": [
      "Water"
    ],
    "atk": 176,
    "def": 178,
    "sta": 312
  },
  {
    "id": "978-tatsugiri",
    "dex": 978,
    "name": "Tatsugiri",
    "types": [
      "Dragon",
      "Water"
    ],
    "atk": 226,
    "def": 166,
    "sta": 169
  },
  {
    "id": "979-annihilape",
    "dex": 979,
    "name": "Annihilape",
    "types": [
      "Fighting",
      "Ghost"
    ],
    "atk": 220,
    "def": 178,
    "sta": 242
  },
  {
    "id": "980-clodsire",
    "dex": 980,
    "name": "Clodsire",
    "types": [
      "Poison",
      "Ground"
    ],
    "atk": 127,
    "def": 151,
    "sta": 277
  },
  {
    "id": "982-dudunsparce",
    "dex": 982,
    "name": "Dudunsparce",
    "types": [
      "Normal"
    ],
    "atk": 188,
    "def": 150,
    "sta": 268
  },
  {
    "id": "983-kingambit",
    "dex": 983,
    "name": "Kingambit",
    "types": [
      "Dark",
      "Steel"
    ],
    "atk": 238,
    "def": 203,
    "sta": 225
  },
  {
    "id": "996-frigibax",
    "dex": 996,
    "name": "Frigibax",
    "types": [
      "Dragon",
      "Ice"
    ],
    "atk": 134,
    "def": 86,
    "sta": 163
  },
  {
    "id": "997-arctibax",
    "dex": 997,
    "name": "Arctibax",
    "types": [
      "Dragon",
      "Ice"
    ],
    "atk": 173,
    "def": 128,
    "sta": 207
  },
  {
    "id": "998-baxcalibur",
    "dex": 998,
    "name": "Baxcalibur",
    "types": [
      "Dragon",
      "Ice"
    ],
    "atk": 254,
    "def": 168,
    "sta": 229
  },
  {
    "id": "999-gimmighoul",
    "dex": 999,
    "name": "Gimmighoul",
    "types": [
      "Ghost"
    ],
    "atk": 140,
    "def": 76,
    "sta": 128
  },
  {
    "id": "1000-gholdengo",
    "dex": 1000,
    "name": "Gholdengo",
    "types": [
      "Steel",
      "Ghost"
    ],
    "atk": 252,
    "def": 190,
    "sta": 202
  },
  {
    "id": "1011-dipplin",
    "dex": 1011,
    "name": "Dipplin",
    "types": [
      "Grass",
      "Dragon"
    ],
    "atk": 173,
    "def": 184,
    "sta": 190
  },
  {
    "id": "1012-poltchageist",
    "dex": 1012,
    "name": "Poltchageist",
    "types": [
      "Grass",
      "Ghost"
    ],
    "atk": 134,
    "def": 96,
    "sta": 120
  },
  {
    "id": "1013-sinistcha",
    "dex": 1013,
    "name": "Sinistcha",
    "types": [
      "Grass",
      "Ghost"
    ],
    "atk": 225,
    "def": 191,
    "sta": 174
  },
  {
    "id": "1019-hydrapple",
    "dex": 1019,
    "name": "Hydrapple",
    "types": [
      "Grass",
      "Dragon"
    ],
    "atk": 216,
    "def": 186,
    "sta": 235
  }
];
