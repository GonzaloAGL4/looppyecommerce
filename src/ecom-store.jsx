// LIVE SPORTS — full-page storefront (port of attached Live Sport design)
// Replaces the previous phone-preview storefront. Renders when route = "ecom-store".

const LS_LOGO_URL = "https://static.aapp.space/uploads/1779857496_ChatGPT_Image_27_may_2026__01_51_24.png";
const money = (n) => new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(n);
const priceOf = (p) => p.promo || p.price;
const oldPriceOf = (p) => (p.promo ? p.price : (p.oldPrice || null));

function LSBadge({ children, dark = false }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-black uppercase tracking-wide ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      {children}
    </span>
  );
}

function LSHeader({ cartCount, onCart, onBackAdmin, onAccount }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <div className="flex items-center gap-4">
          <button className="rounded-full border border-white/15 p-2 text-white lg:hidden"><Icon name="menu" size={22} /></button>
          <img src={LS_LOGO_URL} alt="Live Sport" className="h-10 w-auto object-contain md:h-12" />
        </div>
        <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wide text-white/75 lg:flex">
          <a href="#basquet" className="hover:text-white">Básquet</a>
          <a href="#padel" className="hover:text-white">Pádel</a>
          <a href="#ofertas" className="hover:text-white">Ofertas</a>
          <a href="#nuevos" className="hover:text-white">Nuevos ingresos</a>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white md:flex">
            <Icon name="search" size={18} />
            <span className="text-sm text-white/55">Buscar productos</span>
          </div>
          <button onClick={onAccount} className="hidden rounded-full border border-white/15 p-3 text-white md:inline-flex" title="Mi cuenta"><Icon name="user" size={18} /></button>
          <button onClick={onCart} className="relative rounded-full bg-white p-3 text-black">
            <Icon name="shopping-bag" size={19} />
            {cartCount > 0 && <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-black text-[10px] font-black text-white ring-2 ring-white">{cartCount}</span>}
          </button>
          <button onClick={onBackAdmin} className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-black uppercase tracking-wide text-white/85 hover:bg-white hover:text-black transition" title="Volver al panel Looppy">
            <Icon name="arrow-left" size={14} /> Panel
          </button>
        </div>
      </div>
    </header>
  );
}

function LSHero() {
  const slides = [
    { kicker: "Colección básquet", title: "Rompé la cancha con estilo", text: "Ropa deportiva diseñada para moverte libre, jugar fuerte y destacar en cada partido.", cta: "Comprar básquet", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1600&q=85" },
    { kicker: "Colección pádel", title: "Jugá cómodo. Ganá con actitud.", text: "Prendas livianas, modernas y funcionales para entrenar, competir y verte impecable.", cta: "Ver pádel", img: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1600&q=85" },
  ];
  const [index, setIndex] = useState(0);
  const s = slides[index];
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img src={s.img} alt="Deporte" className="h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>
      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center px-4 py-16 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <div className="max-w-3xl">
          <LSBadge>{s.kicker}</LSBadge>
          <h1 className="mt-6 text-5xl font-black uppercase leading-[0.92] tracking-tight md:text-7xl lg:text-8xl">{s.title}</h1>
          <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-white/75 md:text-xl">{s.text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#productos" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:scale-[1.02]">{s.cta} <Icon name="arrow-right" size={18} /></a>
            <a href="#ofertas" className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-black">Ver ofertas</a>
          </div>
        </div>
        <div className="hidden justify-end lg:flex">
          <div className="w-[360px] rounded-[2rem] border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
            <div className="rounded-[1.6rem] bg-white p-5 text-black shadow-2xl">
              <p className="text-xs font-black uppercase tracking-widest text-black/50">Promo destacada</p>
              <h3 className="mt-2 text-3xl font-black uppercase leading-none">Últimas unidades</h3>
              <p className="mt-3 text-sm font-semibold text-black/60">Comprá hoy. Entrená mañana. No esperes a que se agote.</p>
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-black p-4 text-white">
                <span className="text-sm font-bold">Hasta 25% OFF</span>
                <Icon name="arrow-right" size={18} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-4 flex gap-2 lg:right-8 z-10">
          <button onClick={() => setIndex((index + slides.length - 1) % slides.length)} className="rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur text-white"><Icon name="chevron-left" size={18} /></button>
          <button onClick={() => setIndex((index + 1) % slides.length)} className="rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur text-white"><Icon name="chevron-right" size={18} /></button>
        </div>
      </div>
    </section>
  );
}

function LSCategorySection() {
  const cats = [
    { id: "basquet", title: "Básquet", text: "Camisetas, shorts, buzos, musculosas, medias y accesorios para romper la cancha.", image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1200&q=80" },
    { id: "padel", title: "Pádel", text: "Remeras, shorts, polleras, camperas, accesorios y complementos para jugar con ventaja.", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=80" },
  ];
  return (
    <section className="bg-white px-4 py-16 text-black lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-black/45">Categorías principales</p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight md:text-6xl">Básquet y pádel en un solo lugar</h2>
          </div>
          <a href="#productos" className="hidden rounded-full bg-black px-6 py-3 text-sm font-black uppercase text-white md:inline-flex">Ver todo</a>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {cats.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="group relative min-h-[360px] overflow-hidden rounded-[2rem] bg-black text-white block">
              <img src={cat.image} alt={cat.title} className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <h3 className="text-5xl font-black uppercase">{cat.title}</h3>
                <p className="mt-3 max-w-md text-base font-semibold text-white/75">{cat.text}</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black uppercase text-black">Comprar ahora <Icon name="arrow-right" size={17} /></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function LSProductCard({ product, onAdd, onView }) {
  const old = oldPriceOf(product);
  return (
    <article className="group overflow-hidden rounded-[1.7rem] border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        {product.badge && <div className="absolute left-4 top-4"><LSBadge dark>{product.badge}</LSBadge></div>}
        <button className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-black backdrop-blur">
          <Icon name="heart" size={19} />
        </button>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-black uppercase tracking-widest text-black/45">{product.sportLabel} · {product.cat}</p>
          <div className="flex items-center gap-1 text-xs font-black"><Icon name="star" size={14} /> 4.9</div>
        </div>
        <h3 onClick={() => onView(product)} className="mt-2 cursor-pointer text-xl font-black leading-tight text-black hover:underline">{product.name}</h3>
        <p className="mt-2 min-h-[40px] text-sm font-medium text-black/55">{product.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.sizes.slice(0, 4).map((size) => (
            <span key={size} className="rounded-full border border-black/15 px-3 py-1 text-xs font-black">{size}</span>
          ))}
        </div>
        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-2xl font-black">{money(priceOf(product))}</p>
            {old && <p className="text-sm font-bold text-black/40 line-through">{money(old)}</p>}
          </div>
          <button onClick={() => onAdd(product)} className="rounded-full bg-black px-5 py-3 text-xs font-black uppercase text-white transition hover:scale-105">
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}

function LSProductGrid({ onAdd, onView }) {
  const D = window.LS_DATA;
  const [filter, setFilter] = useState("Todos");
  const products = D.LS_PRODUCTS;
  const filtered = useMemo(() => {
    if (filter === "Todos") return products;
    if (filter === "Básquet") return products.filter(p => p.sport === "basket");
    if (filter === "Pádel") return products.filter(p => p.sport === "padel");
    if (filter === "Oferta") return products.filter(p => oldPriceOf(p));
    return products;
  }, [filter]);
  return (
    <section id="productos" className="bg-neutral-100 px-4 py-16 text-black lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-black/45">Productos destacados</p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight md:text-6xl">Comprá hoy y jugá con ventaja</h2>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {["Todos", "Básquet", "Pádel", "Oferta"].map((item) => (
              <button key={item} onClick={() => setFilter(item)} className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-black uppercase ${filter === item ? "bg-black text-white" : "bg-white text-black"}`}>{item}</button>
            ))}
            <button className="whitespace-nowrap rounded-full bg-white px-5 py-3 text-sm font-black uppercase text-black inline-flex items-center gap-2"><Icon name="sliders-horizontal" size={16} /> Filtros</button>
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => <LSProductCard key={product.id} product={product} onAdd={onAdd} onView={onView} />)}
        </div>
      </div>
    </section>
  );
}

function LSBenefits() {
  const items = [
    { icon: "truck", title: "Envío rápido", text: "Recibí o retirás tu compra sin vueltas." },
    { icon: "credit-card", title: "Pagá como quieras", text: "Mercado Pago, transferencia, tarjeta o efectivo." },
    { icon: "shield-check", title: "Compra segura", text: "Productos con stock real y atención directa." },
    { icon: "package-check", title: "Últimas unidades", text: "Ofertas reales para comprar antes de que vuelen." },
  ];
  return (
    <section className="bg-black px-4 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="grid gap-5 md:grid-cols-4">
            {items.map(({ icon, title, text }) => (
              <div key={title} className="rounded-[1.5rem] bg-white p-6 text-black">
                <Icon name={icon} size={28} />
                <h3 className="mt-4 text-xl font-black uppercase">{title}</h3>
                <p className="mt-2 text-sm font-semibold text-black/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LSCheckoutPreview() {
  return (
    <section className="bg-white px-4 py-16 text-black lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-black/45">Checkout mobile-first</p>
          <h2 className="mt-2 text-4xl font-black uppercase tracking-tight md:text-6xl">Comprá rápido. Sin perder tiempo.</h2>
          <p className="mt-5 text-lg font-medium leading-relaxed text-black/60">Una experiencia simple para elegir talle, pagar, retirar o recibir. Todo pensado para convertir visitas en compras.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <LSBadge dark>Mercado Pago</LSBadge>
            <LSBadge dark>Transferencia</LSBadge>
            <LSBadge dark>Retiro en tienda</LSBadge>
            <LSBadge dark>Envío local</LSBadge>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[420px] rounded-[2.2rem] border-8 border-black bg-black p-4 shadow-2xl">
          <div className="rounded-[1.7rem] bg-white p-5 text-black">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black uppercase">Finalizar compra</h3>
              <Icon name="check-circle-2" size={24} />
            </div>
            {["Datos del cliente", "Método de entrega", "Método de pago", "Confirmación"].map((step, i) => (
              <div key={step} className="mt-4 rounded-2xl border border-black/10 p-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-black text-sm font-black text-white">{i + 1}</span>
                  <span className="font-black">{step}</span>
                </div>
              </div>
            ))}
            <button className="mt-5 w-full rounded-full bg-black py-4 text-sm font-black uppercase text-white">Confirmar pedido</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function LSProductModal({ product, onClose, onAdd }) {
  if (!product) return null;
  const old = oldPriceOf(product);
  return (
    <div className="fixed inset-0 z-[70] grid place-items-end bg-black/70 p-0 backdrop-blur-sm md:place-items-center md:p-6" onClick={onClose}>
      <div className="max-h-[92vh] w-full max-w-5xl overflow-auto rounded-t-[2rem] bg-white text-black shadow-2xl md:rounded-[2rem]" onClick={e => e.stopPropagation()}>
        <div className="grid gap-6 p-5 md:grid-cols-2 md:p-8">
          <div className="overflow-hidden rounded-[1.5rem] bg-neutral-100">
            <img src={product.image} alt={product.name} className="h-full min-h-[420px] w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-4">
              {product.badge && <LSBadge dark>{product.badge}</LSBadge>}
              <button onClick={onClose} className="rounded-full border border-black/15 px-4 py-2 text-sm font-black">Cerrar</button>
            </div>
            <h2 className="mt-5 text-4xl font-black uppercase leading-none">{product.name}</h2>
            <p className="mt-4 text-base font-semibold text-black/60">{product.desc} No es solo ropa. Es actitud de juego.</p>
            <div className="mt-5 flex items-end gap-3">
              <p className="text-4xl font-black">{money(priceOf(product))}</p>
              {old && <p className="pb-1 text-lg font-bold text-black/35 line-through">{money(old)}</p>}
            </div>
            <div className="mt-6">
              <p className="text-sm font-black uppercase tracking-widest text-black/45">Elegí talle</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((s) => <button key={s} className="rounded-full border border-black/20 px-5 py-3 font-black hover:bg-black hover:text-white">{s}</button>)}
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-neutral-100 p-4 text-sm font-bold text-black/60">
              Envío disponible · Retiro en tienda · Pago seguro · Stock limitado
            </div>
            <div className="mt-auto grid gap-3 pt-7 sm:grid-cols-2">
              <button onClick={() => onAdd(product)} className="rounded-full border border-black px-6 py-4 text-sm font-black uppercase">Agregar al carrito</button>
              <button onClick={() => onAdd(product)} className="rounded-full bg-black px-6 py-4 text-sm font-black uppercase text-white">Comprar ahora</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LSCartDrawer({ open, cart, onClose, onAdd, onRemove }) {
  const total = cart.reduce((sum, item) => sum + priceOf(item) * item.qty, 0);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <aside className="ml-auto flex h-full w-full max-w-md flex-col bg-white text-black shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-black/10 p-5">
          <h2 className="text-2xl font-black uppercase">Tu carrito</h2>
          <button onClick={onClose} className="rounded-full border border-black/15 px-4 py-2 text-sm font-black">Cerrar</button>
        </div>
        <div className="flex-1 overflow-auto p-5">
          {cart.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <Icon name="shopping-bag" size={44} />
                <h3 className="mt-4 text-2xl font-black uppercase">Tu carrito está vacío</h3>
                <p className="mt-2 font-semibold text-black/55">Sumá productos y empezá a jugar con ventaja.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 rounded-2xl border border-black/10 p-3">
                  <img src={item.image} alt={item.name} className="h-24 w-24 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-black leading-tight">{item.name}</h3>
                    <p className="mt-1 text-sm font-bold text-black/50">{money(priceOf(item))}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <button onClick={() => onRemove(item)} className="grid h-8 w-8 place-items-center rounded-full border border-black/15"><Icon name="minus" size={15} /></button>
                      <span className="font-black">{item.qty}</span>
                      <button onClick={() => onAdd(item)} className="grid h-8 w-8 place-items-center rounded-full bg-black text-white"><Icon name="plus" size={15} /></button>
                      <button onClick={() => onRemove(item, true)} className="ml-auto grid h-8 w-8 place-items-center rounded-full border border-black/15"><Icon name="trash-2" size={15} /></button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl bg-black p-4 text-white">
                <p className="font-black">Te falta poco para acceder a envío gratis.</p>
                <div className="mt-3 h-2 rounded-full bg-white/20"><div className="h-2 w-3/4 rounded-full bg-white" /></div>
              </div>
            </div>
          )}
        </div>
        <div className="border-t border-black/10 p-5">
          <div className="flex items-center justify-between text-xl font-black"><span>Total</span><span>{money(total)}</span></div>
          <button className="mt-4 w-full rounded-full bg-black py-4 text-sm font-black uppercase text-white">Finalizar compra</button>
          <button onClick={onClose} className="mt-3 w-full rounded-full border border-black/15 py-4 text-sm font-black uppercase">Seguir comprando</button>
        </div>
      </aside>
    </div>
  );
}

function LSConfirmation() {
  return (
    <section className="bg-neutral-100 px-4 py-16 text-black lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 text-center shadow-sm">
        <div className="mx-auto inline-flex"><Icon name="check-circle-2" size={54} /></div>
        <h2 className="mt-5 text-4xl font-black uppercase">Tu pedido fue confirmado</h2>
        <p className="mx-auto mt-3 max-w-xl font-semibold text-black/60">Gracias por comprar en Live Sport. Estamos preparando tu pedido para que lo recibas lo antes posible.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button className="rounded-full bg-black px-6 py-4 text-sm font-black uppercase text-white">Seguir comprando</button>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-6 py-4 text-sm font-black uppercase"><Icon name="message-circle" size={18} /> WhatsApp</button>
        </div>
      </div>
    </section>
  );
}

function LSMobileNav({ cartCount, onCart, onAccount }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/95 px-3 py-2 text-white backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-5 text-[11px] font-black uppercase tracking-wide">
        <a href="#" className="grid justify-items-center gap-1"><Icon name="home" size={20} />Inicio</a>
        <a href="#productos" className="grid justify-items-center gap-1"><Icon name="grid-2x2" size={20} />Tienda</a>
        <a href="#productos" className="grid justify-items-center gap-1"><Icon name="search" size={20} />Buscar</a>
        <button onClick={onCart} className="relative grid justify-items-center gap-1"><Icon name="shopping-bag" size={20} />Carrito{cartCount > 0 && <span className="absolute right-4 top-0 grid h-4 w-4 place-items-center rounded-full bg-white text-[9px] text-black">{cartCount}</span>}</button>
        <button onClick={onAccount} className="grid justify-items-center gap-1"><Icon name="user" size={20} />Cuenta</button>
      </div>
    </nav>
  );
}

function EcomStorePreview({ goAdmin }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const addToCart = (product) => {
    setCart((current) => {
      const found = current.find((item) => item.id === product.id);
      if (found) return current.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      return [...current, { ...product, qty: 1 }];
    });
  };
  const removeFromCart = (product, all = false) => {
    setCart((current) => current.flatMap((item) => {
      if (item.id !== product.id) return [item];
      if (all || item.qty <= 1) return [];
      return [{ ...item, qty: item.qty - 1 }];
    }));
  };
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // Ensure Lucide refreshes when content changes
  React.useEffect(() => { window.lucide?.createIcons(); });

  return (
    <div className="min-h-screen bg-black pb-16 font-sans md:pb-0" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <LSHeader cartCount={cartCount} onCart={() => setCartOpen(true)} onBackAdmin={goAdmin} onAccount={() => setAccountOpen(true)} />
      <LSHero />
      <LSCategorySection />
      <LSProductGrid onAdd={addToCart} onView={setSelected} />
      <section id="ofertas" className="bg-black px-4 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white text-black">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-black/45">Oferta destacada</p>
              <h2 className="mt-3 text-5xl font-black uppercase leading-none md:text-7xl">Últimas unidades: no te quedes afuera</h2>
              <p className="mt-5 max-w-lg text-lg font-semibold text-black/60">Equipate como un jugador profesional. Productos que se mueven con vos, al precio que estabas esperando.</p>
              <button className="mt-8 rounded-full bg-black px-7 py-4 text-sm font-black uppercase text-white">Comprar ofertas</button>
            </div>
            <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80" alt="Oferta deportiva" className="h-full min-h-[420px] w-full object-cover" />
          </div>
        </div>
      </section>
      <LSBenefits />
      <LSCheckoutPreview />
      <LSConfirmation />
      <footer className="bg-black px-4 py-12 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <img src={LS_LOGO_URL} alt="Live Sport" className="h-12 w-auto object-contain" />
          <p className="text-sm font-bold text-white/50">Entrená fuerte. Comprá inteligente.</p>
          <button onClick={goAdmin} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-black uppercase tracking-wide text-white/85 hover:bg-white hover:text-black transition">
            <Icon name="arrow-left" size={14} /> Volver al panel Looppy
          </button>
        </div>
      </footer>
      <LSMobileNav cartCount={cartCount} onCart={() => setCartOpen(true)} onAccount={() => setAccountOpen(true)} />
      <LSProductModal product={selected} onClose={() => setSelected(null)} onAdd={(p) => { addToCart(p); setSelected(null); setCartOpen(true); }} />
      <LSCartDrawer open={cartOpen} cart={cart} onClose={() => setCartOpen(false)} onAdd={addToCart} onRemove={removeFromCart} />
      <LSAccountDrawer open={accountOpen} onClose={() => setAccountOpen(false)} onLogout={goAdmin} />
    </div>
  );
}

Object.assign(window, { EcomStorePreview });
