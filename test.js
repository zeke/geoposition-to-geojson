const test = require('tape')
const objectify = require('.')

const fakeGeoPosition = {
  timestamp: "123",
  coords: {
    accuracy: 26,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 38.792024999999995,
    longitude: -104.8483681,
    speed: null
  }
}

const expected = {
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-104.8483681, 38.792024999999995]
  },
  properties: {
    timestamp: "123",
    accuracy: 26,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null
  }
}

const result = objectify(fakeGeoPosition)

test('objectify', function (t) {
  t.deepEqual(result, expected)
  t.end()
})
