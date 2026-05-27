// Business app — visit registration, benefits, rules, redeem, history
function VisitModal({ open, onClose, onConfirm }) {
  const D = window.LOOPPY_DATA;
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(D.CLIENTS[0]);
  const [points, setPoints] = useState(10);
  const [note, setNote] = useState("");
  const [location, setLocation] = useState("Sucursal Centro");
  const filtered = D.CLIENTS.filter(c => !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.phone.includes(search));
  return (
    <Modal open={open} onClose={onClose} title="Registrar visita" subtitle="Sumá puntos en menos de 5 segundos" width={620}
      footer={<>
        <Button variant="ghost" onClick={onClose}>Cancelar</Button>
        <Button variant="primary" icon="check" onClick={() => onConfirm(selected, points)}>Confirmar visita</Button>
      </>}>
      <div style={{ display: "grid", gap: 18 }}>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6, display: "block" }}>Cliente</label>
          <Input icon="search" placeholder="Buscar por nombre, teléfono o DNI…" value={search} onChange={(e) => setSearch(e.target.value)} />
          <div style={{ marginTop: 8, maxHeight: 180, overflow: "auto", display: "grid", gap: 4, background: "var(--surface-2)", borderRadius: 12, padding: 6, border: "1px solid var(--line)" }}>
            {filtered.slice(0, 6).map(c => (
              <div key={c.id} onClick={() => setSelected(c)}
                style={{
                  padding: 10, borderRadius: 9, display: "flex", alignItems: "center", gap: 10, cursor: "pointer",
                  background: selected?.id === c.id ? "var(--accent-soft)" : "transparent",
                }}>
                <Avatar name={c.name} hue={c.hue} size={32} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: "var(--text-dim)" }}>{c.phone} · {c.points} pts</div>
                </div>
                <TierBadge tier={c.tier} />
                {selected?.id === c.id && <Icon name="check-circle-2" size={18} style={{ color: "var(--accent)" }} />}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6, display: "block" }}>Sucursal</label>
            <select className="select" value={location} onChange={(e) => setLocation(e.target.value)}>
              <option>Sucursal Centro</option>
              <option>Sucursal Palermo</option>
              <option>Sucursal Belgrano</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6, display: "block" }}>Puntos a sumar</label>
            <div style={{ display: "flex", gap: 6 }}>
              {[5, 10, 20, 50].map(p => (
                <button key={p} onClick={() => setPoints(p)} style={{
                  flex: 1, padding: "11px 0", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer",
                  background: points === p ? "var(--accent-soft)" : "var(--surface-2)",
                  color: points === p ? "var(--accent)" : "var(--text-muted)",
                  border: `1px solid ${points === p ? "var(--accent)" : "var(--line)"}`,
                }}>+{p}</button>
              ))}
            </div>
          </div>
        </div>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6, display: "block" }}>Observación (opcional)</label>
          <textarea className="textarea" rows={2} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Ej: cumpleaños, primera visita, mesa 5…" />
        </div>
        {selected && (
          <div style={{ background: "var(--surface-2)", padding: 14, borderRadius: 12, border: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 14 }}>
            <Icon name="info" size={16} style={{ color: "var(--accent)" }} />
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
              <strong style={{ color: "var(--text)" }}>{selected.name}</strong> tendrá <strong style={{ color: "var(--accent)" }}>{selected.points + points} puntos</strong> después de esta visita.
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}

function BizVisit({ openVisit }) {
  return (
    <>
      <BizTopBar title="Registrar visita" subtitle="Pensado para usar en mostrador. Rápido y sin errores."
        actions={<Button variant="primary" icon="qr-code" onClick={openVisit}>Escanear QR</Button>}
      />
      <div style={{ padding: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <Card style={{ padding: 32, textAlign: "center", background: "linear-gradient(160deg, var(--accent-soft), var(--surface))", borderColor: "var(--accent)" }}>
          <div style={{ width: 220, height: 220, margin: "0 auto 24px", background: "white", borderRadius: 24, padding: 16, position: "relative" }}>
            <QRPattern />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ background: "white", padding: 8, borderRadius: 10 }}>
                <Logo size={40} />
              </div>
            </div>
          </div>
          <h3 className="font-display" style={{ fontSize: 28, fontWeight: 600, margin: "0 0 8px", letterSpacing: "-0.025em" }}>Escaneá el QR del cliente</h3>
          <p style={{ color: "var(--text-muted)", fontSize: 14, margin: "0 0 24px" }}>El cliente abre su tarjeta digital en LOOPPY y la apoya frente a la cámara. La visita se registra sola.</p>
          <Button variant="primary" size="lg" icon="scan-line" onClick={openVisit} style={{ margin: "0 auto" }}>Activar cámara</Button>
        </Card>
        <Card style={{ padding: 32 }}>
          <h3 className="font-display" style={{ fontSize: 24, fontWeight: 600, margin: "0 0 8px", letterSpacing: "-0.025em" }}>O cargá manualmente</h3>
          <p style={{ color: "var(--text-muted)", fontSize: 14, margin: "0 0 20px" }}>Buscá al cliente y registrá la visita en 2 toques.</p>
          <Button variant="ghost" size="lg" icon="search" onClick={openVisit} style={{ width: "100%", justifyContent: "flex-start" }}>Buscar cliente…</Button>
          <div style={{ height: 1, background: "var(--line)", margin: "24px 0" }} />
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-muted)", marginBottom: 12 }}>Atajos del mostrador</div>
          <div style={{ display: "grid", gap: 8 }}>
            <ShortcutRow icon="user-plus" label="Cliente nuevo (registrar y sumar visita)" kbd="N" />
            <ShortcutRow icon="qr-code" label="Activar escáner QR" kbd="Q" />
            <ShortcutRow icon="ticket" label="Canjear beneficio" kbd="C" />
            <ShortcutRow icon="search" label="Buscar cliente" kbd="/" />
          </div>
        </Card>
      </div>
    </>
  );
}

function ShortcutRow({ icon, label, kbd }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", background: "var(--surface-2)", borderRadius: 10, border: "1px solid var(--line)" }}>
      <Icon name={icon} size={16} style={{ color: "var(--text-muted)" }} />
      <span style={{ fontSize: 13, flex: 1 }}>{label}</span>
      <span className="kbd">{kbd}</span>
    </div>
  );
}

function QRPattern() {
  // simple pseudo-QR
  const cells = [];
  const size = 17;
  const seed = "loopy-qr-" + 7;
  let s = 1234567;
  for (let i = 0; i < size * size; i++) {
    s = (s * 9301 + 49297) % 233280;
    cells.push((s / 233280) > 0.5);
  }
  // corner finders
  const corner = (cx, cy) => Array.from({ length: size }, (_, i) => Array.from({ length: size }, (_, j) => {
    const dx = Math.abs(i - cx), dy = Math.abs(j - cy);
    if (dx <= 3 && dy <= 3) return (dx === 3 || dy === 3 || (dx <= 1 && dy <= 1));
    return null;
  }));
  return (
    <svg viewBox={`0 0 ${size} ${size}`} style={{ width: "100%", height: "100%" }}>
      {cells.map((v, idx) => {
        const x = idx % size, y = Math.floor(idx / size);
        const isCorner = (x < 7 && y < 7) || (x >= size-7 && y < 7) || (x < 7 && y >= size-7);
        if (isCorner) return null;
        if (!v) return null;
        return <rect key={idx} x={x} y={y} width="1" height="1" fill="#000" />;
      })}
      {[[0,0],[size-7,0],[0,size-7]].map(([cx, cy], i) => (
        <g key={i}>
          <rect x={cx} y={cy} width="7" height="7" fill="#000" />
          <rect x={cx+1} y={cy+1} width="5" height="5" fill="#fff" />
          <rect x={cx+2} y={cy+2} width="3" height="3" fill="#000" />
        </g>
      ))}
    </svg>
  );
}

function BizBenefits() {
  const D = window.LOOPPY_DATA;
  const [view, setView] = useState("grid");
  return (
    <>
      <BizTopBar title="Beneficios y premios" subtitle="Lo que tus clientes pueden canjear con sus puntos"
        actions={<Button variant="primary" icon="plus">Nuevo beneficio</Button>}
      />
      <div style={{ padding: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div style={{ display: "flex", gap: 6 }}>
            <span className="chip chip-active">Todos ({D.BENEFITS.length})</span>
            <span className="chip">Activos ({D.BENEFITS.filter(b => b.active).length})</span>
            <span className="chip">Pausados ({D.BENEFITS.filter(b => !b.active).length})</span>
            <span className="chip">Por vencer (2)</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <IconButton icon="layout-grid" variant={view === "grid" ? "soft" : "ghost"} onClick={() => setView("grid")} />
            <IconButton icon="list" variant={view === "list" ? "soft" : "ghost"} onClick={() => setView("list")} />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {D.BENEFITS.map(b => (
            <Card key={b.id} style={{ padding: 0, overflow: "hidden", opacity: b.active ? 1 : 0.6 }}>
              <div style={{ height: 140, background: `linear-gradient(135deg, ${b.color}, hsl(${b.color === "#7c5a3a" ? 32 : 240} 30% 18%))`, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={b.emoji} size={56} style={{ color: "white", opacity: 0.9 }} />
                <div style={{ position: "absolute", top: 12, right: 12 }}>
                  {b.active ? <Badge tone="success" dot>Activo</Badge> : <Badge tone="neutral" dot>Pausado</Badge>}
                </div>
              </div>
              <div style={{ padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 600 }}>{b.name}</div>
                    <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>{b.desc}</div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--line)" }}>
                  <div>
                    <div className="font-display" style={{ fontSize: 22, fontWeight: 600, color: "var(--accent)", letterSpacing: "-0.03em" }}>{b.points} pts</div>
                    <div style={{ fontSize: 11, color: "var(--text-dim)" }}>
                      {b.stock !== null ? `Stock: ${b.stock - b.redeemed} / ${b.stock}` : "Sin límite"} · {b.redeemed} canjes
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <IconButton icon="edit-2" />
                    <IconButton icon={b.active ? "pause" : "play"} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
          <Card style={{ padding: 32, border: "1.5px dashed var(--line-strong)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", cursor: "pointer", minHeight: 320 }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: "var(--accent-soft)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
              <Icon name="plus" size={24} />
            </div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>Agregar beneficio</div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6 }}>Café gratis, descuento, regalo, 2x1…</div>
          </Card>
        </div>
      </div>
    </>
  );
}

function BizRules() {
  const D = window.LOOPPY_DATA;
  return (
    <>
      <BizTopBar title="Reglas y rangos" subtitle="Cómo se ganan los puntos y cómo suben de nivel los clientes"
        actions={<Button variant="primary" icon="save">Guardar cambios</Button>}
      />
      <div style={{ padding: 32, display: "grid", gridTemplateColumns: "1fr 360px", gap: 20 }}>
        <div style={{ display: "grid", gap: 20 }}>
          <Card style={{ padding: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ width: 38, height: 38, borderRadius: 10, background: "var(--accent-soft)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="sparkles" size={18} /></span>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>Cómo se ganan puntos</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Acciones del cliente que suman al saldo</div>
              </div>
            </div>
            <div style={{ display: "grid", gap: 12 }}>
              {[
                { l: "Por cada visita", v: "10", suf: "puntos", on: true },
                { l: "Por cada $1.000 gastados", v: "5", suf: "puntos", on: true },
                { l: "En el cumpleaños", v: "100", suf: "puntos extra", on: true },
                { l: "Por traer un amigo nuevo", v: "50", suf: "puntos", on: true },
                { l: "Por reseña en Google", v: "30", suf: "puntos", on: false },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: 14, background: "var(--surface-2)", borderRadius: 12, border: "1px solid var(--line)" }}>
                  <span style={{ flex: 1, fontSize: 14 }}>{r.l}</span>
                  <input className="input" value={r.v} style={{ width: 70, textAlign: "center", padding: "8px 10px" }} readOnly />
                  <span style={{ fontSize: 13, color: "var(--text-muted)", width: 100 }}>{r.suf}</span>
                  <Toggle on={r.on} />
                </div>
              ))}
            </div>
          </Card>
          <Card style={{ padding: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(240,185,78,0.14)", color: "#f0b94e", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="crown" size={18} /></span>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>Niveles de cliente</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Suben automáticamente al alcanzar las visitas</div>
              </div>
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {D.TIERS.map((t, i) => (
                <div key={t.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: 16, background: "var(--surface-2)", borderRadius: 12, border: `1px solid var(--line)`, position: "relative", overflow: "hidden" }}>
                  <span style={{ width: 48, height: 48, borderRadius: 12, background: `${t.color}26`, color: t.color, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${t.color}40` }}>
                    <Icon name={t.id === "vip" ? "crown" : t.id === "premium" ? "sparkle" : t.id === "frecuente" ? "user-check" : "circle"} size={20} />
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 15, fontWeight: 600, color: t.color }}>{t.name}</span>
                      <span style={{ fontSize: 12, color: "var(--text-dim)" }}>{t.desc}</span>
                    </div>
                    <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>
                      {t.id === "nuevo" && "Multiplicador: 1× — Beneficios estándar"}
                      {t.id === "frecuente" && "Multiplicador: 1.2× — Acceso anticipado a promos"}
                      {t.id === "premium" && "Multiplicador: 1.5× — Premio mensual exclusivo"}
                      {t.id === "vip" && "Multiplicador: 2× — Atención prioritaria + premios mensuales"}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div className="font-display" style={{ fontSize: 22, fontWeight: 600, color: t.color }}>{t.visits}+</div>
                    <div style={{ fontSize: 11, color: "var(--text-dim)" }}>visitas</div>
                  </div>
                  <IconButton icon="edit-2" />
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div style={{ display: "grid", gap: 20, alignContent: "start" }}>
          <Card style={{ padding: 24 }}>
            <Icon name="clock" size={20} style={{ color: "var(--text-muted)", marginBottom: 12 }} />
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>Vencimiento de puntos</div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>Los puntos vencen si el cliente no visita.</div>
            <select className="select"><option>12 meses sin actividad</option><option>6 meses sin actividad</option><option>No vencen nunca</option></select>
          </Card>
          <Card style={{ padding: 24 }}>
            <Icon name="cake" size={20} style={{ color: "var(--text-muted)", marginBottom: 12 }} />
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>Cumpleaños</div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>Mensaje + bonus automático el día del cumple.</div>
            <Button variant="ghost" size="sm" icon="settings" style={{ width: "100%", justifyContent: "center" }}>Configurar mensaje</Button>
          </Card>
          <Card style={{ padding: 24, background: "linear-gradient(160deg, var(--accent-soft), var(--surface))" }}>
            <Icon name="lightbulb" size={20} style={{ color: "var(--accent)", marginBottom: 12 }} />
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>Recomendación de LOOPPY</div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>Tus clientes Premium gastan 2.4× más. Considerá subir el premio mensual para mantenerlos enganchados.</div>
          </Card>
        </div>
      </div>
    </>
  );
}

function Toggle({ on, onChange }) {
  const [v, setV] = useState(on);
  return (
    <div onClick={() => { setV(!v); onChange?.(!v); }}
      style={{
        width: 38, height: 22, borderRadius: 999, padding: 2, cursor: "pointer",
        background: v ? "var(--accent)" : "var(--surface-3)", transition: "all .15s",
      }}>
      <div style={{ width: 18, height: 18, borderRadius: 999, background: "white", transform: v ? "translateX(16px)" : "none", transition: "transform .15s" }} />
    </div>
  );
}

function BizRedeem({ onConfirm }) {
  const D = window.LOOPPY_DATA;
  const [client, setClient] = useState(D.CLIENTS[2]);
  const [search, setSearch] = useState("");
  const filtered = D.CLIENTS.filter(c => !search || c.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
      <BizTopBar title="Canjear beneficio" subtitle="Buscá al cliente y elegí el premio" />
      <div style={{ padding: 32, display: "grid", gridTemplateColumns: "380px 1fr", gap: 20 }}>
        <Card style={{ padding: 24, alignSelf: "start" }}>
          <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Cliente</div>
          <Input icon="search" placeholder="Buscar cliente…" value={search} onChange={(e) => setSearch(e.target.value)} />
          <div style={{ display: "grid", gap: 4, marginTop: 10, maxHeight: 300, overflow: "auto" }}>
            {filtered.slice(0, 5).map(c => (
              <div key={c.id} onClick={() => setClient(c)}
                style={{
                  padding: 10, borderRadius: 10, display: "flex", alignItems: "center", gap: 10, cursor: "pointer",
                  background: client?.id === c.id ? "var(--accent-soft)" : "transparent",
                }}>
                <Avatar name={c.name} hue={c.hue} size={32} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: "var(--text-dim)" }}>{c.points} pts disponibles</div>
                </div>
                {client?.id === c.id && <Icon name="check-circle-2" size={16} style={{ color: "var(--accent)" }} />}
              </div>
            ))}
          </div>
          {client && (
            <div style={{ marginTop: 18, padding: 18, background: "linear-gradient(160deg, var(--accent-soft), transparent)", borderRadius: 14, border: "1px solid var(--line)", textAlign: "center" }}>
              <Avatar name={client.name} hue={client.hue} size={48} />
              <div style={{ fontWeight: 600, marginTop: 10 }}>{client.name}</div>
              <TierBadge tier={client.tier} />
              <div className="font-display" style={{ fontSize: 44, fontWeight: 600, color: "var(--accent)", letterSpacing: "-0.04em", marginTop: 8 }}>{client.points}</div>
              <div style={{ fontSize: 12, color: "var(--text-dim)" }}>puntos disponibles</div>
            </div>
          )}
        </Card>
        <Card style={{ padding: 24 }}>
          <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Beneficios disponibles</div>
          <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 18 }}>El sistema valida si el cliente tiene puntos suficientes.</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
            {D.BENEFITS.filter(b => b.active).map(b => {
              const enough = client && client.points >= b.points;
              return (
                <div key={b.id} style={{
                  padding: 16, borderRadius: 14, border: `1px solid ${enough ? "var(--line)" : "var(--line)"}`,
                  background: "var(--surface-2)", opacity: enough ? 1 : 0.5,
                  display: "flex", gap: 14,
                }}>
                  <div style={{ width: 64, height: 64, borderRadius: 12, background: `linear-gradient(135deg, ${b.color}, #1a1a22)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={b.emoji} size={28} style={{ color: "white" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{b.name}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", margin: "4px 0 10px" }}>{b.desc}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontWeight: 700, color: "var(--accent)", fontSize: 14 }}>{b.points} pts</span>
                      <Button variant={enough ? "primary" : "ghost"} size="sm" disabled={!enough}
                        onClick={() => enough && onConfirm(client, b)}>
                        {enough ? "Canjear" : `Faltan ${b.points - (client?.points || 0)}`}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </>
  );
}

function BizHistory() {
  const D = window.LOOPPY_DATA;
  const [tab, setTab] = useState("visits");
  return (
    <>
      <BizTopBar title="Historial" subtitle="Todo lo que pasó en tu programa de fidelización"
        actions={<><Button variant="ghost" icon="download">Exportar</Button><Button variant="ghost" icon="filter">Filtros</Button></>}
      />
      <div style={{ padding: 32 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          <span className={`chip ${tab === "visits" ? "chip-active" : ""}`} onClick={() => setTab("visits")} style={{ cursor: "pointer" }}>Visitas (237)</span>
          <span className={`chip ${tab === "redeems" ? "chip-active" : ""}`} onClick={() => setTab("redeems")} style={{ cursor: "pointer" }}>Canjes (89)</span>
          <span className={`chip ${tab === "points" ? "chip-active" : ""}`} onClick={() => setTab("points")} style={{ cursor: "pointer" }}>Movimientos de puntos</span>
        </div>
        <Card style={{ padding: 0 }}>
          {tab === "visits" && (
            <table className="tbl">
              <thead><tr><th>Cliente</th><th>Fecha y hora</th><th>Sucursal</th><th>Puntos</th><th>Observación</th><th></th></tr></thead>
              <tbody>
                {[...D.VISITS, ...D.VISITS].slice(0, 12).map((v, i) => {
                  const c = D.CLIENTS.find(c => c.id === v.clientId) || D.CLIENTS[0];
                  return (
                    <tr key={i} className="hov">
                      <td><div style={{ display: "flex", alignItems: "center", gap: 12 }}><Avatar name={c.name} hue={c.hue} size={32} /><span style={{ fontWeight: 500 }}>{c.name}</span></div></td>
                      <td><div style={{ fontSize: 13 }}>{v.when}</div><div style={{ fontSize: 12, color: "var(--text-dim)" }}>{v.time}</div></td>
                      <td>{v.location}</td>
                      <td>{v.redeemed ? <Badge tone="warning" icon="gift">Canje</Badge> : <Badge tone="accent">+{v.points} pts</Badge>}</td>
                      <td style={{ color: "var(--text-muted)", fontSize: 13 }}>{v.note || "—"}</td>
                      <td><IconButton icon="more-horizontal" /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
          {tab === "redeems" && (
            <table className="tbl">
              <thead><tr><th>Cliente</th><th>Beneficio</th><th>Costo</th><th>Fecha</th><th>Estado</th></tr></thead>
              <tbody>
                {D.BENEFITS.slice(0, 6).map((b, i) => {
                  const c = D.CLIENTS[i % D.CLIENTS.length];
                  return (
                    <tr key={i} className="hov">
                      <td><div style={{ display: "flex", alignItems: "center", gap: 12 }}><Avatar name={c.name} hue={c.hue} size={32} /><span style={{ fontWeight: 500 }}>{c.name}</span></div></td>
                      <td><div style={{ display: "flex", alignItems: "center", gap: 10 }}><span style={{ width: 32, height: 32, borderRadius: 9, background: b.color, display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}><Icon name={b.emoji} size={14} /></span>{b.name}</div></td>
                      <td style={{ color: "var(--accent)", fontWeight: 600 }}>−{b.points} pts</td>
                      <td>hace {i + 1}h</td>
                      <td><Badge tone="success" dot>Confirmado</Badge></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
          {tab === "points" && (
            <div style={{ padding: 24 }}>
              <LineChart data={[120, 240, 180, 320, 290, 460, 380]} labels={["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"]} height={240} />
            </div>
          )}
        </Card>
      </div>
    </>
  );
}

window.VisitModal = VisitModal;
window.BizVisit = BizVisit;
window.BizBenefits = BizBenefits;
window.BizRules = BizRules;
window.BizRedeem = BizRedeem;
window.BizHistory = BizHistory;
