// LOOPPY — Catálogo de módulos y extensiones
// Página interna que muestra TODOS los módulos: esenciales + 30+ avanzados
// Cada módulo: nombre, ícono, descripción, modelo de precio, estado

const MODULES_DATA = [
  // ── ESENCIALES (incluidos en todos los planes)
  { cat: "esenciales", id: "fidelizacion", t: "Fidelización con puntos", i: "sparkles", desc: "Sumá puntos por visita o compra, definí beneficios y reconocé clientes VIP. La base de Looppy.", price: "incluido", active: true },
  { cat: "esenciales", id: "clientes-base", t: "Base de clientes unificada", i: "users", desc: "Una sola base online + offline con historial, etiquetas y segmentación.", price: "incluido", active: true },
  { cat: "esenciales", id: "qr-app", t: "App del cliente con QR", i: "qr-code", desc: "Tarjeta digital web (sin descargar app) que el cliente muestra al cajero para acumular puntos.", price: "incluido", active: true },
  { cat: "esenciales", id: "pos-basico", t: "POS básico", i: "scan-line", desc: "Caja rápida en mostrador con búsqueda de productos y cobro en efectivo o transferencia.", price: "incluido", active: true },
  { cat: "esenciales", id: "reportes-basicos", t: "Reportes esenciales", i: "bar-chart-3", desc: "Ventas del día, mes, ranking de productos y clientes top. Datos accionables al instante.", price: "incluido", active: true },

  // ── ECOMMERCE & VENTAS
  { cat: "ecommerce", id: "tienda-online", t: "Tienda online completa", i: "shopping-bag", desc: "Catálogo, carrito, checkout, Mercado Pago y envíos en tu .shop. Lista en 10 minutos.", price: "membresia", plan: "Pro+Ecom", active: true },
  { cat: "ecommerce", id: "themes", t: "Temas y diseño visual", i: "palette", desc: "5 temas premium listos para usar o desarrollo a medida con nuestro equipo de diseño.", price: "incluido", active: true, route: "ecom-themes" },
  { cat: "ecommerce", id: "carritos-abandonados", t: "Carritos abandonados automáticos", i: "shopping-cart", desc: "Email automático a quien dejó productos sin comprar. Recuperá hasta 30% de ventas perdidas.", price: "membresia", plan: "Pro+Ecom" },
  { cat: "ecommerce", id: "combo-productos", t: "Combos y bundles", i: "package-2", desc: "Vendé productos combinados con descuento. Aumentá el ticket promedio sin esfuerzo.", price: "incluido" },
  { cat: "ecommerce", id: "subastas-flash", t: "Flash sales y subastas", i: "timer", desc: "Liquidaciones por tiempo limitado con contador en vivo. Cero implementación.", price: "membresia", plan: "Pro+Ecom" },
  { cat: "ecommerce", id: "outlet", t: "Outlet automatizado", i: "tag", desc: "Productos con stock viejo o roto pasan automáticamente a tu sección outlet.", price: "incluido" },
  { cat: "ecommerce", id: "preorder", t: "Pre-venta y reservas", i: "clock", desc: "Vendé productos antes de tenerlos en stock. Reservas con seña o pago total.", price: "membresia" },

  // ── MARKETING & COMUNICACIÓN
  { cat: "marketing", id: "email-mkt", t: "Email marketing masivo", i: "mail", desc: "Hasta 100K emails/mes con plantillas y segmentación por nivel, gasto o última visita.", price: "membresia", plan: "Plus+" },
  { cat: "marketing", id: "whatsapp-business", t: "WhatsApp Business API", i: "message-circle", desc: "Mensajes 1-a-1, broadcast y campañas. Cobra por mensaje enviado · sin costo fijo.", price: "uso", costo: "$8 por msj" },
  { cat: "marketing", id: "sms", t: "SMS transaccional y promocional", i: "smartphone", desc: "Avisá pedidos listos o promos de último momento. Llega al 98% de los teléfonos.", price: "uso", costo: "$24 por SMS" },
  { cat: "marketing", id: "push-app", t: "Push notifications a la app", i: "bell", desc: "Notificaciones directas a la app del cliente. Segmentación por nivel y comportamiento.", price: "incluido" },
  { cat: "marketing", id: "automatizaciones", t: "Workflows / automatizaciones", i: "workflow", desc: "Disparadores tipo Zapier: 'si X pasa, hacer Y'. Recompras, bienvenidas, recordatorios.", price: "membresia", plan: "Pro" },
  { cat: "marketing", id: "cumpleanos", t: "Cumpleaños y aniversarios", i: "cake-slice", desc: "Mensaje + beneficio automático en el cumpleaños del cliente. Se siente vista, vos vendés.", price: "incluido" },
  { cat: "marketing", id: "referidos", t: "Programa de referidos", i: "users-round", desc: "Tus clientes traen amigos y ambos ganan puntos. El boca a boca, sistematizado.", price: "membresia", plan: "Plus+" },
  { cat: "marketing", id: "reviews", t: "Reseñas y rating de productos", i: "star", desc: "Solicitud automática de review post-compra. Mostralas en producto. Subí conversión 18%.", price: "incluido" },

  // ── OPERACIONES
  { cat: "operaciones", id: "multi-sucursal", t: "Multi-sucursal avanzado", i: "building-2", desc: "Stock, precios y promos diferenciados por sucursal. Reportes consolidados.", price: "membresia", plan: "Pro" },
  { cat: "operaciones", id: "reservas-turnos", t: "Reservas y turnos online", i: "calendar-clock", desc: "Calendario que se sincroniza con Google. Pago de seña, recordatorios, no-shows.", price: "membresia" },
  { cat: "operaciones", id: "delivery-flota", t: "Delivery propio + flotas", i: "truck", desc: "Asigná pedidos a tus motos o terceriza con Cabify, PedidosYa o Rappi.", price: "uso", costo: "$120 envío" },
  { cat: "operaciones", id: "cocina-comandas", t: "Comandas para cocina", i: "chef-hat", desc: "Las órdenes del POS y delivery aparecen en pantalla de cocina con timing.", price: "membresia" },
  { cat: "operaciones", id: "mesas", t: "Mesas y sala de espera", i: "armchair", desc: "Para gastronomía: ocupación en vivo, lista de espera con notificación por SMS al estar libre.", price: "membresia" },
  { cat: "operaciones", id: "produccion", t: "Producción interna", i: "factory", desc: "Recetas, OEE y costos para comercios que fabrican lo que venden.", price: "membresia", plan: "Pro" },
  { cat: "operaciones", id: "importacion-csv", t: "Importación masiva (CSV/Excel)", i: "upload", desc: "Subí 10.000 productos o clientes desde una planilla. Sin perder tiempo.", price: "incluido" },

  // ── PAGOS & COBROS
  { cat: "pagos", id: "suscripciones", t: "Suscripciones / cobros recurrentes", i: "repeat", desc: "Cobrá mensual a socios de gym, suscriptores de café, membresías. Reintentos automáticos.", price: "membresia" },
  { cat: "pagos", id: "link-pago", t: "Links de pago compartibles", i: "link", desc: "Generá un link, lo mandás por WhatsApp, te pagan. Sin abrir el ecommerce.", price: "uso", costo: "2.9%" },
  { cat: "pagos", id: "cuotas", t: "Cobros en cuotas con interés", i: "credit-card", desc: "1 a 12 cuotas configurables. Decidís qué cuotas absorbés y cuáles trasladás.", price: "incluido" },
  { cat: "pagos", id: "factura-afip", t: "Factura electrónica AFIP", i: "receipt", desc: "Facturás A, B o C automáticamente desde la venta. Cumple con AFIP sin Excel.", price: "membresia" },
  { cat: "pagos", id: "usd", t: "Cobros internacionales USD", i: "globe", desc: "Stripe internacional para clientes del exterior. Recibí en USD a tu cuenta.", price: "membresia" },
  { cat: "pagos", id: "conciliacion", t: "Conciliación bancaria", i: "git-compare", desc: "Cruza tus ingresos con extracto bancario. Detecta diferencias automáticamente.", price: "membresia", plan: "Pro" },

  // ── ANALYTICS & BI
  { cat: "analytics", id: "reportes-custom", t: "Reportes personalizados (SQL)", i: "database", desc: "Armá los reportes que necesites con SQL. O usá las plantillas listas para tu rubro.", price: "membresia", plan: "Pro" },
  { cat: "analytics", id: "cohort", t: "Cohort analysis y retención", i: "line-chart", desc: "Ves cuánto retorna cada generación de clientes nuevos. Identificás qué te funciona.", price: "incluido" },
  { cat: "analytics", id: "atribucion", t: "Atribución multi-canal", i: "git-fork", desc: "Sabés qué campaña, qué canal y qué post te trajo cada venta.", price: "membresia" },
  { cat: "analytics", id: "predict-churn", t: "Predicción de churn con IA", i: "brain-circuit", desc: "Identifica clientes en riesgo de dejarte. Disparás acción antes de perderlos.", price: "membresia", plan: "Pro" },

  // ── INTEGRACIONES
  { cat: "integraciones", id: "andreani", t: "Andreani / OCA / Correo AR", i: "package", desc: "Cotización + impresión de etiquetas + seguimiento. Conectado al checkout.", price: "uso", costo: "según envío" },
  { cat: "integraciones", id: "instagram", t: "Instagram Shopping", i: "instagram", desc: "Sincronizá tu catálogo con Instagram. Vendé desde tus posts y stories.", price: "incluido" },
  { cat: "integraciones", id: "google-shop", t: "Google Shopping + Ads", i: "search", desc: "Tu catálogo aparece en búsquedas de Google. Setup automático + campañas asistidas.", price: "membresia" },
  { cat: "integraciones", id: "tiendanube", t: "Migración Tiendanube / Woo", i: "import", desc: "Importamos productos, clientes y pedidos de tu plataforma actual. Sin perder nada.", price: "incluido" },
  { cat: "integraciones", id: "zapier", t: "Zapier / Make / n8n", i: "zap", desc: "Conectá Looppy con 5.000+ apps externas (HubSpot, Notion, Sheets, lo que sea).", price: "membresia", plan: "Pro" },
  { cat: "integraciones", id: "contabilidad", t: "Contabilidad (Xubio, Colppy)", i: "calculator", desc: "Tus ventas se exportan automáticamente al sistema de tu contador.", price: "membresia" },
  { cat: "integraciones", id: "afip-libros", t: "AFIP / IIBB / Monotributo", i: "scroll", desc: "Genera libros IVA, declaraciones de Ingresos Brutos y resumen para Monotributo.", price: "membresia" },

  // ── IA & PREMIUM
  { cat: "ia", id: "recomendador", t: "Recomendador de productos IA", i: "sparkle", desc: "'Productos para vos' personalizados con IA. Sube conversión 22% en promedio.", price: "membresia", plan: "Pro" },
  { cat: "ia", id: "chatbot", t: "Chatbot asistente 24/7", i: "bot", desc: "Responde dudas de stock, envíos, devoluciones. Aprende de tu tienda. Se escala a humano.", price: "membresia" },
  { cat: "ia", id: "descripciones-ia", t: "Generador descripciones IA", i: "wand-2", desc: "Sacale 10 fotos al producto, la IA escribe título, descripción y SEO en 5 segundos.", price: "uso", costo: "$80 por producto" },
  { cat: "ia", id: "scoring", t: "Scoring de clientes con IA", i: "target", desc: "Identifica tus mejores clientes y los que están por irse. Acciones automáticas por tier.", price: "membresia", plan: "Pro" },
  { cat: "ia", id: "fraude", t: "Detección de fraude", i: "shield-alert", desc: "Análisis automático de transacciones sospechosas antes de procesar el pago.", price: "membresia", plan: "Pro" },
  { cat: "ia", id: "sentimiento", t: "Análisis de reseñas con IA", i: "smile", desc: "Detecta sentimiento, problemas recurrentes y temas calientes en las reseñas que recibís.", price: "membresia" },

  // ── ENTERPRISE
  { cat: "enterprise", id: "white-label", t: "White-label / marca propia", i: "paintbrush", desc: "Looppy con tu marca, dominio propio y app del cliente con tu logo. Sin mencionar a Looppy.", price: "membresia", plan: "Enterprise" },
  { cat: "enterprise", id: "api-publica", t: "API pública + webhooks", i: "code-2", desc: "API REST completa, webhooks ilimitados y SDK en 4 lenguajes para integrar todo.", price: "membresia", plan: "Pro" },
  { cat: "enterprise", id: "multi-pais", t: "Multi-país / multimoneda", i: "languages", desc: "USD, BRL, CLP, COP, MXN. Reglas fiscales locales. Para marcas que venden a varios países.", price: "membresia", plan: "Pro" },
  { cat: "enterprise", id: "sso", t: "SSO / Single Sign-On", i: "key-round", desc: "Login corporativo con Google Workspace, Microsoft 365 o SAML 2.0.", price: "membresia", plan: "Enterprise" },
  { cat: "enterprise", id: "sla", t: "SLA dedicado 99.99%", i: "server", desc: "Infraestructura dedicada, SLA contractual, equipo de respuesta en 5 min.", price: "membresia", plan: "Enterprise" },
  { cat: "enterprise", id: "manager", t: "Account manager dedicado", i: "headphones", desc: "Un humano de Looppy asignado a tu cuenta. Reuniones mensuales de optimización.", price: "membresia", plan: "Enterprise" },
];

const MODULES_CATS = [
  { id: "esenciales", l: "Esenciales", i: "rocket", desc: "Lo que viene incluido en todos los planes. La base de Looppy." },
  { id: "ecommerce", l: "Ecommerce", i: "shopping-bag", desc: "Vendé online sin techos: tienda, temas, combos, flash sales." },
  { id: "marketing", l: "Marketing", i: "megaphone", desc: "Email, WhatsApp, SMS, push y automatizaciones para reactivar clientes." },
  { id: "operaciones", l: "Operaciones", i: "settings-2", desc: "Multi-sucursal, reservas, delivery, cocina, mesas, producción." },
  { id: "pagos", l: "Pagos & Cobros", i: "credit-card", desc: "Cuotas, suscripciones, links de pago, facturación electrónica." },
  { id: "analytics", l: "Analytics & BI", i: "bar-chart-3", desc: "Cohortes, atribución, reportes custom y predicción de churn." },
  { id: "integraciones", l: "Integraciones", i: "puzzle", desc: "Conectá Looppy con AFIP, Andreani, Google, Instagram, contabilidad." },
  { id: "ia", l: "IA & Avanzados", i: "brain-circuit", desc: "Recomendaciones, chatbot, generación de contenido y scoring." },
  { id: "enterprise", l: "Enterprise", i: "crown", desc: "White-label, API pública, multi-país, SLA dedicado." },
];

// ── Helpers
function PriceTag({ price, costo, plan }) {
  const map = {
    incluido: { l: "Incluido", bg: "rgba(52,211,153,0.14)", c: "#34d399", icon: "check" },
    membresia: { l: plan ? plan : "Membresía", bg: "var(--accent-soft)", c: "var(--accent)", icon: "sparkle" },
    uso: { l: costo || "Por uso", bg: "rgba(240,185,78,0.14)", c: "#f0b94e", icon: "zap" },
  };
  const m = map[price] || map.incluido;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 9px", borderRadius: 999, background: m.bg, color: m.c, fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
      <Icon name={m.icon} size={10} /> {m.l}
    </span>
  );
}

// ── Main page
function ModulesCatalog({ go, fromBiz = false }) {
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const filtered = MODULES_DATA.filter(m =>
    (cat === "all" || m.cat === cat) &&
    (priceFilter === "all" || m.price === priceFilter) &&
    (!q || m.t.toLowerCase().includes(q.toLowerCase()) || m.desc.toLowerCase().includes(q.toLowerCase()))
  );
  const counts = MODULES_CATS.reduce((a, c) => ({ ...a, [c.id]: MODULES_DATA.filter(m => m.cat === c.id).length }), {});
  const activeCount = MODULES_DATA.filter(m => m.active).length;
  const totalCount = MODULES_DATA.length;

  return (
    <div style={{ minHeight: fromBiz ? "auto" : "100vh", background: "var(--bg)", color: "var(--text)" }}>
      {/* Header — only shown when not inside BizShell */}
      {!fromBiz && (
        <div style={{ borderBottom: "1px solid var(--line)", padding: "20px 28px", background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, position: "sticky", top: 0, zIndex: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Button variant="ghost" icon="arrow-left" onClick={() => go("portal")}>Volver</Button>
            <div style={{ width: 1, height: 24, background: "var(--line)" }} />
            <LogoMark size={24} />
            <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)", letterSpacing: "0.14em", fontWeight: 700, textTransform: "uppercase" }}>· Módulos</span>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Badge tone="success" dot>{activeCount} activos</Badge>
            <Badge tone="neutral">{totalCount} disponibles</Badge>
            <Button variant="primary" icon="headphones">Hablar con ventas</Button>
          </div>
        </div>
      )}
      {fromBiz && (
        <div style={{ padding: "24px 32px", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, background: "var(--bg)", position: "sticky", top: 0, zIndex: 10, backdropFilter: "blur(8px)" }}>
          <div>
            <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 6 }}>Marketplace · Looppy</div>
            <h1 className="font-display" style={{ fontSize: 28, fontWeight: 600, margin: 0, letterSpacing: "-0.025em" }}>Módulos & extensiones</h1>
            <div style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 4 }}>{activeCount} activos en tu plan · {totalCount} disponibles para activar</div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Button variant="ghost" icon="headphones">Hablar con ventas</Button>
            <Button variant="primary" icon="zap">Upgrade de plan</Button>
          </div>
        </div>
      )}

      <main style={{ maxWidth: fromBiz ? "none" : 1280, margin: fromBiz ? "0" : "0 auto", padding: fromBiz ? "32px" : "40px 28px 80px" }}>
        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: 36, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>Marketplace de Looppy</div>
          <h1 className="font-display" style={{ fontSize: "clamp(38px, 5vw, 60px)", fontWeight: 600, margin: 0, letterSpacing: "-0.035em", lineHeight: 1 }}>
            {totalCount} módulos. Una sola plataforma.
          </h1>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.5, marginTop: 16 }}>
            Activá lo que necesites cuando lo necesites. Algunos vienen incluidos en tu plan, otros se pagan por uso o por suscripción. <strong style={{ color: "var(--text)" }}>Sin esperar a un desarrollador.</strong>
          </p>
        </div>

        {/* Pricing models intro */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 32 }}>
          {[
            { p: "incluido", t: "Incluido", d: "Sin costo extra. Vienen con tu plan actual.", i: "check-circle-2", c: "#34d399" },
            { p: "membresia", t: "Por membresía", d: "Activás según tu plan. Cancelás cuando quieras.", i: "sparkle", c: "var(--accent)" },
            { p: "uso", t: "Pago por uso", d: "Pagás solo por lo que consumís. Sin compromiso.", i: "zap", c: "#f0b94e" },
          ].map(m => (
            <div key={m.p} onClick={() => setPriceFilter(priceFilter === m.p ? "all" : m.p)} style={{ padding: 22, background: priceFilter === m.p ? "var(--surface-2)" : "var(--surface)", border: priceFilter === m.p ? `1px solid ${m.c}` : "1px solid var(--line)", borderRadius: 18, cursor: "pointer", transition: "all .15s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ width: 38, height: 38, borderRadius: 10, background: `${m.c}26`, color: m.c, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={m.i} size={18} /></span>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{m.t}</div>
                <span style={{ marginLeft: "auto", fontSize: 12, color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace" }}>{MODULES_DATA.filter(x => x.price === m.p).length}</span>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{m.d}</div>
            </div>
          ))}
        </div>

        {/* Filter bar */}
        <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
          <div style={{ flex: 1, maxWidth: 380 }}><Input icon="search" placeholder="Buscar módulo o función…" value={q} onChange={(e) => setQ(e.target.value)} /></div>
          <div style={{ display: "flex", gap: 6, overflowX: "auto", flexWrap: "wrap" }}>
            <span className={`chip ${cat === "all" ? "chip-active" : ""}`} onClick={() => setCat("all")} style={{ cursor: "pointer" }}>Todos · {totalCount}</span>
            {MODULES_CATS.map(c => (
              <span key={c.id} className={`chip ${cat === c.id ? "chip-active" : ""}`} onClick={() => setCat(c.id)} style={{ cursor: "pointer" }}>
                <Icon name={c.i} size={11} /> {c.l} · {counts[c.id]}
              </span>
            ))}
          </div>
        </div>

        {/* Category description when single category selected */}
        {cat !== "all" && (
          <div style={{ padding: "16px 20px", background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 12, marginBottom: 20, display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ width: 38, height: 38, borderRadius: 10, background: "var(--accent-soft)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={MODULES_CATS.find(c => c.id === cat).i} size={18} />
            </span>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{MODULES_CATS.find(c => c.id === cat).l}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{MODULES_CATS.find(c => c.id === cat).desc}</div>
            </div>
          </div>
        )}

        {/* Modules grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {filtered.map(m => (
            <div key={m.id} style={{ padding: 22, background: "var(--surface)", border: m.active ? "1px solid var(--accent)" : "1px solid var(--line)", borderRadius: 16, display: "flex", flexDirection: "column", gap: 12, position: "relative", transition: "all .15s" }}>
              {m.active && <span style={{ position: "absolute", top: 12, right: 12 }}><Badge tone="success" dot>Activo</Badge></span>}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 40, height: 40, borderRadius: 10, background: "var(--surface-2)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={m.i} size={18} /></span>
                <PriceTag price={m.price} costo={m.costo} plan={m.plan} />
              </div>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 600, margin: 0 }}>{m.t}</h3>
                <p style={{ fontSize: 13, color: "var(--text-muted)", margin: "8px 0 0", lineHeight: 1.5 }}>{m.desc}</p>
              </div>
              <div style={{ marginTop: "auto", display: "flex", gap: 8, paddingTop: 8 }}>
                {m.active ? (
                  <Button variant="ghost" iconRight="arrow-right" style={{ flex: 1, justifyContent: "center" }} onClick={() => m.route && go(m.route)}>Configurar</Button>
                ) : m.price === "incluido" ? (
                  <Button variant="primary" icon="check" style={{ flex: 1, justifyContent: "center" }}>Activar</Button>
                ) : (
                  <Button variant="primary" icon="zap" style={{ flex: 1, justifyContent: "center" }}>{m.price === "uso" ? "Activar" : "Contratar"}</Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: 60, color: "var(--text-muted)" }}>
            <Icon name="search-x" size={36} style={{ color: "var(--text-dim)" }} />
            <div style={{ marginTop: 14, fontSize: 15, fontWeight: 600 }}>No encontramos módulos con esos filtros</div>
            <div style={{ fontSize: 13, marginTop: 4 }}>Probá con otra palabra o categoría</div>
          </div>
        )}

        {/* Custom development CTA */}
        <div style={{ marginTop: 56, padding: 32, background: "linear-gradient(135deg, var(--accent), hsl(263 70% 26%))", borderRadius: 22, color: "#fff", display: "grid", gridTemplateColumns: "1fr auto", gap: 28, alignItems: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -100, right: -100, width: 300, height: 300, background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 60%)" }} />
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.85, fontWeight: 700, marginBottom: 8 }}>Necesitás algo a medida</div>
            <h2 className="font-display" style={{ fontSize: 30, fontWeight: 600, margin: 0, letterSpacing: "-0.025em" }}>¿No encontrás el módulo que necesitás?</h2>
            <p style={{ fontSize: 14, opacity: 0.92, marginTop: 8, maxWidth: 540 }}>Nuestro equipo de desarrollo construye integraciones y features a medida sobre Looppy. Desde $200K. Cotización en 48 horas.</p>
          </div>
          <Button size="lg" icon="headphones" style={{ background: "#fff", color: "var(--accent)", position: "relative" }}>Solicitar cotización</Button>
        </div>
      </main>
    </div>
  );
}

Object.assign(window, { ModulesCatalog, MODULES_DATA, MODULES_CATS });
