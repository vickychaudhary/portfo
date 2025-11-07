import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./NowPlaying.css";

const NowPlaying = ({
  label = "Now Playing",
  items = [],
  interval = 3200,
  className = "",
}) => {
  const playlist = useMemo(
    () => items.filter((item) => typeof item === "string" && item.trim().length),
    [items]
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (playlist.length <= 1) return undefined;

    const rotation = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % playlist.length);
    }, interval);

    return () => clearInterval(rotation);
  }, [interval, playlist.length]);

  useEffect(() => {
    if (currentIndex >= playlist.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, playlist.length]);

  const currentTrack = playlist[currentIndex] ?? "";

  return (
    <div className={`now-playing ${className}`.trim()}>
      <span className="now-playing__label">{label}:</span>
      <div className="now-playing__content" aria-live="polite" aria-atomic="true">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentTrack}
            className="now-playing__item"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
          >
            {currentTrack || "Loading..."}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NowPlaying;

