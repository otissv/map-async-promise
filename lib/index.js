'use strict';

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function mapPromise(fn) {
  return function (arr) {
    var contents = arr.map(function (element, index) {
      return new Promise(function (resolve) {
        fn(resolve, element, index, arr);
      });
    });

    return Promise.all(contents).then(function (result) {
      return [].concat(toConsumableArray(new Set(result)));
    });
  };
}

module.exports = mapPromise;