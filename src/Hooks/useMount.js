import { useRef, useEffect } from "react";

export const useMount = () => {
  const isMountRef = useRef(false);

  useEffect(() => {
    isMountRef.current = true;
  }, []);

  return isMountRef.current;
};
