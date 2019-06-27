import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import withContext from '../Context/withContext';
import './MapMenu.css';
import IssueForm from '../IssueForm';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function MapMenu({
  issuesList, selectIcon, switchPlacingIcon, placingIcon,
}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [confirmed, setConfirmed] = React.useState(false);

  const toggleDrawer = (side, open) => (event) => {
    if (side === 'bottom' && open === false) {
      switchPlacingIcon(false);
      setConfirmed(false);
    }
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const confirmButton = (side, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setConfirmed(true);
    setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div>
      <div className="MapMenu">
        {
          !confirmed
            ? issuesList.map((issue, i) => (
              <div key={`issue-${i + 1}`}>
                {
                  issue.name
                }
                <button type="button" onClick={() => selectIcon(issue)}>
                  <img src={issue.icon} alt="" />
                </button>
              </div>
            ))
            : (
              <div
                className={classes.fullList}
                role="presentation"
              >
                <IssueForm />
              </div>
            )
        }
      </div>
    </div>
  );

  return (
    <div>
      <div>
        <Button className="HappyArrow" onClick={toggleDrawer('bottom', true)} />
        <div className="MapMenu">
          {
            placingIcon
              ? (
                <div>
                  <button className="HappyButton" type="button" onClick={confirmButton('bottom', true)}>Confirm</button>
                  <button className="HappyButton" type="button" onClick={() => switchPlacingIcon(false)}>Cancel</button>
                </div>
              )
              : issuesList.map((issue, i) => (
                <div key={`issue-${i + 1}`}>
                  <button type="button" onClick={() => selectIcon(issue)}><img src={issue.icon} alt="" /></button>
                </div>
              ))
          }
        </div>
        <SwipeableDrawer
          anchor="bottom"
          open={state.bottom}
          onClose={toggleDrawer('bottom', false)}
          onOpen={toggleDrawer('bottom', true)}
        >
          {fullList('bottom')}
        </SwipeableDrawer>
      </div>
    </div>
  );
}

export default withContext(MapMenu);
