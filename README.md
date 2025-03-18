# Chrome Extension JS Starter

Simple starter project for a Chrome Extension using JavaScript.
It includes a popup, service worker, content script, and communication between them.

## Popup

It consists of a index.html CSS file, and a JavaScript file.
# Chrome Extension JS Starter

Simple starter project for a Chrome Extension using JavaScript.
It includes a popup, service worker, content script, and communication between them.

## Extension core elements

### Popup

Popup consists of 3 main elements:
- 📄 **index.html** - popup layout,
- 📄 **index.ts** - popup script,
- 📄 **styles.css** - basic stylesheet for popup.

**Popup** is the user interface of the extension, displayed when the extension icon is clicked. I handles user interaction, collects inputs, etc.

Since the popup closes when the user clicks away, it should minimize background processing and offload tasks to the service worker if needed.

### Service worker

**Service worker** runs in the background and manages tasks that persist beyond the popup’s lifecycle. Its main responsibilities include:

- handling background events (e.g., alarms, notifications, context menus),
- managing communication between the popup and content scripts,
- processing API requests and storing data for later use,
- listening for browser events like tab updates or storage changes.

### Content script

**Content script** runs inside web pages and interacts directly with the page's DOM. It runs in isolated environment, so its properties cannot be accessed directly, e.g. from dev console.
