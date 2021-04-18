import {axiosInstance} from "../../common/axios";
import {pokedexNo, pokemonMapping} from "./Mapping/Mapping";
export const getSelectedPokemonData = async (name) => {
  await axiosInstance.get(`/pokemon/ + ${name}`).then(resp => {
    const mappingResult = pokemonMapping(resp);
    return mappingResult;
  })
}
export const getPokemonListData = async () => {
  // return axiosInstance.get(`/pokemon/list` ).then(resp => {
  //   // const mappingResult = pokemonMapping(resp);
  //   // return mappingResult;
  // })
  const mappingResult = [
    {
    "abilities": [
      {
        "ability": {
          "name": "limber",
          "url": "https://pokeapi.co/api/v2/ability/7/"
        },
        "is_hidden": false,
        "slot": 1
      },
      {
        "ability": {
          "name": "imposter",
          "url": "https://pokeapi.co/api/v2/ability/150/"
        },
        "is_hidden": true,
        "slot": 3
      }
    ],
    "base_experience": 101,
    "forms": [
      {
        "name": "ditto",
        "url": "https://pokeapi.co/api/v2/pokemon-form/132/"
      }
    ],
    "height": 3,

    "id": 132,
    "is_default": true,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/132/encounters",
    "name": "ditto",
    "order": 203,
    "past_types": [],
    "species": {
      "name": "ditto",
      "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
    },
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
      "front_shiny_female": null,
      "other": {
        "dream_world": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
          "front_female": null
        },
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
        }
      },
    },
    "stats": [
      {
        "base_stat": 48,
        "effort": 1,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "weight": 40,
    "picture": "https://img.pokemondb.net/artwork/ditto.jpg"
  },
    {
      "abilities": [
        {
          "ability": {
            "name": "overgrow",
            "url": "https://pokeapi.co/api/v2/ability/65/"
          },
          "is_hidden": false,
          "slot": 1
        },
        {
          "ability": {
            "name": "chlorophyll",
            "url": "https://pokeapi.co/api/v2/ability/34/"
          },
          "is_hidden": true,
          "slot": 3
        }
      ],
      "base_experience": 64,
      "picture": "https://img.pokemondb.net/artwork/bulbasaur.jpg",
      "forms": [
        {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
        }
      ],
      "height": 7,
      "held_items": [],
      "id": 1,
      "is_default": true,
      "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
      "name": "bulbasaur",
      "order": 1,
      "past_types": [],
      "species": {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
      },
      "stats": [
        {
          "base_stat": 45,
          "effort": 0,
          "stat": {
            "name": "hp",
            "url": "https://pokeapi.co/api/v2/stat/1/"
          }
        },
        {
          "base_stat": 49,
          "effort": 0,
          "stat": {
            "name": "attack",
            "url": "https://pokeapi.co/api/v2/stat/2/"
          }
        },
        {
          "base_stat": 49,
          "effort": 0,
          "stat": {
            "name": "defense",
            "url": "https://pokeapi.co/api/v2/stat/3/"
          }
        },
        {
          "base_stat": 65,
          "effort": 1,
          "stat": {
            "name": "special-attack",
            "url": "https://pokeapi.co/api/v2/stat/4/"
          }
        },
        {
          "base_stat": 65,
          "effort": 0,
          "stat": {
            "name": "special-defense",
            "url": "https://pokeapi.co/api/v2/stat/5/"
          }
        },
        {
          "base_stat": 45,
          "effort": 0,
          "stat": {
            "name": "speed",
            "url": "https://pokeapi.co/api/v2/stat/6/"
          }
        }
      ],
      "types": [
        {
          "slot": 1,
          "type": {
            "name": "grass",
            "url": "https://pokeapi.co/api/v2/type/12/"
          }
        },
        {
          "slot": 2,
          "type": {
            "name": "poison",
            "url": "https://pokeapi.co/api/v2/type/4/"
          }
        }
      ],
      "weight": 69
    }
  ];
  return mappingResult;
}
export const getPokemonListWithLimit = async (limit) => {
  // return axiosInstance.get(`/pokemon/list?limit=${limit}` ).then(resp => {
  //   // const mappingResult = pokemonMapping(resp);
  //   // return mappingResult;
  // })
  const mappingResult = [
    {
      "abilities": [
        {
          "ability": {
            "name": "limber",
            "url": "https://pokeapi.co/api/v2/ability/7/"
          },
          "is_hidden": false,
          "slot": 1
        },
        {
          "ability": {
            "name": "imposter",
            "url": "https://pokeapi.co/api/v2/ability/150/"
          },
          "is_hidden": true,
          "slot": 3
        }
      ],
      "base_experience": 101,
      "forms": [
        {
          "name": "ditto",
          "url": "https://pokeapi.co/api/v2/pokemon-form/132/"
        }
      ],
      "height": 3,

      "id": 132,
      "is_default": true,
      "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/132/encounters",
      "name": "ditto",
      "order": 203,
      "past_types": [],
      "species": {
        "name": "ditto",
        "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
      },
      "sprites": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
        "back_female": null,
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
        "back_shiny_female": null,
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
        "front_shiny_female": null,
        "other": {
          "dream_world": {
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
            "front_female": null
          },
          "official-artwork": {
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
          }
        },
      },
      "stats": [
        {
          "base_stat": 48,
          "effort": 1,
          "stat": {
            "name": "hp",
            "url": "https://pokeapi.co/api/v2/stat/1/"
          }
        },
        {
          "base_stat": 48,
          "effort": 0,
          "stat": {
            "name": "attack",
            "url": "https://pokeapi.co/api/v2/stat/2/"
          }
        },
        {
          "base_stat": 48,
          "effort": 0,
          "stat": {
            "name": "defense",
            "url": "https://pokeapi.co/api/v2/stat/3/"
          }
        },
        {
          "base_stat": 48,
          "effort": 0,
          "stat": {
            "name": "special-attack",
            "url": "https://pokeapi.co/api/v2/stat/4/"
          }
        },
        {
          "base_stat": 48,
          "effort": 0,
          "stat": {
            "name": "special-defense",
            "url": "https://pokeapi.co/api/v2/stat/5/"
          }
        },
        {
          "base_stat": 48,
          "effort": 0,
          "stat": {
            "name": "speed",
            "url": "https://pokeapi.co/api/v2/stat/6/"
          }
        }
      ],
      "types": [
        {
          "slot": 1,
          "type": {
            "name": "normal",
            "url": "https://pokeapi.co/api/v2/type/1/"
          }
        }
      ],
      "weight": 40,
      "picture": "https://img.pokemondb.net/artwork/ditto.jpg"
    },
    {
      "abilities": [
        {
          "ability": {
            "name": "overgrow",
            "url": "https://pokeapi.co/api/v2/ability/65/"
          },
          "is_hidden": false,
          "slot": 1
        },
        {
          "ability": {
            "name": "chlorophyll",
            "url": "https://pokeapi.co/api/v2/ability/34/"
          },
          "is_hidden": true,
          "slot": 3
        }
      ],
      "base_experience": 64,
      "picture": "https://img.pokemondb.net/artwork/bulbasaur.jpg",
      "forms": [
        {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
        }
      ],
      "height": 7,
      "held_items": [],
      "id": 1,
      "is_default": true,
      "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
      "name": "bulbasaur",
      "order": 1,
      "past_types": [],
      "species": {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
      },
      "stats": [
        {
          "base_stat": 45,
          "effort": 0,
          "stat": {
            "name": "hp",
            "url": "https://pokeapi.co/api/v2/stat/1/"
          }
        },
        {
          "base_stat": 49,
          "effort": 0,
          "stat": {
            "name": "attack",
            "url": "https://pokeapi.co/api/v2/stat/2/"
          }
        },
        {
          "base_stat": 49,
          "effort": 0,
          "stat": {
            "name": "defense",
            "url": "https://pokeapi.co/api/v2/stat/3/"
          }
        },
        {
          "base_stat": 65,
          "effort": 1,
          "stat": {
            "name": "special-attack",
            "url": "https://pokeapi.co/api/v2/stat/4/"
          }
        },
        {
          "base_stat": 65,
          "effort": 0,
          "stat": {
            "name": "special-defense",
            "url": "https://pokeapi.co/api/v2/stat/5/"
          }
        },
        {
          "base_stat": 45,
          "effort": 0,
          "stat": {
            "name": "speed",
            "url": "https://pokeapi.co/api/v2/stat/6/"
          }
        }
      ],
      "types": [
        {
          "slot": 1,
          "type": {
            "name": "grass",
            "url": "https://pokeapi.co/api/v2/type/12/"
          }
        },
        {
          "slot": 2,
          "type": {
            "name": "poison",
            "url": "https://pokeapi.co/api/v2/type/4/"
          }
        }
      ],
      "weight": 69
    }
  ];
  return mappingResult;
}
export const searchPokemonFromName = async (name) => {
  // await axiosInstance.get(`/pokemon/search?name=${name}`).then(resp => {
    // const mappingResult = pokemonMapping(resp);
  //   return mappingResult;
  // })
  const mappingResult = [{
    "abilities": [
      {
        "ability": {
          "name": "limber",
          "url": "https://pokeapi.co/api/v2/ability/7/"
        },
        "is_hidden": false,
        "slot": 1
      },
      {
        "ability": {
          "name": "imposter",
          "url": "https://pokeapi.co/api/v2/ability/150/"
        },
        "is_hidden": true,
        "slot": 3
      }
    ],
    "base_experience": 101,
    "forms": [
      {
        "name": "ditto",
        "url": "https://pokeapi.co/api/v2/pokemon-form/132/"
      }
    ],
    "height": 3,

    "id": 132,
    "is_default": true,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/132/encounters",
    "name": "ditto",
    "order": 203,
    "past_types": [],
    "species": {
      "name": "ditto",
      "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
    },
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
      "front_shiny_female": null,
      "other": {
        "dream_world": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
          "front_female": null
        },
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
        }
      },
    },
    "stats": [
      {
        "base_stat": 48,
        "effort": 1,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "weight": 40,
    "picture": "https://img.pokemondb.net/artwork/ditto.jpg"
  }];
  return mappingResult;
}
export const getPokedexNo = async () => {
  await axiosInstance.get(`/pokedex/number`).then(resp => {
  const mappingResult = pokedexNo(resp);
    return mappingResult;
  })
}
