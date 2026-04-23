type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

const PageHeader = ({ eyebrow, title, subtitle }: Props) => (
  <section className="gradient-leaf text-primary-foreground">
    <div className="container py-16 md:py-24 text-center">
      {eyebrow && (
        <span className="inline-block px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-semibold uppercase tracking-wider">
          {eyebrow}
        </span>
      )}
      <h1 className="mt-4 font-display text-4xl md:text-6xl">{title}</h1>
      {subtitle && <p className="mt-5 max-w-2xl mx-auto text-primary-foreground/85 text-lg">{subtitle}</p>}
    </div>
  </section>
);

export default PageHeader;
