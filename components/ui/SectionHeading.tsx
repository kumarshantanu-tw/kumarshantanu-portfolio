type SectionHeadingProps = {
    eyebrow?: string;
    title: string;
    description?: string;
  };
  
  export default function SectionHeading({
    eyebrow,
    title,
    description,
  }: SectionHeadingProps) {
    return (
      <div className="mb-16 max-w-3xl">
  
        {eyebrow && (
          <p
            className="
              mb-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-cyan-400
            "
          >
            {eyebrow}
          </p>
        )}
  
        <h2
          className="
            text-4xl
            font-black
            leading-tight
            text-white
            md:text-5xl
          "
        >
          {title}
        </h2>
  
        {description && (
          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-400
            "
          >
            {description}
          </p>
        )}
  
      </div>
    );
  }