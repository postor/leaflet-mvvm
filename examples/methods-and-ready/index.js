// 百度地图API功能
var map = new BMap.Map("allmap");  // 创建Map实例
map.centerAndZoom(new BMap.Point(116.404, 39.915), 5);  // 初始化地图,设置中心点坐标和地图级别
//添加地图类型控件
map.addControl(new BMap.MapTypeControl({
  mapTypes:[
    BMAP_NORMAL_MAP,
    BMAP_HYBRID_MAP
  ]
}));	  
map.enableScrollWheelZoom(true);   //开启鼠标滚轮缩放

// 百度地图API功能
var map = new BMap.Map("allmap");  // 创建Map实例
map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);  // 初始化地图,设置中心点坐标和地图级别
//添加地图类型控件
map.addControl(new BMap.MapTypeControl({
  mapTypes:[
    BMAP_NORMAL_MAP,
    BMAP_HYBRID_MAP
  ]
}));	  
map.enableScrollWheelZoom(true);   //开启鼠标滚轮缩放

const points = [
  new BMap.Point(116.399, 39.910),
  new BMap.Point(116.405, 39.920),
  new BMap.Point(116.423493, 39.907445),
]

const items = [
  {
    Constructor: BMap.Polyline,
    data: [
      points, 
      {
        strokeColor:"blue", 
        strokeWeight:2, 
        strokeOpacity:0.5
      },
    ],   
  },
  ...(points.map((point)=>{
    return {
      Constructor: BMap.Marker,
      data: [point],
      init: function(){
        this.$ref.setLabel(new BMap.Label(`坐标:${this.point.lng},${this.point.lat}`,{offset:new BMap.Size(20,-10)}))
      },
      point,
      listeners: {
        click: function(){
          alert(`坐标:${this.point.lng},${this.point.lat}`)
        }
      },
    }
  }))
]

const vm = new MapMvvm({
  items,
}, map)