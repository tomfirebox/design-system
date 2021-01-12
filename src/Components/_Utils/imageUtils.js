export const getImageUrl = (image, size = "thumbmd") => {
  return `https://lymphomahub.com${image.sizes[size]?.url}`;
};
