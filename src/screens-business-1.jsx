// Business app shell + screens
const BIZ_NAV = [
  { id: "biz-dashboard", icon: "layout-dashboard", label: "Dashboard" },
  { id: "biz-clients", icon: "users", label: "Clientes" },
  { id: "biz-visit", icon: "qr-code", label: "Registrar visita" },
  { id: "biz-benefits", icon: "gift", label: "Beneficios" },
  { id: "biz-rules", icon: "settings-2", label: "Reglas y rangos" },
  { id: "biz-redeem", icon: "ticket", label: "Canjear" },
  { id: "biz-history", icon: "history", label: "Historial" },
  { id: "biz-campaigns", icon: "megaphone", label: "Campañas" },
  { id: "biz-branches", icon: "building-2", label: "Sucursales" },
  { id: "biz-team", icon: "users-round", label: "Equipo" },
  { id: "biz-integrations", icon: "puzzle", label: "Integraciones" },
  { id: "biz-plan", icon: "credit-card", label: "Mi plan" },
  { id: "modules", icon: "layers", label: "Módulos & extensiones", highlight2: true },
  { id: "ecom-dashboard", icon: "shopping-bag", label: "Ecommerce", badge: "NUEVO", highlight: true },
];

function BizShell({ current, go, children, onLogout, onSwitchClient }) {
  return (
    <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "260px 1fr", background: "var(--bg)" }}>
      {/* Sidebar */}
      <aside style={{ borderRight: "1px solid var(--line)", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 8, background: "var(--surface)", position: "sticky", top: 0, height: "100vh" }}>
        <div style={{ padding: "8px 8px 18px" }}><LogoMark size={28} /></div>
        <div style={{ background: "var(--surface-2)", borderRadius: 12, padding: 12, border: "1px solid var(--line)", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #7c5a3a, #4a3422)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="coffee" size={16} style={{ color: "white" }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Café Mira</div>
              <div style={{ fontSize: 11, color: "var(--text-dim)" }}>Plan Pro · Palermo</div>
            </div>
            <Icon name="chevrons-up-down" size={14} style={{ color: "var(--text-dim)" }} />
          </div>
        </div>
        <div style={{ display: "grid", gap: 2 }}>
          {BIZ_NAV.map(n => (
            <div key={n.id} className={`nav-item ${current === n.id ? "active" : ""}`} onClick={() => go(n.id)} style={n.highlight ? { background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)", color: "#fff", border: "1px solid #2a2a2a", marginTop: 8 } : n.highlight2 ? { borderTop: "1px dashed var(--line)", paddingTop: 14, marginTop: 8, borderRadius: 0 } : {}}>
              <Icon name={n.icon} size={17} />
              <span style={{ flex: 1 }}>{n.label}</span>
              {n.badge && <span style={{ background: n.highlight ? "#fff" : "var(--accent)", color: n.highlight ? "#0a0a0a" : "#fff", fontSize: 9, fontWeight: 800, padding: "2px 6px", borderRadius: 4, letterSpacing: "0.06em" }}>{n.badge}</span>}
              {current === n.id && <span className="nav-dot" />}
            </div>
          ))}
        </div>
        <div style={{ marginTop: "auto", display: "grid", gap: 4 }}>
          <div className="nav-item" onClick={onSwitchClient}><Icon name="smartphone" size={17} /> Vista cliente</div>
          <div className="nav-item" onClick={onLogout}><Icon name="log-out" size={17} /> Salir</div>
        </div>
      </aside>
      {/* Main */}
      <main style={{ minWidth: 0 }}>{children}</main>
    </div>
  );
}

function BizTopBar({ title, subtitle, actions }) {
  return (
    <div style={{ padding: "24px 32px", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, background: "var(--bg)", position: "sticky", top: 0, zIndex: 10, backdropFilter: "blur(8px)" }}>
      <div>
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

// 1. Dashboard
function BizDashboard({ go, openVisit }) {
  const D = window.LOOPPY_DATA;
  return (
    <>
      <BizTopBar title="Buen día, Lucía" subtitle="Esto pasó hoy en Café Mira"
        actions={<Button variant="primary" icon="plus" onClick={openVisit}>Nueva visita</Button>}
      />
      <div style={{ padding: 32, display: "grid", gap: 20 }}>
        {/* Top stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {[
            { l: "Clientes registrados", n: "142", d: "+8 esta semana", icon: "users", tone: "accent" },
            { l: "Visitas hoy", n: "34", d: "+12 vs ayer", icon: "footprints", tone: "success" },
            { l: "Puntos entregados", n: "3,420", d: "esta semana", icon: "sparkles", tone: "accent" },
            { l: "Beneficios canjeados", n: "12", d: "este mes: 89", icon: "gift", tone: "warning" },
          ].map((s, i) => (
            <Card key={i} style={{ padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <span style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: s.tone === "success" ? "rgba(52,211,153,0.14)" : s.tone === "warning" ? "rgba(240,185,78,0.14)" : "var(--accent-soft)",
                  color: s.tone === "success" ? "#34d399" : s.tone === "warning" ? "#f0b94e" : "var(--accent)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}><Icon name={s.icon} size={18} /></span>
                <Icon name="more-horizontal" size={16} style={{ color: "var(--text-dim)" }} />
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>Visitas por día</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Últimos 7 días — 237 visitas en total</div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <span className="chip chip-active">7 días</span>
                <span className="chip">30 días</span>
                <span className="chip">90 días</span>
              </div>
            </div>
            <BarChart data={D.VISITS_WEEK} height={220} />
          </Card>
          <Card style={{ padding: 24 }}>
            <div style={{ fontSize: 16, fontWeight: 600 }}>Distribución de clientes</div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Por nivel de fidelidad</div>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <Donut data={D.TIER_DIST} size={140} />
              <div style={{ display: "grid", gap: 10, flex: 1 }}>
                {D.TIER_DIST.map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
                    <span style={{ width: 10, height: 10, borderRadius: 3, background: t.color }} />
                    <span style={{ flex: 1, color: "var(--text-muted)" }}>{t.name}</span>
                    <span style={{ fontWeight: 600 }}>{t.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
        {/* Bottom row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <Card style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 16, fontWeight: 600 }}>Clientes más activos</div>
              <a onClick={() => go("biz-clients")} style={{ fontSize: 13, color: "var(--accent)", cursor: "pointer", fontWeight: 600 }}>Ver todos →</a>
            </div>
            <div>
              {D.CLIENTS.slice(0, 5).map(c => (
                <div key={c.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 24px", borderBottom: "1px solid var(--line)" }}>
                  <Avatar name={c.name} hue={c.hue} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: "var(--text-dim)" }}>{c.visits} visitas · {c.lastVisit}</div>
                  </div>
                  <TierBadge tier={c.tier} />
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--accent)" }}>{c.points} pts</div>
                </div>
              ))}
            </div>
          </Card>
          <Card style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 16, fontWeight: 600 }}>Premios más canjeados</div>
              <a onClick={() => go("biz-benefits")} style={{ fontSize: 13, color: "var(--accent)", cursor: "pointer", fontWeight: 600 }}>Gestionar →</a>
            </div>
            <div style={{ padding: 24, display: "grid", gap: 18 }}>
              {D.TOP_REDEEMED.map((t, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{t.name}</span>
                    <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{t.count} canjes</span>
                  </div>
                  <div className="prog"><div className="prog-bar" style={{ width: `${t.share * 2.5}%` }} /></div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

// 2. Clients
function BizClients({ openClient, openVisit }) {
  const D = window.LOOPPY_DATA;
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("all");
  const filtered = D.CLIENTS.filter(c =>
    (filter === "all" || c.tier === filter) &&
    (!q || c.name.toLowerCase().includes(q.toLowerCase()) || c.email.toLowerCase().includes(q.toLowerCase()) || c.phone.includes(q))
  );
  return (
    <>
      <BizTopBar title="Clientes" subtitle={`${D.CLIENTS.length} clientes registrados — ${D.CLIENTS.filter(c=>c.tier==="vip"||c.tier==="premium").length} activos esta semana`}
        actions={<><Button variant="ghost" icon="upload">Importar</Button><Button variant="primary" icon="plus">Nuevo cliente</Button></>}
      />
      <div style={{ padding: 32 }}>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: 20, display: "flex", gap: 12, alignItems: "center", borderBottom: "1px solid var(--line)" }}>
            <div style={{ flex: 1, maxWidth: 380 }}>
              <Input icon="search" placeholder="Buscar por nombre, DNI, teléfono o email…" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              {[{ id: "all", l: "Todos" }, { id: "nuevo", l: "Nuevos" }, { id: "frecuente", l: "Frecuentes" }, { id: "premium", l: "Premium" }, { id: "vip", l: "VIP" }].map(f => (
                <span key={f.id} className={`chip ${filter === f.id ? "chip-active" : ""}`} onClick={() => setFilter(f.id)} style={{ cursor: "pointer" }}>{f.l}</span>
              ))}
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
              <IconButton icon="filter" />
              <IconButton icon="download" />
            </div>
          </div>
          <table className="tbl">
            <thead>
              <tr>
                <th>Cliente</th><th>Contacto</th><th>Nivel</th><th>Puntos</th><th>Visitas</th><th>Última visita</th><th>Gastado</th><th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id} className="hov" style={{ cursor: "pointer" }} onClick={() => openClient(c.id)}>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <Avatar name={c.name} hue={c.hue} />
                      <div>
                        <div style={{ fontWeight: 500 }}>{c.name}</div>
                        <div style={{ fontSize: 12, color: "var(--text-dim)" }}>Cliente desde {c.joined}</div>
                      </div>
                    </div>
                  </td>
                  <td><div style={{ fontSize: 13 }}>{c.phone}</div><div style={{ fontSize: 12, color: "var(--text-dim)" }}>{c.email}</div></td>
                  <td><TierBadge tier={c.tier} /></td>
                  <td style={{ fontWeight: 600, color: "var(--accent)" }}>{c.points}</td>
                  <td>{c.visits}</td>
                  <td style={{ color: "var(--text-muted)" }}>{c.lastVisit}</td>
                  <td style={{ fontWeight: 500 }}>${c.spent.toLocaleString("es-AR")}</td>
                  <td><IconButton icon="chevron-right" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}

// 2b. Client detail
function BizClientDetail({ clientId, back, openRedeem, openVisit }) {
  const D = window.LOOPPY_DATA;
  const c = D.CLIENTS.find(x => x.id === clientId) || D.CLIENTS[0];
  const tier = D.TIERS.find(t => t.id === c.tier);
  const nextTier = D.TIERS[D.TIERS.findIndex(t => t.id === c.tier) + 1];
  const progress = nextTier ? Math.min(100, (c.visits / nextTier.visits) * 100) : 100;
  const visits = D.VISITS.filter(v => v.clientId === c.id).concat(D.VISITS.slice(0, 4));
  return (
    <>
      <BizTopBar title={c.name} subtitle={`Cliente desde ${c.joined} · ${c.email}`}
        actions={<><Button variant="ghost" icon="message-square">Mensaje</Button><Button variant="ghost" icon="edit-2">Editar</Button><Button variant="primary" icon="plus" onClick={openVisit}>Registrar visita</Button></>}
      />
      <div style={{ padding: 32, display: "grid", gridTemplateColumns: "1fr 360px", gap: 20 }}>
        <div style={{ display: "grid", gap: 20 }}>
          <Card style={{ padding: 24, display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 24, alignItems: "center" }}>
            <Avatar name={c.name} hue={c.hue} size={88} />
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <h2 className="font-display" style={{ fontSize: 32, fontWeight: 600, margin: 0, letterSpacing: "-0.025em" }}>{c.name}</h2>
                <TierBadge tier={c.tier} />
              </div>
              <div style={{ color: "var(--text-muted)", fontSize: 14, display: "flex", gap: 16 }}>
                <span><Icon name="phone" size={13} /> {c.phone}</span>
                <span><Icon name="mail" size={13} /> {c.email}</span>
              </div>
              {nextTier && (
                <div style={{ marginTop: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--text-muted)", marginBottom: 6 }}>
                    <span>Faltan {nextTier.visits - c.visits} visitas para <strong style={{ color: tier?.color }}>{nextTier.name}</strong></span>
                    <span>{c.visits} / {nextTier.visits}</span>
                  </div>
                  <div className="prog"><div className="prog-bar" style={{ width: `${progress}%` }} /></div>
                </div>
              )}
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 12, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Puntos disponibles</div>
              <div className="font-display" style={{ fontSize: 56, fontWeight: 600, color: "var(--accent)", letterSpacing: "-0.04em", lineHeight: 1 }}>{c.points}</div>
              <Button variant="soft" size="sm" icon="ticket" onClick={openRedeem} style={{ marginTop: 8 }}>Canjear premio</Button>
            </div>
          </Card>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {[
              { l: "Total visitas", n: c.visits, icon: "footprints" },
              { l: "Total gastado", n: `$${(c.spent/1000).toFixed(1)}k`, icon: "wallet" },
              { l: "Premios canjeados", n: 7, icon: "gift" },
              { l: "Ticket promedio", n: `$${Math.round(c.spent/c.visits/100)*100}`, icon: "trending-up" },
            ].map((s, i) => (
              <Card key={i} style={{ padding: 18 }}>
                <Icon name={s.icon} size={18} style={{ color: "var(--text-dim)", marginBottom: 12 }} />
                <div className="font-display" style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.03em" }}>{s.n}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{s.l}</div>
              </Card>
            ))}
          </div>
          <Card style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>Historial de actividad</div>
              <div style={{ display: "flex", gap: 6 }}>
                <span className="chip chip-active">Todo</span>
                <span className="chip">Visitas</span>
                <span className="chip">Canjes</span>
              </div>
            </div>
            <div>
              {visits.slice(0, 8).map((v, i) => (
                <div key={i} style={{ padding: "14px 20px", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: v.redeemed ? "rgba(240,185,78,0.14)" : "var(--accent-soft)", color: v.redeemed ? "#f0b94e" : "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={v.redeemed ? "gift" : "footprints"} size={16} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{v.redeemed ? "Canjeó beneficio" : "Visita registrada"}{v.note ? ` — ${v.note}` : ""}</div>
                    <div style={{ fontSize: 12, color: "var(--text-dim)" }}>{v.location} · {v.when} · {v.time}</div>
                  </div>
                  {!v.redeemed && <Badge tone="accent">+{v.points} pts</Badge>}
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div style={{ display: "grid", gap: 20, alignContent: "start" }}>
          <Card style={{ padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Próximo beneficio</div>
            <div style={{ background: "var(--accent-soft)", padding: 16, borderRadius: 12, textAlign: "center" }}>
              <Icon name="gift" size={32} style={{ color: "var(--accent)", marginBottom: 8 }} />
              <div style={{ fontWeight: 600 }}>Café gratis</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", margin: "4px 0 12px" }}>80 puntos</div>
              <Button variant="primary" size="sm" style={{ width: "100%", justifyContent: "center" }} onClick={openRedeem}>Canjear ahora</Button>
            </div>
          </Card>
          <Card style={{ padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Tags y notas</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
              <span className="chip">Capuchino</span>
              <span className="chip">Mañanas</span>
              <span className="chip">Vegetariano</span>
              <span className="chip" style={{ borderStyle: "dashed", color: "var(--text-dim)" }}>+ agregar</span>
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>Suele venir los lunes y miércoles a la mañana. Le gusta sentarse cerca de la ventana.</div>
          </Card>
          <Card style={{ padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Comunicación</div>
            <div style={{ display: "grid", gap: 10 }}>
              <Button variant="ghost" icon="message-circle" style={{ width: "100%", justifyContent: "flex-start" }}>WhatsApp</Button>
              <Button variant="ghost" icon="mail" style={{ width: "100%", justifyContent: "flex-start" }}>Email</Button>
              <Button variant="ghost" icon="bell" style={{ width: "100%", justifyContent: "flex-start" }}>Push notification</Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

window.BizShell = BizShell;
window.BizTopBar = BizTopBar;
window.BizDashboard = BizDashboard;
window.BizClients = BizClients;
window.BizClientDetail = BizClientDetail;
