function addData(array, data) {
    array.push(data);
}

export default {
    install(app) {
        app.config.globalProperties.$addSidebarItem = (siderBarArray, route, name, icon) => addData(array, { route, name, icon });
    },
};
