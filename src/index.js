

export default function mapPromise (fn) {
  return function (arr) {
    let contents = arr.map((element, index) => {
      return new Promise((resolve) => {
        fn(resolve, element, index, arr);
      });
    });

    return Promise.all(contents).then(result => [...new Set(result)]);
  };
}
