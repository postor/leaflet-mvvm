//leaflet初期設定
var map = L.map('mapid');
map.setView([22.56465643, 113.95349488], 10);

var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: 'Map data &copy; ' + mapLink,
    maxZoom: 18
  }
).addTo(map); 

const points = [
  [22.55197423, 113.88414369],
  [22.56465643, 113.95349488],
  [22.54785227, 114.13202271],
  [22.51994649, 114.05443177],
]

const polyline = {
  Constructor: L.polyline,
  data: [
    points,
  ],
}

const markers = points.map(p => {
  return {
    Constructor: L.marker,
    data: [
      p,
      {
        title: JSON.stringify(p),
      },
    ],
    listeners: {
      click: function () {
        alert(JSON.stringify(this.data))
      }
    }
  }
})

const overlays = {
  items: [
    polyline,
    ...markers,
  ]
}


const vm = new MapMvvm(overlays,map)