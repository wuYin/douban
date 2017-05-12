
/* 处理分数显示 */

var starData = {
    star : [
        {
            src : '../../images/stars/0.png',
            name : '0分' 
        },
        {
            src : '../../images/stars/0.5.png',
            name : '0.5分' 
        },
        {
            src : '../../images/stars/1.png',
            name : '1分' 
        },
        {
            src: '../../images/stars/1.5.png',
            name: '1.5分' 
        },
        {
            src : '../../images/stars/2.png',
            name : '2分' 
        },
        {
            src: '../../images/stars/2.5.png',
            name: '2.5分' 
        },
        {
            src : '../../images/stars/3.png',
            name : '3分' 
        },
        {
            src: '../../images/stars/3.5.png',
            name: '3.5分' 
        },
        {
            src : '../../images/stars/4.png',
            name : '4分' 
        },
        {
            src : '../../images/stars/4.5.png',
            name: '4.5分' 
        },
        {
            src : '../../images/stars/5.png',
            name : '5分' 
        }
    ]
}


// 传入评分处理后转换为星级路径
function getStar(score) {
    // console.log(score)
    return starData.star[Math.floor(score)].src;
}


module.exports = {
    starData: starData,
    getStar: getStar
}