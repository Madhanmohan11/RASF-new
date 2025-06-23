import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [pathname, hash]);
}

export default useScrollToTop;
