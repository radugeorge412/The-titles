module.exports = (config) => {
  config.addPassthroughCopy("./src/");

  // Create an array of all tags

  // config.addCollection("articole", (collection) => {
  //   return collection.getFilteredByGlob("./src/articles/*.md");
  // });

  // config.addCollection("tagList", function (collection) {
  //   let tagSet = new Set();
  //   collection.getAll().forEach((item) => {
  //     (item.data.tags || []).forEach((tag) => tagSet.add(tag));
  //   });

  //   return [...tagSet];
  // });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
