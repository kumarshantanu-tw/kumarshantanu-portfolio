{/*} "use client";

type ViewerDotsProps = {
  total: number;
  selected: number;
  onSelect: (index: number) => void;
};

export default function ViewerDots({
  total,
  selected,
  onSelect,
}: ViewerDotsProps) {
  return (
    <div className="mt-10 flex items-center justify-center gap-3">
      {Array.from({ length: total }).map((_, index) => {
        const active = selected === index;

        return (
          <button
            key={index}
            type="button"
            aria-label={`Go to page ${index + 1}`}
            onClick={() => onSelect(index)}
            className={`
              relative
              overflow-hidden
              rounded-full
              transition-all
              duration-300
              ${
                active
                  ? "h-2.5 w-12 bg-cyan-400"
                  : "h-2.5 w-2.5 bg-white/20 hover:bg-cyan-400/50"
              }
            `}
          >
            {active && (
              <span className="absolute inset-0 animate-pulse bg-cyan-300/40" />
            )}
          </button>
        );
      })}
    </div>
  );
} */}