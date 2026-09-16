module.exports = function (eleventyConfig) {
  // Copy these folders to the live site untouched
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");

  // Don't treat these as page templates
  eleventyConfig.ignores.add("admin/**");
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("*.jpeg/**");

  // "(747) 295-5839" -> "7472955839" for tel: links
  eleventyConfig.addFilter("telLink", (phone) => String(phone || "").replace(/[^\d+]/g, ""));

  // 1 -> "01" for product numbering
  eleventyConfig.addFilter("pad2", (n) => String(n).padStart(2, "0"));

  return {
    htmlTemplateEngine: "njk",
    dir: { input: ".", output: "_site" },
  };
};
