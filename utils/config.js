/* 配置使用豆瓣API */

const booksAPI  = "https://api.douban.com/v2/book/";
const moviesAPI = "https://api.douban.com/v2/movie/";
const movieAPI  = "https://api.douban.com/v2/movie/subject/";
const searchAPI = "https://api.douban.com/v2/movie/search";
const actorAPI  = "https://api.douban.com/v2/movie/celebrity/";     // 影人信息


const topMovieNums     = 12;    // 电影推荐栏显示的电影数
const showingMovieNums = 12;    // 正在热映栏显示的电影数
const comingMovieNums  = 12;    // 即将上映栏显示的电影数


module.exports = {
    // Books数据请求接口
    getBookById : booksAPI,
    getBookList : booksAPI + "series/typeId/books",
    searchBook  : booksAPI + "search",

    // Movies数据请求接口
    topMovieNums     : topMovieNums,
    comingMovieNums  : comingMovieNums,
    showingMovieNums : showingMovieNums,
    movieUrl       : movieAPI,
    actorUrl       : actorAPI,
    top250Url      : moviesAPI + "top250",           // 电影推荐
    inThreaterUrl  : moviesAPI + "in_theaters",
    commingSoonUrl : moviesAPI + "coming_soon",

    // Movies搜索接口
    searchUrl : searchAPI + '?q=',
}
