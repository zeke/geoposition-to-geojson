module.exports = function (geoposition) {
  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [geoposition.coords.longitude, geoposition.coords.latitude]
    },
    properties: {
      timestamp: geoposition.timestamp,
      accuracy: geoposition.coords.accuracy,
      altitude: geoposition.coords.altitude,
      altitudeAccuracy: geoposition.coords.altitudeAccuracy,
      heading: geoposition.coords.heading,
      speed: geoposition.coords.speed
    }
  }
}
