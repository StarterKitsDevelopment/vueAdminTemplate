export const environment = {
    appName : process.env.VUE_APP_NAME ? process.env.VUE_APP_NAME : null,
    licenseKey : process.env.VUE_APP_LICENSE_KEY ? process.env.VUE_APP_LICENSE_KEY : null,
    restaurantName : process.env.VUE_APP_RESTAURANT_NAME ? process.env.VUE_APP_RESTAURANT_NAME : null,
    endPoint : process.env.VUE_APP_ENDPOINT ? process.env.VUE_APP_ENDPOINT : null,
    mode: process.env.VUE_APP_MODE ? process.env.VUE_APP_MODE : null
}