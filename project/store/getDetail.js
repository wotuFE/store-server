var Mock = require('mockjs');
const store = global.store;

function getDetail(ctx) {
    const id = ctx.request.body.id || ctx.query.id;
    let res = {detail: null};
    if (!id) {
        res = {
            code: "444"
            , "resMsg": "id不能为空"
        }
    } else {
        store.list.forEach((item)=>{
            if (item.id == id) {
                res.detail = item;
                res.shopNum = store.shopNum;
                res.code = '666';
                res.resMsg = 'success';
            }
        })
    }
    var data = Mock.mock(res);
    ctx.body = data;
}
module.exports = getDetail;
