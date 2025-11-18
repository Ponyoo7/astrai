export const generateRandomNumber = () => {
  const min = 1;
  const max = 99;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}