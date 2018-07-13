//获取应用实例
const app = getApp()


Page({
  data: {
    active: 0
  },
  bindOrderTap: function (e) {
    this.setData({
      active: parseInt(e.target.dataset.index, 10)
    })
  },
})
