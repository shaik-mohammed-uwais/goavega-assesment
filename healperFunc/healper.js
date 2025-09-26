export function healper(start, end, step = 1) {
  const result = [];
  for (let i = start; i <= end; i = i + step) {
    result.push(i);
  }
  return result;
}

export function checkvalid(num, start, end, field) {
  if (num < start || num > end) {
    throw new Error(
      `value of ${field} should be with in range ${start} and ${end}`
    );
  }
}
