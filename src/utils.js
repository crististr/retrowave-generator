export const rand = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
export const randFloat = (min, max) => min + Math.random() * (max - min);

export const sample = arr => (arr.length > 0 ? arr[rand(0, arr.length - 1)] : undefined);
