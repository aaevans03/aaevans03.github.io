module.exports = function (eleventyConfig) {
    eleventyConfig.ignores.add("README.md");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/images");

    // Every page uses the base layout unless its front matter says otherwise
    eleventyConfig.addGlobalData("layout", "base.njk");

    // Work entries, shown on the Work page in `order`
    eleventyConfig.addCollection("work", (collectionApi) =>
        collectionApi
            .getFilteredByGlob("src/work/*.md")
            .sort((a, b) => a.data.order - b.data.order)
    );

    // Open external Markdown links in a new tab
    eleventyConfig.amendLibrary("md", (md) => {
        md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
            const token = tokens[idx];
            if (/^https?:\/\//.test(token.attrGet("href"))) {
                token.attrSet("target", "_blank");
                token.attrSet("rel", "noopener noreferrer");
            }
            return self.renderToken(tokens, idx, options);
        };
    });

    return {
        dir: {
            input: "src", // source files
            includes: "_includes",
            output: "_site", // output files
        },
    };
};
