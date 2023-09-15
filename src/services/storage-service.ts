const BASE_KEY = '@SHORTENER-';

export const StorageService = {
  getItem<T = string>(key: string) {
    const data = JSON.parse(localStorage.getItem(`${BASE_KEY}${key}`) || 'null');
    return data as T;
  },

  setItem<T>(key: string, item: string | T) {
    let parsedItem = item;

    if (typeof item != 'string') {
      parsedItem = JSON.stringify(item);
    }

    localStorage.setItem(`${BASE_KEY}${key}`, parsedItem as string);
  },

  removeItem(key: string) {
    localStorage.removeItem(`${BASE_KEY}${key}`);
  },
};
