import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Eato home"
      className="group inline-flex items-center gap-4 rounded-md p-1 no-underline"
    >
      <span className="ring-primary/20 bg-primary/10 dark:bg-primary/20 text-primary inline-flex size-10 items-center justify-center rounded-full shadow-xs ring-1 transition-colors">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Serving cloche (food) + subtle spark (AI) */}
          <path d="M4 16h16" />
          <path d="M6 16a6 6 0 0 1 12 0" />
          <circle cx="12" cy="7.5" r="1" />
          <path d="M18 4.75v2.5" />
          <path d="M16.75 6h2.5" />
        </svg>
      </span>
      <span className="text-foreground group-hover:text-primary text-2xl font-extrabold tracking-tight transition-colors">
        Eato
      </span>
    </Link>
  );
};

export default Logo;
