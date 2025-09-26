export default function healper(start, end, step = 1) {
  const result = [];
  for (let i = start; i <= end; i = i + step) {
    result.push(i);
  }
  return result;
}
