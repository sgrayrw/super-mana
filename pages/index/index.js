Page({
  data: {
    frontImgUrl: "https://rayrw-cn.oss-cn-shenzhen.aliyuncs.com/miniprogram/mana.png"
  },
  click: function() {
    const imgId = getRandomInt(76)
    const imgUrl = "https://rayrw-cn.oss-cn-shenzhen.aliyuncs.com/miniprogram/img" + imgId + ".JPG"
    this.setData({frontImgUrl: imgUrl})
  }
})

// randint between [0, max)
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}