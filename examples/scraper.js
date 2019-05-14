const { scrapeHomepage } = require("../src/ibood");
const lang = require("../src/languages");

// This will scrape the ibood homepage and return today's deals in an array
scrapeHomepage(lang.BE).then(items => {
    console.log(items);
}).catch(err => console.log(err));
