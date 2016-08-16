# GoGoInspectorQuery

A lightweight DOM manipulation library that supports event handling and AJAX requests.


## Core Functionality

GoGoInspectorQuery's heart and soul lies in its core function - $goGo. $goGo accepts a single argument, be it an HTML element, a CSS selector, or a function.

If passed an HTML element, GoGoInspectorQuery will wrap the element in a GoGoInspectorQuery object:
```javascript
  var $newElement = $goGo("<ul/>");
  ```

If passed a CSS selector, GoGoInspectorQuery will return an array of HTML elements in the document that match:
```javascript
  var $listItems = $goGo("li");
  ```

If passed a function, GoGoInspectorQuery will invoke the function once the DOM is fully loaded:
```javascript
   $goGo(function() {console.log("Hello World!")});
  ```

## GoGoInspectorQuery Public API

### addClass
Add a class to DOM element(s):
```javascript
   $someElement.addClass(className);
  ```

### append
Add child elements to DOM element(s):
```javascript
   $someElement.append(children);
  ```

### attr
Get attribute of DOM element:
```javascript
   $someElement.attr(attrName);
  ```

Set attribute of DOM element(s):
```javascript
   $someElement.attr(attrName, value);
  ```

### children
Get children of DOM element(s):
```javascript
   $someElement.children();
  ```

### empty
Clear innerHTML of DOM element(s):
```javascript
   $someElement.empty();
  ```

### find
Find DOM elements by selector:
```javascript
   $someElement.find(selector);
  ```

### html
Get innerHTML of DOM element:
```javascript
   $someElement.html();
  ```

Set innerHTML of DOM element(s):
```javascript
   $someElement.html("Go Go Gadget innerHTML!!!");
  ```

### off
Remove event listener from DOM element(s):
```javascript
   $someElement.off(eventName, callback);
  ```

### on
Add event listener to DOM element(s):
```javascript
   $someElement.on(eventName, callback);
  ```

### parent
Get parent of DOM element(s):
```javascript
   $someElement.parent();
  ```

### remove
Remove DOM element(s):
```javascript
   $someElement.remove();
  ```

### removeClass
Remove class from DOM element(s):
```javascript
   $someElement.removeClass(className);
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
