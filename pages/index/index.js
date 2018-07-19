//index.js
//获取应用实例
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    // piker相关
    index: 0,
    array: ['重庆', '杭州', '成都'],
    // swiper相关
    imgUrls: [],
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    duration: 500,
    // 门店信息
    shopList: [{
      src: 'img/shop1.jpg',
      title: '万象城店',
      location: '九龙坡区·华润万象城L500号铺',
      mode: 'scaleToFill'
    }, {
      src: 'img/shop2.jpg',
      title: '源著天街店',
      location: '渝北区·龙湖源著天街A馆B1层36号',
      mode: 'scaleToFill'
      }, {
        src: 'img/shop3.jpg',
        title: '南坪万达店',
        location: '南岸区·南坪万达广场B1层24号',
        mode: 'scaleToFill'
      }]
  },
  // 城市选择发生变化
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  onLoad: function () {
    // util.auth(app);
    // 获取banner图
    const that = this
    wx.request({
      url: 'https://api.weijianlife.com/api/banner/list', //仅为示例，并非真实的接口地址
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.code === 200) {
          const imgUrls = res.data.list.map(item => { return item.url })
          that.setData({
            imgUrls
          })
        }
      }
    })
    // 获取定位信息
    // wx.getLocation({
    //   type: 'wgs84',
    //   success: function (res) {
    //     var latitude = res.latitude
    //     var longitude = res.longitude
    //     var speed = res.speed
    //     var accuracy = res.accuracy
    //     // console.log(res)
    //   }
    // })
  }
})
