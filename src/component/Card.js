import React from 'react';
import {
  grommet,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grommet,
  Text,
  Image
} from 'grommet';
import {Badge} from "./Badge"
import * as _ from "lodash";
export const CardComponent = (props) => {
    const data = props.data;
    return (<Box pad="medium" gap="medium" height="large" width="full">
      <Card pad="small" background="#ffffff" gap="medium" round="small">
        <CardHeader>
            <Box pad="xsmall"
                 justify="start"
                 border={{
                 side: "bottom",
                 color: "#8e8e8e",
                 style:"solid"
                 }}
                 direction="row"
                 gap="small"
                 fill
                 >
               <Box
                             direction="row"
                             align="center"
                             gap="small"
                             pad="small"
                           >
                             <Image
                               width="48px"
                               src={data.picture}
                               style={{ borderRadius: '100%' }}
                             />
                             <Text>
                               <strong>{_.upperFirst(data.name)}</strong>
                             </Text>
                           </Box>
            </Box>
        </CardHeader>
        <CardBody>
            <Box>
                 <Image src={data.picture} width="50%" alignSelf="center"/>
            </Box>

        </CardBody>
        <CardFooter>
        <Box pad="xsmall">
            <strong>Pokemon Detail</strong>
            <Box direction="row" gap="small">
            <p>National №: {data.id}</p>
            <p>Name: {data.name}</p>
            </Box>
            <p>Species: {data.species.name}</p>
            <p>Type: <Box pad="xsmall"><Badge types={data.types}/></Box></p>
        </Box>
        </CardFooter>
      </Card>
    </Box>
    );
}
