
// 搜索图书

var requests = require("../../utils/util.js");

Page({

    data: {
        results: [],
        clearFlag: false,
        inputValues: "",    // 用于手动清空输入
    },

    // 实时处理搜索请求
    inputSearch: function (event) {
        var that = this;
        var books = [];
        var values = event.detail.value;    // 获取用户输入
        if (values.length > 0) {
            that.setData({ clearFlag: true });     // 有输入时显示清除选项
            
            requests.getSearchBooks(values,
                function (res) {
                    // console.log(res.data)
                    var subjets = res.data.books;
                    subjets.forEach(function (item) {
                        var tmpData = {
                            id: item.id,
                            title: item.title,
                            images: item.images,
                            score: item.rating.average,
                            publisher: item.publisher,
                            pubdate: item.pubdate,
                            price: item.price,
                        }
                        books.push(tmpData);
                    });
                    that.setData({      // 设置搜索到的数据整体
                        results: books
                    });
                    // console.log(that.data.results)
                }
            ) // requests         
        }
    },

    // 获取电影详细信息
    getBookInfo: function (event) {
        // console.log(event.currentTarget.dataset.id)
        var bookId = event.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../bookInfo/info?id=' + bookId
        })
    },

    // 清除搜索框
    clearInput: function (event) {
        this.setData({
            results: "",
            inputValues: "",
            clearFlag: false,
        })
        // console.log(this.data.inputValues)
    },

    // 取消搜索
    backInput: function () {
        wx.navigateBack();
    }
})