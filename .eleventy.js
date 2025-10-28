module.exports = function (eleventyConfig) {
    eleventyConfig.ignores.add("README.md");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/images");
    return {
        dir: {
            input: "src", // source files
            includes: "_includes",
            output: "site", // output files
        },
    };
};
