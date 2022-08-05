const proxy = require("http-proxy-middleware")

module.exports = function(app){
    const baseURL = process.env.NODE_ENV === "development" ? "localhost:3000" : "pinkdotexplorers.netlify.app"

    app.use(
        proxy(`${baseURL}/v3/businesses/search`, {
            target: 'https://api.yelp.com',
            secure: false,
            changeOrigin: true
        })
    )

    app.use(
        proxy(`${baseURL}/v3/organizations/{organization_id}/events/`, {
            target: 'https://api.yelp.com',
            secure: false,
            changeOrigin: true
        })
    )
}