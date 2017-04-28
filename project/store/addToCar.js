const Mock = require('mockjs');
const store = global.store;

function addToCar(ctx) {
    const {id,num=1} = ctx.request.body || ctx.query;
    if (!id) {
        ctx.body = {code: '001',msg: 'id不存在'};
    } else {
        let {shopNum,list} = store;
        list.forEach(function (item,i) {
            if (item.id == id) {
                // 这个商品没有被添加到购物车过
                if (item.prdNum == 0) {
                    shopNum = shopNum + 1;
                    // 保存到全局
                    store.shopNum = shopNum;
                }
                store.list[i].prdNum = item.prdNum + num;
            }
        })
        ctx.body = {
            shopNum,
            code: '666',
            msg: 'success'
        };
    }
}
module.exports = addToCar;
