//index.js
//获取应用实例
var app = getApp();
var requests = require("../../utils/util.js");
var starUtils = require("../../utils/star.js");
Page({
    data: {
        typeId: 100
    },

    onLoad: function () {
        var that = this;
        // 加载时拉取数据
        requests.getBookList(this.data.typeId, "",
            // 请求数据成功时回调
            function (res) {
                console.log(res);
                if (res.count == 0) {
                    return;
                }
                var books = res.data.books;

                // 根据评分将对应的星级图片路径传递到模板
                for (var i = 0; i < books.length; i++) {
                    var book = books[i];
                    var score = book.rating.average;       // 获取到评分数据
                    book.starSrc = starUtils.getStar(parseFloat(score));
                }

                that.setData({
                    bookList: books
                })
            }
        )
    },

    // 处理刷新数据 
    refreshData: function() {
        var that = this;
        var random = Math.random();
        var randomId = Math.ceil(random * 1000).toString();
        console.log(randomId)
        this.setData({
            typeId: randomId
        })

        wx.showToast({
            title: '数据拉取中',
            icon: 'loading'
        })

        requests.getBookList(that.data.typeId, '',
            function(res) {
                if(res.count == 0) {
                    return ;
                }
                var books = res.data.books;
                // 根据评分将对应的星级图片路径传递到模板
                for (var i = 0; i < books.length; i++) {
                    var book = books[i];
                    var score = book.rating.average;       // 获取到评分数据
                    book.starSrc = starUtils.getStar(parseFloat(score));
                }

                that.setData({
                    bookList: books
                })
            }

        )
    }
})
