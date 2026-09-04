// Saytda istifadə olunan bütün ikonlar. Hamısı `currentColor` ilə işləyir,
// yəni rəngi Tailwind-in `text-*` klassı ilə idarə olunur.

export function MercedesStar({ className = 'h-10 w-10', strokeWidth = 3 }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="46" />
      {/* Üç şüalı ulduz: yuxarı, sol-aşağı, sağ-aşağı */}
      <path d="M50 50 V4 M50 50 L10 73 M50 50 L90 73" strokeLinecap="butt" />
    </svg>
  );
}

export function CarIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11h.5a1.5 1.5 0 0 1 1.5 1.5V16a1 1 0 0 1-1 1h-1v.5a1.5 1.5 0 0 1-3 0V17H8v.5a1.5 1.5 0 0 1-3 0V17H4a1 1 0 0 1-1-1v-3.5A1.5 1.5 0 0 1 4.5 11H5zm2.1 0h9.8l-1.1-3.4a.5.5 0 0 0-.5-.35H8.7a.5.5 0 0 0-.5.35L7.1 11zM6.5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm11 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  );
}

// --- Kateqoriya (kuzov növü) ikonları ---
// Hər biri fərqli avtomobil siluetı. currentColor ilə işləyir.

export function SedanIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 14l1.5-1 2-3.5A2 2 0 0 1 8.3 8.5h6.4a2 2 0 0 1 1.6.8L19 13l2 1v2h-2" />
      <path d="M5 16H3v-2" />
      <path d="M8.5 16h7" />
      <circle cx="7" cy="16.5" r="1.6" />
      <circle cx="17" cy="16.5" r="1.6" />
    </svg>
  );
}

export function SuvIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 15v-2l1.5-1 1.5-3.2A2 2 0 0 1 7.8 7.6h7.2a2 2 0 0 1 1.5.7L20 12l1 1v2h-2" />
      <path d="M5 15H3" />
      <path d="M9 8v3.5M14 8v3.5M6 11.5h13" />
      <path d="M8.5 15h7" />
      <circle cx="7" cy="15.5" r="1.7" />
      <circle cx="17" cy="15.5" r="1.7" />
    </svg>
  );
}

export function CoupeIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 15l1-1 3-4c.6-.8 1.4-1.2 2.5-1.2h4c1.6 0 3 .8 4.2 2L21 14v1h-2" />
      <path d="M5 15H3v-1" />
      <path d="M8.5 15h7" />
      <circle cx="7" cy="15.5" r="1.6" />
      <circle cx="17" cy="15.5" r="1.6" />
    </svg>
  );
}

export function CabrioletIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 15l1-1 2.5-2.8" />
      <path d="M6.5 11.2C8 9.7 10 9 12 9c2.3 0 4.4.9 6 2.6L21 14v1h-2" />
      <path d="M5 15H3v-1" />
      <path d="M8.5 15h7" />
      <circle cx="7" cy="15.5" r="1.6" />
      <circle cx="17" cy="15.5" r="1.6" />
    </svg>
  );
}

export function ElectricIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 14l1.5-1 2-3.5A2 2 0 0 1 8.3 8.5h6.4a2 2 0 0 1 1.6.8L19 13l2 1v2h-2" />
      <path d="M5 16H3v-2M8.5 16h7" />
      <circle cx="7" cy="16.5" r="1.6" />
      <circle cx="17" cy="16.5" r="1.6" />
      <path d="M12 4.5l-1.6 2.4h2.2L11 9.5" strokeWidth="1.2" />
    </svg>
  );
}

export function MpvIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 15V9.5c0-.8.6-1.5 1.5-1.5h11c.8 0 1.6.4 2 1.1L21 13v2h-2" />
      <path d="M5 15H3" />
      <path d="M9 8v7M14 8v6" />
      <path d="M8.5 15h7" />
      <circle cx="7" cy="15.5" r="1.7" />
      <circle cx="17" cy="15.5" r="1.7" />
    </svg>
  );
}

export function HatchbackIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 15l1-1 2.2-3.4A2 2 0 0 1 7.9 9.6h5.5c1 0 1.9.4 2.6 1.1L20 15h1v0h-2" />
      <path d="M5 15H3v-1" />
      <path d="M8.5 15h7" />
      <circle cx="7" cy="15.5" r="1.6" />
      <circle cx="17" cy="15.5" r="1.6" />
    </svg>
  );
}

export function MenuIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ArrowRight({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronLeft({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export function ChevronRight({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function FacebookIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

export function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ChevronUp({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 15l6-6 6 6" />
    </svg>
  );
}

export function GlobeIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.4 2.5 15.6 0 18M12 3c-2.5 2.4-2.5 15.6 0 18" />
    </svg>
  );
}
