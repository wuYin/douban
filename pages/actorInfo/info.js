// pages/actorInfo/info.js

var requests = require("../../utils/util.js");
var starUtils = require("../../utils/star.js");

Page({

    data: {
        info: {},
        actorId: 0,
    },

    onLoad: function(event) {
        var that = this;
        // console.log(event)
        var actorId = parseInt(event.actorId);      // 跳转传递到数据均为String
        this.setData({
            actorId: actorId
        })
        requests.getActorById(actorId,
            function(res) {
                console.log(res.data);
                var data = res.data;
                // 将最受好评的5部作品的星级图片路径存储在works中
                // var works = data.works;
                // for (var i = 0; i < 5; i++) {
                //     var score = parseFloat(works[i].subject.rating.average);
                //     var starSrc = starUtils.getStar(score);
                //     works.push(starSrc);
                // }

                var actorData = {                   // 将豆瓣返回的数据字段更改为更直观的名字，使得wxml模板更易读
                    actorId : actorId,
                    poster  : data.avatars.large,
                    name    : data.name,
                    enName  : data.name_en,
                    born    : data.born_place,
                    moreInfo: data.mobile_url,      // 豆瓣很多接口不开放，比如个人简介和生日等，放到豆瓣移动版中查看
                    films   : data.works,
                }
                that.setData({
                    info: actorData,
                })
                // console.log(that.data.info);
            }
        )
    },

    // 点击电影海报跳转到信息页
    getMovieInfo: function (event) {
        console.log(event);
        var movieId = event.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../movieInfo/info?movieId=' + movieId
        })
    },

    // 点击查看更多个人信息   // 小程序不支持打开第三方网页
    getMoreIntro: function(event) {
        wx.navigateTo({
            url: 'https://movie.douban.com/celebrity/' + this.data.actorId
        })
    }
})