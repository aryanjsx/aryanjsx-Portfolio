export default function Section({ children, className = "", id, style = {} }) {
  return (
    <section className={className} id={id} style={{ padding: "3rem 0", ...style }}>
      {children}
    </section>
  );
}
