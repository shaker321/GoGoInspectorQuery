const DOMNodeCollection = require("./dom_node_collection.js");

window.$goGo = function (selector) {
  if (selector instanceof Function) {
    if ($goGo.loaded) {
      selector();
    } else {
      $goGo.callbacks.push(selector);
    }
  } else {
    let arrSelectedItems = [];

    if ((selector instanceof HTMLElement) || checker(selector)) {
      arrSelectedItems.push(selector);
    } else {
      let selectedItems = document.querySelectorAll(selector);
      arrSelectedItems = Array.from(selectedItems);
    }

    return new DOMNodeCollection(arrSelectedItems);
  }
};

function checker(selector) {
  return selector[0] === "<";
}

$goGo.extend = function(base, ...otherArgs) {
  otherArgs.forEach( (arg) =>
    { for (let prop in arg) {
      base[prop] = arg[prop];
    }
  });

  return base;
};

$goGo.ajax = function(options) {
  const request = new XMLHttpRequest();
  const defaults = {
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    method: "GET",
    url: "",
    data: {},
    success: () => {},
    error: () => {}
  };

  options = $goGo.extend(defaults, options);

  if (options.method.toUpperCase() === "GET") {
    options.url += "?" + toQueryString(options.data);
  }

  request.open(options.method, options.url, true);
  request.onload = function(e) {
    if (request.status === 200) {
      options.success(request.response);
    } else {
      options.error(request.response);
    }
  };

  request.send(JSON.stringify(options.data));
};

toQueryString = function(obj) {
  let result = "";

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result += `${prop}=${obj[prop]}&`;
    }
  }
  return result.substring(0, result.length - 1);
};

$goGo.callbacks = [];
$goGo.loaded = false;

document.addEventListener("DOMContentLoaded", function () {
  $goGo.loaded = true;
  for (let i = 0; i < $goGo.callbacks.length; i++) {
    $goGo.callbacks[i]();
  }
});
