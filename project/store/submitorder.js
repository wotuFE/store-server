const Mock = require('mockjs');

function makeIns(ctx) {
    const idArr = ctx.request.body;
    const { list,shopNum } = global.store;
    // 将提交的商品的购买数量变为0
    list.forEach((item,i) => {
        if (idArr.indexOf(item.id)>-1) {
            list[i].prdNum = 0;
        }
    })
    const num = shopNum - idArr.length;
    store.shopNum = num>0?num:0;
    const { Random } = Mock;
    // 可以传入upper,lower和symbol
    const str1 = Random.string('number',10);
    const str2 = Random.string('lower',4);
    const data = Mock.mock({
        "code": "666"
        , "resMsg": "success"
        , orderNo: str2 + str1,
    })
    ctx.body = data;
}
module.exports = makeIns;
