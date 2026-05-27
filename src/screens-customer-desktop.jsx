// LOOPPY — Customer (cliente final) desktop layout
// Toggle Mobile/Desktop dentro de CustomerApp. Mobile usa los iPhone frames;
// Desktop renderiza la MISMA información en un layout web full-width.

function CustomerDesktop({ go, screen, bizId, me }) {
  const D = window.LOOPPY_DATA;
  const tier = D.TIERS.find(t => t.id === me.tier);
  const nextTier = D.TIERS[D.TIERS.findIndex(t => t.id === me.tier) + 1];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-grad)", color: "var(--text)" }}>
      <CustDeskNav screen={screen} go={go} me={me} />
      <main style={{ maxWidth: 1240, margin: "0 auto", padding: "32px 28px 80px" }}>
        {screen === "home" && <CustDeskHome go={go} me={me} tier={tier} nextTier={nextTier} />}
        {screen === "businesses" && <CustDeskBusinesses go={go} />}
        {screen === "biz" && <CustDeskBusinessDetail go={go} bizId={bizId} />}
        {screen === "benefits" && <CustDeskBenefits go={go} me={me} />}
        {screen === "card" && <CustDeskCard go={go} me={me} />}
        {screen === "profile" && <CustDeskProfile go={go} me={me} />}
      </main>
    </div>
  );
}

function CustDeskNav({ screen, go, me }) {
  const tabs = [
    { id: "home", icon: "home", l: "Inicio" },
    { id: "businesses", icon: "store", l: "Negocios" },
    { id: "card", icon: "qr-code", l: "Mi tarjeta" },
    { id: "benefits", icon: "gift", l: "Beneficios" },
  ];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(15,15,20,0.86)", backdropFilter: "blur(14px)", borderBottom: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "14px 28px", display: "flex", alignItems: "center", gap: 32 }}>
        <LogoMark size={26} />
        <nav style={{ display: "flex", gap: 4 }}>
          {tabs.map(t => {
            const active = screen === t.id || (t.id === "businesses" && screen === "biz");
            return (
              <div key={t.id} onClick={() => go(t.id)} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 14px", borderRadius: 10, cursor: "pointer", color: active ? "var(--accent)" : "var(--text-muted)", background: active ? "var(--accent-soft)" : "transparent", fontSize: 14, fontWeight: 500, transition: "all .12s" }}>
                <Icon name={t.icon} size={16} />{t.l}
              </div>
            );
          })}
        </nav>
        <div style={{ flex: 1, maxWidth: 360, marginLeft: "auto" }}><Input icon="search" placeholder="Buscar negocios, beneficios…" /></div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 999, background: "var(--accent-soft)", color: "var(--accent)", fontSize: 13, fontWeight: 600 }}>
            <Icon name="sparkles" size={14} /> {me.points} pts
          </span>
          <IconButton icon="bell" />
          <div onClick={() => go("profile")} style={{ cursor: "pointer" }}><Avatar name={me.name} hue={me.hue} /></div>
        </div>
      </div>
    </header>
  );
}

// ── HOME (desktop)
function CustDeskHome({ go, me, tier, nextTier }) {
  const D = window.LOOPPY_DATA;
  const progress = nextTier ? Math.min(100, (me.visits / 100) * 100) : 100;
  return (
    <div style={{ display: "grid", gap: 24 }}>
      {/* Hero */}
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 20 }}>
        <Card style={{ padding: 32, position: "relative", overflow: "hidden", background: "linear-gradient(135deg, var(--accent) 0%, hsl(263 60% 30%) 100%)", border: "none", color: "#fff" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.18 }}>
            <svg width="100%" height="100%"><defs><pattern id="dotsD" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="white" /></pattern></defs><rect width="100%" height="100%" fill="url(#dotsD)" /></svg>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.85)", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              <Icon name="sparkles" size={14} /> Hola {me.name.split(" ")[0]} · Nivel {tier.name}
            </div>
            <div className="font-display" style={{ fontSize: 96, fontWeight: 600, color: "#fff", lineHeight: 1, letterSpacing: "-0.045em", marginTop: 14 }}>{me.points}</div>
            <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, marginTop: 4 }}>puntos disponibles · {me.visits} visitas registradas</div>
            {nextTier && (
              <div style={{ marginTop: 28, maxWidth: 460 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "rgba(255,255,255,0.85)", marginBottom: 8 }}>
                  <span>Hacia {nextTier.name}</span><span>{me.visits} / 100 visitas</span>
                </div>
                <div style={{ height: 8, background: "rgba(255,255,255,0.2)", borderRadius: 999, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${progress}%`, background: "#fff", borderRadius: 999 }} />
                </div>
              </div>
            )}
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              <Button onClick={() => go("card")} variant="ghost" icon="qr-code" style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}>Mostrar QR</Button>
              <Button onClick={() => go("benefits")} icon="gift" style={{ background: "#fff", color: "var(--accent)" }}>Canjear beneficios</Button>
            </div>
          </div>
        </Card>
        <Card style={{ padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div style={{ fontSize: 15, fontWeight: 600 }}>Casi tuyo</div>
            <a onClick={() => go("benefits")} style={{ fontSize: 12, color: "var(--accent)", cursor: "pointer", fontWeight: 600 }}>Ver todos →</a>
          </div>
          {D.BENEFITS.slice(0, 3).map(b => {
            const enough = me.points >= b.points;
            const pct = Math.min(100, (me.points / b.points) * 100);
            return (
              <div key={b.id} style={{ padding: "12px 0", borderBottom: "1px solid var(--line)", display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: `linear-gradient(135deg, ${b.color}, #1a1a22)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={b.emoji} size={18} style={{ color: "white" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{b.name}</div>
                  <div className="prog" style={{ height: 4, marginTop: 6 }}><div className="prog-bar" style={{ width: `${pct}%` }} /></div>
                  <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 4 }}>{enough ? "Listo para canjear" : `Faltan ${b.points - me.points} pts`}</div>
                </div>
              </div>
            );
          })}
        </Card>
      </div>

      {/* Quick actions row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {[
          { i: "qr-code", l: "Mi tarjeta", d: "Mostrá tu QR al cajero", to: "card", c: "var(--accent)" },
          { i: "store", l: "Explorar negocios", d: "6 comercios cerca tuyo", to: "businesses", c: "#60a5fa" },
          { i: "gift", l: "Mis beneficios", d: "3 disponibles ahora", to: "benefits", c: "#f0b94e" },
          { i: "shopping-bag", l: "Comprar online", d: "Live Sports · Mendoza", to: "shop", c: "#34d399" },
        ].map(a => (
          <Card key={a.l} onClick={() => a.to === "shop" ? go("__shop") : go(a.to)} style={{ padding: 20, cursor: "pointer" }}>
            <span style={{ width: 38, height: 38, borderRadius: 10, background: `${a.c}26`, color: a.c, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}><Icon name={a.i} size={18} /></span>
            <div style={{ fontSize: 15, fontWeight: 600 }}>{a.l}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 3 }}>{a.d}</div>
          </Card>
        ))}
      </div>

      {/* Negocios + actividad */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }}>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600 }}>Tus negocios favoritos</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Los que más visitás</div>
            </div>
            <a onClick={() => go("businesses")} style={{ fontSize: 13, color: "var(--accent)", cursor: "pointer", fontWeight: 600 }}>Ver todos →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0 }}>
            {D.BUSINESSES.slice(0, 4).map((b, i) => (
              <div key={b.id} onClick={() => go("biz", b.id)} style={{ padding: 18, display: "flex", gap: 14, cursor: "pointer", borderRight: i % 2 === 0 ? "1px solid var(--line)" : "none", borderBottom: i < 2 ? "1px solid var(--line)" : "none" }}>
                <div style={{ width: 56, height: 56, borderRadius: 12, background: `linear-gradient(135deg, hsl(${b.accent} 60% 50%), hsl(${b.accent} 50% 28%))`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={b.icon} size={24} style={{ color: "#fff" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{b.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{b.category} · {b.distance}</div>
                  <div style={{ display: "flex", gap: 8, marginTop: 8, alignItems: "center" }}>
                    <Badge tone="accent" icon="sparkle">{b.points} pts</Badge>
                    <span style={{ fontSize: 11, color: "var(--text-dim)" }}>{b.visits} visitas</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: "18px 22px", borderBottom: "1px solid var(--line)", fontSize: 15, fontWeight: 600 }}>Tu actividad</div>
          <div>
            {[
              { i: "footprints", t: "Visita en Café Mira", s: "+10 pts · hace 2h", c: "var(--accent)" },
              { i: "gift", t: "Canjeaste Café gratis", s: "−80 pts · ayer", c: "#f0b94e" },
              { i: "footprints", t: "Visita en Forma Gym", s: "+15 pts · hace 3 días", c: "var(--accent)" },
              { i: "shopping-bag", t: "Compra Live Sports", s: "+240 pts · 12 May", c: "#34d399" },
              { i: "footprints", t: "Visita en Café Mira", s: "+10 pts · 8 May", c: "var(--accent)" },
            ].map((a, i) => (
              <div key={i} style={{ padding: "12px 22px", borderBottom: i < 4 ? "1px solid var(--line)" : "none", display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ width: 30, height: 30, borderRadius: 8, background: `${a.c}26`, color: a.c, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={a.i} size={13} /></span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{a.t}</div>
                  <div style={{ fontSize: 11, color: "var(--text-dim)" }}>{a.s}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// ── BUSINESSES
function CustDeskBusinesses({ go }) {
  const D = window.LOOPPY_DATA;
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Todos");
  const cats = ["Todos", "Cafetería", "Peluquería", "Gimnasio", "Restaurante", "Almacén", "Floristería"];
  const list = D.BUSINESSES.filter(b =>
    (cat === "Todos" || b.category === cat) &&
    (!q || b.name.toLowerCase().includes(q.toLowerCase()) || b.category.toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <div style={{ display: "grid", gap: 24 }}>
      <div>
        <h1 className="font-display" style={{ fontSize: 40, fontWeight: 600, margin: 0, letterSpacing: "-0.03em" }}>Negocios</h1>
        <div style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 4 }}>Adheridos a LOOPPY cerca tuyo · sumás puntos en cada visita</div>
      </div>
      <Card style={{ padding: 20, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1, maxWidth: 380 }}><Input icon="search" placeholder="Buscar negocio o categoría…" value={q} onChange={(e) => setQ(e.target.value)} /></div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {cats.map(c => <span key={c} className={`chip ${cat === c ? "chip-active" : ""}`} onClick={() => setCat(c)} style={{ cursor: "pointer" }}>{c}</span>)}
        </div>
      </Card>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {list.map(b => (
          <Card key={b.id} onClick={() => go("biz", b.id)} style={{ padding: 0, overflow: "hidden", cursor: "pointer" }}>
            <div style={{ height: 120, background: `linear-gradient(135deg, hsl(${b.accent} 60% 50%), hsl(${b.accent} 40% 22%))`, position: "relative", display: "flex", alignItems: "flex-end", padding: 14 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(0,0,0,0.35)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(6px)" }}>
                <Icon name={b.icon} size={22} style={{ color: "#fff" }} />
              </div>
              <Badge tone="success" dot style={{ position: "absolute", top: 12, right: 12 }}>Abierto</Badge>
            </div>
            <div style={{ padding: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 600 }}>{b.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{b.category} · {b.area}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 12, alignItems: "center" }}>
                <Badge tone="accent" icon="sparkle">{b.points} pts</Badge>
                <span style={{ fontSize: 11, color: "var(--text-dim)" }}>{b.visits} visitas · {b.distance}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ── BUSINESS DETAIL
function CustDeskBusinessDetail({ go, bizId }) {
  const D = window.LOOPPY_DATA;
  const b = D.BUSINESSES.find(x => x.id === bizId) || D.BUSINESSES[0];
  return (
    <div style={{ display: "grid", gap: 24 }}>
      <Button variant="ghost" icon="arrow-left" onClick={() => go("businesses")} style={{ alignSelf: "flex-start" }}>Volver a negocios</Button>
      <Card style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ height: 220, background: `linear-gradient(135deg, hsl(${b.accent} 60% 50%), hsl(${b.accent} 40% 22%))`, position: "relative", display: "flex", alignItems: "flex-end", padding: 28 }}>
          <div style={{ position: "absolute", top: 18, right: 18, display: "flex", gap: 8 }}>
            <span style={{ width: 38, height: 38, borderRadius: 999, background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(6px)", cursor: "pointer" }}><Icon name="heart" size={16} style={{ color: "#fff" }} /></span>
            <span style={{ width: 38, height: 38, borderRadius: 999, background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(6px)", cursor: "pointer" }}><Icon name="share-2" size={16} style={{ color: "#fff" }} /></span>
          </div>
        </div>
        <div style={{ padding: "0 28px 28px", marginTop: -40, position: "relative", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 22, alignItems: "flex-end" }}>
          <div style={{ width: 92, height: 92, borderRadius: 22, background: `linear-gradient(135deg, hsl(${b.accent} 60% 50%), hsl(${b.accent} 50% 28%))`, display: "flex", alignItems: "center", justifyContent: "center", border: "5px solid var(--bg)" }}>
            <Icon name={b.icon} size={36} style={{ color: "#fff" }} />
          </div>
          <div>
            <h1 className="font-display" style={{ fontSize: 36, fontWeight: 600, margin: 0, letterSpacing: "-0.03em" }}>{b.name}</h1>
            <div style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 4 }}>{b.category} · {b.area}</div>
          </div>
          <Badge tone="success" dot>Abierto ahora</Badge>
        </div>
      </Card>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }}>
        <div style={{ display: "grid", gap: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
            {[
              { l: "Tus puntos", n: b.points, c: "var(--accent)" },
              { l: "Visitas", n: b.visits, c: "var(--text)" },
              { l: "Distancia", n: b.distance, c: "var(--text)" },
              { l: "Próximo nivel", n: "+5", c: "#f0b94e" },
            ].map((s, i) => (
              <Card key={i} style={{ padding: 18, textAlign: "center" }}>
                <div className="font-display" style={{ fontSize: 32, fontWeight: 600, color: s.c, letterSpacing: "-0.03em" }}>{s.n}</div>
                <div style={{ fontSize: 11, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 4 }}>{s.l}</div>
              </Card>
            ))}
          </div>
          <Card style={{ padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", background: "var(--accent-soft)", borderRadius: 12, marginBottom: 20 }}>
              <Icon name="info" size={16} style={{ color: "var(--accent)" }} />
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Sumás <strong style={{ color: "var(--accent)" }}>10 puntos</strong> por visita y <strong style={{ color: "var(--accent)" }}>5 puntos</strong> cada $1.000 gastado.</div>
            </div>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 14 }}>Beneficios disponibles</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
              {D.BENEFITS.slice(0, 4).map(bf => {
                const enough = b.points >= bf.points;
                return (
                  <div key={bf.id} style={{ background: "var(--surface-2)", borderRadius: 12, padding: 14, border: "1px solid var(--line)", display: "flex", gap: 12, opacity: enough ? 1 : 0.7 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 10, background: `linear-gradient(135deg, ${bf.color}, #1a1a22)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon name={bf.emoji} size={22} style={{ color: "#fff" }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{bf.name}</div>
                      <div style={{ fontSize: 11, color: "var(--text-muted)", margin: "2px 0 8px" }}>{bf.points} pts</div>
                      <Button variant={enough ? "primary" : "ghost"} size="sm" disabled={!enough} style={{ width: "100%", justifyContent: "center" }}>{enough ? "Canjear" : `Faltan ${bf.points - b.points}`}</Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
        <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
          <Card style={{ padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Información</div>
            <div style={{ display: "grid", gap: 10 }}>
              {[
                { i: "map-pin", t: b.area },
                { i: "clock", t: "Lun–Vie · 9 a 21h" },
                { i: "phone", t: "+54 11 5555 0123" },
                { i: "globe", t: `${b.name.toLowerCase().replace(/\s/g, '')}.looppy.shop` },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13 }}>
                  <Icon name={r.i} size={14} style={{ color: "var(--text-dim)" }} />
                  <span style={{ color: "var(--text-muted)" }}>{r.t}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card style={{ padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Tu historial</div>
            <div style={{ display: "grid", gap: 8 }}>
              {[
                { t: "Visita", s: "+10 pts · hace 2h" },
                { t: "Visita", s: "+10 pts · hace 5 días" },
                { t: "Canje · Café gratis", s: "−80 pts · ayer" },
              ].map((a, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: i < 2 ? "1px solid var(--line)" : "none", fontSize: 12 }}>
                  <span>{a.t}</span><span style={{ color: "var(--text-dim)" }}>{a.s}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ── BENEFITS
function CustDeskBenefits({ me }) {
  const D = window.LOOPPY_DATA;
  const [filter, setFilter] = useState("all");
  const filtered = D.BENEFITS.filter(b => {
    if (filter === "all") return true;
    const enough = me.points >= b.points;
    const close = !enough && me.points / b.points > 0.7;
    if (filter === "ready") return enough;
    if (filter === "close") return close;
    if (filter === "locked") return !enough && !close;
    return true;
  });
  return (
    <div style={{ display: "grid", gap: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
        <div>
          <h1 className="font-display" style={{ fontSize: 40, fontWeight: 600, margin: 0, letterSpacing: "-0.03em" }}>Beneficios</h1>
          <div style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 4 }}>Tenés <strong style={{ color: "var(--accent)" }}>{me.points} puntos</strong> para canjear</div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {[["all", "Todos"], ["ready", "Disponibles"], ["close", "Casi listo"], ["locked", "Bloqueados"]].map(([id, l]) => (
            <span key={id} className={`chip ${filter === id ? "chip-active" : ""}`} onClick={() => setFilter(id)} style={{ cursor: "pointer" }}>{l}</span>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {filtered.map(b => {
          const enough = me.points >= b.points;
          const close = !enough && me.points / b.points > 0.7;
          const status = enough ? { l: "Disponible", tone: "success" } : close ? { l: "Casi listo", tone: "warning" } : { l: "Bloqueado", tone: "neutral" };
          const pct = Math.min(100, (me.points / b.points) * 100);
          return (
            <Card key={b.id} style={{ padding: 0, overflow: "hidden", opacity: enough ? 1 : 0.92 }}>
              <div style={{ height: 110, background: `linear-gradient(135deg, ${b.color}, #1a1a22)`, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={b.emoji} size={42} style={{ color: "#fff" }} />
                {!enough && <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(0,0,0,0.5)", color: "#fff", padding: 8, borderRadius: 999 }}><Icon name="lock" size={14} /></div>}
                <Badge tone={status.tone} dot style={{ position: "absolute", bottom: 12, left: 12 }}>{status.l}</Badge>
              </div>
              <div style={{ padding: 18 }}>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{b.name}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4, lineHeight: 1.4, minHeight: 34 }}>{b.desc}</div>
                <div style={{ marginTop: 14 }}>
                  <div className="prog" style={{ height: 6 }}><div className="prog-bar" style={{ width: `${pct}%` }} /></div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 11, color: "var(--text-dim)" }}>
                    <span>{me.points} / {b.points} pts</span>
                    {!enough && <span>Faltan {b.points - me.points}</span>}
                  </div>
                </div>
                <Button variant={enough ? "primary" : "ghost"} size="sm" disabled={!enough} style={{ marginTop: 12, width: "100%", justifyContent: "center" }}>{enough ? "Canjear ahora" : "Bloqueado"}</Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// ── CARD
function CustDeskCard({ me }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
      <div style={{ display: "grid", gap: 24, alignContent: "start" }}>
        <div>
          <h1 className="font-display" style={{ fontSize: 40, fontWeight: 600, margin: 0, letterSpacing: "-0.03em" }}>Mi tarjeta digital</h1>
          <div style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 6, maxWidth: 440 }}>Mostrále este QR al cajero o al dueño del comercio. Cada visita suma puntos automáticamente.</div>
        </div>
        <div style={{ display: "grid", gap: 12 }}>
          {[
            { i: "qr-code", l: "Mostrar QR en pantalla completa", d: "Para escanear al instante" },
            { i: "apple", l: "Agregar a Apple Wallet", d: "Disponible en iOS 16+" },
            { i: "smartphone", l: "Agregar a Google Wallet", d: "Disponible en Android 11+" },
            { i: "printer", l: "Imprimir tarjeta física", d: "PDF listo para imprimir" },
            { i: "share-2", l: "Compartir tarjeta", d: "Por mensaje o email" },
          ].map(r => (
            <div key={r.l} style={{ padding: 14, background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 12, display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
              <span style={{ width: 38, height: 38, borderRadius: 10, background: "var(--surface-3)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={r.i} size={17} /></span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{r.l}</div>
                <div style={{ fontSize: 12, color: "var(--text-dim)" }}>{r.d}</div>
              </div>
              <Icon name="chevron-right" size={16} style={{ color: "var(--text-dim)" }} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "20px 0" }}>
        <div style={{ width: 380, background: "linear-gradient(165deg, var(--accent) 0%, hsl(263 60% 28%) 100%)", borderRadius: 26, padding: 28, color: "#fff", boxShadow: "0 50px 100px -30px var(--accent-glow)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, background: "rgba(255,255,255,0.1)", borderRadius: 999 }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
            <LogoMark size={28} />
            <Badge tone="vip" icon="sparkle">Premium</Badge>
          </div>
          <div style={{ background: "#fff", borderRadius: 18, padding: 16, marginBottom: 20 }}>
            <QRPattern />
          </div>
          <div style={{ fontSize: 12, opacity: 0.8 }}>Titular</div>
          <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>{me.name}</div>
          <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
            <div><div style={{ fontSize: 10, opacity: 0.7 }}>PUNTOS</div><div className="font-display" style={{ fontSize: 26, fontWeight: 600 }}>{me.points}</div></div>
            <div><div style={{ fontSize: 10, opacity: 0.7 }}>VISITAS</div><div className="font-display" style={{ fontSize: 26, fontWeight: 600 }}>{me.visits}</div></div>
            <div><div style={{ fontSize: 10, opacity: 0.7 }}>MIEMBRO</div><div className="font-display" style={{ fontSize: 26, fontWeight: 600 }}>'24</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── PROFILE
function CustDeskProfile({ go, me }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 24 }}>
      <Card style={{ padding: 28, textAlign: "center", alignSelf: "start" }}>
        <Avatar name={me.name} hue={me.hue} size={100} />
        <div style={{ fontSize: 20, fontWeight: 600, marginTop: 14 }}>{me.name}</div>
        <div style={{ fontSize: 13, color: "var(--text-muted)" }}>lucia.mendez@gmail.com</div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 14 }}>
          <TierBadge tier="premium" />
          <Badge tone="success" icon="zap">Racha 4 sem.</Badge>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 22, padding: "16px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <div><div className="font-display" style={{ fontSize: 22, fontWeight: 600 }}>{me.points}</div><div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Puntos</div></div>
          <div><div className="font-display" style={{ fontSize: 22, fontWeight: 600 }}>{me.visits}</div><div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Visitas</div></div>
          <div><div className="font-display" style={{ fontSize: 22, fontWeight: 600 }}>6</div><div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Negocios</div></div>
        </div>
        <Button variant="ghost" icon="edit-2" style={{ marginTop: 18, width: "100%", justifyContent: "center" }}>Editar perfil</Button>
      </Card>
      <div style={{ display: "grid", gap: 14 }}>
        {[
          { i: "credit-card", l: "Mis tarjetas y QR", d: "Tu tarjeta digital y wallets vinculadas", to: "card" },
          { i: "history", l: "Historial completo", d: "Todas las visitas y canjes desde 2024" },
          { i: "bell", l: "Notificaciones", d: "Beneficios cerca y novedades de tus negocios" },
          { i: "shield", l: "Privacidad y datos", d: "Qué información comparte cada comercio" },
          { i: "globe", l: "Idioma y región", d: "Español (Argentina)" },
          { i: "help-circle", l: "Ayuda y contacto", d: "FAQs, tutoriales, contactar soporte" },
          { i: "log-out", l: "Cerrar sesión", d: "Te volveremos a pedir tu email para entrar", danger: true },
        ].map(r => (
          <Card key={r.l} onClick={() => r.to && go(r.to)} style={{ padding: 18, display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }}>
            <span style={{ width: 42, height: 42, borderRadius: 10, background: r.danger ? "rgba(248,113,113,0.14)" : "var(--surface-2)", color: r.danger ? "#f87171" : "var(--text-muted)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={r.i} size={18} /></span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: r.danger ? "#f87171" : "var(--text)" }}>{r.l}</div>
              <div style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 2 }}>{r.d}</div>
            </div>
            <Icon name="chevron-right" size={16} style={{ color: "var(--text-dim)" }} />
          </Card>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { CustomerDesktop });
