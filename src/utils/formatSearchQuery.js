export const formatSearchQuery = (search) => {
  return search.split(" ").join("+");
};
