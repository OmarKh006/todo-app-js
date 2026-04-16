export const fetchData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : false;
  //   if (data) {
  //     return JSON.parse(data);
  //   } else {
  //     renderEmptyState();
  //     return false;
  //   }
};
