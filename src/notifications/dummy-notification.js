const Notification = require("./notification");

class DummyNotification extends Notification {
    constructor() { super(); }

    send(items) {
        console.log("Sending " + items.length + " items: " + items.map(item => item.titleLong).join(", "));
    }
}

module.exports = DummyNotification;
