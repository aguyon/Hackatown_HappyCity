import React from 'react';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';

import uIcon from './assets/location.png';

function importAll(r) {
  return r.keys().map(r);
}


export default () => ({

  leafletIcon: icon => L.divIcon({
    className: 'custom-icon',
    iconAnchor: [30, 30],
    html: ReactDOMServer.renderToString(
      <img className="HappyIcon" src={icon} alt="" />,
    ),
  }),

  leafletLatLng: pos => L.latLng(pos),

  issuesIcons: importAll(require.context('../../assets/icons/issues', false, /\.(png)$/)),

  userIcon: L.icon({
    iconUrl: uIcon,
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
  }),

  meterPerPixel: (zoom) => {
    let metersPerPixelRatio = 2444; // for zoom 6
    for (let i = zoom; i > 6; i -= 1) {
      metersPerPixelRatio /= 2;
    }
    return window.innerWidth * metersPerPixelRatio;
  },
});
