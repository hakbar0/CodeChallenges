export function strCount(str: string, letter: string): number {
  const lowerCaseStr = str.toLowerCase();
  let count = 0;

  for (const char of lowerCaseStr) {
    if (char === letter.toLowerCase()) {
      count++;
      continue;
    }
  }

  return count;
}
