module.exports = function (eleventyConfig) {
    eleventyConfig.ignores.add("README.md");
    eleventyConfig.addPassthroughCopy("src/css");
    return {
        dir: {
            input: "src", // source files
            includes: "_includes",
            output: "_site", // output files
        },
    };
};
