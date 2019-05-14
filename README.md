# ibood-notifier
This script will notify you whenever a new deal appears on [ibood.com](https://wwww.ibood.com/).

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
For more possible use scenarios see the [examples]() directory.

## Screenshots
![discord notification screenshot](https://i.imgur.com/cXdoezX.png)
