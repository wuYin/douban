// 搜索电影

var requests = require("../../utils/util.js");

Page({

    data: {
        results: [],
        clearFlag: false,
        inputValues: "",    // 用于手动清空输入
    },

    // 实时处理搜索请求
    inputSearch: function(event) {
        var that = this;
        var movies = [];
        var values = event.detail.value;    // 获取用户输入
        if (values.length > 0) {
            that.setData({ clearFlag: true});     // 有输入时显示清除选项
            requests.getSearchResults(values,
                function(res) {   
                    // console.log(res.data.subjects)
                    var subjets = res.data.subjects;
                    subjets.forEach(function(item) {
                        var tmpData = {
                            id     : item.id,
                            title  : item.title,
                            images : item.images,
                            score  : item.rating.average,
                            year   : item.year,
                            types  : item.genres
                        }
                        movies.push(tmpData);
                    });
                    that.setData({      // 设置搜索到的数据整体
                        results : movies
                    });
                    console.log(that.data.results)
                }
            ) // requests         
        }
    },

    // 获取电影详细信息
    getMovieInfo: function(event) {
        // console.log(event.currentTarget.dataset.id)
        var movieId = event.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../movieInfo/info?movieId='+ movieId
        })
    },

    // 清除搜索框
    clearInput: function(event) {
        this.setData({
            results: "",
            inputValues: "",
            clearFlag: false,
        })
        console.log(this.data.inputValues)
    },

    // 取消搜索
    backInput: function() {
        wx.navigateBack();
    }
})