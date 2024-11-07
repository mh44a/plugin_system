export default {
    install(app) {
        const componentUrls = [
            'https://raw.githubusercontent.com/mh44a/plugin_system/refs/heads/main/test.vue',
        ];

        app.config.globalProperties.$components = componentUrls;
        app.config.globalProperties.$addSidebarItem = (siderBarArray, route, name, icon) => siderBarArray.push({ route, name, icon });
    }
};
