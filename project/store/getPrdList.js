const Mock = require('mockjs');
const store = global.store;

function getPrdList(ctx) {
    const currPage = ctx.query.currPage || 1;
    const {totalPage,list,shopNum} = store;
    let resList;
    if (currPage == 1) {
        resList = list.slice(0,4);
    } else if (currPage == 2) {
        resList = list.slice(4,8);
    } else if (currPage == 3){
        resList = list.slice(8);
    }
    ctx.body = {
        currPage,
        totalPage,
        shopNum,
        recommandPrd: list[0],
        list: resList,
        code: 666,
        msg: 'success'
    }

}
module.exports = getPrdList;
