/**
 *  A fast string hashing function
 *  taken from from darkskyapp's string-hash https://github.com/darkskyapp/string-hash
 *  Bitwise operator and unary operator eslint setting disabled
 * @param {*} str
 * @returns number between 0 and 4294967295 (inclusive)
 */
export const stringHash = (str: string): number => {
  let hash = 5381;
  let i = str.length;

  while (i) {
    // eslint-disable-next-line
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  // eslint-disable-next-line no-bitwise
  return hash >>> 0;
};

export const stringToHashedColour = (str: string): string => {
  const colourHash = stringHash(str);
  return `hsl(${colourHash % 360}, ${53 + (colourHash % 47)}%, ${
    45 + (colourHash % 11)
  }%)`;
};
