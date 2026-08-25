import { Link } from 'react-router-dom';

// Mercedes saytındaki "pill" (tam yumru) formalı düymələr.
// İstifadəsi:
//   <Button to="/modeller">Ətraflı</Button>          -> router linki
//   <Button href="tel:+994...">Zəng et</Button>      -> xarici link
//   <Button onClick={fn} variant="outline">...</Button>

const VARIANTS = {
  primary: 'bg-mb-blue text-white hover:bg-mb-blue-dark',
  outline: 'border border-white text-white hover:bg-white hover:text-mb-black',
  'outline-dark': 'border border-mb-black text-mb-black hover:bg-mb-black hover:text-white',
  dark: 'bg-mb-black text-white hover:bg-mb-ink',
  light: 'bg-white text-mb-black hover:bg-mb-silver',
};

const SIZES = {
  sm: 'h-9 px-5 text-xs',
  md: 'h-11 px-7 text-sm',
  lg: 'h-12 px-8 text-sm sm:px-10 sm:text-base',
};

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-full font-medium',
    'transition-colors duration-300 ease-mb',
    VARIANTS[variant] ?? VARIANTS.primary,
    SIZES[size] ?? SIZES.md,
    className,
  ].join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
