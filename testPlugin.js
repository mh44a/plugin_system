const generateRandomString = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export default {
    install(app) {
        app.config.globalProperties.$multiply = (a, b) => a * b;
        app.config.globalProperties.$generateRandomString = (length) => {
            return generateRandomString(length);
        }

        app.config.globalProperties.$pluginSendRequest = async (data) => {
            try {
                const response = await app.config.globalProperties.$sendAPIRequest(
                    'https://httpbin.org/post',
                    data
                );
                console.log("API response:", response);
                return response;
            } catch (error) {
                console.error("API request failed in plugin:", error);
            }
        };
    },
};
