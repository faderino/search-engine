export const formatDate = (date) => {
  if (typeof date === "string") {
    date = new Date(date);
  }

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("us-US", options);
};
