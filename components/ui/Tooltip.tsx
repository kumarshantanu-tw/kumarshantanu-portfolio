type TooltipProps = {
    children: React.ReactNode;
    content: string;
  };
  
  export default function Tooltip({
    children,
    content,
  }: TooltipProps) {
    return (
      <div className="group relative inline-flex">
        {children}
  
        {/* Tooltip */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-full
            left-auto
            z-50
            mb-4
            w-72
            right-0
            rounded-2xl
            border
            border-slate-700
            bg-slate-900/95
            p-4
            opacity-0
            shadow-2xl
            backdrop-blur-xl
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:opacity-100
          "
        >
          {/* Title */}
          <p className="mb-2 text-sm font-semibold text-cyan-400">
            📄 Documentation Samples
          </p>
  
          {/* Description */}
          <p className="text-xs leading-6 text-slate-300">
            {content}
          </p>
  
          {/* Arrow */}
          <div
            className="
              absolute
              left-4/5
              top-full
              h-3
              w-3
              -translate-x-1/2
              rotate-45
              border-b
              border-r
              border-slate-700
              bg-slate-900
            "
          />
        </div>
      </div>
    );
  }