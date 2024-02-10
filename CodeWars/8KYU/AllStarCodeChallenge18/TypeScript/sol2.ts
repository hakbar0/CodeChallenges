export function strCount(str: string, letter: string): number {
  return str.toLowerCase().split(letter.toLowerCase()).length - 1;
}
