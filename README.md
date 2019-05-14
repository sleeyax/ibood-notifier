# ibood-notifier
This script will notify you whenever a new deal appears on [ibood.com](https://www.ibood.com/).

## Example
```js
const {watchibood} = require("./src/ibood");
const DummyNotification = require("./src/notifications/dummy-notification");
const language = require("./src/languages");

watchibood({
    // Notification method
    notification: new DummyNotification(),
    
    // Your language (deals will be scraped in this language)
    language: language.BE,
    
    // Check the homepage every x SECONDS
    interval: 3600,
    
    // Filter deals by keyword
    keywords: ['pc', 'smartphone', 'tablet', 'wenger', 'bluetooth'] 
});
``` 
For more possible use scenarios see the [examples](https://github.com/sleeyax/ibood-notifier/tree/master/examples) directory.

## Screenshots
![discord notification screenshot](https://i.imgur.com/cXdoezX.png)
