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