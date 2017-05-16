
/* 配置网络请求 */

const APIURLs = require("./config.js");

// 发起请求
function requestData(url, requestArgs, successFunc, errorFunc, completeFunc) {
    wx.request({
        url: url,
        header: {"content-type":"json"},
        method: 'GET',
        data: requestArgs,
        success: successFunc,
        error: errorFunc,
        complete: completeFunc
    })
}


// 封装请求方法为Books接口
// 获取图书详细信息
function getBookById(bookId, requestArgs, successFunc, errorFunc, completeFunc) {
    requestData(APIURLs.getBookById+bookId, "",
                successFunc,
                errorFunc,
                completeFunc);
}

// 搜索图书
function searchBook(requestArgs, successFunc, errorFunc, completeFunc) {
    requestData(APIURLs.searchBook, requestArgs, 
                successFunc,
                errorFunc,
                completeFunc);
}

// 获取丛书
function getBookList(typeId, requestArgs, successFunc, errorFunc, completeFunc) {
    requestData(APIURLs.getBookList.replace('typeId', typeId), requestArgs, 
                successFunc,
                errorFunc,
                completeFunc);
}



/* 封装请求方法为Movies接口
 *
 * getMovieById()
 * getActorById()
 * getShowingMovies()
 * getComingMovies()
 * getRecommendMovies()
 * getSearchResults()
 * 
 */

// 获取电影详细信息
function getMovieById(movieId, successFunc, errorFunc, completeFunc) {
    requestData(APIURLs.movieUrl + movieId, "",
                successFunc,
                errorFunc,
                completeFunc);
}

// 获取影人详细信息
function getActorById(actorId, successFunc, errorFunc, completeFunc) {
    requestData(APIURLs.actorUrl + actorId, "",
                successFunc,
                errorFunc,
                completeFunc);
}

// 正在热映
function getShowingMovies(successFunc, errorFunc, completeFunc) {
    requestData(APIURLs.inThreaterUrl + "?start=0&&count=" + APIURLs.showingMovieNums, "",
                successFunc,
                errorFunc,
                completeFunc);
}

// 即将上映
function getComingMovies(successFunc, errorFunc, completeFunc) {
    requestData(APIURLs.commingSoonUrl + "?start=0&&count=" + APIURLs.comingMovieNums, "",
                successFunc,
                errorFunc,
                completeFunc);
}

// 电影推荐
function getRecommendMovies(successFunc, errorFunc, completeFunc) {
    requestData(APIURLs.top250Url + "?start=0&&count=" + APIURLs.topMovieNums, "",
                successFunc,
                errorFunc,
                completeFunc);
}

// 搜索电影
function getSearchResults(words, successFunc, errorFunc, completeFunc) {
    requestData(APIURLs.searchUrl + words, "",
                successFunc,
                errorFunc,
                completeFunc);
}



// 导出对外接口
module.exports = {
    getBookById : getBookById,
    searchBook  : searchBook,
    getBookList : getBookList,
    
    getMovieById       : getMovieById,
    getActorById       : getActorById,
    getShowingMovies   : getShowingMovies,
    getComingMovies    : getComingMovies,
    getRecommendMovies : getRecommendMovies,
    getSearchResults   : getSearchResults,
}
