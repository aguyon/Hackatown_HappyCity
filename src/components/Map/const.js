import L from 'leaflet';

import uIcon from './assets/location.png';

function importAll(r) {
  return r.keys().map(r);
}

// export function createMapIcon(icon) {
//   // console.log(icon)
//   const mapIcon = L.Icon({
//     iconUrl: icon,
//     iconSize: [30, 30],
//     iconAnchor: [15, 15],
//     popupAnchor: null,
//     shadowUrl: null,
//     shadowSize: null,
//     shadowAnchor: null,
//     // className: 'leaflet-div-icon',
//   });
//   return mapIcon;
// }

export default () => ({

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
