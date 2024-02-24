import React, { useState, useEffect } from "react";

const TrendsHistory = () => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    return () => {};
  }, [state]);
  return (
  <div>
    {trendsHistory}
    </div>);
};
