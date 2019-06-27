import L from 'leaflet';

import uIcon from './assets/location.png';

export default () => ({
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
