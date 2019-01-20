import React from "react";
import injectSheet from "react-jss";
import iLogo from './logo.svg'
const App = ({ classes }) => {
  return (
    <div>
      <h1 className={classes.h1}>Happy Birthday</h1>
    </div>
  );
};

const styles = {
  h1: {
    overflow: 'hidden',
    height: 0,
    paddingTop: '56.25%',
    background: `url(${iLogo})`,
  }
}
export default injectSheet(styles)(App);
