import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import withContext from '../Context/withContext';
import './MapMenu.css';
import IssueForm from '../IssueForm';
import More from '../../assets/icons/more-green.png';
import Comments from '../Comments/Comments';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function MapMenu({
  issuesList, selectIcon, switchPlacingIcon, placingIcon, showingComments,
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

  if (showingComments) {
    toggleDrawer('bottom', true);
  }

  const fullList = side => (
    <div className="MapMenu">
      {
        !confirmed
          ? (
            <div className="Repport">
              <h1>Report a problem</h1>
              {issuesList
                .map((issue, i) => (
                  <div key={`issue-${i + 1}`} className="IssuesList">
                    <button type="button" onClick={() => selectIcon(issue)}>
                      <img src={`./assets/${issue.name}.png`} alt="" />
                    </button>
                    <p className="IssuesNames">
                      {
                        issue.name
                      }
                    </p>
                  </div>
                ))}
              <div className="IssuesList">
                <img src={More} alt="" />
                <p className="AddNew">Add a new category</p>
              </div>
            </div>
          )
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
  );

  return (
    <div className="menu_container">
      <Button className="HappyArrow" onClick={toggleDrawer('bottom', true)} />
      <div className="MapMenu">
        {
          placingIcon
            ? (
              <div className="ConfirmCancelButtons">
                <button className="PasHappyButton" type="button" onClick={() => switchPlacingIcon(false)}>Cancel</button>
                <button className="HappyButton" type="button" onClick={confirmButton('bottom', true)}>Confirm</button>
              </div>
            )
            : issuesList.map((issue, i) => (
              <div key={`issue-${i + 1}`}>
                <button type="button" onClick={() => selectIcon(issue.name)}>
                  <img
                    src={`./assets/${issue.name}.png`}
                    alt={issue.name}
                  />
                </button>
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
        {
          !showingComments
            ? fullList('bottom')
            : <Comments toggleDrawer={toggleDrawer} />
        }
      </SwipeableDrawer>
    </div>
  );
}

export default withContext(MapMenu);
