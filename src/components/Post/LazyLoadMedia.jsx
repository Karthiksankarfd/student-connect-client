import { useState } from "react";
import { useInView } from "react-intersection-observer";



const LazyLoadMedia = ({ src }) => {
  const { ref, inView } = useInView({ triggerOnce: true }); // Only load once when it enters viewport
  const [loaded, setLoaded] = useState(false);

  return (
    <div ref={ref} className="w-full h-auto overflow-x-auto">
      {inView && (
        <>
          {src[src.length - 1] === "4" ? (
            <video
              className="object-cover aspect-auto  min-w-full max-h-96"
              controls
              onLoad={() => setLoaded(true)}
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              className={`object-cover aspect-auto transition-opacity duration-500  h-auto min-w-full max-h-96${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              src={src}
              alt=""
              loading="lazy"
              onLoad={() => setLoaded(true)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default LazyLoadMedia ;
