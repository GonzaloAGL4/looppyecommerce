// LIVE SPORTS — ecommerce mock data (synced with storefront)
const LS_LOGO = "https://static.aapp.space/uploads/1779857496_ChatGPT_Image_27_may_2026__01_51_24.png";

// 8 products matching the storefront, expanded with admin fields.
// price = current price (big number); promo = optional discounted price (when set, price acts as line-through).
// For storefront which uses price + oldPrice: storefront reads `price` for current and `oldPrice` for strikethrough.
const LS_PRODUCTS = [
  { id: "p01", name: "Camiseta Basketball Pro Elite", sport: "basket", sportLabel: "Básquet", cat: "Camisetas", type: "Camiseta", price: 48900, oldPrice: 62900, promo: null, stock: 25, status: "active", featured: true, sale: true, sku: "BB-CPE-001", brand: "Live Sports", gender: "Unisex", season: "25/26", tags: ["más vendido"], badge: "Más vendido", desc: "Liviana, respirable y lista para romper la cancha con actitud profesional.", color: "Negro", sizes: ["S", "M", "L", "XL"], silhouette: "tank", image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=900&q=80" },
  { id: "p02", name: "Short Basketball Street", sport: "basket", sportLabel: "Básquet", cat: "Shorts", type: "Short", price: 38900, oldPrice: null, promo: null, stock: 41, status: "active", featured: false, sale: false, sku: "BB-SST-002", brand: "Live Sports", gender: "Hombre", season: "25/26", tags: ["nuevo ingreso"], badge: "Nuevo ingreso", desc: "Corte cómodo, look urbano y rendimiento para todos los días.", color: "Blanco", sizes: ["M", "L", "XL"], silhouette: "short", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80" },
  { id: "p03", name: "Buzo Oversize Basket Culture", sport: "basket", sportLabel: "Básquet", cat: "Buzos", type: "Buzo", price: 76900, oldPrice: 89900, promo: null, stock: 12, status: "active", featured: true, sale: true, sku: "BB-BOC-003", brand: "Live Sports", gender: "Unisex", season: "25/26", tags: ["últimas unidades"], badge: "Últimas unidades", desc: "El buzo que combina cancha, calle y presencia deportiva.", color: "Negro", sizes: ["S", "M", "L"], silhouette: "hoodie", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80" },
  { id: "p04", name: "Musculosa Basketball Shooter", sport: "basket", sportLabel: "Básquet", cat: "Musculosas", type: "Musculosa", price: 32900, oldPrice: null, promo: null, stock: 8, status: "active", featured: false, sale: false, sku: "BB-MBS-004", brand: "Live Sports", gender: "Hombre", season: "25/26", tags: ["edición limitada"], badge: "Edición limitada", desc: "Máxima libertad para entrenar, tirar y competir sin límites.", color: "Blanco", sizes: ["S", "M", "L", "XL"], silhouette: "tank", image: "https://images.unsplash.com/photo-1505666287802-931dc83948e9?auto=format&fit=crop&w=900&q=80" },
  { id: "p05", name: "Remera Training Padel Dry Fit", sport: "padel", sportLabel: "Pádel", cat: "Remeras", type: "Remera", price: 42900, oldPrice: 52900, promo: null, stock: 38, status: "active", featured: true, sale: true, sku: "PD-RTD-005", brand: "Live Sports", gender: "Unisex", season: "25/26", tags: ["oferta"], badge: "Oferta", desc: "Respirable, liviana y lista para partidos intensos de pádel.", color: "Negro", sizes: ["XS", "S", "M", "L"], silhouette: "tee", image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=900&q=80" },
  { id: "p06", name: "Pollera Padel Pro", sport: "padel", sportLabel: "Pádel", cat: "Polleras", type: "Pollera", price: 45900, oldPrice: null, promo: null, stock: 18, status: "active", featured: false, sale: false, sku: "PD-PPP-006", brand: "Live Sports", gender: "Mujer", season: "25/26", tags: ["nuevo"], badge: "Nuevo", desc: "Diseñada para moverte cómoda, rápida y con estilo dentro de la cancha.", color: "Blanco", sizes: ["XS", "S", "M"], silhouette: "skirt", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=900&q=80" },
  { id: "p07", name: "Campera Liviana Court Edition", sport: "padel", sportLabel: "Pádel", cat: "Camperas", type: "Campera", price: 84900, oldPrice: 99900, promo: null, stock: 9, status: "active", featured: true, sale: true, sku: "PD-CLC-007", brand: "Live Sports", gender: "Unisex", season: "25/26", tags: ["premium"], badge: "Premium", desc: "Protección ligera, diseño premium y presencia deportiva total.", color: "Negro", sizes: ["S", "M", "L", "XL"], silhouette: "hoodie", image: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed?auto=format&fit=crop&w=900&q=80" },
  { id: "p08", name: "Zapatillas Indoor Court", sport: "padel", sportLabel: "Pádel", cat: "Zapatillas", type: "Calzado", price: 119900, oldPrice: 139900, promo: null, stock: 6, status: "active", featured: true, sale: true, sku: "PD-ZIC-008", brand: "Live Sports", gender: "Unisex", season: "25/26", tags: ["stock limitado"], badge: "Stock limitado", desc: "Agarre, estabilidad y comodidad para jugar con ventaja.", color: "Blanco", sizes: ["39", "40", "41", "42", "43"], silhouette: "shoe", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80" },
];

// Backward-compat for admin code that reads p.promo: derive virtual promo so price stays the displayed amount.
// In storefront we read price + oldPrice directly. In admin we keep using promo || price (so we set promo = price and treat oldPrice as the price line).
// Cleaner: admin will treat oldPrice as full price and price as the current/promo price.
LS_PRODUCTS.forEach(p => {
  if (p.oldPrice) {
    // sale: store full price separately for admin tables; keep current as promo so existing admin code shows the right number
    p._fullPrice = p.oldPrice;
    p.promo = p.price; // existing admin code: p.promo || p.price → p.price (current). Display old price as strike.
    p.price = p.oldPrice;
  }
});

const LS_CATS = [
  { sport: "basket", label: "Básquet", icon: "circle-dot", subs: ["Camisetas", "Shorts", "Buzos", "Musculosas", "Medias", "Accesorios", "Zapatillas"] },
  { sport: "padel", label: "Pádel", icon: "circle", subs: ["Remeras", "Shorts", "Polleras", "Calzas", "Camperas", "Accesorios", "Paletas y complementos"] },
];

const LS_ORDERS = [
  { id: "#LS-2841", client: "Federico Romero", date: "Hoy 14:22", total: 119900, items: 1, pay: "Mercado Pago", ship: "Envío local Mendoza", status: "nuevo", products: [{ pid: "p08", qty: 1, size: "42", color: "Blanco" }] },
  { id: "#LS-2840", client: "Camila Suárez", date: "Hoy 13:58", total: 91800, items: 2, pay: "Mercado Pago", ship: "Retiro en tienda", status: "pagado", products: [{ pid: "p06", qty: 1, size: "M", color: "Blanco" }, { pid: "p02", qty: 1, size: "M", color: "Blanco" }] },
  { id: "#LS-2839", client: "Mauricio Ibarra", date: "Hoy 12:10", total: 84900, items: 1, pay: "Transferencia", ship: "Correo Argentino", status: "preparacion", products: [{ pid: "p07", qty: 1, size: "L", color: "Negro" }] },
  { id: "#LS-2838", client: "Lucas Vázquez", date: "Hoy 11:34", total: 71800, items: 2, pay: "Tarjeta crédito", ship: "Envío local Mendoza", status: "listo", products: [{ pid: "p02", qty: 1, size: "L", color: "Blanco" }, { pid: "p04", qty: 1, size: "M", color: "Blanco" }] },
  { id: "#LS-2837", client: "Sofía Aguirre", date: "Ayer 19:42", total: 76900, items: 1, pay: "Mercado Pago", ship: "Correo Argentino", status: "enviado", products: [{ pid: "p03", qty: 1, size: "L", color: "Negro" }] },
  { id: "#LS-2836", client: "Bruno Pizarro", date: "Ayer 16:08", total: 38900, items: 1, pay: "Efectivo (POS)", ship: "Retiro en tienda", status: "entregado", products: [{ pid: "p02", qty: 1, size: "M", color: "Blanco" }] },
  { id: "#LS-2835", client: "Valentina Roca", date: "Ayer 14:25", total: 45900, items: 1, pay: "Mercado Pago", ship: "Envío local Mendoza", status: "entregado", products: [{ pid: "p06", qty: 1, size: "S", color: "Blanco" }] },
  { id: "#LS-2834", client: "Hernán Díaz", date: "26 May", total: 119900, items: 1, pay: "Tarjeta crédito", ship: "Correo Argentino", status: "cancelado", products: [{ pid: "p08", qty: 1, size: "41", color: "Blanco" }] },
];

const LS_CUSTOMERS = [
  { name: "Federico Romero", email: "fede.romero@gmail.com", phone: "+54 261 522 4488", orders: 8, spent: 412000, last: "Hoy", points: 824, tier: "vip", fav: "Zapatillas Indoor Court" },
  { name: "Camila Suárez", email: "camis@gmail.com", phone: "+54 261 645 0099", orders: 5, spent: 188400, last: "Hoy", points: 376, tier: "premium", fav: "Pollera Padel Pro" },
  { name: "Mauricio Ibarra", email: "m.ibarra@me.com", phone: "+54 261 332 8765", orders: 12, spent: 624000, last: "Hoy", points: 1248, tier: "vip", fav: "Campera Liviana Court Edition" },
  { name: "Lucas Vázquez", email: "lvazquez@gmail.com", phone: "+54 261 554 1010", orders: 3, spent: 84600, last: "Hoy", points: 169, tier: "frecuente", fav: "Camiseta Basketball Pro Elite" },
  { name: "Sofía Aguirre", email: "sofiagu@outlook.com", phone: "+54 261 778 3344", orders: 6, spent: 246800, last: "Ayer", points: 493, tier: "premium", fav: "Buzo Oversize Basket Culture" },
  { name: "Bruno Pizarro", email: "b.pizarro@gmail.com", phone: "+54 261 988 7766", orders: 2, spent: 38900, last: "Ayer", points: 77, tier: "frecuente", fav: "Short Basketball Street" },
];

const LS_SIZES_APPAREL = ["XS", "S", "M", "L", "XL", "XXL"];
const LS_SIZES_SHOES = ["38", "39", "40", "41", "42", "43", "44", "45"];

const LS_SALES_WEEK = [
  { d: "Lun", v: 184 },
  { d: "Mar", v: 220 },
  { d: "Mié", v: 312 },
  { d: "Jue", v: 268 },
  { d: "Vie", v: 410 },
  { d: "Sáb", v: 588 },
  { d: "Dom", v: 442 },
];

const LS_SPORT_SPLIT = [
  { name: "Básquet", value: 58, color: "#0a0a0a" },
  { name: "Pádel", value: 42, color: "#bdbdbd" },
];

const LS_TOP_PRODUCTS = [
  { id: "p01", name: "Camiseta Basketball Pro Elite", sold: 84, revenue: 3268000 },
  { id: "p08", name: "Zapatillas Indoor Court", sold: 41, revenue: 4915000 },
  { id: "p07", name: "Campera Liviana Court Edition", sold: 28, revenue: 2377000 },
  { id: "p03", name: "Buzo Oversize Basket Culture", sold: 36, revenue: 2768000 },
  { id: "p05", name: "Remera Training Padel Dry Fit", sold: 31, revenue: 1329000 },
];

const LS_ORDER_STATUS = {
  nuevo: { label: "Nuevo", color: "#0a0a0a", bg: "#e8e8e8" },
  pendiente: { label: "Pendiente de pago", color: "#7a5a00", bg: "#fff3cd" },
  pagado: { label: "Pagado", color: "#0d5e2a", bg: "#d6f5e1" },
  preparacion: { label: "En preparación", color: "#1e3a8a", bg: "#dbe7ff" },
  listo: { label: "Listo para retirar", color: "#6b21a8", bg: "#ece1f6" },
  enviado: { label: "Enviado", color: "#075985", bg: "#d4ecf7" },
  entregado: { label: "Entregado", color: "#14532d", bg: "#c8f0d4" },
  cancelado: { label: "Cancelado", color: "#991b1b", bg: "#fde0e0" },
  reembolsado: { label: "Reembolsado", color: "#6b7280", bg: "#e5e5e5" },
};

window.LS_DATA = { LS_PRODUCTS, LS_CATS, LS_ORDERS, LS_CUSTOMERS, LS_SIZES_APPAREL, LS_SIZES_SHOES, LS_SALES_WEEK, LS_SPORT_SPLIT, LS_TOP_PRODUCTS, LS_ORDER_STATUS, LS_LOGO };
