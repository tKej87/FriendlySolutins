export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const removeWhiteSpaces = (string: string) => {
  return string.replaceAll(" ", "_");
};
