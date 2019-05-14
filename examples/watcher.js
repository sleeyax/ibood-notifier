const {watchibood} = require("../src/ibood");
const DummyNotification = require("../src/notifications/dummy-notification");
const lang = require("../src/languages");

// Watch the ibood homepage for new deals and send a notification when a new deal appears
watchibood({
    notification: new DummyNotification(), // notification object
    language: lang.BE, // your language
    interval: 5, // check the homepage every x SECONDS
    keywords: ['pc', 'smartphone', 'tablet', 'wenger', 'bluetooth'] // filter deals by keyword
});
