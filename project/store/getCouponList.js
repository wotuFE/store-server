const Mock = require('mockjs');
const moment = require('moment');

function makeIns(ctx) {
    const { Random } = Mock;
    const data = Mock.mock({
        "code": "666",
         "resMsg": "success",
        'list':[
            {
                amount: Random.pick(['5','10','20','30','40']),
                // 从数组中随机选择
                canUse: Random.pick(['50','100','150','200']),
                // 增加日期
                date: moment()
                .add(Random.integer(0,30),'days')
                .add(Random.integer(-12,12),'month')
                 .format('YYYY-MM-DD')
            },
            {
                amount: Random.pick(['5','10','20','30','40']),
                // 从数组中随机选择
                canUse: Random.pick(['50','100','150','200']),
                // 增加日期
                date: moment()
                .add(Random.integer(0,30),'days')
                .add(Random.integer(-12,12),'month')
                 .format('YYYY-MM-DD')
            },
            {
                amount: Random.pick(['5','10','20','30','40']),
                // 从数组中随机选择
                canUse: Random.pick(['50','100','150','200']),
                // 增加日期
                date: moment()
                .add(Random.integer(0,30),'days')
                .add(Random.integer(-12,12),'month')
                 .format('YYYY-MM-DD')
            },
            {
                amount: Random.pick(['5','10','20','30','40']),
                // 从数组中随机选择
                canUse: Random.pick(['50','100','150','200']),
                // 增加日期
                date: moment()
                .add(Random.integer(0,30),'days')
                .add(Random.integer(-12,12),'month')
                 .format('YYYY-MM-DD')
            }

        ]
    })
    ctx.body = data;
}
module.exports = makeIns;
