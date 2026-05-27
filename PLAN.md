# LOOPPY — Planificación Completa & Super Prompt de Implementación
> Arquitectura Node.js + PostgreSQL · Versión 1.0 · Mayo 2026

---

## 1. MAPA COMPLETO DE LA APLICACIÓN

### 1.1 Tres capas de usuarios

| Capa | Tipo de usuario | Acceso |
|------|----------------|--------|
| **SuperAdmin** | Equipo interno Looppy | Panel de plataforma completo |
| **Business (Comercio)** | Dueños/empleados del negocio | Dashboard del comercio + Ecommerce |
| **Customer (Cliente final)** | Consumidores finales | App móvil/web del cliente |

### 1.2 Pantallas relevadas (UI ya construida)

#### SuperAdmin (`/super-*`)
- `super-dashboard` — KPIs plataforma, GMV agregado, salud sistema
- `super-merchants` — Lista de comercios, filtros, estados
- `super-plans` — Planes Free/Plus/Pro/Pro+Ecom, MRR
- `super-users` — Usuarios internos del equipo Looppy
- `super-support` — Tickets de soporte
- `super-health` — Estado de servicios, uptime, errores
- `super-logs` — Auditoría de eventos cross-tenant
- `super-config` — Configuración global de la plataforma

#### Business Dashboard (`/biz-*`)
- `biz-dashboard` — KPIs del comercio, visitas hoy, puntos, canjes
- `biz-clients` — Lista de clientes con tiers y filtros
- `biz-client` — Detalle de cliente: historial, puntos, beneficios
- `biz-visit` — Registro de visita (QR + manual)
- `biz-benefits` — CRUD de beneficios/premios
- `biz-rules` — Reglas de puntos y rangos de tiers
- `biz-redeem` — Canje de beneficio en mostrador
- `biz-history` — Historial de visitas y canjes
- `biz-campaigns` ⚠️ — UI hecha en biz-extras.jsx, NO conectada al router
- `biz-branches` ⚠️ — UI hecha en biz-extras.jsx, NO conectada al router
- `biz-team` ⚠️ — UI hecha en biz-extras.jsx, NO conectada al router
- `biz-integrations` ⚠️ — UI hecha en biz-extras.jsx, NO conectada al router
- `biz-plan` ⚠️ — UI hecha en biz-extras.jsx, NO conectada al router

#### Ecommerce Admin (`/ecom-*`)
- `ecom-dashboard` — Ventas, pedidos recientes, GMV
- `ecom-products` — Catálogo con editor de productos
- `ecom-categories` — Árbol de categorías por deporte
- `ecom-variations` — Tallas, colores, atributos
- `ecom-stock` — Gestión de inventario por SKU
- `ecom-orders` — Pedidos con estados y detalle
- `ecom-customers` — Clientes ecom (se cruza con clientes loyalty)
- `ecom-promos` — Cupones y descuentos
- `ecom-payments` — Configuración medios de pago (MercadoPago, transferencia, efectivo)
- `ecom-shipping` — Métodos de envío y costos
- `ecom-themes` — Personalización visual de la tienda
- `ecom-pos` — Sistema de punto de venta (mostrador)
- `ecom-reports` — Reportes de ventas
- `ecom-settings` — Configuración general del ecommerce

#### Customer App (`/customer`)
- `home` — Puntos, negocios favoritos, actividad reciente
- `businesses` — Mapa/lista de comercios afiliados
- `biz` — Detalle de un comercio, sus beneficios
- `benefits` — Mis beneficios disponibles para canjear
- `card` — Tarjeta digital con QR personal
- `profile` — Perfil, historial, configuración

#### Screens públicas
- `portal` — Landing principal de la plataforma (marketing)
- `landing` — Landing del comercio demo
- `login` / `register` — Auth con email+pass o Google/Apple
- `modules` — Catálogo de módulos/extensiones disponibles

---

## 2. GAPS DETECTADOS: QUÉ FALTA

### 2.1 Frontend — Pantallas sin conectar al router (app.jsx)
Las siguientes pantallas tienen UI completa en `biz-extras.jsx` pero NO aparecen en el `switch` de `app.jsx`:
- `biz-campaigns` → `BizCampaigns`
- `biz-branches` → `BizBranches`
- `biz-team` → `BizTeam`
- `biz-integrations` → `BizIntegrations`
- `biz-plan` → `BizPlan`

### 2.2 Backend — Todo el backend es mock
No existe ningún servidor Node.js. Todos los datos son constantes hardcodeadas en `data.jsx` y `ecom-data.jsx`.

### 2.3 Funcionalidades nuevas sugeridas

**SuperAdmin:**
- Módulo de facturación y cobros automáticos (Stripe/MercadoPago)
- Webhooks manager (visualización de eventos entrantes/salientes)
- Feature flags por comercio
- Onboarding wizard para nuevos comercios

**Business Dashboard:**
- Módulo de Reportes dedicado (actualmente solo hay KPIs en dashboard)
- Notificaciones push/email configurables
- Importación/exportación CSV de clientes
- Widget de analytics con comparativa vs. período anterior

**Customer App:**
- Historial detallado de transacciones
- Notificaciones push de beneficios nuevos
- Búsqueda de comercios por geolocalización
- Referidos (invitar amigos)

---

## 3. ARQUITECTURA TÉCNICA

```
Frontend:      React (ya existe) → mantener como SPA
Backend:       Node.js 20 + Express 5
ORM:           Prisma (type-safe, migraciones automáticas)
Base de datos: PostgreSQL 16
Auth:          JWT (access + refresh token) + bcrypt
Cache:         Redis (sesiones, rate limit, queues)
Cola de jobs:  BullMQ (emails, notificaciones, reports)
Storage:       Cloudinary (imágenes de productos)
Pagos:         MercadoPago SDK
Emails:        Resend
WebSockets:    Socket.io (logs en vivo, POS en tiempo real)
```

### Estructura de carpetas del backend

```
looppy-api/
├── src/
│   ├── config/
│   │   ├── db.js              # Conexión PostgreSQL (pool)
│   │   ├── redis.js
│   │   └── env.js
│   ├── middleware/
│   │   ├── auth.js            # JWT verify + roles
│   │   ├── tenant.js          # Extrae merchantId del token
│   │   ├── rateLimit.js
│   │   └── errorHandler.js
│   ├── modules/
│   │   ├── auth/
│   │   ├── merchants/
│   │   ├── clients/
│   │   ├── visits/
│   │   ├── benefits/
│   │   ├── redemptions/
│   │   ├── tiers/
│   │   ├── branches/
│   │   ├── team/
│   │   ├── campaigns/
│   │   ├── plans/
│   │   ├── ecom/
│   │   │   ├── products/
│   │   │   ├── categories/
│   │   │   ├── orders/
│   │   │   ├── stock/
│   │   │   ├── promos/
│   │   │   ├── shipping/
│   │   │   └── payments/
│   │   ├── reports/
│   │   ├── support/
│   │   └── superadmin/
│   ├── jobs/
│   │   ├── emailQueue.js
│   │   └── reportQueue.js
│   ├── utils/
│   │   ├── qrCode.js
│   │   ├── pagination.js
│   │   └── validators.js
│   └── app.js
├── prisma/
│   └── schema.prisma
├── .env.example
└── package.json
```

---

## 4. SCHEMA POSTGRESQL COMPLETO

```sql
-- Extensiones
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "unaccent";

-- ENUMS
CREATE TYPE user_role AS ENUM (
  'super_admin','support_l1','support_l2','commercial','finance',
  'owner','manager','cashier','marketing'
);
CREATE TYPE merchant_status AS ENUM ('trial','active','paused','cancelled');
CREATE TYPE plan_code AS ENUM ('free','plus','pro','pro_ecom');
CREATE TYPE tier_id AS ENUM ('nuevo','frecuente','premium','vip');
CREATE TYPE visit_source AS ENUM ('qr_scan','manual','pos','api');
CREATE TYPE benefit_type AS ENUM ('product','discount_pct','discount_fixed','free_item','experience');
CREATE TYPE redemption_status AS ENUM ('pending','confirmed','expired','cancelled');
CREATE TYPE campaign_type AS ENUM ('points_bonus','happy_hour','birthday','referral','push_notification','email');
CREATE TYPE campaign_status AS ENUM ('draft','active','paused','finished');
CREATE TYPE order_status AS ENUM ('nuevo','pendiente','pagado','preparacion','listo','enviado','entregado','cancelado','reembolsado');
CREATE TYPE payment_method_type AS ENUM ('mercadopago','transfer','cash','card_pos','stripe');
CREATE TYPE shipping_method_type AS ENUM ('local_delivery','pickup','correo_argentino','oca','andreani','custom');
CREATE TYPE product_status AS ENUM ('active','draft','archived');
CREATE TYPE ticket_severity AS ENUM ('low','medium','high','critical');
CREATE TYPE ticket_status AS ENUM ('open','in_progress','resolved','closed');
CREATE TYPE log_level AS ENUM ('debug','info','warn','error');

-- PLATAFORMA — Usuarios internos de Looppy
CREATE TABLE platform_users (
  id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name           VARCHAR(120) NOT NULL,
  email          VARCHAR(255) UNIQUE NOT NULL,
  password_hash  VARCHAR(255) NOT NULL,
  role           user_role NOT NULL DEFAULT 'support_l1',
  avatar_url     TEXT,
  two_fa_secret  TEXT,
  two_fa_enabled BOOLEAN DEFAULT FALSE,
  last_login_at  TIMESTAMPTZ,
  created_at     TIMESTAMPTZ DEFAULT NOW(),
  updated_at     TIMESTAMPTZ DEFAULT NOW()
);

-- PLANES
CREATE TABLE plans (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code            plan_code UNIQUE NOT NULL,
  name            VARCHAR(80) NOT NULL,
  price_monthly   NUMERIC(12,2) NOT NULL DEFAULT 0,
  max_clients     INT,
  max_branches    INT DEFAULT 1,
  has_ecom        BOOLEAN DEFAULT FALSE,
  has_pos         BOOLEAN DEFAULT FALSE,
  has_campaigns   BOOLEAN DEFAULT FALSE,
  has_team        BOOLEAN DEFAULT FALSE,
  has_api         BOOLEAN DEFAULT FALSE,
  features        JSONB DEFAULT '[]',
  is_active       BOOLEAN DEFAULT TRUE,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO plans (code, name, price_monthly, max_clients, max_branches, has_ecom, has_pos, has_campaigns, has_team) VALUES
  ('free',     'Free',         0,   100, 1, false, false, false, false),
  ('plus',     'Plus',     14900,   500, 2, false, true,  false, true),
  ('pro',      'Pro',      24900,  NULL, 5, false, true,  true,  true),
  ('pro_ecom', 'Pro+Ecom', 89000,  NULL, NULL, true, true, true,  true);

-- COMERCIOS
CREATE TABLE merchants (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug            VARCHAR(80) UNIQUE NOT NULL,
  name            VARCHAR(120) NOT NULL,
  description     TEXT,
  category        VARCHAR(80),
  area            VARCHAR(120),
  city            VARCHAR(80),
  province        VARCHAR(80),
  country         VARCHAR(40) DEFAULT 'Argentina',
  phone           VARCHAR(30),
  email           VARCHAR(255),
  website         VARCHAR(255),
  logo_url        TEXT,
  cover_url       TEXT,
  brand_color     VARCHAR(7),
  brand_icon      VARCHAR(40),
  plan_id         UUID REFERENCES plans(id),
  status          merchant_status DEFAULT 'trial',
  trial_ends_at   TIMESTAMPTZ,
  subscription_id VARCHAR(255),
  mrr             NUMERIC(12,2) DEFAULT 0,
  settings        JSONB DEFAULT '{}',
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- USUARIOS DE COMERCIO
CREATE TABLE merchant_users (
  id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id    UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,
  name           VARCHAR(120) NOT NULL,
  email          VARCHAR(255) NOT NULL,
  password_hash  VARCHAR(255) NOT NULL,
  role           user_role NOT NULL DEFAULT 'cashier',
  avatar_url     TEXT,
  branch_ids     UUID[] DEFAULT '{}',
  permissions    JSONB DEFAULT '{}',
  two_fa_enabled BOOLEAN DEFAULT FALSE,
  two_fa_secret  TEXT,
  is_active      BOOLEAN DEFAULT TRUE,
  last_login_at  TIMESTAMPTZ,
  invited_by     UUID REFERENCES merchant_users(id),
  created_at     TIMESTAMPTZ DEFAULT NOW(),
  updated_at     TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(merchant_id, email)
);

-- SUCURSALES
CREATE TABLE branches (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,
  name        VARCHAR(120) NOT NULL,
  address     VARCHAR(255),
  city        VARCHAR(80),
  lat         NUMERIC(10,7),
  lng         NUMERIC(10,7),
  phone       VARCHAR(30),
  hours       VARCHAR(120),
  is_primary  BOOLEAN DEFAULT FALSE,
  is_active   BOOLEAN DEFAULT TRUE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- TIERS
CREATE TABLE tiers (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id       UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,
  tier_key          tier_id NOT NULL,
  name              VARCHAR(60) NOT NULL,
  description       TEXT,
  min_visits        INT DEFAULT 0,
  min_points        INT DEFAULT 0,
  color             VARCHAR(7),
  badge_icon        VARCHAR(40),
  points_multiplier NUMERIC(4,2) DEFAULT 1.00,
  sort_order        INT DEFAULT 0,
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(merchant_id, tier_key)
);

-- REGLAS DE PUNTOS
CREATE TABLE point_rules (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id  UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,
  name         VARCHAR(120),
  trigger_type VARCHAR(40) NOT NULL,
  points       INT NOT NULL DEFAULT 10,
  multiplier   NUMERIC(4,2) DEFAULT 1.00,
  min_amount   NUMERIC(12,2),
  is_active    BOOLEAN DEFAULT TRUE,
  valid_from   DATE,
  valid_until  DATE,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- CLIENTES FINALES
CREATE TABLE clients (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id      UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,
  name             VARCHAR(120) NOT NULL,
  email            VARCHAR(255),
  phone            VARCHAR(30),
  dni              VARCHAR(20),
  birthdate        DATE,
  gender           VARCHAR(20),
  avatar_url       TEXT,
  points           INT DEFAULT 0,
  total_points     INT DEFAULT 0,
  visits           INT DEFAULT 0,
  tier_key         tier_id DEFAULT 'nuevo',
  total_spent      NUMERIC(14,2) DEFAULT 0,
  customer_user_id UUID,
  source           VARCHAR(40) DEFAULT 'manual',
  notes            TEXT,
  tags             TEXT[] DEFAULT '{}',
  is_active        BOOLEAN DEFAULT TRUE,
  joined_at        TIMESTAMPTZ DEFAULT NOW(),
  last_visit_at    TIMESTAMPTZ,
  created_at       TIMESTAMPTZ DEFAULT NOW(),
  updated_at       TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(merchant_id, email),
  UNIQUE(merchant_id, phone)
);

CREATE INDEX idx_clients_merchant ON clients(merchant_id);
CREATE INDEX idx_clients_tier ON clients(merchant_id, tier_key);
CREATE INDEX idx_clients_name ON clients USING gin(name gin_trgm_ops);

-- USUARIOS CLIENTE (app del cliente final)
CREATE TABLE customer_users (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name          VARCHAR(120) NOT NULL,
  email         VARCHAR(255) UNIQUE,
  phone         VARCHAR(30) UNIQUE,
  password_hash VARCHAR(255),
  google_id     VARCHAR(100),
  apple_id      VARCHAR(100),
  avatar_url    TEXT,
  birthdate     DATE,
  qr_code       VARCHAR(100) UNIQUE,
  push_token    TEXT,
  is_active     BOOLEAN DEFAULT TRUE,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- VISITAS
CREATE TABLE visits (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id   UUID NOT NULL REFERENCES merchants(id),
  branch_id     UUID REFERENCES branches(id),
  client_id     UUID NOT NULL REFERENCES clients(id),
  registered_by UUID REFERENCES merchant_users(id),
  source        visit_source DEFAULT 'manual',
  points_earned INT DEFAULT 0,
  notes         TEXT,
  metadata      JSONB DEFAULT '{}',
  visited_at    TIMESTAMPTZ DEFAULT NOW(),
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_visits_merchant_date ON visits(merchant_id, visited_at DESC);
CREATE INDEX idx_visits_client ON visits(client_id);

-- MOVIMIENTOS DE PUNTOS
CREATE TABLE point_transactions (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id   UUID NOT NULL REFERENCES merchants(id),
  client_id     UUID NOT NULL REFERENCES clients(id),
  delta         INT NOT NULL,
  balance_after INT NOT NULL,
  reason        VARCHAR(80),
  ref_id        UUID,
  ref_type      VARCHAR(40),
  note          TEXT,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_pt_client ON point_transactions(client_id);

-- BENEFICIOS
CREATE TABLE benefits (
  id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id    UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,
  name           VARCHAR(120) NOT NULL,
  description    TEXT,
  type           benefit_type DEFAULT 'product',
  points_cost    INT NOT NULL DEFAULT 100,
  stock          INT,
  redeemed_count INT DEFAULT 0,
  image_url      TEXT,
  emoji          VARCHAR(10),
  color          VARCHAR(7),
  is_active      BOOLEAN DEFAULT TRUE,
  valid_from     DATE,
  valid_until    DATE,
  tier_min       tier_id,
  conditions     JSONB DEFAULT '{}',
  sort_order     INT DEFAULT 0,
  created_at     TIMESTAMPTZ DEFAULT NOW(),
  updated_at     TIMESTAMPTZ DEFAULT NOW()
);

-- CANJES
CREATE TABLE redemptions (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id  UUID NOT NULL REFERENCES merchants(id),
  branch_id    UUID REFERENCES branches(id),
  client_id    UUID NOT NULL REFERENCES clients(id),
  benefit_id   UUID NOT NULL REFERENCES benefits(id),
  confirmed_by UUID REFERENCES merchant_users(id),
  points_spent INT NOT NULL,
  status       redemption_status DEFAULT 'confirmed',
  code         VARCHAR(20),
  redeemed_at  TIMESTAMPTZ DEFAULT NOW(),
  expires_at   TIMESTAMPTZ,
  notes        TEXT
);

CREATE INDEX idx_redemptions_client ON redemptions(client_id);

-- CAMPAÑAS
CREATE TABLE campaigns (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id      UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,
  name             VARCHAR(120) NOT NULL,
  description      TEXT,
  type             campaign_type NOT NULL,
  status           campaign_status DEFAULT 'draft',
  target_tiers     tier_id[] DEFAULT '{}',
  target_tags      TEXT[] DEFAULT '{}',
  target_min_visits INT,
  bonus_multiplier NUMERIC(4,2),
  bonus_points     INT,
  message_subject  VARCHAR(200),
  message_body     TEXT,
  starts_at        TIMESTAMPTZ,
  ends_at          TIMESTAMPTZ,
  sent_count       INT DEFAULT 0,
  open_count       INT DEFAULT 0,
  redemption_count INT DEFAULT 0,
  created_by       UUID REFERENCES merchant_users(id),
  created_at       TIMESTAMPTZ DEFAULT NOW(),
  updated_at       TIMESTAMPTZ DEFAULT NOW()
);

-- ECOMMERCE — CATEGORÍAS
CREATE TABLE ecom_categories (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,
  parent_id   UUID REFERENCES ecom_categories(id),
  name        VARCHAR(120) NOT NULL,
  slug        VARCHAR(120) NOT NULL,
  description TEXT,
  image_url   TEXT,
  icon        VARCHAR(40),
  sort_order  INT DEFAULT 0,
  is_active   BOOLEAN DEFAULT TRUE,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(merchant_id, slug)
);

-- ECOMMERCE — ATRIBUTOS
CREATE TABLE ecom_attributes (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,
  name        VARCHAR(60) NOT NULL,
  type        VARCHAR(20) DEFAULT 'select',
  values      JSONB DEFAULT '[]',
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ECOMMERCE — PRODUCTOS
CREATE TABLE ecom_products (
  id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id    UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,
  category_id    UUID REFERENCES ecom_categories(id),
  sku            VARCHAR(60),
  name           VARCHAR(200) NOT NULL,
  description    TEXT,
  brand          VARCHAR(80),
  gender         VARCHAR(20),
  season         VARCHAR(20),
  sport          VARCHAR(40),
  status         product_status DEFAULT 'draft',
  price          NUMERIC(12,2) NOT NULL,
  old_price      NUMERIC(12,2),
  cost_price     NUMERIC(12,2),
  images         JSONB DEFAULT '[]',
  is_featured    BOOLEAN DEFAULT FALSE,
  is_on_sale     BOOLEAN DEFAULT FALSE,
  tags           TEXT[] DEFAULT '{}',
  badge          VARCHAR(40),
  meta_title     VARCHAR(200),
  meta_description TEXT,
  points_per_unit INT DEFAULT 0,
  silhouette     VARCHAR(20),
  total_sold     INT DEFAULT 0,
  total_revenue  NUMERIC(14,2) DEFAULT 0,
  created_at     TIMESTAMPTZ DEFAULT NOW(),
  updated_at     TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_ecom_products_merchant ON ecom_products(merchant_id, status);

-- ECOMMERCE — VARIANTES
CREATE TABLE ecom_variants (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id    UUID NOT NULL REFERENCES ecom_products(id) ON DELETE CASCADE,
  merchant_id   UUID NOT NULL REFERENCES merchants(id),
  sku           VARCHAR(80),
  attributes    JSONB NOT NULL DEFAULT '{}',
  price         NUMERIC(12,2),
  stock         INT DEFAULT 0,
  stock_alert_at INT DEFAULT 3,
  image_url     TEXT,
  is_active     BOOLEAN DEFAULT TRUE,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_variants_product ON ecom_variants(product_id);

-- ECOMMERCE — PEDIDOS
CREATE TABLE ecom_orders (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id      UUID NOT NULL REFERENCES merchants(id),
  branch_id        UUID REFERENCES branches(id),
  client_id        UUID REFERENCES clients(id),
  customer_name    VARCHAR(120) NOT NULL,
  customer_email   VARCHAR(255),
  customer_phone   VARCHAR(30),
  shipping_address JSONB DEFAULT '{}',
  shipping_method  shipping_method_type,
  shipping_cost    NUMERIC(10,2) DEFAULT 0,
  tracking_number  VARCHAR(80),
  payment_method   payment_method_type,
  payment_ref      VARCHAR(255),
  payment_status   VARCHAR(20) DEFAULT 'pending',
  subtotal         NUMERIC(12,2) NOT NULL,
  discount         NUMERIC(12,2) DEFAULT 0,
  coupon_code      VARCHAR(40),
  total            NUMERIC(12,2) NOT NULL,
  status           order_status DEFAULT 'nuevo',
  points_earned    INT DEFAULT 0,
  notes            TEXT,
  internal_notes   TEXT,
  ordered_at       TIMESTAMPTZ DEFAULT NOW(),
  paid_at          TIMESTAMPTZ,
  shipped_at       TIMESTAMPTZ,
  delivered_at     TIMESTAMPTZ,
  created_at       TIMESTAMPTZ DEFAULT NOW(),
  updated_at       TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_orders_merchant_status ON ecom_orders(merchant_id, status);
CREATE INDEX idx_orders_client ON ecom_orders(client_id);

-- ECOMMERCE — ÍTEMS DE PEDIDO
CREATE TABLE ecom_order_items (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id    UUID NOT NULL REFERENCES ecom_orders(id) ON DELETE CASCADE,
  product_id  UUID REFERENCES ecom_products(id),
  variant_id  UUID REFERENCES ecom_variants(id),
  name        VARCHAR(200) NOT NULL,
  sku         VARCHAR(80),
  attributes  JSONB DEFAULT '{}',
  qty         INT NOT NULL DEFAULT 1,
  unit_price  NUMERIC(12,2) NOT NULL,
  total_price NUMERIC(12,2) NOT NULL,
  image_url   TEXT
);

-- ECOMMERCE — CUPONES
CREATE TABLE ecom_coupons (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id      UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,
  code             VARCHAR(40) UNIQUE NOT NULL,
  description      TEXT,
  type             VARCHAR(20) NOT NULL,
  value            NUMERIC(10,2) NOT NULL,
  min_order_amount NUMERIC(12,2),
  max_uses         INT,
  used_count       INT DEFAULT 0,
  per_client_limit INT DEFAULT 1,
  valid_from       TIMESTAMPTZ,
  valid_until      TIMESTAMPTZ,
  is_active        BOOLEAN DEFAULT TRUE,
  created_at       TIMESTAMPTZ DEFAULT NOW()
);

-- MEDIOS DE PAGO
CREATE TABLE payment_configs (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,
  type        payment_method_type NOT NULL,
  name        VARCHAR(80),
  is_active   BOOLEAN DEFAULT TRUE,
  credentials JSONB DEFAULT '{}',
  settings    JSONB DEFAULT '{}',
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(merchant_id, type)
);

-- MÉTODOS DE ENVÍO
CREATE TABLE shipping_configs (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,
  type        shipping_method_type NOT NULL,
  name        VARCHAR(80),
  description TEXT,
  cost        NUMERIC(10,2) DEFAULT 0,
  free_from   NUMERIC(12,2),
  is_active   BOOLEAN DEFAULT TRUE,
  settings    JSONB DEFAULT '{}',
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- TEMAS ECOMMERCE
CREATE TABLE ecom_themes (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id   UUID NOT NULL REFERENCES merchants(id) ON DELETE CASCADE UNIQUE,
  template      VARCHAR(40) DEFAULT 'minimal',
  primary_color VARCHAR(7) DEFAULT '#0a0a0a',
  accent_color  VARCHAR(7),
  font_heading  VARCHAR(60),
  font_body     VARCHAR(60),
  banner_url    TEXT,
  banner_text   TEXT,
  custom_css    TEXT,
  settings      JSONB DEFAULT '{}',
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- SOPORTE — TICKETS
CREATE TABLE support_tickets (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id UUID NOT NULL REFERENCES merchants(id),
  subject     VARCHAR(255) NOT NULL,
  body        TEXT,
  severity    ticket_severity DEFAULT 'medium',
  status      ticket_status DEFAULT 'open',
  agent_id    UUID REFERENCES platform_users(id),
  resolved_at TIMESTAMPTZ,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE support_messages (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  ticket_id   UUID NOT NULL REFERENCES support_tickets(id) ON DELETE CASCADE,
  sender_type VARCHAR(20) NOT NULL,
  sender_id   UUID NOT NULL,
  body        TEXT NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- AUDITORÍA
CREATE TABLE audit_logs (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id UUID REFERENCES merchants(id),
  actor_type  VARCHAR(20),
  actor_id    UUID,
  action      VARCHAR(100) NOT NULL,
  entity_type VARCHAR(60),
  entity_id   UUID,
  payload     JSONB DEFAULT '{}',
  level       log_level DEFAULT 'info',
  ip          INET,
  user_agent  TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_audit_merchant ON audit_logs(merchant_id, created_at DESC);
CREATE INDEX idx_audit_level ON audit_logs(level, created_at DESC);

-- REFRESH TOKENS
CREATE TABLE refresh_tokens (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_type  VARCHAR(20) NOT NULL,
  user_id    UUID NOT NULL,
  token_hash VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  revoked    BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_rt_user ON refresh_tokens(user_id, revoked);

-- NOTIFICACIONES
CREATE TABLE notifications (
  id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  merchant_id    UUID REFERENCES merchants(id),
  recipient_type VARCHAR(20),
  recipient_id   UUID NOT NULL,
  type           VARCHAR(60),
  title          VARCHAR(200),
  body           TEXT,
  is_read        BOOLEAN DEFAULT FALSE,
  data           JSONB DEFAULT '{}',
  created_at     TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_notif_recipient ON notifications(recipient_id, is_read);

-- HEALTH SNAPSHOTS
CREATE TABLE system_health_snapshots (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  api_latency_ms   INT,
  db_latency_ms    INT,
  redis_latency_ms INT,
  error_rate_5m    NUMERIC(6,4),
  active_merchants INT,
  active_sessions  INT,
  snapshot_at      TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 5. API ENDPOINTS COMPLETOS

### Auth
```
POST  /api/auth/login
POST  /api/auth/register
POST  /api/auth/refresh
POST  /api/auth/logout
POST  /api/auth/forgot-password
POST  /api/auth/reset-password
POST  /api/auth/google
GET   /api/auth/me
```

### SuperAdmin (`requirePlatformUser`)
```
GET   /api/super/dashboard
GET   /api/super/dashboard/growth
GET   /api/super/merchants
GET   /api/super/merchants/:id
POST  /api/super/merchants
PUT   /api/super/merchants/:id
PATCH /api/super/merchants/:id/status
GET   /api/super/plans
PUT   /api/super/plans/:id
GET   /api/super/users
POST  /api/super/users
PUT   /api/super/users/:id
GET   /api/super/support/tickets
GET   /api/super/support/tickets/:id
PUT   /api/super/support/tickets/:id
POST  /api/super/support/tickets/:id/messages
GET   /api/super/health
GET   /api/super/logs
```

### Business (`requireMerchantUser` + tenant middleware)
```
GET   /api/biz/dashboard
GET   /api/biz/dashboard/visits-chart
GET   /api/biz/clients                    # search, tier, page, limit
POST  /api/biz/clients
GET   /api/biz/clients/:id
PUT   /api/biz/clients/:id
DELETE /api/biz/clients/:id
GET   /api/biz/clients/:id/points
POST  /api/biz/clients/import             # CSV multipart
GET   /api/biz/clients/export             # CSV download
GET   /api/biz/visits
POST  /api/biz/visits                     # registrar visita (transacción)
GET   /api/biz/visits/today
GET   /api/biz/qr/scan/:qrCode
GET   /api/biz/benefits
POST  /api/biz/benefits
PUT   /api/biz/benefits/:id
PATCH /api/biz/benefits/:id/toggle
DELETE /api/biz/benefits/:id
GET   /api/biz/redemptions
POST  /api/biz/redemptions                # canjear (transacción)
GET   /api/biz/tiers
PUT   /api/biz/tiers/:tierId
GET   /api/biz/rules
POST  /api/biz/rules
PUT   /api/biz/rules/:id
DELETE /api/biz/rules/:id
GET   /api/biz/branches
POST  /api/biz/branches
PUT   /api/biz/branches/:id
DELETE /api/biz/branches/:id
GET   /api/biz/team
POST  /api/biz/team/invite
PUT   /api/biz/team/:id
DELETE /api/biz/team/:id
GET   /api/biz/campaigns
POST  /api/biz/campaigns
PUT   /api/biz/campaigns/:id
PATCH /api/biz/campaigns/:id/launch
PATCH /api/biz/campaigns/:id/pause
GET   /api/biz/campaigns/:id/stats
GET   /api/biz/integrations
POST  /api/biz/integrations/mercadopago
DELETE /api/biz/integrations/:type
GET   /api/biz/plan
POST  /api/biz/plan/upgrade
GET   /api/biz/reports/summary
GET   /api/biz/reports/clients
GET   /api/biz/reports/visits
GET   /api/biz/reports/benefits
GET   /api/biz/history
GET   /api/biz/notifications
PATCH /api/biz/notifications/:id/read
GET   /api/biz/settings
PUT   /api/biz/settings
PUT   /api/biz/settings/branding
```

### Ecommerce (`requireMerchantUser` + `requireEcomPlan`)
```
GET   /api/ecom/dashboard
GET   /api/ecom/products
POST  /api/ecom/products
GET   /api/ecom/products/:id
PUT   /api/ecom/products/:id
DELETE /api/ecom/products/:id
POST  /api/ecom/products/:id/images
GET   /api/ecom/products/:id/variants
POST  /api/ecom/products/:id/variants
PUT   /api/ecom/variants/:id
DELETE /api/ecom/variants/:id
GET   /api/ecom/categories
POST  /api/ecom/categories
PUT   /api/ecom/categories/:id
GET   /api/ecom/stock
PUT   /api/ecom/stock/:variantId
GET   /api/ecom/stock/alerts
GET   /api/ecom/orders
POST  /api/ecom/orders
GET   /api/ecom/orders/:id
PATCH /api/ecom/orders/:id/status
POST  /api/ecom/orders/:id/refund
GET   /api/ecom/customers
GET   /api/ecom/customers/:id
GET   /api/ecom/coupons
POST  /api/ecom/coupons
PUT   /api/ecom/coupons/:id
PATCH /api/ecom/coupons/:id/toggle
POST  /api/ecom/coupons/validate
GET   /api/ecom/payments
POST  /api/ecom/payments
PUT   /api/ecom/payments/:id
GET   /api/ecom/shipping
POST  /api/ecom/shipping
PUT   /api/ecom/shipping/:id
GET   /api/ecom/themes
PUT   /api/ecom/themes
GET   /api/ecom/reports
GET   /api/ecom/settings
PUT   /api/ecom/settings
```

### Storefront público
```
GET   /api/store/:slug
GET   /api/store/:slug/products
GET   /api/store/:slug/products/:id
GET   /api/store/:slug/categories
POST  /api/store/:slug/checkout
GET   /api/store/:slug/orders/:id
```

### App del cliente
```
POST  /api/customer/auth/login
POST  /api/customer/auth/register
POST  /api/customer/auth/google
GET   /api/customer/auth/me
GET   /api/customer/profile
PUT   /api/customer/profile
GET   /api/customer/qr
GET   /api/customer/businesses
GET   /api/customer/businesses/:slug
GET   /api/customer/points
GET   /api/customer/activity
GET   /api/customer/benefits
GET   /api/customer/benefits/:slug
GET   /api/customer/notifications
PATCH /api/customer/notifications/:id/read
GET   /api/customer/orders
GET   /api/customer/orders/:id
```

### Webhooks
```
POST  /api/webhooks/mercadopago
POST  /api/webhooks/mercadopago/subs
```

---

## 6. VARIABLES DE ENTORNO

```env
NODE_ENV=development
PORT=3001
API_URL=http://localhost:3001
FRONTEND_URL=http://localhost:5173
DATABASE_URL=postgresql://looppy:password@localhost:5432/looppy_db
REDIS_URL=redis://localhost:6379
JWT_SECRET=cambia_esto_en_produccion
JWT_ACCESS_EXPIRES=15m
JWT_REFRESH_EXPIRES=30d
MP_ACCESS_TOKEN=APP_USR-xxxxxxxx
MP_PUBLIC_KEY=APP_USR-xxxxxxxx
MP_WEBHOOK_SECRET=xxxxxxxx
RESEND_API_KEY=re_xxxxxxxxx
EMAIL_FROM=noreply@looppy.app
CLOUDINARY_CLOUD_NAME=looppy
CLOUDINARY_API_KEY=xxxxxxxxx
CLOUDINARY_API_SECRET=xxxxxxxxx
GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=xxxxxxxxx
```

---

## 7. FASES DE IMPLEMENTACIÓN

| Fase | Semana | Contenido |
|------|--------|-----------|
| **1 — Fundación** | 1 | Setup Node+PG+Prisma, schema SQL, auth completo (JWT, register, login, refresh), tenant middleware |
| **2 — Core Loyalty** | 2 | CRUD clientes, registro de visitas + puntos (transacción), beneficios + canjes, subida de tier automática |
| **3 — Biz Dashboard** | 3 | KPIs dashboard (SQL aggregations), sucursales, equipo, reglas, campañas + email queue, fix app.jsx |
| **4 — Ecommerce** | 4-5 | Productos+variantes, stock, pedidos (state machine), cupones, pagos, envíos, storefront API |
| **5 — POS + Customer App** | 6 | POS checkout, auth cliente final, tarjeta QR, puntos y beneficios del cliente, WebSockets |
| **6 — SuperAdmin + Pagos SaaS** | 7 | Dashboard super con KPIs reales, MercadoPago suscripciones, webhooks, tickets de soporte |
| **7 — Producción** | 8 | Tests de integración, rate limiting, audit logs, deploy (Railway/Render), monitoreo Sentry |

---

## 8. FIX INMEDIATO AL FRONTEND (CRÍTICO)

En `src/app.jsx`, dentro del bloque `BizShell` del `renderScreen` (después de la línea del `biz-history`), agregar:

```jsx
{screen === "biz-campaigns"    && <BizCampaigns />}
{screen === "biz-branches"     && <BizBranches />}
{screen === "biz-team"         && <BizTeam />}
{screen === "biz-integrations" && <BizIntegrations />}
{screen === "biz-plan"         && <BizPlan />}
```

Estas 5 pantallas están implementadas en `src/biz-extras.jsx` (421 líneas) y exportadas con `Object.assign(window, {...})` pero **nunca son renderizadas** porque no existen en el switch de `app.jsx`. El menú lateral muestra los links (Sucursales, Equipo, Campañas, Mi plan, Integraciones) pero haciendo click no pasa nada.

---

## 9. SUPER PROMPT DE IMPLEMENTACIÓN

> Copiá y pegá este prompt completo al iniciar una sesión de desarrollo para la implementación del backend.

---

```prompt
Voy a construir el backend completo de LOOPPY, una plataforma SaaS multi-tenant de fidelización 
+ ecommerce para comercios argentinos. El frontend ya está construido en React con datos mock 
en src/data.jsx y src/ecom-data.jsx. Necesito el backend con Node.js 20 + Express 5 + 
PostgreSQL 16 usando Prisma como ORM.

═══════════════════════════════════════
CONTEXTO Y ENTIDADES PRINCIPALES
═══════════════════════════════════════

La app tiene 3 tipos de usuarios:
1. Platform Users (super_admin, soporte, comercial) → acceden a /api/super/*
2. Merchant Users (owner, manager, cashier, marketing) → acceden a /api/biz/* y /api/ecom/*
3. Customer Users (clientes finales) → acceden a /api/customer/*

Cada comercio (tenant) está en la tabla "merchants". TODOS los queries del business dashboard 
deben filtrar por merchant_id del JWT. NUNCA mostrar datos de otro tenant.

Entidades core del sistema de fidelización:
- clients: clientes del comercio, con points, visits, tier_key
- visits: cada visita registrada (QR o manual)
- point_transactions: log inmutable de todos los movimientos de puntos
- benefits: premios/descuentos que se pueden canjear con puntos
- redemptions: canjes realizados
- tiers: niveles de fidelización (nuevo→frecuente→premium→vip)
- point_rules: reglas que determinan cuántos puntos da cada acción

Entidades del ecommerce (solo merchants con plan pro_ecom):
- ecom_products con ecom_variants (talla/color/etc.)
- ecom_orders con ecom_order_items
- ecom_coupons
- payment_configs, shipping_configs, ecom_themes

═══════════════════════════════════════
INSTRUCCIONES TÉCNICAS DETALLADAS
═══════════════════════════════════════

PASO 1 — SETUP:
npm init -y && npm install express @prisma/client bcryptjs jsonwebtoken zod cors helmet 
express-rate-limit ioredis bullmq socket.io multer cloudinary mercadopago resend qrcode 
csv-parse csv-stringify date-fns uuid morgan compression dotenv
npm install -D prisma nodemon

Crea src/app.js con:
- cors({ origin: process.env.FRONTEND_URL, credentials: true })
- helmet()
- express.json()
- morgan('combined')
- rateLimit global (100 req/min)
- Todas las rutas bajo /api
- errorHandler como último middleware

PASO 2 — AUTH COMPLETO:
POST /api/auth/login:
  1. Acepta { email, password }
  2. Busca en platform_users primero, luego merchant_users, luego customer_users
  3. bcrypt.compare(password, user.passwordHash)
  4. Si ok: genera accessToken (JWT 15min) con payload { sub, type, merchantId?, role }
  5. Genera refreshToken (crypto.randomBytes(64).toString('hex'))
  6. Guarda hash del refreshToken en refresh_tokens con expires_at = NOW + 30 días
  7. Setea cookie httpOnly 'refresh_token' con el token crudo
  8. Devuelve { ok: true, data: { accessToken, user: { id, name, email, role, merchantId? } } }

POST /api/auth/refresh:
  1. Lee cookie 'refresh_token'
  2. Hashea el token y busca en refresh_tokens donde revoked=false y expires_at > NOW
  3. Si válido: genera nuevo accessToken y rota el refreshToken (revoca el viejo, crea uno nuevo)
  4. Devuelve { ok: true, data: { accessToken } }

POST /api/auth/register (comercios nuevos):
  En una transacción de BD:
  1. Crea merchant con slug=slugify(businessName), status='trial', trial_ends_at=NOW+14días
  2. Crea merchant_user con role='owner', password hasheada
  3. Asigna plan 'free' por defecto
  4. Crea tiers por defecto (nuevo/frecuente/premium/vip) para el merchant
  5. Crea point_rule por defecto: trigger_type='visit', points=10
  6. Devuelve tokens igual que login

PASO 3 — MIDDLEWARES:
auth.js: verifica Bearer token, agrega req.user = { id, type, merchantId, role }
tenant.js: si req.user.type === 'merchant', verifica que merchant existe y status != 'cancelled',
           agrega req.merchantId = req.user.merchantId
authorize(roles[]): si !roles.includes(req.user.role) → 403 Forbidden

PASO 4 — MÓDULO CLIENTES (ruta: /api/biz/clients):
GET / query params: search?, tier?, isActive=true, page=1, limit=20, sort=lastVisit|points|name
  SELECT c.*, 
    (SELECT COUNT(*) FROM visits v WHERE v.client_id = c.id) as visit_count_check,
    (SELECT MAX(visited_at) FROM visits v WHERE v.client_id = c.id) as last_visit
  FROM clients c
  WHERE c.merchant_id = $merchantId
    AND ($search IS NULL OR c.name ILIKE '%'||$search||'%' OR c.phone LIKE '%'||$search||'%')
    AND ($tier IS NULL OR c.tier_key = $tier)
    AND c.is_active = $isActive
  ORDER BY [sort field]
  LIMIT $limit OFFSET ($page-1)*$limit

POST /:
  Valida con Zod: { name: string min 2, email?: email, phone?: string, dni?: string, birthdate?: date }
  Inserta en clients con merchant_id del token
  Registra en audit_logs

GET /:id:
  Devuelve cliente con:
  - últimas 20 visitas
  - últimos 30 movimientos de puntos
  - redemptions activas
  - { nextTier, pointsToNextTier, progressPct }

PASO 5 — REGISTRO DE VISITAS (ruta: POST /api/biz/visits):
Body: { clientId, branchId?, notes?, source?, pointsOverride? }
Ejecutar en transacción PostgreSQL:
  1. Verificar que clientId pertenece al merchant
  2. Obtener point_rules activas del merchant para trigger_type='visit'
  3. Calcular puntos = rule.points * rule.multiplier * tier.points_multiplier
  4. Si pointsOverride: usar ese valor
  5. INSERT INTO visits (merchant_id, branch_id, client_id, registered_by, source, points_earned, notes, visited_at)
  6. UPDATE clients SET points = points + $puntos, total_points = total_points + $puntos, visits = visits + 1, last_visit_at = NOW WHERE id = $clientId
  7. INSERT INTO point_transactions (merchant_id, client_id, delta, balance_after, reason, ref_id, ref_type)
  8. Verificar si el cliente sube de tier:
     SELECT * FROM tiers WHERE merchant_id = $m ORDER BY min_visits ASC
     Encontrar el tier más alto donde client.visits >= tier.min_visits
     Si newTierKey !== client.tier_key: UPDATE clients SET tier_key = newTierKey
  9. COMMIT
  Devolver: { visit, pointsEarned, tierUp: null | { from, to } }

PASO 6 — CANJE DE BENEFICIO (ruta: POST /api/biz/redemptions):
Body: { clientId, benefitId, branchId?, notes? }
Ejecutar en transacción PostgreSQL:
  1. SELECT benefit FOR UPDATE WHERE id = $benefitId AND merchant_id = $m AND is_active = true
  2. Verificar: benefit existe, is_active, stock > 0 (si no es null), valid_until no vencido
  3. SELECT client FOR UPDATE WHERE id = $clientId AND merchant_id = $m
  4. Verificar: client.points >= benefit.points_cost
  5. Verificar: si benefit.tier_min, que client.tier_key sea >= tier_min
  6. INSERT INTO redemptions (merchant_id, branch_id, client_id, benefit_id, confirmed_by, points_spent, status='confirmed', code=random6chars)
  7. UPDATE clients SET points = points - benefit.points_cost WHERE id = $clientId
  8. INSERT INTO point_transactions (delta = -benefit.points_cost, reason='redeem', ref_type='redemption')
  9. UPDATE benefits SET redeemed_count = redeemed_count + 1, stock = CASE WHEN stock IS NOT NULL THEN stock - 1 ELSE NULL END WHERE id = $benefitId
  10. COMMIT
  Devolver: { redemption, client: { id, name, pointsAfter: newBalance } }

PASO 7 — DASHBOARD KPIs (ruta: GET /api/biz/dashboard):
Ejecutar estas 5 queries en paralelo (Promise.all):
  Q1 — Visitas hoy vs ayer:
    SELECT 
      COUNT(*) FILTER (WHERE visited_at >= CURRENT_DATE) as today,
      COUNT(*) FILTER (WHERE visited_at >= CURRENT_DATE - 1 AND visited_at < CURRENT_DATE) as yesterday
    FROM visits WHERE merchant_id = $m AND visited_at >= CURRENT_DATE - 1

  Q2 — Clientes: total + nuevos esta semana:
    SELECT COUNT(*) as total, 
      COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as new_week
    FROM clients WHERE merchant_id = $m AND is_active = true

  Q3 — Puntos entregados esta semana:
    SELECT COALESCE(SUM(delta),0) as points_week
    FROM point_transactions WHERE merchant_id = $m AND delta > 0 AND created_at >= NOW() - INTERVAL '7 days'

  Q4 — Canjes hoy y este mes:
    SELECT 
      COUNT(*) FILTER (WHERE redeemed_at >= CURRENT_DATE) as today,
      COUNT(*) FILTER (WHERE redeemed_at >= DATE_TRUNC('month', NOW())) as this_month
    FROM redemptions WHERE merchant_id = $m AND status = 'confirmed'

  Q5 — Distribución de tiers:
    SELECT tier_key, COUNT(*) as count FROM clients WHERE merchant_id = $m AND is_active = true GROUP BY tier_key

  Q6 — Gráfico 7 días:
    SELECT DATE(visited_at) as day, COUNT(*) as visits
    FROM visits WHERE merchant_id = $m AND visited_at >= NOW() - INTERVAL '7 days'
    GROUP BY day ORDER BY day ASC

  Q7 — Top beneficios canjeados:
    SELECT b.name, COUNT(r.id) as count
    FROM redemptions r JOIN benefits b ON r.benefit_id = b.id
    WHERE r.merchant_id = $m AND r.status = 'confirmed'
    GROUP BY b.id, b.name ORDER BY count DESC LIMIT 5

PASO 8 — QR SCAN (ruta: GET /api/biz/qr/scan/:qrCode):
  1. SELECT * FROM customer_users WHERE qr_code = $qrCode
  2. Si no existe: 404 { error: { code: 'QR_NOT_FOUND' } }
  3. Buscar si ya existe un client en este merchant vinculado a este customer_user_id:
     SELECT * FROM clients WHERE merchant_id = $m AND customer_user_id = $customerUserId
  4. Si no existe: crear client automáticamente (source='qr', datos del customer_user)
  5. Devolver { client } listo para mostrar en el modal de visita

PASO 9 — CAMBIO DE ESTADO DE PEDIDO (PATCH /api/ecom/orders/:id/status):
Body: { status }
Transiciones válidas:
  nuevo → pendiente, pagado, cancelado
  pendiente → pagado, cancelado
  pagado → preparacion, cancelado, reembolsado
  preparacion → listo
  listo → enviado, entregado
  enviado → entregado
  entregado → reembolsado
  cancelado → (ninguno)
  reembolsado → (ninguno)

Al hacer la transición:
  - Si status='pagado': SET paid_at = NOW
  - Si status='enviado': SET shipped_at = NOW
  - Si status='entregado': 
    SET delivered_at = NOW
    Si tiene client_id: sumar points_earned al cliente (si points_earned > 0)
  - Emitir evento WebSocket 'order_status_change' al room del merchant

PASO 10 — SUPERADMIN DASHBOARD (GET /api/super/dashboard):
  Q1 — Merchants activos: SELECT COUNT(*) FROM merchants WHERE status='active'
  Q2 — MRR total: SELECT SUM(p.price_monthly) FROM merchants m JOIN plans p ON m.plan_id = p.id WHERE m.status='active'
  Q3 — GMV 30d: SELECT SUM(total) FROM ecom_orders WHERE created_at >= NOW() - INTERVAL '30 days'
  Q4 — Clientes totales: SELECT COUNT(*) FROM clients
  Q5 — Merchants por plan: SELECT p.name, COUNT(m.id) FROM merchants m JOIN plans p ON m.plan_id=p.id WHERE m.status='active' GROUP BY p.name
  Q6 — Tickets abiertos: SELECT COUNT(*) FROM support_tickets WHERE status IN ('open','in_progress')
  Q7 — Crecimiento: últimos 7 días, nuevos merchants por día

═══════════════════════════════════════
CONVENCIONES ESTRICTAS
═══════════════════════════════════════

RESPUESTAS:
  Éxito:   { ok: true, data: {...} }
  Lista:   { ok: true, data: [...], pagination: { page, limit, total, totalPages } }
  Error:   { ok: false, error: { code: "SNAKE_CASE_CODE", message: "Mensaje en español" } }

HTTP CODES:
  200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 
  403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable, 500 Internal Error

SEGURIDAD:
  - Nunca devolver password_hash ni two_fa_secret
  - Siempre filtrar por merchant_id del token (nunca del body)
  - Toda operación de puntos/canjes/pagos: usar transacción SQL
  - Registrar en audit_logs toda acción importante (con actor_type, actor_id, action, entity_type, entity_id, ip)
  - Rate limit diferenciado: auth 10/min, lecturas 200/min, escrituras 60/min

VALIDACIÓN:
  Usar Zod para todos los body, query params y path params antes de tocar la BD.
  Si falla validación: 422 con { ok: false, error: { code: 'VALIDATION_ERROR', fields: [...] } }

═══════════════════════════════════════
FIX AL FRONTEND (hacer primero)
═══════════════════════════════════════

En src/app.jsx, en el bloque BizShell del renderScreen, agregar después de la línea de biz-history:
  {screen === "biz-campaigns"    && <BizCampaigns />}
  {screen === "biz-branches"     && <BizBranches />}
  {screen === "biz-team"         && <BizTeam />}
  {screen === "biz-integrations" && <BizIntegrations />}
  {screen === "biz-plan"         && <BizPlan />}

Estas pantallas están en biz-extras.jsx pero no en el router → menú lateral roto.

═══════════════════════════════════════
ORDEN DE PRIORIDAD
═══════════════════════════════════════

CRÍTICO (hacer ya):
  1. Auth completo + JWT + refresh tokens
  2. Tenant isolation middleware
  3. CRUD clientes con paginación y búsqueda
  4. POST /visits con transacción de puntos + tier upgrade
  5. POST /redemptions con validación y transacción
  6. GET /dashboard con 7 queries paralelas

IMPORTANTE:
  7. Ecommerce: productos + variantes + stock
  8. Pedidos con state machine + timestamps
  9. Sucursales, equipo, reglas de puntos
  10. Campañas + BullMQ + emails (Resend)

NICE TO HAVE:
  11. SuperAdmin dashboard con KPIs reales
  12. MercadoPago suscripciones
  13. WebSockets (Socket.io) para POS
  14. App del cliente final (QR, puntos)
  15. Notificaciones push (FCM)
  16. Importar/exportar CSV clientes
  17. Reportes en PDF
  18. Health snapshots automáticos cada 5 min
```

---

*Análisis basado en 7.711 líneas de código frontend (20 archivos JSX)*
*Stack: Node.js 20 + Express 5 + PostgreSQL 16 + Prisma + Redis + BullMQ + Socket.io*
