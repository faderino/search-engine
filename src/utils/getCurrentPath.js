export const getCurrentPath = (pathname) => {
  const arr = pathname.split("/");
  return arr[arr.length - 1];
};
