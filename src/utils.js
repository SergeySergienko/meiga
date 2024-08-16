export const getLocaleDate = (dateString) =>
  new Date(dateString).toLocaleDateString('de');

export function throttle(func, delay = 50) {
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();

    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}
