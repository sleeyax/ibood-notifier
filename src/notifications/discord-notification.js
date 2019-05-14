const Notification = require("./notification");
const request = require("request-promise");

class DiscordNotification extends Notification {
    constructor(id, token) {
        super();
        this.token = token;
        this.id = id;
    }

    send(items) {
        return request({
            url: `https://discordapp.com/api/webhooks/${this.id}/${this.token}`,
            method: 'POST',
            json: {
                content: "There's some interesting stuff waiting for you on ibood!",
                embeds: items.map(item => {
                    return {
                        title: item.titleLong,
                        description: item.description,
                        url: item.url,
                        image: {
                            url: item.img
                        },
                        thumbnail: {
                            url: item.img
                        },
                        fields: [
                            {
                                name: "Price",
                                value: `normally ${item.priceOld}, now ${item.priceNew}!`
                            },
                            {
                                name: "Shipping",
                                value: item.shippingCosts || '/',
                                inline: true
                            },
                            {
                                name: "Specs",
                                value: item.specListShort.join(', ')
                            }
                        ]
                    }
                })
            }
        });
    }
}

module.exports = DiscordNotification;
