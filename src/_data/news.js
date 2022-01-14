const API_KEY = "ae34a4b3475c4ad185afad31cdc4a4cf";
const baseURL = `https://newsapi.org/v2/top-headlines?country=ro&apiKey=${API_KEY}`;
const Cache = require("@11ty/eleventy-cache-assets");
const categorii = ["politic", "sport", "covid", "international", "tech"];
// import eleventy cache

// module.exports = async() =>{
//     const result = await axios.get(baseURL);

//     const titluri = result.data.articles;
//     console.log( titluri )
//     return titluri;
// }
module.exports = async () => {
  try {
    // Grabs either the fresh remote data or cached data (will always be fresh live)
    const results = await Cache(baseURL, {
      duration: "1d", // 1 day
      type: "json",
    });
    let tagSet = new Set();
    for (item of results.articles) {
      let random = categorii[Math.floor(Math.random() * categorii.length)];
      item.tags = `${random}`;
      tagSet.add(random);
    }
    let final = [];
    tagSet = Array.from(tagSet);
    final[0] = tagSet;
    console.log(results);
    console.log(final);
    //results.articles.map((item) => console.log(item.source));
    return [results.articles, final];
  } catch (ex) {
    console.log(ex);

    // If failed, return back an empty array
    return [];
  }
};
