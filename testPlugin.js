export default {
    install(app) {
      app.config.globalProperties.$multiply = (a, b) => a * b;
  
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
  