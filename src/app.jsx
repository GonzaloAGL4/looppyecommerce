// LOOPPY — main app router
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "violet",
  "theme": "dark"
}/*EDITMODE-END*/;

const ACCENTS = {
  violet: { h: 263, s: "80%", l: "64%" },
  blue:   { h: 216, s: "85%", l: "60%" },
  green:  { h: 158, s: "65%", l: "50%" },
  orange: { h: 22,  s: "90%", l: "58%" },
};
function hslOfAccent(k) {
  const a = ACCENTS[k] || ACCENTS.violet;
  return `hsl(${a.h} ${a.s} ${a.l})`;
}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [screen, setScreen] = useState("portal");
  const [clientId, setClientId] = useState(null);
  const [visitOpen, setVisitOpen] = useState(false);
  const [confetti, setConfetti] = useState(0);
  const [toast, setToast] = useState(null);

  // Apply theme + accent
  React.useEffect(() => {
    const a = ACCENTS[tweaks.accent] || ACCENTS.violet;
    document.documentElement.style.setProperty("--accent-h", a.h);
    document.documentElement.style.setProperty("--accent-s", a.s);
    document.documentElement.style.setProperty("--accent-l", a.l);
    document.documentElement.setAttribute("data-theme", tweaks.theme);
  }, [tweaks]);

  React.useEffect(() => {
    window.lucide?.createIcons();
  });

  const go = (s, id) => { setScreen(s); if (id !== undefined) setClientId(id); window.scrollTo(0, 0); };

  const handleVisitConfirm = (client, points) => {
    setVisitOpen(false);
    setToast({ tone: "success", title: "Visita registrada", desc: `${client.name} sumó +${points} pts` });
  };

  const handleRedeem = (client, benefit) => {
    setConfetti(c => c + 1);
    setToast({ tone: "success", title: "¡Canje confirmado!", desc: `${benefit.name} para ${client.name}` });
  };

  const renderScreen = () => {
    switch (screen) {
      case "portal":
        return <PlatformLanding go={go} />;
      case "landing":
        return <Landing onCta={() => go("register")} onLogin={() => go("login")} onDashboard={() => go("biz-dashboard")} />;
      case "login":
        return <Login onSubmit={() => go("biz-dashboard")} onRegister={() => go("register")} onBack={() => go("landing")} />;
      case "register":
        return <Register onSubmit={() => go("biz-dashboard")} onLogin={() => go("login")} onBack={() => go("landing")} />;
      case "customer":
        return <CustomerApp onBack={() => go("portal")} />;
      case "ecom-pos":
        return <EcomPOS />;
      case "ecom-store":
        return <EcomStorePreview goAdmin={() => go("ecom-dashboard")} />;
      default:
        if (screen.startsWith("super-")) {
          return (
            <SuperShell current={screen} go={go}>
              {screen === "super-dashboard" && <SuperDashboard go={go} />}
              {screen === "super-merchants" && <SuperMerchants go={go} />}
              {screen === "super-plans" && <SuperPlans />}
              {screen === "super-users" && <SuperUsers />}
              {screen === "super-support" && <SuperSupport />}
              {screen === "super-health" && <SuperHealth />}
              {screen === "super-logs" && <SuperLogs />}
              {screen === "super-config" && <SuperConfig />}
            </SuperShell>
          );
        }
        if (screen.startsWith("ecom-")) {
          return (
            <EcomShell current={screen} go={go}>
              {screen === "ecom-dashboard" && <EcomDashboard go={go} />}
              {screen === "ecom-products" && <EcomProducts go={go} />}
              {screen === "ecom-categories" && <EcomCategories />}
              {screen === "ecom-variations" && <EcomVariations />}
              {screen === "ecom-stock" && <EcomStock />}
              {screen === "ecom-orders" && <EcomOrders />}
              {screen === "ecom-customers" && <EcomCustomers />}
              {screen === "ecom-promos" && <EcomPromos />}
              {screen === "ecom-payments" && <EcomPayments />}
              {screen === "ecom-shipping" && <EcomShipping />}
              {screen === "ecom-reports" && <EcomReports />}
              {screen === "ecom-settings" && <EcomSettings />}
              {screen === "ecom-themes" && <EcomThemes />}
            </EcomShell>
          );
        }
        return (
          <BizShell current={screen} go={go} onLogout={() => go("portal")} onSwitchClient={() => go("customer")}>
            {screen === "modules" && <ModulesCatalog go={go} fromBiz />}
            {screen === "biz-dashboard" && <BizDashboard go={go} openVisit={() => setVisitOpen(true)} />}
            {screen === "biz-clients" && <BizClients openClient={(id) => go("biz-client", id)} openVisit={() => setVisitOpen(true)} />}
            {screen === "biz-client" && <BizClientDetail clientId={clientId} back={() => go("biz-clients")} openRedeem={() => go("biz-redeem")} openVisit={() => setVisitOpen(true)} />}
            {screen === "biz-visit" && <BizVisit openVisit={() => setVisitOpen(true)} />}
            {screen === "biz-benefits" && <BizBenefits />}
            {screen === "biz-rules" && <BizRules />}
            {screen === "biz-redeem" && <BizRedeem onConfirm={handleRedeem} />}
            {screen === "biz-history" && <BizHistory />}
          </BizShell>
        );
    }
  };

  return (
    <>
      <div data-screen-label={screenLabel(screen)}>{renderScreen()}</div>
      <VisitModal open={visitOpen} onClose={() => setVisitOpen(false)} onConfirm={handleVisitConfirm} />
      <Confetti trigger={confetti} />
      <Toast toast={toast} onClose={() => setToast(null)} />
      <TweaksPanel title="Tweaks">
        <TweakSection label="Color de acento">
          <TweakColor
            label="Acento"
            value={hslOfAccent(tweaks.accent)}
            options={Object.keys(ACCENTS).map(k => hslOfAccent(k))}
            onChange={(v) => {
              const key = Object.keys(ACCENTS).find(k => hslOfAccent(k) === v) || "violet";
              setTweak("accent", key);
            }}
          />
        </TweakSection>
        <TweakSection label="Tema">
          <TweakRadio label="Modo" value={tweaks.theme} options={[{ value: "dark", label: "Dark" }, { value: "light", label: "Light" }]} onChange={(v) => setTweak("theme", v)} />
        </TweakSection>
        <TweakSection label="Saltos rápidos">
          <div style={{ display: "grid", gap: 6 }}>
            {[
              ["— Portal —", null],
              ["Portal · landing", "portal"],
              ["Catálogo de módulos", "modules"],
              ["Landing marketing", "landing"],
              ["— Comercio —", null],
              ["Dashboard Looppy", "biz-dashboard"],
              ["Clientes", "biz-clients"],
              ["Beneficios", "biz-benefits"],
              ["Canjear", "biz-redeem"],
              ["— Ecommerce —", null],
              ["Dashboard ecom", "ecom-dashboard"],
              ["Productos", "ecom-products"],
              ["Pedidos", "ecom-orders"],
              ["Stock", "ecom-stock"],
              ["POS", "ecom-pos"],
              ["Tienda online", "ecom-store"],
              ["Temas", "ecom-themes"],
              ["— Cliente —", null],
              ["App cliente Looppy", "customer"],
              ["— Superadmin —", null],
              ["Dashboard plataforma", "super-dashboard"],
              ["Comercios", "super-merchants"],
              ["Planes & facturación", "super-plans"],
              ["Soporte", "super-support"],
              ["Salud del sistema", "super-health"],
              ["Auditoría", "super-logs"],
              ["— Auth —", null],
              ["Login", "login"],
              ["Registro", "register"],
            ].map(([l, s], i) => s === null ? (
              <div key={i} style={{ padding: "6px 10px", fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700, marginTop: 6 }}>{l}</div>
            ) : (
              <button key={s} onClick={() => go(s)} style={{
                padding: "8px 10px", textAlign: "left", borderRadius: 8,
                background: screen === s ? "var(--accent-soft)" : "var(--surface-2)",
                color: screen === s ? "var(--accent)" : "var(--text)",
                border: "1px solid var(--line)", fontSize: 13, cursor: "pointer", fontWeight: 500,
              }}>{l}</button>
            ))}
          </div>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

function screenLabel(s) {
  const map = {
    "portal": "Portal",
    "landing": "Landing", "login": "Login", "register": "Registro",
    "biz-dashboard": "Dashboard negocio", "biz-clients": "Clientes",
    "biz-client": "Perfil de cliente", "biz-visit": "Registrar visita",
    "biz-benefits": "Beneficios", "biz-rules": "Reglas y rangos",
    "biz-redeem": "Canjear", "biz-history": "Historial",
    "customer": "Vista cliente",
    "ecom-dashboard": "Ecom · Dashboard", "ecom-products": "Ecom · Productos",
    "ecom-categories": "Ecom · Categorías", "ecom-variations": "Ecom · Variaciones",
    "ecom-stock": "Ecom · Stock", "ecom-orders": "Ecom · Pedidos",
    "ecom-customers": "Ecom · Clientes", "ecom-promos": "Ecom · Promociones",
    "ecom-payments": "Ecom · Pagos", "ecom-shipping": "Ecom · Envíos",
    "ecom-pos": "Ecom · POS", "ecom-reports": "Ecom · Reportes",
    "ecom-settings": "Ecom · Configuración", "ecom-store": "Ecom · Tienda online",
    "ecom-themes": "Ecom · Temas",
    "modules": "Catálogo de módulos",
    "super-dashboard": "Super · Dashboard", "super-merchants": "Super · Comercios",
    "super-plans": "Super · Planes", "super-users": "Super · Usuarios",
    "super-support": "Super · Soporte", "super-health": "Super · Salud",
    "super-logs": "Super · Auditoría", "super-config": "Super · Config",
  };
  return map[s] || s;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
