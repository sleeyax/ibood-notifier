const { scrapeHomepage } = require("../src/ibood");
const DiscordNotification = require("../src/notifications/discord-notification");
const lang = require("../src/languages");

// Scrape ibood's homepage and notify you of its contents
scrapeHomepage(lang.BE).then(items => {
    // Replace "id" and "token" with your webhook id and token
    const notification = new DiscordNotification("id", "token");
    return notification.send(items);
}).then(suc => console.log("success", suc)).catch(err => console.error("error", err));
