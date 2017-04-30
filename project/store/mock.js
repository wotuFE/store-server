const Mock = require('mockjs');
function mock(ctx) {
    var data = Mock.mock({
        num: Mock.Random.boolean(),
        integer: Mock.Random.integer(2,10),
        string: Mock.Random.string(5),
        date: Mock.Random.date('yyyy-MM-dd'),
        now: Mock.Random.now('yyyy-MM-dd'),
        image: Mock.Random.image('200x100', '#fb0a2a'),
        word: Mock.Random.word(2,5),
        // 汉字
        cword: Mock.Random.cword(2,5),
        ctitle: Mock.Random.ctitle(2,5),
        // 随机中文名
        cname: Mock.Random.cname(),
        // 随机生成一个县名,所属市和省可选
        county: Mock.Random.county(true),
        // 自增长
        increment: Mock.Random.increment(1),
    })
    ctx.body = data;
}
module.exports = mock;

// 1,随机数
// 2,随机日期
// 3,随机字符串或中文
// 4,随机英文名和中文名
// 5,随机日期
// 6,随机选取数组中的成员
// 7,转换大小写
