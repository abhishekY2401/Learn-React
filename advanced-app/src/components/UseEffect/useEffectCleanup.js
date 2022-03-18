import { useState, useEffect } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("Called for cleanup");
    window.addEventListener("resize", checkSize);
  }, []);

  return (
    <>
      <h2>Window Size: {size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
