export function sizeExtractor (value:string) {
  const string = value;
  const fragment = string.split(' ');
  const firstNumberWithPx = fragment[0];

  const firstNumberWithoutPx = firstNumberWithPx.replace('px', '');

  return Number(firstNumberWithoutPx);
}
