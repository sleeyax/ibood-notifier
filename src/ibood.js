const languages = require("./languages");
const request = require("request-promise");
const cheerio = require("cheerio");
const sleep = require("./helpers");

const url = "https://www.ibood.com/";

function scrapeHomepage(language) {
    return request.get(url + language).then(res => {
        const $ = cheerio.load(res);

        let results = [];
        $("ul.slides > li").each((i, li) => {

            // Get product specifications to array
            let specs = [];
            $(li).find(".specslist > ul > li").each((x, y) => {
               specs.push($(y).text());
            });

            results.push({
                priceNew: $(li).find(".new-price").text(),
                priceOld: $(li).find(".old-price").text(),
                shippingCosts: $(li).find(".shipping-price-container").text().trim(),
                discount: $(li).find(".discount").text(),
                url: $(li).find(".sl").attr("href"),
                imgLarge: "https://" + $(li).find("img.fluid").attr("data-large").replace("//", ""),
                imgMobile: "https://" + $(li).find("img.fluid").attr("data-mobile").replace("//", ""),
                img: "https://" + $(li).find("img.fluid").attr("src").replace("//", ""),
                titleLong: $(li).find("h2 .long").text(),
                titleShort: $(li).find("h2 .short").text(),
                descriptionShort: $(li).find(".short-desc > p").text(),
                specListShort: specs
            });
        });
        return results;
    });
}

function watchibood(options, currentItems = []) {
    const keywords = options.keywords;

    scrapeHomepage(options.language || languages.BE).then(items => {
        if (JSON.stringify(currentItems) !== JSON.stringify(items)) {
            // Send notification of all items or filter by keywords if specified
            let filteredItems = keywords != null ? items.filter(item => {
                const regex = keywords.join('|');
                return item.titleLong.toLowerCase().match(regex) || item.descriptionShort.toLowerCase().match(regex);
            }) : items;

            if (filteredItems.length > 0)
                options.notification.send(filteredItems);

            currentItems = items;
        }
        return sleep(options.interval * 1000 || 5000);
    }).then(() => {
        watchibood(options, currentItems);
    });
}

module.exports = {
    scrapeHomepage,
    watchibood
};
