// LOOPPY — Pantallas extra del dueño de negocio
// Sucursales · Equipo · Campañas · Mi plan · Integraciones

const moneyARS = (n) => "$" + Math.round(n).toLocaleString("es-AR");

// ───────────────────────────────────────────────────────────────
// SUCURSALES
function BizBranches() {
  const branches = [
    { id: 1, name: "Sucursal Centro", addr: "Av. Corrientes 1245, CABA", hours: "Lun-Sáb 9 a 22h", phone: "+54 11 4555 1234", clients: 78, visits30: 412, active: true, primary: true },
    { id: 2, name: "Sucursal Palermo", addr: "Honduras 5598, CABA", hours: "Mar-Dom 10 a 23h", phone: "+54 11 4555 5678", clients: 64, visits30: 318, active: true },
    { id: 3, name: "Sucursal Belgrano", addr: "Av. Cabildo 2102, CABA", hours: "Lun-Vie 8 a 20h", phone: "+54 11 4555 9012", clients: 0, visits30: 0, active: false, label: "Próximamente" },
  ];
  return (
    <>
      <BizTopBar title="Sucursales" subtitle={`${branches.filter(b => b.active).length} activas · ${branches.length} en total · stock y promos diferenciados`}
        actions={<><Button variant="ghost" icon="map">Ver mapa</Button><Button variant="primary" icon="plus">Nueva sucursal</Button></>}
      />
      <div style={{ padding: 32, display: "grid", gap: 16 }}>
        <Card style={{ padding: 20, background: "linear-gradient(135deg, var(--accent), hsl(263 70% 26%))", color: "#fff", display: "flex", alignItems: "center", gap: 16, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -60, right: -60, width: 180, height: 180, background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 60%)" }} />
          <Icon name="building-2" size={26} style={{ position: "relative" }} />
          <div style={{ flex: 1, position: "relative" }}>
            <div className="font-display" style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em" }}>Multi-sucursal avanzado</div>
            <div style={{ fontSize: 13, opacity: 0.92, marginTop: 2 }}>Activá stock, promos, precios y reportes diferenciados por sucursal. Disponible en Plan Pro+.</div>
          </div>
          <Badge tone="vip" icon="crown">Plan Pro+</Badge>
        </Card>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {branches.map(b => (
            <Card key={b.id} style={{ padding: 24, position: "relative", opacity: b.active ? 1 : 0.7 }}>
              {b.primary && <Badge tone="accent" style={{ position: "absolute", top: 16, right: 16 }}>Principal</Badge>}
              {b.label && <Badge tone="warning" style={{ position: "absolute", top: 16, right: 16 }}>{b.label}</Badge>}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <span style={{ width: 44, height: 44, borderRadius: 12, background: b.active ? "var(--accent-soft)" : "var(--surface-3)", color: b.active ? "var(--accent)" : "var(--text-dim)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="building-2" size={20} /></span>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 600 }}>{b.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{b.addr}</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, padding: 14, background: "var(--surface-2)", borderRadius: 12, marginBottom: 14 }}>
                <div><div style={{ fontSize: 11, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Clientes</div><div className="font-display" style={{ fontSize: 22, fontWeight: 600 }}>{b.clients}</div></div>
                <div><div style={{ fontSize: 11, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Visitas (30d)</div><div className="font-display" style={{ fontSize: 22, fontWeight: 600 }}>{b.visits30}</div></div>
              </div>
              <div style={{ display: "grid", gap: 8, marginBottom: 14, fontSize: 13 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Icon name="clock" size={13} style={{ color: "var(--text-dim)" }} /> {b.hours}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Icon name="phone" size={13} style={{ color: "var(--text-dim)" }} /> {b.phone}</div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <Button variant="ghost" size="sm" icon="edit-2" style={{ flex: 1, justifyContent: "center" }}>Editar</Button>
                <Button variant="ghost" size="sm" icon="bar-chart-3" style={{ flex: 1, justifyContent: "center" }}>Reportes</Button>
              </div>
            </Card>
          ))}
          {/* Add new */}
          <Card style={{ padding: 24, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px dashed var(--line-strong)", background: "transparent", cursor: "pointer", minHeight: 280, gap: 10 }}>
            <Icon name="plus-circle" size={28} style={{ color: "var(--text-dim)" }} />
            <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-muted)" }}>Agregar sucursal</div>
            <div style={{ fontSize: 12, color: "var(--text-dim)", textAlign: "center", maxWidth: 200 }}>Sumá una nueva ubicación con sus propios horarios y stock</div>
          </Card>
        </div>
      </div>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// EQUIPO
function BizTeam() {
  const team = [
    { name: "Lucía Méndez", role: "Owner", email: "lucia@cafemira.com", branch: "Todas", last: "Ahora", hue: 263, perms: ["full"] },
    { name: "Martín Cano", role: "Manager", email: "martin@cafemira.com", branch: "Centro + Palermo", last: "Hace 12 min", hue: 200, perms: ["clients", "benefits", "reports"] },
    { name: "Sol Ortega", role: "Cajero", email: "sol@cafemira.com", branch: "Centro", last: "Hace 1 h", hue: 340, perms: ["pos", "visits"] },
    { name: "Bruno Fierro", role: "Cajero", email: "bruno@cafemira.com", branch: "Palermo", last: "Hoy 12:14", hue: 142, perms: ["pos", "visits"] },
    { name: "Andrea Lasalle", role: "Marketing", email: "andrea@cafemira.com", branch: "Todas", last: "Ayer", hue: 28, perms: ["benefits", "campaigns", "reports"] },
  ];
  const roleColors = { Owner: "vip", Manager: "accent", Cajero: "neutral", Marketing: "warning" };
  const permLabels = { full: "Acceso total", clients: "Clientes", benefits: "Beneficios", reports: "Reportes", pos: "POS", visits: "Visitas", campaigns: "Campañas" };
  return (
    <>
      <BizTopBar title="Equipo" subtitle={`${team.length} usuarios con acceso al panel · 2FA activado en ${team.length - 1} cuentas`}
        actions={<Button variant="primary" icon="user-plus">Invitar usuario</Button>}
      />
      <div style={{ padding: 32, display: "grid", gap: 20 }}>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: 20, display: "flex", gap: 12, alignItems: "center", borderBottom: "1px solid var(--line)" }}>
            <div style={{ flex: 1, maxWidth: 380 }}><Input icon="search" placeholder="Buscar por nombre o email…" /></div>
            <div style={{ display: "flex", gap: 6 }}>
              <span className="chip chip-active">Todos · {team.length}</span>
              <span className="chip">Owner · 1</span>
              <span className="chip">Manager · 1</span>
              <span className="chip">Cajeros · 2</span>
              <span className="chip">Marketing · 1</span>
            </div>
          </div>
          <table className="tbl">
            <thead><tr><th>Usuario</th><th>Rol</th><th>Sucursal</th><th>Permisos</th><th>Última actividad</th><th></th></tr></thead>
            <tbody>
              {team.map(t => (
                <tr key={t.email} className="hov">
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <Avatar name={t.name} hue={t.hue} />
                      <div><div style={{ fontWeight: 500 }}>{t.name}</div><div style={{ fontSize: 12, color: "var(--text-dim)" }}>{t.email}</div></div>
                    </div>
                  </td>
                  <td><Badge tone={roleColors[t.role] || "neutral"}>{t.role}</Badge></td>
                  <td style={{ fontSize: 13 }}>{t.branch}</td>
                  <td>
                    <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                      {t.perms.slice(0, 3).map(p => <span key={p} className="chip" style={{ fontSize: 10 }}>{permLabels[p]}</span>)}
                      {t.perms.length > 3 && <span className="chip" style={{ fontSize: 10 }}>+{t.perms.length - 3}</span>}
                    </div>
                  </td>
                  <td style={{ color: "var(--text-muted)", fontSize: 13 }}>{t.last}</td>
                  <td><IconButton icon="more-horizontal" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card style={{ padding: 24 }}>
          <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Plantillas de roles</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {[
              { n: "Owner", d: "Acceso total. Configuración, plan, equipo.", i: "crown", c: "#f0b94e" },
              { n: "Manager", d: "Clientes, beneficios, reportes, multi-sucursal.", i: "briefcase", c: "var(--accent)" },
              { n: "Cajero", d: "Solo POS y registro de visitas.", i: "scan-line", c: "#60a5fa" },
              { n: "Marketing", d: "Campañas, beneficios y reportes.", i: "megaphone", c: "#f87171" },
            ].map(r => (
              <div key={r.n} style={{ padding: 16, background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 12 }}>
                <span style={{ width: 32, height: 32, borderRadius: 9, background: `${r.c}26`, color: r.c, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}><Icon name={r.i} size={16} /></span>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{r.n}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4, lineHeight: 1.4 }}>{r.d}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// CAMPAÑAS
function BizCampaigns() {
  const campaigns = [
    { id: "c1", name: "Reactivación inactivos 90 días", channel: "email", segment: "168 clientes", sent: 168, opens: 92, clicks: 41, redeem: 14, status: "active", sentAt: "Hace 3 h", revenue: 184000 },
    { id: "c2", name: "VIP exclusivo: 2x1 fines de semana", channel: "whatsapp", segment: "12 clientes VIP", sent: 12, opens: 11, clicks: 9, redeem: 7, status: "active", sentAt: "Ayer 18:00", revenue: 86000 },
    { id: "c3", name: "Cumpleañeros del mes", channel: "auto", segment: "Automática · cumpleaños", sent: 18, opens: 16, clicks: 12, redeem: 8, status: "automated", sentAt: "Recurrente", revenue: 124000 },
    { id: "c4", name: "Promo Día de la Madre", channel: "email", segment: "284 clientes", sent: 284, opens: 184, clicks: 78, redeem: 38, status: "ended", sentAt: "Hace 14 días", revenue: 412000 },
    { id: "c5", name: "Carrito abandonado · 24h", channel: "auto", segment: "Automática · ecommerce", sent: 42, opens: 38, clicks: 22, redeem: 12, status: "automated", sentAt: "Recurrente", revenue: 196000 },
    { id: "c6", name: "Promo invierno · borradores", channel: "email", segment: "Sin enviar", sent: 0, opens: 0, clicks: 0, redeem: 0, status: "draft", sentAt: "—", revenue: 0 },
  ];
  const totalRevenue = campaigns.reduce((s, c) => s + c.revenue, 0);
  const channelIcons = { email: "mail", whatsapp: "message-circle", sms: "smartphone", push: "bell", auto: "workflow" };
  return (
    <>
      <BizTopBar title="Campañas" subtitle={`${campaigns.filter(c => c.status === "active" || c.status === "automated").length} activas · ingresos atribuidos ${moneyARS(totalRevenue)}`}
        actions={<><Button variant="ghost" icon="zap">Plantillas</Button><Button variant="primary" icon="plus">Nueva campaña</Button></>}
      />
      <div style={{ padding: 32, display: "grid", gap: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {[
            { l: "Mensajes enviados", n: campaigns.reduce((s, c) => s + c.sent, 0), d: "Últimos 30 días", i: "send" },
            { l: "Tasa de apertura", n: "67%", d: "+8% vs mes ant.", i: "mail-open" },
            { l: "Tasa de clic", n: "31%", d: "Promedio industria 22%", i: "mouse-pointer-click" },
            { l: "Ingresos atribuidos", n: moneyARS(totalRevenue), d: "Este mes", i: "trending-up" },
          ].map((s, i) => (
            <Card key={i} style={{ padding: 18 }}>
              <Icon name={s.i} size={16} style={{ color: "var(--text-dim)", marginBottom: 8 }} />
              <div className="stat-num" style={{ fontSize: 24 }}>{s.n}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{s.l}</div>
              <div style={{ fontSize: 11, color: "var(--text-dim)" }}>{s.d}</div>
            </Card>
          ))}
        </div>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: 20, borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: 15, fontWeight: 600 }}>Campañas recientes</div>
            <div style={{ display: "flex", gap: 6 }}>
              <span className="chip chip-active">Todas</span>
              <span className="chip">Activas</span>
              <span className="chip">Automatizadas</span>
              <span className="chip">Borradores</span>
            </div>
          </div>
          <table className="tbl">
            <thead><tr><th>Campaña</th><th>Canal</th><th>Segmento</th><th>Enviados</th><th>Aperturas</th><th>Canjes</th><th>Ingresos</th><th>Estado</th></tr></thead>
            <tbody>
              {campaigns.map(c => (
                <tr key={c.id} className="hov" style={{ cursor: "pointer" }}>
                  <td>
                    <div style={{ fontWeight: 500 }}>{c.name}</div>
                    <div style={{ fontSize: 11, color: "var(--text-dim)" }}>{c.sentAt}</div>
                  </td>
                  <td>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 999, background: "var(--surface-2)", fontSize: 12, fontWeight: 500 }}>
                      <Icon name={channelIcons[c.channel] || "send"} size={12} /> {c.channel}
                    </div>
                  </td>
                  <td style={{ fontSize: 13, color: "var(--text-muted)" }}>{c.segment}</td>
                  <td style={{ fontWeight: 600 }}>{c.sent || "—"}</td>
                  <td>{c.opens > 0 ? <span>{c.opens} <span style={{ color: "var(--text-dim)", fontSize: 11 }}>({Math.round((c.opens / c.sent) * 100)}%)</span></span> : "—"}</td>
                  <td>{c.redeem > 0 ? <Badge tone="accent">{c.redeem}</Badge> : "—"}</td>
                  <td style={{ fontWeight: 600 }}>{c.revenue > 0 ? moneyARS(c.revenue) : "—"}</td>
                  <td>{c.status === "active" ? <Badge tone="success" dot>Activa</Badge> : c.status === "automated" ? <Badge tone="accent" icon="workflow">Auto</Badge> : c.status === "draft" ? <Badge tone="neutral">Borrador</Badge> : <Badge tone="neutral">Finalizada</Badge>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card style={{ padding: 24 }}>
          <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Automatizaciones listas para usar</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              { n: "Bienvenida nuevo cliente", d: "Email + 100 pts de regalo al registrarse", i: "user-plus", on: true },
              { n: "Cumpleaños del cliente", d: "WhatsApp con código de beneficio", i: "cake-slice", on: true },
              { n: "Carrito abandonado", d: "Email 24h después de dejar productos", i: "shopping-cart", on: true },
              { n: "Reactivación 90 días", d: "Volvé y te damos 200 pts", i: "rotate-ccw", on: true },
              { n: "Postcompra · pedí reseña", d: "7 días después de la entrega", i: "star", on: false },
              { n: "Aniversario en Looppy", d: "Beneficio anual automático", i: "gift", on: false },
            ].map(a => (
              <div key={a.n} style={{ padding: 16, background: "var(--surface-2)", borderRadius: 12, border: "1px solid var(--line)", display: "flex", gap: 12 }}>
                <span style={{ width: 36, height: 36, borderRadius: 10, background: a.on ? "var(--accent-soft)" : "var(--surface-3)", color: a.on ? "var(--accent)" : "var(--text-dim)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={a.i} size={16} /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{a.n}</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2, lineHeight: 1.4 }}>{a.d}</div>
                </div>
                <Toggle defaultChecked={a.on} />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// MI PLAN
function BizPlan() {
  return (
    <>
      <BizTopBar title="Mi plan" subtitle="Plan Pro+Ecom · facturado mensualmente desde marzo 2024" />
      <div style={{ padding: 32, display: "grid", gap: 20 }}>
        {/* Current plan card */}
        <Card style={{ padding: 28, background: "linear-gradient(135deg, var(--accent), hsl(263 70% 26%))", color: "#fff", position: "relative", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr auto", gap: 28, alignItems: "center" }}>
          <div style={{ position: "absolute", top: -100, right: -100, width: 300, height: 300, background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 60%)" }} />
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.85, fontWeight: 700, marginBottom: 6 }}>Plan actual</div>
            <h2 className="font-display" style={{ fontSize: 36, fontWeight: 600, margin: 0, letterSpacing: "-0.025em" }}>Pro + Ecommerce</h2>
            <div style={{ fontSize: 14, opacity: 0.92, marginTop: 6, maxWidth: 480 }}>Todo Looppy Pro + Tienda online completa + POS avanzado + Mercado Pago/Modo/Stripe + soporte 24/7.</div>
            <div style={{ display: "flex", gap: 24, marginTop: 22 }}>
              <div>
                <div style={{ fontSize: 11, opacity: 0.85, textTransform: "uppercase", letterSpacing: "0.08em" }}>Costo mensual</div>
                <div className="font-display" style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.03em" }}>$89.000</div>
              </div>
              <div>
                <div style={{ fontSize: 11, opacity: 0.85, textTransform: "uppercase", letterSpacing: "0.08em" }}>Próximo cobro</div>
                <div className="font-display" style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.03em" }}>27 Jun</div>
              </div>
              <div>
                <div style={{ fontSize: 11, opacity: 0.85, textTransform: "uppercase", letterSpacing: "0.08em" }}>Antigüedad</div>
                <div className="font-display" style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.03em" }}>2 años</div>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 10 }}>
            <Button icon="zap" style={{ background: "#fff", color: "var(--accent)" }}>Upgrade a Enterprise</Button>
            <Button variant="ghost" icon="download" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}>Descargar factura</Button>
          </div>
        </Card>

        {/* Usage */}
        <Card style={{ padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>Uso del mes</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>15 días transcurridos · ciclo cierra el 27 de junio</div>
            </div>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            {[
              { l: "Clientes registrados", v: 284, max: "ilimitado", pct: 0 },
              { l: "Productos en catálogo", v: 12, max: 10000, pct: 0.12 },
              { l: "Pedidos online", v: 168, max: "ilimitado", pct: 0 },
              { l: "Emails enviados", v: 1840, max: 100000, pct: 18.4 },
              { l: "SMS enviados (pago por uso)", v: 22, max: null, pct: 0, costo: "$528" },
              { l: "WhatsApp Business (pago por uso)", v: 184, max: null, pct: 0, costo: "$1.472" },
            ].map((r, i) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13 }}>
                  <span>{r.l}</span>
                  <span style={{ fontWeight: 600 }}>{r.v.toLocaleString("es-AR")}{r.max ? ` / ${typeof r.max === "number" ? r.max.toLocaleString("es-AR") : r.max}` : ""}{r.costo && <span style={{ color: "var(--accent)", marginLeft: 8 }}>{r.costo}</span>}</span>
                </div>
                {r.pct > 0 && <div className="prog"><div className="prog-bar" style={{ width: `${r.pct}%` }} /></div>}
                {r.pct === 0 && r.max && <div style={{ height: 8, background: "var(--surface-3)", borderRadius: 999 }} />}
                {!r.max && <div style={{ fontSize: 11, color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace" }}>Pago por uso · sin límite</div>}
              </div>
            ))}
          </div>
        </Card>

        {/* Billing details + Methods */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }}>
          <Card style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ padding: "18px 24px", borderBottom: "1px solid var(--line)", fontSize: 15, fontWeight: 600 }}>Historial de pagos</div>
            <table className="tbl">
              <thead><tr><th>Factura</th><th>Período</th><th>Concepto</th><th>Importe</th><th>Estado</th></tr></thead>
              <tbody>
                {[
                  { id: "INV-08842", per: "May 2026", c: "Pro+Ecom + extras", a: 91000, s: "paid" },
                  { id: "INV-08731", per: "Abr 2026", c: "Pro+Ecom", a: 89000, s: "paid" },
                  { id: "INV-08620", per: "Mar 2026", c: "Pro+Ecom", a: 89000, s: "paid" },
                  { id: "INV-08509", per: "Feb 2026", c: "Pro+Ecom", a: 89000, s: "paid" },
                  { id: "INV-08398", per: "Ene 2026", c: "Pro", a: 24900, s: "paid" },
                ].map(r => (
                  <tr key={r.id} className="hov">
                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>{r.id}</td>
                    <td style={{ color: "var(--text-muted)" }}>{r.per}</td>
                    <td style={{ fontSize: 13 }}>{r.c}</td>
                    <td style={{ fontWeight: 600 }}>{moneyARS(r.a)}</td>
                    <td><Badge tone="success" dot>Pagada</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
          <Card style={{ padding: 24 }}>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Método de cobro</div>
            <div style={{ padding: 16, background: "var(--surface-2)", borderRadius: 12, border: "1px solid var(--line)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <span style={{ width: 44, height: 32, borderRadius: 6, background: "linear-gradient(135deg, #1a1f71, #003087)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, fontFamily: "'Instrument Sans', sans-serif", letterSpacing: "0.05em" }}>VISA</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>Visa · termina en 4421</div>
                  <div style={{ fontSize: 11, color: "var(--text-dim)" }}>Vence 08/27</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <Button variant="ghost" size="sm" icon="edit-2" style={{ flex: 1, justifyContent: "center" }}>Cambiar</Button>
              </div>
            </div>
            <div style={{ marginTop: 14, fontSize: 12, color: "var(--text-muted)", display: "flex", gap: 8, alignItems: "flex-start" }}>
              <Icon name="shield-check" size={14} style={{ color: "#34d399", marginTop: 1 }} />
              Cobramos a través de Mercado Pago. PCI compliant.
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// INTEGRACIONES
function BizIntegrations() {
  const groups = [
    { t: "Pagos", items: [
      { n: "Mercado Pago", i: "credit-card", c: "#00B1EA", st: "active", desc: "Cobros online · activo desde mar 2024" },
      { n: "Stripe", i: "credit-card", c: "#635BFF", st: "active", desc: "Cobros internacionales USD" },
      { n: "PayPal", i: "wallet", c: "#003087", st: "available", desc: "Billetera global" },
      { n: "Modo", i: "smartphone", c: "#FF4D00", st: "active", desc: "Billetera bancos argentinos" },
    ] },
    { t: "Envíos", items: [
      { n: "Andreani", i: "package", c: "#E20613", st: "active", desc: "Cotización y etiquetas automáticas" },
      { n: "Correo Argentino", i: "package", c: "#FED309", st: "active", desc: "Envíos a todo el país" },
      { n: "OCA", i: "truck", c: "#003087", st: "available", desc: "Logística nacional" },
      { n: "Cabify Logistics", i: "bike", c: "#7B68EE", st: "available", desc: "Delivery same-day" },
    ] },
    { t: "Fiscal & contabilidad", items: [
      { n: "AFIP", i: "scroll", c: "#00529B", st: "active", desc: "Factura electrónica A/B/C" },
      { n: "Xubio", i: "calculator", c: "#00A8E0", st: "available", desc: "Contabilidad online" },
      { n: "Colppy", i: "calculator", c: "#FF7B00", st: "available", desc: "ERP contable" },
    ] },
    { t: "Marketing & social", items: [
      { n: "Instagram Shopping", i: "instagram", c: "#E4405F", st: "active", desc: "Catálogo sincronizado" },
      { n: "Google Shopping", i: "search", c: "#4285F4", st: "available", desc: "Apariciones en Google" },
      { n: "Meta Pixel", i: "facebook", c: "#1877F2", st: "active", desc: "Tracking de conversiones" },
      { n: "Google Analytics 4", i: "bar-chart-3", c: "#E37400", st: "active", desc: "Analytics web" },
    ] },
    { t: "Productividad", items: [
      { n: "Zapier", i: "zap", c: "#FF4F00", st: "available", desc: "Conectá con 5.000+ apps" },
      { n: "Make (Integromat)", i: "workflow", c: "#6E4FF6", st: "available", desc: "Automatizaciones avanzadas" },
      { n: "n8n", i: "git-merge", c: "#EA4B71", st: "available", desc: "Workflows self-hosted" },
      { n: "Google Sheets", i: "file-spreadsheet", c: "#0F9D58", st: "active", desc: "Export automático a Sheets" },
    ] },
  ];
  return (
    <>
      <BizTopBar title="Integraciones" subtitle={`${groups.flatMap(g => g.items).filter(i => i.st === "active").length} activas · ${groups.flatMap(g => g.items).length} disponibles`}
        actions={<Button variant="ghost" icon="code-2">Ver documentación API</Button>}
      />
      <div style={{ padding: 32, display: "grid", gap: 24 }}>
        {groups.map(g => (
          <div key={g.t}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{g.t}</div>
              <span style={{ fontSize: 12, color: "var(--text-dim)" }}>· {g.items.filter(i => i.st === "active").length} de {g.items.length} activas</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
              {g.items.map(i => (
                <Card key={i.n} style={{ padding: 18 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ width: 38, height: 38, borderRadius: 9, background: i.c, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={i.i} size={16} /></span>
                    {i.st === "active" ? <Badge tone="success" dot>Conectado</Badge> : <Badge tone="neutral">Disponible</Badge>}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{i.n}</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4, lineHeight: 1.4, minHeight: 32 }}>{i.desc}</div>
                  <Button variant="ghost" size="sm" icon={i.st === "active" ? "settings" : "plug"} style={{ marginTop: 12, width: "100%", justifyContent: "center" }}>{i.st === "active" ? "Configurar" : "Conectar"}</Button>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

Object.assign(window, { BizBranches, BizTeam, BizCampaigns, BizPlan, BizIntegrations });
