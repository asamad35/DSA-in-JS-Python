import { useState, useRef, useEffect } from "react";

export default function App() {
  const [list, setList] = useState(Array.from({ length: 20 }, (_, idx) => idx));
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries[0].isIntersecting);
      console.log("loading", loading);
      if (entries[0].isIntersecting && !loading) {
        setLoading(true);
        setTimeout(() => {
          // fake API delay
          setList((prev) => [
            ...prev,
            ...Array.from({ length: 20 }, (_, i) => prev.length + i),
          ]);
          setLoading(false);
        }, 800);
      }
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [list]);
  return (
    <div>
      {list.map((_, idx) => {
        if (idx === list.length - 1)
          return (
            <div key={idx} ref={ref}>
              {idx + 1}
            </div>
          );
        else return <div key={idx}>{idx + 1}</div>;
      })}
      {loading && <div>Loading...</div>}
    </div>
  );
}
