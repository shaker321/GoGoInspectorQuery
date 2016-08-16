function DOMNodeCollection(arrHTMLElements) {
  this.arrHTMLElements = arrHTMLElements;
}

DOMNodeCollection.prototype.html = function (string) {
  if (string || string === "") {
    for (let i = 0; i < this.arrHTMLElements.length; i++) {
      this.arrHTMLElements[i].innerHTML = string;
    }
  } else {
    return this.arrHTMLElements[0].innerHTML;
  }
};

DOMNodeCollection.prototype.empty = function () {
  this.html("");
};

DOMNodeCollection.prototype.append = function (item) {
  if ( !(item instanceof DOMNodeCollection) ) {
    item = $goGo(item);
  }

  for (let i = 0; i < this.arrHTMLElements.length; i++) {
    for (let j = 0; j < item.arrHTMLElements.length; j++) {
      this.arrHTMLElements[i].innerHTML += (item.arrHTMLElements[j].outerHTML);
    }
  }
};

DOMNodeCollection.prototype.attr = function (key, value) {
  if (!value) {
    for (let i = 0; i < this.arrHTMLElements.length; i++) {
      if (this.arrHTMLElements[i].hasAttribute(key)) {
        return this.arrHTMLElements[i].getAttribute(key);
      }
    }
  } else {
    for (let i = 0; i < this.arrHTMLElements.length; i++) {
      this.arrHTMLElements[i].setAttribute(key, value);
    }
  }
};

DOMNodeCollection.prototype.addClass = function (className) {
  this.attr("class", className);
};

DOMNodeCollection.prototype.removeClass = function (className) {
  for (var i = 0; i < this.arrHTMLElements.length; i++) {
    this.arrHTMLElements[i].classList.remove(className);
  }
};

DOMNodeCollection.prototype.children = function () {
  let childrenArr = [];
  for (let i = 0; i < this.arrHTMLElements.length; i++) {
    childrenArr = childrenArr.concat(Array.from(this.arrHTMLElements[i].children));
  }

  return new DOMNodeCollection(childrenArr);
};

DOMNodeCollection.prototype.parent = function () {
  let parentArr = [];

  for (let i = 0; i < this.arrHTMLElements.length; i++) {
    parentArr.push(this.arrHTMLElements[i].parentNode);
  }

  return new DOMNodeCollection(parentArr);
};

DOMNodeCollection.prototype.find = function (selector) {
  let allChildren = [];

  for (let i = 0; i < this.arrHTMLElements.length; i++) {
    allChildren = allChildren.concat(this.arrHTMLElements[i].querySelectorAll(selector));
  }

  return new DOMNodeCollection(allChildren);
};

DOMNodeCollection.prototype.remove = function () {
  for (let i = 0; i < this.arrHTMLElements.length; i++) {
    this.arrHTMLElements[i].outerHTML = "";
  }

  this.arrHTMLElements = [];
};

DOMNodeCollection.prototype.on = function (event, func) {
  for (let i = 0; i < this.arrHTMLElements.length; i++) {
    this.arrHTMLElements[i].addEventListener(event, func);
  }
};

DOMNodeCollection.prototype.off = function (event, func) {
  for (let i = 0; i < this.arrHTMLElements.length; i++) {
    this.arrHTMLElements[i].removeEventListener(event, func);
  }
};

module.exports = DOMNodeCollection;
