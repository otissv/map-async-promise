# map-async-promise

Allows mapping of an async function over an array and returns a promise once all items in the array have resolved.

With no dependencies.


## Usage
```
const readFiles = (resolve, element, index, arr) => {
  fs.readFile(element, 'utf8', function (err, data) {
    if (err) return console.log(err);
    resolve(data);
  });
};


forEachPromise(readFiles)(['some/path/to/file', 'another/path/to/file'])
  .then(results => {
    console.log(results);
  })
  .catch(err => echo(err));
```


## Installation
```npm install map-async-promise```
