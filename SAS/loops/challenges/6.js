// completed ✅ //

import { log } from "console";


function toExponent(num, exponent) {
  let result = 1;
  let count = 0;
  while (count < exponent) {
    result = result * num;
    count = count + 1;
  }
  log(result)
}

toExponent(2 , 3) // 8