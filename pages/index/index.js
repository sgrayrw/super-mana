Page({
  data: {
    frontImgUrl: ""
  },

  onLoad: function () {
    wx.cloud.init()
    wx.cloud.downloadFile({
      fileID: "cloud://super-mana-ry0lq.7375-super-mana-ry0lq-1300079175/front-img/mana.png",
      success: res => {
        this.setData({ frontImgUrl: res.tempFilePath })
      }
    })
  },

  click: function() {
    const imgId = getRandomInt(56)
    wx.cloud.downloadFile({
      fileID: "cloud://super-mana-ry0lq.7375-super-mana-ry0lq-1300079175/front-img/img" + imgId + ".JPG",
      success: res => {
        this.setData({ frontImgUrl: res.tempFilePath })
      }
    })
  }
})

// randint between [0, max)
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}