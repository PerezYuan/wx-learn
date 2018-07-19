//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    active: 0
  },
  bindOrderTap: function (e) {
    this.setData({
      active: parseInt(e.target.dataset.index, 10)
    })
  },
  onLoad() {
    util.auth(app);
  }
})
