export const setCSSVariable = (variable: string, value: string): void => {
  document.documentElement.style.setProperty(variable, value);
};
