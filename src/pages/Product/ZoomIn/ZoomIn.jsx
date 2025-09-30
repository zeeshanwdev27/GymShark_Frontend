import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function ZoomIn({ src, alt, className = "" }) {
  const containerRef = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseMove = (e) => {
    if (!isZoomed) return; 
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPos({ x, y });
  };

  const handleClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'} overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          transformOrigin: `${pos.x}% ${pos.y}%`, // zoom center follows mouse
        }}
        animate={{ scale: isZoomed ? 2 : 1 }} // zoom factor controlled by state
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

export default ZoomIn;