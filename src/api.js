const users = [
  { first: 'First 1', last: 'Last 1', age: 1 },
  { first: 'First 2', last: 'Last 2', age: 2 },
];

export function fetchUsers() {
  return new Promise((resolve) => {
    resolve(users);
  });
}

export function fetchUser(id) {
  const user = users[id];

  if (user === undefined) {
    return Promise.reject(`User ${id} not found`);
  }
  return Promise.resolve(user);
}
