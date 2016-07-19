# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

I used document.getElementByClassName(). It takes one argument (a class name) and returns an array of the objects assigned to the given class.
---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

I used a for loop to change the display for each element of the class "hide_me" to "none"