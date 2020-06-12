module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "static/" : "/",
    outputDir: process.env.NODE_ENV === "production" ? "dist/static" : "dist",
    indexPath: process.env.NODE_ENV === "production" ? "../index.html" : "index.html",
    css: {
        loaderOptions: {
            sass: {
                prependData: "@import \"./src/styles/_variables.scss\";",
            },
        },
    },
};