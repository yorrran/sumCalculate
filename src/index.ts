import { IRomanNumeral } from "./romanMapping";

const RomanMap = new Map();
export const romanToArabic = (str: string) => {
  let res = 0;
  Object.entries(IRomanNumeral).map(([key, value]) => {
    RomanMap.set(key, value);
  });
  for (let i = 0; i < str.length; i++) {
    const curr = RomanMap.get(str.charAt(i));
    if (i + 1 < str.length) {
      const next = RomanMap.get(str.charAt(i + 1));
      if (curr < next) {
        res += next - curr;
        i++;
      } else {
        res += curr;
      }
    } else {
      res += curr;
    }
  }
  return res;
};

module.exports = {
  romanToArabic
};
