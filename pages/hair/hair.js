// pages/hair/hair.js
//获取应用实例
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    hairListMen: [{
      name: '成熟稳重',
      description: '描述',
      url: 'img/male1.jpg'
    }, {
      name: '持久有型',
      description: '描述xx',
      url: 'img/male2.jpg'
    }, {
      name: '朝气蓬勃',
      description: '描述aa',
      url: 'img/male3.jpg'
    }],
    hairListWomen: [{
      name: '成熟稳重',
      description: '描述',
      url: 'img/female1.jpg'
    }, {
      name: '持久有型',
      description: '描述xx',
      url: 'img/female2.png'
    }, {
      name: '朝气蓬勃',
      description: '描述aa',
      url: 'img/female3.jpg'
    }],
    hairListChild: [{
      name: '正常',
      description: '描述',
      url: 'img/child1.jpeg'
    }, {
      name: '炫酷',
      description: '描述xx',
      url: 'img/child2.jpg'
    }],
    hairListAll: []
  },
  bindOrderTap: function (e) {
    this.setData({
      active: parseInt(e.target.dataset.index, 10)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { hairListMen, hairListWomen, hairListChild } = this.data
    const hairListAll = hairListMen.concat(hairListWomen).concat(hairListChild)
    console.log(hairListAll)
    this.setData({
      hairListAll
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})