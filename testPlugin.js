function addData(array, data) {
    array.push(data);
}

export default {
    install(app) {
        app.config.globalProperties.$addSidebarItem = (siderBarArray, route, name, icon) => addData(siderBarArray, { route, name, icon });
    },
};
