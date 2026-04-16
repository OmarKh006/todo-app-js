export const saveToDB = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
