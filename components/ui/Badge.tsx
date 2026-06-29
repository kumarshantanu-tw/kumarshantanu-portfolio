type BadgeVariant =
  | "default"
  | "primary"
  | "success"
  | "warning";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
};

const variants: Record<BadgeVariant, string> = {
  default: `
    border-cyan-500/20
    bg-cyan-500/10
    text-cyan-300

    hover:border-cyan-400/50
    hover:bg-cyan-400/20
    hover:text-cyan-200
    hover:shadow-[0_10px_25px_rgba(34,211,238,0.18)]
  `,

  primary: `
    border-cyan-400/40
    bg-cyan-400/20
    text-cyan-200

    uppercase
    tracking-wider
    font-semibold

    hover:bg-cyan-400/30
    hover:border-cyan-300
  `,

  success: `
    border-emerald-500/20
    bg-emerald-500/10
    text-emerald-300

    hover:bg-emerald-500/20
    hover:border-emerald-400
  `,

  warning: `
    border-amber-500/20
    bg-amber-500/10
    text-amber-300

    hover:bg-amber-500/20
    hover:border-amber-400
  `,
};

export default function Badge({
  children,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full

        px-4
        py-2

        text-sm
        font-medium

        backdrop-blur-md

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1

        cursor-default

        ${variants[variant]}
      `}
    >
      {children}
    </span>
  );
}