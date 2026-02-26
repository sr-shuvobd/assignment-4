1.Difference between getElementById, getElementsByClassName, querySelector and querySelectorAll:

getElementById selects one element using its id. Since id is unique, it returns only one element.

getElementsByClassName selects elements using class name and can return multiple elements.

querySelector selects the first element that matches a CSS selector.

querySelectorAll selects all elements that match a CSS selector.

2.How to create and insert a new element into the DOM:

First, we create an element using createElement(). Then we add text or content inside it. After that, we insert it into the page using methods like append or appendChild().

3.What is Event Bubbling?

Event bubbling means when an event happens on a child element, it moves upward to its parent elements. For example, if we click a button inside a div, the event first works on the button, then the div.

4.What is Event Delegation? Why is it useful?

Event delegation means adding an event listener to a parent element instead of many child elements. Because of bubbling, the parent can handle the event. It is useful because it makes code cleaner and works for dynamic elements.

5.Difference between preventDefault() and stopPropagation():

preventDefault() stops the default behavior of an element, like stopping a form from submitting.
stopPropagation() stops the event from moving to parent elements.