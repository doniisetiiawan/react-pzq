/* eslint-disable import/prefer-default-export */
function cancellable(promise) {
  let cancelled = false;

  const promiseWrapper = new Promise((resolve, reject) => {
    promise.then(
      (value) => (
        cancelled ? reject({ cancelled: true }) : resolve(value)),
      (error) => (
        cancelled ? reject({ cancelled: true }) : reject(error)),
    );
  });

  promiseWrapper.cancel = function cancel() {
    cancelled = true;
  };

  return promiseWrapper;
}

export function users(fail) {
  return cancellable(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (fail) {
          reject(fail);
        } else {
          resolve({
            users: [
              { id: 0, name: 'First' },
              { id: 1, name: 'Second' },
              { id: 2, name: 'Third' },
            ],
          });
        }
      }, 4000);
    }),
  );
}
