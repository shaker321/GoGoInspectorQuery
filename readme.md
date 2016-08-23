# GoGoInspectorQuery

A lightweight DOM manipulation library that supports event handling and AJAX requests.

## How to Use
To get started, download this repository to your local machine or run the following command:

```
https://github.com/shaker321/GoGoInspectorQuery.git
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
  <script type="text/javascript" src="[PATH TO FILE]/lib/gogoinspectorquery.js"/>
</head>
```

Enjoy the ease at which you can manipulate the DOM (plus the fact that you now have an excuse to yell "Go Go Gadget" while coding)!

## Core Functionality

GoGoInspectorQuery's heart and soul lies in its core function - $goGo. $goGo accepts a single argument, be it an HTML element, a CSS selector, or a function.

If passed an HTML element, GoGoInspectorQuery will wrap the element in a GoGoInspectorQuery object:
```javascript
  let $newElement = $goGo("<ul/>");
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

### addClass
Add a class to DOM element(s):
```javascript
   $goGoSomeElement.addClass(className);
  ```

### append
Add child elements to DOM element(s):
```javascript
   $goGoSomeElement.append(children);
  ```

### attr
Get attribute of DOM element:
```javascript
   $goGoSomeElement.attr(attrName);
  ```

Set attribute of DOM element(s):
```javascript
   $goGoSomeElement.attr(attrName, value);
  ```

### children
Get children of DOM element(s):
```javascript
   $goGoSomeElement.children();
  ```

### empty
Clear innerHTML of DOM element(s):
```javascript
   $goGoSomeElement.empty();
  ```

### find
Find DOM elements by selector:
```javascript
   $goGoSomeElement.find(selector);
  ```

### html
Get innerHTML of DOM element:
```javascript
   $goGoSomeElement.html();
  ```

Set innerHTML of DOM element(s):
```javascript
   $goGoSomeElement.html("Go Go Gadget innerHTML!!!");
  ```

### off
Remove event listener from DOM element(s):
```javascript
   $goGoSomeElement.off(eventName, callback);
  ```

### on
Add event listener to DOM element(s):
```javascript
   $goGoSomeElement.on(eventName, callback);
  ```

### parent
Get parent of DOM element(s):
```javascript
   $goGoSomeElement.parent();
  ```

### remove
Remove DOM element(s):
```javascript
   $goGoSomeElement.remove();
  ```

### removeClass
Remove class from DOM element(s):
```javascript
   $goGoSomeElement.removeClass(className);
  ```

## AJAX
GoGoInspectorQuery's ajax method uses the XMLHttpRequest API to send and receive data from a server:
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
