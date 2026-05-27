// LIVE SPORTS — ecommerce admin (within Looppy)

// ───────────────────────────────────────────────────────────────
// Product placeholder image — real photo when available, sport silhouette fallback
function ProdImage({ product, size = 100, dark = false }) {
  // If product has a real image, show it
  if (product.image) {
    return (
      <div style={{ width: size, height: size, position: "relative", overflow: "hidden", borderRadius: 12, background: dark ? "#0a0a0a" : "#f1f1f1", flexShrink: 0 }}>
        <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
      </div>
    );
  }
  const bg = dark ? "#0a0a0a" : "#f1f1f1";
  const fg = dark ? "#1e1e1e" : "#dcdcdc";
  const txt = dark ? "#3a3a3a" : "#9a9a9a";
  const accent = dark ? "#ffffff" : "#0a0a0a";
  const sil = {
    tank:  "M30 22 L30 80 L70 80 L70 22 L60 22 L55 30 L45 30 L40 22 Z",
    tee:   "M22 26 L22 42 L32 42 L32 80 L68 80 L68 42 L78 42 L78 26 L60 22 L55 30 L45 30 L40 22 Z",
    hoodie:"M22 30 L22 50 L32 50 L32 82 L68 82 L68 50 L78 50 L78 30 L60 22 L55 35 L45 35 L40 22 Z M45 22 Q50 18 55 22",
    short: "M28 28 L36 78 L46 78 L48 50 L52 50 L54 78 L64 78 L72 28 Z",
    skirt: "M32 28 L24 80 L76 80 L68 28 Z",
    shoe:  "M14 60 L16 50 Q24 38 38 38 L66 38 Q82 40 84 56 L84 64 Q84 70 78 70 L16 70 Q12 70 14 60 Z",
    set:   "M25 22 L25 50 L35 50 L35 78 L65 78 L65 50 L75 50 L75 22 Z",
    sock:  "M40 18 L40 60 Q40 72 50 72 L70 72 Q78 72 78 64 L78 56 L48 56 L48 18 Z",
    wrist: "M22 38 L78 38 L78 62 L22 62 Z",
    legging:"M38 20 L36 82 L48 82 L50 50 L52 82 L64 82 L62 20 Z",
    paddle:"M50 12 Q72 12 72 38 Q72 58 50 60 Q28 58 28 38 Q28 12 50 12 Z M48 60 L48 86 L52 86 L52 60 Z",
  }[product.silhouette] || "M30 26 L30 80 L70 80 L70 26 Z";
  return (
    <div style={{ width: size, height: size, position: "relative", overflow: "hidden", borderRadius: 12, background: bg, flexShrink: 0 }}>
      {/* diagonal stripes */}
      <div style={{ position: "absolute", inset: 0, background: `repeating-linear-gradient(135deg, ${bg}, ${bg} 8px, ${fg} 8px, ${fg} 9px)`, opacity: 0.9 }} />
      <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
        <path d={sil} fill={accent} stroke={accent} strokeWidth="1" strokeLinejoin="round" />
        {product.sport === "basket" && <line x1="0" y1="90" x2="100" y2="90" stroke={accent} strokeWidth="3" />}
      </svg>
      <div style={{ position: "absolute", left: 6, top: 6, fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: txt, letterSpacing: "0.1em", textTransform: "uppercase" }}>{product.sport === "basket" ? "BB" : "PD"} · {product.sku.slice(-3)}</div>
      <div style={{ position: "absolute", right: 6, bottom: 6, fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: txt, letterSpacing: "0.1em" }}>LS</div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────
// Ecommerce shell — swaps sidebar nav when inside ecommerce
const ECOM_NAV = [
  { id: "ecom-dashboard", icon: "layout-dashboard", label: "Dashboard" },
  { id: "ecom-products", icon: "shirt", label: "Productos" },
  { id: "ecom-categories", icon: "folder-tree", label: "Categorías" },
  { id: "ecom-variations", icon: "sliders-horizontal", label: "Variaciones y atributos" },
  { id: "ecom-stock", icon: "package", label: "Stock" },
  { id: "ecom-orders", icon: "shopping-bag", label: "Pedidos", badge: 3 },
  { id: "ecom-customers", icon: "users", label: "Clientes" },
  { id: "ecom-promos", icon: "ticket-percent", label: "Cupones y promos" },
  { id: "ecom-payments", icon: "credit-card", label: "Medios de pago" },
  { id: "ecom-shipping", icon: "truck", label: "Métodos de envío" },
  { id: "ecom-themes", icon: "palette", label: "Temas" },
  { id: "ecom-pos", icon: "scan-line", label: "POS / Mostrador" },
  { id: "ecom-reports", icon: "bar-chart-3", label: "Reportes" },
  { id: "ecom-settings", icon: "settings", label: "Configuración" },
];

function EcomShell({ current, go, children }) {
  return (
    <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "260px 1fr", background: "var(--bg)" }}>
      <aside style={{ borderRight: "1px solid var(--line)", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 4, background: "var(--surface)", position: "sticky", top: 0, height: "100vh", overflow: "auto" }}>
        <div style={{ padding: "4px 8px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <LogoMark size={22} />
          <span style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)", letterSpacing: "0.12em" }}>ECOM</span>
        </div>
        {/* Live Sports brand card */}
        <div style={{ background: "#0a0a0a", borderRadius: 12, padding: 14, border: "1px solid #1a1a1a", marginBottom: 12, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, transparent, transparent 14px, rgba(255,255,255,0.04) 14px, rgba(255,255,255,0.04) 16px)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 10, position: "relative" }}>
            <div style={{ width: 36, height: 36, borderRadius: 999, border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "-0.04em" }}>LS</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: "0.04em", textTransform: "uppercase" }}>Live Sports</div>
              <div style={{ fontSize: 10, color: "#999", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Tienda online · Mendoza</div>
            </div>
            <span style={{ width: 7, height: 7, borderRadius: 999, background: "#34d399", boxShadow: "0 0 8px #34d399" }} />
          </div>
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.12em", padding: "4px 10px 6px" }}>Ecommerce</div>
        <div style={{ display: "grid", gap: 2 }}>
          {ECOM_NAV.map(n => (
            <div key={n.id} className={`nav-item ${current === n.id ? "active" : ""}`} onClick={() => go(n.id)}>
              <Icon name={n.icon} size={16} />
              <span style={{ flex: 1 }}>{n.label}</span>
              {n.badge && <span style={{ background: "var(--accent)", color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 999 }}>{n.badge}</span>}
              {current === n.id && <span className="nav-dot" />}
            </div>
          ))}
        </div>
        <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--line)", display: "grid", gap: 2 }}>
          <div className="nav-item" onClick={() => go("ecom-store")}><Icon name="external-link" size={16} /> Ver tienda online</div>
          <div className="nav-item" onClick={() => go("biz-dashboard")} style={{ color: "var(--accent)" }}>
            <Icon name="arrow-left" size={16} /> Volver a Looppy
          </div>
        </div>
      </aside>
      <main style={{ minWidth: 0 }}>{children}</main>
    </div>
  );
}

function EcomTopBar({ title, kicker, subtitle, actions }) {
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

const moneyAR = (n) => "$" + Math.round(n).toLocaleString("es-AR");

// ───────────────────────────────────────────────────────────────
// 1. ECOMMERCE DASHBOARD
function EcomDashboard({ go }) {
  const D = window.LS_DATA;
  const stats = [
    { l: "Ventas del día", n: "$684.200", d: "+18% vs ayer", icon: "trending-up", tone: "success" },
    { l: "Ventas del mes", n: "$8.420.900", d: "Meta: $10M (84%)", icon: "wallet", tone: "accent" },
    { l: "Pedidos pendientes", n: "12", d: "3 nuevos sin leer", icon: "package-search", tone: "warning" },
    { l: "Ticket promedio", n: "$58.400", d: "+$3.200 vs mes anterior", icon: "receipt", tone: "accent" },
  ];
  return (
    <>
      <EcomTopBar kicker="Live Sports · Tienda online" title="Dashboard ecommerce"
        subtitle="Buen día, Lucía. Acá está cómo viene Live Sports hoy."
        actions={<><Button variant="ghost" icon="external-link" onClick={() => go("ecom-store")}>Ver tienda</Button><Button variant="primary" icon="plus">Nuevo producto</Button></>}
      />
      <div style={{ padding: 32, display: "grid", gap: 20 }}>
        {/* HERO: alert strip + KPIs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {stats.map((s, i) => (
            <Card key={i} style={{ padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <span style={{ width: 36, height: 36, borderRadius: 10, background: s.tone === "success" ? "rgba(52,211,153,0.14)" : s.tone === "warning" ? "rgba(240,185,78,0.14)" : "var(--accent-soft)", color: s.tone === "success" ? "#34d399" : s.tone === "warning" ? "#f0b94e" : "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={s.icon} size={18} /></span>
                <Icon name="more-horizontal" size={16} style={{ color: "var(--text-dim)" }} />
              </div>
              <div className="stat-num">{s.n}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6 }}>{s.l}</div>
              <div style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 2 }}>{s.d}</div>
            </Card>
          ))}
        </div>

        {/* alerts row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {[
            { icon: "alert-triangle", tone: "warning", title: "3 productos con bajo stock", desc: "Camiseta BB Pro Elite L, Musculosa Shooter M, Paleta Carbon Pro" },
            { icon: "shopping-cart", tone: "danger", title: "8 carritos abandonados hoy", desc: "$412.300 en valor recuperable" },
            { icon: "users", tone: "accent", title: "14 clientes nuevos esta semana", desc: "+24% vs la semana pasada" },
          ].map((a, i) => (
            <Card key={i} style={{ padding: 18, display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ width: 38, height: 38, borderRadius: 10, background: a.tone === "warning" ? "rgba(240,185,78,0.14)" : a.tone === "danger" ? "rgba(248,113,113,0.14)" : "var(--accent-soft)", color: a.tone === "warning" ? "#f0b94e" : a.tone === "danger" ? "#f87171" : "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={a.icon} size={18} /></span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{a.title}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 3, lineHeight: 1.4 }}>{a.desc}</div>
              </div>
              <Icon name="chevron-right" size={16} style={{ color: "var(--text-dim)" }} />
            </Card>
          ))}
        </div>

        {/* Chart + split */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
          <Card style={{ padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>Ventas por día</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Últimos 7 días — $2.424.000 totales</div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <span className="chip chip-active">7 días</span><span className="chip">30 días</span><span className="chip">90 días</span>
              </div>
            </div>
            <BarChart data={D.LS_SALES_WEEK} height={220} />
          </Card>
          <Card style={{ padding: 24 }}>
            <div style={{ fontSize: 16, fontWeight: 600 }}>Ingresos por deporte</div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Básquet vs Pádel</div>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <Donut data={D.LS_SPORT_SPLIT} size={140} />
              <div style={{ display: "grid", gap: 12, flex: 1 }}>
                {D.LS_SPORT_SPLIT.map((t, i) => (
                  <div key={i}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, marginBottom: 4 }}>
                      <span style={{ width: 10, height: 10, borderRadius: 3, background: t.color, border: t.color === "#0a0a0a" ? "1px solid #fff3" : "none" }} />
                      <span style={{ flex: 1, color: "var(--text-muted)" }}>{t.name}</span>
                      <span style={{ fontWeight: 700, fontFamily: "'Instrument Sans', sans-serif" }}>{t.value}%</span>
                    </div>
                    <div className="prog"><div className="prog-bar" style={{ width: `${t.value}%`, background: t.color }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom row — top products + orders + conversion */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }}>
          <Card style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 16, fontWeight: 600 }}>Productos más vendidos</div>
              <a onClick={() => go("ecom-reports")} style={{ fontSize: 13, color: "var(--accent)", cursor: "pointer", fontWeight: 600 }}>Ver reporte →</a>
            </div>
            <div>
              {D.LS_TOP_PRODUCTS.map(tp => {
                const p = D.LS_PRODUCTS.find(x => x.id === tp.id);
                return (
                  <div key={tp.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 24px", borderBottom: "1px solid var(--line)" }}>
                    <ProdImage product={p} size={48} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 500 }}>{tp.name}</div>
                      <div style={{ fontSize: 12, color: "var(--text-dim)" }}>{p.cat} · {p.sport === "basket" ? "Básquet" : "Pádel"}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontWeight: 600, fontFamily: "'Instrument Sans', sans-serif" }}>{tp.sold} u.</div>
                      <div style={{ fontSize: 12, color: "var(--text-dim)" }}>{moneyAR(tp.revenue)}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
          <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
            <Card style={{ padding: 20 }}>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Conversión visitas → compra</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 4 }}>
                <div className="stat-num">3.8%</div>
                <span style={{ fontSize: 12, color: "#34d399", fontWeight: 600 }}>+0.4 pts</span>
              </div>
              <div className="prog" style={{ marginTop: 14 }}><div className="prog-bar" style={{ width: "38%" }} /></div>
              <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 8, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>2.840 visitas / 108 compras</div>
            </Card>
            <Card style={{ padding: 20 }}>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 14 }}>Estado de envíos</div>
              {[
                { l: "En preparación", v: 6, c: "#1e3a8a" },
                { l: "En tránsito", v: 9, c: "#075985" },
                { l: "Entregados (24h)", v: 14, c: "#0d5e2a" },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 2 ? "1px solid var(--line)" : "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ width: 8, height: 8, borderRadius: 999, background: r.c }} />
                    <span style={{ fontSize: 13 }}>{r.l}</span>
                  </div>
                  <span style={{ fontWeight: 600, fontFamily: "'Instrument Sans', sans-serif" }}>{r.v}</span>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// 2. PRODUCTS
function EcomProducts({ go }) {
  const D = window.LS_DATA;
  const [q, setQ] = useState("");
  const [sport, setSport] = useState("all");
  const [selected, setSelected] = useState(null);
  const filtered = D.LS_PRODUCTS.filter(p =>
    (sport === "all" || p.sport === sport) &&
    (!q || p.name.toLowerCase().includes(q.toLowerCase()) || p.sku.toLowerCase().includes(q.toLowerCase()))
  );
  if (selected) return <EcomProductEditor product={selected} onBack={() => setSelected(null)} />;
  return (
    <>
      <EcomTopBar kicker="Catálogo" title="Productos" subtitle={`${D.LS_PRODUCTS.length} productos · ${D.LS_PRODUCTS.filter(p => p.status === "active").length} activos · ${D.LS_PRODUCTS.filter(p => p.status === "out").length} agotados`}
        actions={<><Button variant="ghost" icon="upload">Importar CSV</Button><Button variant="primary" icon="plus" onClick={() => setSelected(D.LS_PRODUCTS[0])}>Nuevo producto</Button></>}
      />
      <div style={{ padding: 32 }}>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: 20, display: "flex", gap: 12, alignItems: "center", borderBottom: "1px solid var(--line)", flexWrap: "wrap" }}>
            <div style={{ flex: 1, maxWidth: 380 }}>
              <Input icon="search" placeholder="Buscar por nombre, SKU o categoría…" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              {[["all", "Todos"], ["basket", "Básquet"], ["padel", "Pádel"]].map(([id, l]) => (
                <span key={id} className={`chip ${sport === id ? "chip-active" : ""}`} onClick={() => setSport(id)} style={{ cursor: "pointer" }}>{l}</span>
              ))}
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
              <span className="chip">Activos</span><span className="chip">En oferta</span><span className="chip">Destacados</span>
              <IconButton icon="filter" />
            </div>
          </div>
          <table className="tbl">
            <thead><tr><th>Producto</th><th>Categoría</th><th>SKU</th><th>Precio</th><th>Stock</th><th>Estado</th><th>Etiquetas</th><th></th></tr></thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id} className="hov" style={{ cursor: "pointer" }} onClick={() => setSelected(p)}>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <ProdImage product={p} size={44} />
                      <div>
                        <div style={{ fontWeight: 500 }}>{p.name}</div>
                        <div style={{ fontSize: 12, color: "var(--text-dim)" }}>{p.gender} · {p.brand}</div>
                      </div>
                    </div>
                  </td>
                  <td><div style={{ fontSize: 13 }}>{p.cat}</div><div style={{ fontSize: 11, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{p.sport === "basket" ? "Básquet" : "Pádel"}</div></td>
                  <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--text-muted)" }}>{p.sku}</td>
                  <td>
                    <div style={{ fontWeight: 600 }}>{moneyAR(p.promo || p.price)}</div>
                    {p.promo && <div style={{ fontSize: 11, color: "var(--text-dim)", textDecoration: "line-through" }}>{moneyAR(p.price)}</div>}
                  </td>
                  <td><div style={{ fontWeight: 600, color: p.stock === 0 ? "#f87171" : p.stock < 10 ? "#f0b94e" : "var(--text)" }}>{p.stock}</div></td>
                  <td>{p.status === "active" ? <Badge tone="success" dot>Activo</Badge> : p.status === "out" ? <Badge tone="danger" dot>Agotado</Badge> : <Badge tone="neutral" dot>Pausado</Badge>}</td>
                  <td>
                    <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                      {p.featured && <Badge tone="accent" icon="star">Destacado</Badge>}
                      {p.sale && <Badge tone="warning" icon="tag">Oferta</Badge>}
                    </div>
                  </td>
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

// Product editor
function EcomProductEditor({ product, onBack }) {
  const D = window.LS_DATA;
  const sizes = product.silhouette === "shoe" ? D.LS_SIZES_SHOES : D.LS_SIZES_APPAREL;
  const variants = ["Negro", "Blanco"].flatMap(color => sizes.slice(0, 4).map((s, i) => ({ color, size: s, stock: Math.max(0, Math.floor(Math.random() * 12) + (i % 3)) })));
  return (
    <>
      <EcomTopBar kicker="Producto" title={product.name}
        subtitle={`${product.sku} · ${product.cat}`}
        actions={<><Button variant="ghost" icon="arrow-left" onClick={onBack}>Volver</Button><Button variant="ghost" icon="trash-2">Eliminar</Button><Button variant="primary" icon="save">Guardar cambios</Button></>}
      />
      <div style={{ padding: 32, display: "grid", gridTemplateColumns: "1fr 360px", gap: 20 }}>
        <div style={{ display: "grid", gap: 20 }}>
          <Card style={{ padding: 24 }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
              <ProdImage product={product} size={140} />
              <ProdImage product={product} size={68} dark />
              <ProdImage product={product} size={68} />
              <div style={{ width: 68, height: 68, borderRadius: 12, border: "1px dashed var(--line-strong)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "var(--text-dim)", cursor: "pointer", gap: 4 }}>
                <Icon name="plus" size={18} />
                <span style={{ fontSize: 10 }}>Agregar</span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Field label="Nombre del producto"><Input defaultValue={product.name} /></Field>
              <Field label="SKU"><Input defaultValue={product.sku} /></Field>
              <Field label="Categoría"><Input defaultValue={product.cat} /></Field>
              <Field label="Deporte">
                <div style={{ display: "flex", gap: 8 }}>
                  <span className={`chip ${product.sport === "basket" ? "chip-active" : ""}`}>Básquet</span>
                  <span className={`chip ${product.sport === "padel" ? "chip-active" : ""}`}>Pádel</span>
                </div>
              </Field>
              <Field label="Precio"><Input defaultValue={moneyAR(product.price)} /></Field>
              <Field label="Precio promocional"><Input defaultValue={product.promo ? moneyAR(product.promo) : "—"} /></Field>
              <Field label="Género"><Input defaultValue={product.gender} /></Field>
              <Field label="Temporada"><Input defaultValue={product.season} /></Field>
              <div style={{ gridColumn: "1 / -1" }}>
                <Field label="Descripción corta"><Input defaultValue={product.desc} /></Field>
              </div>
            </div>
          </Card>
          <Card style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ padding: "18px 24px", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>Variantes y stock por talle</div>
                <div style={{ fontSize: 12, color: "var(--text-dim)" }}>{variants.length} combinaciones · stock total {variants.reduce((s, v) => s + v.stock, 0)} u.</div>
              </div>
              <Button variant="ghost" icon="plus" size="sm">Agregar variante</Button>
            </div>
            <table className="tbl">
              <thead><tr><th>Color</th><th>Talle</th><th>Stock</th><th>Reservado</th><th>Disponible</th><th></th></tr></thead>
              <tbody>
                {variants.map((v, i) => (
                  <tr key={i} className="hov">
                    <td><div style={{ display: "flex", alignItems: "center", gap: 10 }}><span style={{ width: 18, height: 18, borderRadius: 6, background: v.color === "Negro" ? "#0a0a0a" : "#fff", border: "1px solid var(--line-strong)" }} />{v.color}</div></td>
                    <td><span className="kbd" style={{ fontSize: 12 }}>{v.size}</span></td>
                    <td style={{ fontWeight: 600, color: v.stock === 0 ? "#f87171" : v.stock < 4 ? "#f0b94e" : "var(--text)" }}>{v.stock}</td>
                    <td style={{ color: "var(--text-muted)" }}>{Math.min(v.stock, i % 2)}</td>
                    <td style={{ fontWeight: 600 }}>{Math.max(0, v.stock - (i % 2))}</td>
                    <td><IconButton icon="edit-2" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
        <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
          <Card style={{ padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Estado y visibilidad</div>
            <div style={{ display: "grid", gap: 12 }}>
              <Toggle label="Producto activo" defaultChecked={product.status === "active"} />
              <Toggle label="Producto destacado" defaultChecked={product.featured} />
              <Toggle label="En oferta" defaultChecked={product.sale} />
              <Toggle label="Disponible en POS" defaultChecked />
              <Toggle label="Visible en tienda online" defaultChecked />
            </div>
          </Card>
          <Card style={{ padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Puntos Looppy</div>
            <div style={{ background: "var(--accent-soft)", padding: 14, borderRadius: 12, display: "flex", alignItems: "center", gap: 12 }}>
              <Icon name="sparkles" size={20} style={{ color: "var(--accent)" }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>+{Math.round((product.promo || product.price) / 200)} pts por compra</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Regla activa: 1 punto cada $200</div>
              </div>
            </div>
            <Toggle label="Puntos extra x2" style={{ marginTop: 12 }} />
          </Card>
          <Card style={{ padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Etiquetas comerciales</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {product.tags.map((t, i) => <span key={i} className="chip chip-active">{t} ×</span>)}
              <span className="chip" style={{ borderStyle: "dashed", color: "var(--text-dim)" }}>+ agregar</span>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</span>
      {children}
    </label>
  );
}

function Toggle({ label, defaultChecked, style }) {
  const [on, setOn] = useState(!!defaultChecked);
  return (
    <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", ...style }}>
      <span style={{ fontSize: 13 }}>{label}</span>
      <span onClick={() => setOn(!on)} style={{ width: 36, height: 22, borderRadius: 999, background: on ? "var(--accent)" : "var(--surface-3)", position: "relative", transition: "background .15s" }}>
        <span style={{ width: 16, height: 16, borderRadius: 999, background: "#fff", position: "absolute", top: 3, left: on ? 17 : 3, transition: "left .15s" }} />
      </span>
    </label>
  );
}

Object.assign(window, { EcomShell, EcomTopBar, EcomDashboard, EcomProducts, ProdImage, moneyAR, Field, Toggle });
