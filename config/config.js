// 需要关闭服务的项目,默认全部开启
const closeProject = ['testCloproject'];
function initProject() {
    // 如果store是开启的话,配置store需要的全局变量
    if (closeProject.indexOf('store') === -1) {
        const initStore = require('../project/store/data/data.js');
        initStore();
    }
    return closeProject;
}
module.exports = initProject;
