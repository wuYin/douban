/* bookinfo/info */

var requests = require("../../utils/util.js")
var star = require("../../utils/star.js")

Page({
    data: {
        id: 1146267,
        // starSrc: ""
    },

    onLoad: function(data) {    // 页面跳转时获取当前图书ID
        var that = this
        that.setData({
            id: data.id
        })
        wx.showToast({
            title: '图书信息加载中',
            icon: 'loading',
            duration: 500
        })
        
        // 请求图书信息
        requests.getBookById(this.data.id, "",
            // 数据获取成功
            function(res) {
                console.log(res.data);
                if (res.statusCode == 200) {
                    var data = res.data;
                    var score = data.rating.average;
                    data.starSrc = star.getStar(parseFloat(score));
                    
                    // 显示分数和星级
                    that.setData({
                        score: score,
                        info: res.data
                    }) 
                }
            }
        ) 
    }
})

