const list = require('./list.js');

function initStore() {
    global.store = {
        currPage: 1,
        totalPage: 3,
        "shopNum": 4,
        list: list
    }
}
module.exports = initStore;
