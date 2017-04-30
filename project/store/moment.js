const Mock = require('mockjs');
const moment = require('moment');
function makeIns(ctx) {
    const { Random } = Mock;
    const data = Mock.mock({
        // 减日期
        dateSubtract: moment().subtract(7, 'days').format('YYYY-MM-DD'),
        // 增加日期
        dateAdd: moment().subtract(7, 'days').format('YYYY-MM-DD')
    })
    ctx.body = data;
}
module.exports = makeIns;
