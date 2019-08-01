// pages/posts/posts.js
var postsData = require("../../data/posts-data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      post_key: postsData.postList
      });
  },

  onTapto: function(e) {
    var postId= e.currentTarget.dataset.postid;
    wx.navigateTo({
      url: './posts_detail/posts_detail?id=' + postId,
    })
  }

})