// Mock data for LOOPPY prototype
const TIERS = [
  { id: "nuevo", name: "Nuevo", visits: 0, color: "#a0a0b0", desc: "Recién llegado" },
  { id: "frecuente", name: "Frecuente", visits: 5, color: "#60a5fa", desc: "5+ visitas" },
  { id: "premium", name: "Premium", visits: 15, color: "#a78bfa", desc: "15+ visitas" },
  { id: "vip", name: "VIP", visits: 30, color: "#f0b94e", desc: "30+ visitas — beneficios exclusivos" },
];

const CLIENTS = [
  { id: 1, name: "María González", initials: "MG", phone: "+54 11 5532 4421", email: "maria.g@gmail.com", points: 320, visits: 24, tier: "premium", lastVisit: "hace 5 min", joined: "Mar 2024", spent: 48400, hue: 263 },
  { id: 2, name: "Carlos Ramírez", initials: "CR", phone: "+54 11 4128 9092", email: "c.ramirez@hotmail.com", points: 180, visits: 14, tier: "frecuente", lastVisit: "hace 23 min", joined: "Jul 2024", spent: 23200, hue: 200 },
  { id: 3, name: "Ana Martínez", initials: "AM", phone: "+54 11 6678 1199", email: "ana.m@outlook.com", points: 540, visits: 38, tier: "vip", lastVisit: "hace 1 h", joined: "Nov 2023", spent: 92800, hue: 32 },
  { id: 4, name: "Juan Pereira", initials: "JP", phone: "+54 11 3322 8765", email: "juanpereira@gmail.com", points: 90, visits: 7, tier: "frecuente", lastVisit: "hace 2 h", joined: "Sep 2024", spent: 14600, hue: 142 },
  { id: 5, name: "Lucía Fernández", initials: "LF", phone: "+54 11 5544 1010", email: "lucia.f@gmail.com", points: 45, visits: 3, tier: "nuevo", lastVisit: "ayer", joined: "Abr 2025", spent: 4200, hue: 340 },
  { id: 6, name: "Diego Sánchez", initials: "DS", phone: "+54 11 7788 3344", email: "d.sanchez@me.com", points: 220, visits: 18, tier: "premium", lastVisit: "ayer", joined: "Ene 2024", spent: 32100, hue: 280 },
  { id: 7, name: "Sofía López", initials: "SL", phone: "+54 11 2211 5566", email: "sofialopez@gmail.com", points: 410, visits: 29, tier: "premium", lastVisit: "hace 2 días", joined: "Feb 2024", spent: 61300, hue: 174 },
  { id: 8, name: "Tomás Vega", initials: "TV", phone: "+54 11 9988 7766", email: "tom.vega@gmail.com", points: 60, visits: 4, tier: "nuevo", lastVisit: "hace 3 días", joined: "Mar 2025", spent: 6800, hue: 12 },
];

const BENEFITS = [
  { id: 1, name: "Café gratis", desc: "Cualquier especialidad de la barra", points: 80, stock: 50, redeemed: 124, active: true, expires: "31 Dic", emoji: "coffee", color: "#7c5a3a" },
  { id: 2, name: "10% de descuento", desc: "En toda la carta", points: 120, stock: null, redeemed: 89, active: true, expires: null, emoji: "percent", color: "#3a5e7c" },
  { id: 3, name: "Postre de la casa", desc: "A elección con cualquier menú", points: 200, stock: 30, redeemed: 42, active: true, expires: "31 Dic", emoji: "cake-slice", color: "#7c3a5e" },
  { id: 4, name: "2x1 en bebidas", desc: "Lunes a jueves de 17h a 20h", points: 150, stock: null, redeemed: 67, active: true, expires: null, emoji: "wine", color: "#5e3a7c" },
  { id: 5, name: "Corte premium gratis", desc: "Después de 10 visitas", points: 500, stock: 10, redeemed: 8, active: true, expires: null, emoji: "scissors", color: "#3a7c5e" },
  { id: 6, name: "Producto de regalo", desc: "Línea premium a elección", points: 350, stock: 15, redeemed: 23, active: false, expires: "30 Nov", emoji: "gift", color: "#7c4a3a" },
];

const VISITS = [
  { id: 1, clientId: 1, when: "hace 5 min", time: "14:32", points: 10, location: "Sucursal Centro", note: null },
  { id: 2, clientId: 2, when: "hace 23 min", time: "14:14", points: 10, location: "Sucursal Centro", note: null },
  { id: 3, clientId: 3, when: "hace 1 h", time: "13:37", points: 10, location: "Sucursal Palermo", note: "Cumpleaños — bonus" },
  { id: 4, clientId: 4, when: "hace 2 h", time: "12:42", points: 0, location: "Sucursal Centro", note: "Canjeó: Café gratis", redeemed: true },
  { id: 5, clientId: 7, when: "hace 3 h", time: "11:18", points: 10, location: "Sucursal Palermo", note: null },
  { id: 6, clientId: 5, when: "ayer", time: "18:04", points: 10, location: "Sucursal Centro", note: null },
];

const BUSINESSES = [
  { id: 1, name: "Café Mira", category: "Cafetería", area: "Palermo, CABA", points: 320, distance: "0.4 km", icon: "coffee", color: "#7c5a3a", visits: 24, accent: 28 },
  { id: 2, name: "Estudio Norte", category: "Peluquería", area: "Belgrano, CABA", points: 180, distance: "1.2 km", icon: "scissors", color: "#3a5e7c", visits: 14, accent: 210 },
  { id: 3, name: "Forma Gym", category: "Gimnasio", area: "Recoleta, CABA", points: 540, distance: "2.1 km", icon: "dumbbell", color: "#5e3a7c", visits: 38, accent: 270 },
  { id: 4, name: "Pasta Madre", category: "Restaurante", area: "Villa Crespo, CABA", points: 90, distance: "0.8 km", icon: "utensils", color: "#7c3a3a", visits: 7, accent: 0 },
  { id: 5, name: "Verde Mercado", category: "Almacén", area: "Caballito, CABA", points: 45, distance: "1.6 km", icon: "shopping-basket", color: "#3a7c5e", visits: 3, accent: 145 },
  { id: 6, name: "Lila Floristería", category: "Floristería", area: "San Telmo, CABA", points: 75, distance: "3.0 km", icon: "flower", color: "#7c3a5e", visits: 5, accent: 330 },
];

// Chart data
const VISITS_WEEK = [
  { d: "Lun", v: 18, p: 180 },
  { d: "Mar", v: 24, p: 240 },
  { d: "Mié", v: 31, p: 320 },
  { d: "Jue", v: 28, p: 290 },
  { d: "Vie", v: 42, p: 460 },
  { d: "Sáb", v: 56, p: 590 },
  { d: "Dom", v: 38, p: 380 },
];

const TIER_DIST = [
  { name: "Nuevo", value: 38, color: "#a0a0b0" },
  { name: "Frecuente", value: 64, color: "#60a5fa" },
  { name: "Premium", value: 28, color: "#a78bfa" },
  { name: "VIP", value: 12, color: "#f0b94e" },
];

const TOP_REDEEMED = [
  { name: "Café gratis", count: 124, share: 38 },
  { name: "10% de descuento", count: 89, share: 27 },
  { name: "2x1 en bebidas", count: 67, share: 21 },
  { name: "Postre de la casa", count: 42, share: 14 },
];

window.LOOPPY_DATA = { TIERS, CLIENTS, BENEFITS, VISITS, BUSINESSES, VISITS_WEEK, TIER_DIST, TOP_REDEEMED };
