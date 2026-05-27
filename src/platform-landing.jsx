// LOOPPY — Landing comercial completa de la plataforma
// Mantiene el rol de selector (3 experiencias) pero ahora vende el sistema completo.

function PlatformLanding({ go }) {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", overflowX: "hidden" }}>
      <LDNav go={go} />
      <LDHero go={go} />
      <LDLogos />
      <LDShowcase />
      <LDProblem />
      <LDExperiences go={go} />
      <LDModules go={go} />
      <LDModulesAdvanced go={go} />
      <LDSolutions />
      <LDBenefits />
      <LDSectors />
      <LDMetrics />
      <LDIntegrations />
      <LDHowItWorks />
      <LDTestimonials />
      <LDPlans go={go} />
      <LDComparison />
      <LDFAQ />
      <LDFinalCTA go={go} />
      <LDFooter />
    </div>
  );
}

// ── NAV
function LDNav({ go }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(7,7,10,0.85)", backdropFilter: "blur(14px)", borderBottom: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "14px 28px", display: "flex", alignItems: "center", gap: 24 }}>
        <LogoMark size={26} />
        <nav style={{ display: "flex", gap: 4, marginLeft: 16 }}>
          {[
            ["Producto", "modules"],
            ["Soluciones", "solutions"],
            ["Planes", "plans"],
            ["Clientes", "testimonials"],
            ["FAQ", "faq"],
          ].map(([l, id]) => (
            <a key={l} href={`#${id}`} style={{ padding: "8px 12px", borderRadius: 8, color: "var(--text-muted)", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>{l}</a>
          ))}
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
          <Button variant="ghost" onClick={() => go("login")}>Iniciar sesión</Button>
          <Button variant="primary" icon="zap" onClick={() => go("register")}>Probar gratis</Button>
        </div>
      </div>
    </header>
  );
}

// ── HERO
function LDHero({ go }) {
  return (
    <section style={{ position: "relative", padding: "80px 28px 100px", overflow: "hidden" }}>
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
      <div style={{ position: "absolute", top: -200, right: -200, width: 600, height: 600, background: "radial-gradient(circle, var(--accent-glow), transparent 60%)", opacity: 0.5, filter: "blur(60px)" }} />
      <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 60, alignItems: "center" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, background: "var(--accent-soft)", color: "var(--accent)", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 22 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }} />
            Nuevo · Ecommerce + POS + Fidelización en una sola app
          </div>
          <h1 className="font-display" style={{ fontSize: "clamp(48px, 6.5vw, 88px)", fontWeight: 600, margin: 0, letterSpacing: "-0.04em", lineHeight: 0.95 }}>
            Más clientes.<br />
            <span style={{ color: "var(--accent)" }}>Más ventas.</span><br />
            Menos vueltas.
          </h1>
          <p style={{ fontSize: 19, color: "var(--text-muted)", lineHeight: 1.5, marginTop: 28, maxWidth: 540 }}>
            Looppy es la plataforma todo-en-uno para que tu comercio fidelice clientes, venda online y gestione la caja física <strong style={{ color: "var(--text)" }}>desde un solo lugar</strong>. Sin desarrolladores. Sin integraciones eternas. Sin excusas.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <Button variant="primary" icon="rocket" size="lg" onClick={() => go("register")}>Empezar gratis · 14 días</Button>
            <Button variant="ghost" icon="play" size="lg" onClick={() => go("biz-dashboard")}>Ver demo en vivo</Button>
          </div>
          <div style={{ display: "flex", gap: 28, marginTop: 32, flexWrap: "wrap" }}>
            {[
              ["check", "Sin tarjeta de crédito"],
              ["check", "Activación en 5 minutos"],
              ["check", "Soporte en español"],
            ].map(([i, t]) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-muted)" }}>
                <Icon name={i} size={14} style={{ color: "#34d399" }} />{t}
              </div>
            ))}
          </div>
        </div>
        {/* visual mockup */}
        <div style={{ position: "relative", height: 540 }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Floating panel */}
            <div style={{ position: "absolute", left: 0, top: 60, width: 340, height: 260, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 18, padding: 18, boxShadow: "0 50px 100px -20px rgba(0,0,0,0.5)", transform: "rotate(-3deg)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Ventas de hoy</span>
                <Badge tone="success" dot>+18%</Badge>
              </div>
              <div className="font-display" style={{ fontSize: 56, fontWeight: 600, letterSpacing: "-0.04em" }}>$684.200</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>34 visitas · 12 pedidos online</div>
              <div style={{ marginTop: 16, display: "flex", gap: 4, alignItems: "flex-end", height: 50 }}>
                {[40, 56, 72, 60, 88, 100, 84].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, background: "var(--accent)", borderRadius: 4, opacity: 0.4 + i * 0.09 }} />
                ))}
              </div>
            </div>
            {/* Phone center */}
            <div style={{ position: "relative", width: 270, height: 540, borderRadius: 36, background: "#000", padding: 9, boxShadow: "0 60px 120px -30px rgba(0,0,0,0.7), 0 0 0 1px #222", zIndex: 2 }}>
              <div style={{ position: "absolute", top: 16, left: "50%", transform: "translateX(-50%)", width: 80, height: 22, background: "#000", borderRadius: 999, zIndex: 5 }} />
              <div style={{ width: "100%", height: "100%", borderRadius: 28, background: "linear-gradient(165deg, var(--accent), hsl(263 60% 28%))", padding: "32px 18px 18px", display: "flex", flexDirection: "column", color: "#fff" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                  <div>
                    <div style={{ fontSize: 10, opacity: 0.7 }}>Hola,</div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>Lucía M.</div>
                  </div>
                  <span style={{ width: 32, height: 32, borderRadius: 999, background: "rgba(255,255,255,0.18)" }} />
                </div>
                <div style={{ background: "rgba(255,255,255,0.14)", borderRadius: 14, padding: 16 }}>
                  <div style={{ fontSize: 10, opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.12em" }}>Tus puntos</div>
                  <div className="font-display" style={{ fontSize: 48, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, marginTop: 4 }}>1.240</div>
                  <div style={{ fontSize: 11, opacity: 0.85, marginTop: 4 }}>+240 esta semana</div>
                  <div style={{ height: 4, background: "rgba(255,255,255,0.2)", borderRadius: 999, marginTop: 12, overflow: "hidden" }}><div style={{ height: "100%", width: "62%", background: "#fff" }} /></div>
                </div>
                <div style={{ marginTop: 18, fontSize: 11, opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>Casi tuyo</div>
                {["Café gratis · Café Mira", "10% off · Forma Gym"].map((b, i) => (
                  <div key={i} style={{ marginTop: 8, padding: 10, background: "rgba(255,255,255,0.1)", borderRadius: 10, fontSize: 11, fontWeight: 500 }}>{b}</div>
                ))}
                <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-around", paddingTop: 14, fontSize: 9, opacity: 0.7 }}>
                  {["home", "store", "qr-code", "gift", "user"].map(i => <Icon key={i} name={i} size={16} />)}
                </div>
              </div>
            </div>
            {/* Floating order card */}
            <div style={{ position: "absolute", right: 0, bottom: 30, width: 280, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 16, padding: 16, boxShadow: "0 40px 80px -20px rgba(0,0,0,0.5)", transform: "rotate(3deg)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ width: 32, height: 32, borderRadius: 8, background: "#0a0a0a", color: "#fff", fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>LS</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>Pedido #LS-2841</div>
                  <div style={{ fontSize: 10, color: "var(--text-dim)" }}>Federico Romero · hace 2 min</div>
                </div>
                <Badge tone="accent" dot>Nuevo</Badge>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderTop: "1px solid var(--line)", fontSize: 12 }}>
                <span style={{ color: "var(--text-muted)" }}>Total</span>
                <span style={{ fontWeight: 700 }}>$119.900</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── LOGOS
function LDLogos() {
  const logos = ["Café Mira", "Live Sports", "Forma Gym", "Atelier Nórdico", "Pasta Madre", "Verde Mercado", "Estudio Norte", "Pet Friend"];
  return (
    <section style={{ padding: "30px 28px 50px", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 20 }}>+84 comercios ya confían en Looppy</div>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 20, opacity: 0.55 }}>
          {logos.map(l => (
            <div key={l} className="font-display" style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: "var(--text-muted)" }}>{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── PROBLEM
function LDProblem() {
  const pains = [
    { i: "user-x", t: "El 70% de tus clientes nuevos no vuelven", d: "Sin un sistema que los reconozca y los premie, no tenés cómo retenerlos." },
    { i: "trending-down", t: "Tus ventas no crecen, sólo se mueven", d: "Mismos clientes, mismos tickets, mismos meses. El crecimiento se quedó plano." },
    { i: "puzzle", t: "Pagás 5 apps distintas y nada se conecta", d: "Una para fidelizar, otra para vender online, otra para POS… y reportes manuales en Excel." },
    { i: "clock", t: "Perdés horas en tareas que se automatizan solas", d: "Cargar stock dos veces, mandar promos a mano, calcular puntos uno por uno." },
  ];
  return (
    <section style={{ padding: "100px 28px", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ maxWidth: 720, marginBottom: 56 }}>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>El problema</div>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 600, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.02 }}>
            Si tu comercio no tiene Looppy,<br />
            <span style={{ color: "var(--text-muted)" }}>está dejando plata en la mesa.</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {pains.map(p => (
            <div key={p.t} style={{ padding: 28, background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 18, display: "flex", gap: 18, alignItems: "flex-start" }}>
              <span style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(248,113,113,0.14)", color: "#f87171", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={p.i} size={22} /></span>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>{p.t}</h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", margin: "8px 0 0", lineHeight: 1.55 }}>{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── EXPERIENCES (3 roles)
function LDExperiences({ go }) {
  const roles = [
    { id: "customer", title: "Cliente final", kicker: "Mobile · App del cliente", desc: "La experiencia que ve la persona que va a un comercio o compra en una tienda online.", icon: "smartphone", target: "customer", bullets: ["Tarjeta con puntos y QR", "Mis beneficios disponibles", "Mis pedidos online", "Mis direcciones y favoritos"], gradient: "linear-gradient(135deg, hsl(263 80% 64%), hsl(263 80% 38%))", preview: "phone" },
    { id: "merchant", title: "Dueño de comercio", kicker: "Desktop · Panel de gestión", desc: "Todo lo que necesita un comercio: fidelización, clientes, ventas online y caja física.", icon: "store", target: "biz-dashboard", bullets: ["Fidelización · puntos y beneficios", "Ecommerce completo · Live Sports", "POS / venta en mostrador", "Reportes cross-canal"], gradient: "linear-gradient(135deg, #1c1c24, #07070a)", preview: "panel" },
    { id: "super", title: "Superadmin Looppy", kicker: "Platform · Multi-tenant", desc: "Operación global de la plataforma. Comercios, planes, soporte y salud del sistema.", icon: "shield-check", target: "super-dashboard", bullets: ["84 comercios activos", "MRR + GMV consolidado", "Soporte y SLA en vivo", "Auditoría cross-tenant"], gradient: "linear-gradient(135deg, #f0b94e, #b8841c)", preview: "ops" },
  ];
  return (
    <section style={{ padding: "100px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>La plataforma</div>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 600, margin: 0, letterSpacing: "-0.035em", lineHeight: 1 }}>
            Una plataforma, <span style={{ color: "var(--accent)" }}>tres experiencias.</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", maxWidth: 620, margin: "16px auto 0", lineHeight: 1.5 }}>
            Looppy une al cliente, al comercio y a la operación de la plataforma en un solo sistema. Probá cada una sin registrarte.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {roles.map(r => (
            <div key={r.id} onClick={() => go(r.target)} style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 22, padding: 28, cursor: "pointer", transition: "all .25s", display: "flex", flexDirection: "column", gap: 18, position: "relative", overflow: "hidden" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "var(--line-strong)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--line)"; }}>
              <div style={{ aspectRatio: "5/3", borderRadius: 14, background: r.gradient, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 60%)" }} />
                {r.preview === "phone" && <PreviewPhone />}
                {r.preview === "panel" && <PreviewPanel />}
                {r.preview === "ops" && <PreviewOps />}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ width: 36, height: 36, borderRadius: 10, background: "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}><Icon name={r.icon} size={18} /></span>
                  <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{r.kicker}</span>
                </div>
                <h3 className="font-display" style={{ fontSize: 26, fontWeight: 600, margin: "4px 0 8px", letterSpacing: "-0.025em" }}>{r.title}</h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>{r.desc}</p>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 7 }}>
                {r.bullets.map((b, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-muted)" }}>
                    <Icon name="check" size={13} style={{ color: "var(--accent)", flexShrink: 0 }} />{b}
                  </li>
                ))}
              </ul>
              <Button variant="primary" iconRight="arrow-right" style={{ marginTop: "auto", width: "100%", justifyContent: "center" }}>Ver demo</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── MODULES
function LDModules({ go }) {
  const mods = [
    { i: "sparkles", t: "Fidelización con puntos", d: "Sumá puntos por visita o compra. Definí beneficios. Reconocé clientes VIP. Automatizado." },
    { i: "shopping-bag", t: "Tienda online completa", d: "Catálogo, carrito, checkout, Mercado Pago, envíos. En 10 minutos, tu marca tiene su .shop." },
    { i: "scan-line", t: "POS / Caja física", d: "Vendé en mostrador desde la tablet. Lectura de código de barras. Stock y puntos en tiempo real." },
    { i: "users-round", t: "Gestión de clientes", d: "Base unificada online + offline. Historial, etiquetas, segmentación y comunicación." },
    { i: "bar-chart-3", t: "Reportes cross-canal", d: "Ventas online vs POS, productos top, conversión, churn, impacto de tus beneficios." },
    { i: "message-circle", t: "Comunicación 1-a-1", d: "WhatsApp, email y push. Promos segmentadas por nivel, cumpleaños, recompra." },
    { i: "package", t: "Stock unificado", d: "Una única vista para tienda online, POS y reservas. Sin sobreventas, sin sorpresas." },
    { i: "ticket-percent", t: "Cupones y promociones", d: "Códigos, descuentos por categoría, combos, flash sales, regalos por nivel." },
  ];
  return (
    <section id="modules" style={{ padding: "100px 28px", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>Todo lo que necesitás</div>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 600, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.02 }}>
            8 módulos que reemplazan <span style={{ color: "var(--accent)" }}>5 sistemas</span>.
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", marginTop: 16 }}>Pagás un único costo. Tenés un único login. Y todo se conecta solo.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {mods.map(m => (
            <div key={m.t} style={{ padding: 24, background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 16, transition: "all .2s" }}>
              <span style={{ width: 40, height: 40, borderRadius: 10, background: "var(--accent-soft)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}><Icon name={m.i} size={18} /></span>
              <h3 style={{ fontSize: 15, fontWeight: 600, margin: 0 }}>{m.t}</h3>
              <p style={{ fontSize: 13, color: "var(--text-muted)", margin: "8px 0 0", lineHeight: 1.5 }}>{m.d}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 36 }}>
          <Button variant="ghost" iconRight="arrow-right" onClick={() => go("biz-dashboard")}>Ver todos los módulos en acción</Button>
        </div>
      </div>
    </section>
  );
}

// ── BENEFITS (concrete outcomes)
function LDBenefits() {
  const items = [
    { stat: "+38%", label: "Clientes que vuelven", desc: "Con beneficios automatizados, los clientes recompran más seguido y gastan más por ticket.", icon: "repeat", side: "left" },
    { stat: "+2.4x", label: "Ticket promedio", desc: "El cliente que sabe que suma puntos compra más. Y el VIP, todavía más.", icon: "trending-up", side: "right" },
    { stat: "−5h", label: "Horas semanales de gestión", desc: "Lo que antes hacías a mano —puntos, promos, reportes— ahora se ejecuta solo.", icon: "clock", side: "left" },
    { stat: "$0", label: "Costo de integración", desc: "Sin desarrolladores. Sin Excel paralelo. Sin esperar 3 meses para empezar a vender.", icon: "zap", side: "right" },
  ];
  return (
    <section style={{ padding: "100px 28px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>Resultados reales</div>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 600, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.02 }}>
            Lo que cambia <span style={{ color: "var(--accent)" }}>desde el día 1.</span>
          </h2>
        </div>
        <div style={{ display: "grid", gap: 16 }}>
          {items.map(b => (
            <div key={b.label} style={{ padding: 32, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 22, display: "grid", gridTemplateColumns: b.side === "left" ? "auto 1fr" : "1fr auto", gap: 28, alignItems: "center" }}>
              {b.side === "left" ? (
                <>
                  <div style={{ textAlign: "left" }}>
                    <div className="font-display" style={{ fontSize: 72, fontWeight: 600, color: "var(--accent)", letterSpacing: "-0.04em", lineHeight: 1 }}>{b.stat}</div>
                    <div style={{ fontSize: 13, color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 6 }}>{b.label}</div>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                      <Icon name={b.icon} size={18} style={{ color: "var(--text-muted)" }} />
                      <span style={{ fontSize: 13, fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Beneficio</span>
                    </div>
                    <p style={{ fontSize: 19, color: "var(--text)", margin: 0, lineHeight: 1.4, maxWidth: 480 }}>{b.desc}</p>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, justifyContent: "flex-end" }}>
                      <span style={{ fontSize: 13, fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Beneficio</span>
                      <Icon name={b.icon} size={18} style={{ color: "var(--text-muted)" }} />
                    </div>
                    <p style={{ fontSize: 19, color: "var(--text)", margin: 0, lineHeight: 1.4, maxWidth: 480, marginLeft: "auto" }}>{b.desc}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div className="font-display" style={{ fontSize: 72, fontWeight: 600, color: "var(--accent)", letterSpacing: "-0.04em", lineHeight: 1 }}>{b.stat}</div>
                    <div style={{ fontSize: 13, color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 6 }}>{b.label}</div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SECTORS
function LDSectors() {
  const sectors = [
    { i: "shirt", t: "Indumentaria y deportes", d: "Stock por talle, talles online y POS unificados, combos y outlets.", ex: "Live Sports · Atelier Nórdico" },
    { i: "coffee", t: "Gastronomía y cafés", d: "Mesa, retiro o envío. Puntos por visita y combos del día.", ex: "Café Mira · Pasta Madre · Border Ramen" },
    { i: "dumbbell", t: "Gimnasios y bienestar", d: "Membresías recurrentes, premios por asistencia, planes nutricionales.", ex: "Forma Gym" },
    { i: "scissors", t: "Belleza y estética", d: "Reservas, fidelización y servicios premium con stock de productos.", ex: "Estudio Norte" },
    { i: "shopping-basket", t: "Retail y almacenes", d: "Catálogo grande, descuentos por categoría, clientes recurrentes.", ex: "Verde Mercado · Pet Friend" },
    { i: "flower", t: "Servicios y micro-retail", d: "Catálogos pequeños, alta personalización, comunicación 1-a-1.", ex: "Lila Floristería" },
  ];
  return (
    <section id="sectors" style={{ padding: "100px 28px", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 60, alignItems: "center", marginBottom: 56 }}>
          <div>
            <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>Hecho para tu rubro</div>
            <h2 className="font-display" style={{ fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 600, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.02 }}>
              No importa qué vendas.<br /><span style={{ color: "var(--accent)" }}>Looppy se adapta.</span>
            </h2>
          </div>
          <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.55, margin: 0 }}>
            Desde un café de barrio hasta una marca de indumentaria con tienda online. Looppy reconoce tu industria, sugiere reglas de puntos que funcionan y arma tu tienda online sin que muevas un dedo.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {sectors.map(s => (
            <div key={s.t} style={{ padding: 24, background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 16 }}>
              <span style={{ width: 40, height: 40, borderRadius: 10, background: "var(--accent-soft)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}><Icon name={s.i} size={20} /></span>
              <h3 style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>{s.t}</h3>
              <p style={{ fontSize: 13, color: "var(--text-muted)", margin: "8px 0 12px", lineHeight: 1.5 }}>{s.d}</p>
              <div style={{ fontSize: 11, color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>YA USAN: {s.ex}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── METRICS BANNER
function LDMetrics() {
  return (
    <section style={{ padding: "80px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", background: "linear-gradient(135deg, var(--accent), hsl(263 80% 38%))", borderRadius: 28, padding: "56px 48px", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
          <svg width="100%" height="100%"><defs><pattern id="dotsLB" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="white" /></pattern></defs><rect width="100%" height="100%" fill="url(#dotsLB)" /></svg>
        </div>
        <div style={{ position: "relative", textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.85, marginBottom: 12, fontWeight: 700 }}>El impacto</div>
          <h2 className="font-display" style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 600, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Números que firmamos.<br />Promesas que cumplimos.
          </h2>
        </div>
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {[
            { n: "84", l: "Comercios activos" },
            { n: "12.4K", l: "Clientes finales" },
            { n: "$8.4M", l: "GMV procesado · 30d" },
            { n: "99.98%", l: "Uptime plataforma" },
          ].map(m => (
            <div key={m.l} style={{ textAlign: "center" }}>
              <div className="font-display" style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1 }}>{m.n}</div>
              <div style={{ fontSize: 13, opacity: 0.85, marginTop: 8, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── HOW IT WORKS
function LDHowItWorks() {
  const steps = [
    { n: "01", t: "Creá tu cuenta", d: "5 minutos. Sin tarjeta. Sin compromiso. Empezás con el plan Free y subís cuando quieras." },
    { n: "02", t: "Cargá tu marca", d: "Logo, colores, productos, reglas de puntos, beneficios. Plantillas listas según tu rubro." },
    { n: "03", t: "Compartí el QR", d: "Tus clientes lo escanean, se registran y empiezan a sumar. Sin app que descargar. Sin fricciones." },
    { n: "04", t: "Vendé y fidelizá", d: "Mostrador, online y app del cliente conectados. Looppy automatiza puntos, beneficios y reportes." },
  ];
  return (
    <section style={{ padding: "100px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>Cómo arrancar</div>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 600, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.02 }}>
            En 4 pasos estás <span style={{ color: "var(--accent)" }}>vendiendo más.</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, position: "relative" }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{ padding: 28, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 18, position: "relative" }}>
              <div className="font-display" style={{ fontSize: 14, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.16em" }}>{s.n}</div>
              <div style={{ height: 1, background: "linear-gradient(90deg, var(--accent), transparent)", margin: "10px 0 18px" }} />
              <h3 style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>{s.t}</h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", margin: "10px 0 0", lineHeight: 1.55 }}>{s.d}</p>
              {i < steps.length - 1 && (
                <div style={{ position: "absolute", right: -10, top: "50%", transform: "translateY(-50%)", color: "var(--line-strong)", display: "none" }} className="lg:block">
                  <Icon name="arrow-right" size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── TESTIMONIALS
function LDTestimonials() {
  const quotes = [
    { q: "Pasamos de un Excel de 800 filas a un sistema que conoce a cada cliente. Las visitas aumentaron 42% en 3 meses.", n: "Lucía Méndez", r: "Dueña · Café Mira", a: "LM", hue: 263 },
    { q: "Antes vendíamos solo en local. Hoy facturamos $8M al mes online sin contratar un solo desarrollador. Looppy nos abrió un canal nuevo.", n: "Federico Romero", r: "Founder · Live Sports", a: "FR", hue: 28 },
    { q: "Tener fidelización + ecommerce + POS en una sola app fue lo que esperaba hace años. El ROI lo viste el primer mes.", n: "Mauricio Ibarra", r: "Dueño · Forma Gym", a: "MI", hue: 270 },
  ];
  return (
    <section id="testimonials" style={{ padding: "100px 28px", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>Lo que dicen los que ya están</div>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 600, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.02 }}>
            No te lo decimos nosotros.<br /><span style={{ color: "var(--accent)" }}>Te lo dicen ellos.</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {quotes.map(q => (
            <div key={q.n} style={{ padding: 28, background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 20, display: "flex", flexDirection: "column", gap: 20 }}>
              <Icon name="quote" size={22} style={{ color: "var(--accent)" }} />
              <p style={{ fontSize: 16, color: "var(--text)", margin: 0, lineHeight: 1.55, flex: 1 }}>"{q.q}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 14, borderTop: "1px solid var(--line)" }}>
                <Avatar name={q.n} hue={q.hue} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{q.n}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{q.r}</div>
                </div>
                <div style={{ marginLeft: "auto", display: "flex", gap: 1 }}>
                  {[1, 2, 3, 4, 5].map(i => <Icon key={i} name="star" size={12} style={{ color: "#f0b94e" }} />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── PLANS
function LDPlans({ go }) {
  const plans = [
    { name: "Free", price: 0, sub: "Para empezar a probar", color: "#6a6a78", features: ["Hasta 50 clientes", "1 sucursal", "App del cliente con QR", "Beneficios básicos"], cta: "Empezar gratis" },
    { name: "Plus", price: 14900, sub: "Para comercios en crecimiento", color: "#60a5fa", features: ["Hasta 500 clientes", "3 sucursales", "Reportes avanzados", "Email + WhatsApp", "Soporte por email"], cta: "Probar Plus" },
    { name: "Pro", price: 24900, sub: "El elegido por la mayoría", color: "#a78bfa", popular: true, features: ["Clientes ilimitados", "Sucursales ilimitadas", "Integración POS", "Cupones y promos avanzados", "Soporte prioritario"], cta: "Probar Pro" },
    { name: "Pro + Ecom", price: 89000, sub: "Para vender online y en local", color: "#f0b94e", features: ["Todo Pro incluido", "Tienda online completa", "Hasta 10.000 productos", "Mercado Pago / Modo / Transfer", "POS / venta en mostrador", "Soporte 24/7"], cta: "Activar Ecommerce" },
  ];
  return (
    <section id="plans" style={{ padding: "100px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>Planes simples</div>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 600, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.02 }}>
            Elegí el plan. <span style={{ color: "var(--accent)" }}>Cambiá cuando quieras.</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", marginTop: 14 }}>Sin contratos. Sin letra chica. Cancelás cuando quieras.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {plans.map(p => (
            <div key={p.name} style={{ padding: 28, background: "var(--surface)", border: p.popular ? "2px solid var(--accent)" : "1px solid var(--line)", borderRadius: 20, position: "relative", display: "flex", flexDirection: "column", boxShadow: p.popular ? "0 30px 80px -30px var(--accent-glow)" : "none" }}>
              {p.popular && <span style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", padding: "5px 14px", background: "var(--accent)", color: "#fff", borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Más elegido</span>}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: 3, background: p.color }} />
                <div style={{ fontSize: 18, fontWeight: 700 }}>{p.name}</div>
              </div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 18 }}>{p.sub}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 22 }}>
                <span className="font-display" style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.04em" }}>{p.price === 0 ? "$0" : "$" + p.price.toLocaleString("es-AR")}</span>
                {p.price > 0 && <span style={{ fontSize: 13, color: "var(--text-muted)" }}>/mes</span>}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "grid", gap: 10, flex: 1 }}>
                {p.features.map((f, i) => (
                  <li key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.4 }}>
                    <Icon name="check" size={13} style={{ color: "var(--accent)", marginTop: 3, flexShrink: 0 }} />{f}
                  </li>
                ))}
              </ul>
              <Button variant={p.popular ? "primary" : "ghost"} onClick={() => go("register")} style={{ width: "100%", justifyContent: "center" }}>{p.cta}</Button>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "var(--text-dim)", display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Icon name="shield-check" size={14} style={{ color: "#34d399" }} /> Pagos seguros con Mercado Pago</span>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Icon name="refresh-cw" size={14} style={{ color: "#34d399" }} /> Garantía 30 días</span>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Icon name="zap" size={14} style={{ color: "#34d399" }} /> Activación inmediata</span>
        </div>
      </div>
    </section>
  );
}

// ── FAQ
function LDFAQ() {
  const faqs = [
    { q: "¿Necesito conocimientos técnicos para usar Looppy?", a: "No. Si sabés usar Instagram, sabés usar Looppy. Todo es visual, todo se carga con clicks. Si te trabás, nuestro soporte responde en menos de 15 minutos." },
    { q: "¿Tengo que cambiar mi sistema de cobro actual?", a: "No. Looppy se integra con Mercado Pago, transferencia, tarjetas, efectivo y POS físicos. Vos elegís qué activar y qué dejar." },
    { q: "¿Cuánto tarda en estar online mi tienda?", a: "Si tenés tus productos cargados, en 30 minutos tu .shop está vendiendo. Si querés que te ayudemos con la carga, lo hacemos en 48hs." },
    { q: "¿Mis clientes tienen que descargar una app?", a: "No. La app del cliente es web. Solo escanean un QR, se registran con email o WhatsApp y listo. Tampoco tienen que recordar contraseñas." },
    { q: "¿Qué pasa con los puntos si me voy de Looppy?", a: "Te exportamos todos los datos: clientes, puntos, historial. Son tuyos, no nuestros. Aunque después de un mes con Looppy nadie se va." },
    { q: "¿Puedo probarlo sin pagar?", a: "Sí. El plan Free es para siempre. Y si querés probar Pro o Pro+Ecom tenés 14 días gratis sin tarjeta." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ padding: "100px 28px", background: "var(--surface)" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>Preguntas frecuentes</div>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 600, margin: 0, letterSpacing: "-0.03em" }}>
            Las dudas reales.<br />Las respuestas honestas.
          </h2>
        </div>
        <div style={{ display: "grid", gap: 10 }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden" }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: "100%", padding: "20px 22px", background: "transparent", border: "none", color: "var(--text)", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, cursor: "pointer", fontSize: 15, fontWeight: 600 }}>
                <span>{f.q}</span>
                <Icon name={open === i ? "minus" : "plus"} size={18} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
              </button>
              {open === i && (
                <div style={{ padding: "0 22px 22px", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FINAL CTA
function LDFinalCTA({ go }) {
  return (
    <section style={{ padding: "100px 28px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 56px", background: "linear-gradient(135deg, var(--accent), hsl(263 70% 26%))", borderRadius: 32, color: "#fff", position: "relative", overflow: "hidden", textAlign: "center" }}>
        <div style={{ position: "absolute", top: -150, left: -150, width: 400, height: 400, background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: -150, right: -150, width: 400, height: 400, background: "radial-gradient(circle, rgba(255,255,255,0.12), transparent 60%)" }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.85, marginBottom: 16, fontWeight: 700 }}>Tu turno</div>
          <h2 className="font-display" style={{ fontSize: "clamp(40px, 5.5vw, 72px)", fontWeight: 600, margin: 0, letterSpacing: "-0.04em", lineHeight: 1 }}>
            Dejá de perder clientes.<br />
            Empezá a ganar fidelidad.
          </h2>
          <p style={{ fontSize: 18, opacity: 0.92, maxWidth: 600, margin: "20px auto 36px", lineHeight: 1.5 }}>
            14 días gratis. Sin tarjeta de crédito. Sin instalaciones. Sin riesgos.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" icon="rocket" onClick={() => go("register")} style={{ background: "#fff", color: "var(--accent)" }}>Probar Looppy gratis</Button>
            <Button variant="ghost" size="lg" iconRight="arrow-right" onClick={() => go("biz-dashboard")} style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>Ver demo sin registrarme</Button>
          </div>
          <div style={{ marginTop: 36, display: "flex", gap: 28, justifyContent: "center", opacity: 0.85, fontSize: 13, flexWrap: "wrap" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Icon name="check" size={14} /> Activación en 5 minutos</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Icon name="check" size={14} /> Soporte en español</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Icon name="check" size={14} /> Cancelás cuando quieras</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER
function LDFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "60px 28px 32px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 50 }}>
          <div>
            <LogoMark size={28} />
            <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 14, lineHeight: 1.5, maxWidth: 280 }}>
              La plataforma todo-en-uno para comercios que quieren fidelizar, vender online y crecer sin fricciones.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              {["instagram", "linkedin", "youtube", "twitter"].map(i => (
                <span key={i} style={{ width: 32, height: 32, borderRadius: 8, background: "var(--surface-2)", border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><Icon name={i} size={14} /></span>
              ))}
            </div>
          </div>
          {[
            { t: "Producto", items: ["Fidelización", "Ecommerce", "POS", "Reportes", "App del cliente"] },
            { t: "Empresa", items: ["Sobre nosotros", "Blog", "Clientes", "Prensa", "Trabajá con nosotros"] },
            { t: "Recursos", items: ["Centro de ayuda", "Documentación", "Estado del sistema", "Cambios y novedades"] },
            { t: "Legal", items: ["Términos y condiciones", "Privacidad", "Política de datos", "Contacto"] },
          ].map(col => (
            <div key={col.t}>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-dim)", marginBottom: 14 }}>{col.t}</div>
              <div style={{ display: "grid", gap: 8 }}>
                {col.items.map(i => <a key={i} href="#" style={{ fontSize: 13, color: "var(--text-muted)", textDecoration: "none" }}>{i}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 24, borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14, fontSize: 12, color: "var(--text-dim)" }}>
          <div>© 2026 Looppy SaaS. Hecho con 🧡 desde Argentina.</div>
          <div>v2.4.1 · Plataforma operacional</div>
        </div>
      </div>
    </footer>
  );
}

// ── PREVIEW WIDGETS (reused from before)
function PreviewPhone() {
  return (
    <div style={{ width: 130, height: 200, borderRadius: 22, background: "#0a0a0e", border: "2px solid rgba(255,255,255,0.18)", padding: 7, position: "relative", boxShadow: "0 30px 40px -10px rgba(0,0,0,0.45)" }}>
      <div style={{ width: "100%", height: "100%", borderRadius: 16, background: "#11111a", padding: 10, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ height: 24, borderRadius: 6, background: "rgba(255,255,255,0.12)" }} />
        <div style={{ height: 56, borderRadius: 8, background: "linear-gradient(135deg, #fff, #ddd)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0a0a0e", fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: "-0.03em" }}>1.240 pts</div>
        <div style={{ height: 28, borderRadius: 6, background: "rgba(255,255,255,0.08)" }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, flex: 1 }}>
          <div style={{ borderRadius: 6, background: "rgba(255,255,255,0.12)" }} />
          <div style={{ borderRadius: 6, background: "rgba(255,255,255,0.06)" }} />
        </div>
      </div>
    </div>
  );
}

function PreviewPanel() {
  return (
    <div style={{ width: 220, height: 150, borderRadius: 12, background: "#11111a", border: "1px solid rgba(255,255,255,0.15)", padding: 10, boxShadow: "0 30px 40px -10px rgba(0,0,0,0.45)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 8, height: "100%" }}>
        <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 6, padding: 6, display: "flex", flexDirection: "column", gap: 4 }}>
          {[0, 1, 2, 3, 4].map(i => <div key={i} style={{ height: 8, borderRadius: 3, background: i === 1 ? "var(--accent)" : "rgba(255,255,255,0.12)" }} />)}
        </div>
        <div style={{ display: "grid", gap: 6, gridTemplateColumns: "1fr 1fr", gridAutoRows: "min-content" }}>
          <div style={{ height: 38, borderRadius: 6, background: "rgba(167,139,250,0.18)", padding: 6, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ height: 2, width: 12, background: "rgba(255,255,255,0.4)", borderRadius: 2 }} />
            <div style={{ marginTop: 3, color: "#fff", fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: 12 }}>$8.4M</div>
          </div>
          <div style={{ height: 38, borderRadius: 6, background: "rgba(52,211,153,0.18)", padding: 6 }}>
            <div style={{ height: 2, width: 12, background: "rgba(255,255,255,0.4)", borderRadius: 2 }} />
            <div style={{ marginTop: 3, color: "#fff", fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: 12 }}>284</div>
          </div>
          <div style={{ gridColumn: "1 / -1", borderRadius: 6, background: "rgba(255,255,255,0.06)", padding: 8 }}>
            <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 28 }}>
              {[40, 56, 80, 64, 92, 100, 76].map((h, i) => <div key={i} style={{ flex: 1, height: `${h}%`, background: "var(--accent)", borderRadius: 2, opacity: 0.7 + i * 0.04 }} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewOps() {
  return (
    <div style={{ width: 220, height: 150, borderRadius: 12, background: "rgba(8,8,16,0.85)", border: "1px solid rgba(255,255,255,0.2)", padding: 10, fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#fff", boxShadow: "0 30px 40px -10px rgba(0,0,0,0.45)", display: "grid", gap: 4 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, opacity: 0.7, marginBottom: 4 }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: "#34d399", boxShadow: "0 0 6px #34d399" }} />
        OPS LIVE · 84 COMERCIOS
      </div>
      {[
        ["14:42", "Live Sports", "Pedido $119.900", "info"],
        ["14:40", "Café Mira", "Visita +10 pts", "info"],
        ["14:38", "Live Sports", "Stock crítico", "warn"],
        ["14:35", "Atelier", "Nuevo cliente", "info"],
        ["14:32", "Forma Gym", "Canje · Mes free", "info"],
      ].map((r, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "32px 56px 1fr", gap: 4, opacity: 0.9 - i * 0.13 }}>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>{r[0]}</span>
          <span style={{ color: "#f0b94e" }}>{r[1]}</span>
          <span style={{ color: r[3] === "warn" ? "#f0b94e" : "rgba(255,255,255,0.7)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r[2]}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Account drawer for the storefront customer
function LSAccountDrawer({ open, onClose, onLogout }) {
  if (!open) return null;
  const me = { name: "Federico Romero", email: "fede.romero@gmail.com", phone: "+54 261 522 4488", points: 824, tier: "VIP", since: "Mar 2024" };
  const orders = [
    { id: "#LS-2841", date: "Hoy 14:22", total: 119900, status: "preparacion", items: "1 producto · Zapatillas Indoor Court" },
    { id: "#LS-2807", date: "12 May", total: 76900, status: "entregado", items: "1 producto · Buzo Oversize Basket Culture" },
    { id: "#LS-2741", date: "28 Abr", total: 91800, status: "entregado", items: "2 productos · Pollera + Remera Dry Fit" },
    { id: "#LS-2688", date: "10 Abr", total: 48900, status: "entregado", items: "1 producto · Camiseta Basketball Pro Elite" },
  ];
  const D = window.LS_DATA;
  const favs = D ? D.LS_PRODUCTS.slice(0, 3) : [];
  const stMap = D ? D.LS_ORDER_STATUS : {};
  return (
    <div className="fixed inset-0 z-[85] bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <aside className="ml-auto flex h-full w-full max-w-md flex-col bg-white text-black shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="border-b border-black/10 p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black uppercase">Mi cuenta</h2>
            <button onClick={onClose} className="rounded-full border border-black/15 px-4 py-2 text-sm font-black">Cerrar</button>
          </div>
          <div className="mt-4 rounded-2xl bg-black p-4 text-white relative overflow-hidden">
            <div className="absolute inset-0" style={{ background: "repeating-linear-gradient(135deg, transparent, transparent 14px, rgba(255,255,255,0.05) 14px, rgba(255,255,255,0.05) 16px)" }} />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Cliente Looppy</p>
                  <p className="mt-1 text-lg font-black uppercase">{me.name}</p>
                  <p className="text-xs text-white/55">{me.email}</p>
                </div>
                <span className="rounded-full bg-[#f0b94e] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-black">{me.tier}</span>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Puntos disponibles</p>
                  <p className="font-display text-4xl font-bold leading-none" style={{ letterSpacing: "-0.03em" }}>{me.points}</p>
                </div>
                <p className="text-[10px] text-white/55" style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Cliente desde {me.since}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-5 space-y-6">
          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-black/45 mb-3">Mis pedidos</h3>
            <div className="space-y-2">
              {orders.map(o => {
                const st = stMap[o.status] || { label: o.status, bg: "#eee", color: "#444" };
                return (
                  <div key={o.id} className="rounded-2xl border border-black/10 p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-black" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}>{o.id}</div>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 9px", borderRadius: 999, background: st.bg, color: st.color, fontSize: 10, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>{st.label}</span>
                    </div>
                    <div className="mt-2 text-sm font-semibold text-black/65">{o.items}</div>
                    <div className="mt-1 flex justify-between text-xs text-black/55"><span>{o.date}</span><span className="font-black text-black">${o.total.toLocaleString("es-AR")}</span></div>
                  </div>
                );
              })}
            </div>
          </section>
          {favs.length > 0 && (
            <section>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-black/45 mb-3">Favoritos</h3>
              <div className="grid grid-cols-3 gap-2">
                {favs.map(p => (
                  <div key={p.id} className="rounded-2xl border border-black/10 overflow-hidden">
                    <div className="aspect-square bg-neutral-100 overflow-hidden"><img src={p.image} alt={p.name} className="h-full w-full object-cover" /></div>
                    <div className="p-2">
                      <div className="text-[10px] font-black uppercase tracking-wider text-black/45">{p.sportLabel}</div>
                      <div className="text-xs font-black leading-tight" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{p.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-black/45 mb-3">Direcciones</h3>
            <div className="rounded-2xl border border-black/10 p-4 flex items-start gap-3">
              <Icon name="map-pin" size={18} />
              <div className="flex-1">
                <div className="font-black">Casa</div>
                <div className="text-sm text-black/60 mt-1">San Martín 1245, 4to B · Mendoza Capital · M5500</div>
              </div>
              <button className="text-xs font-black uppercase">Editar</button>
            </div>
            <button className="mt-2 w-full rounded-2xl border border-dashed border-black/25 p-3 text-sm font-black uppercase text-black/60 inline-flex items-center justify-center gap-2"><Icon name="plus" size={14} /> Agregar dirección</button>
          </section>
          <section className="space-y-2">
            {[
              { l: "Mis datos personales", i: "user" },
              { l: "Preferencias de comunicación", i: "bell" },
              { l: "Mis cupones y puntos", i: "ticket-percent" },
              { l: "Centro de ayuda", i: "life-buoy" },
            ].map(a => (
              <button key={a.l} className="w-full rounded-2xl border border-black/10 p-4 flex items-center gap-3 hover:bg-neutral-50 transition">
                <Icon name={a.i} size={18} />
                <span className="flex-1 text-left font-black text-sm">{a.l}</span>
                <Icon name="chevron-right" size={16} />
              </button>
            ))}
          </section>
        </div>
        <div className="border-t border-black/10 p-5">
          <button onClick={onLogout} className="w-full rounded-full border border-black/15 py-3 text-sm font-black uppercase">Cerrar sesión</button>
        </div>
      </aside>
    </div>
  );
}

// ── SHOWCASE (product screenshots with images)
function LDShowcase() {
  const shots = [
    { img: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=900&q=80", t: "Dashboard del comercio", d: "Lo que ve tu equipo todos los días." },
    { img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80", t: "Tu tienda online", d: "Lista en 10 minutos, sin tocar código." },
    { img: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=900&q=80", t: "App del cliente", d: "Tarjeta digital, puntos y QR." },
  ];
  return (
    <section style={{ padding: "100px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>El producto</div>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 600, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.02 }}>
            Diseñado para vender.<br />
            <span style={{ color: "var(--accent)" }}>Pensado para crecer.</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {shots.map((s, i) => (
            <div key={i} style={{ borderRadius: 18, overflow: "hidden", border: "1px solid var(--line)", background: "var(--surface)", cursor: "pointer" }}>
              <div style={{ aspectRatio: "4/3", background: "#0a0a0a", overflow: "hidden", position: "relative" }}>
                <img src={s.img} alt={s.t} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)" }} />
                <div style={{ position: "absolute", bottom: 18, left: 20, right: 20 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>{s.t}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>{s.d}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── ADVANCED MODULES TEASE (links to catalog)
function LDModulesAdvanced({ go }) {
  const cats = [
    { i: "megaphone", t: "Marketing & Comunicación", n: 8, d: "Email, WhatsApp, SMS, push, automatizaciones" },
    { i: "settings-2", t: "Operaciones", n: 7, d: "Reservas, delivery, cocina, mesas, multi-sucursal" },
    { i: "credit-card", t: "Pagos avanzados", n: 6, d: "Suscripciones, AFIP, cuotas, conciliación bancaria" },
    { i: "bar-chart-3", t: "Analytics & BI", n: 4, d: "Cohortes, atribución, reportes SQL, predicción IA" },
    { i: "puzzle", t: "Integraciones", n: 7, d: "AFIP, Andreani, Google, Instagram, Zapier, contabilidad" },
    { i: "brain-circuit", t: "IA & Avanzados", n: 6, d: "Recomendador, chatbot, scoring, fraude, sentimiento" },
    { i: "crown", t: "Enterprise", n: 6, d: "White-label, API pública, multi-país, SSO, SLA dedicado" },
  ];
  return (
    <section id="modules-adv" style={{ padding: "100px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", marginBottom: 50 }}>
          <div>
            <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>+30 módulos avanzados</div>
            <h2 className="font-display" style={{ fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 600, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.02 }}>
              No pagás por lo que no usás.<br /><span style={{ color: "var(--accent)" }}>Activás solo lo que necesitás.</span>
            </h2>
            <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.55, marginTop: 18, maxWidth: 540 }}>
              Looppy ofrece más de 50 módulos divididos en 9 categorías. Algunos vienen incluidos en tu plan, otros se contratan por uso o por suscripción mensual. Sin contratos.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 22, flexWrap: "wrap" }}>
              {[
                { l: "Incluido", c: "#34d399", i: "check" },
                { l: "Por uso", c: "#f0b94e", i: "zap" },
                { l: "Suscripción", c: "var(--accent)", i: "sparkle" },
              ].map(b => (
                <span key={b.l} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 999, background: `${b.c}26`, color: b.c, fontSize: 12, fontWeight: 600 }}><Icon name={b.i} size={12} /> {b.l}</span>
              ))}
            </div>
            <Button variant="primary" iconRight="arrow-right" onClick={() => go("register")} style={{ marginTop: 28 }}>Probar gratis y desbloquear módulos</Button>
            <div style={{ marginTop: 12, fontSize: 12, color: "var(--text-dim)", display: "flex", alignItems: "center", gap: 6 }}>
              <Icon name="info" size={12} /> El catálogo se activa al ingresar a tu panel de comercio.
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {cats.map(c => (
              <div key={c.t} onClick={() => go("register")} style={{ padding: 18, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 14, cursor: "pointer", transition: "all .15s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--line)"; }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ width: 32, height: 32, borderRadius: 8, background: "var(--accent-soft)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={c.i} size={14} /></span>
                  <span style={{ fontSize: 11, color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace", marginLeft: "auto" }}>{c.n} mod.</span>
                </div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{c.t}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4, lineHeight: 1.4 }}>{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SOLUTIONS (por tipo de necesidad)
function LDSolutions() {
  const sols = [
    { img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1100&q=80", t: "Querés que tus clientes vuelvan más seguido", d: "Activá fidelización con puntos, niveles VIP y beneficios automáticos por cumpleaños o aniversario.", mods: ["Fidelización", "Cumpleaños auto", "Programa de referidos"] },
    { img: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=1100&q=80", t: "Querés vender por internet sin programadores", d: "Tu tienda online lista en horas con catálogo, MercadoPago, Andreani y carrito recuperable. Todo conectado al stock físico.", mods: ["Tienda online", "Mercado Pago", "Andreani", "Carritos abandonados"] },
    { img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=80", t: "Tenés varias sucursales y querés controlar todo", d: "Multi-sucursal con stock, precios y promos diferenciados. Reportes consolidados y permisos por empleado.", mods: ["Multi-sucursal", "Roles y permisos", "Conciliación bancaria"] },
    { img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1100&q=80", t: "Querés profesionalizar la atención al cliente", d: "WhatsApp Business integrado, chatbot 24/7 con IA, comprobantes automáticos y comunicación segmentada.", mods: ["WhatsApp API", "Chatbot IA", "Email mkt", "Push notifications"] },
  ];
  return (
    <section id="solutions" style={{ padding: "100px 28px", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>Soluciones por necesidad</div>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 600, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.02 }}>
            ¿Qué querés resolver?<br />
            <span style={{ color: "var(--accent)" }}>Hay un combo armado.</span>
          </h2>
        </div>
        <div style={{ display: "grid", gap: 16 }}>
          {sols.map((s, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1.2fr 1fr" : "1fr 1.2fr", gap: 0, background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 22, overflow: "hidden", minHeight: 320 }}>
              {i % 2 === 0 && (
                <div style={{ background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
                  <img src={s.img} alt={s.t} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
                </div>
              )}
              <div style={{ padding: 44, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>Solución {String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display" style={{ fontSize: 30, fontWeight: 600, margin: 0, letterSpacing: "-0.025em", lineHeight: 1.1 }}>{s.t}</h3>
                <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: 14, lineHeight: 1.6 }}>{s.d}</p>
                <div style={{ marginTop: 20, fontSize: 11, color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>Módulos incluidos:</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                  {s.mods.map(m => <span key={m} className="chip chip-active">{m}</span>)}
                </div>
              </div>
              {i % 2 !== 0 && (
                <div style={{ background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
                  <img src={s.img} alt={s.t} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── INTEGRATIONS LOGOS
function LDIntegrations() {
  const integrations = [
    { l: "Mercado Pago", c: "#00B1EA" },
    { l: "Stripe", c: "#635BFF" },
    { l: "PayPal", c: "#003087" },
    { l: "Modo", c: "#FF4D00" },
    { l: "Andreani", c: "#E20613" },
    { l: "Correo AR", c: "#FED309" },
    { l: "AFIP", c: "#00529B" },
    { l: "Instagram", c: "#E4405F" },
    { l: "WhatsApp", c: "#25D366" },
    { l: "Google Ads", c: "#4285F4" },
    { l: "Xubio", c: "#00A8E0" },
    { l: "Zapier", c: "#FF4F00" },
  ];
  return (
    <section style={{ padding: "80px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 10, fontWeight: 700 }}>Integraciones nativas</div>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 600, margin: 0, letterSpacing: "-0.025em" }}>
            Conectado a lo que ya usás.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12 }}>
          {integrations.map(i => (
            <div key={i.l} style={{ padding: "20px 14px", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 14, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, transition: "all .15s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = i.c; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line)"; }}>
              <span style={{ width: 38, height: 38, borderRadius: 10, background: i.c, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Instrument Sans', sans-serif", fontWeight: 800, fontSize: 14, letterSpacing: "-0.02em" }}>{i.l[0]}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", textAlign: "center" }}>{i.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── COMPARISON
function LDComparison() {
  const features = [
    { f: "Fidelización con puntos", l: true, t: false, w: false, m: false },
    { f: "Tienda online .shop", l: true, t: true, w: true, m: false },
    { f: "POS / Caja física integrada", l: true, t: false, w: false, m: false },
    { f: "WhatsApp Business API", l: true, t: false, w: false, m: false },
    { f: "Multi-sucursal", l: true, t: true, w: true, m: false },
    { f: "Reportes cross-canal (online + POS)", l: true, t: false, w: false, m: false },
    { f: "Mercado Pago, Stripe, PayPal", l: true, t: true, w: true, m: false },
    { f: "App del cliente con QR", l: true, t: false, w: false, m: false },
    { f: "Soporte en español 24/7", l: true, t: true, w: false, m: false },
    { f: "Sin desarrolladores ni código", l: true, t: true, w: false, m: true },
    { f: "Activación en 5 minutos", l: true, t: true, w: false, m: false },
    { f: "Cancelás cuando quieras", l: true, t: true, w: true, m: false },
  ];
  return (
    <section style={{ padding: "100px 28px", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>La comparación honesta</div>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 600, margin: 0, letterSpacing: "-0.03em" }}>
            Looppy vs. lo que estás usando.
          </h2>
        </div>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <table className="tbl">
            <thead>
              <tr style={{ background: "var(--surface-2)" }}>
                <th style={{ width: "40%" }}>Funcionalidad</th>
                <th style={{ textAlign: "center", background: "var(--accent-soft)" }}><strong style={{ color: "var(--accent)" }}>Looppy</strong></th>
                <th style={{ textAlign: "center" }}>Tiendanube</th>
                <th style={{ textAlign: "center" }}>WooCommerce</th>
                <th style={{ textAlign: "center" }}>Manual / Excel</th>
              </tr>
            </thead>
            <tbody>
              {features.map(r => (
                <tr key={r.f}>
                  <td style={{ fontWeight: 500 }}>{r.f}</td>
                  <td style={{ textAlign: "center", background: "rgba(167,139,250,0.04)" }}>{r.l ? <Icon name="check" size={16} style={{ color: "#34d399" }} /> : <Icon name="x" size={16} style={{ color: "var(--text-dim)" }} />}</td>
                  <td style={{ textAlign: "center" }}>{r.t ? <Icon name="check" size={16} style={{ color: "var(--text-muted)" }} /> : <Icon name="x" size={16} style={{ color: "var(--text-dim)" }} />}</td>
                  <td style={{ textAlign: "center" }}>{r.w ? <Icon name="check" size={16} style={{ color: "var(--text-muted)" }} /> : <Icon name="x" size={16} style={{ color: "var(--text-dim)" }} />}</td>
                  <td style={{ textAlign: "center" }}>{r.m ? <Icon name="check" size={16} style={{ color: "var(--text-muted)" }} /> : <Icon name="x" size={16} style={{ color: "var(--text-dim)" }} />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </section>
  );
}

Object.assign(window, { PlatformLanding, LSAccountDrawer });