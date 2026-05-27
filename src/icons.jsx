// Icon component using lucide global
function Icon({ name, size = 20, className = "", strokeWidth, style }) {
  const ref = React.useRef(null);
  React.useLayoutEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = "";
    const tag = document.createElement("i");
    tag.setAttribute("data-lucide", name);
    ref.current.appendChild(tag);
    try {
      window.lucide.createIcons({ nodes: [tag] });
      const svg = ref.current.querySelector("svg");
      if (svg) {
        svg.setAttribute("width", size);
        svg.setAttribute("height", size);
        if (strokeWidth) svg.setAttribute("stroke-width", strokeWidth);
      }
    } catch (e) {}
  }, [name, size, strokeWidth]);
  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-flex", width: size, height: size, lineHeight: 0, ...style }}
    />
  );
}

window.Icon = Icon;
