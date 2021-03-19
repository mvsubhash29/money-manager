export function fetchCategoryService(): Promise<string[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return new Promise((resolve, reject) => {
    resolve(['food', 'car', 'jeep']);
  });
}
