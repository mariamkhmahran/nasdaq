export const Capitalize = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.substring(1);
};
