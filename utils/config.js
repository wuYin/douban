/* 配置使用豆瓣API */

var apiUrl = "https://api.douban.com/v2/book/"

module.exports = {
    getBookById: apiUrl,
    getBookList: apiUrl + "series/typeId/books",
    searchBook: apiUrl + "search"
}
