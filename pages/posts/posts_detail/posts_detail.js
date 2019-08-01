// pages/posts/posts_detail/posts_detail.js
var postsData = require("../../../data/posts-data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var postId = options.id;
    this.data.currentId = postId;
    var postData = postsData.postList[postId];
    this.setData({
      ...postData
    });

    var postsCollected = wx.getStorageSync("postsCollected");
    if (postsCollected) {
      var postCollected = postsCollected[postId];
      if (postCollected) {
        this.setData({
          collected: postCollected
        })
      }
    } else {
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync("postsCollected", postsCollected)
    }
  },

  onTapCollection: function() {
    var postsCollected = wx.getStorageSync("postsCollected");
    var postCollected = postsCollected[this.data.currentId];
    postCollected = !postCollected;
    postsCollected[this.data.currentId] = postCollected;
    wx.setStorageSync("postsCollected", postsCollected);
    this.setData({
      collected: postCollected
    });

    wx.showToast({
      title: postCollected ? "收藏成功" : "取消成功"
    })
  },

  onTapShare: function() {
    wx.showActionSheet({
      itemList: ["分享到微信好友", "分享到朋友圈", "分享到QQ", "分享到微博"],
      itemColor: "#4682B4",
    })
  }
})