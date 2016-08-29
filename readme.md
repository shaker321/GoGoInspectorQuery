# GoGoInspectorQuery

A lightweight DOM manipulation library that supports event handling and AJAX requests.

## How to Use
To get started, download this repository to your local machine or run the following command:

```
git clone https://github.com/shaker321/GoGoInspectorQuery.git
```

Change directories to that of GoGoInpectorQuery using:

```
cd GoGoInpectorQuery
```

Run webpack to bundle the component files:

```
webpack
```

Include `gogoinspectorquery.js` in the `<head>` of your HTML document as such:

```html
<head>
  <script type="text/javascript" src="[PATH TO FILE]/lib/gogoinspectorquery.js"></script>
</head>
```

Enjoy the ease at which you can manipulate the DOM (plus the fact that you now have an excuse to yell "Go Go Gadget" while coding)!

## Core Functionality

GoGoInspectorQuery's heart and soul lies in its core function - $goGo. $goGo accepts a single argument, be it an HTML element, a CSS selector, or a function.

If passed an HTML element, GoGoInspectorQuery will wrap the element in a GoGoInspectorQuery object:
```javascript
  let $newElement = $goGo("<ul></ul>");
  ```

If passed a CSS selector, GoGoInspectorQuery will return an array of HTML elements in the document that match:
```javascript
  let $listItems = $goGo("li");
  ```

If passed a function, GoGoInspectorQuery will invoke the function once the DOM is fully loaded:
```javascript
   $goGo(() => {console.log("Hello World!")});
  ```

## GoGoInspectorQuery Public API

### addClass(args)
Add a class to DOM element(s):
```javascript
  let $goGoElement = $goGo("<div></div>");

  $goGoElement.addClass(className); // => "<div class='className'></div>"
```

### append(args)
Add child elements to DOM element(s):
```javascript
  let $goGoElement = $goGo("<div className='Parent'></div>");

  $goGoElement.append("<div className='child'></div>"); // => "<div className='Parent'> <div className='child'></div> </div>"
```

### attr(arg)/attr(args)
Get attribute of DOM element:
```javascript
  let $goGoElement = $goGo("<input type='password'></input>");

  $goGoElement.attr("password"); // => "text"
```

Set attribute of DOM element(s):
```javascript
  let $goGoElement = $goGo("<input></input>");

  $goGoElement.attr("type", "text"); // => "<input type='text'></input>"
```

### children()
Get children of DOM element(s):
```javascript
  $goGoElement.children();
```

### empty()
Clear innerHTML of DOM element(s):
```javascript
  let $goGoElement = $goGo("<div> <div>innerHTML</div> </div>");

  $goGoElement.empty(); // => "<div></div>"
```

### find(arg)
Find DOM elements by selector:
```javascript
  $goGoElement.find("li"); // => "<li>Some list item</li>"
```

### html()/html(arg)
Get innerHTML of DOM element:
```javascript
  let $goGoElement = $goGo("<div> <div>innerHTML</div> </div>");

  $goGoElement.html(); // => "<div>innerHTML</div>"
```

Set innerHTML of DOM element(s):
```javascript
  let $goGoElement = $goGo("<div></div>");

  $goGoElement.html("<div> Go Go Gadget innerHTML!!! </div>"); // => "<div><div> Go Go Gadget innerHTML!!! </div></div>"
```

### off(eventName, callback)
Remove event listener from DOM element(s):
```javascript
  $goGoElement.off("click", () => { console.log("Go Go Gadget Click!") });
```

### on(eventName, callback)
Add event listener to DOM element(s):
```javascript
  $goGoElement.on("click", () => { console.log("Go Go Gadget Click!") });
```

### parent(arg)
Get parent of DOM element(s):
```javascript
  let $goGoOuterElement = $goGo("<li> <div>I'm an element!</div> </li>")
  let $goGoElement = $goGo("<div>I'm an element!</div>");

  $goGoElement.parent(); // => "<li></li>"
```

### remove()
Remove DOM element(s):
```javascript
  $goGoElement.remove();
```

### removeClass(arg)
Remove class from DOM element(s):
```javascript
  let $goGoElement = $goGo("<div class='random-div'></div>");

  $goGoElement.removeClass("random-div"); // => "<div></div>"
```

## AJAX
GoGoInspectorQuery's ajax method uses the XMLHttpRequest API to send and receive data from a server:
```javascript
   $goGo.ajax({
     url: "api.openweathermap.org/data/2.5/weather?zip=10001,us",
     method: "GET",
     success: (data) => { console.log(data); },
     error: (data) => { console.log("An error occurred."); }
   });
```

```javascript
   $goGo.ajax({
     url: "/gadgets",
     method: "POST",
     data: formData,
     dataType: "json",
     content-type: 'application/json',
     success: (data) => { console.log("Go Go Gadget!"); },
     error: (data) => { console.log("No No Gadget!"); }
   });
```
