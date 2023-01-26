import { useEffect, useState } from "react";

const MOBILE_WIDTH = 768;

const useDetectMobile = () => {
  // This variable is needed because updated isMobile state is visible inside handleWindowSizeChange function
  let isMobileVariable = false;
  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth <= MOBILE_WIDTH
  );

  const handleWindowSizeChange = () => {
    const isMobileTemp = window.innerWidth <= MOBILE_WIDTH;
    if (isMobileVariable !== isMobileTemp) {
      isMobileVariable = isMobileTemp;
      setIsMobile(isMobileTemp);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return isMobile;
};

export default useDetectMobile;
