import {Box, Text} from "grommet";
import React from "react";
import * as _ from "lodash";
const TypeColorPlate = {
    normal:"#AAAA99",
    fire: "#FF4422",
    water:"#3399FF",
    electric:"#FFCC33",
    fighting:"#BB5544",
    flying: "#8899FF",
    poison: "#AA5599",
    ground: "#DDBB55",
    rock: "#BBAA66",
    bug: "#AABB22",
    ghost: "#6666BB",
    steel: "#AAAABB",
    grass: "#77CC55",
    psychic: "#FF5599",
    ice: "#66CCFF",
    dragon: "#7766EE",
    dark: "#775544",
    fairy: "#EE99EE",
    shadow: "",
    unknown:"",
}
export const Badge = (props) => {
  return  _.map(props.types, item => {
    return (
      <Box
        background={{color:TypeColorPlate[item.type.name]}}
        round="small"
        pad="small"
        align="center"
        width="xsmall"
      >
        {_.upperFirst(item.type.name)}
      </Box>
    );
  })

}
