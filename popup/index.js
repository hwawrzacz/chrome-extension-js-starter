import { DomManipulator } from './dom-manipulator.js'

// You can easily use other files to extend popup behavior.
const domManipulator = new DomManipulator()

chrome.runtime.onMessage.addListener(message => console.log('[Popup Script] Message received', message))

initialize();

function initialize() {
  // Add listeners that requires popup's DOM elements to be present, e.g. button
  document.addEventListener('DOMContentLoaded', () => addListeners())
}

function addListeners() {
  addSubmitButtonClickListener()
}

function addSubmitButtonClickListener() {
  const submitButtonSelector = domManipulator.getSubmitButton()
  submitButtonSelector.addEventListener('click', () => sendMessageToServiceWorker('button-click'))
}

/**
 * Sends message to service worker
 * @param message {string}
 */
function sendMessageToServiceWorker(message) {
  chrome.runtime.sendMessage(message)
  console.log(`[Extension Popup] Message sent: '${message}'`)
}
