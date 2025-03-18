initialize();

function initialize() {
  chrome.runtime.onMessage.addListener(message => {
    console.log(`[Content Script] Message received: '${message}'`);
  })
  console.log(`[Content Script] Initialized`);
}
