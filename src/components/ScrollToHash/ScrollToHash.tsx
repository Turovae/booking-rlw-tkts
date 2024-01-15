import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const location = useLocation();

  const getHashElement = () => {
    const hash = location.hash;

    if (!hash) {
      return null;
    }

    const anchor = hash.slice(1);

    return document.getElementById(anchor) || null;
  }

  useEffect(() => {
    const hashElement = getHashElement();

    if (hashElement) {
      setTimeout(() => {
        hashElement.scrollIntoView({
          behavior: 'smooth',
        });
      }, 200);
    }
  });

  return null;
}

export default ScrollToHash;
