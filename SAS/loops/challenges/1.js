// completed ✅ //

import { log } from "console";
import rl from "./shared.js";

function table_du_multiplication() {
  let num;
  rl.question("number : ", (num) => {
    num = parseInt(num);
    for (let i = 1; i <= 10; i++) {
      log(num * i);
      rl.close();
    }
  });
}


table_du_multiplication();
