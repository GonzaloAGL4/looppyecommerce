// Shared UI components for LOOPPY
const { useState, useEffect, useMemo, useRef } = React;

function Button({ variant = "primary", size = "md", icon, iconRight, children, onClick, className = "", style, type = "button" }) {
  const cls = `btn btn-${variant} ${size === "sm" ? "text-xs" : ""} ${className}`;
  const padding = size === "sm" ? { padding: "7px 12px", fontSize: 13 } : size === "lg" ? { padding: "13px 22px", fontSize: 15 } : {};
  return (
    <button type={type} className={cls} onClick={onClick} style={{ ...padding, ...style }}>
      {icon && <Icon name={icon} size={size === "sm" ? 14 : 16} />}
      {children}
      {iconRight && <Icon name={iconRight} size={size === "sm" ? 14 : 16} />}
    </button>
  );
}

function IconButton({ icon, onClick, variant = "ghost", title, size = 18, className = "" }) {
  return (
    <button className={`btn btn-${variant} btn-icon ${className}`} onClick={onClick} title={title}>
      <Icon name={icon} size={size} />
    </button>
  );
}

function Card({ children, className = "", style, variant = "default", onClick }) {
  return (
    <div
      className={`${variant === "soft" ? "card-2" : "card"} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function Input({ icon, ...props }) {
  if (icon) {
    return (
      <div className="input-icon">
        <span className="icon-slot"><Icon name={icon} size={16} /></span>
        <input className="input" {...props} />
      </div>
    );
  }
  return <input className="input" {...props} />;
}

function Avatar({ name, hue = 263, size = 36, src }) {
  const initials = name ? name.split(" ").map(s => s[0]).slice(0, 2).join("").toUpperCase() : "?";
  return (
    <div
      className="av"
      style={{
        width: size, height: size, fontSize: size * 0.36,
        background: `linear-gradient(135deg, hsl(${hue} 60% 55%), hsl(${(hue+30)%360} 65% 42%))`,
      }}
    >
      {initials}
    </div>
  );
}

function Badge({ children, tone = "neutral", icon, dot, className = "" }) {
  const tones = {
    neutral: { bg: "var(--surface-3)", color: "var(--text-muted)" },
    accent: { bg: "var(--accent-soft)", color: "var(--accent)" },
    success: { bg: "rgba(52,211,153,0.14)", color: "#34d399" },
    warning: { bg: "rgba(251,191,36,0.14)", color: "#fbbf24" },
    danger: { bg: "rgba(248,113,113,0.14)", color: "#f87171" },
    vip: { bg: "rgba(240,185,78,0.14)", color: "#f0b94e" },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span className={`badge ${className}`} style={{ background: t.bg, color: t.color }}>
      {dot && <span className="badge-dot" style={{ background: t.color }} />}
      {icon && <Icon name={icon} size={12} />}
      {children}
    </span>
  );
}

function TierBadge({ tier }) {
  const map = {
    nuevo: { tone: "neutral", icon: "circle", label: "Nuevo" },
    frecuente: { tone: "accent", icon: "user-check", label: "Frecuente" },
    premium: { tone: "accent", icon: "sparkle", label: "Premium" },
    vip: { tone: "vip", icon: "crown", label: "VIP" },
  };
  const m = map[tier] || map.nuevo;
  return <Badge tone={m.tone} icon={m.icon}>{m.label}</Badge>;
}

function Modal({ open, onClose, title, subtitle, children, width = 560, footer }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, animation: "fadeUp .2s ease both",
        padding: 20,
      }}
      onClick={onClose}
    >
      <div
        className="card fade-up"
        style={{ width: "100%", maxWidth: width, maxHeight: "92vh", overflow: "auto", background: "var(--surface)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 600 }}>{title}</div>
            {subtitle && <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>{subtitle}</div>}
          </div>
          <IconButton icon="x" onClick={onClose} />
        </div>
        <div style={{ padding: 24 }}>{children}</div>
        {footer && (
          <div style={{ padding: "16px 24px", borderTop: "1px solid var(--line)", display: "flex", justifyContent: "flex-end", gap: 10, background: "var(--surface-2)" }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(onClose, toast.duration || 3000);
    return () => clearTimeout(t);
  }, [toast]);
  if (!toast) return null;
  const icons = { success: "check-circle-2", info: "info", warning: "alert-triangle", error: "x-circle" };
  const colors = { success: "#34d399", info: "var(--accent)", warning: "#fbbf24", error: "#f87171" };
  return (
    <div
      className="toast"
      style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 200,
        background: "var(--surface)", border: "1px solid var(--line-strong)", borderRadius: 14,
        padding: "14px 18px", display: "flex", alignItems: "center", gap: 12, minWidth: 280,
        boxShadow: "0 20px 50px -10px rgba(0,0,0,0.5)",
      }}
    >
      <div style={{
        width: 36, height: 36, borderRadius: 10,
        background: `${colors[toast.tone] || "var(--accent)"}26`,
        display: "flex", alignItems: "center", justifyContent: "center", color: colors[toast.tone] || "var(--accent)",
      }}>
        <Icon name={icons[toast.tone] || "info"} size={18} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{toast.title}</div>
        {toast.desc && <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 1 }}>{toast.desc}</div>}
      </div>
    </div>
  );
}

// Simple SVG line chart
function LineChart({ data, height = 160, color = "var(--accent)", labels }) {
  const w = 600, h = height, p = 24;
  const max = Math.max(...data) * 1.15;
  const step = (w - p * 2) / (data.length - 1);
  const pts = data.map((v, i) => [p + i * step, h - p - (v / max) * (h - p * 2)]);
  const path = pts.map((pt, i) => `${i === 0 ? "M" : "L"} ${pt[0]} ${pt[1]}`).join(" ");
  const area = `${path} L ${pts[pts.length-1][0]} ${h - p} L ${pts[0][0]} ${h - p} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height }}>
      <defs>
        <linearGradient id="lcgrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map(t => (
        <line key={t} x1={p} x2={w - p} y1={p + (h - p * 2) * t} y2={p + (h - p * 2) * t} stroke="var(--line)" strokeDasharray="3 4" />
      ))}
      <path d={area} fill="url(#lcgrad)" />
      <path d={path} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((pt, i) => (
        <circle key={i} cx={pt[0]} cy={pt[1]} r="3.5" fill="var(--surface)" stroke={color} strokeWidth="2" />
      ))}
      {labels && labels.map((l, i) => (
        <text key={i} x={pts[i][0]} y={h - 6} textAnchor="middle" fontSize="11" fill="var(--text-dim)" fontFamily="Inter">{l}</text>
      ))}
    </svg>
  );
}

// Bar chart
function BarChart({ data, height = 160, color = "var(--accent)" }) {
  const w = 600, h = height, p = 24;
  const max = Math.max(...data.map(d => d.v)) * 1.15;
  const bw = (w - p * 2) / data.length - 8;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height }}>
      {data.map((d, i) => {
        const bh = (d.v / max) * (h - p * 2);
        const x = p + i * ((w - p * 2) / data.length) + 4;
        const y = h - p - bh;
        return (
          <g key={i}>
            <rect x={x} y={y} width={bw} height={bh} rx="6" fill={color} opacity="0.9" />
            <text x={x + bw / 2} y={h - 6} textAnchor="middle" fontSize="11" fill="var(--text-dim)" fontFamily="Inter">{d.d}</text>
            <text x={x + bw / 2} y={y - 6} textAnchor="middle" fontSize="11" fill="var(--text-muted)" fontFamily="Inter" fontWeight="600">{d.v}</text>
          </g>
        );
      })}
    </svg>
  );
}

function Donut({ data, size = 160, thickness = 22 }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const r = size / 2 - thickness / 2;
  const c = 2 * Math.PI * r;
  let acc = 0;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} style={{ width: size, height: size }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--surface-3)" strokeWidth={thickness} />
      {data.map((d, i) => {
        const len = (d.value / total) * c;
        const dasharray = `${len} ${c - len}`;
        const dashoffset = -acc;
        acc += len;
        return (
          <circle
            key={i} cx={size/2} cy={size/2} r={r} fill="none"
            stroke={d.color} strokeWidth={thickness}
            strokeDasharray={dasharray} strokeDashoffset={dashoffset}
            transform={`rotate(-90 ${size/2} ${size/2})`}
            strokeLinecap="butt"
          />
        );
      })}
      <text x={size/2} y={size/2 - 4} textAnchor="middle" fontSize="22" fontWeight="700" fill="var(--text)" fontFamily="Instrument Sans">{total}</text>
      <text x={size/2} y={size/2 + 14} textAnchor="middle" fontSize="11" fill="var(--text-dim)" fontFamily="Inter">clientes</text>
    </svg>
  );
}

// Logo mark
function Logo({ size = 28 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.32,
      background: "linear-gradient(135deg, var(--accent), var(--accent-deep))",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 6px 18px -4px var(--accent-glow), inset 0 1px 0 rgba(255,255,255,0.25)",
      flexShrink: 0,
    }}>
      <svg viewBox="0 0 24 24" width={size * 0.6} height={size * 0.6} fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 2l4 4-4 4" />
        <path d="M3 11v-1a4 4 0 014-4h14" />
        <path d="M7 22l-4-4 4-4" />
        <path d="M21 13v1a4 4 0 01-4 4H3" />
      </svg>
    </div>
  );
}

function LogoMark({ size = 28, withText = true }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <Logo size={size} />
      {withText && <span className="font-display" style={{ fontSize: size * 0.78, fontWeight: 600, letterSpacing: "-0.03em" }}>LOOPPY</span>}
    </div>
  );
}

function Confetti({ trigger }) {
  if (!trigger) return null;
  const pieces = Array.from({ length: 60 }, (_, i) => i);
  const colors = ["#a78bfa", "#7c3aed", "#34d399", "#f0b94e", "#f87171", "#60a5fa"];
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 250, overflow: "hidden" }}>
      {pieces.map(i => {
        const left = Math.random() * 100;
        const dx = (Math.random() - 0.5) * 200;
        const rot = Math.random() * 1440 - 720;
        const dur = 1.2 + Math.random() * 1.4;
        const delay = Math.random() * 0.3;
        return (
          <div
            key={`${trigger}-${i}`}
            className="confetti-piece"
            style={{
              left: `${left}%`,
              background: colors[i % colors.length],
              "--dx": `${dx}px`, "--rot": `${rot}deg`, "--dur": `${dur}s`,
              animationDelay: `${delay}s`,
              borderRadius: i % 3 === 0 ? "50%" : 2,
            }}
          />
        );
      })}
    </div>
  );
}

// Empty state
function EmptyState({ icon, title, desc, action }) {
  return (
    <div style={{ padding: "60px 24px", textAlign: "center" }}>
      <div style={{
        width: 56, height: 56, borderRadius: 14, background: "var(--surface-2)",
        margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center",
        color: "var(--text-dim)", border: "1px solid var(--line)",
      }}>
        <Icon name={icon} size={24} />
      </div>
      <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 13, color: "var(--text-muted)", maxWidth: 320, margin: "0 auto 16px" }}>{desc}</div>
      {action}
    </div>
  );
}

Object.assign(window, { Button, IconButton, Card, Input, Avatar, Badge, TierBadge, Modal, Toast, LineChart, BarChart, Donut, Logo, LogoMark, Confetti, EmptyState });
