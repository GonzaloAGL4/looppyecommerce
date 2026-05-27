// Auth screens (Login + Register)
function AuthShell({ children, side }) {
  return (
    <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", background: "var(--bg)" }}>
      <div style={{
        background: "var(--bg-grad)", display: "flex", flexDirection: "column",
        justifyContent: "space-between", padding: 48, position: "relative", overflow: "hidden",
      }}>
        <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
        <LogoMark size={32} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: 16 }}>{side.eyebrow}</div>
          <h1 className="font-display" style={{ fontSize: 48, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.05, margin: 0 }}>{side.title}</h1>
          <p style={{ color: "var(--text-muted)", fontSize: 16, marginTop: 16, maxWidth: 440 }}>{side.desc}</p>
          <div style={{ marginTop: 36, display: "grid", gap: 12 }}>
            {side.points.map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--text-muted)", fontSize: 14 }}>
                <span style={{ width: 28, height: 28, borderRadius: 8, background: "var(--accent-soft)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}><Icon name={p.icon} size={14} /></span>
                {p.text}
              </div>
            ))}
          </div>
        </div>
        <div style={{ color: "var(--text-dim)", fontSize: 13 }}>© LOOPPY 2026 — Sistema de fidelización</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 48 }}>
        <div style={{ width: "100%", maxWidth: 420 }}>{children}</div>
      </div>
    </div>
  );
}

function Login({ onSubmit, onRegister, onBack }) {
  const [email, setEmail] = useState("hola@cafemira.com");
  const [pass, setPass] = useState("••••••••••");
  return (
    <AuthShell side={{
      eyebrow: "Bienvenido de vuelta",
      title: "Tu programa de fidelización está esperándote.",
      desc: "Iniciá sesión para ver visitas, canjes y novedades de tus clientes en tiempo real.",
      points: [
        { icon: "trending-up", text: "+24% retención el último mes" },
        { icon: "users", text: "8 nuevos clientes esta semana" },
        { icon: "gift", text: "12 beneficios canjeados hoy" },
      ],
    }}>
      <a onClick={onBack} style={{ fontSize: 13, color: "var(--text-muted)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 24 }}><Icon name="arrow-left" size={14} /> Volver al inicio</a>
      <h2 className="font-display" style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.03em", margin: "0 0 8px" }}>Iniciar sesión</h2>
      <p style={{ color: "var(--text-muted)", fontSize: 14, margin: "0 0 32px" }}>¿Sin cuenta? <a onClick={onRegister} style={{ color: "var(--accent)", cursor: "pointer", fontWeight: 600 }}>Creá una gratis</a></p>
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} style={{ display: "grid", gap: 16 }}>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6, display: "block" }}>Email</label>
          <Input icon="mail" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="hola@negocio.com" />
        </div>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6, display: "flex", justifyContent: "space-between" }}>
            <span>Contraseña</span>
            <a style={{ color: "var(--accent)", cursor: "pointer", fontWeight: 600 }}>Olvidé mi contraseña</a>
          </label>
          <Input icon="lock" type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
        </div>
        <label style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--text-muted)" }}>
          <input type="checkbox" defaultChecked /> Mantener sesión iniciada
        </label>
        <Button variant="primary" size="lg" style={{ justifyContent: "center", width: "100%" }} onClick={onSubmit}>Entrar</Button>
        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "8px 0", color: "var(--text-dim)", fontSize: 12 }}>
          <div style={{ flex: 1, height: 1, background: "var(--line)" }} /> O continuá con <div style={{ flex: 1, height: 1, background: "var(--line)" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <Button variant="ghost" style={{ justifyContent: "center" }} icon="chrome">Google</Button>
          <Button variant="ghost" style={{ justifyContent: "center" }} icon="apple">Apple</Button>
        </div>
      </form>
    </AuthShell>
  );
}

function Register({ onSubmit, onLogin, onBack }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ name: "", email: "", business: "", category: "Cafetería" });
  const next = () => step < 2 ? setStep(step + 1) : onSubmit();
  return (
    <AuthShell side={{
      eyebrow: "Crear cuenta",
      title: "12 minutos. Tu negocio empieza a fidelizar.",
      desc: "Configurá tu programa, generá tu QR, y empezá a sumar visitas el mismo día.",
      points: [
        { icon: "zap", text: "Setup guiado paso a paso" },
        { icon: "credit-card", text: "14 días gratis, sin tarjeta" },
        { icon: "shield-check", text: "Datos protegidos. Cancelás cuando quieras" },
      ],
    }}>
      <a onClick={onBack} style={{ fontSize: 13, color: "var(--text-muted)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 24 }}><Icon name="arrow-left" size={14} /> Volver</a>
      <h2 className="font-display" style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.03em", margin: "0 0 8px" }}>Creá tu cuenta</h2>
      <p style={{ color: "var(--text-muted)", fontSize: 14, margin: "0 0 24px" }}>¿Ya tenés cuenta? <a onClick={onLogin} style={{ color: "var(--accent)", cursor: "pointer", fontWeight: 600 }}>Iniciá sesión</a></p>

      {/* Step indicator */}
      <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
        {[1, 2].map(s => (
          <div key={s} style={{ flex: 1, height: 4, borderRadius: 2, background: s <= step ? "var(--accent)" : "var(--surface-3)" }} />
        ))}
      </div>

      <form onSubmit={(e) => { e.preventDefault(); next(); }} style={{ display: "grid", gap: 16 }}>
        {step === 1 ? (
          <>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6, display: "block" }}>Tu nombre</label>
              <Input icon="user" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="Lucía Méndez" />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6, display: "block" }}>Email</label>
              <Input icon="mail" type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="lucia@negocio.com" />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6, display: "block" }}>Contraseña</label>
              <Input icon="lock" type="password" placeholder="Mínimo 8 caracteres" />
            </div>
          </>
        ) : (
          <>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6, display: "block" }}>Nombre del negocio</label>
              <Input icon="store" value={data.business} onChange={(e) => setData({ ...data, business: e.target.value })} placeholder="Café Mira" />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6, display: "block" }}>Rubro</label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                {[
                  { n: "Cafetería", i: "coffee" }, { n: "Peluquería", i: "scissors" }, { n: "Gimnasio", i: "dumbbell" },
                  { n: "Restaurante", i: "utensils" }, { n: "Almacén", i: "shopping-basket" }, { n: "Otro", i: "store" },
                ].map(c => (
                  <div key={c.n} onClick={() => setData({ ...data, category: c.n })}
                    style={{
                      padding: 14, borderRadius: 12, textAlign: "center", cursor: "pointer",
                      background: data.category === c.n ? "var(--accent-soft)" : "var(--surface-2)",
                      border: `1px solid ${data.category === c.n ? "var(--accent)" : "var(--line)"}`,
                      color: data.category === c.n ? "var(--accent)" : "var(--text-muted)",
                      fontSize: 12, fontWeight: 500,
                    }}>
                    <Icon name={c.i} size={20} />
                    <div style={{ marginTop: 6 }}>{c.n}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          {step > 1 && <Button variant="ghost" onClick={() => setStep(step - 1)}>Atrás</Button>}
          <Button variant="primary" size="lg" style={{ flex: 1, justifyContent: "center" }} iconRight={step === 2 ? "check" : "arrow-right"} onClick={next}>
            {step === 2 ? "Crear mi cuenta" : "Continuar"}
          </Button>
        </div>
      </form>
    </AuthShell>
  );
}

window.Login = Login;
window.Register = Register;
