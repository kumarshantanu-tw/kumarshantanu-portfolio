import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  compact?: boolean;
};

export default function Card({
  children,
  className,
  hover = true,
  glass = true,
  compact = false,
}: CardProps) {
  return (
    <div
      className={clsx(
        "group relative overflow-hidden rounded-3xl border border-slate-800 transition-all duration-500",

        glass
          ? "bg-slate-900/60 backdrop-blur-xl"
          : "bg-slate-900",

        compact ? "p-5" : "p-8",

        hover && [
          "hover:-translate-y-2",
          "hover:border-cyan-500/40",
          "hover:shadow-[0_25px_60px_rgba(34,211,238,0.12)]",
        ],

        className
      )}
    >
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 transition-opacity duration-500",

          hover
            ? "opacity-0 group-hover:opacity-100"
            : "opacity-100",

          "bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent"
        )}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}