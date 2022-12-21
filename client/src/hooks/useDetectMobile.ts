import { useEffect, useState } from "react";

const MOBILE_WIDTH = 768;

const useDetectMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth <= MOBILE_WIDTH
  );

  const handleWindowSizeChange = () => {
    const isMobileTemp = window.innerWidth <= MOBILE_WIDTH;
    if (isMobileTemp !== isMobile) {
      setIsMobile(window.innerWidth <= MOBILE_WIDTH);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isMobile;
};

export default useDetectMobile;
