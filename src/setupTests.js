// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

window.matchMedia = () => ({
  addListener: () => {},
  removeListener: () => {},
});

beforeEach(() => {
  const localStorageMock = function localStorageMock() {
    let store = {};
    return {
      getItem(key) {
        return store[key];
      },
      setItem(key, value) {
        store[key] = value.toString();
      },
      clear() {
        store = {};
      },
      removeItem(key) {
        delete store[key];
      },
    };
  };

  Object.defineProperty(window, 'localStorage', { value: localStorageMock() });
});
