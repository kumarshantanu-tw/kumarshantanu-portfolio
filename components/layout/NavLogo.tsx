import Link from "next/link";

export default function NavLogo() {
  return (
    <Link
      href="#home"
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-slate-800
        bg-slate-900/70
        text-lg
        font-bold
        text-cyan-400
        transition-all
        duration-300
        hover:-translate-y-0.5
hover:border-cyan-400/60
hover:bg-slate-800
hover:text-cyan-300
      "
    >
      KS
    </Link>
  );
}