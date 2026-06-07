import { useEffect, useState } from 'react';

export default function VHSOverlay() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      setTime(`2026:06:07  ${hh}:${mm}:${ss}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Scanlines */}
      <div
        className="fixed inset-0 pointer-events-none z-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(0,0,0,0.09) 3px, rgba(0,0,0,0.09) 4px)',
        }}
      />

      {/* Subtle vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-20"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.45) 100%)',
        }}
      />

      {/* REC indicator */}
      <div className="fixed top-5 right-5 z-30 pointer-events-none flex items-center gap-2">
        <span
          className="text-xs tracking-[0.25em] font-mono"
          style={{ color: 'rgba(233,30,99,0.55)', fontFamily: 'monospace' }}
        >
          REC
        </span>
        <span className="vhs-rec-dot" />
      </div>

      {/* Timestamp bottom-left */}
      <div
        className="fixed bottom-5 left-5 z-30 pointer-events-none font-mono text-xs tracking-widest"
        style={{ color: 'rgba(255,255,255,0.12)', fontFamily: 'monospace' }}
      >
        {time}
      </div>
    </>
  );
}
