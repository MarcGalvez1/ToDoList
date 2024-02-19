export function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function loadFromLocalStorage(key) {
  const data = localStorage.getItem(key);

  if (data) {
    try {
      // Try to parse the data as JSON
      return JSON.parse(data);
    } catch (error) {
      // If parsing fails, return the data as is (assuming it's an object)
      return data;
    }
  } else {
    return null;
  }
}
