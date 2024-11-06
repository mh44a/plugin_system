export default {
    install(app) {
        app.config.globalProperties.$multiply = (a, b) => a * b;
        console.log("External Multiply plugin loaded");
    }
};
