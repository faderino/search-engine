const formatSearchQuery = (search) => {
  return search.split(" ").join("+");
};

export default formatSearchQuery;
