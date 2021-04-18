import React from 'react';
import {Box, Grid} from "grommet";
import InfiniteScroll from 'react-infinite-scroll-component';
import {useDispatch, useSelector} from "react-redux";
import {CardComponent} from "../component/Card";
const style = {
  border: "1px solid green",
};
export const HomePage = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.pokemon.pokemonList);
  return (
    <Grid
      areas={[
        {name: 'sideL', start: [0, 0], end: [0, 0]},
        {name: 'main', start: [1, 0], end: [1, 0]},
        {name: 'sideR', start: [2, 0], end: [2, 0]},
      ]}
      columns={['flex', 'large', 'flex']}
      rows={['medium', 'small']}
      gap='small'
    >
      <Box gridArea='sideL' background=''/>
      <Box gridArea='main' background='brand'>
          <InfiniteScroll
            dataLength={pokemonList.length}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            {pokemonList.map((item, index) => (
              <CardComponent data={item}>
              </CardComponent>
            ))}
          </InfiniteScroll>
      </Box>
      <Box gridArea='sideR' background=''/>
    </Grid>
  )
};
