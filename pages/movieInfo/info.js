// pages/movieInfo/info.js

var requests = require("../../utils/util.js");
var starUtils = require("../../utils/star.js");

Page({
    data: {
        showAllFlag: false,
        info: {}
    },

    onLoad: function (data) {
        var that = this;
        var movieId = data.movieId;     // 获取被点击跳转过来的电影ID
        wx.showToast({
            title: '电影信息加载中',
            icon: 'loading',
            duration: 3000
        })

        // 发起请求获取数据
        requests.getMovieById(movieId,
            function (res) {     // 数据获取成功
                var data = res.data;
                // console.log(res.data)
                var score   = parseFloat(data.rating.average);
                var starSrc = starUtils.getStar(score);
                that.setData({
                    info: {
                        poster   : data.images.large,   // 基本信息
                        title    : data.title,
                        summary  : data.summary,
                        pubYear  : data.year,
                        countries: data.countries,
                        tags     : data.genres,   
                        score    : score,               // 评分
                        starSrc  : starSrc,
                        counts   : data.ratings_count,
                        directors: data.directors,      // 影人信息
                        actors   : data.casts,
                    }
                })
                console.log(that.data.info)
            } // successFunc
        );  
    },

    showAllIntro: function() {      // 展开全部简介
        this.setData({
            showAllFlag: true
        })
    }
})