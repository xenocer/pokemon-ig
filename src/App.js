import {deepMerge} from "grommet/utils";
import {grommet} from "grommet/themes";
import {Grommet} from "grommet";
import {Layout} from "./layout/Layout";
import React from "react";
import {Redirect, Route} from "react-router";
import {HomePage} from "./page/Home";

const defaultTheme = deepMerge(grommet, {
  global: {
    drop: {
      shadowSize: 'medium',
      extend: `
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          overflow: hidden;
        `,
    },
    elevation: {
      dark: {
        medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      },
      light: {
        medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      },
    },
    input: {
      weight: 400,
    },
    font: {
      family: 'apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
      size: '18px',
      height: '20px',
    },
  },
  textInput: {
    extend: () => `
      margin: 0 auto;
      &:focus {
        box-shadow: none;
        border-color: initial;
      }
    `,
    suggestions: {
      extend: () => `
        background: #fafafa;
        color: #3d3522;
        li {
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }
      `,
    },
  },
});

function App() {
  return (
    <div className="App">
      <Grommet theme={defaultTheme}>
        <Layout>
          <Route path="/" exact>
            <Redirect to="/home"/>
          </Route>
          <Route path="/home">
            <HomePage/>
          </Route>
        </Layout>
      </Grommet>

    </div>
  );
}

export default App;
