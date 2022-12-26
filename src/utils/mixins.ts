export const setDimensions = (width: number | string, height?: number | string) => {
  if(height) {
    return {
      width,
      height,
    }
  }

  return {
    width: width,
    height: width,
  }
};
