# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

I used document.querySelectorAll() to find the movies I wanted to toggle. This method is different in that you can be much more selective. There are 2 unordered lists, but I only wanted to be able to toggle one of them. Had I just used li, it would have toggled both lists. I was able to specify I only wanted to toggle the li elements within the second_five class.