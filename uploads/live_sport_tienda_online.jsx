import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShoppingBag,
  User,
  Heart,
  Menu,
  SlidersHorizontal,
  Star,
  Truck,
  CreditCard,
  ShieldCheck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Home,
  Grid2X2,
  PackageCheck,
  CheckCircle2,
  MessageCircle,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";

const LOGO = "https://static.aapp.space/uploads/1779857496_ChatGPT_Image_27_may_2026__01_51_24.png";

const products = [
  {
    id: 1,
    name: "Camiseta Basketball Pro Elite",
    sport: "Básquet",
    category: "Camisetas",
    price: 48900,
    oldPrice: 62900,
    badge: "Más vendido",
    sizes: ["S", "M", "L", "XL"],
    color: "Negro",
    gender: "Unisex",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=900&q=80",
    desc: "Liviana, respirable y lista para romper la cancha con actitud profesional.",
  },
  {
    id: 2,
    name: "Short Basketball Street",
    sport: "Básquet",
    category: "Shorts",
    price: 38900,
    oldPrice: null,
    badge: "Nuevo ingreso",
    sizes: ["M", "L", "XL"],
    color: "Blanco",
    gender: "Hombre",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80",
    desc: "Corte cómodo, look urbano y rendimiento para todos los días.",
  },
  {
    id: 3,
    name: "Buzo Oversize Basket Culture",
    sport: "Básquet",
    category: "Buzos",
    price: 76900,
    oldPrice: 89900,
    badge: "Últimas unidades",
    sizes: ["S", "M", "L"],
    color: "Negro",
    gender: "Unisex",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80",
    desc: "El buzo que combina cancha, calle y presencia deportiva.",
  },
  {
    id: 4,
    name: "Musculosa Basketball Shooter",
    sport: "Básquet",
    category: "Musculosas",
    price: 32900,
    oldPrice: null,
    badge: "Edición limitada",
    sizes: ["S", "M", "L", "XL"],
    color: "Blanco",
    gender: "Hombre",
    image: "https://images.unsplash.com/photo-1505666287802-931dc83948e9?auto=format&fit=crop&w=900&q=80",
    desc: "Máxima libertad para entrenar, tirar y competir sin límites.",
  },
  {
    id: 5,
    name: "Remera Training Padel Dry Fit",
    sport: "Pádel",
    category: "Remeras",
    price: 42900,
    oldPrice: 52900,
    badge: "Oferta",
    sizes: ["XS", "S", "M", "L"],
    color: "Negro",
    gender: "Unisex",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=900&q=80",
    desc: "Respirable, liviana y lista para partidos intensos de pádel.",
  },
  {
    id: 6,
    name: "Pollera Padel Pro",
    sport: "Pádel",
    category: "Polleras",
    price: 45900,
    oldPrice: null,
    badge: "Nuevo",
    sizes: ["XS", "S", "M"],
    color: "Blanco",
    gender: "Mujer",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=900&q=80",
    desc: "Diseñada para moverte cómoda, rápida y con estilo dentro de la cancha.",
  },
  {
    id: 7,
    name: "Campera Liviana Court Edition",
    sport: "Pádel",
    category: "Camperas",
    price: 84900,
    oldPrice: 99900,
    badge: "Premium",
    sizes: ["S", "M", "L", "XL"],
    color: "Negro",
    gender: "Unisex",
    image: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed?auto=format&fit=crop&w=900&q=80",
    desc: "Protección ligera, diseño premium y presencia deportiva total.",
  },
  {
    id: 8,
    name: "Zapatillas Indoor Court",
    sport: "Pádel",
    category: "Zapatillas",
    price: 119900,
    oldPrice: 139900,
    badge: "Stock limitado",
    sizes: ["39", "40", "41", "42", "43"],
    color: "Blanco",
    gender: "Unisex",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    desc: "Agarre, estabilidad y comodidad para jugar con ventaja.",
  },
];

const money = (n) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(n);

function Badge({ children, dark = false }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-black uppercase tracking-wide ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      {children}
    </span>
  );
}

function Header({ cartCount, onCart }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <div className="flex items-center gap-4">
          <button className="rounded-full border border-white/15 p-2 text-white lg:hidden">
            <Menu size={22} />
          </button>
          <img src={LOGO} alt="Live Sport" className="h-10 w-auto object-contain md:h-12" />
        </div>

        <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wide text-white/75 lg:flex">
          <a href="#basquet" className="hover:text-white">Básquet</a>
          <a href="#padel" className="hover:text-white">Pádel</a>
          <a href="#ofertas" className="hover:text-white">Ofertas</a>
          <a href="#nuevos" className="hover:text-white">Nuevos ingresos</a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white md:flex">
            <Search size={18} />
            <span className="text-sm text-white/55">Buscar productos</span>
          </div>
          <button className="hidden rounded-full border border-white/15 p-3 text-white md:inline-flex">
            <User size={18} />
          </button>
          <button onClick={onCart} className="relative rounded-full bg-white p-3 text-black">
            <ShoppingBag size={19} />
            {cartCount > 0 && <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-black text-[10px] font-black text-white ring-2 ring-white">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const slides = [
    {
      kicker: "Colección básquet",
      title: "Rompé la cancha con estilo",
      text: "Ropa deportiva diseñada para moverte libre, jugar fuerte y destacar en cada partido.",
      cta: "Comprar básquet",
      img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1600&q=85",
    },
    {
      kicker: "Colección pádel",
      title: "Jugá cómodo. Ganá con actitud.",
      text: "Prendas livianas, modernas y funcionales para entrenar, competir y verte impecable.",
      cta: "Ver pádel",
      img: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1600&q=85",
    },
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
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="max-w-3xl">
          <Badge>{s.kicker}</Badge>
          <h1 className="mt-6 text-5xl font-black uppercase leading-[0.92] tracking-tight md:text-7xl lg:text-8xl">
            {s.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-white/75 md:text-xl">
            {s.text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#productos" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:scale-[1.02]">
              {s.cta} <ArrowRight size={18} />
            </a>
            <a href="#ofertas" className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-black">
              Ver ofertas
            </a>
          </div>
        </motion.div>

        <div className="hidden justify-end lg:flex">
          <div className="w-[360px] rounded-[2rem] border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
            <div className="rounded-[1.6rem] bg-white p-5 text-black shadow-2xl">
              <p className="text-xs font-black uppercase tracking-widest text-black/50">Promo destacada</p>
              <h3 className="mt-2 text-3xl font-black uppercase leading-none">Últimas unidades</h3>
              <p className="mt-3 text-sm font-semibold text-black/60">Comprá hoy. Entrená mañana. No esperes a que se agote.</p>
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-black p-4 text-white">
                <span className="text-sm font-bold">Hasta 25% OFF</span>
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-4 flex gap-2 lg:right-8">
          <button onClick={() => setIndex((index + slides.length - 1) % slides.length)} className="rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur text-white"><ChevronLeft size={18} /></button>
          <button onClick={() => setIndex((index + 1) % slides.length)} className="rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur text-white"><ChevronRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}

function CategorySection() {
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
            <a key={cat.id} href={`#${cat.id}`} className="group relative min-h-[360px] overflow-hidden rounded-[2rem] bg-black text-white">
              <img src={cat.image} alt={cat.title} className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <h3 className="text-5xl font-black uppercase">{cat.title}</h3>
                <p className="mt-3 max-w-md text-base font-semibold text-white/75">{cat.text}</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black uppercase text-black">Comprar ahora <ArrowRight size={17} /></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd, onView }) {
  return (
    <motion.article layout className="group overflow-hidden rounded-[1.7rem] border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute left-4 top-4"><Badge dark>{product.badge}</Badge></div>
        <button className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-black backdrop-blur">
          <Heart size={19} />
        </button>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-black uppercase tracking-widest text-black/45">{product.sport} · {product.category}</p>
          <div className="flex items-center gap-1 text-xs font-black"><Star size={14} fill="currentColor" /> 4.9</div>
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
            <p className="text-2xl font-black">{money(product.price)}</p>
            {product.oldPrice && <p className="text-sm font-bold text-black/40 line-through">{money(product.oldPrice)}</p>}
          </div>
          <button onClick={() => onAdd(product)} className="rounded-full bg-black px-5 py-3 text-xs font-black uppercase text-white transition hover:scale-105">
            Agregar
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function ProductGrid({ onAdd, onView }) {
  const [filter, setFilter] = useState("Todos");
  const filtered = useMemo(() => filter === "Todos" ? products : products.filter((p) => p.sport === filter || p.badge.includes(filter)), [filter]);

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
            <button className="whitespace-nowrap rounded-full bg-white px-5 py-3 text-sm font-black uppercase text-black"><SlidersHorizontal className="mr-2 inline" size={16} /> Filtros</button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} onView={onView} />)}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: Truck, title: "Envío rápido", text: "Recibí o retirás tu compra sin vueltas." },
    { icon: CreditCard, title: "Pagá como quieras", text: "Mercado Pago, transferencia, tarjeta o efectivo." },
    { icon: ShieldCheck, title: "Compra segura", text: "Productos con stock real y atención directa." },
    { icon: PackageCheck, title: "Últimas unidades", text: "Ofertas reales para comprar antes de que vuelen." },
  ];
  return (
    <section className="bg-black px-4 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="grid gap-5 md:grid-cols-4">
            {items.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-[1.5rem] bg-white p-6 text-black">
                <Icon size={28} />
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

function CheckoutPreview() {
  return (
    <section className="bg-white px-4 py-16 text-black lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-black/45">Checkout mobile-first</p>
          <h2 className="mt-2 text-4xl font-black uppercase tracking-tight md:text-6xl">Comprá rápido. Sin perder tiempo.</h2>
          <p className="mt-5 text-lg font-medium leading-relaxed text-black/60">Una experiencia simple para elegir talle, pagar, retirar o recibir. Todo pensado para convertir visitas en compras.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Badge dark>Mercado Pago</Badge>
            <Badge dark>Transferencia</Badge>
            <Badge dark>Retiro en tienda</Badge>
            <Badge dark>Envío local</Badge>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[420px] rounded-[2.2rem] border-8 border-black bg-black p-4 shadow-2xl">
          <div className="rounded-[1.7rem] bg-white p-5 text-black">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black uppercase">Finalizar compra</h3>
              <CheckCircle2 />
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

function ProductModal({ product, onClose, onAdd }) {
  if (!product) return null;
  return (
    <div className="fixed inset-0 z-[70] grid place-items-end bg-black/70 p-0 backdrop-blur-sm md:place-items-center md:p-6">
      <div className="max-h-[92vh] w-full max-w-5xl overflow-auto rounded-t-[2rem] bg-white text-black shadow-2xl md:rounded-[2rem]">
        <div className="grid gap-6 p-5 md:grid-cols-2 md:p-8">
          <div className="overflow-hidden rounded-[1.5rem] bg-neutral-100">
            <img src={product.image} alt={product.name} className="h-full min-h-[420px] w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-4">
              <Badge dark>{product.badge}</Badge>
              <button onClick={onClose} className="rounded-full border border-black/15 px-4 py-2 text-sm font-black">Cerrar</button>
            </div>
            <h2 className="mt-5 text-4xl font-black uppercase leading-none">{product.name}</h2>
            <p className="mt-4 text-base font-semibold text-black/60">{product.desc} No es solo ropa. Es actitud de juego.</p>
            <div className="mt-5 flex items-end gap-3">
              <p className="text-4xl font-black">{money(product.price)}</p>
              {product.oldPrice && <p className="pb-1 text-lg font-bold text-black/35 line-through">{money(product.oldPrice)}</p>}
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

function CartDrawer({ open, cart, onClose, onAdd, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm">
      <aside className="ml-auto flex h-full w-full max-w-md flex-col bg-white text-black shadow-2xl">
        <div className="flex items-center justify-between border-b border-black/10 p-5">
          <h2 className="text-2xl font-black uppercase">Tu carrito</h2>
          <button onClick={onClose} className="rounded-full border border-black/15 px-4 py-2 text-sm font-black">Cerrar</button>
        </div>
        <div className="flex-1 overflow-auto p-5">
          {cart.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <ShoppingBag className="mx-auto" size={44} />
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
                    <p className="mt-1 text-sm font-bold text-black/50">{money(item.price)}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <button onClick={() => onRemove(item)} className="grid h-8 w-8 place-items-center rounded-full border border-black/15"><Minus size={15} /></button>
                      <span className="font-black">{item.qty}</span>
                      <button onClick={() => onAdd(item)} className="grid h-8 w-8 place-items-center rounded-full bg-black text-white"><Plus size={15} /></button>
                      <button onClick={() => onRemove(item, true)} className="ml-auto grid h-8 w-8 place-items-center rounded-full border border-black/15"><Trash2 size={15} /></button>
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

function Confirmation() {
  return (
    <section className="bg-neutral-100 px-4 py-16 text-black lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto" size={54} />
        <h2 className="mt-5 text-4xl font-black uppercase">Tu pedido fue confirmado</h2>
        <p className="mx-auto mt-3 max-w-xl font-semibold text-black/60">Gracias por comprar en Live Sport. Estamos preparando tu pedido para que lo recibas lo antes posible.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button className="rounded-full bg-black px-6 py-4 text-sm font-black uppercase text-white">Seguir comprando</button>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-6 py-4 text-sm font-black uppercase"><MessageCircle size={18} /> WhatsApp</button>
        </div>
      </div>
    </section>
  );
}

function MobileNav({ cartCount, onCart }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/95 px-3 py-2 text-white backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-5 text-[11px] font-black uppercase tracking-wide">
        <a href="#" className="grid justify-items-center gap-1"><Home size={20} />Inicio</a>
        <a href="#productos" className="grid justify-items-center gap-1"><Grid2X2 size={20} />Tienda</a>
        <a href="#productos" className="grid justify-items-center gap-1"><Search size={20} />Buscar</a>
        <button onClick={onCart} className="relative grid justify-items-center gap-1"><ShoppingBag size={20} />Carrito{cartCount > 0 && <span className="absolute right-4 top-0 grid h-4 w-4 place-items-center rounded-full bg-white text-[9px] text-black">{cartCount}</span>}</button>
        <a href="#" className="grid justify-items-center gap-1"><User size={20} />Cuenta</a>
      </div>
    </nav>
  );
}

export default function LiveSportStorefront() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
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

  return (
    <div className="min-h-screen bg-black pb-16 font-sans md:pb-0">
      <Header cartCount={cartCount} onCart={() => setCartOpen(true)} />
      <Hero />
      <CategorySection />
      <ProductGrid onAdd={addToCart} onView={setSelected} />
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
      <Benefits />
      <CheckoutPreview />
      <Confirmation />
      <footer className="bg-black px-4 py-12 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <img src={LOGO} alt="Live Sport" className="h-12 w-auto object-contain" />
          <p className="text-sm font-bold text-white/50">Entrená fuerte. Comprá inteligente.</p>
        </div>
      </footer>
      <MobileNav cartCount={cartCount} onCart={() => setCartOpen(true)} />
      <ProductModal product={selected} onClose={() => setSelected(null)} onAdd={addToCart} />
      <CartDrawer open={cartOpen} cart={cart} onClose={() => setCartOpen(false)} onAdd={addToCart} onRemove={removeFromCart} />
    </div>
  );
}
