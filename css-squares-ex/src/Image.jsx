import React from "react"
import injectSheet from "react-jss"

const Image = ({ classes, num }) => {

  return (
    <div className={classes.box}>
      <div className={classes.inner}>{num}</div>
    </div>
  );
};

const styles = {
  box: {
    background: "purple",
    margin: 5,
    fontWeight: "bold",
    color: "white",
    flex: "1 0 auto",
    position: "relative",
    "&::after": {
      content: "''",
      float: "left",
      display: "block",
      paddingTop: "100%"
    }
  },
  inner: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}
export default injectSheet(styles)(Image)
