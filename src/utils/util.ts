import {jwtDecode} from "jwt-decode";
import { NavigateFunction } from "react-router";

import { eventBus } from "../contexts/context/eventBus";

type StorageKey = "token" | "role" ;

export const setStorageItem = (key: StorageKey, value: string) => {
  localStorage.setItem(key, value);
};

export const getStorageItem = (key: StorageKey): string | null => {
  return localStorage.getItem(key);
};

export const removeStorageItem = (key: StorageKey) => {
  localStorage.removeItem(key);
};
export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded: { exp: number } = jwtDecode(token);
    return decoded.exp * 1000 < Date.now();
  } catch {
    return true;
  }
};
export const decodeToken = <T = Record<string, string>>(token: string): T | null => {
  try {
    return jwtDecode<T>(token);
  } catch {
    return null;
  }
};

export const validateTokenExpiry = (navigate: NavigateFunction) => {
  const token = getStorageItem("token");

  if (token && isTokenExpired(token)) {
    removeStorageItem("token");
    removeStorageItem("role");
    eventBus.emit({
      type: "warning",
      message: "Session expired. Please log in again.",
    });
    navigate("/login");
  }
};


