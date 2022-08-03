export function add(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
}

export function get(key) {
  const itemInStore = localStorage.getItem(key);
  return itemInStore ? JSON.parse(itemInStore) : undefined;
}

export function addIfNotExist(key, value) {
  const itemInStore = get(key);

  if (!itemInStore) {
    return add(key, value);
  }

  return itemInStore;
}
