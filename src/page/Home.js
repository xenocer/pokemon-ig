import React from 'react';
import {Box, Grid, Spinner, Text} from "grommet";
import InfiniteScroll from 'react-infinite-scroll-component';
import {useDispatch, useSelector} from "react-redux";
import {CardComponent} from "../component/ContentCard";
import {fetchPokemonWithLimit} from "../store/reducer/pokemon";

const style = {
  border: "1px solid green",
};
export const HomePage = () => {

  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.pokemon.pokemonList);
  const pokedexNo = useSelector(state => state.pokemon.pokedexNo);
  const hasMore = useSelector(state => state.app.hasMoreData);
  const fetchData = (limit) => {
    const currentLimit = pokemonList.length;
    const fetchLimit = limit + currentLimit;
    if (currentLimit <= pokedexNo) {
      dispatch(fetchPokemonWithLimit(fetchLimit));
    } else {
      dispatch({type:"SET_HAS_MORE_DATA", payload: false})
    }
  };
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
      <Box gridArea='main' background=''>
          <InfiniteScroll
            dataLength={pokemonList.length}
            next={fetchData(20)}
            hasMore={hasMore}
            loader={
              <Box align="center" justify="center" direction="row" gap="small" pad="small" width="full">
                <Spinner size="medium"/>
                <Text>Loading...</Text>
              </Box>
            }
            scrollableTarget="scrollableDiv"
          >
            {pokemonList.map((item, index) => (
              <CardComponent data={item} key={item.id}>
              </CardComponent>
            ))}
          </InfiniteScroll>
      </Box>
      <Box gridArea='sideR' background=''/>
    </Grid>
  )
};
