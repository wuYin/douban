
/* 配置网络请求 */

var apiMethods = require("./config.js");

// 发起请求
function requestData(url, requestArgs, successFunc, errorFunc, completeFunc) {
    wx.request({
        url: url,
        method: 'GET',
        data: requestArgs,
        success: successFunc,
        error: errorFunc,
        complete: completeFunc
    })
}


// 封装请求方法为接口
// 获取图书详细信息
function getBookById(requestArgs, successFunc, errorFunc, completeFunc) {
    requestData(apiMethods.getBookById, requestArgs, successFunc, errorFunc, completeFunc);
}

// 搜索图书
function searchBook(requestArgs, successFunc, errorFunc, completeFunc) {
    requestData(apiMethods.searchBook, requestArgs, successFunc, errorFunc, completeFunc);
}

// 获取丛书
function getBookList(typeId, requestArgs, successFunc, errorFunc, completeFunc) {
    requestData(apiMethods.getBookList.replace('typeId', typeId), requestArgs, successFunc, errorFunc, completeFunc);
}

// 导出对外接口
module.exports = {
    getBookById: getBookById,
    searchBook: searchBook,
    getBookList: getBookList
}
