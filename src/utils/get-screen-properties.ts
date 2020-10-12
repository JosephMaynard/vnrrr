export const getScreenProperties = (): {
  screenWidth: number;
  screenHeight: number;
  cssBreakpoint: string;
} => {
  let cssBreakpoint =
    window.getComputedStyle(document.body, ':before').content || 'not set';
  // Trim quotation marks on browser that include them (i.e. Chrome)
  if (
    cssBreakpoint.substring(0, 1) === '"' &&
    cssBreakpoint.substring(cssBreakpoint.length - 1) === '"'
  ) {
    cssBreakpoint = cssBreakpoint.substring(1, cssBreakpoint.length - 1);
  }
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  return {
    screenWidth,
    screenHeight,
    cssBreakpoint,
  };
};
