// pages/movie/movie.js

var requests = require("../../utils/util.js");
var starUtils = require("../../utils/star.js");

Page({

    data: {
        showingMovies : [],
        comingMovies  : [],
        recommendMoives : []
    },

    onLoad: function() {
        wx.showToast({
            title: '数据加载中...',
            icon: 'loading',
            duration: 2000
        })
        this.getShowingMovies();
        this.getComingMovies();
        this.getRecommendMovies();
    },

    // 点击电影海报跳转到信息页
    getMovieInfo: function(event) {
        var movieId = event.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../movieInfo/info?movieId=' + movieId
        })
    },

    // 请求热映电影数据
    getShowingMovies: function(){
        var that = this;
        var movies = [];
        requests.getShowingMovies(
            function(res) {        // 数据请求成功
                var data = res.data;
                // console.log(data.subjects)
                for (var i = 0; i < data.count; i++) {
                    var item = data.subjects[i];
                    var tempData = {
                        id     : item.id,
                        title  : item.title,
                        score  : item.rating.average,
                        starSrc: starUtils.getStar(parseFloat(item.rating.average)),
                        cover  : item.images.medium,
                        counts : item.collect_count
                    }
                    movies.push(tempData);                      
                }
                that.setData({
                    showingMovies: movies
                })
            }
        );
        // 由于wx.request不阻塞，在数据请求未完成的情况下就执行到此处，并没有设置实际的数据
        // that.setData({
        //     showingMovies : movies 
        // })
    },

    // 请求即将上映电影数据
    getComingMovies: function () {
        var that = this;
        var movies = [];
        requests.getComingMovies(
            function (res) {       
                var data = res.data;
                // console.log(data.subjects)
                for (var i = 0; i < data.count; i++) {
                    var item = data.subjects[i];
                    var tempData = {
                        id: item.id,
                        title: item.title,
                        score: item.rating.average,
                        starSrc: starUtils.getStar(parseFloat(item.rating.average)),
                        cover: item.images.medium,
                        counts: item.collect_count
                    }
                    movies.push(tempData);
                }
                that.setData({
                    comingMovies: movies
                })
                // console.log(that.data.comingMovies)
            }
        );
    },

    // 请求top250的推荐电影数据
    getRecommendMovies: function () {
        var that = this;
        var movies = [];
        requests.getRecommendMovies(
            function (res) {        
                var data = res.data;
                // console.log(data)
                for (var i = 0; i < data.count; i++) {
                    var item = data.subjects[i];
                    var tempData = {
                        id: item.id,
                        title: item.title,
                        score: item.rating.average,
                        starSrc: starUtils.getStar(parseFloat(item.rating.average)),
                        cover: item.images.medium,
                        counts: item.collect_count
                    }
                    movies.push(tempData);
                }
                that.setData({
                    recommendMoives: movies
                })
                // console.log(that.data.recommendMoives)
            }
        );
    }
})



