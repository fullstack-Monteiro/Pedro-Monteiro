import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const w   = window.innerWidth;
      const h   = document.documentElement.scrollHeight;

      canvas.width        = w * dpr;
      canvas.height       = h * dpr;
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      const gap  = 32;
      const cols = Math.ceil(w / gap) + 2;
      const rows = Math.ceil(h / gap) + 2;

      // Dark mode: lighter dots on dark bg; light mode: dark dots on light bg
      const baseOpacity   = isDark ? 0.18 : 0.14;
      const accentOpacity = isDark ? 0.32 : 0.26;
      const dotColor      = isDark ? '200,198,196' : '120,113,108';

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const isAccent = row % 4 === 0 && col % 4 === 0;
          ctx.beginPath();
          ctx.arc(col * gap, row * gap, isAccent ? 1.4 : 0.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${dotColor},${isAccent ? accentOpacity : baseOpacity})`;
          ctx.fill();
        }
      }
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [isDark]); // Redraw when theme changes

  // Blob colours adapt to theme
  const blob1 = isDark
    ? 'radial-gradient(ellipse at 40% 40%, rgba(96,165,250,0.12) 0%, transparent 60%)'
    : 'radial-gradient(ellipse at 40% 40%, rgba(214,210,204,0.22) 0%, transparent 60%)';

  const blob2 = isDark
    ? 'radial-gradient(ellipse at 60% 35%, rgba(96,165,250,0.09) 0%, rgba(59,130,246,0.04) 40%, transparent 65%)'
    : 'radial-gradient(ellipse at 60% 35%, rgba(96,165,250,0.10) 0%, rgba(59,130,246,0.05) 40%, transparent 65%)';

  const blob3 = isDark
    ? 'radial-gradient(ellipse at 55% 50%, rgba(80,75,70,0.30) 0%, transparent 60%)'
    : 'radial-gradient(ellipse at 55% 50%, rgba(168,162,158,0.13) 0%, transparent 60%)';

  const blob4 = isDark
    ? 'radial-gradient(ellipse at 40% 60%, rgba(59,130,246,0.08) 0%, transparent 60%)'
    : 'radial-gradient(ellipse at 40% 60%, rgba(59,130,246,0.07) 0%, transparent 60%)';

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      />

      <div aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* Blob 1 — top-left warm/blue */}
        <div style={{ position:'absolute', width:'70vw', height:'70vw', maxWidth:900, maxHeight:900, top:'-20%', left:'-15%', borderRadius:'50%', background: blob1, filter:'blur(80px)', animation:'ambientDrift1 18s ease-in-out infinite', willChange:'transform' }} />

        {/* Blob 2 — top-right blue accent */}
        <div style={{ position:'absolute', width:'45vw', height:'45vw', maxWidth:600, maxHeight:600, top:'-8%', right:'-10%', borderRadius:'50%', background: blob2, filter:'blur(72px)', animation:'ambientDrift2 22s ease-in-out infinite', willChange:'transform' }} />

        {/* Blob 3 — mid-right warm */}
        <div style={{ position:'absolute', width:'50vw', height:'50vw', maxWidth:680, maxHeight:680, top:'35%', right:'-18%', borderRadius:'50%', background: blob3, filter:'blur(90px)', animation:'ambientDrift3 26s ease-in-out infinite', willChange:'transform' }} />

        {/* Blob 4 — bottom-left blue */}
        <div style={{ position:'absolute', width:'40vw', height:'40vw', maxWidth:560, maxHeight:560, bottom:'-10%', left:'-8%', borderRadius:'50%', background: blob4, filter:'blur(80px)', animation:'ambientDrift4 30s ease-in-out infinite', willChange:'transform' }} />
      </div>

      <style>{`
        @keyframes ambientDrift1 {
          0%,100% { transform: translate(0px,  0px)  scale(1);    }
          33%      { transform: translate(18px, 22px) scale(1.04); }
          66%      { transform: translate(-10px,14px) scale(0.97); }
        }
        @keyframes ambientDrift2 {
          0%,100% { transform: translate(0px,   0px)   scale(1);    }
          40%      { transform: translate(-22px, 16px)  scale(1.06); }
          75%      { transform: translate(12px,  -10px) scale(0.96); }
        }
        @keyframes ambientDrift3 {
          0%,100% { transform: translate(0px,  0px)  scale(1);    }
          50%      { transform: translate(-16px,20px) scale(1.05); }
        }
        @keyframes ambientDrift4 {
          0%,100% { transform: translate(0px,  0px)   scale(1);    }
          45%      { transform: translate(20px,-14px)  scale(1.07); }
          80%      { transform: translate(-8px, 10px)  scale(0.95); }
        }
      `}</style>
    </>
  );
};
