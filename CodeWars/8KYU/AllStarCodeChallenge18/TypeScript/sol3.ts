export function strCount(str: string, letter: string): number {
  return [...str.toLowerCase()].filter((char) => char === letter.toLowerCase())
    .length;
}
