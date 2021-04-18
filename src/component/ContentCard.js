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
import {ModalComponent} from "./Modal";

export const CardComponent = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const data = props.data;
  return (<Box pad="medium" gap="medium" height="large" width="full" key={data.id}>
      <ModalComponent show={modalShow} onHide={() => setModalShow(false)} pokemon={data} key={data.key}></ModalComponent>
      <Card background="light-1" round="small" elevation="large">
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
        <CardBody background="#ffffff" onClick={() =>setModalShow(true)}>
          <Box pad="small">
            <Image src={data.picture} width="50%" alignSelf="center"/>
          </Box>

        </CardBody>
        <CardFooter background="light-2" pad="small">
          <Box pad="xsmall" margin={{horizontal:"small"}}>
            <strong>Pokédex data</strong>
            <p>National №: {data.id}</p>
            <p>Species: {data.species.name}</p>
            <p>Type: <Box pad="xsmall" direction="row" gap="small"><Badge types={data.types}/></Box></p>
          </Box>
        </CardFooter>
      </Card>
    </Box>
  );
}
