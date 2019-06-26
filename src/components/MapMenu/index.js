import React from 'react';
import withContext from '../Context/withContext';
import './style.css';

function MapMenu({ issuesList, selectIcon }) {
  return (
    <div className="MapMenu">
      {
        issuesList.map((issue, i) => (
          <div key={`issue-${i + 1}`}>
            {
              issue.type
            }
            <button type="button" onClick={() => selectIcon(issue)}><img src={issue.icon} alt="" /></button>
          </div>
        ))
      }
    </div>
  );
}

export default withContext(MapMenu);
