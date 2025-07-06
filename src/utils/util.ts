import {jwtDecode} from "jwt-decode";
import moment from "moment";
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
export function getTextLength(text: string): number {
  if (!text) return 0;
  return text.trim().length;
}

export function formatToLocalTime(timeString?: string): string {
  const time = timeString ? moment(timeString) : moment();
  return time.local().format("dddd, MMMM Do YYYY, h:mm A");
}
export function parseCommaSeparatedString(input: string): string[] {
  if (!input) return [];
  return input
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}
export const formatDateForInput = (dateStr?: string) => {
  return dateStr ? moment(dateStr).format("YYYY-MM-DD") : "";
};
export const extractYouTubeId = (url: string): string | null => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1);
    }

    if (parsed.hostname.includes("youtube.com")) {
      const params = parsed.searchParams.get("v");
      if (params) return params;

      const pathMatch = parsed.pathname.match(/\/(embed|shorts|v)\/([^/?]+)/);
      if (pathMatch) return pathMatch[2];
    }

    return null;
  } catch {
    return null;
  }
};


