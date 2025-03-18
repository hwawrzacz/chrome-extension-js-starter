/**
 * For simple solution service worker is not necessary, but generally it can serve a purpose of
 * handling background tasks in the Chrome extension.
 * It can
 * - listen and forward messages/requests from the popup or content scripts,
 * - listen for global events, e.g. tab change,
 * - manage background tasks, e.g. network requests,
 * - manage extension state.
 */

chrome.runtime.onMessage.addListener(message => handleMessage(message));

async function handleMessage(message) {
  console.log(`[Service worker] New message received: '${message}'`);
  await sendMessageToContentScript(message);
}

async function sendMessageToContentScript(message) {
  const tab = await getCurrentTab();
  chrome.tabs.sendMessage(tab.id, message);
  console.log('[Service worker] Message sent to tab:', {tabId: tab.id, message});
}

/** @return {Promise} */
async function getCurrentTab() {
  let queryOptions = { active: true };
  let tabs = await chrome.tabs.query(queryOptions);

  return tabs[0];
}
