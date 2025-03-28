import { useState, useEffect } from "react";

const useScreenSize = (breakpoint: number = 768) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    window.innerWidth < breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isSmallScreen;
};

export default useScreenSize;
