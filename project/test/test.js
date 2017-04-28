const Mock = require('mockjs');
const store = global.store;

async function addToCar(ctx) {
    ctx.body = await ctx.render('index', {title: 'wotu-server'});
}
module.exports = addToCar;
