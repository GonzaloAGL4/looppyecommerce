// LIVE SPORTS — Temas del ecommerce + Desarrollo a medida

const ECOM_THEMES = [
  {
    id: "live-bold",
    name: "Live Bold",
    desc: "El tema actual de Live Sports. Brutalist sport: negro/blanco, tipografía display agresiva, alto contraste.",
    tags: ["Deporte", "Moderno", "Alto contraste"],
    color: "#0a0a0a",
    accent: "#ffffff",
    current: true,
    preview: "bold",
  },
  {
    id: "soft-natural",
    name: "Soft Natural",
    desc: "Estética minimal con tonos cálidos y serif elegante. Ideal para cosmética, deco y lifestyle.",
    tags: ["Lifestyle", "Cosmética", "Premium"],
    color: "#faf6f2",
    accent: "#a07050",
    preview: "soft",
  },
  {
    id: "neo-tech",
    name: "Neo Tech",
    desc: "Layout tipo plataforma SaaS, con detalles neon y micro-animaciones. Para electrónica y gadgets.",
    tags: ["Electrónica", "Gadgets", "Futurista"],
    color: "#0c0e16",
    accent: "#7afff5",
    preview: "tech",
  },
  {
    id: "boutique",
    name: "Boutique",
    desc: "Editorial, espacioso, fotos grandes. Pensado para moda femenina y joyería.",
    tags: ["Moda", "Joyería", "Editorial"],
    color: "#fff",
    accent: "#000",
    preview: "boutique",
  },
  {
    id: "market",
    name: "Market Fresh",
    desc: "Color vibrante, categorías destacadas, precio grande. Ideal para almacenes y verdulería online.",
    tags: ["Almacén", "Mercado", "Verdulería"],
    color: "#f7fbed",
    accent: "#3aa84a",
    preview: "market",
  },
];

function EcomThemes() {
  const [selected, setSelected] = useState(ECOM_THEMES[0]);
  const [showDevModal, setShowDevModal] = useState(false);
  return (
    <>
      <EcomTopBar kicker="Diseño" title="Temas y diseño visual" subtitle="Elegí cómo se ve tu tienda online. Sin tocar código."
        actions={<><Button variant="ghost" icon="external-link">Ver tienda</Button><Button variant="primary" icon="save" disabled>Aplicar tema</Button></>}
      />
      <div style={{ padding: 32, display: "grid", gap: 24 }}>
        {/* Current theme indicator */}
        <div style={{ padding: 18, background: "var(--surface)", border: "1px solid var(--accent)", borderRadius: 14, display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ width: 40, height: 40, borderRadius: 10, background: "var(--accent-soft)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="check-circle-2" size={18} /></span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>Tema actual: Live Bold</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Activo desde el 12 de marzo de 2024 · 184 clientes lo vieron hoy</div>
          </div>
          <Button variant="ghost" icon="paintbrush">Personalizar</Button>
        </div>

        {/* Themes grid */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
            <div>
              <div style={{ fontSize: 17, fontWeight: 600 }}>5 temas premium</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Todos optimizados para mobile · velocidad de carga {"<"} 1.2s · SEO friendly</div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <span className="chip chip-active">Todos</span>
              <span className="chip">Mobile-first</span>
              <span className="chip">Editorial</span>
              <span className="chip">Maximalista</span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {ECOM_THEMES.map(t => (
              <div key={t.id} onClick={() => setSelected(t)} style={{ background: "var(--surface)", border: selected.id === t.id ? "2px solid var(--accent)" : "1px solid var(--line)", borderRadius: 16, overflow: "hidden", cursor: "pointer", display: "flex", flexDirection: "column", transition: "all .15s" }}>
                <ThemePreview theme={t} />
                <div style={{ padding: 18 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>{t.name}</div>
                    {t.current && <Badge tone="success" dot>En uso</Badge>}
                  </div>
                  <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>{t.desc}</p>
                  <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
                    {t.tags.map(tag => <span key={tag} className="chip" style={{ fontSize: 10 }}>{tag}</span>)}
                  </div>
                  <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                    <Button variant="ghost" size="sm" icon="eye" style={{ flex: 1, justifyContent: "center" }}>Vista previa</Button>
                    <Button variant={selected.id === t.id ? "primary" : "ghost"} size="sm" icon={t.current ? "check" : "paintbrush"} style={{ flex: 1, justifyContent: "center" }}>{t.current ? "Activo" : "Aplicar"}</Button>
                  </div>
                </div>
              </div>
            ))}
            {/* Custom dev CTA card */}
            <div onClick={() => setShowDevModal(true)} style={{ background: "linear-gradient(135deg, var(--accent), hsl(263 70% 26%))", color: "#fff", borderRadius: 16, padding: 26, cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden", minHeight: 380 }}>
              <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 60%)" }} />
              <div style={{ position: "relative" }}>
                <span style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}><Icon name="code-2" size={20} /></span>
                <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.85, fontWeight: 700, marginBottom: 8 }}>Desarrollo a medida</div>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 600, margin: 0, letterSpacing: "-0.025em", lineHeight: 1.1 }}>¿Querés un diseño 100% único?</h3>
                <p style={{ fontSize: 13, opacity: 0.92, marginTop: 10, lineHeight: 1.5 }}>Nuestro equipo te arma una tienda con tu identidad de marca, animaciones premium y componentes a medida.</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 18px", display: "grid", gap: 6, fontSize: 12, opacity: 0.92 }}>
                  {["Diseño con tu equipo de marca", "Componentes únicos", "Entrega en 3 a 6 semanas", "Soporte 90 días incluido"].map(b => (
                    <li key={b} style={{ display: "flex", gap: 8, alignItems: "center" }}><Icon name="check" size={12} /> {b}</li>
                  ))}
                </ul>
                <Button icon="headphones" style={{ background: "#fff", color: "var(--accent)", width: "100%", justifyContent: "center" }}>Solicitar cotización</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Customize section */}
        <Card style={{ padding: 28 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            <div>
              <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>Personalización</div>
              <h3 className="font-display" style={{ fontSize: 26, fontWeight: 600, margin: 0, letterSpacing: "-0.025em" }}>Ajustá colores, tipografía y secciones sin desarrollador</h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 10, lineHeight: 1.5 }}>
                Cada tema viene con un editor visual donde podés cambiar el logo, los colores, las tipografías, ocultar o reordenar secciones, y ver el resultado en vivo antes de publicar.
              </p>
              <div style={{ display: "grid", gap: 10, marginTop: 18 }}>
                {[
                  { i: "type", l: "Tipografías Google Fonts + custom" },
                  { i: "palette", l: "Paleta de marca con color picker" },
                  { i: "layout-grid", l: "Reordenar y ocultar secciones del home" },
                  { i: "image", l: "Subir logo, favicon y hero" },
                  { i: "smartphone", l: "Vista previa mobile / tablet / desktop" },
                ].map(f => (
                  <div key={f.l} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--text-muted)" }}>
                    <Icon name={f.i} size={14} style={{ color: "var(--accent)" }} />{f.l}
                  </div>
                ))}
              </div>
              <Button variant="primary" icon="paintbrush" style={{ marginTop: 22 }}>Abrir editor visual</Button>
            </div>
            <div style={{ background: "var(--surface-2)", borderRadius: 14, padding: 20, border: "1px solid var(--line)" }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 14 }}>Vista previa del editor</div>
              <div style={{ display: "grid", gap: 10 }}>
                <Field label="Color primario"><div style={{ display: "flex", gap: 6 }}>
                  {["#0a0a0a", "#a78bfa", "#34d399", "#f0b94e", "#f87171", "#60a5fa"].map(c => (
                    <span key={c} style={{ width: 28, height: 28, borderRadius: 8, background: c, border: c === "#0a0a0a" ? "2px solid var(--accent)" : "1px solid var(--line-strong)", cursor: "pointer" }} />
                  ))}
                </div></Field>
                <Field label="Tipografía display"><select className="select"><option>Instrument Sans</option><option>Anton</option><option>Bebas Neue</option><option>Playfair Display</option></select></Field>
                <Field label="Radio de bordes"><div style={{ display: "flex", gap: 6 }}>
                  {["0", "8", "16", "24"].map(r => <span key={r} className={`chip ${r === "16" ? "chip-active" : ""}`}>{r}px</span>)}
                </div></Field>
                <Field label="Densidad"><div style={{ display: "flex", gap: 6 }}>
                  {["Compact", "Regular", "Spacious"].map(d => <span key={d} className={`chip ${d === "Regular" ? "chip-active" : ""}`}>{d}</span>)}
                </div></Field>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Custom development modal */}
      <Modal open={showDevModal} onClose={() => setShowDevModal(false)} title="Solicitar desarrollo a medida" subtitle="Te contestamos en menos de 24 horas hábiles" width={620}
        footer={<><Button variant="ghost" onClick={() => setShowDevModal(false)}>Cancelar</Button><Button variant="primary" icon="send">Enviar consulta</Button></>}>
        <div style={{ display: "grid", gap: 14 }}>
          <div style={{ padding: 14, background: "var(--accent-soft)", borderRadius: 10, fontSize: 13, color: "var(--text-muted)", display: "flex", gap: 10 }}>
            <Icon name="info" size={16} style={{ color: "var(--accent)" }} />
            Equipo de 8 diseñadores y devs full-stack. Tu store sale en 3 a 6 semanas según complejidad. Desde $400.000.
          </div>
          <Field label="¿Qué necesitás?">
            <select className="select">
              <option>Tema completamente custom</option>
              <option>Adaptación de un tema existente</option>
              <option>Componentes específicos (ej: configurador 3D)</option>
              <option>Integración con sistema existente (ERP, CRM)</option>
              <option>App móvil nativa con tu marca</option>
              <option>Otro · contame en el detalle</option>
            </select>
          </Field>
          <Field label="Detalle del proyecto"><textarea className="textarea" rows={4} placeholder="Contanos qué buscás, links de referencias, deadline si tenés…" /></Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <Field label="Presupuesto estimado">
              <select className="select">
                <option>$200K - $500K</option>
                <option>$500K - $1M</option>
                <option>$1M - $3M</option>
                <option>+$3M</option>
                <option>Aún no lo defino</option>
              </select>
            </Field>
            <Field label="Plazo deseado">
              <select className="select">
                <option>Lo antes posible</option>
                <option>1 mes</option>
                <option>2-3 meses</option>
                <option>Flexible</option>
              </select>
            </Field>
          </div>
        </div>
      </Modal>
    </>
  );
}

// Visual preview per theme
function ThemePreview({ theme }) {
  const styles = {
    bold: { bg: "#0a0a0a", fg: "#fff", accent: "#fff" },
    soft: { bg: "#faf6f2", fg: "#3a2820", accent: "#a07050" },
    tech: { bg: "#0c0e16", fg: "#fff", accent: "#7afff5" },
    boutique: { bg: "#fff", fg: "#000", accent: "#000" },
    market: { bg: "#f7fbed", fg: "#1d3a1f", accent: "#3aa84a" },
  };
  const s = styles[theme.preview] || styles.bold;
  return (
    <div style={{ aspectRatio: "4/3", background: s.bg, color: s.fg, padding: 18, position: "relative", overflow: "hidden" }}>
      {/* Mini nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{ width: 16, height: 16, borderRadius: theme.preview === "bold" ? 999 : 4, border: `2px solid ${s.fg}` }} />
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em" }}>LIVE</span>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {[1, 2, 3].map(i => <span key={i} style={{ width: 14, height: 14, borderRadius: 4, background: `${s.fg}22` }} />)}
        </div>
      </div>
      {/* Hero */}
      <div style={{ fontFamily: theme.preview === "soft" || theme.preview === "boutique" ? "Georgia, serif" : "'Instrument Sans', sans-serif", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em", fontSize: 22, textTransform: theme.preview === "bold" || theme.preview === "market" ? "uppercase" : "none" }}>
        {theme.preview === "soft" ? "Bienestar diario" : theme.preview === "tech" ? "next gen" : theme.preview === "boutique" ? "New In" : theme.preview === "market" ? "Frescos hoy" : "ENTRENÁ FUERTE"}
      </div>
      {/* Sub */}
      <div style={{ fontSize: 9, opacity: 0.65, marginTop: 6, maxWidth: "70%" }}>Subtítulo de ejemplo para mostrar el tema</div>
      {/* CTA */}
      <div style={{ display: "inline-block", marginTop: 12, padding: "5px 10px", background: s.accent, color: s.bg, borderRadius: theme.preview === "soft" || theme.preview === "boutique" ? 0 : 999, fontSize: 9, fontWeight: 700, letterSpacing: theme.preview === "bold" ? "0.1em" : "0", textTransform: theme.preview === "bold" ? "uppercase" : "none" }}>
        {theme.preview === "soft" ? "Descubrir" : "Comprar ahora"}
      </div>
      {/* Product cards mini */}
      <div style={{ position: "absolute", bottom: 14, left: 14, right: 14, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5 }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ aspectRatio: "1", background: `${s.fg}10`, borderRadius: theme.preview === "soft" || theme.preview === "boutique" ? 2 : 6, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 6, background: `${s.fg}22`, borderRadius: theme.preview === "soft" || theme.preview === "boutique" ? 0 : 4 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { EcomThemes, ECOM_THEMES });
