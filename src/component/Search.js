import React, { useCallback, useMemo, useRef, useState } from 'react';

import { Search } from 'grommet-icons';
import { Box, Image, Text, TextInput } from 'grommet';
import {useDispatch, useSelector} from "react-redux";
import {searchPokemon} from "../store/reducer/pokemon";

export const SearchSuggestions = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.pokemon.searchList)
  const [value, setValue] = useState('');
  const [suggestionOpen, setSuggestionOpen] = useState(false);
  const [suggestedFolks, setSuggestedFolks] = useState([]);
  const boxRef = useRef();

  const onChange = (event) => {
    const { value: newValue } = event.target;
    setValue(newValue);
    if (!newValue.trim()) {
      dispatch({type:"CLEAR_SEARCH_LIST"});
    } else {
      dispatch(searchPokemon(newValue));
    }
  };

  const onSuggestionSelect = useCallback(
    event => setValue(event.suggestion.value),
    [],
  );

  const onSuggestionsOpen = useCallback(() => setSuggestionOpen(true), []);
  const onSuggestionsClose = useCallback(() => setSuggestionOpen(false), []);

  const suggestions = useMemo(
    () =>
      pokemonList
        .filter(
          ({ name }) => name.toLowerCase().indexOf(value.toLowerCase()) >= 0,
        )
        .map(({ name, picture }, index, list) => ({
          label: (
            <Box
              direction="row"
              align="center"
              gap="small"
              border={index < list.length - 1 ? 'bottom' : undefined}
              pad="small"
            >
              <Image
                width="48px"
                src={picture}
                style={{ borderRadius: '100%' }}
              />
              <Text>
                <strong>{name}</strong>
              </Text>
            </Box>
          ),
          value: name,
        })),
    [pokemonList, value],
  );

  return (
      <Box background="" fill align="center">
        <Box
          ref={boxRef}
          width="30%"
          direction="row"
          align="center"
          margin="xsmall"
          pad={{ horizontal: 'small', vertical: 'xsmall' }}
          round="xsmall"
          elevation={suggestionOpen ? 'medium' : undefined}
          border={{
            side: 'all',
            color: suggestionOpen ? 'transparent' : 'border',
          }}
          style={
            suggestionOpen
              ? {
                borderBottomLeftRadius: '0px',
                borderBottomRightRadius: '0px',
              }
              : undefined
          }
        >
          <Search color="" />
          <TextInput
            dropTarget={boxRef.current}
            placeholder="Enter name or ID"
            plain
            suggestions={suggestions}
            value={value}
            onChange={onChange}
            onSuggestionsOpen={onSuggestionsOpen}
            onSuggestionsClose={onSuggestionsClose}
            onSuggestionSelect={onSuggestionSelect}
          />
        </Box>
      </Box>
  );
};
