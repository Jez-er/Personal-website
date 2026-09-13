'use client';

import React, { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMove = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="cursor-glow"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
      aria-hidden="true"
    />
  );
}
