import React, { memo, useState } from "react";

const Memp = ({onIncrement}) => {
  console.log("re-render");
  return (
    <div>
      <button onClick={onIncrement}>increment</button>
    </div>
  );
};

export default memo(Memp);
