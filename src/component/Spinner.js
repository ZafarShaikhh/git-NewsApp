import React, { memo } from "react";
import loading from "./loading.gif";
const Spinner = memo(() => {
  return (
    <div>
      <img src={loading} alt="loading" />
    </div>
  );
});

export default Spinner;
