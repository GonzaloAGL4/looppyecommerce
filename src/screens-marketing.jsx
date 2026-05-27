// LOOPPY landing page
const { useState: useStateL } = React;

function Landing({ onCta, onLogin, onDashboard }) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-grad)", position: "relative", overflow: "hidden" }}>
      {/* nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 30, backdropFilter: "blur(14px)", background: "rgba(7,7,10,0.7)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <LogoMark size={28} />
          <div style={{ display: "flex", gap: 28, fontSize: 14, color: "var(--text-muted)" }}>
            <a href="#como" style={{ color: "inherit", textDecoration: "none" }}>Cómo funciona</a>
            <a href="#rubros" style={{ color: "inherit", textDecoration: "none" }}>Rubros</a>
            <a href="#planes" style={{ color: "inherit", textDecoration: "none" }}>Planes</a>
            <a onClick={onDashboard} style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}>Dashboard demo</a>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a onClick={onLogin} style={{ fontSize: 14, color: "var(--text-muted)", cursor: "pointer", padding: "8px 12px" }}>Iniciar sesión</a>
            <Button variant="primary" iconRight="arrow-right" onClick={onCta}>Quiero probarlo</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px 120px", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <div className="chip chip-active" style={{ marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: "var(--accent)" }} />
            Sistema de fidelización para negocios físicos
          </div>
          <h1 className="font-display" style={{ fontSize: 78, lineHeight: 0.96, fontWeight: 600, margin: 0, letterSpacing: "-0.04em" }}>
            Tus clientes vuelven solos.{" "}
            <span style={{ color: "var(--accent)" }}>Vos te ocupás del negocio.</span>
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-muted)", marginTop: 24, lineHeight: 1.5, maxWidth: 540 }}>
            LOOPPY convierte cada visita en una relación duradera. Puntos, premios, mensajes automáticos y estadísticas reales — sin que el dueño tenga que hacer nada manualmente.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
            <Button variant="primary" size="lg" onClick={onCta}>Empezar ahora</Button>
            <Button variant="ghost" size="lg" iconRight="arrow-right" onClick={onDashboard}>Ver demo</Button>
          </div>
          <div style={{ display: "flex", gap: 36, marginTop: 48, color: "var(--text-muted)", fontSize: 13 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Icon name="check" size={16} style={{ color: "var(--accent)" }} /> 14 días gratis</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Icon name="check" size={16} style={{ color: "var(--accent)" }} /> Sin tarjeta</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Icon name="check" size={16} style={{ color: "var(--accent)" }} /> Soporte en castellano</div>
          </div>
        </div>

        {/* Hero card mockup */}
        <DashboardPreview />
      </section>

      {/* stats strip */}
      <section style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 32px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {[
            { n: "+68%", l: "retención promedio" },
            { n: "3×", l: "más visitas frecuentes" },
            { n: "0 hs", l: "trabajo manual" },
            { n: "12 min", l: "para configurar todo" },
          ].map((s, i) => (
            <div key={i}>
              <div className="font-display" style={{ fontSize: 56, fontWeight: 600, color: "var(--accent)", letterSpacing: "-0.04em" }}>{s.n}</div>
              <div style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como" style={{ maxWidth: 1280, margin: "0 auto", padding: "120px 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: "var(--text-dim)", textTransform: "uppercase" }}>Cómo funciona</div>
          <h2 className="font-display" style={{ fontSize: 56, fontWeight: 600, margin: "12px 0 16px", letterSpacing: "-0.035em" }}>3 pasos. Después se ocupa LOOPPY.</h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", maxWidth: 560, margin: "0 auto" }}>
            Lo configurás una vez. Tu programa de fidelización vive solo, sin que tengas que pensarlo.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            { n: "01", icon: "store", t: "Registrá tu negocio", d: "Creá tu cuenta y armá tu programa de fidelización en minutos. Sin conocimientos técnicos." },
            { n: "02", icon: "qr-code", t: "Sumá clientes", d: "Cada cliente tiene un QR único. Escaneá en cada visita para sumar puntos automáticamente." },
            { n: "03", icon: "sparkles", t: "LOOPPY hace el resto", d: "Mensajes automáticos, puntos, premios. Tu negocio fideliza mientras vos atendés." },
          ].map((s, i) => (
            <Card key={i} className="fade-up" style={{ padding: 32, position: "relative", overflow: "hidden" }}>
              <div className="font-display" style={{ position: "absolute", right: 20, top: 8, fontSize: 110, fontWeight: 600, color: "var(--surface-3)", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.n}</div>
              <div style={{
                width: 52, height: 52, borderRadius: 14, background: "var(--accent-soft)",
                display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: 28,
              }}>
                <Icon name={s.icon} size={24} />
              </div>
              <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 10, position: "relative" }}>{s.t}</div>
              <div style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.55, position: "relative" }}>{s.d}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Para negocios + para clientes */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 32px 120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <Card style={{ padding: 40, background: "linear-gradient(160deg, var(--accent-soft), var(--surface))" }}>
            <Badge tone="accent" icon="briefcase">Para negocios</Badge>
            <h3 className="font-display" style={{ fontSize: 38, fontWeight: 600, margin: "20px 0 16px", letterSpacing: "-0.03em" }}>Tu negocio piensa por sí mismo.</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14 }}>
              {[
                "Dashboard con visitas, puntos y clientes activos en tiempo real",
                "Detectá clientes a punto de irse y enviá un beneficio antes",
                "Reglas configurables: por visita, por monto, por cumpleaños",
                "Múltiples sucursales con stats unificadas",
              ].map((t, i) => (
                <li key={i} style={{ display: "flex", gap: 12, fontSize: 15, color: "var(--text-muted)" }}>
                  <Icon name="check-circle-2" size={18} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 1 }} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card style={{ padding: 40, background: "linear-gradient(160deg, rgba(52,211,153,0.10), var(--surface))" }}>
            <Badge tone="success" icon="users">Para clientes</Badge>
            <h3 className="font-display" style={{ fontSize: 38, fontWeight: 600, margin: "20px 0 16px", letterSpacing: "-0.03em" }}>Una sola app. Todos sus negocios.</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14 }}>
              {[
                "Tarjeta digital con QR — sin acumular plásticos en la billetera",
                "Niveles VIP visibles, beneficios desbloqueables, recordatorios",
                "Descubre nuevos negocios adheridos cerca suyo",
                "Historial completo de visitas, puntos y canjes",
              ].map((t, i) => (
                <li key={i} style={{ display: "flex", gap: 12, fontSize: 15, color: "var(--text-muted)" }}>
                  <Icon name="check-circle-2" size={18} style={{ color: "#34d399", flexShrink: 0, marginTop: 1 }} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Rubros */}
      <section id="rubros" style={{ background: "var(--surface)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: "var(--text-dim)", textTransform: "uppercase" }}>Adaptable a cualquier negocio físico</div>
            <h2 className="font-display" style={{ fontSize: 48, fontWeight: 600, margin: "12px 0 0", letterSpacing: "-0.035em" }}>Funciona para tu rubro</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }}>
            {[
              { n: "Cafetería", i: "coffee" }, { n: "Peluquería", i: "scissors" },
              { n: "Gimnasio", i: "dumbbell" }, { n: "Restaurante", i: "utensils" },
              { n: "Almacén", i: "shopping-basket" }, { n: "Floristería", i: "flower" },
              { n: "Spa", i: "sparkles" }, { n: "Lavandería", i: "shirt" },
              { n: "Veterinaria", i: "paw-print" }, { n: "Librería", i: "book-open" },
              { n: "Heladería", i: "ice-cream-cone" }, { n: "Carnicería", i: "beef" },
            ].map((r, i) => (
              <Card key={i} variant="soft" style={{ padding: 22, textAlign: "center", cursor: "pointer", transition: "all .15s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.transform = "none"; }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--surface-3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", color: "var(--text)" }}>
                  <Icon name={r.i} size={20} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{r.n}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" style={{ maxWidth: 1280, margin: "0 auto", padding: "120px 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: "var(--text-dim)", textTransform: "uppercase" }}>Planes</div>
          <h2 className="font-display" style={{ fontSize: 48, fontWeight: 600, margin: "12px 0 0", letterSpacing: "-0.035em" }}>Elegí cómo empezar</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, maxWidth: 1100, margin: "0 auto" }}>
          {[
            { n: "Starter", p: "0", d: "/mes", desc: "Para empezar y probar.", feats: ["Hasta 100 clientes", "1 sucursal", "Programa básico de puntos", "Soporte por email"], cta: "Empezar gratis", featured: false },
            { n: "Pro", p: "8.900", d: "ARS / mes", desc: "Lo que necesita la mayoría.", feats: ["Clientes ilimitados", "3 sucursales", "Mensajes automáticos", "Reglas avanzadas", "Reportes y exports"], cta: "Probar 14 días", featured: true },
            { n: "Negocio", p: "24.900", d: "ARS / mes", desc: "Multi-local y equipos.", feats: ["Sucursales ilimitadas", "Roles y permisos", "API y integraciones", "Manager dedicado"], cta: "Hablemos", featured: false },
          ].map((p, i) => (
            <Card key={i} style={{
              padding: 32, position: "relative",
              borderColor: p.featured ? "var(--accent)" : "var(--line)",
              background: p.featured ? "linear-gradient(160deg, var(--accent-soft), var(--surface))" : "var(--surface)",
            }}>
              {p.featured && (
                <div style={{ position: "absolute", top: -10, right: 20 }}>
                  <Badge tone="accent" icon="sparkles">Más elegido</Badge>
                </div>
              )}
              <div style={{ fontSize: 18, fontWeight: 600 }}>{p.n}</div>
              <div style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 4 }}>{p.desc}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: "24px 0" }}>
                <span className="font-display" style={{ fontSize: 56, fontWeight: 600, letterSpacing: "-0.04em" }}>${p.p}</span>
                <span style={{ color: "var(--text-muted)", fontSize: 14 }}>{p.d}</span>
              </div>
              <Button variant={p.featured ? "primary" : "ghost"} className="w-full" style={{ width: "100%", justifyContent: "center" }} onClick={onCta}>{p.cta}</Button>
              <div style={{ height: 1, background: "var(--line)", margin: "28px 0" }} />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
                {p.feats.map((f, j) => (
                  <li key={j} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--text-muted)" }}>
                    <Icon name="check" size={16} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />{f}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 32px 120px" }}>
        <Card style={{
          padding: "72px 48px", textAlign: "center", position: "relative", overflow: "hidden",
          background: "radial-gradient(ellipse at top, var(--accent-soft), var(--surface))",
          borderColor: "var(--accent)",
        }}>
          <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
          <div style={{ position: "relative" }}>
            <h2 className="font-display" style={{ fontSize: 56, fontWeight: 600, letterSpacing: "-0.035em", margin: "0 0 16px" }}>¿Listo para fidelizar?</h2>
            <p style={{ fontSize: 17, color: "var(--text-muted)", maxWidth: 480, margin: "0 auto 32px" }}>
              Empezá hoy y convertí cada visita en un cliente que vuelve. 14 días gratis, sin tarjeta.
            </p>
            <Button variant="primary" size="lg" iconRight="arrow-right" onClick={onCta}>Crear mi cuenta gratis</Button>
          </div>
        </Card>
      </section>

      <footer style={{ borderTop: "1px solid var(--line)", padding: "32px", textAlign: "center" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--text-dim)", fontSize: 13 }}>
          <LogoMark size={22} />
          <div style={{ display: "flex", gap: 24 }}>
            <span>Términos</span><span>Privacidad</span><span>Contacto</span>
          </div>
          <span>© LOOPPY 2026</span>
        </div>
      </footer>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div style={{ position: "relative" }}>
      <div className="violet-glow" style={{ position: "absolute", inset: -40, opacity: 0.5 }} />
      <Card style={{ padding: 24, position: "relative", boxShadow: "0 30px 80px -20px rgba(0,0,0,0.5)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "var(--text-dim)", textTransform: "uppercase" }}>Mi negocio</div>
          <Logo size={24} />
        </div>
        <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 20 }}>Panel de control</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 20 }}>
          {[
            { n: "142", l: "Clientes", c: "var(--text)" },
            { n: "34", l: "Esta semana", c: "var(--text)" },
            { n: "89%", l: "Retención", c: "#34d399" },
          ].map((s, i) => (
            <div key={i} style={{ background: "var(--surface-2)", borderRadius: 12, padding: 16, border: "1px solid var(--line)" }}>
              <div className="font-display" style={{ fontSize: 28, fontWeight: 600, color: s.c, letterSpacing: "-0.03em" }}>{s.n}</div>
              <div style={{ color: "var(--text-muted)", fontSize: 12 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: 12 }}>Últimas visitas</div>
        <div style={{ display: "grid", gap: 8 }}>
          {[
            { n: "María G.", t: "hace 5 min", p: "+10 pts", h: 263 },
            { n: "Carlos R.", t: "hace 23 min", p: "+10 pts", h: 200 },
            { n: "Ana M.", t: "hace 1 h", p: "+10 pts", h: 32 },
            { n: "Juan P.", t: "hace 2 h", p: "Premio", premio: true, h: 142 },
          ].map((v, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: 12, background: "var(--surface-2)", borderRadius: 12, border: "1px solid var(--line)" }}>
              <Avatar name={v.n} hue={v.h} size={32} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{v.n}</div>
                <div style={{ color: "var(--text-dim)", fontSize: 12 }}>{v.t}</div>
              </div>
              {v.premio
                ? <Badge tone="vip" icon="gift">Premio</Badge>
                : <span style={{ color: "var(--accent)", fontSize: 13, fontWeight: 600 }}>{v.p}</span>
              }
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

window.Landing = Landing;
