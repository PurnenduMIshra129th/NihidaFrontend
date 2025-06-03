export const trimText = (text: string, maxLength: number = 50): string => {
  if(!text) return "May be text not loaded or provided";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};