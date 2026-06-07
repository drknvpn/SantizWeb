import { useState } from 'react';

interface Props {
  href: string;
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  color?: string;
  large?: boolean;
}

export default function LinkButton({ href, icon, label, sublabel, color = '#E91E63', large = false }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 w-full transition-all duration-300"
      style={{
        padding: large ? '16px 20px' : '14px 18px',
        borderRadius: 16,
        background: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(24px) saturate(140%)',
        WebkitBackdropFilter: 'blur(24px) saturate(140%)',
        border: `1px solid ${hovered ? `${color}55` : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered
          ? `0 0 32px ${color}18, inset 0 0 32px ${color}06, inset 0 1px 0 rgba(255,255,255,0.08)`
          : 'inset 0 1px 0 rgba(255,255,255,0.05)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        textDecoration: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center flex-shrink-0 transition-all duration-300"
        style={{
          width: large ? 44 : 40,
          height: large ? 44 : 40,
          borderRadius: 12,
          background: hovered ? `${color}22` : 'rgba(255,255,255,0.05)',
          color: hovered ? color : 'rgba(255,255,255,0.45)',
        }}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p
          className="font-semibold transition-colors duration-200"
          style={{
            fontSize: large ? 15 : 14,
            color: hovered ? '#fff' : 'rgba(255,255,255,0.85)',
            letterSpacing: '0.01em',
          }}
        >
          {label}
        </p>
        {sublabel && (
          <p className="text-xs mt-0.5 truncate" style={{ color: 'rgba(255,255,255,0.28)' }}>
            {sublabel}
          </p>
        )}
      </div>

      {/* Arrow */}
      <span
        className="flex-shrink-0 transition-all duration-300"
        style={{
          fontSize: 16,
          color: hovered ? color : 'rgba(255,255,255,0.15)',
          transform: hovered ? 'translateX(3px)' : 'translateX(0)',
          display: 'inline-block',
        }}
      >
        →
      </span>
    </a>
  );
}
