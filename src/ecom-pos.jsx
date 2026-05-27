// LIVE SPORTS — POS / cashier interface
function EcomPOS() {
  const D = window.LS_DATA;
  const [cart, setCart] = useState([
    { pid: "p01", qty: 1, size: "M", color: "Negro" },
    { pid: "p08", qty: 2, size: "Único", color: "Negro" },
  ]);
  const [client, setClient] = useState(D.LS_CUSTOMERS[1]);
  const [discount, setDiscount] = useState(0);
  const [q, setQ] = useState("");
  const [clientModal, setClientModal] = useState(false);

  const items = cart.map(it => {
    const p = D.LS_PRODUCTS.find(x => x.id === it.pid);
    return { ...it, p, unit: p.promo || p.price };
  });
  const subtotal = items.reduce((s, it) => s + it.unit * it.qty, 0);
  const discountAmt = subtotal * (discount / 100);
  const total = subtotal - discountAmt;
  // Calculate points only if client is set
  const pointsEarned = client ? Math.round(total / 200) : 0;
  const visible = D.LS_PRODUCTS.filter(p => p.status === "active" && (!q || p.name.toLowerCase().includes(q.toLowerCase())));

  const add = (p) => setCart(c => {
    const ex = c.find(x => x.pid === p.id);
    if (ex) return c.map(x => x.pid === p.id ? { ...x, qty: x.qty + 1 } : x);
    return [...c, { pid: p.id, qty: 1, size: "M", color: "Negro" }];
  });
  const inc = (i, d) => setCart(c => c.map((x, j) => j === i ? { ...x, qty: Math.max(1, x.qty + d) } : x));
  const remove = (i) => setCart(c => c.filter((_, j) => j !== i));

  return (
    <div style={{ height: "100vh", display: "grid", gridTemplateColumns: "1fr 420px", background: "#0a0a0a", color: "#fff" }}>
      {/* LEFT — product grid */}
      <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* header */}
        <div style={{ padding: "18px 24px", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: 13 }}>LS</div>
          <div>
            <div className="font-display" style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.01em" }}>POS · Mostrador</div>
            <div style={{ fontSize: 11, color: "#888", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Caja #02 · Lucía M. · 14:32</div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
            <button style={posBtnGhost}><Icon name="scan-line" size={16} /> Escanear código</button>
            <button style={posBtnGhost} onClick={() => window.location.reload()}><Icon name="arrow-left" size={16} /> Salir</button>
          </div>
        </div>
        {/* search */}
        <div style={{ padding: "14px 24px", display: "flex", gap: 12, alignItems: "center", borderBottom: "1px solid #1a1a1a" }}>
          <div style={{ flex: 1, position: "relative" }}>
            <Icon name="search" size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#666" }} />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Buscar producto, SKU o código de barras…" style={{ width: "100%", padding: "13px 16px 13px 42px", borderRadius: 10, background: "#161616", color: "#fff", fontSize: 14, border: "1px solid #2a2a2a", outline: "none" }} />
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {["Todos", "Básquet", "Pádel", "Accesorios"].map((c, i) => (
              <span key={c} style={{ ...posChip, ...(i === 0 ? posChipActive : {}) }}>{c}</span>
            ))}
          </div>
        </div>
        {/* products */}
        <div style={{ flex: 1, overflow: "auto", padding: 24 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
            {visible.map(p => (
              <button key={p.id} onClick={() => add(p)} style={{ background: "#141414", border: "1px solid #1f1f1f", borderRadius: 14, padding: 12, textAlign: "left", cursor: "pointer", color: "#fff", transition: "all .15s" }}>
                <ProdImage product={p} size={140} dark />
                <div style={{ marginTop: 10, fontSize: 12, color: "#888", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.06em", textTransform: "uppercase" }}>{p.sport === "basket" ? "Básquet" : "Pádel"}</div>
                <div style={{ fontSize: 13, fontWeight: 600, marginTop: 2, lineHeight: 1.3 }}>{p.name}</div>
                <div style={{ marginTop: 6, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: 16 }}>{moneyAR(p.promo || p.price)}</div>
                  <div style={{ width: 26, height: 26, borderRadius: 999, background: "#fff", color: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="plus" size={14} /></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT — cart */}
      <div style={{ background: "#0f0f0f", borderLeft: "1px solid #1a1a1a", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "18px 22px", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div className="font-display" style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase" }}>Venta actual</div>
          <span style={{ fontSize: 11, color: "#666", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>{items.length} ítems</span>
        </div>
        {/* client */}
        <div onClick={() => setClientModal(true)} style={{ padding: "14px 22px", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", gap: 12, background: "#141414", cursor: "pointer", transition: "background .15s" }}>
          {client ? (
            <>
              <Avatar name={client.name} hue={263} size={36} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{client.name}</div>
                <div style={{ fontSize: 11, color: "#888", display: "flex", gap: 8, alignItems: "center" }}>
                  <Icon name="sparkles" size={11} style={{ color: "#a78bfa" }} /> {client.points} pts Looppy · {client.tier.toUpperCase()}
                </div>
              </div>
              <button style={posBtnGhost} onClick={(e) => { e.stopPropagation(); setClient(null); }}><Icon name="x" size={14} /></button>
              <button style={posBtnGhost}><Icon name="chevron-right" size={14} /></button>
            </>
          ) : (
            <>
              <div style={{ width: 36, height: 36, borderRadius: 999, background: "#1a1a1a", border: "1.5px dashed #3a3a3a", display: "flex", alignItems: "center", justifyContent: "center", color: "#666" }}><Icon name="user-plus" size={16} /></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#bbb" }}>Sin cliente asignado</div>
                <div style={{ fontSize: 11, color: "#666" }}>Cliqué para buscar o agregar uno nuevo</div>
              </div>
              <button style={{ ...posBtnGhost, background: "#a78bfa", color: "#fff", border: "1px solid #a78bfa" }}><Icon name="user-round-search" size={14} /> Asociar cliente</button>
            </>
          )}
        </div>
        {/* items */}
        <div style={{ flex: 1, overflow: "auto", padding: "10px 14px" }}>
          {items.length === 0 ? (
            <div style={{ padding: 40, textAlign: "center", color: "#666" }}>
              <Icon name="shopping-cart" size={28} style={{ color: "#333" }} />
              <div style={{ marginTop: 10, fontSize: 13 }}>Sin productos en el carrito</div>
            </div>
          ) : items.map((it, i) => (
            <div key={i} style={{ display: "flex", gap: 12, padding: 12, borderBottom: "1px solid #1a1a1a", alignItems: "center" }}>
              <ProdImage product={it.p} size={44} dark />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{it.p.name}</div>
                <div style={{ fontSize: 11, color: "#666", marginTop: 2 }}>{it.size} · {it.color}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#1a1a1a", borderRadius: 8, padding: 3 }}>
                <button onClick={() => inc(i, -1)} style={qtyBtn}>−</button>
                <span style={{ width: 22, textAlign: "center", fontWeight: 600, fontSize: 13 }}>{it.qty}</span>
                <button onClick={() => inc(i, 1)} style={qtyBtn}>+</button>
              </div>
              <div style={{ fontWeight: 600, fontSize: 13, minWidth: 70, textAlign: "right" }}>{moneyAR(it.unit * it.qty)}</div>
              <button onClick={() => remove(i)} style={{ ...qtyBtn, background: "transparent", color: "#666" }}><Icon name="x" size={14} /></button>
            </div>
          ))}
        </div>
        {/* totals */}
        <div style={{ padding: "16px 22px", borderTop: "1px solid #1a1a1a", display: "grid", gap: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#888" }}><span>Subtotal</span><span>{moneyAR(subtotal)}</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#888" }}>
            <span>Descuento</span>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              {[0, 5, 10, 15].map(p => (
                <button key={p} onClick={() => setDiscount(p)} style={{ padding: "3px 8px", borderRadius: 6, background: discount === p ? "#fff" : "#1a1a1a", color: discount === p ? "#0a0a0a" : "#aaa", fontSize: 11, fontWeight: 600, border: "none", cursor: "pointer" }}>{p}%</button>
              ))}
            </div>
          </div>
          {discount > 0 && <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#f0b94e" }}><span>Descuento aplicado</span><span>−{moneyAR(discountAmt)}</span></div>}
          {client && (
            <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 14px", background: "rgba(167,139,250,0.1)", borderRadius: 10, marginTop: 4 }}>
              <span style={{ fontSize: 12, display: "flex", alignItems: "center", gap: 8, color: "#c4b5fd" }}><Icon name="sparkles" size={14} /> {client.name.split(" ")[0]} sumará</span>
              <span style={{ fontWeight: 700, color: "#c4b5fd", fontFamily: "'Instrument Sans', sans-serif", fontSize: 15 }}>+{pointsEarned} pts</span>
            </div>
          )}
        </div>
        {/* pay */}
        <div style={{ padding: "16px 22px 20px", background: "#000" }}>
          <div className="font-display" style={{ display: "flex", justifyContent: "space-between", fontSize: 28, fontWeight: 700, alignItems: "baseline", marginBottom: 14 }}>
            <span style={{ fontSize: 13, color: "#888", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>Total</span>
            <span style={{ letterSpacing: "-0.03em" }}>{moneyAR(total)}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
            {[
              { l: "Efectivo", i: "wallet" },
              { l: "Débito", i: "credit-card" },
              { l: "Crédito", i: "credit-card" },
              { l: "Mercado Pago", i: "smartphone" },
            ].map(m => (
              <button key={m.l} style={{ ...posBtnGhost, justifyContent: "center", padding: "10px 12px" }}><Icon name={m.i} size={14} /> {m.l}</button>
            ))}
          </div>
          <button style={{ width: "100%", padding: "16px", background: "#fff", color: "#0a0a0a", border: "none", borderRadius: 12, fontWeight: 700, fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            <Icon name="check-circle-2" size={18} /> Cobrar y emitir
          </button>
        </div>
      </div>

      <POSClientModal open={clientModal} onClose={() => setClientModal(false)} onSelect={(c) => { setClient(c); setClientModal(false); }} current={client} />
    </div>
  );
}

const posBtnGhost = { display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 12px", borderRadius: 8, background: "#1a1a1a", color: "#fff", fontSize: 12, fontWeight: 600, border: "1px solid #2a2a2a", cursor: "pointer" };
const posChip = { display: "inline-flex", alignItems: "center", padding: "6px 12px", borderRadius: 999, background: "#161616", color: "#aaa", fontSize: 12, fontWeight: 500, cursor: "pointer", border: "1px solid #2a2a2a" };
const posChipActive = { background: "#fff", color: "#0a0a0a", borderColor: "#fff" };
const qtyBtn = { width: 24, height: 24, border: "none", background: "#2a2a2a", color: "#fff", borderRadius: 6, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600 };

// ───────────────────────────────────────────────────────────────
// CLIENT SELECTOR MODAL (asociar/agregar cliente desde el POS)
function POSClientModal({ open, onClose, onSelect, current }) {
  const D = window.LS_DATA;
  const [mode, setMode] = useState("search"); // "search" | "create"
  const [q, setQ] = useState("");
  const [draft, setDraft] = useState({ name: "", phone: "", email: "", whatsapp: true });
  if (!open) return null;

  const filtered = D.LS_CUSTOMERS.filter(c =>
    !q || c.name.toLowerCase().includes(q.toLowerCase()) || c.phone.includes(q) || c.email.toLowerCase().includes(q.toLowerCase())
  );

  const createClient = () => {
    if (!draft.name) return;
    const newC = {
      name: draft.name,
      phone: draft.phone,
      email: draft.email || draft.name.toLowerCase().replace(/\s+/g, ".") + "@looppy.app",
      orders: 0, spent: 0, last: "Recién", points: 0, tier: "nuevo",
      fav: "—",
    };
    onSelect(newC);
  };

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#0f0f0f", color: "#fff", borderRadius: 18, width: "100%", maxWidth: 620, maxHeight: "90vh", display: "flex", flexDirection: "column", border: "1px solid #2a2a2a", overflow: "hidden" }}>
        {/* Header */}
        <div style={{ padding: "20px 24px", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div className="font-display" style={{ fontSize: 22, fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.01em" }}>
              {mode === "search" ? "Asociar cliente" : "Nuevo cliente"}
            </div>
            <div style={{ fontSize: 12, color: "#888", marginTop: 3 }}>{mode === "search" ? "Buscá por nombre, teléfono o email" : "Cargá el cliente nuevo · sumará puntos desde esta venta"}</div>
          </div>
          <button onClick={onClose} style={{ ...posBtnGhost, padding: 8 }}><Icon name="x" size={16} /></button>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 6, padding: "12px 24px", borderBottom: "1px solid #1a1a1a" }}>
          <button onClick={() => setMode("search")} style={{ ...posChip, ...(mode === "search" ? posChipActive : {}), padding: "8px 14px" }}>
            <Icon name="search" size={12} /> <span style={{ marginLeft: 6 }}>Buscar cliente</span>
          </button>
          <button onClick={() => setMode("create")} style={{ ...posChip, ...(mode === "create" ? posChipActive : {}), padding: "8px 14px" }}>
            <Icon name="user-plus" size={12} /> <span style={{ marginLeft: 6 }}>Nuevo cliente</span>
          </button>
          <button onClick={() => onSelect(null)} style={{ ...posChip, padding: "8px 14px", marginLeft: "auto" }}>
            <Icon name="user-x" size={12} /> <span style={{ marginLeft: 6 }}>Venta sin cliente</span>
          </button>
        </div>

        {/* Body */}
        {mode === "search" ? (
          <div style={{ flex: 1, overflow: "auto" }}>
            <div style={{ padding: "16px 24px", position: "sticky", top: 0, background: "#0f0f0f", zIndex: 2 }}>
              <div style={{ position: "relative" }}>
                <Icon name="search" size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#666" }} />
                <input autoFocus value={q} onChange={e => setQ(e.target.value)} placeholder="Buscar por nombre, teléfono o email…" style={{ width: "100%", padding: "12px 14px 12px 42px", borderRadius: 10, background: "#1a1a1a", color: "#fff", fontSize: 14, border: "1px solid #2a2a2a", outline: "none" }} />
              </div>
            </div>
            <div style={{ padding: "0 12px 16px" }}>
              {filtered.length === 0 ? (
                <div style={{ padding: 40, textAlign: "center" }}>
                  <Icon name="user-x" size={28} style={{ color: "#444" }} />
                  <div style={{ marginTop: 10, fontSize: 13, color: "#888" }}>No encontramos clientes con ese criterio</div>
                  <button onClick={() => { setMode("create"); setDraft({ ...draft, name: q.match(/^[a-zA-ZÀ-ÿ\s]+$/) ? q : "" }); }} style={{ marginTop: 16, padding: "10px 18px", background: "#a78bfa", color: "#fff", border: "none", borderRadius: 999, fontWeight: 700, fontSize: 12, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    <Icon name="user-plus" size={13} /> Crear cliente nuevo
                  </button>
                </div>
              ) : filtered.map(c => (
                <button key={c.email} onClick={() => onSelect(c)} style={{ display: "flex", width: "100%", padding: 12, borderRadius: 10, background: current && current.email === c.email ? "#1f1c2d" : "transparent", border: "1px solid transparent", alignItems: "center", gap: 12, cursor: "pointer", color: "#fff", textAlign: "left", marginBottom: 4 }}
                  onMouseEnter={e => e.currentTarget.style.background = current && current.email === c.email ? "#1f1c2d" : "#1a1a1a"}
                  onMouseLeave={e => e.currentTarget.style.background = current && current.email === c.email ? "#1f1c2d" : "transparent"}>
                  <Avatar name={c.name} hue={263 + c.orders * 7} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>{c.name}</div>
                      <TierBadge tier={c.tier} />
                    </div>
                    <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{c.phone} · {c.email}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 13, color: "#a78bfa", fontWeight: 700, display: "flex", alignItems: "center", gap: 4, justifyContent: "flex-end" }}><Icon name="sparkles" size={12} /> {c.points} pts</div>
                    <div style={{ fontSize: 10, color: "#666", marginTop: 2 }}>{c.orders} compras</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ flex: 1, overflow: "auto", padding: 24, display: "grid", gap: 14 }}>
            <div style={{ padding: 14, background: "rgba(167,139,250,0.1)", borderRadius: 10, display: "flex", gap: 10, alignItems: "flex-start", fontSize: 12, color: "#bbb" }}>
              <Icon name="sparkles" size={16} style={{ color: "#a78bfa", marginTop: 1 }} />
              <div>El cliente recibirá un SMS/WhatsApp con su tarjeta Looppy. Sumará <strong style={{ color: "#fff" }}>puntos desde esta misma venta</strong>.</div>
            </div>
            <POSField label="Nombre y apellido" required>
              <input autoFocus value={draft.name} onChange={e => setDraft({ ...draft, name: e.target.value })} placeholder="Federico Romero" style={posInput} />
            </POSField>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <POSField label="Teléfono" required>
                <input value={draft.phone} onChange={e => setDraft({ ...draft, phone: e.target.value })} placeholder="+54 261 555 4488" style={posInput} />
              </POSField>
              <POSField label="DNI (opcional)">
                <input placeholder="34123456" style={posInput} />
              </POSField>
            </div>
            <POSField label="Email (opcional)">
              <input value={draft.email} onChange={e => setDraft({ ...draft, email: e.target.value })} placeholder="cliente@email.com" style={posInput} />
            </POSField>
            <POSField label="Cumpleaños (opcional)">
              <input type="date" style={posInput} />
            </POSField>
            <div style={{ display: "grid", gap: 10, padding: 14, background: "#1a1a1a", borderRadius: 10 }}>
              <div style={{ fontSize: 11, color: "#888", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Comunicación</div>
              <POSToggle label="Aviso de tarjeta Looppy por WhatsApp" defaultOn={true} />
              <POSToggle label="Recibir promociones por email" defaultOn={true} />
              <POSToggle label="Aceptar términos y política de privacidad" defaultOn={true} />
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{ padding: "16px 24px", borderTop: "1px solid #1a1a1a", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
          <div style={{ fontSize: 11, color: "#666", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {mode === "search" ? `${filtered.length} resultado${filtered.length === 1 ? "" : "s"}` : "Cliente nuevo"}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={onClose} style={{ ...posBtnGhost, padding: "10px 16px" }}>Cancelar</button>
            {mode === "create" && (
              <button onClick={createClient} disabled={!draft.name} style={{ padding: "10px 18px", background: draft.name ? "#fff" : "#3a3a3a", color: draft.name ? "#0a0a0a" : "#666", border: "none", borderRadius: 8, fontWeight: 700, fontSize: 12, cursor: draft.name ? "pointer" : "not-allowed", textTransform: "uppercase", letterSpacing: "0.08em", display: "inline-flex", alignItems: "center", gap: 6 }}>
                <Icon name="user-plus" size={13} /> Crear y asociar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function POSField({ label, required, children }) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontSize: 11, color: "#888", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>{label}{required && <span style={{ color: "#f87171", marginLeft: 4 }}>*</span>}</span>
      {children}
    </label>
  );
}
function POSToggle({ label, defaultOn }) {
  const [on, setOn] = useState(!!defaultOn);
  return (
    <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", fontSize: 12, color: "#ddd" }}>
      <span>{label}</span>
      <span onClick={() => setOn(!on)} style={{ width: 32, height: 18, borderRadius: 999, background: on ? "#a78bfa" : "#333", position: "relative", transition: ".15s", flexShrink: 0 }}>
        <span style={{ width: 14, height: 14, borderRadius: 999, background: "#fff", position: "absolute", top: 2, left: on ? 16 : 2, transition: ".15s" }} />
      </span>
    </label>
  );
}
const posInput = { width: "100%", padding: "10px 12px", borderRadius: 8, background: "#1a1a1a", color: "#fff", fontSize: 14, border: "1px solid #2a2a2a", outline: "none", fontFamily: "inherit" };

Object.assign(window, { EcomPOS });