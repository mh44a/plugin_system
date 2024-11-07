/*import { defineAsyncComponent } from 'vue';

async function loadExternalComponent(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to load component.');
        const componentContent = await response.text();
        return new Function('return ' + componentContent)();
    } catch (error) {
        console.error('Error loading component:', error);
        return null;
    }
}*/


function addData(array, data) {
    array.push(data);
}

export default {
    install(app) {
        const componentUrls = [
            'https://raw.githubusercontent.com/mh44a/plugin_system/refs/heads/main/test.vue',
        ];

        componentUrls.forEach(async (url, index) => {
            const componentName = `DynamicComponent${index + 1}`;
            console.log(componentName);
            
            /*const DynamicComponent = defineAsyncComponent(async () => {
                const component = await loadExternalComponent(url);
                if (!component) throw new Error('Component could not be loaded.');
                return component;
            });

            app.component(componentName, DynamicComponent);*/
        });

        app.config.globalProperties.$addSidebarItem = (siderBarArray, route, name, icon) => siderBarArray.push({ route, name, icon });
    }
};
