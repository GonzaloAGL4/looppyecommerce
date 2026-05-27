// Customer-facing mobile screens (inside iPhone-style frame)
function CustomerApp({ initial = "home", onBack }) {
  const [screen, setScreen] = useState(initial);
  const [bizId, setBizId] = useState(null);
  const [mode, setMode] = useState("mobile");
  const D = window.LOOPPY_DATA;
  const me = { name: "Lucía Méndez", initials: "LM", points: 1240, visits: 84, tier: "premium", hue: 263 };

  const go = (s, id) => { setScreen(s); if (id) setBizId(id); };

  // Floating mode toggle — shared by both layouts
  const ModeToggle = (
    <div style={{ position: "fixed", top: 20, right: 24, zIndex: 60, display: "flex", alignItems: "center", gap: 10 }}>
      <Button variant="ghost" icon="arrow-left" onClick={onBack}>Volver al portal</Button>
      <div style={{ display: "inline-flex", padding: 4, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 999, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.4)" }}>
        {[
          { id: "mobile", icon: "smartphone", l: "Mobile" },
          { id: "desktop", icon: "monitor", l: "Desktop" },
        ].map(m => (
          <button key={m.id} onClick={() => setMode(m.id)} style={{
            display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 999,
            background: mode === m.id ? "var(--accent)" : "transparent", color: mode === m.id ? "#fff" : "var(--text-muted)",
            border: "none", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all .15s",
          }}>
            <Icon name={m.icon} size={14} /> {m.l}
          </button>
        ))}
      </div>
    </div>
  );

  if (mode === "desktop") {
    return (
      <>
        <CustomerDesktop go={go} screen={screen} bizId={bizId} me={me} />
        {ModeToggle}
      </>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-grad)", display: "flex", alignItems: "center", justifyContent: "center", padding: 32, gap: 60, position: "relative" }}>
      {ModeToggle}
      <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
        {/* Phone 1 */}
        <div className="phone-frame">
          <div className="phone-notch" />
          <div className="phone-screen">
            <PhoneStatusBar />
            {screen === "home" && <CustHome go={go} me={me} />}
            {screen === "businesses" && <CustBusinesses go={go} />}
            {screen === "biz" && <CustBusinessDetail go={go} bizId={bizId} />}
            {screen === "benefits" && <CustBenefits go={go} me={me} />}
            {screen === "card" && <CustCard go={go} me={me} />}
            {screen === "profile" && <CustProfile go={go} me={me} />}
            <PhoneTabBar current={screen} go={go} />
          </div>
        </div>
        {/* Phone 2 — alt screen for context */}
        <div className="phone-frame" style={{ transform: "scale(0.92)", opacity: 0.8 }}>
          <div className="phone-notch" />
          <div className="phone-screen">
            <PhoneStatusBar />
            {screen === "home" ? <CustBusinesses go={go} /> :
             screen === "businesses" ? <CustBusinessDetail go={go} bizId={1} /> :
             screen === "biz" ? <CustBenefits go={go} me={me} /> :
             screen === "benefits" ? <CustCard go={go} me={me} /> :
             <CustHome go={go} me={me} />}
            <PhoneTabBar current={screen} go={go} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 24, color: "var(--text-dim)", fontSize: 12, display: "flex", alignItems: "center", gap: 8 }}>
        <Icon name="info" size={13} /> App del cliente final — tocá para navegar
      </div>
    </div>
  );
}

function PhoneStatusBar() {
  return (
    <div style={{ height: 50, padding: "16px 28px 0", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 14, fontWeight: 600 }}>
      <span>9:41</span>
      <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <Icon name="signal" size={14} /><Icon name="wifi" size={14} /><Icon name="battery-full" size={16} />
      </div>
    </div>
  );
}

function PhoneTabBar({ current, go }) {
  const tabs = [
    { id: "home", icon: "home", l: "Inicio" },
    { id: "businesses", icon: "store", l: "Negocios" },
    { id: "card", icon: "qr-code", l: "Tarjeta" },
    { id: "benefits", icon: "gift", l: "Beneficios" },
    { id: "profile", icon: "user", l: "Perfil" },
  ];
  return (
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      background: "rgba(15,15,20,0.92)", backdropFilter: "blur(20px)",
      borderTop: "1px solid var(--line)", padding: "10px 8px 22px",
      display: "flex", justifyContent: "space-around",
    }}>
      {tabs.map(t => {
        const active = (current === t.id) || (t.id === "businesses" && current === "biz");
        return (
          <div key={t.id} onClick={() => go(t.id)} style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: 6,
            color: active ? "var(--accent)" : "var(--text-dim)", cursor: "pointer", fontSize: 10, fontWeight: 600,
          }}>
            <Icon name={t.icon} size={20} />{t.l}
          </div>
        );
      })}
    </div>
  );
}

function CustHome({ go, me }) {
  const D = window.LOOPPY_DATA;
  const tier = D.TIERS.find(t => t.id === me.tier);
  return (
    <div style={{ height: "calc(100% - 50px - 76px)", overflow: "auto", padding: "8px 20px 24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div>
          <div style={{ fontSize: 12, color: "var(--text-dim)" }}>Hola,</div>
          <div style={{ fontSize: 17, fontWeight: 600 }}>{me.name}</div>
        </div>
        <Avatar name={me.name} hue={me.hue} size={40} />
      </div>
      {/* Hero card */}
      <div style={{
        borderRadius: 20, padding: 20, position: "relative", overflow: "hidden",
        background: "linear-gradient(135deg, var(--accent) 0%, hsl(263 60% 30%) 100%)",
        boxShadow: "0 20px 40px -12px var(--accent-glow)",
        marginBottom: 20,
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.18 }}>
          <svg width="100%" height="100%"><defs><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="white" /></pattern></defs><rect width="100%" height="100%" fill="url(#dots)" /></svg>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.85)", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", position: "relative" }}>
          <Icon name="sparkle" size={12} /> Tu nivel: {tier.name}
        </div>
        <div className="font-display" style={{ fontSize: 56, fontWeight: 600, color: "white", lineHeight: 1, letterSpacing: "-0.04em", marginTop: 12, position: "relative" }}>{me.points}</div>
        <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, marginTop: 4, position: "relative" }}>puntos disponibles · {me.visits} visitas</div>
        <div style={{ marginTop: 16, position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "rgba(255,255,255,0.85)", marginBottom: 6 }}>
            <span>Hacia VIP</span><span>{me.visits} / 100</span>
          </div>
          <div style={{ height: 6, background: "rgba(255,255,255,0.2)", borderRadius: 999, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(me.visits/100)*100}%`, background: "white", borderRadius: 999 }} />
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 20 }}>
        {[
          { i: "qr-code", l: "Mi QR", to: "card" },
          { i: "store", l: "Negocios", to: "businesses" },
          { i: "gift", l: "Premios", to: "benefits" },
        ].map(a => (
          <div key={a.to} onClick={() => go(a.to)} style={{ background: "var(--surface-2)", borderRadius: 14, padding: 14, textAlign: "center", border: "1px solid var(--line)", cursor: "pointer" }}>
            <Icon name={a.i} size={20} style={{ color: "var(--accent)", marginBottom: 6 }} />
            <div style={{ fontSize: 12, fontWeight: 500 }}>{a.l}</div>
          </div>
        ))}
      </div>

      {/* Próximo beneficio */}
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-muted)", marginBottom: 10, display: "flex", justifyContent: "space-between" }}>
        <span>Casi tuyo</span><a onClick={() => go("benefits")} style={{ color: "var(--accent)", fontWeight: 600 }}>Ver todos</a>
      </div>
      <div style={{ background: "var(--surface)", borderRadius: 14, padding: 14, border: "1px solid var(--line)", display: "flex", gap: 12, marginBottom: 20 }}>
        <div style={{ width: 56, height: 56, borderRadius: 12, background: "linear-gradient(135deg, #7c3a5e, #4a2238)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Icon name="cake-slice" size={24} style={{ color: "white" }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600 }}>Postre de la casa</div>
          <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>Café Mira</div>
          <div className="prog" style={{ height: 5 }}><div className="prog-bar" style={{ width: "82%" }} /></div>
          <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 4 }}>Te faltan 36 puntos</div>
        </div>
      </div>

      {/* Activity */}
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-muted)", marginBottom: 10 }}>Tu actividad</div>
      <div style={{ display: "grid", gap: 8 }}>
        {[
          { i: "footprints", t: "Visita en Café Mira", s: "+10 pts · hace 2h", color: "var(--accent)" },
          { i: "gift", t: "Canjeaste Café gratis", s: "−80 pts · ayer", color: "#f0b94e" },
          { i: "footprints", t: "Visita en Forma Gym", s: "+15 pts · hace 3 días", color: "var(--accent)" },
        ].map((a, i) => (
          <div key={i} style={{ background: "var(--surface-2)", borderRadius: 12, padding: 12, display: "flex", alignItems: "center", gap: 10, border: "1px solid var(--line)" }}>
            <span style={{ width: 32, height: 32, borderRadius: 9, background: `${a.color}26`, color: a.color, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={a.i} size={14} /></span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{a.t}</div>
              <div style={{ fontSize: 11, color: "var(--text-dim)" }}>{a.s}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CustBusinesses({ go }) {
  const D = window.LOOPPY_DATA;
  const [q, setQ] = useState("");
  const list = D.BUSINESSES.filter(b => !q || b.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <div style={{ height: "calc(100% - 50px - 76px)", overflow: "auto", padding: "8px 20px 24px" }}>
      <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 4 }}>Negocios</div>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>Adheridos a LOOPPY cerca tuyo</div>
      <Input icon="search" placeholder="Buscar negocio o categoría…" value={q} onChange={(e) => setQ(e.target.value)} />
      <div style={{ display: "flex", gap: 6, margin: "14px 0 18px", overflow: "auto" }}>
        {["Todos", "Cafetería", "Peluquería", "Gimnasio", "Restaurante"].map((c, i) => (
          <span key={c} className={`chip ${i === 0 ? "chip-active" : ""}`} style={{ flexShrink: 0 }}>{c}</span>
        ))}
      </div>
      <div style={{ display: "grid", gap: 10 }}>
        {list.map(b => (
          <div key={b.id} onClick={() => go("biz", b.id)}
            style={{ background: "var(--surface)", borderRadius: 14, padding: 14, border: "1px solid var(--line)", display: "flex", gap: 12, cursor: "pointer" }}>
            <div style={{ width: 56, height: 56, borderRadius: 12, background: `linear-gradient(135deg, hsl(${b.accent} 60% 50%), hsl(${b.accent} 50% 28%))`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name={b.icon} size={24} style={{ color: "white" }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{b.name}</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{b.category} · {b.distance}</div>
                </div>
                <Icon name="chevron-right" size={16} style={{ color: "var(--text-dim)" }} />
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 8, alignItems: "center" }}>
                <Badge tone="accent" icon="sparkle">{b.points} pts</Badge>
                <span style={{ fontSize: 11, color: "var(--text-dim)" }}>{b.visits} visitas</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CustBusinessDetail({ go, bizId }) {
  const D = window.LOOPPY_DATA;
  const b = D.BUSINESSES.find(x => x.id === bizId) || D.BUSINESSES[0];
  return (
    <div style={{ height: "calc(100% - 50px - 76px)", overflow: "auto" }}>
      <div style={{ height: 180, background: `linear-gradient(135deg, hsl(${b.accent} 60% 50%), hsl(${b.accent} 40% 22%))`, position: "relative", display: "flex", alignItems: "flex-end", padding: 18 }}>
        <div onClick={() => go("businesses")} style={{ position: "absolute", top: 16, left: 16, width: 32, height: 32, borderRadius: 999, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <Icon name="arrow-left" size={16} style={{ color: "white" }} />
        </div>
        <div style={{ position: "absolute", top: 16, right: 16, display: "flex", gap: 8 }}>
          <span style={{ width: 32, height: 32, borderRadius: 999, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="heart" size={15} style={{ color: "white" }} /></span>
          <span style={{ width: 32, height: 32, borderRadius: 999, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="share-2" size={15} style={{ color: "white" }} /></span>
        </div>
      </div>
      <div style={{ padding: "0 20px 24px", marginTop: -32, position: "relative" }}>
        <div style={{ width: 64, height: 64, borderRadius: 16, background: `linear-gradient(135deg, hsl(${b.accent} 60% 50%), hsl(${b.accent} 50% 28%))`, display: "flex", alignItems: "center", justifyContent: "center", border: "4px solid var(--bg)" }}>
          <Icon name={b.icon} size={28} style={{ color: "white" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 600 }}>{b.name}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{b.category} · {b.area}</div>
          </div>
          <Badge tone="success" dot>Abierto</Badge>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 16, marginBottom: 20 }}>
          {[
            { l: "Tus puntos", n: b.points, c: "var(--accent)" },
            { l: "Visitas", n: b.visits, c: "var(--text)" },
            { l: "Cerca", n: b.distance, c: "var(--text)" },
          ].map((s, i) => (
            <div key={i} style={{ background: "var(--surface-2)", borderRadius: 12, padding: 12, textAlign: "center", border: "1px solid var(--line)" }}>
              <div className="font-display" style={{ fontSize: 22, fontWeight: 600, color: s.c, letterSpacing: "-0.03em" }}>{s.n}</div>
              <div style={{ fontSize: 10, color: "var(--text-dim)" }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "var(--accent-soft)", borderRadius: 14, padding: 14, marginBottom: 20, display: "flex", gap: 12, alignItems: "center" }}>
          <Icon name="info" size={16} style={{ color: "var(--accent)" }} />
          <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Sumás <strong style={{ color: "var(--accent)" }}>10 puntos</strong> por visita y <strong style={{ color: "var(--accent)" }}>5 puntos</strong> cada $1.000.</div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 12 }}>Beneficios disponibles</div>
        <div style={{ display: "grid", gap: 10 }}>
          {window.LOOPPY_DATA.BENEFITS.slice(0, 4).map(bf => {
            const enough = b.points >= bf.points;
            return (
              <div key={bf.id} style={{ background: "var(--surface)", borderRadius: 12, padding: 12, border: "1px solid var(--line)", display: "flex", gap: 12, opacity: enough ? 1 : 0.7 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: `linear-gradient(135deg, ${bf.color}, #1a1a22)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={bf.emoji} size={20} style={{ color: "white" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{bf.name}</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{bf.points} pts · {enough ? "disponible" : `te faltan ${bf.points - b.points}`}</div>
                </div>
                <Button variant={enough ? "primary" : "ghost"} size="sm" disabled={!enough}>{enough ? "Canjear" : "Bloqueado"}</Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CustBenefits({ go, me }) {
  const D = window.LOOPPY_DATA;
  return (
    <div style={{ height: "calc(100% - 50px - 76px)", overflow: "auto", padding: "8px 20px 24px" }}>
      <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 4 }}>Beneficios</div>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>Tenés <strong style={{ color: "var(--accent)" }}>{me.points} puntos</strong> para canjear</div>
      <div style={{ display: "flex", gap: 6, marginBottom: 16, overflow: "auto" }}>
        {["Todos", "Disponibles", "Casi listo", "Bloqueados"].map((c, i) => (
          <span key={c} className={`chip ${i === 0 ? "chip-active" : ""}`} style={{ flexShrink: 0 }}>{c}</span>
        ))}
      </div>
      <div style={{ display: "grid", gap: 12 }}>
        {D.BENEFITS.map(b => {
          const enough = me.points >= b.points;
          const close = !enough && me.points / b.points > 0.7;
          const status = enough ? { l: "Disponible", tone: "success" } : close ? { l: "Casi listo", tone: "warning" } : { l: "Bloqueado", tone: "neutral" };
          return (
            <div key={b.id} style={{ background: "var(--surface)", borderRadius: 14, padding: 14, border: "1px solid var(--line)", display: "flex", gap: 12, opacity: enough ? 1 : 0.85 }}>
              <div style={{ width: 64, height: 64, borderRadius: 12, background: `linear-gradient(135deg, ${b.color}, #1a1a22)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative" }}>
                <Icon name={b.emoji} size={28} style={{ color: "white" }} />
                {!enough && <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="lock" size={18} style={{ color: "white" }} /></div>}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{b.name}</div>
                  <Badge tone={status.tone} dot>{status.l}</Badge>
                </div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{b.desc}</div>
                <div style={{ marginTop: 10 }}>
                  <div className="prog" style={{ height: 5 }}><div className="prog-bar" style={{ width: `${Math.min(100, (me.points/b.points)*100)}%` }} /></div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 10, color: "var(--text-dim)" }}>
                    <span>{me.points} / {b.points} pts</span>
                    {enough ? <a style={{ color: "var(--accent)", fontWeight: 600 }}>Canjear →</a> : <span>{b.points - me.points} pts</span>}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CustCard({ go, me }) {
  return (
    <div style={{ height: "calc(100% - 50px - 76px)", overflow: "auto", padding: "20px 20px 24px", display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <div style={{ fontSize: 12, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>Tu tarjeta digital</div>
        <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>Mostrále este QR al cajero</div>
      </div>
      <div style={{
        background: "linear-gradient(165deg, var(--accent) 0%, hsl(263 60% 28%) 100%)",
        borderRadius: 22, padding: 22, color: "white", boxShadow: "0 30px 60px -20px var(--accent-glow)", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, background: "rgba(255,255,255,0.1)", borderRadius: 999 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22 }}>
          <LogoMark size={26} />
          <Badge tone="vip" icon="sparkle">Premium</Badge>
        </div>
        <div style={{ background: "white", borderRadius: 16, padding: 12, marginBottom: 16 }}>
          <QRPattern />
        </div>
        <div style={{ fontSize: 12, opacity: 0.8 }}>Titular</div>
        <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>{me.name}</div>
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
          <div><div style={{ fontSize: 10, opacity: 0.7 }}>PUNTOS</div><div className="font-display" style={{ fontSize: 22, fontWeight: 600 }}>{me.points}</div></div>
          <div><div style={{ fontSize: 10, opacity: 0.7 }}>VISITAS</div><div className="font-display" style={{ fontSize: 22, fontWeight: 600 }}>{me.visits}</div></div>
          <div><div style={{ fontSize: 10, opacity: 0.7 }}>MIEMBRO DESDE</div><div className="font-display" style={{ fontSize: 22, fontWeight: 600 }}>'24</div></div>
        </div>
      </div>
      <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <Button variant="ghost" icon="apple" style={{ justifyContent: "center", fontSize: 12 }}>Apple Wallet</Button>
        <Button variant="ghost" icon="smartphone" style={{ justifyContent: "center", fontSize: 12 }}>Google Pay</Button>
      </div>
    </div>
  );
}

function CustProfile({ go, me }) {
  return (
    <div style={{ height: "calc(100% - 50px - 76px)", overflow: "auto", padding: "20px 20px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <Avatar name={me.name} hue={me.hue} size={84} />
        <div style={{ fontSize: 18, fontWeight: 600, marginTop: 12 }}>{me.name}</div>
        <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>lucia.mendez@gmail.com</div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 10 }}>
          <TierBadge tier="premium" />
          <Badge tone="success" icon="zap">Racha de 4 semanas</Badge>
        </div>
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        {[
          { i: "credit-card", l: "Mis tarjetas y QR", to: "card" },
          { i: "history", l: "Historial completo" },
          { i: "bell", l: "Notificaciones" },
          { i: "shield", l: "Privacidad y datos" },
          { i: "help-circle", l: "Ayuda y contacto" },
          { i: "log-out", l: "Cerrar sesión", danger: true },
        ].map(r => (
          <div key={r.l} onClick={() => r.to && go(r.to)} style={{ background: "var(--surface-2)", padding: 14, borderRadius: 12, border: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
            <Icon name={r.i} size={18} style={{ color: r.danger ? "#f87171" : "var(--text-muted)" }} />
            <span style={{ flex: 1, fontSize: 14, color: r.danger ? "#f87171" : "var(--text)" }}>{r.l}</span>
            <Icon name="chevron-right" size={16} style={{ color: "var(--text-dim)" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

window.CustomerApp = CustomerApp;
window.QRPattern = QRPattern;
