// LIVE SPORTS — ecommerce admin (part 2): categories, variations, stock, orders, customers, payments, shipping, POS, reports, settings

// ───────────────────────────────────────────────────────────────
// CATEGORIES
function EcomCategories() {
  const D = window.LS_DATA;
  return (
    <>
      <EcomTopBar kicker="Catálogo" title="Categorías" subtitle="Estructura de la tienda — qué ven los clientes al navegar"
        actions={<Button variant="primary" icon="plus">Nueva categoría</Button>}
      />
      <div style={{ padding: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {D.LS_CATS.map(c => (
          <Card key={c.sport} style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ padding: 20, background: "#0a0a0a", color: "#fff", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, transparent, transparent 18px, rgba(255,255,255,0.04) 18px, rgba(255,255,255,0.04) 20px)" }} />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
                <div>
                  <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.16em", color: "#888", textTransform: "uppercase" }}>Deporte</div>
                  <div className="font-display" style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", textTransform: "uppercase", marginTop: 4 }}>{c.label}</div>
                </div>
                <div style={{ width: 48, height: 48, borderRadius: 999, border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={c.icon} size={22} style={{ color: "#fff" }} />
                </div>
              </div>
            </div>
            <div style={{ padding: 8 }}>
              {c.subs.map(s => {
                const count = D.LS_PRODUCTS.filter(p => p.cat === s && p.sport === c.sport).length;
                return (
                  <div key={s} style={{ padding: "12px 14px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid var(--line)" }}>
                    <Icon name="folder" size={15} style={{ color: "var(--text-dim)" }} />
                    <span style={{ flex: 1, fontSize: 14 }}>{s}</span>
                    <span style={{ fontSize: 12, color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace" }}>{count} prod.</span>
                    <IconButton icon="more-horizontal" />
                  </div>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// VARIATIONS / ATTRIBUTES
function EcomVariations() {
  const attrs = [
    { name: "Talles (indumentaria)", icon: "ruler", values: ["XS", "S", "M", "L", "XL", "XXL"] },
    { name: "Talles (calzado)", icon: "footprints", values: ["38", "39", "40", "41", "42", "43", "44", "45"] },
    { name: "Colores", icon: "palette", values: ["Negro", "Blanco"] },
    { name: "Género", icon: "user", values: ["Hombre", "Mujer", "Unisex", "Niño"] },
    { name: "Deporte", icon: "trophy", values: ["Básquet", "Pádel"] },
    { name: "Tipo de tela", icon: "shirt", values: ["Algodón", "Dry Fit", "Mesh", "Compresión"] },
    { name: "Corte", icon: "scissors", values: ["Slim", "Regular", "Oversize"] },
    { name: "Temporada", icon: "calendar", values: ["24/25", "25/26", "Verano", "Invierno"] },
    { name: "Nivel de uso", icon: "activity", values: ["Entrenamiento", "Competencia", "Urbano"] },
  ];
  return (
    <>
      <EcomTopBar kicker="Catálogo" title="Variaciones y atributos" subtitle="Definiciones que se usan en todos los productos"
        actions={<Button variant="primary" icon="plus">Nuevo atributo</Button>}
      />
      <div style={{ padding: 32, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {attrs.map(a => (
          <Card key={a.name} style={{ padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span style={{ width: 32, height: 32, borderRadius: 9, background: "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={a.icon} size={16} /></span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{a.name}</div>
                <div style={{ fontSize: 11, color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>{a.values.length} valores</div>
              </div>
              <IconButton icon="edit-2" />
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {a.values.map(v => (
                <span key={v} className="chip" style={a.name === "Colores" ? { paddingLeft: 22, position: "relative" } : {}}>
                  {a.name === "Colores" && <span style={{ width: 10, height: 10, borderRadius: 999, position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", background: v === "Negro" ? "#0a0a0a" : "#fff", border: "1px solid var(--line-strong)" }} />}
                  {v}
                </span>
              ))}
              <span className="chip" style={{ borderStyle: "dashed", color: "var(--text-dim)", cursor: "pointer" }}>+ valor</span>
            </div>
          </Card>
        ))}
        <Card style={{ padding: 24, gridColumn: "1 / -1" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>Ejemplo · Camiseta Basketball Pro Elite</div>
              <div style={{ fontSize: 12, color: "var(--text-dim)" }}>Variaciones generadas a partir de Color × Talle</div>
            </div>
            <Badge tone="accent">{["Negro/M","Negro/L","Blanco/M","Rojo/XL"].length} activas</Badge>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {[
              { v: "Negro / M", s: 10 }, { v: "Negro / L", s: 7 }, { v: "Blanco / M", s: 5 }, { v: "Negro / XL", s: 3, low: true }
            ].map((x, i) => (
              <div key={i} style={{ padding: 14, border: "1px solid var(--line)", borderRadius: 12, background: "var(--surface-2)" }}>
                <div style={{ fontSize: 11, color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>variante</div>
                <div style={{ fontWeight: 600, marginTop: 4 }}>{x.v}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 8 }}>Stock: <strong style={{ color: x.low ? "#f0b94e" : "var(--text)" }}>{x.s} u.</strong></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// STOCK
function EcomStock() {
  const D = window.LS_DATA;
  const low = D.LS_PRODUCTS.filter(p => p.stock > 0 && p.stock < 10);
  const out = D.LS_PRODUCTS.filter(p => p.stock === 0);
  return (
    <>
      <EcomTopBar kicker="Inventario" title="Stock" subtitle={`${D.LS_PRODUCTS.reduce((s, p) => s + p.stock, 0)} unidades · ${low.length} con bajo stock · ${out.length} agotados`}
        actions={<><Button variant="ghost" icon="download">Exportar</Button><Button variant="primary" icon="plus">Ingreso manual</Button></>}
      />
      <div style={{ padding: 32, display: "grid", gap: 20 }}>
        {/* Alerts */}
        {low.length > 0 && (
          <Card style={{ padding: 20, borderLeft: "4px solid #f0b94e", background: "rgba(240,185,78,0.04)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <Icon name="alert-triangle" size={20} style={{ color: "#f0b94e" }} />
              <div style={{ fontSize: 15, fontWeight: 600 }}>Alertas de stock bajo</div>
              <Badge tone="warning">{low.length} productos</Badge>
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {low.map(p => (
                <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 10, background: "var(--surface-2)" }}>
                  <ProdImage product={p} size={36} />
                  <div style={{ flex: 1, fontSize: 13 }}>Quedan solo <strong style={{ color: "#f0b94e" }}>{p.stock} unidades</strong> de {p.name}</div>
                  <Button variant="ghost" size="sm" icon="plus">Reponer</Button>
                </div>
              ))}
            </div>
          </Card>
        )}
        {/* Stock table */}
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: 20, display: "flex", gap: 12, alignItems: "center", borderBottom: "1px solid var(--line)" }}>
            <div style={{ fontSize: 15, fontWeight: 600 }}>Inventario general</div>
            <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
              <span className="chip chip-active">Todos</span><span className="chip">Tienda online</span><span className="chip">POS</span><span className="chip">Bajo stock</span>
            </div>
          </div>
          <table className="tbl">
            <thead><tr><th>Producto</th><th>SKU</th><th>Stock total</th><th>Reservado</th><th>Disponible</th><th>Tienda</th><th>POS</th><th>Estado</th><th></th></tr></thead>
            <tbody>
              {D.LS_PRODUCTS.map(p => {
                const reserved = Math.min(p.stock, p.id.charCodeAt(2) % 4);
                return (
                  <tr key={p.id} className="hov">
                    <td><div style={{ display: "flex", alignItems: "center", gap: 12 }}><ProdImage product={p} size={36} /><div><div style={{ fontWeight: 500 }}>{p.name}</div><div style={{ fontSize: 11, color: "var(--text-dim)" }}>{p.cat}</div></div></div></td>
                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--text-muted)" }}>{p.sku}</td>
                    <td style={{ fontWeight: 600 }}>{p.stock}</td>
                    <td style={{ color: "var(--text-muted)" }}>{reserved}</td>
                    <td style={{ fontWeight: 600, color: p.stock - reserved < 5 ? "#f0b94e" : "var(--text)" }}>{Math.max(0, p.stock - reserved)}</td>
                    <td>{Math.max(0, p.stock - reserved - 2)}</td>
                    <td>{Math.min(2, p.stock)}</td>
                    <td>{p.stock === 0 ? <Badge tone="danger" dot>Agotado</Badge> : p.stock < 10 ? <Badge tone="warning" dot>Bajo</Badge> : <Badge tone="success" dot>OK</Badge>}</td>
                    <td><div style={{ display: "flex", gap: 4 }}><IconButton icon="plus" /><IconButton icon="minus" /></div></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
        {/* History */}
        <Card style={{ padding: 24 }}>
          <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Historial de movimientos</div>
          <div style={{ display: "grid", gap: 10 }}>
            {[
              { dir: "in", txt: "Ingreso de 24 u. — Camiseta Basketball Pro Elite (talle L)", when: "Hoy 11:20", user: "Lucía M." },
              { dir: "out", txt: "Venta — 1 u. Zapatillas Indoor Court (T.42)", when: "Hoy 14:22", user: "Online" },
              { dir: "out", txt: "Ajuste manual — −2 u. Musculosa Shooter (rotura)", when: "Hoy 09:14", user: "Lucía M." },
              { dir: "in", txt: "Devolución — 1 u. Buzo Oversize (T.M)", when: "Ayer 16:55", user: "POS" },
            ].map((m, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < 3 ? "1px solid var(--line)" : "none" }}>
                <span style={{ width: 30, height: 30, borderRadius: 8, background: m.dir === "in" ? "rgba(52,211,153,0.14)" : "rgba(248,113,113,0.14)", color: m.dir === "in" ? "#34d399" : "#f87171", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={m.dir === "in" ? "arrow-down-left" : "arrow-up-right"} size={14} /></span>
                <div style={{ flex: 1, fontSize: 13 }}>{m.txt}</div>
                <div style={{ fontSize: 12, color: "var(--text-dim)" }}>{m.when} · {m.user}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// ORDERS
function EcomOrders() {
  const D = window.LS_DATA;
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const filtered = D.LS_ORDERS.filter(o => filter === "all" || o.status === filter);
  if (selected) return <EcomOrderDetail order={selected} onBack={() => setSelected(null)} />;
  return (
    <>
      <EcomTopBar kicker="Ventas" title="Pedidos" subtitle={`${D.LS_ORDERS.length} pedidos · ${D.LS_ORDERS.filter(o => o.status === "nuevo").length} nuevos · ${D.LS_ORDERS.filter(o => o.status === "preparacion").length} en preparación`}
        actions={<><Button variant="ghost" icon="download">Exportar</Button><Button variant="primary" icon="plus">Crear pedido</Button></>}
      />
      <div style={{ padding: 32, display: "grid", gap: 16 }}>
        {/* Status pills */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[["all", "Todos", D.LS_ORDERS.length], ["nuevo", "Nuevos", 1], ["pagado", "Pagados", 1], ["preparacion", "En preparación", 1], ["listo", "Listo para retirar", 1], ["enviado", "Enviados", 1], ["entregado", "Entregados", 2], ["cancelado", "Cancelados", 1]].map(([id, l, n]) => (
            <span key={id} className={`chip ${filter === id ? "chip-active" : ""}`} onClick={() => setFilter(id)} style={{ cursor: "pointer" }}>{l} · {n}</span>
          ))}
        </div>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <table className="tbl">
            <thead><tr><th>Pedido</th><th>Cliente</th><th>Fecha</th><th>Productos</th><th>Total</th><th>Pago</th><th>Envío</th><th>Estado</th><th></th></tr></thead>
            <tbody>
              {filtered.map(o => {
                const st = D.LS_ORDER_STATUS[o.status];
                return (
                  <tr key={o.id} className="hov" style={{ cursor: "pointer" }} onClick={() => setSelected(o)}>
                    <td style={{ fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}>{o.id}</td>
                    <td>{o.client}</td>
                    <td style={{ color: "var(--text-muted)" }}>{o.date}</td>
                    <td>{o.items}</td>
                    <td style={{ fontWeight: 600 }}>{moneyAR(o.total)}</td>
                    <td style={{ fontSize: 13 }}>{o.pay}</td>
                    <td style={{ fontSize: 13, color: "var(--text-muted)" }}>{o.ship}</td>
                    <td><span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 999, background: st.bg, color: st.color, fontSize: 12, fontWeight: 600 }}><span style={{ width: 6, height: 6, borderRadius: 999, background: st.color }} />{st.label}</span></td>
                    <td><IconButton icon="chevron-right" /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}

function EcomOrderDetail({ order, onBack }) {
  const D = window.LS_DATA;
  const st = D.LS_ORDER_STATUS[order.status];
  const stages = ["nuevo", "pagado", "preparacion", "listo", "enviado", "entregado"];
  const stageIdx = stages.indexOf(order.status);
  return (
    <>
      <EcomTopBar kicker={`Pedido ${order.id}`} title={`Pedido de ${order.client}`} subtitle={`${order.date} · ${order.items} producto${order.items > 1 ? "s" : ""}`}
        actions={<><Button variant="ghost" icon="arrow-left" onClick={onBack}>Volver</Button><Button variant="ghost" icon="printer">Imprimir</Button><Button variant="ghost" icon="message-circle">Contactar cliente</Button><Button variant="primary" icon="truck">Marcar como enviado</Button></>}
      />
      <div style={{ padding: 32, display: "grid", gridTemplateColumns: "1fr 360px", gap: 20 }}>
        <div style={{ display: "grid", gap: 20 }}>
          {/* Stepper */}
          <Card style={{ padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, alignItems: "center" }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>Estado del pedido</div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 999, background: st.bg, color: st.color, fontSize: 12, fontWeight: 600 }}>{st.label}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${stages.length}, 1fr)`, gap: 4, alignItems: "center" }}>
              {stages.map((s, i) => {
                const done = i <= stageIdx;
                return (
                  <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, position: "relative" }}>
                    <span style={{ width: 28, height: 28, borderRadius: 999, background: done ? "var(--accent)" : "var(--surface-3)", color: done ? "#fff" : "var(--text-dim)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, zIndex: 1 }}>{i + 1}</span>
                    <span style={{ fontSize: 11, color: done ? "var(--text)" : "var(--text-dim)", fontWeight: done ? 600 : 400, textTransform: "uppercase", letterSpacing: "0.06em" }}>{D.LS_ORDER_STATUS[s].label}</span>
                    {i < stages.length - 1 && <div style={{ position: "absolute", top: 13, left: "50%", right: "-50%", height: 2, background: i < stageIdx ? "var(--accent)" : "var(--surface-3)", zIndex: 0 }} />}
                  </div>
                );
              })}
            </div>
          </Card>
          {/* Items */}
          <Card style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ padding: "18px 24px", borderBottom: "1px solid var(--line)", fontSize: 15, fontWeight: 600 }}>Productos comprados</div>
            {order.products.map((it, i) => {
              const p = D.LS_PRODUCTS.find(x => x.id === it.pid);
              const price = p.promo || p.price;
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 24px", borderBottom: "1px solid var(--line)" }}>
                  <ProdImage product={p} size={56} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{p.name}</div>
                    <div style={{ fontSize: 12, color: "var(--text-dim)", display: "flex", gap: 14, marginTop: 4 }}>
                      <span>Talle: <strong style={{ color: "var(--text-muted)" }}>{it.size}</strong></span>
                      <span>Color: <strong style={{ color: "var(--text-muted)" }}>{it.color}</strong></span>
                      <span>SKU: <strong style={{ color: "var(--text-muted)" }}>{p.sku}</strong></span>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>× {it.qty}</div>
                  <div style={{ fontWeight: 600, minWidth: 100, textAlign: "right" }}>{moneyAR(price * it.qty)}</div>
                </div>
              );
            })}
            <div style={{ padding: 20, background: "var(--surface-2)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text-muted)", marginBottom: 6 }}><span>Subtotal</span><span>{moneyAR(order.total * 0.92)}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text-muted)", marginBottom: 6 }}><span>Envío</span><span>{moneyAR(order.total * 0.08)}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, fontWeight: 700, marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--line)" }}><span>Total</span><span className="font-display" style={{ letterSpacing: "-0.02em" }}>{moneyAR(order.total)}</span></div>
            </div>
          </Card>
          {/* Actions */}
          <Card style={{ padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Acciones rápidas</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              <Button variant="ghost" icon="check-circle-2">Cambiar estado</Button>
              <Button variant="ghost" icon="printer">Imprimir comprobante</Button>
              <Button variant="ghost" icon="message-circle">Contactar cliente</Button>
              <Button variant="ghost" icon="truck">Marcar como enviado</Button>
              <Button variant="ghost" icon="rotate-ccw">Reembolsar</Button>
              <Button variant="ghost" icon="x">Cancelar pedido</Button>
            </div>
          </Card>
        </div>
        <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
          <Card style={{ padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Cliente</div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <Avatar name={order.client} hue={200} />
              <div>
                <div style={{ fontWeight: 600 }}>{order.client}</div>
                <div style={{ fontSize: 12, color: "var(--text-dim)" }}>Cliente Looppy · Premium</div>
              </div>
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
              <div>+54 261 522 4488</div>
              <div>fede.romero@gmail.com</div>
            </div>
            <div style={{ marginTop: 14, padding: 12, background: "var(--accent-soft)", borderRadius: 10, display: "flex", alignItems: "center", gap: 10 }}>
              <Icon name="sparkles" size={16} style={{ color: "var(--accent)" }} />
              <div style={{ fontSize: 12 }}><strong>+{Math.round(order.total / 200)} pts Looppy</strong> con este pedido</div>
            </div>
          </Card>
          <Card style={{ padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Pago y envío</div>
            <div style={{ display: "grid", gap: 10 }}>
              <div><div style={{ fontSize: 11, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Método de pago</div><div style={{ fontSize: 13, fontWeight: 500, marginTop: 3 }}>{order.pay}</div></div>
              <div><div style={{ fontSize: 11, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Método de envío</div><div style={{ fontSize: 13, fontWeight: 500, marginTop: 3 }}>{order.ship}</div></div>
              <div><div style={{ fontSize: 11, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Dirección</div><div style={{ fontSize: 13, fontWeight: 500, marginTop: 3, lineHeight: 1.4 }}>San Martín 1245, 4to B<br />Mendoza Capital, M5500</div></div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// CUSTOMERS (ecom)
function EcomCustomers() {
  const D = window.LS_DATA;
  return (
    <>
      <EcomTopBar kicker="Clientes" title="Clientes de la tienda" subtitle={`${D.LS_CUSTOMERS.length} clientes compradores · integrados con Looppy`}
        actions={<Button variant="primary" icon="user-plus">Nuevo cliente</Button>}
      />
      <div style={{ padding: 32, display: "grid", gap: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {[
            { l: "Clientes ecommerce", n: "284", d: "+14 esta semana", icon: "users" },
            { l: "Clientes VIP", n: "32", d: "11% del total", icon: "crown" },
            { l: "Ticket promedio cliente", n: "$58.4k", d: "+8% vs mes ant.", icon: "wallet" },
            { l: "Recompra (90d)", n: "42%", d: "Buen indicador", icon: "repeat" },
          ].map((s, i) => (
            <Card key={i} style={{ padding: 18 }}>
              <Icon name={s.icon} size={18} style={{ color: "var(--text-dim)", marginBottom: 10 }} />
              <div className="stat-num" style={{ fontSize: 28 }}>{s.n}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{s.l}</div>
              <div style={{ fontSize: 11, color: "var(--text-dim)" }}>{s.d}</div>
            </Card>
          ))}
        </div>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: 20, display: "flex", gap: 12, alignItems: "center", borderBottom: "1px solid var(--line)" }}>
            <div style={{ flex: 1, maxWidth: 380 }}><Input icon="search" placeholder="Buscar cliente…" /></div>
            <div style={{ display: "flex", gap: 6 }}><span className="chip chip-active">Todos</span><span className="chip">VIP</span><span className="chip">Frecuentes</span><span className="chip">Nuevos</span></div>
          </div>
          <table className="tbl">
            <thead><tr><th>Cliente</th><th>Contacto</th><th>Pedidos</th><th>Total gastado</th><th>Última compra</th><th>Puntos Looppy</th><th>Nivel</th><th>Producto favorito</th></tr></thead>
            <tbody>
              {D.LS_CUSTOMERS.map(c => (
                <tr key={c.email} className="hov">
                  <td><div style={{ display: "flex", alignItems: "center", gap: 12 }}><Avatar name={c.name} hue={200 + c.orders * 7} /><div style={{ fontWeight: 500 }}>{c.name}</div></div></td>
                  <td><div style={{ fontSize: 13 }}>{c.phone}</div><div style={{ fontSize: 12, color: "var(--text-dim)" }}>{c.email}</div></td>
                  <td style={{ fontWeight: 600 }}>{c.orders}</td>
                  <td style={{ fontWeight: 600 }}>{moneyAR(c.spent)}</td>
                  <td style={{ color: "var(--text-muted)" }}>{c.last}</td>
                  <td><Badge tone="accent" icon="sparkles">{c.points} pts</Badge></td>
                  <td><TierBadge tier={c.tier} /></td>
                  <td style={{ fontSize: 12, color: "var(--text-muted)" }}>{c.fav}</td>
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
// PROMOS / COUPONS
function EcomPromos() {
  const promos = [
    { code: "VERANO25", desc: "20% off en toda la tienda", uses: 184, max: 500, status: "active", expires: "31 Ene" },
    { code: "PADEL10", desc: "10% off en categoría Pádel", uses: 47, max: 200, status: "active", expires: "30 Jun" },
    { code: "VIPONLY", desc: "Envío gratis para VIP", uses: 23, max: null, status: "active", expires: null },
    { code: "BLACKWEEK", desc: "30% off productos seleccionados", uses: 0, max: 1000, status: "scheduled", expires: "29 Nov" },
    { code: "COMBOBASKET", desc: "Combo: 2 camisetas a $69.900", uses: 12, max: 100, status: "active", expires: "15 Jun" },
  ];
  return (
    <>
      <EcomTopBar kicker="Marketing" title="Cupones y promociones"
        subtitle="Acelerá ventas con campañas segmentadas"
        actions={<Button variant="primary" icon="plus">Nuevo cupón</Button>}
      />
      <div style={{ padding: 32, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
        {promos.map(p => (
          <Card key={p.code} style={{ padding: 20, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: 14, background: "repeating-linear-gradient(0deg, transparent, transparent 6px, var(--line) 6px, var(--line) 8px)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 18, fontWeight: 700, letterSpacing: "0.08em", padding: "6px 12px", background: "#0a0a0a", color: "#fff", borderRadius: 8 }}>{p.code}</div>
              {p.status === "active" ? <Badge tone="success" dot>Activo</Badge> : <Badge tone="warning" dot>Programado</Badge>}
            </div>
            <div style={{ fontSize: 15, fontWeight: 600 }}>{p.desc}</div>
            <div style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 4 }}>Usos: {p.uses}{p.max ? ` / ${p.max}` : " · ilimitado"}{p.expires ? ` · vence ${p.expires}` : " · sin vencimiento"}</div>
            {p.max && <div className="prog" style={{ marginTop: 12, maxWidth: "calc(100% - 26px)" }}><div className="prog-bar" style={{ width: `${(p.uses / p.max) * 100}%` }} /></div>}
          </Card>
        ))}
      </div>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// PAYMENTS — Conexión completa de gateways con tokens
function EcomPayments() {
  const [connectModal, setConnectModal] = useState(null);
  const methods = [
    { id: "mp", name: "Mercado Pago", desc: "Hasta 12 cuotas. Pago instantáneo. Líder en Argentina.", icon: "credit-card", status: "active", fee: "5.9% + IVA", logo: "MP", logoColor: "#00B1EA", connected: "MP-USR-8431***", since: "Mar 2024" },
    { id: "stripe", name: "Stripe", desc: "Cobros internacionales en USD, EUR y 135 monedas más.", icon: "globe", status: "active", fee: "3.4% + USD 0.30", logo: "S", logoColor: "#635BFF", connected: "sk_live_51N***", since: "Ago 2024" },
    { id: "paypal", name: "PayPal", desc: "Pagos internacionales con la billetera global más usada.", icon: "wallet", status: "pending", fee: "5.4% + USD 0.30", logo: "PP", logoColor: "#003087" },
    { id: "modo", name: "Modo", desc: "Billetera de los bancos argentinos. Crece 200% año a año.", icon: "smartphone", status: "active", fee: "2.4%", logo: "M", logoColor: "#FF4D00", connected: "modo-merch-22***", since: "Dic 2024" },
    { id: "cashea", name: "Cashea", desc: "Crédito al instante. Aumenta el ticket promedio +60%.", icon: "trending-up", status: "inactive", fee: "Comisión variable", logo: "C", logoColor: "#19A974" },
    { id: "transfer", name: "Transferencia bancaria", desc: "CBU/Alias. Sin costo, confirmación manual o automática.", icon: "landmark", status: "active", fee: "Sin costo", logo: "TR", logoColor: "#1F2937", connected: "Banco Santander · CBU termina en *4421", since: "Mar 2024" },
    { id: "cash", name: "Efectivo / Pago al retirar", desc: "Pago en tienda al retirar el pedido. Sin comisiones.", icon: "wallet", status: "active", fee: "Sin costo", logo: "$", logoColor: "#0a0a0a" },
    { id: "rapipago", name: "Rapipago / Pago Fácil", desc: "Cobrá en efectivo a través de cualquier sucursal del país.", icon: "store", status: "inactive", fee: "3.5%", logo: "RP", logoColor: "#FFD700" },
    { id: "crypto", name: "Cripto (Bitso, Lemon)", desc: "Recibí USDT, BTC, ETH. Convertido a ARS si querés.", icon: "bitcoin", status: "inactive", fee: "1.2%", logo: "₿", logoColor: "#F7931A" },
  ];

  const active = methods.filter(m => m.status === "active");
  const pending = methods.filter(m => m.status === "pending");
  const available = methods.filter(m => m.status === "inactive");

  return (
    <>
      <EcomTopBar kicker="Configuración · Pagos" title="Medios de pago" subtitle={`${active.length} conectados · ${pending.length} pendiente · ${available.length} disponibles`}
        actions={<Button variant="ghost" icon="download">Reporte de cobros</Button>}
      />
      <div style={{ padding: 32, display: "grid", gap: 28 }}>
        {/* Summary card */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {[
            { l: "Cobrado este mes", v: "$8.420.900", d: "Todos los gateways", i: "wallet" },
            { l: "Comisiones totales", v: "$402.180", d: "4.8% promedio", i: "percent" },
            { l: "Tasa de conversión", v: "94.2%", d: "Intento → pago exitoso", i: "check-circle-2" },
            { l: "Tiempo de cobro", v: "1.4 días", d: "Promedio a tu CBU", i: "clock" },
          ].map((s, i) => (
            <Card key={i} style={{ padding: 18 }}>
              <Icon name={s.i} size={16} style={{ color: "var(--text-dim)", marginBottom: 8 }} />
              <div className="stat-num" style={{ fontSize: 24 }}>{s.v}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{s.l}</div>
              <div style={{ fontSize: 11, color: "var(--text-dim)" }}>{s.d}</div>
            </Card>
          ))}
        </div>

        {/* Connected */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <span style={{ width: 22, height: 22, borderRadius: 999, background: "rgba(52,211,153,0.18)", color: "#34d399", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="check" size={12} /></span>
            <div style={{ fontSize: 15, fontWeight: 600 }}>Conectados</div>
            <span style={{ fontSize: 12, color: "var(--text-dim)" }}>· {active.length}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
            {active.map(m => (
              <PaymentMethodCard key={m.id} method={m} onConnect={() => setConnectModal(m)} />
            ))}
          </div>
        </div>

        {/* Pending */}
        {pending.length > 0 && (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span style={{ width: 22, height: 22, borderRadius: 999, background: "rgba(240,185,78,0.18)", color: "#f0b94e", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="alert-circle" size={12} /></span>
              <div style={{ fontSize: 15, fontWeight: 600 }}>Pendiente de configurar</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
              {pending.map(m => <PaymentMethodCard key={m.id} method={m} onConnect={() => setConnectModal(m)} />)}
            </div>
          </div>
        )}

        {/* Available */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <span style={{ width: 22, height: 22, borderRadius: 999, background: "var(--surface-3)", color: "var(--text-muted)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="plus" size={12} /></span>
            <div style={{ fontSize: 15, fontWeight: 600 }}>Disponibles para activar</div>
            <span style={{ fontSize: 12, color: "var(--text-dim)" }}>· {available.length}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
            {available.map(m => <PaymentMethodCard key={m.id} method={m} onConnect={() => setConnectModal(m)} />)}
          </div>
        </div>

        {/* Other settings */}
        <Card style={{ padding: 24 }}>
          <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Configuración general de cobros</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
            <Toggle label="Reintentar cobros fallidos automáticamente" defaultChecked />
            <Toggle label="Enviar comprobante por email al cliente" defaultChecked />
            <Toggle label="Aceptar pagos en cuotas con interés" defaultChecked />
            <Toggle label="Mostrar precio en USD junto al ARS" />
            <Toggle label="Cobrar señas en reservas (50% por defecto)" />
            <Toggle label="Confirmación manual de transferencias" defaultChecked />
          </div>
        </Card>
      </div>

      {/* Connect modal */}
      <PaymentConnectModal method={connectModal} onClose={() => setConnectModal(null)} />
    </>
  );
}

// Single method card
function PaymentMethodCard({ method, onConnect }) {
  const isConnected = method.status === "active";
  return (
    <Card style={{ padding: 20, display: "flex", alignItems: "center", gap: 16, position: "relative" }}>
      <span style={{ width: 52, height: 52, borderRadius: 12, background: method.logoColor, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 18, flexShrink: 0, fontFamily: "'Instrument Sans', sans-serif", letterSpacing: "-0.02em" }}>{method.logo}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 3 }}>
          <div style={{ fontSize: 15, fontWeight: 600 }}>{method.name}</div>
          {method.status === "active" && <Badge tone="success" dot>Activo</Badge>}
          {method.status === "pending" && <Badge tone="warning" dot>Pendiente</Badge>}
        </div>
        <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.4 }}>{method.desc}</div>
        {isConnected && method.connected && (
          <div style={{ marginTop: 8, padding: "6px 10px", background: "var(--surface-2)", borderRadius: 6, fontSize: 11, color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace", display: "flex", alignItems: "center", gap: 8 }}>
            <Icon name="key-round" size={11} style={{ color: "#34d399" }} />
            {method.connected}
            {method.since && <span style={{ marginLeft: "auto", color: "var(--text-dim)" }}>desde {method.since}</span>}
          </div>
        )}
        <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 6, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.06em" }}>COMISIÓN: {method.fee}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <Button variant={isConnected ? "ghost" : "primary"} size="sm" icon={isConnected ? "settings" : "plug"} onClick={onConnect}>{isConnected ? "Configurar" : method.status === "pending" ? "Completar" : "Conectar"}</Button>
        {isConnected && <Toggle defaultChecked />}
      </div>
    </Card>
  );
}

// Connection modal: per-gateway form
function PaymentConnectModal({ method, onClose }) {
  if (!method) return null;
  const forms = {
    mp: { title: "Conectar Mercado Pago", fields: [
      { l: "Access Token", k: "token", t: "password", ph: "APP_USR-1234567890abcdef-...", help: "Lo encontrás en tu panel de Mercado Pago → Tus integraciones → Credenciales de producción" },
      { l: "Public Key", k: "pubkey", ph: "APP_USR-1234abcd-5678-..." },
      { l: "URL de webhook (notificaciones)", k: "webhook", readonly: true, val: "https://livesports.looppy.shop/api/webhook/mp" },
    ], note: "Copiamos el webhook a tu portapapeles para que lo pegues en MP." },
    stripe: { title: "Conectar Stripe", fields: [
      { l: "Secret Key (sk_live_...)", k: "sk", t: "password", ph: "sk_live_51N...", help: "Stripe Dashboard → Developers → API keys → Secret key" },
      { l: "Publishable Key (pk_live_...)", k: "pk", ph: "pk_live_51N..." },
      { l: "Webhook Signing Secret", k: "whsec", t: "password", ph: "whsec_...", help: "Necesario para verificar webhooks de Stripe" },
      { l: "Moneda principal", k: "currency", select: ["USD", "EUR", "ARS", "BRL", "MXN", "CLP", "COP"] },
    ] },
    paypal: { title: "Conectar PayPal", fields: [
      { l: "Client ID", k: "clientid", ph: "Aaaaa..." },
      { l: "Client Secret", k: "clientsecret", t: "password", ph: "EOoooo..." },
      { l: "Modo", k: "mode", select: ["Producción", "Sandbox (pruebas)"] },
    ] },
    modo: { title: "Conectar Modo", fields: [
      { l: "Merchant ID", k: "merchant", ph: "modo-merch-..." },
      { l: "API Key", k: "key", t: "password", ph: "key_..." },
    ] },
    cashea: { title: "Activar Cashea", fields: [
      { l: "ID de Comercio", k: "merchant", ph: "Lo provee Cashea al firmar" },
      { l: "Token de API", k: "token", t: "password" },
    ], note: "Cashea requiere firma de contrato previa. Tarda 3-5 días hábiles en activarse." },
    transfer: { title: "Configurar transferencia bancaria", fields: [
      { l: "Banco", k: "bank", select: ["Santander", "Galicia", "BBVA", "Macro", "ICBC", "Brubank", "Mercado Pago", "Ualá", "Naranja X", "Otro"] },
      { l: "CBU / CVU", k: "cbu", ph: "20 dígitos" },
      { l: "Alias", k: "alias", ph: "live.sports.mp" },
      { l: "Titular", k: "owner", ph: "Razón social o nombre" },
      { l: "CUIT", k: "cuit", ph: "30-12345678-9" },
    ] },
    cash: { title: "Pago al retirar / efectivo", fields: [
      { l: "Dirección del retiro", k: "addr", ph: "Av. San Martín 985, Mendoza" },
      { l: "Horario", k: "hours", ph: "Lun a Vie 9 a 19h, Sáb 9 a 13h" },
      { l: "Instrucciones para el cliente", k: "notes", textarea: true, ph: "¿Algo importante que el cliente deba saber al retirar?" },
    ] },
    rapipago: { title: "Activar Rapipago / Pago Fácil", fields: [
      { l: "Convenio Comercio", k: "conv", ph: "Te lo da Rapipago" },
      { l: "Token de API", k: "token", t: "password" },
    ] },
    crypto: { title: "Conectar billetera cripto", fields: [
      { l: "Proveedor", k: "provider", select: ["Bitso", "Lemon Cash", "Belo", "Buenbit"] },
      { l: "Wallet ID o dirección", k: "wallet", ph: "Dirección de recepción" },
      { l: "API Key", k: "key", t: "password" },
      { l: "Convertir automáticamente a ARS", k: "convert", toggle: true },
    ] },
  };
  const f = forms[method.id] || forms.transfer;
  return (
    <Modal open={!!method} onClose={onClose} title={f.title} subtitle={method.desc} width={620}
      footer={<><Button variant="ghost" onClick={onClose}>Cancelar</Button><Button variant="primary" icon="plug">Probar conexión y guardar</Button></>}>
      <div style={{ display: "grid", gap: 14 }}>
        <div style={{ padding: 14, background: "var(--accent-soft)", borderRadius: 10, display: "flex", gap: 10, alignItems: "flex-start" }}>
          <Icon name="shield-check" size={16} style={{ color: "var(--accent)", marginTop: 1 }} />
          <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
            <strong style={{ color: "var(--text)" }}>Seguro:</strong> los tokens se guardan encriptados con AES-256 y nunca se ven en logs ni reportes. Solo vos podés rotarlos.
          </div>
        </div>
        {f.fields.map(field => (
          <Field key={field.k} label={field.l}>
            {field.select ? (
              <select className="select">{field.select.map(o => <option key={o}>{o}</option>)}</select>
            ) : field.textarea ? (
              <textarea className="textarea" rows={3} placeholder={field.ph} />
            ) : field.toggle ? (
              <Toggle defaultChecked={false} label="Activar" />
            ) : (
              <Input type={field.t || "text"} placeholder={field.ph} defaultValue={field.val} readOnly={field.readonly} />
            )}
            {field.help && <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: -2 }}>{field.help}</div>}
            {field.readonly && <Button variant="ghost" size="sm" icon="copy" style={{ alignSelf: "flex-start" }}>Copiar URL</Button>}
          </Field>
        ))}
        {f.note && (
          <div style={{ padding: 12, background: "var(--surface-2)", borderRadius: 10, fontSize: 12, color: "var(--text-muted)", display: "flex", gap: 8, alignItems: "flex-start" }}>
            <Icon name="info" size={14} style={{ color: "var(--text-muted)", marginTop: 1 }} />
            {f.note}
          </div>
        )}
        <a style={{ fontSize: 12, color: "var(--accent)", textDecoration: "underline", cursor: "pointer" }}>Ver guía paso a paso →</a>
      </div>
    </Modal>
  );
}

// ───────────────────────────────────────────────────────────────
// SHIPPING
function EcomShipping() {
  const methods = [
    { name: "Retiro en tienda", desc: "Av. San Martín 985, Mendoza Capital", time: "Mismo día", cost: "Gratis", status: "active" },
    { name: "Envío local Mendoza", desc: "Gran Mendoza · moto/auto propio", time: "24h", cost: "$2.500", status: "active" },
    { name: "Correo Argentino", desc: "A todo el país · seguimiento", time: "3 a 7 días", cost: "Según peso", status: "active" },
    { name: "Andreani", desc: "Envío estándar a domicilio", time: "2 a 5 días", cost: "Según destino", status: "active" },
    { name: "Envío personalizado", desc: "Coordiná con el cliente", time: "Variable", cost: "A convenir", status: "active" },
  ];
  return (
    <>
      <EcomTopBar kicker="Configuración" title="Métodos de envío" subtitle="Configurá zonas, costos y promesas de entrega"
        actions={<Button variant="primary" icon="plus">Nuevo método</Button>}
      />
      <div style={{ padding: 32, display: "grid", gap: 20 }}>
        <Card style={{ padding: 20, background: "#0a0a0a", color: "#fff", display: "flex", alignItems: "center", gap: 18, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, transparent, transparent 14px, rgba(255,255,255,0.04) 14px, rgba(255,255,255,0.04) 16px)" }} />
          <Icon name="truck" size={28} style={{ color: "#fff", position: "relative" }} />
          <div style={{ flex: 1, position: "relative" }}>
            <div className="font-display" style={{ fontSize: 22, fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.01em" }}>Envío gratis desde $80.000</div>
            <div style={{ fontSize: 12, color: "#aaa", marginTop: 2 }}>Promoción activa · se muestra en toda la tienda</div>
          </div>
          <Toggle defaultChecked />
        </Card>
        <div style={{ display: "grid", gap: 12 }}>
          {methods.map(m => (
            <Card key={m.name} style={{ padding: 18, display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ width: 44, height: 44, borderRadius: 11, background: "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="package" size={18} /></span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{m.name}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{m.desc}</div>
              </div>
              <div style={{ textAlign: "right" }}><div style={{ fontSize: 12, color: "var(--text-dim)" }}>{m.time}</div><div style={{ fontWeight: 600 }}>{m.cost}</div></div>
              <Toggle defaultChecked={m.status === "active"} />
            </Card>
          ))}
        </div>
        <Card style={{ padding: 24 }}>
          <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Zonas de cobertura</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              { z: "Mendoza Capital", c: "$2.500", t: "Mismo día" },
              { z: "Godoy Cruz / Las Heras", c: "$3.200", t: "24h" },
              { z: "Maipú / Guaymallén", c: "$3.800", t: "24h" },
              { z: "Lujan / Tunuyán", c: "$5.400", t: "48h" },
              { z: "Resto Argentina", c: "$ Variable", t: "3-7 días" },
              { z: "Internacional", c: "A consultar", t: "10-15 días" },
            ].map((z, i) => (
              <div key={i} style={{ padding: 14, border: "1px solid var(--line)", borderRadius: 12 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{z.z}</div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 12, color: "var(--text-muted)" }}><span>{z.t}</span><strong style={{ color: "var(--text)" }}>{z.c}</strong></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// REPORTS
function EcomReports() {
  const D = window.LS_DATA;
  return (
    <>
      <EcomTopBar kicker="Análisis" title="Reportes" subtitle="Insights del negocio en tiempo real"
        actions={<><Button variant="ghost" icon="download">Exportar</Button><Button variant="ghost" icon="calendar">Mayo 2026</Button></>}
      />
      <div style={{ padding: 32, display: "grid", gap: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {[
            { l: "Ventas online", n: "$5.840.000", d: "69% del total", icon: "globe" },
            { l: "Ventas POS", n: "$2.580.900", d: "31% del total", icon: "scan-line" },
            { l: "Visitas tienda", n: "12.840", d: "Conv. 3.8%", icon: "eye" },
            { l: "Stock inmovilizado", n: "$1.240.000", d: "82 días promedio", icon: "alert-triangle" },
          ].map((s, i) => (
            <Card key={i} style={{ padding: 18 }}>
              <Icon name={s.icon} size={18} style={{ color: "var(--text-dim)", marginBottom: 10 }} />
              <div className="stat-num" style={{ fontSize: 28 }}>{s.n}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{s.l}</div>
              <div style={{ fontSize: 11, color: "var(--text-dim)" }}>{s.d}</div>
            </Card>
          ))}
        </div>
        <Card style={{ padding: 24 }}>
          <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>Ventas por canal · 30 días</div>
          <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Online vs POS — el ecommerce captura 7 de cada 10 pesos</div>
          <BarChart data={D.LS_SALES_WEEK} height={200} />
        </Card>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <Card style={{ padding: 24 }}>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 16 }}>Categorías más rentables</div>
            <div style={{ display: "grid", gap: 12 }}>
              {[
                { c: "Zapatillas Indoor", r: 4915000, p: 95 },
                { c: "Paletas y complementos", r: 4477000, p: 87 },
                { c: "Camisetas Básquet", r: 3268000, p: 64 },
                { c: "Buzos", r: 2516000, p: 49 },
                { c: "Polleras Pádel", r: 864000, p: 17 },
              ].map((r, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}><span style={{ fontSize: 13, fontWeight: 500 }}>{r.c}</span><span style={{ fontSize: 13, fontWeight: 600 }}>{moneyAR(r.r)}</span></div>
                  <div className="prog"><div className="prog-bar" style={{ width: `${r.p}%` }} /></div>
                </div>
              ))}
            </div>
          </Card>
          <Card style={{ padding: 24 }}>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 16 }}>Impacto de Looppy</div>
            <div style={{ display: "grid", gap: 14 }}>
              {[
                { l: "Clientes con puntos activos", v: "184 / 284", n: "65%" },
                { l: "Compras que usaron puntos", v: "47 pedidos", n: "$1.8M" },
                { l: "Recompra clientes VIP", v: "78%", n: "+36 pts vs no-VIP" },
                { l: "Tickets canjeados desde la app", v: "23", n: "este mes" },
              ].map((x, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px", background: "var(--accent-soft)", borderRadius: 10 }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{x.l}</div>
                    <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 2 }}>{x.n}</div>
                  </div>
                  <div style={{ fontWeight: 700, color: "var(--accent)", fontFamily: "'Instrument Sans', sans-serif", fontSize: 18 }}>{x.v}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// SETTINGS
function EcomSettings() {
  return (
    <>
      <EcomTopBar kicker="Configuración" title="Configuración de tienda" subtitle="Identidad, dominio, impuestos y políticas" />
      <div style={{ padding: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <Card style={{ padding: 24 }}>
          <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Identidad de tienda</div>
          <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 18 }}>
            <div style={{ width: 64, height: 64, borderRadius: 999, background: "#0a0a0a", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: 22 }}>LS</div>
            <div>
              <div style={{ fontWeight: 600 }}>Live Sports</div>
              <div style={{ fontSize: 12, color: "var(--text-dim)" }}>livesports.looppy.shop</div>
              <Button variant="ghost" size="sm" icon="upload" style={{ marginTop: 6 }}>Cambiar logo</Button>
            </div>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            <Field label="Nombre comercial"><Input defaultValue="Live Sports" /></Field>
            <Field label="Slogan"><Input defaultValue="Entrená fuerte. Comprá inteligente." /></Field>
            <Field label="Dominio"><Input defaultValue="livesports.looppy.shop" /></Field>
          </div>
        </Card>
        <Card style={{ padding: 24 }}>
          <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Datos del negocio</div>
          <div style={{ display: "grid", gap: 12 }}>
            <Field label="Razón social"><Input defaultValue="Live Sports SRL" /></Field>
            <Field label="CUIT"><Input defaultValue="30-71845632-7" /></Field>
            <Field label="Dirección física"><Input defaultValue="Av. San Martín 985, Mendoza" /></Field>
            <Field label="Teléfono"><Input defaultValue="+54 261 555 1234" /></Field>
          </div>
        </Card>
        <Card style={{ padding: 24, gridColumn: "1 / -1" }}>
          <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Integración con Looppy</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { l: "Sumar puntos en cada compra", d: "1 punto cada $200 gastado", on: true },
              { l: "Mostrar puntos en la tienda", d: "“Ganás +240 pts” en cada producto", on: true },
              { l: "Reconocer cliente Looppy", d: "Auto-login con email registrado", on: true },
              { l: "Descuento extra VIP", d: "10% off en toda la tienda", on: true },
              { l: "Puntos canjeables en checkout", d: "Hasta 50% del total", on: false },
              { l: "Cupones segmentados por nivel", d: "Distintos descuentos por tier", on: true },
            ].map((s, i) => (
              <div key={i} style={{ padding: 14, border: "1px solid var(--line)", borderRadius: 12, display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{s.l}</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 3 }}>{s.d}</div>
                </div>
                <Toggle defaultChecked={s.on} />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

Object.assign(window, { EcomCategories, EcomVariations, EcomStock, EcomOrders, EcomCustomers, EcomPromos, EcomPayments, EcomShipping, EcomReports, EcomSettings });
