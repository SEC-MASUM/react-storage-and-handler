import React from "react";
import { add } from "../../utilities/calculate";
// import add from "../../utilities/calculate"; //default import

const Cosmetics = () => {
  const first = 14;
  const second = 45;
  const sum = add(first, second);
  return (
    <div>
      <h1>Welcome to my cosmetics store</h1>
      <p>Total Price: {sum}</p>
    </div>
  );
};

export default Cosmetics;
