import React, {Fragment} from 'react';
import {HeaderResponsive} from "../component/Header";
export const Layout = (props) => (
 <Fragment>
   <HeaderResponsive></HeaderResponsive>
   <main>{props.children}</main>
 </Fragment>
);
