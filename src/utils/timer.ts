const formattingTime = (time: number) => {
  return time.toString().padStart(2, '0');
};
export const buildTimeStr = (time: number) => {
  const hours = formattingTime(Math.floor(time / 60 / 60));
  const minutes = formattingTime(Math.floor((time / 60) % 60));
  const seconds = formattingTime(Math.floor(time % 60));
  return `${hours}:${minutes}:${seconds}`;
};
export const getTime = (initialTime: number) => Math.floor((Date.now() - initialTime) / 1000);
