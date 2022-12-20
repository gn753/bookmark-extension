import { useState, useRef, useEffect } from "react";

export default function useOutsideClick(inColor: string, outColor: string) {
  const [isActive, setIsActive] = useState("transparent");

  const ref = useRef<HTMLDivElement>(null);

  const handleInSideClick = () => {
    setIsActive(inColor);
  };

  useEffect(() => {
    const handleOutSideClick = (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;
      if (ref.current && !ref.current.contains(target)) setIsActive(outColor);
    };
    document.addEventListener("mousedown", handleOutSideClick);

    return () => document.removeEventListener("mousedown", handleOutSideClick);
  }, [outColor]);

  return { ref, isActive, handleInSideClick };
}
