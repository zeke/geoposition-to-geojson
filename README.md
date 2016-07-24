# geoposition-to-geojson

Turn an HTML5 Geoposition object into a [GeoJSON Point ](http://www.macwright.org/2015/03/23/geojson-second-bite.html#features).

Pairs well with [geolocation-stream](https://ghub.io/geolocation-stream) and
[mapbox.js](https://www.mapbox.com/mapbox.js/example/v1.0.0/load-geojson/).

See also [geoposition-to-object](https://github.com/zeke/geoposition-to-object).

## Installation

```sh
npm install geoposition-to-geojson --save
```

## Usage

```js
var geojsonify = require('geoposition-to-geojson')

navigator.geolocation.getCurrentPosition(function(position) {
  console.log(geojsonify(position))
})

{
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
```

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [tap-spec](https://github.com/scottcorgan/tap-spec): Formatted TAP output like Mocha&#39;s spec reporter
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers

## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
