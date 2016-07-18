# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

The text is hidden again because an event listener is used, which waits for the user to click then the function that reveals more text is ran. 

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

The link no longer reveals the text. The code allows the browser's window to load the hidden html when the link is clicked. The link does not take you to a new page, it changes the current page.

---

> Describe the "contract" for `addEventListener`.

The addEventListener() method attaches an event handler (such as click) to a specified element. One element can have multiple event handlers. The event and function are required parameters, while useCapture is optional.