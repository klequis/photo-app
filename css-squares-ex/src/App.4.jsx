import React from "react";
import injectSheet from "react-jss";
import Image from './Image'

const arr25 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 10, 21, 22, 23, 24, 25]

const arr5 = [1, 2, 3, 4, 5]

const App = ({ classes }) => {
  return (
    <div>
      <div className={classes.row}>
        {
          arr5.map((i, idx) => <Image num={idx}/>)
        }
      </div>
      <div className={classes.row}>
        <div className={classes.box}>
          <div className={classes.inner}>6</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>7</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>8</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>9</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>10</div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.box}>
          <div className={classes.inner}>11</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>12</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>13</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>14</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>15</div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.box}>
          <div className={classes.inner}>16</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>17</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>18</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>19</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>20</div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.box}>
          <div className={classes.inner}>21</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>22</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>23</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>24</div>
        </div>
        <div className={classes.box}>
          <div className={classes.inner}>25</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  row: {
    display: 'flex',
  },
  box: {
    background: 'purple',
    margin: 5,
    fontWeight: 'bold',
    color: 'white',
    flex: '1 0 auto',
    position: 'relative',
    '&::after': {
      content: "''",
      float: 'left',
      display: 'block',
      paddingTop: '100%',
    }
  },
  inner: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
export default injectSheet(styles)(App);
