import { NavigateFunction } from "react-router";

let navigator: NavigateFunction;

export const setNavigator = (nav: NavigateFunction) => {
  navigator = nav;
};

export const navigateTo = (path: string) => {
  if (navigator) navigator(path);
};
export const getNavigator = (): NavigateFunction | null => {
  return navigator;
};
