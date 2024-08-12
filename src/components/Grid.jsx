export default function Grid({ children }) {
  return (
    <section
      className="grid gap-6"
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(18rem, 1fr))`,
      }}
    >
      {children}
    </section>
  );
}
