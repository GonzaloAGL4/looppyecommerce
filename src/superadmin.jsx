// LOOPPY — Superadmin (platform-level multi-tenant management)

const SUPER_NAV = [
  { id: "super-dashboard", icon: "layout-dashboard", label: "Dashboard plataforma" },
  { id: "super-merchants", icon: "store", label: "Comercios", badge: 84 },
  { id: "super-plans", icon: "credit-card", label: "Planes & facturación" },
  { id: "super-users", icon: "users-round", label: "Usuarios plataforma" },
  { id: "super-support", icon: "life-buoy", label: "Soporte", badge: 7 },
  { id: "super-health", icon: "activity", label: "Salud del sistema" },
  { id: "super-logs", icon: "scroll-text", label: "Auditoría" },
  { id: "super-config", icon: "settings-2", label: "Configuración global" },
];

const SUPER_MERCHANTS = [
  { id: "m1", name: "Live Sports", area: "Mendoza", category: "Indumentaria deportiva", plan: "Pro+Ecom", mrr: 89000, gmv30: 8420900, clients: 284, orders30: 168, status: "active", since: "Mar 2024", color: "#0a0a0a", icon: "trophy", initials: "LS" },
  { id: "m2", name: "Café Mira", area: "CABA · Palermo", category: "Cafetería", plan: "Pro", mrr: 24900, gmv30: 0, clients: 142, orders30: 0, status: "active", since: "Nov 2023", color: "#7c5a3a", icon: "coffee", initials: "CM" },
  { id: "m3", name: "Estudio Norte", area: "CABA · Belgrano", category: "Peluquería", plan: "Plus", mrr: 14900, gmv30: 0, clients: 96, orders30: 0, status: "active", since: "Feb 2024", color: "#3a5e7c", icon: "scissors", initials: "EN" },
  { id: "m4", name: "Forma Gym", area: "CABA · Recoleta", category: "Gimnasio", plan: "Pro+Ecom", mrr: 89000, gmv30: 2840000, clients: 312, orders30: 64, status: "active", since: "Oct 2023", color: "#5e3a7c", icon: "dumbbell", initials: "FG" },
  { id: "m5", name: "Pasta Madre", area: "CABA · Villa Crespo", category: "Restaurante", plan: "Pro", mrr: 24900, gmv30: 0, clients: 78, orders30: 0, status: "trial", since: "Mar 2026", color: "#7c3a3a", icon: "utensils", initials: "PM" },
  { id: "m6", name: "Verde Mercado", area: "CABA · Caballito", category: "Almacén", plan: "Plus", mrr: 14900, gmv30: 412000, clients: 54, orders30: 18, status: "active", since: "Ene 2025", color: "#3a7c5e", icon: "shopping-basket", initials: "VM" },
  { id: "m7", name: "Lila Floristería", area: "CABA · San Telmo", category: "Floristería", plan: "Free", mrr: 0, gmv30: 0, clients: 22, orders30: 0, status: "active", since: "Abr 2025", color: "#7c3a5e", icon: "flower", initials: "LF" },
  { id: "m8", name: "Border Ramen", area: "Córdoba", category: "Restaurante", plan: "Plus", mrr: 14900, gmv30: 0, clients: 88, orders30: 0, status: "paused", since: "Sep 2024", color: "#7c4a3a", icon: "soup", initials: "BR" },
  { id: "m9", name: "Atelier Nórdico", area: "Rosario", category: "Diseño", plan: "Pro+Ecom", mrr: 89000, gmv30: 1820000, clients: 188, orders30: 44, status: "active", since: "Jul 2024", color: "#4a5e7c", icon: "scissors", initials: "AN" },
  { id: "m10", name: "Pet Friend", area: "Mendoza", category: "Petshop", plan: "Plus", mrr: 14900, gmv30: 0, clients: 142, orders30: 0, status: "active", since: "Feb 2025", color: "#7c5e3a", icon: "dog", initials: "PF" },
];

const SUPER_TICKETS = [
  { id: "T-2118", merchant: "Live Sports", subj: "Mercado Pago no responde el webhook", sev: "high", since: "hace 2h", status: "open", agent: "—" },
  { id: "T-2117", merchant: "Forma Gym", subj: "Quiero migrar de Plus a Pro+Ecom", sev: "low", since: "hace 4h", status: "open", agent: "Lucía R." },
  { id: "T-2116", merchant: "Pasta Madre", subj: "Importación de clientes desde CSV", sev: "medium", since: "hace 6h", status: "in-progress", agent: "Diego M." },
  { id: "T-2115", merchant: "Café Mira", subj: "QR de la tarjeta no escanea bien", sev: "medium", since: "ayer", status: "open", agent: "—" },
  { id: "T-2114", merchant: "Atelier Nórdico", subj: "¿Cómo configurar puntos extra por producto?", sev: "low", since: "ayer", status: "resolved", agent: "Lucía R." },
  { id: "T-2113", merchant: "Border Ramen", subj: "Renovación pendiente — bloqueo", sev: "high", since: "hace 2 días", status: "open", agent: "—" },
  { id: "T-2112", merchant: "Verde Mercado", subj: "Reporte de ventas semanal por email", sev: "low", since: "hace 3 días", status: "resolved", agent: "Diego M." },
];

const SUPER_LOGS = [
  { time: "14:42:11", level: "info", who: "Live Sports", what: "Nuevo pedido confirmado · #LS-2841 · $119.900" },
  { time: "14:40:02", level: "info", who: "Café Mira", what: "Visita registrada · cliente María González · +10 pts" },
  { time: "14:38:54", level: "warn", who: "Live Sports", what: "Stock crítico — Camiseta Pro Elite (L): 2 unidades" },
  { time: "14:35:18", level: "info", who: "Atelier Nórdico", what: "Nuevo cliente registrado · sofialopez@gmail.com" },
  { time: "14:32:44", level: "info", who: "Forma Gym", what: "Canje de beneficio · Mes gratis para Mateo R." },
  { time: "14:28:09", level: "error", who: "Sistema", what: "MercadoPago webhook timeout · 5xx — reintento programado" },
  { time: "14:22:31", level: "info", who: "Pet Friend", what: "Plan actualizado: Free → Plus" },
  { time: "14:18:55", level: "info", who: "Lila Floristería", what: "Sesión iniciada · IP 200.69.x.x" },
  { time: "14:14:02", level: "warn", who: "Border Ramen", what: "Pago de suscripción vencido — gracia 3 días" },
];

const SUPER_USERS = [
  { name: "Lucía Méndez", role: "Super Admin", email: "lucia@looppy.app", last: "Hace 5 min", twofa: true },
  { name: "Diego Martínez", role: "Soporte L2", email: "diego@looppy.app", last: "Hace 12 min", twofa: true },
  { name: "Lucía Rovira", role: "Soporte L1", email: "lroviera@looppy.app", last: "Hace 24 min", twofa: true },
  { name: "Mateo Cano", role: "Comercial", email: "mateo@looppy.app", last: "Hoy 10:32", twofa: false },
  { name: "Florencia Pizarro", role: "Finanzas", email: "flor@looppy.app", last: "Ayer", twofa: true },
];

window.SUPER_DATA = { SUPER_MERCHANTS, SUPER_TICKETS, SUPER_LOGS, SUPER_USERS };

// ───────────────────────────────────────────────────────────────
// SHELL
function SuperShell({ current, go, children }) {
  return (
    <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "260px 1fr", background: "var(--bg)" }}>
      <aside style={{ borderRight: "1px solid var(--line)", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 4, background: "var(--surface)", position: "sticky", top: 0, height: "100vh", overflow: "auto" }}>
        <div style={{ padding: "4px 8px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <LogoMark size={22} />
          <span style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)", letterSpacing: "0.14em", fontWeight: 700 }}>SUPERADMIN</span>
        </div>
        {/* Platform card */}
        <div style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-deep))", borderRadius: 12, padding: 14, marginBottom: 12, position: "relative", overflow: "hidden", color: "#fff" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at top right, rgba(255,255,255,0.15), transparent 60%)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 10, position: "relative" }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="shield-check" size={17} /></div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Plataforma Looppy</div>
              <div style={{ fontSize: 10, opacity: 0.85, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>84 comercios activos</div>
            </div>
          </div>
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.12em", padding: "4px 10px 6px" }}>Administración</div>
        <div style={{ display: "grid", gap: 2 }}>
          {SUPER_NAV.map(n => (
            <div key={n.id} className={`nav-item ${current === n.id ? "active" : ""}`} onClick={() => go(n.id)}>
              <Icon name={n.icon} size={16} />
              <span style={{ flex: 1 }}>{n.label}</span>
              {n.badge != null && <span style={{ background: "var(--surface-3)", color: "var(--text-muted)", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 999 }}>{n.badge}</span>}
              {current === n.id && <span className="nav-dot" />}
            </div>
          ))}
        </div>
        <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--line)", display: "grid", gap: 2 }}>
          <div className="nav-item" onClick={() => go("biz-dashboard")}><Icon name="store" size={16} /> Ver como comercio</div>
          <div className="nav-item" onClick={() => go("landing")}><Icon name="log-out" size={16} /> Salir</div>
        </div>
      </aside>
      <main style={{ minWidth: 0 }}>{children}</main>
    </div>
  );
}

function SuperTopBar({ title, kicker, subtitle, actions }) {
  return (
    <div style={{ padding: "24px 32px", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, background: "var(--bg)", position: "sticky", top: 0, zIndex: 10, backdropFilter: "blur(8px)" }}>
      <div>
        {kicker && <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 6 }}>{kicker}</div>}
        <h1 className="font-display" style={{ fontSize: 28, fontWeight: 600, margin: 0, letterSpacing: "-0.025em" }}>{title}</h1>
        {subtitle && <div style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 4 }}>{subtitle}</div>}
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        {actions}
        <IconButton icon="bell" />
        <Avatar name="Lucía Méndez" hue={263} size={36} />
      </div>
    </div>
  );
}

const sMoney = (n) => "$" + Math.round(n).toLocaleString("es-AR");

// ───────────────────────────────────────────────────────────────
// 1. SUPER DASHBOARD
function SuperDashboard({ go }) {
  const totals = SUPER_MERCHANTS.reduce((a, m) => {
    a.mrr += m.mrr; a.gmv += m.gmv30; a.clients += m.clients; a.orders += m.orders30;
    return a;
  }, { mrr: 0, gmv: 0, clients: 0, orders: 0 });
  const ecomCount = SUPER_MERCHANTS.filter(m => m.plan.includes("Ecom")).length;
  return (
    <>
      <SuperTopBar kicker="Plataforma · Operación" title="Looppy en vivo" subtitle="Visión integral de todos los comercios, ingresos y operaciones"
        actions={<><Button variant="ghost" icon="download">Exportar</Button><Button variant="primary" icon="user-plus">Onboarding</Button></>}
      />
      <div style={{ padding: 32, display: "grid", gap: 20 }}>
        {/* Hero KPI grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {[
            { l: "Comercios activos", n: 84, d: "+6 este mes", icon: "store", tone: "accent" },
            { l: "MRR plataforma", n: sMoney(totals.mrr * 8.4), d: "+12% MoM", icon: "trending-up", tone: "success" },
            { l: "GMV 30 días", n: sMoney(totals.gmv * 1.8), d: "Cross-tenant", icon: "wallet", tone: "accent" },
            { l: "Clientes finales", n: (totals.clients * 4.2).toLocaleString("es-AR", { maximumFractionDigits: 0 }), d: "Acumulados", icon: "users-round", tone: "accent" },
          ].map((s, i) => (
            <Card key={i} style={{ padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <span style={{ width: 36, height: 36, borderRadius: 10, background: s.tone === "success" ? "rgba(52,211,153,0.14)" : "var(--accent-soft)", color: s.tone === "success" ? "#34d399" : "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={s.icon} size={18} /></span>
              </div>
              <div className="stat-num">{s.n}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6 }}>{s.l}</div>
              <div style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 2 }}>{s.d}</div>
            </Card>
          ))}
        </div>
        {/* Chart row */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
          <Card style={{ padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>Crecimiento de la plataforma</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>GMV agregado · últimos 7 días</div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <span className="chip chip-active">7 días</span><span className="chip">30 días</span><span className="chip">YTD</span>
              </div>
            </div>
            <BarChart data={[{ d: "Lun", v: 1240 }, { d: "Mar", v: 1480 }, { d: "Mié", v: 2110 }, { d: "Jue", v: 1820 }, { d: "Vie", v: 2640 }, { d: "Sáb", v: 3120 }, { d: "Dom", v: 2480 }]} height={220} />
          </Card>
          <Card style={{ padding: 24 }}>
            <div style={{ fontSize: 16, fontWeight: 600 }}>Distribución por plan</div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>84 comercios activos</div>
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <Donut data={[
                { name: "Free", value: 18, color: "#6a6a78" },
                { name: "Plus", value: 32, color: "#60a5fa" },
                { name: "Pro", value: 24, color: "#a78bfa" },
                { name: "Pro+Ecom", value: 10, color: "#f0b94e" },
              ]} size={130} />
              <div style={{ display: "grid", gap: 8, flex: 1, fontSize: 12 }}>
                {[
                  { n: "Free", v: 18, c: "#6a6a78", mrr: 0 },
                  { n: "Plus", v: 32, c: "#60a5fa", mrr: 14900 },
                  { n: "Pro", v: 24, c: "#a78bfa", mrr: 24900 },
                  { n: "Pro+Ecom", v: 10, c: "#f0b94e", mrr: 89000 },
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 10, height: 10, borderRadius: 3, background: r.c }} />
                    <span style={{ flex: 1, color: "var(--text-muted)" }}>{r.n}</span>
                    <span style={{ fontWeight: 600 }}>{r.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
        {/* Health + Support row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <Card style={{ padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <div style={{ fontSize: 16, fontWeight: 600 }}>Salud del sistema</div>
              <Badge tone="success" dot>Operacional</Badge>
            </div>
            <div style={{ display: "grid", gap: 14 }}>
              {[
                { l: "API Looppy", v: "99.98% uptime · 84ms", ok: true },
                { l: "API Ecommerce", v: "99.94% uptime · 112ms", ok: true },
                { l: "Mercado Pago webhook", v: "Reintentos: 3 últimos", ok: false },
                { l: "Base de datos primaria", v: "Replica lag 22ms", ok: true },
                { l: "Workers de envío de email", v: "0 jobs pendientes", ok: true },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 4 ? "1px solid var(--line)" : "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ width: 8, height: 8, borderRadius: 999, background: r.ok ? "#34d399" : "#f0b94e", boxShadow: r.ok ? "0 0 8px #34d399" : "0 0 8px #f0b94e" }} />
                    <span style={{ fontSize: 13, fontWeight: 500 }}>{r.l}</span>
                  </div>
                  <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}>{r.v}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card style={{ padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>Soporte · cola actual</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>7 tickets abiertos · 2 críticos</div>
              </div>
              <a onClick={() => go("super-support")} style={{ fontSize: 13, color: "var(--accent)", cursor: "pointer", fontWeight: 600 }}>Ver todos →</a>
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {SUPER_TICKETS.slice(0, 4).map(t => (
                <div key={t.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 10, background: "var(--surface-2)" }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: t.sev === "high" ? "#f87171" : t.sev === "medium" ? "#f0b94e" : "#60a5fa" }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.subj}</div>
                    <div style={{ fontSize: 11, color: "var(--text-dim)" }}>{t.merchant} · {t.since}</div>
                  </div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--text-dim)" }}>{t.id}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
        {/* Top merchants */}
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600 }}>Comercios destacados · últimos 30 días</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Ranking por GMV procesado</div>
            </div>
            <a onClick={() => go("super-merchants")} style={{ fontSize: 13, color: "var(--accent)", cursor: "pointer", fontWeight: 600 }}>Ver todos →</a>
          </div>
          <table className="tbl">
            <thead><tr><th>Comercio</th><th>Categoría</th><th>Plan</th><th>Clientes</th><th>Pedidos 30d</th><th>GMV 30d</th><th>Estado</th></tr></thead>
            <tbody>
              {SUPER_MERCHANTS.slice().sort((a, b) => b.gmv30 - a.gmv30).slice(0, 6).map(m => (
                <tr key={m.id} className="hov" style={{ cursor: "pointer" }} onClick={() => go("super-merchants")}>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 9, background: m.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 12 }}>{m.initials}</div>
                      <div><div style={{ fontWeight: 500 }}>{m.name}</div><div style={{ fontSize: 12, color: "var(--text-dim)" }}>{m.area} · Desde {m.since}</div></div>
                    </div>
                  </td>
                  <td>{m.category}</td>
                  <td><PlanBadge plan={m.plan} /></td>
                  <td style={{ fontWeight: 600 }}>{m.clients}</td>
                  <td>{m.orders30 > 0 ? m.orders30 : <span style={{ color: "var(--text-dim)" }}>—</span>}</td>
                  <td style={{ fontWeight: 600 }}>{m.gmv30 > 0 ? sMoney(m.gmv30) : <span style={{ color: "var(--text-dim)" }}>—</span>}</td>
                  <td>{m.status === "active" ? <Badge tone="success" dot>Activo</Badge> : m.status === "trial" ? <Badge tone="accent" dot>Trial</Badge> : <Badge tone="warning" dot>Pausado</Badge>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}

function PlanBadge({ plan }) {
  const map = { Free: "neutral", Plus: "accent", Pro: "accent", "Pro+Ecom": "warning" };
  return <Badge tone={map[plan] || "neutral"}>{plan}</Badge>;
}

// ───────────────────────────────────────────────────────────────
// 2. MERCHANTS LIST
function SuperMerchants({ go }) {
  const [q, setQ] = useState("");
  const [plan, setPlan] = useState("all");
  const filtered = SUPER_MERCHANTS.filter(m =>
    (plan === "all" || (plan === "ecom" ? m.plan.includes("Ecom") : m.plan === plan)) &&
    (!q || m.name.toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <>
      <SuperTopBar kicker="Plataforma" title="Comercios" subtitle={`${SUPER_MERCHANTS.length} comercios listados · ${SUPER_MERCHANTS.filter(m => m.status === "active").length} activos`}
        actions={<><Button variant="ghost" icon="download">Exportar</Button><Button variant="primary" icon="user-plus">Onboard comercio</Button></>}
      />
      <div style={{ padding: 32 }}>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: 20, display: "flex", gap: 12, alignItems: "center", borderBottom: "1px solid var(--line)", flexWrap: "wrap" }}>
            <div style={{ flex: 1, maxWidth: 380 }}><Input icon="search" placeholder="Buscar comercio, categoría, ciudad…" value={q} onChange={(e) => setQ(e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6 }}>
              {[["all", "Todos"], ["Free", "Free"], ["Plus", "Plus"], ["Pro", "Pro"], ["ecom", "Con Ecommerce"]].map(([id, l]) => (
                <span key={id} className={`chip ${plan === id ? "chip-active" : ""}`} onClick={() => setPlan(id)} style={{ cursor: "pointer" }}>{l}</span>
              ))}
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
              <IconButton icon="filter" />
              <IconButton icon="columns-3" />
            </div>
          </div>
          <table className="tbl">
            <thead><tr><th>Comercio</th><th>Categoría</th><th>Plan</th><th>MRR</th><th>Clientes</th><th>Pedidos 30d</th><th>GMV 30d</th><th>Estado</th><th></th></tr></thead>
            <tbody>
              {filtered.map(m => (
                <tr key={m.id} className="hov" style={{ cursor: "pointer" }}>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 9, background: m.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 12 }}>{m.initials}</div>
                      <div><div style={{ fontWeight: 500 }}>{m.name}</div><div style={{ fontSize: 12, color: "var(--text-dim)" }}>{m.area}</div></div>
                    </div>
                  </td>
                  <td style={{ fontSize: 13 }}>{m.category}</td>
                  <td><PlanBadge plan={m.plan} /></td>
                  <td style={{ fontWeight: 600 }}>{m.mrr > 0 ? sMoney(m.mrr) : <span style={{ color: "var(--text-dim)" }}>—</span>}</td>
                  <td>{m.clients}</td>
                  <td>{m.orders30 > 0 ? m.orders30 : <span style={{ color: "var(--text-dim)" }}>—</span>}</td>
                  <td style={{ fontWeight: 600 }}>{m.gmv30 > 0 ? sMoney(m.gmv30) : <span style={{ color: "var(--text-dim)" }}>—</span>}</td>
                  <td>{m.status === "active" ? <Badge tone="success" dot>Activo</Badge> : m.status === "trial" ? <Badge tone="accent" dot>Trial</Badge> : <Badge tone="warning" dot>Pausado</Badge>}</td>
                  <td><IconButton icon="more-horizontal" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// 3. PLANS & BILLING
function SuperPlans() {
  const plans = [
    { name: "Free", price: 0, color: "#6a6a78", features: ["Hasta 50 clientes", "1 sucursal", "Beneficios básicos"], active: 18 },
    { name: "Plus", price: 14900, color: "#60a5fa", features: ["Hasta 500 clientes", "3 sucursales", "Reportes", "Soporte por email"], active: 32 },
    { name: "Pro", price: 24900, color: "#a78bfa", features: ["Clientes ilimitados", "Sucursales ilimitadas", "Integración POS", "Soporte prioritario"], active: 24, popular: true },
    { name: "Pro+Ecom", price: 89000, color: "#f0b94e", features: ["Todo Pro", "Tienda online completa", "Hasta 10K productos", "MercadoPago / Modo / Transferencia", "Soporte 24/7"], active: 10 },
  ];
  return (
    <>
      <SuperTopBar kicker="Plataforma" title="Planes & facturación" subtitle="Estructura de precios y métricas de suscripción"
        actions={<><Button variant="ghost" icon="file-text">Política de cobranza</Button><Button variant="primary" icon="plus">Nuevo plan</Button></>}
      />
      <div style={{ padding: 32, display: "grid", gap: 20 }}>
        {/* Plan cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {plans.map(p => (
            <Card key={p.name} style={{ padding: 24, position: "relative", overflow: "hidden", border: p.popular ? "1px solid var(--accent)" : undefined }}>
              {p.popular && <span style={{ position: "absolute", top: 14, right: 14, padding: "3px 10px", background: "var(--accent)", color: "#fff", borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Más elegido</span>}
              <span style={{ width: 38, height: 38, borderRadius: 10, background: `${p.color}22`, color: p.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}><Icon name="layers" size={18} /></span>
              <div style={{ fontSize: 18, fontWeight: 700 }}>{p.name}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginTop: 6 }}>
                <span className="font-display" style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.03em" }}>{p.price === 0 ? "$0" : sMoney(p.price)}</span>
                {p.price > 0 && <span style={{ fontSize: 12, color: "var(--text-muted)" }}>/mes</span>}
              </div>
              <div style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 6, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>{p.active} comercios activos</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "grid", gap: 8 }}>
                {p.features.map((f, i) => (
                  <li key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13, color: "var(--text-muted)" }}>
                    <Icon name="check" size={14} style={{ color: "var(--accent)", marginTop: 2, flexShrink: 0 }} />{f}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        {/* Revenue snapshot */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
          <Card style={{ padding: 24 }}>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>Ingresos por suscripción · últimos 6 meses</div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>MRR mensual, sin descuentos ni cancelaciones</div>
            <BarChart data={[
              { d: "Dic", v: 1340 }, { d: "Ene", v: 1480 }, { d: "Feb", v: 1620 },
              { d: "Mar", v: 1840 }, { d: "Abr", v: 2090 }, { d: "May", v: 2380 },
            ]} height={200} />
          </Card>
          <Card style={{ padding: 24 }}>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Métricas clave</div>
            <div style={{ display: "grid", gap: 14 }}>
              {[
                { l: "MRR total", v: "$2.380.500", t: "+13.9% MoM" },
                { l: "ARPU", v: "$28.340", t: "+$2.100" },
                { l: "Churn mensual", v: "1.4%", t: "−0.2 pts" },
                { l: "LTV estimado", v: "$842k", t: "84 meses" },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < 3 ? "1px solid var(--line)" : "none" }}>
                  <div>
                    <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{r.l}</div>
                    <div style={{ fontSize: 11, color: "#34d399", fontFamily: "'JetBrains Mono', monospace", marginTop: 2 }}>{r.t}</div>
                  </div>
                  <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: 18 }}>{r.v}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        {/* Recent invoices */}
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: "18px 24px", borderBottom: "1px solid var(--line)", fontSize: 15, fontWeight: 600 }}>Últimas facturas</div>
          <table className="tbl">
            <thead><tr><th>Factura</th><th>Comercio</th><th>Plan</th><th>Período</th><th>Importe</th><th>Estado</th></tr></thead>
            <tbody>
              {[
                { id: "INV-08842", m: "Live Sports", p: "Pro+Ecom", per: "May 2026", amt: 89000, st: "paid" },
                { id: "INV-08841", m: "Forma Gym", p: "Pro+Ecom", per: "May 2026", amt: 89000, st: "paid" },
                { id: "INV-08840", m: "Atelier Nórdico", p: "Pro+Ecom", per: "May 2026", amt: 89000, st: "paid" },
                { id: "INV-08839", m: "Café Mira", p: "Pro", per: "May 2026", amt: 24900, st: "paid" },
                { id: "INV-08838", m: "Border Ramen", p: "Plus", per: "May 2026", amt: 14900, st: "overdue" },
                { id: "INV-08837", m: "Pet Friend", p: "Plus", per: "May 2026", amt: 14900, st: "paid" },
              ].map(r => (
                <tr key={r.id} className="hov">
                  <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>{r.id}</td>
                  <td style={{ fontWeight: 500 }}>{r.m}</td>
                  <td><PlanBadge plan={r.p} /></td>
                  <td style={{ color: "var(--text-muted)" }}>{r.per}</td>
                  <td style={{ fontWeight: 600 }}>{sMoney(r.amt)}</td>
                  <td>{r.st === "paid" ? <Badge tone="success" dot>Pagada</Badge> : <Badge tone="danger" dot>Vencida</Badge>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// 4. PLATFORM USERS
function SuperUsers() {
  return (
    <>
      <SuperTopBar kicker="Plataforma" title="Usuarios plataforma" subtitle="Equipo interno con acceso a Looppy. 2FA obligatorio para roles administrativos."
        actions={<Button variant="primary" icon="user-plus">Invitar usuario</Button>}
      />
      <div style={{ padding: 32 }}>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <table className="tbl">
            <thead><tr><th>Usuario</th><th>Rol</th><th>Email</th><th>2FA</th><th>Último acceso</th><th></th></tr></thead>
            <tbody>
              {SUPER_USERS.map(u => (
                <tr key={u.email} className="hov">
                  <td><div style={{ display: "flex", alignItems: "center", gap: 12 }}><Avatar name={u.name} hue={263 + u.role.length * 7} /><div style={{ fontWeight: 500 }}>{u.name}</div></div></td>
                  <td><Badge tone={u.role.includes("Super") ? "accent" : u.role.includes("Soporte") ? "neutral" : "warning"}>{u.role}</Badge></td>
                  <td style={{ fontSize: 13, color: "var(--text-muted)" }}>{u.email}</td>
                  <td>{u.twofa ? <Badge tone="success" icon="shield-check">Activado</Badge> : <Badge tone="danger" icon="shield-alert">Pendiente</Badge>}</td>
                  <td style={{ color: "var(--text-muted)" }}>{u.last}</td>
                  <td><IconButton icon="more-horizontal" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// 5. SUPPORT
function SuperSupport() {
  const [filter, setFilter] = useState("all");
  const filtered = SUPER_TICKETS.filter(t => filter === "all" || t.status === filter);
  return (
    <>
      <SuperTopBar kicker="Plataforma" title="Soporte" subtitle={`${SUPER_TICKETS.filter(t => t.status === "open").length} tickets abiertos · SLA promedio: 38 min`}
        actions={<><Button variant="ghost" icon="filter">Filtros</Button><Button variant="primary" icon="plus">Nuevo ticket</Button></>}
      />
      <div style={{ padding: 32, display: "grid", gap: 16 }}>
        <div style={{ display: "flex", gap: 8 }}>
          {[["all", "Todos"], ["open", "Abiertos"], ["in-progress", "En progreso"], ["resolved", "Resueltos"]].map(([id, l]) => (
            <span key={id} className={`chip ${filter === id ? "chip-active" : ""}`} onClick={() => setFilter(id)} style={{ cursor: "pointer" }}>{l}</span>
          ))}
        </div>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <table className="tbl">
            <thead><tr><th>Ticket</th><th>Comercio</th><th>Asunto</th><th>Severidad</th><th>Agente</th><th>Desde</th><th>Estado</th></tr></thead>
            <tbody>
              {filtered.map(t => (
                <tr key={t.id} className="hov" style={{ cursor: "pointer" }}>
                  <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>{t.id}</td>
                  <td style={{ fontWeight: 500 }}>{t.merchant}</td>
                  <td>{t.subj}</td>
                  <td><Badge tone={t.sev === "high" ? "danger" : t.sev === "medium" ? "warning" : "neutral"} dot>{t.sev === "high" ? "Alta" : t.sev === "medium" ? "Media" : "Baja"}</Badge></td>
                  <td style={{ color: "var(--text-muted)" }}>{t.agent}</td>
                  <td style={{ color: "var(--text-muted)" }}>{t.since}</td>
                  <td>{t.status === "open" ? <Badge tone="accent" dot>Abierto</Badge> : t.status === "in-progress" ? <Badge tone="warning" dot>En progreso</Badge> : <Badge tone="success" dot>Resuelto</Badge>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// 6. HEALTH
function SuperHealth() {
  return (
    <>
      <SuperTopBar kicker="Plataforma" title="Salud del sistema" subtitle="Estado en tiempo real de la infraestructura Looppy"
        actions={<Button variant="ghost" icon="refresh-cw">Actualizar</Button>}
      />
      <div style={{ padding: 32, display: "grid", gap: 20 }}>
        <Card style={{ padding: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <div style={{ width: 56, height: 56, borderRadius: 999, background: "rgba(52,211,153,0.14)", color: "#34d399", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="check-circle-2" size={28} /></div>
            <div>
              <div className="font-display" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>Todos los servicios operativos</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Última verificación: hace 12 segundos</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {[
              { l: "API Looppy", up: 99.98, ms: 84 },
              { l: "API Ecommerce", up: 99.94, ms: 112 },
              { l: "Postgres primaria", up: 99.99, ms: 22 },
              { l: "Workers", up: 99.95, ms: 18 },
              { l: "CDN imágenes", up: 99.99, ms: 14 },
              { l: "Webhooks salientes", up: 99.81, ms: 142 },
              { l: "Mercado Pago", up: 98.92, ms: 248 },
              { l: "Email transaccional", up: 99.99, ms: 410 },
            ].map((s, i) => (
              <div key={i} style={{ padding: 14, border: "1px solid var(--line)", borderRadius: 12, background: "var(--surface-2)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{s.l}</span>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: s.up > 99 ? "#34d399" : "#f0b94e" }} />
                </div>
                <div style={{ fontSize: 11, color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.06em" }}>{s.up}% UPTIME · {s.ms}ms</div>
                <div style={{ display: "flex", gap: 2, marginTop: 8 }}>
                  {Array.from({ length: 30 }).map((_, j) => <span key={j} style={{ flex: 1, height: 14, borderRadius: 2, background: Math.random() > (s.up > 99 ? 0.03 : 0.1) ? "#34d399" : "#f0b94e", opacity: 0.6 + (j / 30) * 0.4 }} />)}
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card style={{ padding: 24 }}>
          <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 14 }}>Incidentes recientes</div>
          <div style={{ display: "grid", gap: 10 }}>
            {[
              { sev: "minor", t: "Webhook MercadoPago — picos de latencia", when: "Hace 2h · resolviéndose", st: "monitoring" },
              { sev: "resolved", t: "Mantenimiento programado base secundaria", when: "Ayer · 02:00–04:00", st: "resolved" },
              { sev: "resolved", t: "CDN intermitente en zona AR-Norte", when: "26 May · 14:20", st: "resolved" },
            ].map((i, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", gap: 12, padding: 14, borderRadius: 10, background: "var(--surface-2)" }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: i.st === "monitoring" ? "#f0b94e" : "#34d399" }} />
                <div style={{ flex: 1 }}><div style={{ fontSize: 14, fontWeight: 500 }}>{i.t}</div><div style={{ fontSize: 12, color: "var(--text-dim)" }}>{i.when}</div></div>
                {i.st === "monitoring" ? <Badge tone="warning" dot>Monitoreando</Badge> : <Badge tone="success" dot>Resuelto</Badge>}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// 7. LOGS / AUDIT
function SuperLogs() {
  return (
    <>
      <SuperTopBar kicker="Plataforma" title="Auditoría · Log en vivo" subtitle="Eventos cross-tenant en tiempo real"
        actions={<><Button variant="ghost" icon="download">Exportar</Button><Button variant="ghost" icon="filter">Filtros</Button></>}
      />
      <div style={{ padding: 32 }}>
        <Card style={{ padding: 0, overflow: "hidden", background: "#080810" }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 10, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "#34d399", boxShadow: "0 0 8px #34d399" }} />
            STREAM EN VIVO · ÚLTIMOS 60 MINUTOS · 1.428 EVENTOS
          </div>
          <div style={{ padding: "0 8px", fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>
            {SUPER_LOGS.map((l, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "90px 70px 1fr", gap: 14, padding: "10px 14px", borderBottom: i < SUPER_LOGS.length - 1 ? "1px solid var(--line)" : "none", alignItems: "center" }}>
                <span style={{ color: "var(--text-dim)" }}>{l.time}</span>
                <span style={{ padding: "2px 8px", borderRadius: 4, background: l.level === "error" ? "rgba(248,113,113,0.18)" : l.level === "warn" ? "rgba(240,185,78,0.18)" : "rgba(96,165,250,0.18)", color: l.level === "error" ? "#f87171" : l.level === "warn" ? "#f0b94e" : "#60a5fa", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", textAlign: "center" }}>{l.level}</span>
                <div style={{ display: "flex", gap: 10, alignItems: "center", minWidth: 0 }}>
                  <span style={{ color: "var(--accent)", fontWeight: 600 }}>{l.who}</span>
                  <span style={{ color: "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{l.what}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// 8. GLOBAL CONFIG
function SuperConfig() {
  return (
    <>
      <SuperTopBar kicker="Plataforma" title="Configuración global" subtitle="Parámetros que aplican a todos los comercios" />
      <div style={{ padding: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <Card style={{ padding: 24 }}>
          <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Reglas de puntos por defecto</div>
          <div style={{ display: "grid", gap: 12 }}>
            <Field label="Puntos por cada $1 gastado"><Input defaultValue="0.5" /></Field>
            <Field label="Vencimiento de puntos (días)"><Input defaultValue="365" /></Field>
            <Field label="Puntos mínimos para canje"><Input defaultValue="50" /></Field>
          </div>
        </Card>
        <Card style={{ padding: 24 }}>
          <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Integraciones globales</div>
          <div style={{ display: "grid", gap: 12 }}>
            <Toggle label="Mercado Pago (default)" defaultChecked />
            <Toggle label="Modo (billetera digital)" defaultChecked />
            <Toggle label="Email transaccional · Resend" defaultChecked />
            <Toggle label="SMS / WhatsApp · Twilio" defaultChecked />
            <Toggle label="Andreani API · envíos" defaultChecked />
            <Toggle label="Sandbox mode · simular pagos" />
          </div>
        </Card>
        <Card style={{ padding: 24, gridColumn: "1 / -1" }}>
          <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Branding y dominios</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            <Field label="Dominio principal"><Input defaultValue="looppy.app" /></Field>
            <Field label="Dominio tiendas"><Input defaultValue="*.looppy.shop" /></Field>
            <Field label="Color de marca"><Input defaultValue="#a78bfa" /></Field>
          </div>
        </Card>
      </div>
    </>
  );
}

Object.assign(window, { SuperShell, SuperDashboard, SuperMerchants, SuperPlans, SuperUsers, SuperSupport, SuperHealth, SuperLogs, SuperConfig });
