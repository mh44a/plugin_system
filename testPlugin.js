export default {
    install(app) {
        app.config.globalProperties.$multiply = (a, b) => a * b;
        app.config.globalProperties.$test = "Test String";

        app.config.globalProperties.$getArray = () => {
            return ["Günili", "GoldenMES"];
        };
    }
};