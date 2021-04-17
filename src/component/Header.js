import React from 'react';

import { Avatar, Box, Menu, Image, Grid} from 'grommet';
import {Logout} from 'grommet-icons';
import {SearchSuggestions} from "./Search";
export const HeaderResponsive = () => (
    <Grid
      rows={['xxsmall']}
      columns={['full']}
      areas={[
        { name: 'header', start: [0, 0], end: [1, 0] },
      ]}
    >
      <Box gridArea="header"
           background="#ffffff"
           align="center"
           direction="row"
           alignContent="start"
           justify="start"
           width="full"
           border={{
             side: "bottom",
             size: "small",
             style: "solid",
             color:  "#dbdbdb",
           }}
           pad={{bottom: "xxsmall"}}
      >
        <Box height="xsmall" width="xsmall" >
          <Image fit="contain" size="small" src="https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png">
          </Image>
        </Box>
        <SearchSuggestions></SearchSuggestions>
        <Box justify="end">
          <Menu
            size="small"
            icon={<Avatar size="small" src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"/>}
            a11yTitle="Navigation Menu"
            dropProps={{align: {top: 'bottom', right: 'right'}}}
            items={[
              {
                label: <Box pad="small" justify="center" align="center" direction="row" gap="small">
                  <Logout/> Log Out
                </Box>,
              },
            ]}
          />
        </Box>
      </Box>
    </Grid>
);

