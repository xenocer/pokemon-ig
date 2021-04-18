import React from 'react';
import "../App.css";
import {Avatar, Box, Menu, Image, Grid} from 'grommet';
import {SearchSuggestions} from "./Search";
import {NavLink} from "react-router-dom";

export const HeaderResponsive = () => (
  <Grid
    areas={[
      {name: 'sideL', start: [0, 0], end: [0, 0]},
      {name: 'header', start: [1, 0], end: [1, 0]},
      {name: 'sideR', start: [2, 0], end: [2, 0]},
    ]}
    columns={['flex', 'large', 'flex']}
    rows={['xxsmall']}
    border={{
      side: "bottom",
      size: "small",
      style: "solid",
      color: "#dbdbdb",
    }}
    pad={{bottom:"small", top:"small"}}
  >
    <Box gridArea="header"
         background="#ffffff"
         align="center"
         direction="row"
         alignContent="around"
         height="xxsmall"
    >
      <Box direction="column">
        <NavLink to="/home">
          <Box alignContent='center' height="xsmall" width="xsmall">
            <Image fit="contain" size="xsmall" src="https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png">
            </Image>
          </Box>
        </NavLink>
      </Box>
      <Box direction="column" width="full">
        <SearchSuggestions></SearchSuggestions>
      </Box>
      <Box justify="end">
        <Menu
          size="small"
          icon={<Avatar size="small" src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"/>}
          a11yTitle="Navigation Menu"
          dropProps={{align: {top: 'bottom', right: 'right'}}}

        />
      </Box>
    </Box>
  </Grid>
);

