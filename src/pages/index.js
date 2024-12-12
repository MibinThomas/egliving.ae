import React, { useEffect } from "react";
import { ReactLenis } from "lenis/react";
import Home from "./Home";

export default function Index() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <ReactLenis root>
      <Home className="main" />
    </ReactLenis>
  );
}
