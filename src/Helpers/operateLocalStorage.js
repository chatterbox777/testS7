export const operateLocalStorage = (action, key, value) => {
  switch (action) {
    case "get":
      return JSON.parse(localStorage.getItem(key));

    case "set":
      if (typeof value !== "string") {
        localStorage.setItem(key, JSON.stringify(value));
      } else {
        localStorage.setItem(key, value);
      }
      break;
    case "remove":
      localStorage.removeItem(key);
      break;
    default:
      break;
  }
};
