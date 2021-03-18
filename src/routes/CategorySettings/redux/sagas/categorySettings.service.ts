export function fetchCategoryService(): Promise<string []> {
  return new Promise((resolve, reject) => {
    resolve(['food', 'car', 'jeep']);
  });
}